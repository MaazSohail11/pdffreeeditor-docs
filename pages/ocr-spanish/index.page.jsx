// pages/ocr-spanish/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    ScanText,
    CheckCircle,
    Search,
    Copy,
    FileText,
    Languages,
    ShieldCheck,
    AlertTriangle,
    ArrowRight,
    Link as LinkIcon,
} from "lucide-react";

function OCRSpanishPage() {
    const benefits = [
        "OCR Spanish PDFs online: make scanned PDFs searchable with an invisible text layer",
        "Better recognition for Spanish characters (ñ, á, é, í, ó, ú, ü) when you choose Spanish",
        "Extract Spanish text for translation, summaries, emails, and copy/paste into Word or Google Docs",
        "Works for invoices, receipts, contracts, letters, forms, certificates, books, and notes",
        "If your PDF hits a page limit, split it first and OCR only the pages you need",
    ];

    const painPoints = [
        "Ctrl+F (Cmd+F) doesn’t find Spanish words in your PDF (often image-only scan)",
        "You can’t select text — it behaves like a photo",
        "Copy/paste gives blank output or weird spacing",
        "Accents or ñ are missing/wrong (often language mismatch + low-quality scan)",
    ];

    const howToSteps = [
        {
            id: "step-upload",
            title: "1) Upload your Spanish PDF (or scanned document)",
            text:
                "Upload a scanned PDF (image-only) or a photo-based document. If your file is long, split it into smaller PDFs first.",
        },
        {
            id: "step-language",
            title: "2) Select Spanish (Español) as the OCR language",
            text:
                "If a language option is available, choose Spanish for better recognition of ñ and accented characters. For bilingual pages, select the dominant language shown on the page.",
        },
        {
            id: "step-download",
            title: "3) Run OCR and download a searchable PDF (or extract text)",
            text:
                "After OCR, you should be able to select text and search with Ctrl+F. Download your searchable PDF or copy the extracted Spanish text.",
        },
    ];

    const quickChecks = [
        "Select a single word — if it highlights, OCR created a real text layer.",
        "Press Ctrl+F (Cmd+F on Mac) and search a visible Spanish word.",
        "Copy/paste a paragraph — ñ and accents should remain readable.",
        "If results look messy: use a sharper scan (less blur, less skew, fewer shadows) and retry.",
    ];

    const faqs = [
        {
            q: "What is “OCR Spanish”?",
            a: "OCR Spanish means extracting Spanish text from scanned images or PDFs. OCR can add a searchable text layer beneath scanned pages so you can search, select, and copy Spanish text.",
        },
        {
            q: "Does choosing Spanish (Español) improve OCR accuracy?",
            a: "Often yes. OCR engines use language-specific rules and dictionaries/models. Selecting Spanish can improve recognition for ñ, accents, and common Spanish words.",
        },
        {
            q: "Can OCR keep Spanish characters like ñ, á, é, í, ó, ú, ü?",
            a: "Usually yes if the scan is clear and Spanish is selected. Blurry scans, heavy compression, skewed pages, or shadows can reduce accuracy.",
        },
        {
            q: "My scanned Spanish PDF isn’t searchable and Ctrl+F doesn’t work — why?",
            a: "Many scanned PDFs contain only images of pages (no real text). Ctrl+F can’t search an image until OCR creates a text layer. After OCR, try selecting a single word to confirm it worked.",
        },
        {
            q: "My PDF is too long and there’s a page limit. What should I do?",
            a: "Split the PDF into smaller files and OCR only the pages you need (for example the pages containing Spanish text).",
        },
        {
            q: "Do you also convert Spanish scanned PDFs to Word or Excel?",
            a: "Yes. Use Scanned PDF to Word (OCR) or Scanned PDF to Excel (OCR) when you need editable output. OCR is the recognition step; conversion formats the output for editing.",
        },
    ];

    return (
        <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>
            <SiteNav />

            {/* HERO */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-14 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            OCR Spanish Online
                            <br />
                            <span className="text-blue-600">
                                Extract Spanish text • Keep ñ & accents • Make PDFs searchable
                            </span>
                        </h1>

                        <p className="text-lg text-gray-700 mb-4">
                            Use <strong>Spanish OCR</strong> to turn scanned PDFs and image-only documents into{" "}
                            <strong>searchable, selectable text</strong>. Perfect when Ctrl+F fails,
                            copy/paste doesn’t work, or you need the Spanish text for editing and reuse.
                        </p>

                        <div className="bg-white border rounded-2xl p-5 shadow-sm mb-6">
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                What Spanish OCR helps you do
                            </h2>
                            <ul className="space-y-2 text-gray-700">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-gray-600 mt-4">
                                🇪🇸 Also searched as: <em>OCR en español</em> / <em>reconocimiento óptico de caracteres</em>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#tool"
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
                            >
                                <ScanText className="h-5 w-5" />
                                Start Spanish OCR
                            </a>
                            <a
                                href="#how-to"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                            >
                                <ArrowRight className="h-5 w-5" />
                                How it works
                            </a>
                        </div>

                        <p className="text-sm text-gray-600 mt-5">
                            Related:{" "}
                            <a className="text-blue-700 underline hover:text-blue-900" href="/languages/">
                                OCR languages supported
                            </a>{" "}
                            •{" "}
                            <a className="text-blue-700 underline hover:text-blue-900" href="/make-pdf-searchable/">
                                Make PDF searchable
                            </a>{" "}
                            •{" "}
                            <a className="text-blue-700 underline hover:text-blue-900" href="/cant-search-text-in-pdf/">
                                Ctrl+F doesn’t work
                            </a>
                            .
                        </p>
                    </div>

                    {/* TOOL */}
                    <aside id="tool" className="lg:sticky lg:top-6">
                        <div className="bg-white border rounded-2xl shadow p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Languages className="h-5 w-5 text-blue-600" />
                                <p className="font-semibold">Run OCR (choose Spanish)</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-gray-50 border rounded-xl p-4">
                                <p className="font-semibold text-gray-900 mb-1">Long PDF / page cap?</p>
                                <p className="text-sm text-gray-600">
                                    Split it first and OCR only the pages you need:{" "}
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
                {/* Pain points */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Common Spanish OCR problems (what they mean)</h2>
                        <p className="text-gray-700 mb-6">
                            These are strong signals that your PDF is a scan (image-only) or the OCR language doesn’t match.
                        </p>

                        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                            {painPoints.map((s) => (
                                <li key={s} className="flex items-start gap-3 bg-gray-50 border rounded-xl p-4">
                                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* HOW-TO */}
                <section id="how-to" className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to OCR a Spanish PDF (3 steps)</h2>

                        <ol className="space-y-4">
                            {howToSteps.map((s) => (
                                <li key={s.id} id={s.id} className="bg-white border rounded-xl p-5 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <ScanText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                                            <p className="text-gray-700">{s.text}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-6 bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-blue-600" />
                                Quick checks (confirm OCR worked)
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                                {quickChecks.map((x) => (
                                    <li key={x} className="flex items-start gap-3 bg-gray-50 border rounded-xl p-4">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{x}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Next actions */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">What do you want to do with the Spanish text?</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/pdf-to-text/" className="bg-gray-50 border rounded-xl p-5 shadow-sm hover:shadow-md transition">
                                <div className="flex items-start gap-3">
                                    <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Extract text only</h3>
                                        <p className="text-gray-600 mb-3">Copy/paste Spanish text without changing the PDF.</p>
                                        <span className="text-blue-700 font-semibold inline-flex items-center gap-2">
                                            Open <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </a>

                            <a href="/make-pdf-searchable/" className="bg-gray-50 border rounded-xl p-5 shadow-sm hover:shadow-md transition">
                                <div className="flex items-start gap-3">
                                    <Search className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Make PDF searchable</h3>
                                        <p className="text-gray-600 mb-3">Add an invisible text layer so Ctrl+F works.</p>
                                        <span className="text-blue-700 font-semibold inline-flex items-center gap-2">
                                            Open <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </a>

                            <a href="/pdf-to-word-ocr/" className="bg-gray-50 border rounded-xl p-5 shadow-sm hover:shadow-md transition">
                                <div className="flex items-start gap-3">
                                    <Copy className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Convert to Word (editable)</h3>
                                        <p className="text-gray-600 mb-3">Best for rewriting Spanish paragraphs and formatting.</p>
                                        <span className="text-blue-700 font-semibold inline-flex items-center gap-2">
                                            Open <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <p className="text-gray-700 mt-6">
                            Need to edit the final document? Use{" "}
                            <a href="/edit-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                Edit PDF text
                            </a>{" "}
                            after OCR (or export to Word first for heavy edits).
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-white p-4 rounded-lg shadow-sm border">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <p className="mt-2 text-gray-700">{item.a}</p>
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
                            Related OCR pages
                        </h2>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/languages/" className="underline hover:text-blue-900">OCR languages supported</a></li>
                            <li><a href="/ocr-pdf/" className="underline hover:text-blue-900">OCR PDF</a></li>
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-blue-900">Make PDF searchable</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-blue-900">PDF to Text</a></li>
                            <li><a href="/image-to-text/" className="underline hover:text-blue-900">Image to Text</a></li>
                            <li><a href="/photo-to-text/" className="underline hover:text-blue-900">Photo to Text</a></li>
                            <li><a href="/screenshot-to-text/" className="underline hover:text-blue-900">Screenshot to Text</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split PDF</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-blue-900">Compress PDF</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-blue-600 text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            OCR your Spanish PDF in minutes
                        </h2>
                        <p className="text-blue-100 mb-6">
                            Make scans searchable and extract Spanish text while keeping ñ and accents readable.
                        </p>
                        <a
                            href="#tool"
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ScanText className="h-5 w-5" />
                            Start Spanish OCR
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

export default { Page: OCRSpanishPage };
