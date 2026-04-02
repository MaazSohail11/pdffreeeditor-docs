// pages/pdf-to-text/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    FileText,
    ScanText,
    Copy,
    Search,
    CheckCircle,
    Scissors,
    Minimize2 as Compress,
    ShieldCheck,
    Link as LinkIcon,
    Download,
    Languages,
    AlertTriangle,
} from "lucide-react";

function PdfToTextPage() {
    const supportedLanguages = ["English", "French", "Spanish", "Portuguese", "German", "Italian"];

    const benefits = [
        "Extract text from PDF online (including scanned, image-only PDFs using OCR)",
        "Copy text from a scanned PDF (when highlighting/selecting doesn’t work)",
        "Fix “Ctrl+F not working” PDFs by generating real text output you can search",
        "Choose a language for better OCR accuracy (especially accents and similar characters)",
        "Fast processing: OCR is capped to the first 500 pages — split PDFs to OCR only what you need",
        "No watermark on output",
    ];

    const quickChecks = [
        {
            title: "You can’t select or copy any text",
            text: "Your PDF is likely scanned/image-only. Use OCR to extract the text.",
        },
        {
            title: "Ctrl+F finds nothing",
            text: "Search won’t work on image PDFs. OCR converts the page image into real characters.",
        },
        {
            title: "Text copies as gibberish",
            text: "Wrong language, low-quality scan, skew, blur, or heavy shadows can break OCR.",
        },
    ];

    const faqs = [
        {
            q: "How do I extract text from a PDF?",
            a: "Upload your PDF. If it’s a scanned/image-only PDF, OCR will recognize the characters and produce real text you can copy and reuse.",
        },
        {
            q: "How do I extract text from a scanned PDF (scanned PDF to text)?",
            a: "Scanned PDFs are images. OCR reads the page image and converts it to text. Select the correct language for best accuracy, then copy the extracted text.",
        },
        {
            q: "Why can’t I copy text from my PDF?",
            a: "Many PDFs are scans or flattened images with no text layer. OCR is required to convert the page image into selectable/copyable text.",
        },
        {
            q: "Is there a page limit?",
            a: "Yes — OCR is capped to the first 500 pages for fast processing. If your file is longer, split the PDF and OCR only the pages you need.",
        },
        {
            q: "Will OCR preserve formatting (tables/columns)?",
            a: "OCR focuses on recognizing text. Simple paragraphs often extract well, but complex formatting like tables and multi-column layouts may need cleanup after extraction.",
        },
        {
            q: "How can I improve OCR accuracy?",
            a: "Use clear scans, avoid blur/shadows, keep pages straight, and pick the correct language before OCR. If text is tiny, re-scan at higher quality if possible.",
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
                            PDF to Text Converter (OCR)
                            <br />
                            <span className="text-primary-600">
                                Extract Text from PDF • Scanned PDF to Text • Copy Text Fast
                            </span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-3">
                            Convert PDFs into real text you can copy, search, and reuse.
                            Works for normal PDFs and scanned/image-only PDFs (OCR).
                        </p>

                        <p className="text-base text-on-surface-variant mb-6">
                            OCR is capped to the <strong>first 500 pages</strong> for speed.
                            If your file is longer,{" "}
                            <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                split the PDF
                            </a>{" "}
                            and OCR only the pages you need.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#upload"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" />
                                Upload PDF to Extract Text
                            </a>

                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <FileText className="h-5 w-5" />
                                How it works (3 steps)
                            </a>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                What this tool solves
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
                                <Copy className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Extract text from your PDF</p>
                            </div>

                            {/* Your actual tool UI */}
                            <OCRTool minimal={true} />

                            <p className="text-xs text-outline mt-3">
                                Tip: If OCR only processes the first 500 pages, extract the pages you need with{" "}
                                <a href="/split-pdf/" className="underline hover:text-on-surface-variant">
                                    Split PDF
                                </a>{" "}
                                and upload the smaller file.
                            </p>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* Quick diagnosis section (captures long-tail problems) */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Before you convert: check what type of PDF you have</h2>
                        <p className="text-on-surface-variant mb-5">
                            Some PDFs already contain selectable text (you can highlight it). Others are scanned images (you can’t).
                            OCR is specifically for scanned/image-only PDFs.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {quickChecks.map((c) => (
                                <div key={c.title} className="bg-[#091328]/50 border rounded-xl p-5">
                                    <h3 className="font-semibold text-on-surface font-headline mb-2">{c.title}</h3>
                                    <p className="text-on-surface-variant">{c.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">If your PDF is heavy on tables/columns</h3>
                                    <p className="text-on-surface-variant">
                                        OCR is best at recognizing text. Complex layouts (tables, multi-column) may require cleanup after extraction.
                                        If you need structured output, you may prefer converting to{" "}
                                        <a href="/pdf-to-word/" className="text-primary-700 underline hover:text-primary-900">
                                            Word
                                        </a>{" "}
                                        or{" "}
                                        <a href="/pdf-to-excel/" className="text-primary-700 underline hover:text-primary-900">
                                            Excel
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Page cap workflow */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Long PDF? Convert only the pages you need (500-page cap)</h2>
                        <p className="text-on-surface-variant mb-5">
                            Fastest workflow: split the PDF to keep only relevant pages, then OCR the smaller file.
                            This avoids page limits and reduces processing time.
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
                                            to extract the pages you care about, then upload that smaller PDF here.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <div className="flex items-start gap-3">
                                    <Compress className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Compress if the scan is huge</h3>
                                        <p className="text-on-surface-variant">
                                            If the file size is very large, run{" "}
                                            <a href="/compress-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                                Compress PDF
                                            </a>{" "}
                                            to speed up uploads and processing.
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
                        <h2 className="text-2xl font-bold mb-6">How to convert PDF to text (3 steps)</h2>

                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-upload">
                                <h4 className="font-semibold">1) Upload your PDF</h4>
                                <p className="text-on-surface-variant">
                                    Upload a PDF file. If it’s longer than 500 pages,{" "}
                                    <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        split it
                                    </a>{" "}
                                    and upload only the required pages.
                                </p>
                            </li>

                            <li id="step-language">
                                <h4 className="font-semibold">2) Choose the correct language (recommended)</h4>
                                <p className="text-on-surface-variant">
                                    Selecting the right language improves OCR accuracy, especially for accents and similar-looking letters.
                                </p>
                            </li>

                            <li id="step-result">
                                <h4 className="font-semibold">3) Copy or export the extracted text</h4>
                                <p className="text-on-surface-variant">
                                    Copy the extracted text and reuse it anywhere. If you want a searchable PDF instead of raw text, use{" "}
                                    <a href="/make-pdf-searchable/" className="text-primary-700 underline hover:text-primary-900">
                                        Make PDF Searchable
                                    </a>{" "}
                                    or{" "}
                                    <a href="/ocr-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        OCR PDF
                                    </a>
                                    .
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Accuracy tips */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">OCR accuracy tips (so the extracted text is clean)</h2>
                        <ul className="list-disc ml-6 space-y-2 text-on-surface-variant">
                            <li><strong>Select the correct language</strong> before OCR (biggest easy win).</li>
                            <li>Prefer sharp scans: blur + shadows hurt OCR.</li>
                            <li>Rotate/deskew pages so lines are straight.</li>
                            <li>If the text is tiny, re-scan higher quality when possible.</li>
                            <li>For tables, consider exporting to Excel after OCR for cleanup.</li>
                        </ul>

                        <div className="mt-6 flex items-center gap-2 text-on-surface-variant">
                            <Languages className="h-5 w-5 text-primary-600" />
                            <span>
                                Supported languages:{" "}
                                <strong>English, French, Spanish, Portuguese, German, Italian</strong>
                            </span>
                        </div>
                    </div>
                </section>

                {/* Privacy */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
                        <p className="text-on-surface-variant mb-4">
                            OCR requires processing your document to recognize text. If you’re testing, use sample PDFs or redact sensitive data.
                            Review the policies for retention/deletion details.
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
                                <details key={i} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 p-4 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.1)]">
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
                            Convert, edit, and prepare PDFs for OCR using these tools:
                        </p>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/ocr-pdf/" className="underline hover:text-primary-900">OCR PDF (searchable PDF)</a></li>
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-primary-900">Make PDF searchable</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF pages</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF</a></li>
                            <li><a href="/pdf-to-word/" className="underline hover:text-primary-900">PDF to Word</a></li>
                            <li><a href="/pdf-to-excel/" className="underline hover:text-primary-900">PDF to Excel</a></li>
                            <li><a href="/pdf-to-image/" className="underline hover:text-primary-900">PDF to Image</a></li>
                            <li><a href="/edit-pdf/" className="underline hover:text-primary-900">Edit PDF text</a></li>
                            <li><a href="/tools/" className="underline hover:text-primary-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-primary mb-2">
                            Extract text from your PDF now
                        </h2>
                        <p className="text-primary-100 mb-6">
                            Upload a PDF, choose the language, and copy the extracted text. If it’s long, split pages first to stay under the cap.
                        </p>
                        <a
                            href="#upload"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <Download className="h-5 w-5" />
                            Upload PDF
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

export default { Page: PdfToTextPage };
