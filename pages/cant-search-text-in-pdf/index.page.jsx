// pages/cant-search-text-in-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Search,
    ScanText,
    CheckCircle,
    AlertTriangle,
    FileText,
    Image as ImageIcon,
    Lock,
    Layers,
    ArrowRight,
    Link as LinkIcon,
    Copy,
    RefreshCw,
    Monitor,
} from "lucide-react";

function CantSearchTextInPDFPage() {
    const painBullets = [
        "You can SEE the word on the page, but Ctrl+F says “0 results”",
        "You’re on a deadline (invoice number, clause, name, amount) and search is failing",
        "You can’t select text properly (or it highlights as one big box)",
        "Copy/paste gives broken spacing, random characters, or nothing",
        "Some pages search, other pages don’t (mixed scan + real text)",
    ];

    const instantAnswer = [
        {
            title: "Most common reason",
            text: "The PDF is a scan (image-only). It looks like text, but there is no real text layer for Ctrl+F to search.",
            icon: ImageIcon,
        },
        {
            title: "Fastest fix",
            text: "Run OCR to add a searchable text layer (invisible overlay). Then Ctrl+F works again.",
            icon: ScanText,
        },
    ];

    const quickTests = [
        {
            id: "test-highlight",
            title: "Test #1 (10 seconds): Try selecting a single word",
            text: "If you can’t select individual words/letters and the page highlights like an image, your PDF is not searchable (it’s scanned).",
            icon: Copy,
        },
        {
            id: "test-ctrlf",
            title: "Test #2 (10 seconds): Ctrl+F a word you clearly see",
            text: "Search for a unique word that appears on the page. If it finds nothing, you’re likely dealing with a scan or broken text layer.",
            icon: Search,
        },
        {
            id: "test-mixed",
            title: "Test #3 (10 seconds): Check another page",
            text: "If some pages search and others don’t, it’s a mixed PDF (some pages are real text, some are scanned images).",
            icon: Layers,
        },
    ];

    const causes = [
        {
            title: "Cause A: Scanned / image-only PDF (most common)",
            why: [
                "The PDF came from a scanner or phone camera",
                "It looks like text but it’s actually a photo of the page",
                "Ctrl+F can’t search images because there’s no text layer",
            ],
            fixTitle: "Fix: Add a searchable text layer with OCR",
            fixText:
                "OCR detects text in the scanned image and adds an invisible text overlay. The PDF looks the same, but search, copy, and selection start working.",
            primaryCta: { text: "Make PDF searchable (OCR)", href: "/make-pdf-searchable/" },
            secondaryCta: { text: "OCR PDF (general)", href: "/ocr-pdf/" },
            icon: ScanText,
        },
        {
            title: "Cause B: Protected PDF / restricted content",
            why: [
                "Sometimes you can select text, but searching/copying behaves weirdly",
                "Permissions can restrict copying/searching in some viewers",
                "The PDF might be encrypted or created with restrictions",
            ],
            fixTitle: "Fix: Use an authorized, unlocked copy (recommended)",
            fixText:
                "If you own the document, export an unlocked copy from the source app or ask the sender for a version with permissions enabled. Respect restrictions.",
            primaryCta: { text: "Extract text (if you have rights)", href: "/pdf-to-text/" },
            secondaryCta: { text: "Contact / help", href: "/contact/" },
            icon: Lock,
        },
        {
            title: "Cause C: Broken / weird text layer (fonts, encoding, outlines)",
            why: [
                "Text exists but is stored in a way search can’t match reliably",
                "Copy/paste looks messy (wrong characters, broken spacing)",
                "Some PDFs use special encoding or outlined text that breaks search",
            ],
            fixTitle: "Fix: OCR for consistent search results (often works better)",
            fixText:
                "OCR can rebuild a cleaner searchable text layer on top of the page image. If you only need the text content, extract it and clean formatting.",
            primaryCta: { text: "PDF to Text", href: "/pdf-to-text/" },
            secondaryCta: { text: "Make PDF searchable", href: "/make-pdf-searchable/" },
            icon: FileText,
        },
        {
            title: "Cause D: Viewer issue (browser PDF viewer glitches)",
            why: [
                "Search fails in one viewer but works in another",
                "Browser viewers sometimes struggle with heavy PDFs",
                "Cached rendering can cause weird search behavior",
            ],
            fixTitle: "Fix: Try another viewer + refresh, then OCR if needed",
            fixText:
                "Try opening the PDF in another viewer (or re-download it). If it’s still not searchable, it’s likely scanned — OCR is the real fix.",
            primaryCta: { text: "Make it searchable (OCR)", href: "/make-pdf-searchable/" },
            secondaryCta: { text: "Split PDF (if huge)", href: "/split-pdf/" },
            icon: Monitor,
        },
    ];

    const bestPractices = [
        {
            title: "If the PDF is long, split first",
            text: "If there’s a page cap or huge file, split it and OCR only the pages you need. Faster + better control.",
            href: "/split-pdf/",
            icon: Layers,
        },
        {
            title: "If you just need the words, extract text",
            text: "If you don’t care about a searchable PDF, extract the text output and paste it where you need.",
            href: "/pdf-to-text/",
            icon: FileText,
        },
        {
            title: "If you need editing, convert after OCR",
            text: "For editing paragraphs/tables, OCR first, then convert to Word/Excel.",
            href: "/pdf-to-word-ocr/",
            icon: RefreshCw,
        },
    ];

    const faqs = [
        {
            q: "Why does Ctrl+F not work in my PDF even though I can see the text?",
            a: "Because many PDFs are scans (image-only). They look like text, but there’s no real text layer. Ctrl+F can only search actual text, not images, until OCR adds a text layer.",
        },
        {
            q: "How can I quickly tell if my PDF is searchable?",
            a: "Try selecting a single word. If you can’t select individual words/letters and the page highlights like a picture, it’s likely a scanned non-searchable PDF.",
        },
        {
            q: "Will OCR make Ctrl+F work again?",
            a: "In most scanned PDFs, yes. OCR adds an invisible text overlay so search, copy, and selection work much better.",
        },
        {
            q: "Some pages search and some pages don’t — why?",
            a: "That’s a mixed PDF: some pages contain real text and other pages are scanned images. OCR the scanned pages for consistent search results.",
        },
        {
            q: "My file is too long / there is a page limit. What should I do?",
            a: "Use Split PDF to keep only the pages you need, then run OCR on the smaller file.",
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
                            Ctrl+F Doesn’t Work in PDF?
                            <br />
                            <span className="text-blue-600">Fix “Can’t Search Text in PDF” in Minutes</span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-4">
                            You’re not imagining it: some PDFs <strong>look readable</strong> but are actually{" "}
                            <strong>not searchable</strong>. If Ctrl+F shows zero results, it usually means the document is a scan
                            (image-only) with no text layer. This page helps you diagnose the cause fast and fix it.
                        </p>

                        <div className="bg-white border rounded-2xl p-5 shadow-sm mb-6">
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-600" />
                                The pain you’re probably feeling right now
                            </h2>
                            <ul className="space-y-2 text-gray-700">
                                {painBullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {instantAnswer.map((x) => (
                                <div key={x.title} className="bg-white border rounded-xl p-5 shadow-sm text-left">
                                    <div className="flex items-start gap-3">
                                        <x.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h2 className="text-lg font-bold mb-1">{x.title}</h2>
                                            <p className="text-gray-600">{x.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#upload"
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
                            >
                                <ScanText className="h-5 w-5" />
                                Make it searchable (OCR)
                            </a>

                            <a
                                href="#tests"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                            >
                                <Search className="h-5 w-5" />
                                10-second tests
                            </a>
                        </div>

                        <p className="text-sm text-gray-600 mt-5">
                            Want the deeper explanation? See{" "}
                            <a
                                href="/searchable-vs-non-searchable-pdf/"
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Searchable vs Non-Searchable PDF
                            </a>
                            .
                        </p>
                    </div>

                    {/* TOOL / CTA */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-white border rounded-2xl shadow p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-blue-600" />
                                <p className="font-semibold">Fix it now: upload your PDF</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-gray-50 border rounded-xl p-4">
                                <p className="font-semibold text-gray-900 mb-1">Huge PDF or page cap?</p>
                                <p className="text-sm text-gray-600">
                                    Split it first, then OCR only the pages you need:
                                    {" "}
                                    <a href="/split-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                        Split PDF
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="mt-3 text-xs text-gray-500">
                                Only need raw text (not a searchable PDF)?
                                {" "}
                                <a href="/pdf-to-text/" className="underline hover:text-gray-700">
                                    PDF to Text
                                </a>
                                .
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* TESTS */}
                <section id="tests" className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">How to confirm why PDF search fails (fast)</h2>
                        <p className="text-gray-700 mb-6">
                            These tests work in almost any PDF viewer. You’ll know the cause in under a minute.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {quickTests.map((t) => (
                                <div key={t.id} className="bg-white border rounded-xl p-5 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <t.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">{t.title}</h3>
                                            <p className="text-gray-600">{t.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">The #1 “dead giveaway”</h3>
                                    <p className="text-gray-700">
                                        If you can’t select individual words, your PDF is not searchable. OCR is the correct fix.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAUSES + FIXES */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Why Ctrl+F doesn’t work in PDFs (and what to do)</h2>

                        <div className="space-y-4">
                            {causes.map((c) => (
                                <details key={c.title} className="bg-gray-50 border rounded-xl p-5">
                                    <summary className="font-semibold cursor-pointer flex items-center gap-2">
                                        <c.icon className="h-5 w-5 text-blue-600" />
                                        {c.title}
                                    </summary>

                                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-2">What you’ll notice</p>
                                            <ul className="list-disc ml-6 space-y-1 text-gray-600">
                                                {c.why.map((b) => (
                                                    <li key={b}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-gray-900 mb-2">{c.fixTitle}</p>
                                            <p className="text-gray-600">{c.fixText}</p>

                                            <div className="flex flex-col sm:flex-row gap-2 mt-3">
                                                <a
                                                    href={c.primaryCta.href}
                                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700"
                                                >
                                                    {c.primaryCta.text} <ArrowRight className="h-4 w-4" />
                                                </a>

                                                <a
                                                    href={c.secondaryCta.href}
                                                    className="inline-flex items-center justify-center gap-2 bg-white border px-5 py-2 rounded-lg font-semibold text-blue-700 hover:bg-gray-50"
                                                >
                                                    {c.secondaryCta.text}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            ))}
                        </div>

                        <div className="mt-8 bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <ScanText className="h-5 w-5 text-blue-600" />
                                What “make PDF searchable” actually does
                            </h3>
                            <p className="text-gray-700 mb-3">
                                In most cases, the PDF page image stays the same — OCR simply adds an{" "}
                                <strong>invisible text layer</strong> underneath so Ctrl+F, selection, and copy start working.
                            </p>
                            <p className="text-gray-700">
                                If your goal is editing (not just search/copy), OCR first and then convert:
                                {" "}
                                <a href="/pdf-to-word-ocr/" className="text-blue-700 underline hover:text-blue-900">
                                    PDF to Word (OCR)
                                </a>
                                {" "}
                                or
                                {" "}
                                <a href="/pdf-to-excel-ocr/" className="text-blue-700 underline hover:text-blue-900">
                                    PDF to Excel (OCR)
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </section>

                {/* BEST PRACTICES */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Best next steps (depending on what you need)</h2>
                        <p className="text-gray-700 mb-6">
                            Different goal = different best tool. Pick the path that saves time.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {bestPractices.map((t) => (
                                <div key={t.title} className="bg-white border rounded-xl p-5 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <t.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">{t.title}</h3>
                                            <p className="text-gray-600 mb-3">{t.text}</p>
                                            <a href={t.href} className="text-blue-700 underline hover:text-blue-900">
                                                Open tool
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Reality check</h3>
                                    <p className="text-gray-700">
                                        OCR accuracy depends on scan quality. Blurry, skewed, low-contrast pages cause mistakes — proofread important output.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-white">
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
                        <h2 className="text-3xl font-bold text-white mb-2">Make Ctrl+F work again</h2>
                        <p className="text-blue-100 mb-6">
                            Upload your PDF, run OCR, and search the text instantly.
                        </p>
                        <a
                            href="#upload"
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ScanText className="h-5 w-5" />
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
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Related Issues</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/is-my-pdf-scanned/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                            Is PDF Scanned?
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* NEXT STEPS */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Next Steps</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/ocr/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                            <span className="font-semibold text-gray-700 group-hover:text-blue-700">OCR Tool (Fix It)</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PARENT */}
                        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                            <a href="/blog/" className="text-sm font-semibold text-gray-500 hover:text-blue-600 uppercase tracking-wide">
                                View Blog Home
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

export default { Page: CantSearchTextInPDFPage };
