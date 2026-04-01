// pages/split-pdf/index.page.jsx
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Scissors,
  FileText,
  ListOrdered,
  Download,
  CheckCircle,
  Upload,
  Lock,
  Link as LinkIcon,
  Gauge,
} from "lucide-react";
import { useDropzone } from "react-dropzone";
import { PDFDocument } from "pdf-lib";
import { incrementPdfUsageCount, incrementPdfExportCount } from "/src/utils/pdfUsageCounter.js";
import { trackPdfUpload, trackToolUsage, trackPdfDownload } from "/src/utils/analytics.js";
import { getToolName } from "/src/utils/pageToolNames.js";
import SiteNav from "/src/components/SiteNav.jsx";

const formatBytes = (size) => {
  if (!Number.isFinite(size)) return "";
  if (size >= 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  if (size >= 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${size} B`;
};

const parsePageInput = (input, maxPages) => {
  const tokens = (input || "")
    .replace(/\s+/g, " ")
    .split(/[, ]+/)
    .map((t) => t.trim())
    .filter(Boolean);
  const set = new Set();
  const badTokens = [];
  let selectAll = false;

  for (const token of tokens) {
    const lower = token.toLowerCase();
    if (lower === "all" || token === "*") {
      selectAll = true;
      break;
    }

    const rangeMatch = token.match(/^(\d+)\s*-\s*(\d+)$/);
    if (rangeMatch) {
      let start = parseInt(rangeMatch[1], 10);
      let end = parseInt(rangeMatch[2], 10);
      if (!Number.isFinite(start) || !Number.isFinite(end)) {
        badTokens.push(token);
        continue;
      }
      if (start > end) [start, end] = [end, start];
      if (end < 1 || start > maxPages) {
        badTokens.push(token);
        continue;
      }
      start = Math.max(1, start);
      end = Math.min(maxPages, end);
      for (let i = start; i <= end; i += 1) set.add(i);
      continue;
    }

    const num = parseInt(token, 10);
    if (Number.isFinite(num) && num >= 1 && num <= maxPages) {
      set.add(num);
    } else {
      badTokens.push(token);
    }
  }

  if (selectAll) {
    for (let i = 1; i <= maxPages; i += 1) set.add(i);
  }

  return { pages: Array.from(set).sort((a, b) => a - b), badTokens };
};

function SplitDropZone() {
  const [fileInfo, setFileInfo] = useState(null); // { name, size, pages }
  const [rangeText, setRangeText] = useState("");
  const [selectedPages, setSelectedPages] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [isSplitting, setIsSplitting] = useState(false);
  const pdfRef = useRef(null);
  const bytesRef = useRef(null);

  const reset = () => {
    setSelectedPages([]);
    setRangeText("");
    setStatus("");
    setError("");
    pdfRef.current = null;
    bytesRef.current = null;
  };

  const onDrop = useCallback(async (acceptedFiles, fileRejections) => {
    if (fileRejections?.length) {
      setError("Only PDF files are supported for splitting.");
      return;
    }
    const file = acceptedFiles?.[0];
    if (!file) return;
    setStatus("Loading PDF...");
    setError("");
    try {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages =
        typeof pdf.getPageCount === "function"
          ? pdf.getPageCount()
          : pdf.getPages().length;
      pdfRef.current = pdf;
      bytesRef.current = bytes;
      const info = {
        name: file.name || "document.pdf",
        size: file.size || bytes.byteLength || 0,
        pages,
      };
      setFileInfo(info);
      const allPages = Array.from({ length: pages }, (_, i) => i + 1);
      setSelectedPages(allPages);
      setRangeText("all");

      // Track PDF upload
      trackPdfUpload({
        source: "split-pdf",
        toolName: getToolName(),
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
      });

      // Track tool usage  
      trackToolUsage({ toolName: getToolName() });

      try {
        await incrementPdfUsageCount();
      } catch { }
      setStatus(`Loaded ${info.name} (${pages} pages)`);
    } catch (err) {
      console.error("Failed to read PDF", err);
      setError("Failed to read the PDF. Please try another file.");
      reset();
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
    disabled: isSplitting,
    useFsAccessApi: false,
  });

  const pageNumbers = useMemo(
    () =>
      fileInfo
        ? Array.from({ length: fileInfo.pages }, (_, i) => i + 1)
        : [],
    [fileInfo]
  );

  const updateFromRangeText = useCallback(
    (value) => {
      setRangeText(value);
      if (!fileInfo) return;
      const { pages, badTokens } = parsePageInput(value, fileInfo.pages);
      setSelectedPages(pages);
      if (!pages.length) {
        setError("No valid pages selected. Use 1,3,5-8 or type 'all'.");
      } else if (badTokens.length) {
        setError(`Ignored invalid entries: ${badTokens.join(", ")}`);
      } else {
        setError("");
      }
    },
    [fileInfo]
  );

  const togglePage = useCallback((pageNum) => {
    setSelectedPages((prev) => {
      const set = new Set(prev);
      if (set.has(pageNum)) set.delete(pageNum);
      else set.add(pageNum);
      const next = Array.from(set).sort((a, b) => a - b);
      setRangeText(next.join(", "));
      setError(next.length ? "" : "Select at least one page.");
      return next;
    });
  }, []);

  const selectAll = useCallback(() => {
    if (!fileInfo) return;
    const all = Array.from({ length: fileInfo.pages }, (_, i) => i + 1);
    setSelectedPages(all);
    setRangeText("all");
    setError("");
  }, [fileInfo]);

  const clearSelection = useCallback(() => {
    setSelectedPages([]);
    setRangeText("");
    setError("Select at least one page to split.");
  }, []);

  const handleSplit = useCallback(async () => {
    if (!fileInfo || !bytesRef.current) {
      setError("Upload a PDF first.");
      return;
    }
    if (!selectedPages.length) {
      setError("Select at least one page to split.");
      return;
    }

    setIsSplitting(true);
    setStatus("Creating split PDF...");
    setError("");
    try {
      const sourcePdf =
        pdfRef.current || (await PDFDocument.load(bytesRef.current));
      const result = await PDFDocument.create();
      const indices = selectedPages
        .map((p) => p - 1)
        .filter((n) => n >= 0 && n < (fileInfo.pages || 0));
      const copied = await result.copyPages(sourcePdf, indices);
      copied.forEach((p) => result.addPage(p));

      const mergedBytes = await result.save();
      const blob = new Blob([mergedBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const base = fileInfo.name.replace(/\.[^/.]+$/, "") || "document";
      a.href = url;
      a.download = `${base}-pages-${selectedPages.join("-")}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);

      // Track download event
      trackPdfDownload({
        toolName: getToolName(),
        fileName: `${base}-pages-${selectedPages.join("-")}.pdf`,
        fileSize: blob.size,
        format: "pdf"
      });

      // Count export
      try { await incrementPdfExportCount(); } catch { }

      try {
        await incrementPdfUsageCount();
      } catch { }
      setStatus("Split complete. Download should start automatically.");
    } catch (err) {
      console.error("split failed", err);
      setError("Failed to split. Please try again.");
    } finally {
      setIsSplitting(false);
    }
  }, [fileInfo, selectedPages]);

  return (
    <div
      id="split-box"
      className="bg-white border rounded-2xl p-6 shadow-lg space-y-4"
    >
      <div
        {...getRootProps()}
        className={[
          "relative w-full border-2 border-dashed rounded-xl transition-colors cursor-pointer",
          isDragActive
            ? "border-blue-500 bg-blue-50/70"
            : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/40",
          isSplitting ? "opacity-70" : "",
          "p-6 text-center",
        ].join(" ")}
        aria-label="Drop a PDF to split"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-3">
          <div className="h-14 w-14 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
            <Upload className="h-7 w-7" />
          </div>
          <p className="text-xl font-semibold text-gray-900">
            Drop your PDF here or click to choose
          </p>
          <p className="text-sm text-gray-600">
            Split a PDF, extract specific pages or remove pages you do not need.
            Use page numbers or ranges like 1,3,5-8.
          </p>
          <p className="text-xs text-gray-500 inline-flex items-center gap-1 justify-center">
            <Lock className="h-4 w-4" />
            Splitting runs in your browser — files stay on this device.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-gray-700">
          {fileInfo
            ? `${fileInfo.name} • ${fileInfo.pages} pages • ${formatBytes(
              fileInfo.size
            )}`
            : "Upload one PDF to get started."}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            open();
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition"
          disabled={isSplitting}
        >
          <Upload className="h-4 w-4" />
          Choose PDF
        </button>
      </div>

      <div className="space-y-3">
        <label
          className="block text-sm font-semibold text-gray-800"
          htmlFor="page-range-input"
        >
          Pick pages to keep (click buttons or enter ranges)
        </label>
        <input
          id="page-range-input"
          type="text"
          value={rangeText}
          onChange={(e) => updateFromRangeText(e.target.value)}
          placeholder={fileInfo ? "e.g. 1,3,5-8 or all" : "Upload a PDF first"}
          disabled={!fileInfo || isSplitting}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={selectAll}
            disabled={!fileInfo || isSplitting}
            className="px-3 py-2 text-sm rounded-lg border border-blue-600 text-blue-700 hover:bg-blue-50 disabled:opacity-50"
          >
            Select all pages
          </button>
          <button
            type="button"
            onClick={clearSelection}
            disabled={!fileInfo || isSplitting}
            className="px-3 py-2 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            Clear selection
          </button>
          {fileInfo && (
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <span className="inline-flex h-7 px-2 items-center rounded-full bg-blue-50 text-blue-700 font-semibold">
                {selectedPages.length} / {fileInfo.pages} selected
              </span>
              {status && <span className="text-gray-500">{status}</span>}
            </div>
          )}
        </div>
      </div>

      {fileInfo && (
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Quick-select pages:</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-64 overflow-y-auto pr-1">
            {pageNumbers.map((num) => {
              const active = selectedPages.includes(num);
              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => togglePage(num)}
                  disabled={isSplitting}
                  className={[
                    "text-sm px-2 py-2 rounded-md border transition",
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  Page {num}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleSplit}
          disabled={isSplitting || !fileInfo || !selectedPages.length}
          className={[
            "inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold shadow",
            isSplitting || !fileInfo || !selectedPages.length
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700",
          ].join(" ")}
        >
          <Scissors className="h-5 w-5" />
          {isSplitting ? "Splitting..." : "Split & Download"}
        </button>
        <div className="text-sm text-gray-600">
          {status ||
            "We’ll create a new PDF with only the pages you keep and download it automatically."}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

function SplitPDF() {
  const benefits = [
    "Split PDF online free — no signup or account",
    "Extract specific pages or page ranges (e.g., 1-3, 7-10)",
    "Remove pages from PDF by keeping only the ones you need",
    "Runs in your browser — private and secure, no upload required for processing",
    "Fast on desktop and mobile (Windows, Mac, iPhone, Android)",
    "Keeps original PDF quality and layout",
  ];

  const useCases = [
    {
      title: "Extract a single page from a PDF",
      body: "Save just one page (like a receipt, signature page or certificate) as a new PDF instead of sharing the entire document.",
    },
    {
      title: "Split large PDFs into smaller documents",
      body: "Separate a long report, book or manual into smaller PDFs by chapters or sections so they are easier to send and download.",
    },
    {
      title: "Remove pages you don’t need",
      body: "Delete cover pages, blank pages or terms you don’t need by selecting only the pages you want to keep in the new file.",
    },
    {
      title: "Submit documents for online applications",
      body: "Many government and university portals ask for specific pages only. Extract just those pages and upload a smaller, focused PDF.",
    },
  ];

  return (
    <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Split PDF Online Free
              <br />
              <span className="text-blue-600">
                Extract &amp; remove pages — no signup, no watermark
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-3">
              Use this free online PDF splitter to separate PDF pages, extract
              specific page ranges or remove pages you don’t need. Everything
              runs in your browser for privacy.
            </p>
            <p className="text-base text-gray-700 mb-8">
              Perfect when you just want to{" "}
              <strong>extract pages from a PDF</strong>,{" "}
              <strong>delete pages from a PDF</strong> or keep a few selected
              pages as a new document — with no signup and no watermark on the
              output.
            </p>
            <div className="flex flex-col gap-3 md:items-start items-center">
              <a
                href="#split-box"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center space-x-2 shadow-lg hover:bg-blue-700"
              >
                <Scissors className="h-5 w-5" />
                <span>Start — Split PDF</span>
              </a>
              <a
                href="#how-to"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center space-x-2 border shadow-sm hover:shadow-md"
              >
                <FileText className="h-5 w-5" />
                <span>How it works (3 steps)</span>
              </a>
            </div>
          </div>
          <div className="w-full">
            <SplitDropZone />
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="flex-1">
        {/* Why use our splitter */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why use this Split PDF tool?
              </h2>
              <p className="text-gray-700 mb-4">
                Many PDF splitter tools limit you to a few free uses or add
                watermarks to your pages. This tool focuses on{" "}
                <strong>simple, fast page extraction and removal</strong> with
                no signup and no watermark.
              </p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border rounded-xl p-6 text-center shadow">
              <ListOrdered className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Extract pages in seconds
              </h3>
              <p className="text-gray-600 mb-3">
                Type page numbers or ranges (like 1–3, 7–10), or click the page
                buttons to choose exactly what you want to keep.
              </p>
              <p className="text-gray-600 mb-6">
                We create a new PDF with your selected pages, leaving the
                original file unchanged.
              </p>
              <a
                href="#split-box"
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow inline-flex items-center space-x-2 transition"
              >
                <Download className="h-5 w-5" />
                <span>Open Splitter</span>
              </a>
            </div>
          </div>
        </section>

        {/* Split & Extract Intents */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Specific Split &amp; Extract Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  href: "/extract-pages-from-pdf/",
                  title: "Extract Pages",
                  desc: "Save specific pages as a new PDF.",
                  icon: FileText,
                },
                {
                  href: "/delete-pages-from-pdf-online/",
                  title: "Delete Pages",
                  desc: "Remove unwanted pages from your file.",
                  icon: Scissors,
                },
                {
                  href: "/separate-pdf-pages-offline/",
                  title: "Offline Splitter",
                  desc: "Split/extract locally without uploads.",
                  icon: Lock,
                },
                {
                  href: "/split-pdf-in-half/",
                  title: "Split in Half",
                  desc: "Quickly split into two equal parts.",
                  icon: Scissors,
                },
                {
                  href: "/split-pdf-by-size/",
                  title: "Split by Size",
                  desc: "Split into parts (e.g., 10MB, 5MB).",
                  icon: Gauge,
                },
              ].map((card) => (
                <a
                  key={card.href}
                  href={card.href}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition group"
                >
                  <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">
              Split PDF or extract pages — common use cases
            </h2>
            <p className="text-gray-700 mb-4">
              People around the world use PDF splitting tools to separate PDF
              pages and focus on just the parts they need. Here are a few common
              scenarios:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((item) => (
                <details
                  key={item.title}
                  className="bg-white p-4 rounded-lg border border-gray-200"
                >
                  <summary className="font-semibold cursor-pointer">
                    {item.title}
                  </summary>
                  <p className="mt-2 text-gray-700 text-sm">{item.body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Remove pages from PDF / Extract pages */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Remove pages from PDF quickly
              </h2>
              <p className="text-gray-700 mb-2">
                Instead of editing the original document, create a cleaner
                version by{" "}
                <strong>removing pages from your PDF</strong>. Select only the
                pages you want to keep and export a new file without the
                unnecessary parts.
              </p>
              <p className="text-gray-700 text-sm">
                This is useful when sending contracts, application forms or
                scanned documents where you must hide internal notes, extra
                pages or blank sheets.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Extract pages from a PDF as a new file
              </h2>
              <p className="text-gray-700 mb-2">
                If you only need a few pages out of a long document,{" "}
                <strong>extract pages from the PDF</strong> and save them into a
                separate file. You can share that file without exposing the
                rest of the original document.
              </p>
              <p className="text-gray-700 text-sm">
                Use this when you want to send only a chapter, a specific report
                section or a single signed page to someone else.
              </p>
            </div>
          </div>
        </section>

        {/* How-to */}
        <section id="how-to" className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">
              How to split a PDF online (3 steps)
            </h2>
            <ol className="space-y-6 list-decimal ml-6 text-gray-700">
              <li id="step-upload">
                <h3 className="font-semibold">1) Upload your PDF</h3>
                <p className="text-gray-600">
                  Drag &amp; drop your PDF into the splitter or click to choose
                  a file. Processing runs in your browser using client-side
                  code, so your document stays on your device.
                </p>
              </li>
              <li id="step-select">
                <h3 className="font-semibold">2) Choose pages or ranges</h3>
                <p className="text-gray-600">
                  Select individual pages or type ranges like 1-3, 7-10. Use the
                  grid of page buttons to quickly toggle pages on or off until
                  you have exactly what you need.
                </p>
              </li>
              <li id="step-download">
                <h3 className="font-semibold">3) Split &amp; download</h3>
                <p className="text-gray-600">
                  Click “Split &amp; Download” to create a new PDF with just
                  those pages. Your download starts instantly, with no
                  watermark, no signup and no change to your original file.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Security & privacy */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-3">
              Security &amp; privacy for splitting PDFs
            </h2>
            <p className="text-gray-700 mb-3">
              Some PDF tools upload your files to a remote server. This Split
              PDF page uses a client-side library to handle pages directly in
              your browser:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Local processing</strong> — page extraction runs inside
                your browser using JavaScript.
              </li>
              <li>
                <strong>No signup or account</strong> — you can separate PDF
                pages without providing an email.
              </li>
              <li>
                <strong>No watermark</strong> — downloaded PDFs contain only
                your pages, with no branding.
              </li>
              <li>
                You can close the tab or clear your browser data to remove
                recent files from memory.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Split PDF — FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How do I split a PDF online for free?",
                  a: "Open this Split PDF tool, upload your document, select pages or ranges and click Split & Download. You get a new PDF with just those pages, with no signup and no watermark.",
                },
                {
                  q: "Can I extract specific pages from a PDF?",
                  a: (
                    <>
                      Yes. Enter pages manually or use our dedicated{" "}
                      <a href="/extract-pages-from-pdf/" className="text-blue-600 hover:underline">
                        Extract Pages tool
                      </a>
                      . The output contains only the pages you selected.
                    </>
                  ),
                },
                {
                  q: "Can I remove pages from a PDF?",
                  a: (
                    <>
                      Yes. Select the pages you want to keep, and the others will be removed. Or use the{" "}
                      <a href="/delete-pages-from-pdf-online/" className="text-blue-600 hover:underline">
                        Delete Pages tool
                      </a>{" "}
                      if you prefer selecting what to delete.
                    </>
                  ),
                },
                {
                  q: "Can I split a PDF in half?",
                  a: (
                    <>
                      Yes. You can manually select the first half ranges, or use the{" "}
                      <a href="/split-pdf-in-half/" className="text-blue-600 hover:underline">
                        Split PDF in Half
                      </a>{" "}
                      tool for quick one-click splitting.
                    </>
                  ),
                },
                {
                  q: "Can I split a PDF by file size (e.g., 10MB parts)?",
                  a: (
                    <>
                      Yes, you can use our{" "}
                      <a href="/split-pdf-by-size/" className="text-blue-600 hover:underline">
                        Split by Size
                      </a>{" "}
                      helper to estimate page chunks that fit your target file size (10MB, 5MB, etc.).
                    </>
                  ),
                },
                {
                  q: "Is my PDF uploaded to your servers?",
                  a: "No. Splitting is done with client-side processing in your browser. The PDF pages are handled locally on your device rather than on a remote server.",
                },
                {
                  q: "Does the Split PDF tool work on mobile?",
                  a: "Yes. You can separate or extract pages from PDFs on iPhone or Android using a modern browser like Safari or Chrome.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="bg-white p-4 rounded-lg border border-gray-200"
                >
                  <summary className="font-semibold cursor-pointer">
                    {item.q}
                  </summary>
                  <div className="mt-2 text-gray-700">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related tools */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <LinkIcon className="h-5 w-5" />
              More free PDF tools
            </h2>
            <p className="text-gray-700 mb-3">
              After you split or extract pages from your PDF, you can keep
              editing it with these tools:
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
              <li>
                <a href="/merge-pdf/" className="underline hover:text-blue-900">
                  Merge PDF files
                </a>
              </li>
              <li>
                <a href="/compress-pdf/" className="underline hover:text-blue-900">
                  Compress PDF file size
                </a>
              </li>
              <li>
                <a href="/edit-pdf/" className="underline hover:text-blue-900">
                  Edit PDF text online
                </a>
              </li>
              <li>
                <a href="/annotate-pdf/" className="underline hover:text-blue-900">
                  Annotate &amp; highlight PDF
                </a>
              </li>
              <li>
                <a href="/add-image-pdf/" className="underline hover:text-blue-900">
                  Add image to PDF
                </a>
              </li>
              <li>
                <a href="/sign-pdf/" className="underline hover:text-blue-900">
                  Sign PDF online
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © {new Date().getFullYear()} Free PDF Editor by TechRex. All rights
          reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/privacy/" className="hover:text-white">
            Privacy
          </a>
          <a href="/terms/" className="hover:text-white">
            Terms
          </a>
          <a href="/contact/" className="hover:text-white">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default { Page: SplitPDF };
