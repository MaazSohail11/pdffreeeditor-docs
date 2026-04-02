// pages/is-my-pdf-scanned/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    ScanText,
    Search,
    Copy,
    Image as ImageIcon,
    CheckCircle,
    AlertTriangle,
    Layers,
    ArrowRight,
    Link as LinkIcon,
    ZoomIn,
    FileText,
    ShieldCheck,
} from "lucide-react";

function IsMyPDFScannedPage() {
    const pains = [
        "Ctrl+F / Command+F finds nothing (even though the word is clearly visible)",
        "You can’t select individual words (the whole page highlights like one big block)",
        "Copy/paste gives nothing or messy characters/spaces",
        "You need a “text-searchable PDF” for a portal, office workflow, or compliance",
        "Some pages search and others don’t (mixed PDF: real text + scanned images)",
    ];

    const quickTruthCards = [
        {
            title: "Scanned PDF (image-only)",
            text: "Looks like text, but it’s really a picture of a page. No real text layer → search & copy fail.",
            icon: ImageIcon,
        },
        {
            title: "Text PDF (searchable)",
            text: "Has an actual text layer. You can highlight words, copy/paste, and Ctrl+F works reliably.",
            icon: Search,
        },
    ];

    const tests = [
        {
            id: "test-1",
            title: "Test #1 (10 seconds): Try selecting ONE word",
            text: "If you can’t select individual words/letters and it highlights like an image, your PDF is scanned (image-only).",
            icon: Copy,
        },
        {
            id: "test-2",
            title: "Test #2 (10 seconds): Ctrl+F a word you can see",
            text: "Search for a unique word (e.g., a name or invoice number). If nothing is found, there’s likely no searchable text layer.",
            icon: Search,
        },
        {
            id: "test-3",
            title: "Test #3 (10 seconds): Zoom to 300–400%",
            text: "If letters become pixelated like a photo, it’s likely scanned. Real text usually stays crisp when zooming.",
            icon: ZoomIn,
        },
        {
            id: "test-4",
            title: "Test #4: Check another page (mixed PDFs are common)",
            text: "If some pages search and others don’t, the file is mixed: some pages contain text, others are scanned images.",
            icon: Layers,
        },
    ];

    const causes = [
        {
            title: "Cause A: The PDF came from a scanner or phone camera (most common)",
            bullets: [
                "It’s a photo/scan of the page",
                "No underlying text exists in the file",
                "Search/copy/highlight won’t behave like normal text PDFs",
            ],
            fixTitle: "Fix: Run OCR to add an invisible text layer",
            fixText:
                "OCR (Optical Character Recognition) detects letters in the scanned image and creates a searchable text layer underneath. The PDF looks the same, but becomes searchable and selectable.",
            primaryCta: { text: "Make my PDF searchable", href: "/make-pdf-searchable/" },
            secondaryCta: { text: "OCR PDF (general)", href: "/ocr-pdf/" },
            icon: ScanText,
        },
        {
            title: "Cause B: It’s partially scanned (mixed content)",
            bullets: [
                "Some pages were generated digitally (search works)",
                "Some pages are images (search fails)",
                "Common in merged PDFs, email attachments, or “print-to-PDF” + scan workflows",
            ],
            fixTitle: "Fix: Split and OCR only the scanned pages",
            fixText:
                "Splitting saves time and improves control—OCR the pages that need it, keep text pages untouched.",
            primaryCta: { text: "Split PDF", href: "/split-pdf/" },
            secondaryCta: { text: "Make scanned pages searchable", href: "/make-pdf-searchable/" },
            icon: Layers,
        },
        {
            title: "Cause C: Search fails due to a broken/odd text layer",
            bullets: [
                "Text exists but search doesn’t match reliably",
                "Copy/paste output is weird or inconsistent",
                "Some PDFs use unusual encoding or embedded fonts",
            ],
            fixTitle: "Fix: OCR often rebuilds a cleaner searchable layer",
            fixText:
                "If you need reliable search across the whole document, OCR can normalize output. If you only need the words, extract text instead.",
            primaryCta: { text: "PDF to Text", href: "/pdf-to-text/" },
            secondaryCta: { text: "Make PDF searchable", href: "/make-pdf-searchable/" },
            icon: FileText,
        },
    ];

    const nextSteps = [
        {
            title: "If you need a searchable PDF (Ctrl+F, select, copy)",
            text: "Use Make PDF Searchable — it adds a text layer while keeping the original look.",
            href: "/make-pdf-searchable/",
            icon: ScanText,
        },
        {
            title: "If you only need the text content",
            text: "Use PDF to Text to extract words quickly (helpful for copy/paste into notes or docs).",
            href: "/pdf-to-text/",
            icon: FileText,
        },
        {
            title: "If your PDF is long / page-capped",
            text: "Split first, then OCR only the pages you actually need.",
            href: "/split-pdf/",
            icon: Layers,
        },
    ];

    const faqs = [
        {
            q: "How can I tell if a PDF is scanned?",
            a: "Try selecting a single word. If you can’t highlight individual words/letters and the page behaves like an image, it’s likely a scanned (image-only) PDF.",
        },
        {
            q: "Why doesn’t Ctrl+F work on a scanned PDF?",
            a: "Because scanned PDFs often contain only image data (a picture of the page), not real text. Ctrl+F can only search actual text until OCR creates a text layer.",
        },
        {
            q: "What does OCR do to a scanned PDF?",
            a: "OCR detects letters in the image and adds an invisible text layer underneath, making the PDF searchable, selectable, and easier to copy from.",
        },
        {
            q: "Can a PDF be partially scanned?",
            a: "Yes. Mixed PDFs are common—some pages contain real text, others are scanned images. OCR the scanned pages for consistent search results.",
        },
        {
            q: "My PDF is too long and there’s a page limit. What should I do?",
            a: "Split the PDF into smaller parts, keep only the pages you need, then run OCR on that smaller file.",
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
                            Is My PDF Scanned?
                            <br />
                            <span className="text-primary-600">How to tell in 10 seconds (and fix it)</span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-5">
                            If <strong>Ctrl+F doesn’t work</strong>, you can’t select a single word, or copy/paste is broken,
                            your PDF is probably a <strong>scanned image-only PDF</strong>. This page shows quick tests and the
                            fastest way to convert it into a searchable PDF.
                        </p>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] mb-6">
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-600" />
                                Common reasons people land here
                            </h2>
                            <ul className="space-y-2 text-on-surface-variant">
                                {pains.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {quickTruthCards.map((x) => (
                                <div key={x.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] text-left">
                                    <div className="flex items-start gap-3">
                                        <x.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h2 className="text-lg font-bold mb-1">{x.title}</h2>
                                            <p className="text-on-surface-variant">{x.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#fix"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" />
                                Make my PDF searchable
                            </a>
                            <a
                                href="#tests"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <Search className="h-5 w-5" />
                                Run quick tests
                            </a>
                        </div>

                        <p className="text-sm text-on-surface-variant mt-5">
                            Related:{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/cant-search-text-in-pdf/">
                                Ctrl+F doesn’t work in PDF
                            </a>{" "}
                            •{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/searchable-vs-non-searchable-pdf/">
                                Searchable vs non-searchable PDF
                            </a>
                            .
                        </p>
                    </div>

                    {/* OCR TOOL */}
                    <aside id="fix" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Fix it now: upload and OCR</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-[#091328]/50 border rounded-xl p-4">
                                <p className="font-semibold text-on-surface font-headline mb-1">Long PDF or page cap?</p>
                                <p className="text-sm text-on-surface-variant">
                                    Split first and OCR only the pages you need:
                                    {" "}
                                    <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        Split PDF
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="mt-3 text-xs text-outline">
                                OCR requires uploading the file for processing. For sensitive documents, review{" "}
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
                {/* TESTS */}
                <section id="tests" className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">How to tell if a PDF is scanned (quick tests)</h2>
                        <p className="text-on-surface-variant mb-6">
                            You don’t need special software. These tests work in most PDF viewers.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {tests.map((t) => (
                                <div key={t.id} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <div className="flex items-start gap-3">
                                        <t.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-2">{t.title}</h3>
                                            <p className="text-on-surface-variant">{t.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">Most reliable signal</h3>
                                    <p className="text-on-surface-variant">
                                        If you can’t select a single word, your PDF is almost certainly scanned (image-only). OCR is the fix.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAUSES + FIXES */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Why PDFs become “image-only” (and what to do)</h2>

                        <div className="space-y-4">
                            {causes.map((c) => (
                                <details key={c.title} className="bg-[#091328]/50 border rounded-xl p-5">
                                    <summary className="font-semibold cursor-pointer flex items-center gap-2">
                                        <c.icon className="h-5 w-5 text-primary-600" />
                                        {c.title}
                                    </summary>

                                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="font-semibold text-on-surface font-headline mb-2">What you’ll notice</p>
                                            <ul className="list-disc ml-6 space-y-1 text-on-surface-variant">
                                                {c.bullets.map((b) => (
                                                    <li key={b}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-on-surface font-headline mb-2">{c.fixTitle}</p>
                                            <p className="text-on-surface-variant">{c.fixText}</p>

                                            <div className="flex flex-col sm:flex-row gap-2 mt-3">
                                                <a
                                                    href={c.primaryCta.href}
                                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-5 py-2 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all"
                                                >
                                                    {c.primaryCta.text} <ArrowRight className="h-4 w-4" />
                                                </a>

                                                <a
                                                    href={c.secondaryCta.href}
                                                    className="inline-flex items-center justify-center gap-2 bg-[#091328]/50 backdrop-blur-xl border border-white/5 px-5 py-2 rounded-full font-semibold text-primary-700 hover:bg-[#091328]/50"
                                                >
                                                    {c.secondaryCta.text}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            ))}
                        </div>

                        <div className="mt-8 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-primary-600" />
                                What OCR changes (and what it doesn’t)
                            </h3>
                            <p className="text-on-surface-variant mb-3">
                                In most cases, your scanned page image stays the same — OCR simply adds an{" "}
                                <strong>invisible searchable text layer</strong> underneath so Ctrl+F, selection, and copy work.
                            </p>
                            <p className="text-on-surface-variant">
                                If you want editing (not just search), OCR first then convert:
                                {" "}
                                <a href="/pdf-to-word-ocr/" className="text-primary-700 underline hover:text-primary-900">
                                    Scanned PDF to Word (OCR)
                                </a>
                                {" "}
                                or
                                {" "}
                                <a href="/pdf-to-excel-ocr/" className="text-primary-700 underline hover:text-primary-900">
                                    Scanned PDF to Excel (OCR)
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </section>

                {/* NEXT STEPS */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Best next step (pick your goal)</h2>
                        <p className="text-on-surface-variant mb-6">
                            The fastest workflow depends on what you’re trying to do.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {nextSteps.map((t) => (
                                <div key={t.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <div className="flex items-start gap-3">
                                        <t.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-2">{t.title}</h3>
                                            <p className="text-on-surface-variant mb-3">{t.text}</p>
                                            <a href={t.href} className="text-primary-700 underline hover:text-primary-900">
                                                Open tool
                                            </a>
                                        </div>
                                    </div>
                                </div>
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
                                <details key={i} className="bg-[#091328]/50 p-4 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.1)] border">
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
                        <h2 className="text-3xl font-bold text-on-primary mb-2">Convert your scanned PDF into a searchable PDF</h2>
                        <p className="text-primary-100 mb-6">
                            Upload, run OCR, and start searching and copying text instantly.
                        </p>
                        <a
                            href="#fix"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ScanText className="h-5 w-5" />
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

export default { Page: IsMyPDFScannedPage };
