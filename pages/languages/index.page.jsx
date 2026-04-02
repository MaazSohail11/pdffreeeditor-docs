// pages/languages/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Languages,
    CheckCircle,
    AlertTriangle,
    ScanText,
    Search,
    Copy,
    ArrowRight,
    ShieldCheck,
    Link as LinkIcon,
    FileText,
} from "lucide-react";

function OCRLanguagesPage() {
    // Your currently supported set (keep this in sync with your UI)
    const supported = [
        { name: "English", native: "English", example: "contracts, resumes, forms" },
        { name: "French", native: "Français", example: "invoices, letters, PDFs" },
        { name: "Spanish", native: "Español", example: "documents, receipts" },
        { name: "Portuguese", native: "Português", example: "bank PDFs, forms" },
        { name: "German", native: "Deutsch", example: "reports, scans" },
        { name: "Italian", native: "Italiano", example: "letters, certificates" },
    ];

    const painPoints = [
        "OCR results look “wrong” or miss accents (é, ñ, ç) — language mismatch is a common reason",
        "Ctrl+F still doesn’t find expected words — PDF may be scanned or OCR language was incorrect",
        "Copy/paste output has broken spacing — scan quality + language selection matters",
        "Mixed-language PDFs (e.g., English + French) — you need a primary language strategy",
    ];

    const quickRules = [
        {
            title: "Rule #1: Pick the main language on the page",
            text:
                "If 80% of the page is French, select French. OCR engines use language-specific patterns and dictionaries; the wrong one reduces accuracy.",
            icon: Languages,
        },
        {
            title: "Rule #2: If it’s mixed, choose the dominant language",
            text:
                "For bilingual pages, choose the language that appears most. Mixed-language OCR works best when one language clearly dominates.",
            icon: CheckCircle,
        },
        {
            title: "Rule #3: If results are messy, fix the scan first",
            text:
                "Low DPI, blur, skew, and shadows hurt OCR more than anything. Straighten, increase clarity, and re-run OCR.",
            icon: AlertTriangle,
        },
    ];

    const whatUsersWant = [
        {
            title: "Make a scanned PDF searchable",
            desc: "Add an invisible text layer so Ctrl+F and copy work.",
            href: "/make-pdf-searchable/",
            icon: Search,
        },
        {
            title: "OCR PDF (general)",
            desc: "Upload a scan and run OCR to get searchable output.",
            href: "/ocr-pdf/",
            icon: ScanText,
        },
        {
            title: "Extract text only",
            desc: "If you only need the words, extract them quickly.",
            href: "/pdf-to-text/",
            icon: FileText,
        },
    ];

    const faqs = [
        {
            q: "Which OCR languages do you support?",
            a: "Right now we support English, French, Spanish, Portuguese, German, and Italian. Choose the closest match to your document’s main language for best accuracy.",
        },
        {
            q: "Does choosing the OCR language really matter?",
            a: "Yes. OCR engines use language-specific rules and dictionaries/models. Selecting the correct language can noticeably improve recognition accuracy—especially for accents and non-English text.",
        },
        {
            q: "What if my PDF has multiple languages?",
            a: "Choose the dominant language (the one that appears most on the page). If it’s heavily mixed, consider OCRing in the primary language and then re-check key lines manually.",
        },
        {
            q: "Why is my OCR output missing accents (é, ñ, ç)?",
            a: "This is often a language mismatch or low-quality scan issue. Select the correct language and ensure the scan is sharp (higher DPI, less blur, no shadows).",
        },
        {
            q: "Ctrl+F still doesn’t work after OCR — why?",
            a: "Either the PDF is still image-only (OCR didn’t add a text layer), the file is protected, or the scan quality is too low. Try “Make PDF searchable” again and verify you can select a single word afterward.",
        },
        {
            q: "My PDF is long and there’s a page limit. What should I do?",
            a: "Split the PDF into smaller files (keep only the pages you need) and OCR those smaller parts.",
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
                            OCR Languages Supported
                            <br />
                            <span className="text-primary-600">Choose the right language for better accuracy</span>
                        </h1>

                        {/* AEO-ready definition block */}
                        <p className="text-lg text-on-surface-variant mb-4">
                            The <strong>best OCR language</strong> is usually the{" "}
                            <strong>main language shown on the page</strong>. Selecting it improves recognition
                            (especially accents, names, and dictionary words) and helps your PDF become more reliably searchable.
                        </p>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] mb-6">
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <Languages className="h-5 w-5 text-primary-600" />
                                Currently supported languages
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-3">
                                {supported.map((l) => (
                                    <div key={l.name} className="bg-[#091328]/50 border rounded-xl p-4 text-left">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-on-surface font-headline">
                                                    {l.name} <span className="text-outline font-normal">({l.native})</span>
                                                </p>
                                                <p className="text-sm text-on-surface-variant">Common: {l.example}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 text-sm text-on-surface-variant">
                                Want to convert a scan right now? Use{" "}
                                <a href="/make-pdf-searchable/" className="text-primary-700 underline hover:text-primary-900">
                                    Make PDF searchable
                                </a>
                                .
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#try"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" />
                                Try OCR now
                            </a>
                            <a
                                href="#choose"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <ArrowRight className="h-5 w-5" />
                                How to choose language
                            </a>
                        </div>

                        <p className="text-sm text-on-surface-variant mt-5">
                            Related:{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/is-my-pdf-scanned/">
                                Is my PDF scanned?
                            </a>{" "}
                            •{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/cant-search-text-in-pdf/">
                                Ctrl+F doesn’t work in PDF
                            </a>
                            .
                        </p>
                    </div>

                    {/* TOOL (conversion) */}
                    <aside id="try" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Run OCR</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-[#091328]/50 border rounded-xl p-4">
                                <p className="font-semibold text-on-surface font-headline mb-1">Long PDF or page cap?</p>
                                <p className="text-sm text-on-surface-variant">
                                    Split first, OCR only what you need:{" "}
                                    <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        Split PDF
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="mt-3 text-xs text-outline">
                                OCR requires uploading the file for processing. Review{" "}
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
                        <h2 className="text-2xl font-bold mb-3">When language selection matters most</h2>
                        <p className="text-on-surface-variant mb-6">
                            These are the exact problems people search for — and language choice is often the hidden reason.
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

                {/* Choose language */}
                <section id="choose" className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to choose the best OCR language (fast rules)</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {quickRules.map((r) => (
                                <div key={r.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <div className="flex items-start gap-3">
                                        <r.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-1">{r.title}</h3>
                                            <p className="text-on-surface-variant">{r.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-primary-600" />
                                Quick validation (to know OCR worked)
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 text-on-surface-variant">
                                {[
                                    "After OCR, you should be able to select a single word.",
                                    "Ctrl+F should find words that were previously “unsearchable”.",
                                    "Copy/paste should produce readable output (not blank).",
                                    "If it’s still unsearchable, the PDF may be protected or scan quality may be too low.",
                                ].map((x) => (
                                    <li key={x} className="flex items-start gap-3 bg-[#091328]/50 border rounded-xl p-4">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{x}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Next best actions */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">What do you want to do?</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {whatUsersWant.map((b) => (
                                <a
                                    key={b.href}
                                    href={b.href}
                                    className="bg-[#091328]/50 border rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition"
                                >
                                    <div className="flex items-start gap-3">
                                        <b.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-1">{b.title}</h3>
                                            <p className="text-on-surface-variant mb-3">{b.desc}</p>
                                            <span className="text-primary-700 font-semibold inline-flex items-center gap-2">
                                                Open <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
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

                {/* Related */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related pages
                        </h2>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-primary-900">Make PDF searchable</a></li>
                            <li><a href="/ocr-pdf/" className="underline hover:text-primary-900">OCR PDF</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-primary-900">PDF to Text</a></li>
                            <li><a href="/why-ocr-improves-searchability/" className="underline hover:text-primary-900">What is OCR in PDF?</a></li>
                            <li><a href="/is-my-pdf-scanned/" className="underline hover:text-primary-900">Is my PDF scanned?</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF</a></li>
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
                            Run OCR in the correct language — get cleaner results
                        </h2>
                        <p className="text-primary-100 mb-6">
                            Pick the main language of your document and convert scans into searchable PDFs.
                        </p>
                        <a
                            href="/make-pdf-searchable/"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ScanText className="h-5 w-5" />
                            Make PDF searchable
                        </a>
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

export default { Page: OCRLanguagesPage };
