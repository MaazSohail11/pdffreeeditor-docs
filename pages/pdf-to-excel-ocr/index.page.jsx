// pages/pdf-to-excel-ocr/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    FileSpreadsheet,
    ScanText,
    CheckCircle,
    Scissors,
    Minimize2 as Compress,
    ShieldCheck,
    Link as LinkIcon,
    Download,
    Languages,
    AlertTriangle,
    Table2,
    Receipt,
    Landmark,
} from "lucide-react";

function PdfToExcelOcrPage() {
    const supportedLanguages = ["English", "French", "Spanish", "Portuguese", "German", "Italian"];

    const benefits = [
        "Convert scanned (image-only) PDFs into Excel-ready data using OCR-first workflow",
        "Extract tables, numbers, invoices, receipts, and statements without retyping",
        "Fix PDFs where you can’t select/copy text or Ctrl+F finds nothing",
        "Choose document language to improve OCR accuracy (especially accents + lookalike characters)",
        "Fast processing: OCR capped to the first 500 pages — split PDFs to OCR only what you need",
        "No watermark on output",
    ];

    const problemBlocks = [
        {
            title: "My PDF is a scan — Excel converter doesn’t pick up tables",
            text:
                "Scanned PDFs are images. Without OCR, there’s no real text/table structure to convert. OCR recognizes the characters first, then Excel conversion works much better.",
            icon: ScanText,
        },
        {
            title: "I need the numbers in cells (not a screenshot)",
            text:
                "OCR helps convert the scan into real text so Excel can place numbers into editable cells. Complex tables may still need cleanup after conversion.",
            icon: Table2,
        },
        {
            title: "My file is long and hits the cap",
            text:
                "OCR is capped to the first 500 pages for speed. Split the PDF to keep only the pages that contain the tables you need.",
            icon: Scissors,
        },
    ];

    const faqs = [
        {
            q: "How do I convert a scanned PDF to Excel (OCR)?",
            a:
                "Use the OCR-first workflow: (1) OCR the scanned PDF to create a searchable text layer, then (2) convert the OCR’d PDF to Excel (XLSX). This is the fastest way to avoid manual retyping.",
        },
        {
            q: "Why can’t I convert scanned PDF to Excel directly?",
            a:
                "Because scanned PDFs are images. Excel converters need real text to extract tables and numbers. OCR converts the image into text first.",
        },
        {
            q: "Will the Excel file keep the same table formatting?",
            a:
                "Simple tables often extract well, but complex layouts (merged cells, multi-column pages, borders-as-images) may require cleanup in Excel after conversion.",
        },
        {
            q: "Is there a page limit?",
            a:
                "Yes — OCR is capped to the first 500 pages for fast processing. If your PDF is longer, split the PDF and OCR only the pages that matter.",
        },
        {
            q: "Do I need to choose a language?",
            a:
                "It’s optional but recommended. Selecting the correct language improves OCR accuracy—especially for French/Spanish/Portuguese accents and similar-looking letters.",
        },
        {
            q: "What if I only need the text (not XLSX)?",
            a:
                "If you just need plain text, use PDF to Text. If you need a searchable PDF, use OCR PDF or Make PDF Searchable.",
        },
    ];

    return (
        <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>
            <SiteNav />

            {/* Hero */}
            <section className="digital-obsidian text-on-surface py-14 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Scanned PDF to Excel (OCR)
                            <br />
                            <span className="text-primary-600">
                                Convert PDF Tables to XLSX • Extract Numbers into Cells
                            </span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-3">
                            If your PDF is a scan (image-only), normal PDF-to-Excel converters often fail because there’s no real text.
                            OCR fixes that by recognizing characters first—then you can convert the OCR’d PDF to Excel.
                        </p>

                        <p className="text-base text-on-surface-variant mb-6">
                            OCR is capped to the <strong>first 500 pages</strong> for speed.
                            For longer files,{" "}
                            <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                split the PDF
                            </a>{" "}
                            and OCR only the pages that contain the tables you need.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#upload"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" />
                                Upload Scanned PDF
                            </a>

                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <FileSpreadsheet className="h-5 w-5" />
                                How it works (2-step)
                            </a>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                What this solves
                            </h2>

                            <ul className="space-y-2 text-on-surface-variant">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                                {supportedLanguages.map((l) => (
                                    <span
                                        key={l}
                                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-on-surface-variant"
                                    >
                                        {l}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tool */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Step 1: OCR your scanned PDF (create text layer)</p>
                            </div>

                            {/* Your OCR UI */}
                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-[#091328]/50 border rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <FileSpreadsheet className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-on-surface font-headline mb-1">
                                            Step 2: Convert the OCR’d PDF to Excel (XLSX)
                                        </p>
                                        <p className="text-sm text-on-surface-variant mb-3">
                                            After OCR finishes, convert the searchable PDF into an editable spreadsheet:
                                        </p>
                                        <a
                                            href="/pdf-to-excel/"
                                            className="inline-flex items-center gap-2 bg-[#091328]/50 backdrop-blur-xl border border-white/5 px-4 py-2 rounded-full font-semibold text-primary-700 hover:text-primary-900 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                                        >
                                            <Download className="h-4 w-4" />
                                            Open PDF to Excel Converter
                                        </a>

                                        <p className="text-xs text-outline mt-3">
                                            Long file? Use{" "}
                                            <a href="/split-pdf/" className="underline hover:text-on-surface-variant">
                                                Split PDF
                                            </a>{" "}
                                            to keep only table pages under the OCR cap.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* Problem/intent blocks */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Why “scanned PDF to Excel” needs OCR first
                        </h2>
                        <p className="text-on-surface-variant mb-5">
                            Most “PDF to Excel” tools work best when your PDF has selectable text. If your PDF is a scan,
                            it’s basically a picture—OCR is what turns that picture into editable characters.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {problemBlocks.map((c) => (
                                <div key={c.title} className="bg-[#091328]/50 border rounded-xl p-5">
                                    <div className="flex items-start gap-3">
                                        <c.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-2">{c.title}</h3>
                                            <p className="text-on-surface-variant">{c.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">Reality check (no fluff)</h3>
                                    <p className="text-on-surface-variant">
                                        OCR improves extractability, but Excel output is not always perfect—especially on complex tables,
                                        skewed scans, and multi-column statements. Expect to verify and clean up in Excel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cap workflow */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Fastest workflow (500-page OCR cap): split → OCR → Excel
                        </h2>
                        <p className="text-on-surface-variant mb-5">
                            If your PDF is long, don’t waste OCR on irrelevant pages. Extract only the pages containing tables,
                            OCR that smaller file, then convert to Excel.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <div className="flex items-start gap-3">
                                    <Scissors className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Split pages first</h3>
                                        <p className="text-on-surface-variant">
                                            Use{" "}
                                            <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                                Split PDF
                                            </a>{" "}
                                            to keep only the pages you need under the OCR cap.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <div className="flex items-start gap-3">
                                    <Compress className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Compress huge scans</h3>
                                        <p className="text-on-surface-variant">
                                            If upload is slow, run{" "}
                                            <a href="/compress-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                                Compress PDF
                                            </a>{" "}
                                            to reduce size before OCR.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How-to */}
                <section id="how-to" className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">
                            How to convert scanned PDF to Excel (OCR) — 2-step method
                        </h2>

                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-upload">
                                <h4 className="font-semibold">1) OCR the scanned PDF (create a text layer)</h4>
                                <p className="text-on-surface-variant">
                                    Upload your scanned PDF above. If it’s longer than 500 pages,{" "}
                                    <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        split it
                                    </a>{" "}
                                    and OCR only the pages with tables.
                                </p>
                            </li>

                            <li id="step-language">
                                <h4 className="font-semibold">2) Select the correct language (recommended)</h4>
                                <p className="text-on-surface-variant">
                                    Choosing the right language improves OCR accuracy (especially accents and similar-looking characters).
                                </p>
                            </li>

                            <li id="step-excel">
                                <h4 className="font-semibold">3) Convert the OCR’d PDF to Excel (XLSX)</h4>
                                <p className="text-on-surface-variant">
                                    Convert the searchable PDF using{" "}
                                    <a href="/pdf-to-excel/" className="text-primary-700 underline hover:text-primary-900">
                                        PDF to Excel
                                    </a>
                                    , then verify and clean up cells in Excel if needed.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Use cases (long-tail magnets) */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Popular scanned PDF → Excel use cases</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                {
                                    title: "Invoices to Excel",
                                    text: "Extract line items, totals, and tax amounts into editable spreadsheet cells.",
                                    icon: Receipt,
                                },
                                {
                                    title: "Bank statements",
                                    text: "Pull transactions into Excel to categorize, filter, and analyze faster.",
                                    icon: Landmark,
                                },
                                {
                                    title: "Tables & reports",
                                    text: "Convert scanned tables into cells for sorting, formulas, and charts.",
                                    icon: Table2,
                                },
                            ].map((u) => (
                                <div key={u.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <div className="flex items-start gap-3">
                                        <u.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-1">{u.title}</h3>
                                            <p className="text-on-surface-variant">{u.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-on-surface-variant mt-6">
                            Need plain text instead? Use{" "}
                            <a href="/pdf-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                PDF to Text
                            </a>
                            . Need a searchable PDF? Use{" "}
                            <a href="/make-pdf-searchable/" className="text-primary-700 underline hover:text-primary-900">
                                Make PDF Searchable
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* Privacy */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
                        <p className="text-on-surface-variant mb-4">
                            OCR requires processing your document to recognize text. If you’re testing, use sample PDFs or redact sensitive data.
                            Review policies for retention/deletion details.
                        </p>

                        <div className="bg-[#091328]/50 border rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">Privacy checklist</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-on-surface-variant">
                                        <li>Avoid uploading extremely sensitive documents.</li>
                                        <li>Use trusted networks and keep your browser updated.</li>
                                        <li>
                                            Read{" "}
                                            <a href="/privacy/" className="text-primary-700 underline hover:text-primary-900">
                                                Privacy
                                            </a>{" "}
                                            and{" "}
                                            <a href="/terms/" className="text-primary-700 underline hover:text-primary-900">
                                                Terms
                                            </a>
                                            .
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 p-4 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.1)] border">
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
                            Related tools
                        </h2>
                        <p className="text-on-surface-variant mb-3">
                            Build the fastest “scan → editable” workflow using these tools:
                        </p>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/ocr-pdf/" className="underline hover:text-primary-900">OCR PDF</a></li>
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-primary-900">Make PDF searchable</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-primary-900">PDF to Text</a></li>
                            <li><a href="/pdf-to-excel/" className="underline hover:text-primary-900">PDF to Excel</a></li>
                            <li><a href="/pdf-to-word/" className="underline hover:text-primary-900">PDF to Word</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF pages</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF</a></li>
                            <li><a href="/edit-pdf/" className="underline hover:text-primary-900">Edit PDF text</a></li>
                            <li><a href="/tools/" className="underline hover:text-primary-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-primary mb-2">
                            Convert scanned PDF tables to Excel now
                        </h2>
                        <p className="text-primary-100 mb-6">
                            OCR first (text layer), then convert to Excel (XLSX). If your file is long, split pages first to stay under the OCR cap.
                        </p>
                        <a
                            href="#upload"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <Download className="h-5 w-5" />
                            Upload Scanned PDF
                        </a>
                    </div>
                </section>


                {/* SMART LINKING MAP */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* SIBLINGS */}
                            <div>
                                <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Related Tools</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/ocr-german/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            OCR German
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ocr-spanish/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            OCR Spanish
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/image-to-text/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Image to Text
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* NEXT STEPS */}
                            <div>
                                <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Next Steps</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/pdf-to-word-ocr/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Convert to Word</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/edit-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Edit Text</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PARENT */}
                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                            <a href="/ocr/" className="text-sm font-semibold text-outline hover:text-primary-600 uppercase tracking-wide">
                                View OCR Home
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
                <p>© {new Date().getFullYear()} PDF Free Editor by TechRex. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="/tools/" className="hover:text-on-primary">Tools</a>
                    <a href="/privacy/" className="hover:text-on-primary">Privacy</a>
                    <a href="/terms/" className="hover:text-on-primary">Terms</a>
                    <a href="/contact/" className="hover:text-on-primary">Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default { Page: PdfToExcelOcrPage };
