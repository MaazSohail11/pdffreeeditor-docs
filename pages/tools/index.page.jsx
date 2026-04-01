// pages/tools/index.page.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Menu,
  X,
  FileText,
  Edit3,
  Layers,
  SplitSquareVertical,
  PenTool,
  Image as ImageIcon,
  Search,
  ShieldCheck,
  Lock,
  Zap,
} from "lucide-react";
import SiteNav from "/src/components/SiteNav.jsx";

function ToolsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const tools = [
    {
      key: "edit",
      title: "Edit PDF (Text)",
      description: "Edit text in your PDF - change fonts, sizes, colors, and alignment directly in your browser.",
      path: "/edit-pdf/",
      icon: <Edit3 className="h-6 w-6" />,
      tags: ["edit pdf", "edit text", "replace text", "fonts", "colors", "no signup", "no watermark"],
      category: "Editing",
      cta: "Open Edit PDF",
    },
    {
      key: "add-image",
      title: "Add Image to PDF",
      description: "Insert pictures or logos. Drag to resize/rotate and place precisely.",
      path: "/add-image-pdf/",
      icon: <ImageIcon className="h-6 w-6" />,
      tags: ["add image", "insert logo", "stamp", "watermark", "overlay", "no signup"],
      category: "Editing",
      cta: "Open Add Image",
    },
    {
      key: "annotate",
      title: "Annotate & Highlight PDF",
      description: "Highlight, underline, and add notes or callouts for quick review.",
      path: "/annotate-pdf/",
      icon: <PenTool className="h-6 w-6" />,
      tags: ["highlight", "annotate pdf", "notes", "comment", "markup"],
      category: "Review",
      cta: "Open Annotate",
    },
    {
      key: "merge",
      title: "Merge PDF",
      description: "Combine multiple PDFs, reorder pages, and download instantly.",
      path: "/merge-pdf/",
      icon: <Layers className="h-6 w-6" />,
      tags: ["merge pdf", "combine", "append", "join"],
      category: "Pages",
      cta: "Open Merge",
    },
    {
      key: "split",
      title: "Split PDF",
      description: "Extract pages or split into multiple files. Simple and fast.",
      path: "/split-pdf/",
      icon: <SplitSquareVertical className="h-6 w-6" />,
      tags: ["split pdf", "extract pages", "separate", "ranges"],
      category: "Pages",
      cta: "Open Split",
    },
    {
      key: "compress",
      title: "Compress PDF",
      description: "Reduce PDF file size for faster emailing and uploads while keeping good readability.",
      path: "/compress-pdf/",
      icon: <FileText className="h-6 w-6" />,
      tags: ["compress pdf", "reduce size", "optimize", "smaller pdf"],
      category: "Pages",
      cta: "Open Compress PDF",
    },
    {
      key: "sign",
      title: "Sign PDF",
      description: "Draw, type, or upload a signature and place it anywhere. No watermark.",
      path: "/sign-pdf/",
      icon: <PenTool className="h-6 w-6" />,
      tags: ["sign pdf", "esign", "signature", "draw", "type", "upload"],
      category: "Signing & Forms",
      cta: "Open Signer",
    },
    {
      key: "ocr-make-searchable",
      title: "Make PDF Searchable (OCR)",
      description: "Run OCR on scanned PDFs to add an invisible text layer and make them searchable.",
      path: "/ocr/",
      icon: <Search className="h-6 w-6" />,
      tags: ["ocr", "searchable pdf", "scan to pdf", "text layer", "make searchable"],
      category: "OCR",
      cta: "Open OCR",
    },
    {
      key: "ocr-pdf-to-word",
      title: "OCR PDF to Word",
      description: "Convert scanned PDFs to editable Word (DOCX) with OCR.",
      path: "/pdf-to-word-ocr/",
      icon: <Search className="h-6 w-6" />,
      tags: ["ocr pdf to word", "scanned pdf to docx", "searchable pdf"],
      category: "OCR",
      cta: "Open OCR PDF -> Word",
    },
    {
      key: "ocr-pdf-to-excel",
      title: "OCR PDF to Excel",
      description: "Extract tables from scanned PDFs into Excel/CSV using OCR.",
      path: "/pdf-to-excel-ocr/",
      icon: <Search className="h-6 w-6" />,
      tags: ["ocr pdf to excel", "scanned pdf to xlsx", "tables from scan"],
      category: "OCR",
      cta: "Open OCR PDF -> Excel",
    },
    {
      key: "ocr-photo-to-text",
      title: "Photo to Text (OCR)",
      description: "Turn photos into selectable text with OCR and copy easily.",
      path: "/photo-to-text/",
      icon: <Search className="h-6 w-6" />,
      tags: ["photo to text", "image ocr", "extract text from photo"],
      category: "OCR",
      cta: "Open Photo to Text",
    },
    {
      key: "ocr-png-to-text",
      title: "PNG to Text (OCR)",
      description: "Extract text from PNG images with OCR in your browser.",
      path: "/png-to-text/",
      icon: <Search className="h-6 w-6" />,
      tags: ["png to text", "image to text", "ocr png"],
      category: "OCR",
      cta: "Open PNG to Text",
    },
    {
      key: "editor",
      title: "Open PDF Editor",
      description: "Jump straight to the full editor if you already know what you need.",
      path: "/editor/",
      icon: <FileText className="h-6 w-6" />,
      tags: ["editor", "pdf editor", "toolbox"],
      category: "Quick Start",
      cta: "Launch Editor",
    },
    // Converters (bidirectional)
    {
      key: "word-to-pdf",
      title: "Word to PDF",
      description: "Convert DOC/DOCX to PDF online - no signup, no watermark.",
      path: "/word-to-pdf/",
      icon: <FileText className="h-6 w-6" />,
      tags: ["word to pdf", "doc to pdf", "docx to pdf", "free converter"],
      category: "Converters",
      cta: "Open Word -> PDF",
    },
    {
      key: "pptx-to-pdf",
      title: "PPTX to PDF",
      description: "Turn PowerPoint slides into polished PDFs for sharing.",
      path: "/pptx-to-pdf/",
      icon: <Layers className="h-6 w-6" />,
      tags: ["pptx to pdf", "powerpoint to pdf", "slides to pdf"],
      category: "Converters",
      cta: "Open PPTX -> PDF",
    },
    {
      key: "excel-to-pdf",
      title: "Excel/CSV to PDF",
      description: "Convert XLSX or CSV into clean, shareable PDF tables.",
      path: "/excel-to-pdf/",
      icon: <Layers className="h-6 w-6" />,
      tags: ["excel to pdf", "xlsx to pdf", "csv to pdf", "tables to pdf"],
      category: "Converters",
      cta: "Open Excel -> PDF",
    },
    {
      key: "image-to-pdf",
      title: "Image to PDF",
      description: "Combine JPG/PNG into a single PDF - fast and private.",
      path: "/image-to-pdf/",
      icon: <ImageIcon className="h-6 w-6" />,
      tags: ["image to pdf", "jpg to pdf", "png to pdf", "combine images"],
      category: "Converters",
      cta: "Open Image -> PDF",
    },
    {
      key: "html-to-pdf",
      title: "HTML to PDF",
      description: "Turn webpages or HTML snippets into neat PDFs.",
      path: "/html-to-pdf/",
      icon: <FileText className="h-6 w-6" />,
      tags: ["html to pdf", "webpage to pdf", "save page as pdf"],
      category: "Converters",
      cta: "Open HTML -> PDF",
    },
    {
      key: "pdf-to-word",
      title: "PDF to Word",
      description: "Convert PDF to editable DOCX so you can rewrite freely.",
      path: "/pdf-to-word/",
      icon: <FileText className="h-6 w-6" />,
      tags: ["pdf to word", "pdf to docx", "edit pdf in word", "free converter"],
      category: "Converters",
      cta: "Open PDF -> Word",
    },
    {
      key: "pdf-to-pptx",
      title: "PDF to PPTX",
      description: "Turn PDFs into editable PowerPoint slides for presentations.",
      path: "/pdf-to-pptx/",
      icon: <Layers className="h-6 w-6" />,
      tags: ["pdf to pptx", "pdf to powerpoint", "slides from pdf"],
      category: "Converters",
      cta: "Open PDF -> PPTX",
    },
    {
      key: "pdf-to-excel",
      title: "PDF to Excel/CSV",
      description: "Extract tables from PDF into Excel or CSV for analysis.",
      path: "/pdf-to-excel/",
      icon: <Layers className="h-6 w-6" />,
      tags: ["pdf to excel", "pdf to xlsx", "pdf to csv", "extract tables"],
      category: "Converters",
      cta: "Open PDF -> Excel",
    },
    {
      key: "pdf-to-image",
      title: "PDF to Image",
      description: "Export PDF pages as JPG or PNG images for sharing.",
      path: "/pdf-to-image/",
      icon: <ImageIcon className="h-6 w-6" />,
      tags: ["pdf to jpg", "pdf to png", "export images"],
      category: "Converters",
      cta: "Open PDF -> Image",
    },
    {
      key: "pdf-to-html",
      title: "PDF to HTML",
      description: "Turn PDF documents into basic HTML for web reuse.",
      path: "/pdf-to-html/",
      icon: <FileText className="h-6 w-6" />,
      tags: ["pdf to html", "extract html", "web content"],
      category: "Converters",
      cta: "Open PDF -> HTML",
    },
    {
      key: "secure-ocr-download",
      title: "Secure OCR Download",
      description: "Download your OCR-processed file from secure storage.",
      path: "/secure-ocr-download/",
      icon: <Search className="h-6 w-6" />,
      tags: ["ocr download", "secure ocr", "searchable pdf"],
      category: "Converters",
      cta: "Open Secure OCR Download",
    },
  ];

  // URL-synced search (?q=)
  const initialQ =
    (typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("q") : "") || "";
  const [query, setQuery] = useState(initialQ);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPop = () => {
      const current = new URLSearchParams(window.location.search).get("q") || "";
      setQuery(current);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const onSearchChange = (val) => {
    setQuery(val);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (val) url.searchParams.set("q", val);
      else url.searchParams.delete("q");
      window.history.replaceState(null, "", url.toString());
    }
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return tools;
    const q = query.toLowerCase();
    return tools.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        (t.tags || []).some((tag) => tag.toLowerCase().includes(q))
    );
  }, [query, tools]);

  const categories = useMemo(() => {
    const map = new Map();
    for (const t of filtered) {
      if (!map.has(t.category)) map.set(t.category, []);
      map.get(t.category).push(t);
    }
    return Array.from(map.entries());
  }, [filtered]);

  const categoryLabels = {
    Editing: "PDF Editing Tools (Edit Text & Add Images)",
    Review: "PDF Annotation & Highlight Tools",
    Pages: "PDF Page Tools (Merge, Split, Reorder)",
    "Signing & Forms": "Sign & Fill PDF Forms Online",
    OCR: "OCR: Make PDFs Searchable & Editable",
    Converters: "PDF Converter Tools (Word, Excel, PowerPoint, Images)",
    "Quick Start": "Quick Start",
  };

  const benefits = [
    { icon: <ShieldCheck className="h-4 w-4" />, label: "No watermark" },
    { icon: <Lock className="h-4 w-4" />, label: "Client-side processing" },
    { icon: <Zap className="h-4 w-4" />, label: "Instant download" },
  ];

  const flatCategories = useMemo(() => Array.from(new Set(tools.map((t) => t.category))), [tools]);

  return (
    <div className="font-sans flex flex-col min-h-screen bg-slate-950 text-gray-900">
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605"
          crossOrigin="anonymous"
        />
      </Helmet>
      <SiteNav />

      <section className="relative overflow-hidden bg-slate-950 text-slate-50 py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-[-6rem] right-[-4rem] h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
            All Free PDF Tools in One Online Editor
          </h1>
          <p className="text-lg text-slate-200 mt-4 max-w-3xl mx-auto">
            Edit text, add images, annotate, merge, split, sign, and convert PDF to Word, Excel, PowerPoint, images, and
            more - <span className="font-semibold">100% free, no signup, no watermark.</span>
          </p>

          <div className="hidden md:flex flex-wrap justify-center gap-3 mt-6 text-sm text-slate-200">
            {flatCategories.map((cat) => (
              <a
                key={cat}
                href={`#cat-${encodeURIComponent(cat)}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-900/60 px-3 py-1.5 hover:border-blue-400 hover:bg-slate-900/90 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{categoryLabels[cat] || cat}</span>
              </a>
            ))}
          </div>

          <div className="mt-8 max-w-2xl mx-auto relative">
            <div className="absolute inset-x-6 -bottom-4 h-6 bg-slate-900/60 blur-xl rounded-full pointer-events-none" />
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-[0_18px_40px_rgba(15,23,42,0.7)] p-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-600 text-slate-100 placeholder:text-slate-500 shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Search tools (edit text, add image, merge, sign, convert...) "
                  aria-label="Search PDF tools"
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 mt-4 pb-1">
                {benefits.map((b, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 border border-slate-700/70"
                  >
                    {b.icon}
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-6">
            {categories.map(([cat, items]) => (
              <div key={cat} className="mb-12" id={`cat-${encodeURIComponent(cat)}`}>
                <header className="mb-5">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{categoryLabels[cat] || cat}</h2>
                  <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl">
                    {cat === "Editing" &&
                      "Use these tools to edit existing PDF text, add images or logos, and fine-tune content directly in your browser."}
                    {cat === "Review" &&
                      "Highlight important sections, annotate PDFs with comments, and share feedback without printing anything."}
                    {cat === "Pages" &&
                      "Rebuild your PDF structure: merge files, split large PDFs, and rearrange pages into the order you need."}
                    {cat === "Signing & Forms" &&
                      "Quickly sign PDFs online and place signatures exactly where they belong on contracts and forms."}
                    {cat === "Converters" &&
                      "Convert PDFs to other formats (Word, Excel, PowerPoint, images, HTML) and back again while keeping layout as clean as possible."}
                    {cat === "Quick Start" &&
                      "Jump straight into the full editor when you already know which pages or content you want to work on."}
                  </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((t) => (
                    <a
                      key={t.key}
                      href={t.path}
                      className="group relative block bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.16)] hover:-translate-y-1 transition-transform transition-shadow duration-200 transform-gpu"
                      aria-label={t.title}
                    >
                      <div className="absolute inset-x-4 -bottom-4 h-4 bg-slate-200/70 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 bg-blue-50 border border-blue-100 rounded-xl text-blue-600 shadow-[0_6px_18px_rgba(37,99,235,0.25)]">
                          {t.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{t.description}</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:underline">
                          {t.cta}
                          <span className="ml-1 group-hover:translate-x-0.5 transition-transform">-&gt;</span>
                        </span>
                      </div>
                      {t.tags?.length ? (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {t.tags.slice(0, 6).map((tag) => (
                            <li
                              key={tag}
                              className="text-[11px] uppercase tracking-wide bg-slate-100 text-slate-600 rounded-full px-2.5 py-1"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {!categories.length && (
              <p className="text-center text-gray-600">
                No tools match "{query}". Try searching for "edit pdf", "merge pdf", "split pdf", "sign pdf", or "pdf to word".
              </p>
            )}
          </div>
        </section>

        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 text-slate-900">
            <h2 className="text-xl md:text-2xl font-bold mb-3">Which PDF tool should I use?</h2>
            <p className="mb-3 text-slate-700">
              To <strong>edit text</strong> in a PDF, use{" "}
              <a href="/edit-pdf/" className="text-blue-600 hover:underline">Edit PDF (Text)</a>. To{" "}
              <strong>insert logos or pictures</strong>, use{" "}
              <a href="/add-image-pdf/" className="text-blue-600 hover:underline">Add Image to PDF</a>. To{" "}
              <strong>combine files</strong>, pick{" "}
              <a href="/merge-pdf/" className="text-blue-600 hover:underline">Merge PDF</a>. To{" "}
              <strong>extract pages</strong>, go with{" "}
              <a href="/split-pdf/" className="text-blue-600 hover:underline">Split PDF</a>. To{" "}
              <strong>sign a document</strong>, open{" "}
              <a href="/sign-pdf/" className="text-blue-600 hover:underline">Sign PDF</a>.
            </p>
            <p className="text-slate-700">
              All tools are <strong>100% free</strong>, require <strong>no signup</strong>, and are built to run in your
              browser so files stay on your device by default.
            </p>
          </div>
        </section>

        <section id="faq" className="py-14 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Are these PDF tools really free and without watermarks?",
                  a: "Yes. Everything here is free to use with no signup and no watermark added to your PDFs.",
                },
                {
                  q: "Do my files get uploaded to your servers?",
                  a: "By default, tools run locally in your browser so your files stay on your device unless a specific conversion requires a cloud step.",
                },
                {
                  q: "What tool should I use to place a logo on a PDF?",
                  a: (
                    <>
                      Use{" "}
                      <a href="/add-image-pdf/" className="text-blue-600 hover:underline">
                        Add Image to PDF
                      </a>{" "}
                      to insert a logo or picture, then resize, rotate, and position it on the page.
                    </>
                  ),
                },
                {
                  q: "Can I edit existing text inside a PDF?",
                  a: (
                    <>
                      Yes. Try{" "}
                      <a href="/edit-pdf/" className="text-blue-600 hover:underline">
                        Edit PDF (Text)
                      </a>{" "}
                      to click on detected text and change wording, fonts, size, color, and alignment directly in your PDF.
                    </>
                  ),
                },
                {
                  q: "Does it work on iPhone and Android?",
                  a: "Yes. The tools are optimized for Safari (iOS) and Chrome (Android) on modern devices.",
                },
              ].map((f, idx) => (
                <details key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <summary className="font-semibold cursor-pointer text-slate-900">{f.q}</summary>
                  <p className="mt-2 text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/privacy/" className="hover:text-white">Privacy</a>
          <a href="/terms/" className="hover:text-white">Terms</a>
          <a href="/contact/" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default { Page: ToolsPage };
