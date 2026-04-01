// pages/make-pdf-searchable/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Search,
    ScanText,
    FileText,
    CheckCircle,
    ShieldCheck,
    Scissors,
    Minimize2 as Compress,
    Link as LinkIcon,
    Download,
    Languages,
} from "lucide-react";

function MakePdfSearchablePage() {
    const supportedLanguages = ["English", "French", "Spanish", "Portuguese", "German", "Italian"];

    const benefits = [
        "Fix “Ctrl+F doesn’t work” in scanned PDFs by adding an invisible text layer (OCR)",
        "Make PDF text selectable so you can highlight and copy words",
        "Turn image-only PDFs into searchable documents without changing the visual layout",
        "Language selection improves accuracy (especially accents and similar-looking characters)",
        "Fast workflow: OCR is capped to the first 500 pages — split PDF to OCR only what you need",
        "No watermark on output",
    ];

    const problemChecks = [
        {
            title: "Ctrl+F finds nothing",
            text: "Your PDF is likely a scan (image-only). OCR adds real text so search works.",
        },
        {
            title: "Can’t highlight or copy text",
            text: "The PDF doesn’t contain a text layer. OCR recognizes characters and overlays searchable text.",
        },
        {
            title: "Looks like text but still not searchable",
            text: "Some PDFs are flattened. OCR rebuilds a searchable layer over the page images.",
        },
    ];

    const faqs = [
        {
            q: "What does “make PDF searchable” mean?",
            a: "It means adding a real text layer to a PDF so you can search (Ctrl+F), select, and copy text. Scanned PDFs are often just images, so they need OCR to become searchable.",
        },
        {
            q: "Why can’t I search text in my PDF?",
            a: "Because it’s probably a scanned/image-only PDF. OCR recognizes text inside the image and adds an invisible text overlay so search works.",
        },
        {
            q: "Will OCR change the look of my PDF?",
            a: "No. OCR typically keeps the page appearance the same and adds a hidden text layer on top for search/copy.",
        },
        {
            q: "Is there a page limit?",
            a: "Yes — OCR is capped to the first 500 pages for fast processing. If your PDF is longer, split it and OCR only the pages you need.",
        },
        {
            q: "Do I need to choose a language?",
            a: "It’s optional, but selecting the correct language usually improves accuracy—especially for accented letters (like French/Spanish/Portuguese) and tricky character shapes.",
        },
        {
            q: "How can I get better OCR accuracy?",
            a: "Use clear scans, avoid blur/shadows, keep pages straight, and pick the correct language. If text is tiny, re-scan at higher quality if possible.",
        },
    ];

    return (
        <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>
            <SiteNav />

            {/* Hero */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-14 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Make a Scanned PDF Searchable
                            <br />
                            <span className="text-blue-600">
                                Fix Ctrl+F • Add Text Layer • Copy &amp; Select Text
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-3">
                            If Ctrl+F doesn’t work in your PDF, the file is usually a scan (image-only).
                            This tool uses OCR to add an invisible text layer so your PDF becomes searchable and selectable.
                        </p>

                        <p className="text-base text-gray-600 mb-6">
                            OCR is capped to the <strong>first 500 pages</strong> for fast processing.
                            For longer files,{" "}
                            <a href="/split-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                split the PDF
                            </a>{" "}
                            and OCR only the pages you need.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#upload"
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
                            >
                                <ScanText className="h-5 w-5" />
                                Upload PDF to Make Searchable
                            </a>

                            <a
                                href="#how-to"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                            >
                                <FileText className="h-5 w-5" />
                                How it works (3 steps)
                            </a>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                What this page solves
                            </h2>
                            <ul className="space-y-2 text-gray-700">
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
                                        className="text-xs font-semibold px-3 py-1 rounded-full bg-white border text-gray-700"
                                    >
                                        {l}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tool */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-white border rounded-2xl shadow p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Search className="h-5 w-5 text-blue-600" />
                                <p className="font-semibold">Make your PDF searchable now</p>
                            </div>

                            {/* Your actual tool UI */}
                            <OCRTool minimal={true} />

                            <p className="text-xs text-gray-500 mt-3">
                                Long PDF? Use{" "}
                                <a href="/split-pdf/" className="underline hover:text-gray-700">
                                    Split PDF
                                </a>{" "}
                                to extract your required pages, then OCR the smaller file (faster + stays under the cap).
                            </p>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* Diagnosis section (high-intent long-tail) */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Why your PDF isn’t searchable (and how to fix it)
                        </h2>
                        <p className="text-gray-700 mb-5">
                            Many PDFs from scanners, photos, or old documents are basically images inside a PDF.
                            Images don’t contain real characters — that’s why search and copy fail. OCR fixes this by recognizing text and adding a searchable layer.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {problemChecks.map((c) => (
                                <div key={c.title} className="bg-gray-50 border rounded-xl p-5">
                                    <h3 className="font-semibold text-gray-900 mb-2">{c.title}</h3>
                                    <p className="text-gray-600">{c.text}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-700 mt-5">
                            Want the direct OCR page too? Use{" "}
                            <a href="/ocr-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                OCR PDF
                            </a>{" "}
                            (same engine — different intent).
                        </p>
                    </div>
                </section>

                {/* Page cap workflow */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Fastest way to make a long scanned PDF searchable (500-page cap)
                        </h2>
                        <p className="text-gray-700 mb-5">
                            Don’t OCR the entire document if you only need a chapter, invoice pages, or a few forms.
                            Extract the pages you need, then OCR the smaller file for faster results.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <Scissors className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Split to keep required pages</h3>
                                        <p className="text-gray-600">
                                            Use{" "}
                                            <a href="/split-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                Split PDF
                                            </a>{" "}
                                            to extract only the pages you need, then upload that smaller PDF for OCR here.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <Compress className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Compress if the file is huge</h3>
                                        <p className="text-gray-600">
                                            If the scan is very large in MB, run{" "}
                                            <a href="/compress-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                Compress PDF
                                            </a>{" "}
                                            first to speed up uploads and processing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 mt-5">
                            After OCR, for editing text-based PDFs, try{" "}
                            <a href="/edit-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                Edit PDF
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* How-to */}
                <section id="how-to" className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">
                            How to make a scanned PDF searchable (3 steps)
                        </h2>

                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h4 className="font-semibold">1) Upload your scanned PDF</h4>
                                <p className="text-gray-600">
                                    Upload the PDF that isn’t searchable. If it’s longer than 500 pages,{" "}
                                    <a href="/split-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                        split it
                                    </a>{" "}
                                    to keep only required pages (faster + stays under the cap).
                                </p>
                            </li>

                            <li id="step-language">
                                <h4 className="font-semibold">2) Select the language (recommended)</h4>
                                <p className="text-gray-600">
                                    Choose the document language to improve accuracy—especially for accents (French/Spanish/Portuguese) and tricky characters.
                                </p>
                            </li>

                            <li id="step-download">
                                <h4 className="font-semibold">3) Download your searchable PDF</h4>
                                <p className="text-gray-600">
                                    Download the PDF with an invisible text overlay. Ctrl+F now works, and you can copy and reuse text.
                                    For conversion workflows, use{" "}
                                    <a href="/pdf-to-word/" className="text-blue-700 underline hover:text-blue-900">
                                        PDF to Word
                                    </a>{" "}
                                    or{" "}
                                    <a href="/pdf-to-excel/" className="text-blue-700 underline hover:text-blue-900">
                                        PDF to Excel
                                    </a>
                                    .
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Accuracy + language tips */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            OCR accuracy tips (so your searchable PDF is actually usable)
                        </h2>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                            <li><strong>Select the correct language</strong> before OCR (biggest easy win).</li>
                            <li>Prefer clear scans: avoid blur, glare, and heavy shadows.</li>
                            <li>Keep pages straight (rotate/deskew if necessary).</li>
                            <li>If the text is tiny, a higher-quality scan usually beats digital zoom.</li>
                        </ul>

                        <div className="mt-6 flex items-center gap-2 text-gray-700">
                            <Languages className="h-5 w-5 text-blue-600" />
                            <span>
                                Supported on this tool:{" "}
                                <strong>English, French, Spanish, Portuguese, German, Italian</strong>
                            </span>
                        </div>
                    </div>
                </section>

                {/* Privacy */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
                        <p className="text-gray-700 mb-4">
                            Making a PDF searchable requires processing the document to recognize text.
                            If you’re testing, use sample PDFs or redact sensitive data. Review policies for retention/deletion details.
                        </p>

                        <div className="bg-gray-50 border rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Privacy checklist</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                        <li>Avoid uploading extremely sensitive documents.</li>
                                        <li>Use trusted networks and keep your browser updated.</li>
                                        <li>
                                            Read{" "}
                                            <a href="/privacy/" className="text-blue-700 underline hover:text-blue-900">
                                                Privacy
                                            </a>{" "}
                                            and{" "}
                                            <a href="/terms/" className="text-blue-700 underline hover:text-blue-900">
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
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-white p-4 rounded-lg shadow-sm">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <p className="mt-2 text-gray-700">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related tools */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related tools
                        </h2>
                        <p className="text-gray-600 mb-3">
                            Prepare scanned PDFs, convert results, and continue editing with these tools:
                        </p>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/ocr-pdf/" className="underline hover:text-blue-900">OCR PDF</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split PDF pages</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-blue-900">Compress PDF</a></li>
                            <li><a href="/pdf-to-word/" className="underline hover:text-blue-900">PDF to Word</a></li>
                            <li><a href="/pdf-to-excel/" className="underline hover:text-blue-900">PDF to Excel</a></li>
                            <li><a href="/pdf-to-image/" className="underline hover:text-blue-900">PDF to Image</a></li>
                            <li><a href="/merge-pdf/" className="underline hover:text-blue-900">Merge PDF files</a></li>
                            <li><a href="/edit-pdf/" className="underline hover:text-blue-900">Edit PDF text</a></li>
                            <li><a href="/tools/" className="underline hover:text-blue-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-blue-600 text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Make your PDF searchable now
                        </h2>
                        <p className="text-blue-100 mb-6">
                            Upload a scanned PDF and download a searchable version. If it’s long, split the pages first to stay under the cap.
                        </p>
                        <a
                            href="#upload"
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <Download className="h-5 w-5" />
                            Upload PDF
                        </a>
                    </div>
                </section>


                {/* SMART LINKING MAP */}
                <section className="py-12 bg-white border-t border-gray-200">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* SIBLINGS */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Related Tools</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/ocr-german/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                            OCR German
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ocr-spanish/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                            OCR Spanish
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/image-to-text/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                            Image to Text
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* NEXT STEPS */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Next Steps</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/pdf-to-word-ocr/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                            <span className="font-semibold text-gray-700 group-hover:text-blue-700">Convert to Word</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/edit-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                            <span className="font-semibold text-gray-700 group-hover:text-blue-700">Edit Text</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PARENT */}
                        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                            <a href="/ocr/" className="text-sm font-semibold text-gray-500 hover:text-blue-600 uppercase tracking-wide">
                                View OCR Home
                            </a>
                        </div>
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

export default { Page: MakePdfSearchablePage };
