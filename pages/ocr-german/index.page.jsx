// pages/ocr-german/index.page.jsx
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

function OCRGermanPage() {
    const benefits = [
        "OCR German PDFs online: make scanned PDFs searchable with an invisible text layer",
        "Better recognition for German characters (ä, ö, ü, ß) when you choose German as the OCR language",
        "Extract German text for translation, summaries, emails, or copying into Word / Google Docs",
        "Works for invoices, receipts, contracts, letters, forms, certificates, books, and scanned notes",
        "If your PDF hits a page cap, split it first and OCR only the pages you need",
    ];

    const painPoints = [
        "Ctrl+F (Cmd+F) doesn’t find words in your German PDF (often image-only scan)",
        "You can’t select text — the PDF behaves like a picture",
        "Copy/paste returns blanks or broken characters",
        "Umlauts/ß are wrong (often language mismatch + low-quality scan)",
    ];

    const howToSteps = [
        {
            id: "step-upload",
            title: "1) Upload your scanned German PDF",
            text:
                "Upload an image-only PDF (scan) or a photo-based document. If it’s long, split the PDF first so you OCR only the pages you actually need.",
        },
        {
            id: "step-language",
            title: "2) Select German (Deutsch) as the OCR language",
            text:
                "Choose German to improve recognition for umlauts (ä, ö, ü) and ß. If your document is bilingual, select the dominant language shown on the page.",
        },
        {
            id: "step-download",
            title: "3) Run OCR and download a searchable PDF (or extract text)",
            text:
                "After OCR, your PDF becomes searchable/selectable. Download the searchable PDF or copy the extracted German text.",
        },
    ];

    const quickChecks = [
        "Select a single word — if it highlights, OCR created a real text layer.",
        "Press Ctrl+F (Cmd+F on Mac) and search a visible German word.",
        "Copy/paste a paragraph into a text editor — umlauts and ß should remain readable.",
        "If output is messy: re-scan sharper (less blur, less skew, fewer shadows) and retry.",
    ];

    const faqs = [
        {
            q: "What is “OCR German”?",
            a: "OCR German means extracting German text from scanned images or PDFs. OCR can add a searchable text layer beneath scanned pages so you can search, select, and copy German text.",
        },
        {
            q: "Does selecting German (Deutsch) improve OCR accuracy?",
            a: "Often yes. OCR engines commonly use language-specific rules/dictionaries/models. Selecting German can improve recognition for umlauts (ä, ö, ü), ß, and common German words.",
        },
        {
            q: "Can OCR keep German characters like ä, ö, ü, ß?",
            a: "Usually yes if the scan is clear and German is selected. Blurry scans, heavy compression, skewed pages, or shadows can reduce accuracy.",
        },
        {
            q: "My scanned German PDF isn’t searchable and Ctrl+F doesn’t work — why?",
            a: "Many scanned PDFs contain only page images (no real text). Ctrl+F can’t search an image until OCR creates a text layer. After OCR, try selecting a single word to confirm it worked.",
        },
        {
            q: "My PDF is too long and there’s a page limit. What should I do?",
            a: "Split the PDF into smaller files and OCR only the pages you need (for example the pages with German text).",
        },
        {
            q: "Do you also convert scanned PDFs to Word or Excel?",
            a: "Yes. Use Scanned PDF to Word (OCR) or Scanned PDF to Excel (OCR) when you need editable output. OCR is the recognition step; conversion formats the output for editing.",
        },
    ];

    return (
        <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>
            <SiteNav />

            {/* HERO */}
            <section className="digital-obsidian text-on-surface py-14 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            OCR German Online
                            <br />
                            <span className="text-primary-600">
                                Extract German text • Keep ä/ö/ü/ß • Make PDFs searchable
                            </span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-4">
                            Use <strong>German OCR</strong> to turn scanned PDFs and image-only documents into{" "}
                            <strong>searchable, selectable text</strong>. Perfect when Ctrl+F fails,
                            copy/paste doesn’t work, or you need German text for editing and reuse.
                        </p>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] mb-6">
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                What German OCR helps you do
                            </h2>
                            <ul className="space-y-2 text-on-surface-variant">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-on-surface-variant mt-4">
                                🇩🇪 Also searched as: <em>OCR Deutsch</em> / <em>Texterkennung</em> / <em>Text aus PDF extrahieren</em>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#tool"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" />
                                Start German OCR
                            </a>
                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <ArrowRight className="h-5 w-5" />
                                How it works
                            </a>
                        </div>

                        <p className="text-sm text-on-surface-variant mt-5">
                            Related:{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/languages/">
                                OCR languages supported
                            </a>{" "}
                            •{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/make-pdf-searchable/">
                                Make PDF searchable
                            </a>{" "}
                            •{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/cant-search-text-in-pdf/">
                                Ctrl+F doesn’t work
                            </a>
                            .
                        </p>
                    </div>

                    {/* TOOL */}
                    <aside id="tool" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Languages className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Run OCR (choose German)</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-[#091328]/50 border rounded-xl p-4">
                                <p className="font-semibold text-on-surface font-headline mb-1">Long PDF / page cap?</p>
                                <p className="text-sm text-on-surface-variant">
                                    Split it first and OCR only the pages you need:{" "}
                                    <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        Split PDF
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="mt-3 text-xs text-outline">
                                OCR requires uploading the file for processing. See{" "}
                                <a href="/privacy/" className="underline hover:text-on-surface-variant">
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
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Common German OCR problems (what they mean)</h2>
                        <p className="text-on-surface-variant mb-6">
                            These usually indicate your PDF is image-only (scanned) or the OCR language doesn’t match.
                        </p>

                        <ul className="grid md:grid-cols-2 gap-3 text-on-surface-variant">
                            {painPoints.map((s) => (
                                <li key={s} className="flex items-start gap-3 bg-[#091328]/50 border rounded-xl p-4">
                                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* HOW-TO */}
                <section id="how-to" className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to OCR a German PDF (3 steps)</h2>

                        <ol className="space-y-4">
                            {howToSteps.map((s) => (
                                <li key={s.id} id={s.id} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <div className="flex items-start gap-3">
                                        <ScanText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-1">{s.title}</h3>
                                            <p className="text-on-surface-variant">{s.text}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-6 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-primary-600" />
                                Quick checks (confirm OCR worked)
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 text-on-surface-variant">
                                {quickChecks.map((x) => (
                                    <li key={x} className="flex items-start gap-3 bg-[#091328]/50 border rounded-xl p-4">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{x}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Next actions */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">What do you want to do with the German text?</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/pdf-to-text/" className="bg-[#091328]/50 border rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition">
                                <div className="flex items-start gap-3">
                                    <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-on-surface font-headline mb-1">Extract text only</h3>
                                        <p className="text-on-surface-variant mb-3">Copy/paste German text without changing the PDF.</p>
                                        <span className="text-primary-700 font-semibold inline-flex items-center gap-2">
                                            Open <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </a>

                            <a href="/make-pdf-searchable/" className="bg-[#091328]/50 border rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition">
                                <div className="flex items-start gap-3">
                                    <Search className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-on-surface font-headline mb-1">Make PDF searchable</h3>
                                        <p className="text-on-surface-variant mb-3">Add an invisible text layer so Ctrl+F works.</p>
                                        <span className="text-primary-700 font-semibold inline-flex items-center gap-2">
                                            Open <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </a>

                            <a href="/pdf-to-word-ocr/" className="bg-[#091328]/50 border rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition">
                                <div className="flex items-start gap-3">
                                    <Copy className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-on-surface font-headline mb-1">Convert to Word (editable)</h3>
                                        <p className="text-on-surface-variant mb-3">Best for rewriting German paragraphs and formatting.</p>
                                        <span className="text-primary-700 font-semibold inline-flex items-center gap-2">
                                            Open <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <p className="text-on-surface-variant mt-6">
                            Need to edit the final document? Use{" "}
                            <a href="/edit-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                Edit PDF text
                            </a>{" "}
                            after OCR (or export to Word first for heavy edits).
                        </p>
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
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related OCR pages
                        </h2>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/languages/" className="underline hover:text-primary-900">OCR languages supported</a></li>
                            <li><a href="/ocr-pdf/" className="underline hover:text-primary-900">OCR PDF</a></li>
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-primary-900">Make PDF searchable</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-primary-900">PDF to Text</a></li>
                            <li><a href="/image-to-text/" className="underline hover:text-primary-900">Image to Text</a></li>
                            <li><a href="/photo-to-text/" className="underline hover:text-primary-900">Photo to Text</a></li>
                            <li><a href="/screenshot-to-text/" className="underline hover:text-primary-900">Screenshot to Text</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-primary mb-2">
                            OCR your German PDF in minutes
                        </h2>
                        <p className="text-primary-100 mb-6">
                            Make scans searchable and extract German text while keeping ä/ö/ü/ß readable.
                        </p>
                        <a
                            href="#tool"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ScanText className="h-5 w-5" />
                            Start German OCR
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

export default { Page: OCRGermanPage };
