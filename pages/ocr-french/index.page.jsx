// pages/ocr-french/index.page.jsx
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

function OCRFrenchPage() {
    const benefits = [
        "OCR French PDFs online: make scanned documents searchable with an invisible text layer",
        "Better recognition for French accents (é, è, ê, ç, à, ù) when you choose French as the OCR language",
        "Extract French text for translation, summaries, emails, or copying into Word/Google Docs",
        "Works for invoices, receipts, contracts, letters, forms, books, and scanned notes",
        "If your PDF hits a page limit, split it first and OCR only the pages you need",
    ];

    const painPoints = [
        "Ctrl+F doesn’t find words in your French PDF (the file is image-only)",
        "You can’t select text — the page behaves like a picture",
        "Copy/paste gives blanks or broken characters",
        "Accents are missing or wrong (often caused by wrong OCR language or low-quality scans)",
    ];

    const howToSteps = [
        {
            id: "step-upload",
            title: "1) Upload your French PDF (or scan)",
            text:
                "Upload a scanned PDF (image-only) or a photo-based document. If the file is long, split it into smaller parts first.",
        },
        {
            id: "step-language",
            title: "2) Select French as the OCR language",
            text:
                "Choose French to improve recognition of accents and French words. If your document is bilingual, pick the dominant language on the page.",
        },
        {
            id: "step-download",
            title: "3) Run OCR and download a searchable PDF (or extract text)",
            text:
                "After OCR, you should be able to select words and search with Ctrl+F. Download your searchable PDF or copy extracted text.",
        },
    ];

    const quickChecks = [
        "Try selecting a single word — if it highlights, OCR created a text layer.",
        "Press Ctrl+F (Cmd+F on Mac) and search a visible French word.",
        "Copy/paste a paragraph into a text editor — accents should remain readable.",
        "If results are messy: re-scan at higher quality (sharper image, less skew/shadow-[0_0_25px_rgba(139,92,246,0.2)]) and retry.",
    ];

    const faqs = [
        {
            q: "What is “OCR French”?",
            a: "OCR French means extracting French text from scanned images or PDFs. OCR adds a searchable text layer beneath scanned pages so you can search, select, and copy the French text.",
        },
        {
            q: "Does choosing French as the OCR language really help?",
            a: "Yes. Language selection often improves accuracy because OCR uses language-specific rules and dictionaries/models—especially important for French accents and common French words.",
        },
        {
            q: "Can OCR keep French accents like é, è, ê, ç, à?",
            a: "Often yes—if the scan is clear and you choose French as the OCR language. Blurry scans, skew, low resolution, or heavy compression can still reduce accuracy.",
        },
        {
            q: "My French PDF is scanned and Ctrl+F doesn’t work. Why?",
            a: "Many scanned PDFs contain only page images (no real text). Ctrl+F can’t search images until OCR creates a text layer. Run OCR, then try selecting a single word to confirm it worked.",
        },
        {
            q: "My PDF is too long and there’s a page limit. What should I do?",
            a: "Split the PDF into smaller files and OCR only the pages you need (for example the pages with French text).",
        },
        {
            q: "Do you also convert French scanned PDFs to Word or Excel?",
            a: "Yes — for editable output, use Scanned PDF to Word (OCR) or Scanned PDF to Excel (OCR). OCR is the recognition step; conversion uses OCR results to create editable files.",
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
                            OCR French Online
                            <br />
                            <span className="text-primary-600">
                                Extract French text • Keep accents • Make PDFs searchable
                            </span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-4">
                            Use <strong>French OCR</strong> to turn scanned PDFs and image-only documents into{" "}
                            <strong>searchable, selectable text</strong>. This is ideal when Ctrl+F fails,
                            copy/paste doesn’t work, or you need the text for editing and reuse.
                        </p>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] mb-6">
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                What you can do with French OCR
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
                                🇫🇷 Also searched as: <em>OCR en français</em> / <em>reconnaissance optique de caractères</em>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#tool"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" />
                                Start French OCR
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
                                <p className="font-semibold">Run OCR (choose French)</p>
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
                        <h2 className="text-2xl font-bold mb-3">Common French OCR problems (and what they mean)</h2>
                        <p className="text-on-surface-variant mb-6">
                            These are the exact issues that usually indicate an image-only scan or a language mismatch.
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
                        <h2 className="text-2xl font-bold mb-6">How to OCR a French PDF (3 steps)</h2>

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
                                Quick checks (to confirm OCR worked)
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

                {/* What next */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">What do you want to do with the French text?</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/pdf-to-text/" className="bg-[#091328]/50 border rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition">
                                <div className="flex items-start gap-3">
                                    <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-on-surface font-headline mb-1">Extract French text only</h3>
                                        <p className="text-on-surface-variant mb-3">Copy/paste the text without changing the PDF.</p>
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
                                        <h3 className="font-semibold text-on-surface font-headline mb-1">Make French PDF searchable</h3>
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
                                        <p className="text-on-surface-variant mb-3">Best for rewriting French paragraphs and formatting.</p>
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
                            after OCR (or export to Word first if you need heavy editing).
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

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-primary mb-2">
                            OCR your French PDF in minutes
                        </h2>
                        <p className="text-primary-100 mb-6">
                            Make scans searchable and extract French text while keeping accents readable.
                        </p>
                        <a
                            href="#tool"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ScanText className="h-5 w-5" />
                            Start French OCR
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

export default { Page: OCRFrenchPage };
