// pages/searchable-vs-non-searchable-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Search,
    Copy,
    ScanText,
    FileText,
    CheckCircle,
    AlertTriangle,
    Lock,
    Image as ImageIcon,
    MousePointerClick,
    Layers,
    ArrowRight,
    Link as LinkIcon,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

function SearchableVsNonSearchablePDFPage() {
    const quickAnswer = [
        {
            title: "Searchable PDF",
            text: "You can highlight words, copy text, and use Ctrl+F/Command+F to find names, numbers, or phrases.",
            icon: Search,
        },
        {
            title: "Non-searchable PDF",
            text: "It looks like text, but it’s actually an image (scan/photo). Ctrl+F doesn’t work because there’s no real text layer.",
            icon: ImageIcon,
        },
    ];

    const fastTests = [
        {
            id: "test-highlight",
            title: "10-second test #1: Try highlighting a single word",
            text: "If you can select a single word/letter, your PDF is searchable. If the whole page highlights like a picture, it’s likely a scan.",
            icon: MousePointerClick,
        },
        {
            id: "test-ctrlf",
            title: "10-second test #2: Try Ctrl+F (or Command+F)",
            text: "Search for a word you can clearly see in the document. If nothing is found, it’s probably non-searchable (image-only).",
            icon: Search,
        },
        {
            id: "test-zoom",
            title: "10-second test #3: Zoom to 300–400%",
            text: "If letters become pixelated like a photo, it’s likely scanned. Real text usually stays crisp when zooming.",
            icon: ImageIcon,
        },
    ];

    const causes = [
        {
            title: "Cause A: It’s a scanned / image-only PDF (most common)",
            why: [
                "PDF was created from a scanner or phone camera",
                "No underlying text exists — it’s just an image of a page",
                "Copy, highlight, and Ctrl+F won’t work reliably",
            ],
            fixTitle: "Fix: Run OCR to add a real text layer",
            fixText:
                "OCR (Optical Character Recognition) detects text in the image and creates an invisible text layer so your PDF becomes searchable and copyable.",
            ctaText: "Make my PDF searchable (OCR)",
            ctaHref: "/make-pdf-searchable/",
            icon: ScanText,
        },
        {
            title: "Cause B: The PDF is protected or copying is restricted",
            why: [
                "You can sometimes select text but copy/paste fails",
                "Printing/copying might be blocked by permissions",
                "Some viewers show text but won’t let you reuse it",
            ],
            fixTitle: "Fix: Use an authorized, unlocked copy (recommended)",
            fixText:
                "If you own the document, export an unlocked version from the source or ask the sender for a copy with permissions enabled. Respect document restrictions.",
            ctaText: "Extract text (if you have rights)",
            ctaHref: "/pdf-to-text/",
            icon: Lock,
        },
        {
            title: "Cause C: It’s partially searchable (mixed layers)",
            why: [
                "Some pages have real text, others are scanned images",
                "Copy works in some areas but not others",
                "Ctrl+F finds some words but misses large sections",
            ],
            fixTitle: "Fix: OCR only the scanned pages (best results)",
            fixText:
                "If the file is long or mixed, split it into parts and OCR only the scanned pages. This preserves quality and keeps processing fast.",
            ctaText: "Split PDF first",
            ctaHref: "/split-pdf/",
            icon: Layers,
        },
    ];

    const emotionalUseCases = [
        {
            title: "“I’m on a deadline and Ctrl+F isn’t working…”",
            text: "You’re trying to find a name, invoice number, or clause — but nothing is searchable. That’s usually a scanned PDF. OCR fixes it.",
            icon: AlertTriangle,
        },
        {
            title: "“I can read it, but I can’t copy a single line.”",
            text: "If highlighting selects the whole page like a picture, you’re looking at an image-only PDF. OCR turns it into real text.",
            icon: Copy,
        },
        {
            title: "“The court/portal requires a text-searchable PDF.”",
            text: "Many official workflows require text-searchable files. If your PDF was scanned, OCR is the standard fix.",
            icon: ShieldCheck,
        },
    ];

    const bestPractices = [
        {
            title: "Pick the correct language",
            text: "OCR accuracy improves when the right language is selected (especially accents and special characters).",
            icon: Sparkles,
        },
        {
            title: "Use clean pages (not photos of screens)",
            text: "If possible, OCR the original scan/PDF instead of a screenshot. Better contrast = fewer mistakes.",
            icon: CheckCircle,
        },
        {
            title: "Split long PDFs first",
            text: "If you have a page cap or a big document, split it and OCR only the pages you actually need.",
            icon: Layers,
        },
    ];

    const faqs = [
        {
            q: "What is a searchable PDF?",
            a: "A searchable PDF contains an actual text layer. You can highlight words, copy/paste text, and search using Ctrl+F/Command+F.",
        },
        {
            q: "Why is my PDF not searchable if it clearly shows text?",
            a: "Because it may be a scanned image (like a photo of a page) without an underlying text layer. It looks like text, but computers only see an image until OCR adds real text.",
        },
        {
            q: "What does OCR do to a scanned PDF?",
            a: "OCR detects the letters in the scanned image and creates an invisible text layer underneath. That’s what makes it searchable and copyable.",
        },
        {
            q: "Can a PDF be partially searchable?",
            a: "Yes. Some PDFs contain a mix of real text pages and scanned image pages. OCR the scanned pages for consistent search and copy results.",
        },
        {
            q: "My PDF is long and there is a page limit. What should I do?",
            a: "Use Split PDF to keep only the pages you need, then run OCR on the smaller file.",
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
                            Searchable vs Non-Searchable PDF
                            <br />
                            <span className="text-primary-600">How to tell the difference (and fix it fast)</span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-4">
                            If you’re staring at a PDF that “looks like text” but Ctrl+F won’t find anything and you can’t copy a
                            single sentence, you’re not crazy — you’re probably looking at a <strong>scanned image PDF</strong>.
                            This page shows how to confirm it in seconds and convert it into a searchable PDF.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#tests"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <Search className="h-5 w-5" />
                                10-second tests
                            </a>
                            <a
                                href="#fix"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" />
                                Make my PDF searchable
                            </a>
                        </div>

                        <div className="mt-8 grid md:grid-cols-2 gap-4">
                            {quickAnswer.map((x) => (
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

                        <p className="text-sm text-on-surface-variant mt-6">
                            Quick shortcut: If you can’t select individual words, it’s non-searchable. OCR adds the missing text layer.
                        </p>
                    </div>

                    {/* TOOL / CTA */}
                    <aside id="fix" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Fix it now: make your PDF searchable</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-[#091328]/50 border rounded-xl p-4">
                                <p className="font-semibold text-on-surface font-headline mb-1">Page cap or huge PDF?</p>
                                <p className="text-sm text-on-surface-variant">
                                    Split the file first and OCR only the pages you need:
                                    {" "}
                                    <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        Split PDF
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="mt-3 text-xs text-outline">
                                Need plain extracted text (not a searchable PDF)?
                                {" "}
                                <a href="/pdf-to-text/" className="underline hover:text-on-surface-variant">
                                    PDF to Text
                                </a>
                                .
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* EMOTIONAL USE CASES */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">If you’re here, you probably feel one of these:</h2>
                        <p className="text-on-surface-variant mb-6">
                            These are the exact moments people realize their PDF isn’t searchable — and what to do next.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {emotionalUseCases.map((u) => (
                                <div key={u.title} className="bg-[#091328]/50 border rounded-xl p-5">
                                    <div className="flex items-start gap-3">
                                        <u.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-2">{u.title}</h3>
                                            <p className="text-on-surface-variant">{u.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-on-surface-variant mt-6">
                            If the PDF came from a scanner or phone, the fix is almost always the same:
                            {" "}
                            <a href="/make-pdf-searchable/" className="text-primary-700 underline hover:text-primary-900">
                                make it searchable with OCR
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* TESTS */}
                <section id="tests" className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">How to tell if a PDF is searchable (3 fast tests)</h2>
                        <p className="text-on-surface-variant mb-6">
                            You don’t need special software. These tests work in almost any PDF viewer.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {fastTests.map((t) => (
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
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">The most reliable sign</h3>
                                    <p className="text-on-surface-variant">
                                        If you can’t highlight a single word — it’s not real text. OCR adds the missing layer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAUSES + FIXES */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Why some PDFs aren’t searchable (and exactly how to fix them)</h2>

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
                                                {c.why.map((b) => (
                                                    <li key={b}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-on-surface font-headline mb-2">{c.fixTitle}</p>
                                            <p className="text-on-surface-variant">{c.fixText}</p>

                                            <a
                                                href={c.ctaHref}
                                                className="inline-flex items-center gap-2 mt-3 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-5 py-2 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all"
                                            >
                                                {c.ctaText} <ArrowRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>
                                </details>
                            ))}
                        </div>

                        <div className="mt-8 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-primary-600" />
                                What “OCR searchable PDF” really means
                            </h3>
                            <p className="text-on-surface-variant mb-3">
                                OCR doesn’t “magically change” your scan into a Word doc — it usually keeps your original page image,
                                then places an <strong>invisible text overlay</strong> underneath. That’s why the PDF still looks the
                                same, but becomes searchable and copyable.
                            </p>
                            <p className="text-on-surface-variant">
                                If you need editing (not just search/copy), try OCR then convert:
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

                {/* BEST PRACTICES */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Make OCR results better (small changes, big difference)</h2>
                        <p className="text-on-surface-variant mb-6">
                            If OCR output matters (names, invoice numbers, legal text), do these first.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {bestPractices.map((t) => (
                                <div key={t.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
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
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">Reality check (important)</h3>
                                    <p className="text-on-surface-variant">
                                        OCR is not perfect. Low-resolution scans, skewed pages, and dark backgrounds create mistakes.
                                        Always proofread important documents.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
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

                {/* RELATED TOOLS */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related tools (best next step)
                        </h2>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-primary-900">Make PDF searchable</a></li>
                            <li><a href="/ocr-pdf/" className="underline hover:text-primary-900">OCR PDF</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-primary-900">PDF to Text</a></li>
                            <li><a href="/pdf-to-word-ocr/" className="underline hover:text-primary-900">Scanned PDF to Word (OCR)</a></li>
                            <li><a href="/pdf-to-excel-ocr/" className="underline hover:text-primary-900">Scanned PDF to Excel (OCR)</a></li>
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
                        <h2 className="text-3xl font-bold text-on-primary mb-2">Turn your “dead” scan into a searchable PDF</h2>
                        <p className="text-primary-100 mb-6">
                            Upload the file, run OCR, and start searching, copying, and finding text instantly.
                        </p>
                        <a
                            href="#fix"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ScanText className="h-5 w-5" />
                            Make PDF searchable
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

export default { Page: SearchableVsNonSearchablePDFPage };
