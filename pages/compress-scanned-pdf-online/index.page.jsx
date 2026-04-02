import React from "react";
import { Helmet } from "react-helmet";
import {
    FileText,
    Gauge,
    Upload,
    CheckCircle2,
    Link as LinkIcon,
    ShieldCheck,
    Lock,
    Scan,
    Image as ImageIcon,
} from "lucide-react";
import CompressDropBox from "../../src/components/CompressDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function CompressScannedPdfOnline() {
    const benefits = [
        "Best for scanned PDFs (image-heavy files)",
        "Use Rasterize for maximum compression when needed",
        "No signup, no watermark — free to use",
        "Works on iPhone, Android, Mac & Windows",
        "Encrypted TLS transfer during processing",
    ];

    const scannedFacts = [
        {
            title: "Scanned PDFs are basically images",
            body:
                "That’s why they’re usually huge. Compression mainly reduces image resolution/quality to shrink the file.",
        },
        {
            title: "Compact first, Rasterize if strict limit",
            body:
                "Try Compact if you want the PDF to behave like a normal PDF. If you must hit a strict size (1MB/2MB), use Rasterize and lower DPI/quality step-by-step.",
        },
        {
            title: "Tradeoff is real",
            body:
                "Reducing image resolution/compression lowers size but can affect clarity—especially small text. Aim for “readable” not “perfect.”",
        },
    ];

    const workflows = [
        {
            icon: <Scan className="h-5 w-5" aria-hidden="true" />,
            title: "For readable scans (recommended)",
            body: "Compact first → if still large, Rasterize slightly. Stop as soon as text remains readable at 100% zoom.",
        },
        {
            icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
            title: "For strict upload limits",
            body: "Use Rasterize and lower quality/DPI step-by-step until you hit the target (1MB/2MB/5MB).",
        },
        {
            icon: <ImageIcon className="h-5 w-5" aria-hidden="true" />,
            title: "For photo scans",
            body: "Photo-heavy scans compress more than text-heavy scans, but clarity can drop faster—use small steps.",
        },
        {
            icon: <FileText className="h-5 w-5" aria-hidden="true" />,
            title: "For multi-page scans",
            body: "If the portal allows it, splitting a 50-page scan into parts can preserve readability better than aggressive compression.",
        },
    ];

    // Visible FAQ MUST match server schema exactly
    const faqs = [
        {
            q: "How do I compress a scanned PDF online?",
            a: "Upload your scanned PDF, start with Compact, and if the file is still too large, switch to Rasterize and reduce quality/DPI step-by-step until you reach the size you need.",
        },
        {
            q: "Why are scanned PDFs so large?",
            a: "A scanned PDF is mostly images (each page is like a photo). Large images make the file size huge compared to normal text-based PDFs.",
        },
        {
            q: "Will compressing a scanned PDF reduce clarity?",
            a: "It can. Size reduction usually comes from compressing/downsampling images, which can reduce sharpness—especially small text. Reduce in small steps and stop when it remains readable.",
        },
        {
            q: "What mode should I use for scanned PDFs?",
            a: "If you need maximum reduction, use Rasterize. If you want better “PDF behavior” and lighter changes, start with Compact and only use Rasterize if needed.",
        },
        {
            q: "Can I make it under 1MB / 2MB?",
            a: "Often yes, but it depends on pages and scan quality. For strict limits, use the target pages and Rasterize with lower quality/DPI step-by-step.",
        },
        {
            q: "Is my scanned PDF uploaded to your servers?",
            a: "Your PDF is transferred over an encrypted TLS connection to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents to any online service.",
        },
        {
            q: "Does it work on iPhone and Android?",
            a: "Yes. Open this page in Safari (iOS) or Chrome (Android) and compress scanned PDFs without installing an app.",
        },
        {
            q: "If clarity gets bad, what should I do?",
            a: "Try compressing less, removing unnecessary pages, or splitting the PDF. For tiny-text documents, aggressive compression can make text unreadable.",
        },
    ];

    return (
        <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>
            <SiteNav />

            {/* HERO */}
            <section className="digital-obsidian text-on-surface py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Compress Scanned PDF Online — Free
                            <br />
                            <span className="text-primary-600">Shrink image-heavy scans fast</span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-3">
                            Scanned PDFs are usually huge because each page is an image. This tool helps
                            you <strong>reduce scanned PDF size</strong> for email, portals, and uploads.
                            Upload your scan, start with <strong>Compact</strong>, and use <strong>Rasterize</strong>{" "}
                            if you need a strict size target.
                        </p>

                        <p className="text-base text-on-surface-variant mb-8">
                            If you want a “quality-first” approach for normal PDFs (not scans), use{" "}
                            <a href="/compress-pdf-without-losing-quality/" className="text-primary-600 hover:underline">
                                Compress PDF without losing quality
                            </a>
                            .
                        </p>

                        <div className="flex flex-col gap-3 md:items-start items-center">
                            <a
                                href="#compress"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <Upload className="h-5 w-5" aria-hidden="true" />
                                <span>Start — Compress Scanned PDF</span>
                            </a>

                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <FileText className="h-5 w-5" aria-hidden="true" />
                                <span>How it works (3 steps)</span>
                            </a>
                        </div>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-on-surface-variant">
                            {[
                                "Free • no signup • no watermark",
                                "Designed for scanned (image-heavy) PDFs",
                                "Rasterize = strongest reduction for strict limits",
                                "Encrypted TLS transfer during processing",
                            ].map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-on-surface-variant">
                            <span className="inline-flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4" /> Watermark-free
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Lock className="h-4 w-4" /> TLS encrypted transfer
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Gauge className="h-4 w-4" /> Scan-optimized workflow
                            </span>
                        </div>
                    </div>

                    <aside className="hidden md:block" id="compress" aria-label="Compress PDF dropzone">
                        <CompressDropBox />
                        <div className="mt-3 text-xs text-outline">
                            Scans often need Rasterize for strict limits. Reduce step-by-step and stop when text remains readable.
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* SCANNED FACTS */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">What makes scanned PDFs different?</h2>
                        <p className="text-on-surface-variant mb-6">
                            Scanned PDFs compress differently because file size is dominated by images.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {scannedFacts.map((item) => (
                                <div key={item.title} className="bg-[#091328]/50 rounded-lg border p-4 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-on-surface-variant text-sm">{item.body}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                            <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary-800">
                                    <CheckCircle2 className="h-5 w-5" /> By Use Case
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="/compress-pdf-for-email/" className="block p-2 hover:bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded transition text-primary-700 font-medium">Compress for Email</a></li>
                                    <li><a href="/compress-pdf-for-portal-upload/" className="block p-2 hover:bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded transition text-primary-700 font-medium">Compress for Portal Upload</a></li>
                                    <li><a href="/compress-pdf-for-whatsapp/" className="block p-2 hover:bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded transition text-primary-700 font-medium">Compress for WhatsApp</a></li>
                                </ul>
                            </div>

                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <div className="font-semibold mb-3">Popular Strict Targets</div>
                                <ul className="grid grid-cols-2 gap-2 text-sm text-on-surface-variant">
                                    <li><a href="/compress-pdf-to-1mb/" className="text-primary-700 underline hover:text-primary-900">Compress to 1MB</a></li>
                                    <li><a href="/compress-pdf-to-2mb/" className="text-primary-700 underline hover:text-primary-900">Compress to 2MB</a></li>
                                    <li><a href="/compress-pdf-to-5mb/" className="text-primary-700 underline hover:text-primary-900">Compress to 5MB</a></li>
                                    <li><a href="/compress-pdf-to-10mb/" className="text-primary-700 underline hover:text-primary-900">Compress to 10MB</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WORKFLOWS */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4">Best workflows for scanned PDFs</h2>
                        <p className="text-on-surface-variant mb-6">
                            The goal is “readable + small enough.” Don’t over-compress and ruin small text.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {workflows.map((c) => (
                                <div key={c.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border p-4 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-primary-700">{c.icon}</span>
                                        <h3 className="font-semibold">{c.title}</h3>
                                    </div>
                                    <p className="text-on-surface-variant text-sm">{c.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW-TO anchors for schema */}
                <section id="how-to" className="py-12 bg-[#091328]/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to compress a scanned PDF online (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your scanned PDF</h3>
                                <p className="text-on-surface-variant">
                                    Upload the scanned PDF. The file is transferred over an encrypted TLS connection for processing.
                                </p>
                            </li>
                            <li id="step-choose">
                                <h3 className="font-semibold">2) Choose Compact or Rasterize</h3>
                                <p className="text-on-surface-variant">
                                    Start with <strong>Compact</strong>. If you need a much smaller file, use <strong>Rasterize</strong>{" "}
                                    and reduce quality/DPI step-by-step.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download & verify readability</h3>
                                <p className="text-on-surface-variant">
                                    Download the smaller PDF and zoom to 100% to confirm small text is still readable.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Mobile dropzone */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5 md:hidden" id="compress-inline" aria-label="Compress PDF dropzone (mobile)">
                    <div className="max-w-4xl mx-auto px-6">
                        <CompressDropBox />
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Compress scanned PDF — FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-[#091328]/50 p-4 rounded-lg border border-white/5">
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
                            Related PDF tools
                        </h2>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF (main tool)</a></li>
                            <li><a href="/compress-pdf-without-losing-quality/" className="underline hover:text-primary-900">Compress without losing quality</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF (for huge scans)</a></li>
                            <li><a href="/merge-pdf/" className="underline hover:text-primary-900">Merge PDF files</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-primary-900">Sign PDF</a></li>
                            <li><a href="/convertor/" className="underline hover:text-primary-900">Converters</a></li>
                        </ul>
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

            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
                <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="/privacy/" className="hover:text-on-primary">Privacy</a>
                    <a href="/terms/" className="hover:text-on-primary">Terms</a>
                    <a href="/contact/" className="hover:text-on-primary">Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default { Page: CompressScannedPdfOnline };
