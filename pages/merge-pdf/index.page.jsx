// pages/merge-pdf/index.page.jsx
import React, { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import {
  FileText,
  Download,
  CheckCircle,
  Layers,
  FolderPlus,
  Upload,
  GripVertical,
  Trash2,
  ArrowUp,
  ArrowDown,
  Lock,
  Link as LinkIcon,
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

const makeId = () => {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch { }
  return `merge-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

function MergeDropZone() {
  const [queuedFiles, setQueuedFiles] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [draggingId, setDraggingId] = useState(null);

  const addFiles = useCallback((incoming) => {
    if (!incoming?.length) return;
    const mapped = incoming.map((file) => ({
      id: makeId(),
      file,
      name: file.name || "Untitled.pdf",
      size: file.size || 0,
    }));
    setQueuedFiles((prev) => [...prev, ...mapped]);
    mapped.forEach(() => {
      try {
        incrementPdfUsageCount();
      } catch { }
    });
    setStatus(mapped.length > 1 ? `Added ${mapped.length} files` : `Added ${mapped[0].name}`);
  }, []);

  const moveIndex = useCallback((from, to) => {
    setQueuedFiles((prev) => {
      if (from < 0 || to < 0 || from >= prev.length || to >= prev.length) return prev;
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }, []);

  const reorderById = useCallback((sourceId, targetId) => {
    if (!sourceId || !targetId || sourceId === targetId) return;
    setQueuedFiles((prev) => {
      const from = prev.findIndex((f) => f.id === sourceId);
      const to = prev.findIndex((f) => f.id === targetId);
      if (from === -1 || to === -1 || from === to) return prev;
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }, []);

  const removeFile = useCallback((id) => {
    setQueuedFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      if (fileRejections?.length) {
        setError("Only PDF files can be merged right now.");
      }
      if (acceptedFiles?.length) {
        setError("");
        addFiles(acceptedFiles);
      }
    },
    [addFiles]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: true,
    disabled: isMerging,
    useFsAccessApi: false,
  });

  const handleMerge = useCallback(async () => {
    if (!queuedFiles.length) {
      setError("Add at least one PDF to merge.");
      return;
    }
    setError("");
    setIsMerging(true);
    setStatus("Preparing merge...");

    // Track tool usage
    trackToolUsage({ toolName: getToolName() });

    try {
      const mergedPdf = await PDFDocument.create();
      for (let i = 0; i < queuedFiles.length; i += 1) {
        const current = queuedFiles[i];
        setStatus(`Adding ${current.name} (${i + 1}/${queuedFiles.length})`);
        const bytes = await current.file.arrayBuffer();
        const src = await PDFDocument.load(bytes);
        const copiedPages = await mergedPdf.copyPages(src, src.getPageIndices());
        copiedPages.forEach((p) => mergedPdf.addPage(p));
      }
      setStatus("Finalizing download...");
      const mergedBytes = await mergedPdf.save();
      const blob = new Blob([mergedBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `merged-${queuedFiles.length}-files.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);

      // Track download event
      trackPdfDownload({
        toolName: getToolName(),
        fileName: `merged-${queuedFiles.length}-files.pdf`,
        fileSize: blob.size,
        format: "pdf"
      });

      // Count export
      try { await incrementPdfExportCount(); } catch { }

      try {
        incrementPdfUsageCount();
      } catch { }
    } catch (err) {
      console.error("merge failed", err);
      setError("Failed to merge. Please try again.");
    } finally {
      setIsMerging(false);
    }
  }, [queuedFiles]);

  const canMerge = queuedFiles.length > 0 && !isMerging;

  return (
    <div id="merge-box" className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-[0_0_25px_rgba(139,92,246,0.2)] space-y-4">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <div
        {...getRootProps()}
        className={[
          "relative w-full border-2 border-dashed rounded-xl transition-colors cursor-pointer",
          isDragActive ? "border-primary-500 bg-primary-50/70" : "border-white/5 bg-[#091328]/50 hover:border-primary-400 hover:bg-primary-50/40",
          isMerging ? "opacity-70" : "",
          "p-6 text-center",
        ].join(" ")}
        aria-label="Drop PDFs to merge"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-3">
          <div className="h-14 w-14 rounded-2xl bg-primary-600/10 text-primary-600 flex items-center justify-center">
            <Upload className="h-7 w-7" />
          </div>
          <p className="text-xl font-semibold text-on-surface font-headline">Drop PDF files here or click to choose</p>
          <p className="text-sm text-on-surface-variant">
            Select two or more PDFs to combine into a single document. You can add more files after the first upload.
          </p>
          <p className="text-xs text-outline inline-flex items-center gap-1 justify-center">
            <Lock className="h-4 w-4" />
            Merging happens in your browser. Your PDFs stay on this device.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-700 font-semibold">
            {queuedFiles.length}
          </span>
          <span>file{queuedFiles.length === 1 ? "" : "s"} ready to merge</span>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            open();
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-4 py-2 font-semibold hover:scale-105 active:scale-95 transition-all transition"
          disabled={isMerging}
        >
          <FolderPlus className="h-4 w-4" />
          Add more files
        </button>
      </div>

      {queuedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-on-surface-variant">Drag the handle or use the arrows to reorder before merging.</p>
          <ul className="divide-y divide-gray-200 border border-white/5 rounded-xl bg-[#091328]/50 backdrop-blur-xl border border-white/5">
            {queuedFiles.map((item, index) => (
              <li
                key={item.id}
                className={`flex items-center gap-3 px-3 py-2 ${draggingId === item.id ? "bg-primary-50" : ""}`}
                draggable
                onDragStart={() => setDraggingId(item.id)}
                onDragEnd={() => setDraggingId(null)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  reorderById(draggingId, item.id);
                  setDraggingId(null);
                }}
              >
                <GripVertical className="h-5 w-5 text-gray-400 flex-shrink-0 cursor-grab" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-on-surface font-headline truncate">{item.name}</p>
                  <p className="text-xs text-outline">{formatBytes(item.size)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => moveIndex(index, index - 1)}
                    disabled={isMerging || index === 0}
                    className="p-2 rounded-md text-outline hover:text-primary-600 hover:bg-primary-50 disabled:opacity-40"
                    aria-label="Move up"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveIndex(index, index + 1)}
                    disabled={isMerging || index === queuedFiles.length - 1}
                    className="p-2 rounded-md text-outline hover:text-primary-600 hover:bg-primary-50 disabled:opacity-40"
                    aria-label="Move down"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFile(item.id)}
                    disabled={isMerging}
                    className="p-2 rounded-md text-outline hover:text-red-600 hover:bg-red-50 disabled:opacity-40"
                    aria-label="Remove file"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleMerge}
          disabled={!canMerge}
          className={[
            "inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)]",
            canMerge ? "bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all" : "bg-gray-200 text-outline cursor-not-allowed",
          ].join(" ")}
        >
          <Download className="h-5 w-5" />
          {isMerging ? "Merging..." : "Merge & Download"}
        </button>
        <div className="text-sm text-on-surface-variant">
          {status || "We will combine the PDFs and download the merged file automatically."}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

function MergePDF() {
  const benefits = [
    "Merge multiple PDF files into one document",
    "100% free forever — no signup or account",
    "No watermark or hidden limits on merges",
    "Drag to reorder PDFs before merging",
    "Browser-based PDF combiner — files stay on your device",
    "Works on Windows, Mac, Linux, iPhone, and Android",
  ];

  return (
    <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      {/* Hero */}
      <section className="digital-obsidian text-on-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="text-center md:text-left">
            <p className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[#091328]/50 backdrop-blur-xl border border-white/5/80 border text-xs font-semibold text-primary-700">
              <Layers className="h-4 w-4" />
              Free online PDF merger — no signup
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Merge PDF Online Free
              <br />
              <span className="text-primary-600">
                Combine PDF files into one — no watermark
              </span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-8">
              Use this free online PDF merger to combine multiple PDF files into a single document.
              Merging happens in your browser, so your PDFs never leave your device.
            </p>
            <div className="flex flex-col gap-3 md:items-start items-center">
              <a
                href="#merge-box"
                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
              >
                <FolderPlus className="h-5 w-5" />
                <span>Start Merging — Free</span>
              </a>
              <a
                href="#how-to"
                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
              >
                <FileText className="h-5 w-5" />
                <span>How it works (3 steps)</span>
              </a>
            </div>
          </div>
          <div className="w-full">
            <MergeDropZone />
          </div>
        </div>
      </section>

      {/* Why use our Merger? */}
      <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why use our PDF Merger?</h2>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 text-center shadow-[0_0_25px_rgba(139,92,246,0.2)]">
            <Layers className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-on-surface font-headline mb-3">Combine files in seconds</h2>
            <p className="text-on-surface-variant mb-6">
              Add PDFs, drag to reorder, and click merge. Get a clean combined PDF with the same fonts and layout.
            </p>
            <a
              href="#merge-box"
              className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-6 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] inline-flex items-center space-x-2 transition"
            >
              <Download className="h-5 w-5" />
              <span>Open PDF Merger</span>
            </a>
          </div>
        </div>
      </section>

      {/* Keyword-targeted / intent sections */}
      <section className="py-12 bg-[#091328]/50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-3">Merge multiple PDF files into one document</h2>
            <p className="text-on-surface-variant">
              Stop sending five attachments when you only need one. Merge contracts, reports, invoices, or lecture notes
              into a single PDF that&apos;s easier to share, upload, and archive. The order you choose in the list is the
              order your pages appear in the merged file.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Merge PDF online free — no signup, no watermark</h2>
            <p className="text-on-surface-variant">
              Many PDF combiner tools add watermarks or force you to create an account. This merger is different:
              it&apos;s 100% free, doesn&apos;t add logos, and does not require email or registration. Just open the page,
              merge your PDFs, and download the combined file.
            </p>
          </div>
        </div>
      </section>

      {/* Common use cases */}
      <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Popular ways to use the PDF merger</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#091328]/50 rounded-xl p-4 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <h3 className="font-semibold mb-2">Combine scanned pages</h3>
              <p className="text-on-surface-variant text-sm">
                Scan documents as separate PDFs and then merge them into one clean, ordered file for clients, HR, or school.
              </p>
            </div>
            <div className="bg-[#091328]/50 rounded-xl p-4 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <h3 className="font-semibold mb-2">Bundle reports and invoices</h3>
              <p className="text-on-surface-variant text-sm">
                Combine monthly invoices, statements, or project reports into a single PDF before you send or upload them.
              </p>
            </div>
            <div className="bg-[#091328]/50 rounded-xl p-4 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <h3 className="font-semibold mb-2">Merge PDFs on phone or tablet</h3>
              <p className="text-on-surface-variant text-sm">
                Use Safari or Chrome on iOS and Android to merge PDFs on the go, without installing extra apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How To */}
      <section id="how-to" className="py-12 bg-[#091328]/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">How to merge your PDFs online (3 steps)</h2>
          <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
            <li id="step-upload">
              <h3 className="font-semibold">1) Upload your PDFs</h3>
              <p className="text-on-surface-variant">
                Click <em>Start Merging</em> or drag &amp; drop your files into the merger. Add as many PDFs as you need.
              </p>
            </li>
            <li id="step-reorder">
              <h3 className="font-semibold">2) Reorder the files</h3>
              <p className="text-on-surface-variant">
                Drag to arrange the file order before merging. For page-level edits, you can use{" "}
                <a href="/split-pdf/" className="text-primary-600 hover:underline">
                  Split PDF
                </a>{" "}
                or{" "}
                <a href="/edit-pdf/" className="text-primary-600 hover:underline">
                  Edit PDF
                </a>{" "}
                first.
              </p>
            </li>
            <li id="step-download">
              <h3 className="font-semibold">3) Merge &amp; download</h3>
              <p className="text-on-surface-variant">
                Click <strong>Merge &amp; Download</strong> to create a single PDF. Your combined file downloads instantly —
                no watermark, no signup required.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Privacy & Trust */}
      <section className="py-12 bg-[#091328]/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
          <p className="text-on-surface-variant mb-3">
            TechRex is privacy-first. Merging happens <strong>entirely in your browser</strong> using client-side processing.
            Your PDFs are not uploaded to a remote server by default.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-on-surface-variant">
            <li>No signup, no watermark, no hidden limits</li>
            <li>Files stay on your device while merging</li>
            <li>TLS is used for any optional network requests</li>
            <li>Clear your browser storage if you want to remove local traces</li>
          </ul>
        </div>
      </section>

      {/* FAQ (visible, matches schema) */}
      <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How do I merge PDF files online for free?",
                a: "Open this Merge PDF tool, upload your files, drag to reorder, and click Merge & Download. Your combined PDF downloads instantly with no watermark.",
              },
              {
                q: "Is my file uploaded to a server?",
                a: "No. The merger processes PDFs in your browser using client-side code, so your documents stay on your device unless you choose to share them.",
              },
              {
                q: "Can I merge large PDFs and many files?",
                a: "Yes. You can add many multi-page PDFs. The practical limit depends on your device memory and browser, not an artificial cap.",
              },
              {
                q: "Does it work on iPhone and Android?",
                a: "Yes. The tool is mobile-friendly and works in Safari or Chrome on iOS and Android with no app installation.",
              },
              {
                q: "Can I remove or rotate pages before merging?",
                a: "Yes. For page-level tweaks such as removing or rotating pages, open the Edit PDF or Split PDF tools first, then merge the cleaned-up files.",
              },
            ].map((item, i) => (
              <details key={i} className="bg-[#091328]/50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">{item.q}</summary>
                <p className="mt-2 text-on-surface-variant">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="py-12 bg-[#091328]/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <LinkIcon className="h-5 w-5" />
            Related PDF tools
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
            <li>
              <a href="/split-pdf/" className="underline hover:text-primary-900">
                Split PDF pages
              </a>
            </li>
            <li>
              <a href="/compress-pdf/" className="underline hover:text-primary-900">
                Compress PDF file size
              </a>
            </li>
            <li>
              <a href="/edit-pdf/" className="underline hover:text-primary-900">
                Edit PDF text and pages
              </a>
            </li>
            <li>
              <a href="/add-image-pdf/" className="underline hover:text-primary-900">
                Add images to a PDF
              </a>
            </li>
            <li>
              <a href="/sign-pdf/" className="underline hover:text-primary-900">
                Sign a PDF online
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-on-primary mb-2">Ready to merge your PDFs?</h2>
          <p className="text-primary-100 mb-6">Combine files now — free, private, and lightning-fast.</p>
          <a
            href="#merge-box"
            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Open PDF Merger</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/privacy/" className="hover:text-on-primary">
            Privacy Policy
          </a>
          <a href="/terms/" className="hover:text-on-primary">
            Terms
          </a>
          <a href="/contact/" className="hover:text-on-primary">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default { Page: MergePDF };
