// pages/index.page.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
  ScanText,
  Search,
  Copy,
  FileText,
  Image as ImageIcon,
  Languages,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  Wand2,
  ArrowRight,
  Link as LinkIcon,
} from "lucide-react";
import { deferAdSense } from "/src/utils/deferScripts.js";

function OCRHome() {
  // Keep links REAL + trailing slash.
  // If a page is not shipped yet, either set available:false or remove it to avoid 404s.
  const ocrPages = [
    {
      title: "OCR PDF",
      description: "Make scanned PDFs searchable with an invisible text overlay (Ctrl+F works).",
      href: "/ocr-pdf/",
      icon: FileText,
      badge: "Most used",
      available: true,
    },
    {
      title: "Make PDF Searchable",
      description: "Fix non-searchable PDFs by adding a text layer (best for scanned PDFs).",
      href: "/make-pdf-searchable/",
      icon: Search,
      badge: "High intent",
      available: true,
    },
    {
      title: "PDF to Text",
      description: "Extract text from PDFs (including scanned PDFs via OCR).",
      href: "/pdf-to-text/",
      icon: Copy,
      badge: "Copy text",
      available: true,
    },
    {
      title: "Scanned PDF to Word (OCR)",
      description: "Convert scanned PDF into an editable Word document.",
      href: "/pdf-to-word-ocr/",
      icon: Wand2,
      badge: "Editable",
      available: true,
    },
    {
      title: "Scanned PDF to Excel (OCR)",
      description: "Convert scanned tables and forms into Excel.",
      href: "/pdf-to-excel-ocr/",
      icon: Wand2,
      badge: "Tables",
      available: true,
    },
    {
      title: "Image to Text",
      description: "Extract text from images instantly (OCR image).",
      href: "/image-to-text/",
      icon: ImageIcon,
      badge: "Core tool",
      available: true,
    },
    {
      title: "JPG to Text",
      description: "Extract text from JPG/JPEG images with OCR.",
      href: "/jpg-to-text/",
      icon: ImageIcon,
      badge: "Format",
      available: true,
    },
    {
      title: "PNG to Text",
      description: "Extract text from PNG images with OCR.",
      href: "/png-to-text/",
      icon: ImageIcon,
      badge: "Format",
      available: true,
    },
    {
      title: "Photo to Text",
      description: "Extract text from phone photos (receipts, documents, notes).",
      href: "/photo-to-text/",
      icon: ImageIcon,
      badge: "Mobile",
      available: true,
    },
    {
      title: "Screenshot to Text",
      description: "Extract text from screenshots (UI, chats, dashboards, slides).",
      href: "/screenshot-to-text/",
      icon: ScanText,
      badge: "Fast",
      available: true,
    },
    {
      title: "OCR Languages",
      description: "Supported languages + how to choose the best one for accuracy.",
      href: "/languages/",
      icon: Languages,
      badge: "Accuracy",
      available: true,
    },
    {
      title: "OCR French",
      description: "French OCR for scanned PDFs and images.",
      href: "/ocr-french/",
      icon: Languages,
      badge: "Language",
      available: true,
    },
    {
      title: "OCR Spanish",
      description: "Spanish OCR for scanned PDFs and images.",
      href: "/ocr-spanish/",
      icon: Languages,
      badge: "Language",
      available: true,
    },
    {
      title: "OCR German",
      description: "German OCR (ä/ö/ü/ß) for scanned PDFs and images.",
      href: "/ocr-german/",
      icon: Languages,
      badge: "Language",
      available: true,
    },
  ];

  const quickPain = [
    "Ctrl+F (Cmd+F) doesn’t find words in your PDF",
    "You can’t select text (the PDF behaves like a picture)",
    "Copy/paste returns blanks or random characters",
    "Search works on some pages but not others (mixed scanned + real text pages)",
  ];

  const useCases = [
    { title: "Invoices & receipts", text: "Extract vendor names, totals, dates, tax IDs, line items." },
    { title: "Contracts & legal PDFs", text: "Search clauses, copy paragraphs, find names and dates fast." },
    { title: "Forms & certificates", text: "Turn printed forms into selectable text for reuse." },
    { title: "Notes, books, study material", text: "Copy text for summaries, flashcards, translation, rewriting." },
    { title: "Screenshots & UI text", text: "Grab text from dashboards, chats, error screens, slides." },
    { title: "Archived scans", text: "Make document archives searchable (massive time saver)." },
  ];

  const accuracyChecklist = [
    {
      title: "Scan quality matters more than anything",
      text:
        "If your scan is blurry or low resolution, OCR will guess. For documents, ~300 DPI is a common recommendation for clearer OCR on small text.",
      linkText: "Scan & OCR tips",
      href: "/why-ocr-improves-searchability/",
    },
    {
      title: "Choose the correct language (big accuracy boost)",
      text:
        "Selecting the correct language can significantly improve OCR accuracy (especially accents/special characters).",
      linkText: "Supported languages",
      href: "/languages/",
    },
    {
      title: "Fix long PDFs by splitting first",
      text:
        "If you hit a page cap or only need a few pages, split the PDF and OCR only the relevant pages. Faster, cheaper, cleaner.",
      linkText: "Split PDF",
      href: "/split-pdf/",
    },
    {
      title: "Compress before upload (speed boost)",
      text:
        "Huge scans upload slowly. Compress the PDF before OCR to speed up processing and reduce failures.",
      linkText: "Compress PDF",
      href: "/compress-pdf/",
    },
  ];

  const faqs = [
    {
      q: "What is OCR?",
      a: "OCR (Optical Character Recognition) converts text inside scanned images or scanned PDFs into machine-readable text so you can search, select, and copy it.",
    },
    {
      q: "Why doesn’t Ctrl+F work in my PDF?",
      a: "Most of the time it’s a scanned (image-only) PDF with no real text layer. OCR adds a hidden text layer so search works.",
    },
    {
      q: "How do I know if my PDF is scanned?",
      a: "Try selecting a word. If nothing highlights and the page behaves like a single image, it’s likely scanned. You can also zoom in—scans often look slightly blurry compared to real text PDFs.",
    },
    {
      q: "How do I make a scanned PDF searchable?",
      a: "Run OCR on it. OCR creates an invisible text overlay under the scan so you can search and copy text.",
    },
    {
      q: "Should I choose a language?",
      a: "Yes if you can. Choosing the correct language often improves accuracy (especially accents/special characters). For bilingual pages, pick the dominant language.",
    },
    {
      q: "What if my PDF is too long?",
      a: "Split the PDF and OCR only the pages you need. This also speeds up processing.",
    },
    {
      q: "Can OCR convert scanned PDFs to Word or Excel?",
      a: "Yes. OCR is the recognition step; conversion formats the result for editing (Word) or tables (Excel).",
    },
  ];

  // Defer loading of AdSense script to improve TBT
  useEffect(() => {
    deferAdSense();
  }, []);

  return (
    <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      {/* AdSense script loaded via deferAdSense() for better TBT */}
      <SiteNav />

      {/* HERO + TOOL */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Free online OCR to extract text from scanned PDFs and images.
              <br />
              <span className="text-blue-600">
                Make documents searchable (Ctrl+F works), copy selectable text, and use unlimited OCR with no sign-up.
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-4">
              Online OCR lets you extract real, selectable text from scanned PDFs and images that behave like pictures. If you can’t select words, copy text, or search using Ctrl+F, the file is image-based — and OCR is the only way to fix it.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              This free OCR tool works directly in your browser and supports scanned PDFs, photos, screenshots, and image files. It analyzes the visual content, recognizes characters, and creates a hidden text layer so your document becomes searchable, copyable, and reusable — without changing how it looks.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Use OCR when dealing with scanned invoices, receipts, contracts, forms, certificates, books, study material, or archived documents. It’s especially useful when PDFs come from scanners, mobile cameras, or screenshots where text is not machine-readable.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Unlike many online OCR tools, this page is free to use with no sign-up and no usage limits. Files are processed securely and automatically deleted after processing. You can choose the correct language for better accuracy or let the tool auto-detect it.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Once OCR is complete, you can search text inside the document, copy paragraphs, or download a searchable PDF. For best results, use clear scans and select the correct language — especially for accented or non-English text.
            </p>

            {/* Pain point magnet */}
            <div className="bg-white border rounded-2xl p-5 shadow-sm mb-6">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                If any of these are happening, OCR is the fix
              </h2>
              <ul className="space-y-2 text-gray-700">
                {quickPain.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#tool"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow hover:bg-blue-700"
                >
                  <ScanText className="h-5 w-5" />
                  Start OCR now
                </a>
                <a
                  href="#how-to"
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                >
                  <ArrowRight className="h-5 w-5" />
                  How it works
                </a>
                <a
                  href="#tools"
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                >
                  <LinkIcon className="h-5 w-5" />
                  All OCR pages
                </a>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Page cap? Split first → OCR only what you need:{" "}
                <a href="/split-pdf/" className="text-blue-700 underline hover:text-blue-900">
                  Split PDF
                </a>
                . Need faster uploads?{" "}
                <a href="/compress-pdf/" className="text-blue-700 underline hover:text-blue-900">
                  Compress PDF
                </a>
                .
              </p>
            </div>

            {/* TOC */}
            <div className="bg-white border rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold mb-3">Jump to:</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-blue-700">
                <li><a className="underline hover:text-blue-900" href="#tool">Run OCR</a></li>
                <li><a className="underline hover:text-blue-900" href="#how-to">How OCR works</a></li>
                <li><a className="underline hover:text-blue-900" href="#accuracy">Accuracy playbook</a></li>
                <li><a className="underline hover:text-blue-900" href="#use-cases">Use cases</a></li>
                <li><a className="underline hover:text-blue-900" href="#tools">OCR pages directory</a></li>
                <li><a className="underline hover:text-blue-900" href="#faq">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* TOOL */}
          <aside id="tool" className="lg:sticky lg:top-6">
            <div className="bg-white border rounded-2xl shadow p-4">
              <div className="flex items-center gap-2 mb-3">
                <ScanText className="h-5 w-5 text-blue-600" />
                <p className="font-semibold">Run OCR</p>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Upload your PDF or image below to extract text. Files are processed securely.
              </p>

              <OCRTool minimal={true} />

              <div className="mt-4 bg-gray-50 border rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">Best results checklist</p>
                <p className="text-sm text-gray-600">
                  Choose the correct language (accuracy boost) →{" "}
                  <a href="/languages/" className="text-blue-700 underline hover:text-blue-900">
                    OCR languages
                  </a>
                  . Long PDF?{" "}
                  <a href="/split-pdf/" className="text-blue-700 underline hover:text-blue-900">
                    Split PDF
                  </a>
                  .
                </p>
              </div>

              <div className="mt-3 text-xs text-gray-500">
                OCR requires uploading the file for processing. See{" "}
                <a href="/privacy/" className="underline hover:text-gray-700">
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </aside>
        </div>
      </section>

      <main className="flex-1">
        {/* HOW-TO */}
        <section id="how-to" className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">How OCR works (3 steps)</h2>

            <ol className="space-y-4">
              <li id="step-upload" className="bg-gray-50 border rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1">1) Upload a PDF or image</h3>
                <p className="text-gray-700">
                  Upload a scanned PDF, screenshot, photo, or image document. If the PDF is long, split it first so you OCR only the pages you need.
                </p>
              </li>
              <li id="step-language" className="bg-gray-50 border rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1">2) Choose language for accuracy</h3>
                <p className="text-gray-700">
                  Picking the correct language often improves OCR accuracy—especially accents and special characters.
                </p>
              </li>
              <li id="step-download" className="bg-gray-50 border rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1">3) Get searchable output / copy text</h3>
                <p className="text-gray-700">
                  After OCR, your document becomes searchable/selectable. Download searchable PDF output or copy the extracted text.
                </p>
              </li>
            </ol>

            <div className="mt-6 bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                Quick checks (confirm OCR worked)
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                {[
                  "Select a single word — if it highlights, OCR created real text.",
                  "Press Ctrl+F (Cmd+F on Mac) and search a visible word.",
                  "Copy a paragraph into Notes/TextEdit — it should paste readable text.",
                  "If it’s wrong: try a cleaner scan + correct language, then rerun OCR.",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3 bg-gray-50 border rounded-xl p-4">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 mt-4">
                PDF-specific? Start with{" "}
                <a href="/make-pdf-searchable/" className="text-blue-700 underline hover:text-blue-900">
                  Make PDF searchable
                </a>{" "}
                or{" "}
                <a href="/ocr-pdf/" className="text-blue-700 underline hover:text-blue-900">
                  OCR PDF
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ACCURACY PLAYBOOK */}
        <section id="accuracy" className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">OCR accuracy playbook (this is what top users do)</h2>
            <p className="text-gray-700 mb-6">
              OCR is not magic—it's pattern recognition. These are the highest-impact changes that improve results fast.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {accuracyChecklist.map((a) => (
                <div key={a.title} className="bg-white border rounded-xl p-5 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-gray-700 mb-3">{a.text}</p>
                  <a href={a.href} className="text-blue-700 underline hover:text-blue-900 font-semibold">
                    {a.linkText}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">When OCR usually fails (so you don’t waste time)</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Heavy handwriting (especially cursive) or very stylized fonts</li>
                <li>Photos with glare/shadows, curved pages, or strong motion blur</li>
                <li>Very low resolution scans (tiny text becomes unreadable)</li>
                <li>Complex layouts where text overlaps background graphics</li>
              </ul>
              <p className="text-gray-700 mt-3">
                If the scan itself is unreadable, OCR cannot “guess” correctly. Improve the scan first, then rerun.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section id="use-cases" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">OCR use cases (why people come back daily)</h2>
            <p className="text-gray-700 mb-6">
              OCR is addictive once you realize how much time it saves—especially for scanned PDFs and images you deal with every day.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((u) => (
                <div key={u.title} className="bg-gray-50 border rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">{u.title}</h3>
                  <p className="text-gray-700">{u.text}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 mt-6">
              After OCR, need to edit the PDF? Use{" "}
              <a href="/edit-pdf/" className="text-blue-700 underline hover:text-blue-900">
                Edit PDF
              </a>
              .
            </p>
          </div>
        </section>

        {/* DIRECTORY */}
        <section id="tools" className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">All OCR pages</h2>
            <p className="text-gray-700 mb-8">
              Pick the exact page that matches your goal (PDF OCR, extract text, screenshots, languages, Word/Excel output).
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ocrPages.map((tool) => {
                const Icon = tool.icon;
                const card = (
                  <div className="group bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col items-start h-full">
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-700 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tool.title}
                      </h3>
                      {tool.badge ? (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                          {tool.badge}
                        </span>
                      ) : null}
                    </div>

                    <p className="text-gray-600 mb-6 flex-1">{tool.description}</p>
                    <span className="text-sm font-semibold flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                      Open <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                );

                if (!tool.available) return <div key={tool.href} className="opacity-60">{card}</div>;
                return (
                  <a key={tool.href} href={tool.href}>
                    {card}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 bg-white border rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Related PDF tools (support OCR workflow)
              </h3>
              <p className="text-gray-700 mb-4">
                These tools make OCR faster and more successful (split long PDFs, compress scans, convert formats).
              </p>

              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split PDF</a></li>
                <li><a href="/compress-pdf/" className="underline hover:text-blue-900">Compress PDF</a></li>
                <li><a href="/pdf-to-image/" className="underline hover:text-blue-900">PDF to Image</a></li>
                <li><a href="/pdf-to-word/" className="underline hover:text-blue-900">PDF to Word</a></li>
                <li><a href="/pdf-to-excel/" className="underline hover:text-blue-900">PDF to Excel</a></li>
                <li><a href="/edit-pdf/" className="underline hover:text-blue-900">Edit PDF</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <details key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm border">
                  <summary className="font-semibold cursor-pointer">{item.q}</summary>
                  <p className="mt-2 text-gray-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              Ready to turn scans into searchable text?
            </h2>
            <p className="text-blue-100 mb-6">
              Upload your PDF/image, choose language for accuracy, and get searchable output you can copy and reuse.
            </p>
            <a
              href="#tool"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 inline-flex items-center gap-2"
            >
              <ScanText className="h-5 w-5" />
              Start OCR
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
        <p>© {new Date().getFullYear()} PDF Free Editor by TechRex. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/tools/" className="hover:text-white">Tools</a>
          <a href="/privacy/" className="hover:text-white">Privacy</a>
          <a href="/terms/" className="hover:text-white">Terms</a>
          <a href="/contact/" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default { Page: OCRHome };
