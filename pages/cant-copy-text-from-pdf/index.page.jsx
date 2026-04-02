// pages/cant-copy-text-from-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Copy,
    ScanText,
    FileText,
    CheckCircle,
    AlertTriangle,
    ShieldCheck,
    Search,
    Lock,
    Image as ImageIcon,
    Link as LinkIcon,
    ArrowRight,
} from "lucide-react";

function CantCopyTextFromPDFPage() {
    const quickTests = [
        {
            title: "Test #1: Try highlighting a single word",
            text: "If you can’t select individual words/letters (only a big box highlights), the PDF is likely image-only (a scan).",
            icon: Search,
        },
        {
            title: "Test #2: Zoom in to 300–400%",
            text: "If letters look pixelated like a photo, it’s probably a scanned image (not real text).",
            icon: ImageIcon,
        },
        {
            title: "Test #3: Check if copy is blocked",
            text: "Some PDFs are password-protected or have copying disabled. You may be able to select text but copying/pasting fails.",
            icon: Lock,
        },
    ];

    const causes = [
        {
            title: "Cause A: Your PDF is scanned (image-only)",
            bullets: [
                "Looks like text, but it’s actually a photo of a page inside a PDF",
                "You can’t select individual words/letters",
                "Ctrl+F / Find doesn’t work (because there is no real text)",
            ],
            fixTitle: "Fix: Run OCR to create selectable text",
            fixText:
                "OCR (optical character recognition) detects the letters in the scanned image and creates a real text layer so you can select/copy/search.",
            ctaText: "Run OCR PDF now",
            ctaHref: "/ocr-pdf/",
            icon: ScanText,
        },
        {
            title: "Cause B: Copying is restricted (protected PDF)",
            bullets: [
                "You can highlight text, but copy/paste fails or gives garbage",
                "The file may be password-protected or have permissions that block copying",
            ],
            fixTitle: "Fix: Use an unlocked version (recommended)",
            fixText:
                "If you own the document, export/download an unlocked copy from the source, or ask the sender for a copy with copying enabled. Respect document permissions.",
            ctaText: "Extract text safely (if you have rights)",
            ctaHref: "/pdf-to-text/",
            icon: ShieldCheck,
        },
        {
            title: "Cause C: Text is embedded weirdly (fonts/layers)",
            bullets: [
                "Some PDFs use unusual fonts or layered text that breaks selection",
                "Copy/paste comes out with broken spacing or wrong characters",
            ],
            fixTitle: "Fix: Extract text + clean formatting",
            fixText:
                "Try extracting text and then quickly clean spacing in your editor. For searchable PDFs, OCR can also help normalize copy output in many cases.",
            ctaText: "Try PDF to Text",
            ctaHref: "/pdf-to-text/",
            icon: FileText,
        },
    ];

    const faqs = [
        {
            q: "Why can’t I copy text from my PDF?",
            a: "Most commonly: the PDF is a scan (image-only) so there is no real text to copy. Another common reason is copy restrictions or unusual embedded fonts/layers.",
        },
        {
            q: "How do I tell if my PDF is scanned?",
            a: "Try selecting a single word. If you can’t select individual words/letters and only a big box highlights, it’s likely a scanned image PDF.",
        },
        {
            q: "Will OCR make my PDF searchable and copyable?",
            a: "Yes—OCR adds a text layer so search (Ctrl+F), selection, and copy/paste work much better on scanned PDFs.",
        },
        {
            q: "My PDF is long and you only process the first pages—what do I do?",
            a: "Use Split PDF to keep only the pages you need, then run OCR on the smaller PDF.",
        },
        {
            q: "Is OCR perfect?",
            a: "OCR depends on scan quality. Blurry pages, low contrast, and skewed text can cause mistakes—always proofread important content.",
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
                            Can’t Copy Text from a PDF?
                            <br />
                            <span className="text-primary-600">Fix Scanned &amp; Protected PDFs (Fast)</span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-4">
                            If you can read the PDF but can’t select or copy the text, it’s usually a scanned image
                            PDF (no real text layer) or a protected PDF with copy restrictions. This page helps you
                            diagnose the cause in seconds and fix it.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#upload"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" />
                                Fix with OCR (Upload PDF)
                            </a>

                            <a
                                href="#tests"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <Search className="h-5 w-5" />
                                Diagnose in 10 seconds
                            </a>
                        </div>

                        <div className="mt-7">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                Most common fix
                            </h2>
                            <p className="text-on-surface-variant">
                                If your PDF is scanned, run{" "}
                                <a href="/ocr-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                    OCR PDF
                                </a>{" "}
                                to add a searchable text layer so you can copy and search (Ctrl+F) again.
                            </p>
                        </div>
                    </div>

                    {/* TOOL */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Upload your PDF to make text copyable</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-3 text-xs text-outline">
                                Page cap? Use{" "}
                                <a href="/split-pdf/" className="underline hover:text-on-surface-variant">
                                    Split PDF
                                </a>{" "}
                                to keep only the pages you need, then OCR the smaller file.
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* QUICK TESTS */}
                <section id="tests" className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Diagnose why copy doesn’t work (10 seconds)</h2>
                        <p className="text-on-surface-variant mb-6">
                            Do these quick checks. They tell you exactly which fix to use.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {quickTests.map((t) => (
                                <div key={t.title} className="bg-[#091328]/50 border rounded-xl p-5">
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
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">What this usually means</h3>
                                    <p className="text-on-surface-variant">
                                        If you can’t select individual words, your “PDF text” is actually an image (a scan).
                                        OCR is the correct fix because it creates a real text layer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAUSES + FIXES */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Causes &amp; fixes (choose the right one)</h2>

                        <div className="space-y-4">
                            {causes.map((c) => (
                                <details key={c.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <summary className="font-semibold cursor-pointer flex items-center gap-2">
                                        <c.icon className="h-5 w-5 text-primary-600" />
                                        {c.title}
                                    </summary>

                                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="font-semibold text-on-surface font-headline mb-2">Signs</p>
                                            <ul className="list-disc ml-6 space-y-1 text-on-surface-variant">
                                                {c.bullets.map((b) => (
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
                    </div>
                </section>

                {/* PRIVACY */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">Quick privacy checklist</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-on-surface-variant">
                                        <li>Avoid uploading highly sensitive PDFs when possible.</li>
                                        <li>OCR accuracy depends on scan quality—proofread important content.</li>
                                        <li>
                                            Review{" "}
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



                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-primary mb-2">Make your PDF copyable again</h2>
                        <p className="text-primary-100 mb-6">
                            Upload the PDF, run OCR, and copy/select text normally again.
                        </p>
                        <a
                            href="#upload"
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
                                <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Related Issues</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/cant-search-text-in-pdf/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Can't Search Text
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/is-my-pdf-scanned/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Is PDF Scanned?
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* NEXT STEPS */}
                            <div>
                                <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Next Steps</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/ocr/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">OCR Tool (Fix It)</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PARENT */}
                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                            <a href="/blog/" className="text-sm font-semibold text-outline hover:text-primary-600 uppercase tracking-wide">
                                View Blog Home
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

export default { Page: CantCopyTextFromPDFPage };
