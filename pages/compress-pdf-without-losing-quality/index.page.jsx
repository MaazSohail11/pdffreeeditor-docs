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
    Sparkles,
    Image as ImageIcon,
} from "lucide-react";
import CompressDropBox from "../../src/components/CompressDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function CompressPdfWithoutLosingQuality() {
    const benefits = [
        "Best quality-first compression (Compact / retain-PDF mode)",
        "Keep text sharp and layout intact (great for CVs, proposals, reports)",
        "No signup, no watermark — always free to use",
        "Works on iPhone, Android, Mac & Windows",
        "Encrypted TLS transfer during processing",
    ];

    const qualityRules = [
        {
            title: "Rule #1: Use Compact first (quality mode)",
            body:
                "Compact mode keeps the PDF structure (fonts/vectors/layout) and focuses on optimizing images and unnecessary data. This is the best option when you care about clarity.",
        },
        {
            title: "Rule #2: Avoid Rasterize unless you must",
            body:
                "Rasterize can reduce size dramatically, but it turns pages into images (often reducing clarity and making text harder to select/search). Use it only when you have a strict size target.",
        },
        {
            title: "Rule #3: Your PDF type decides the outcome",
            body:
                "Text-heavy PDFs usually compress well with minimal visible change. Image-heavy PDFs (scans/photos) may require stronger compression and can’t always stay perfectly “lossless.”",
        },
    ];

    const whenToUse = [
        {
            icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
            title: "Professional documents",
            body: "Best for CVs, contracts, proposals, invoices, and reports where text must remain crisp.",
        },
        {
            icon: <ImageIcon className="h-5 w-5" aria-hidden="true" />,
            title: "Logos & vector graphics",
            body: "Compact compression is ideal when your PDF has vector logos/charts you don’t want blurred.",
        },
        {
            icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
            title: "Reasonable size reduction",
            body: "If you’re trying to shrink a file while keeping it “looking the same,” this page is the right entry point.",
        },
        {
            icon: <FileText className="h-5 w-5" aria-hidden="true" />,
            title: "Readability-first sharing",
            body: "Use when you want smaller downloads without compromising readability for the recipient.",
        },
    ];

    // Visible FAQ MUST match server schema exactly
    const faqs = [
        {
            q: "Can I compress a PDF without losing quality?",
            a: "Often you can reduce file size with minimal visible change—especially for text-heavy PDFs—by using Compact mode. However, image-heavy PDFs (scans/photos) may require stronger compression that can reduce clarity.",
        },
        {
            q: "Is this “lossless” compression?",
            a: "Not always. True lossless compression for PDFs is limited, because large size is usually caused by embedded images. Compact mode is quality-first, but images can still be recompressed for size reduction.",
        },
        {
            q: "Which mode should I use to keep text sharp?",
            a: "Use Compact (retain-PDF). It preserves PDF structure so text and vector elements stay crisp. Avoid Rasterize unless you have a strict size target.",
        },
        {
            q: "Why didn’t my PDF shrink much?",
            a: "Some PDFs are already optimized, or the file is dominated by images that are hard to compress without quality loss. If you need more reduction, try Rasterize or remove unnecessary pages.",
        },
        {
            q: "Will the layout/fonts change?",
            a: "Compact mode is designed to preserve layout and readability. Results vary by PDF, but this is the best mode when you want the document to still look professional.",
        },
        {
            q: "Is my PDF uploaded to your servers?",
            a: "Your PDF is transferred over an encrypted TLS connection to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents to any online service.",
        },
        {
            q: "Does it work on iPhone and Android?",
            a: "Yes. Open this page in Safari (iOS) or Chrome (Android) and compress PDFs without installing an app.",
        },
        {
            q: "If I need a strict limit (like 1MB), what should I do?",
            a: "Use the size-target pages like Compress to 1MB/2MB/5MB/10MB. They’re designed for strict upload limits.",
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
                            Compress PDF Without Losing Quality — Free
                            <br />
                            <span className="text-primary-600">Keep text sharp, shrink file size</span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-3">
                            Need to <strong>reduce PDF size without ruining quality</strong>?
                            Use <strong>Compact (retain-PDF)</strong> mode to shrink file size while
                            keeping text crisp and layout professional.
                        </p>

                        <p className="text-base text-on-surface-variant mb-8">
                            This page is for quality-first compression. If your PDF is a scanned
                            document and you need aggressive shrinking, use{" "}
                            <a href="/compress-scanned-pdf-online/" className="text-primary-600 hover:underline">
                                Compress Scanned PDF
                            </a>
                            .
                        </p>

                        <div className="flex flex-col gap-3 md:items-start items-center">
                            <a
                                href="#compress"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <Upload className="h-5 w-5" aria-hidden="true" />
                                <span>Start — Quality Compression</span>
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
                                "Compact mode = best quality-first results",
                                "Keeps sharp text & layout for professional PDFs",
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
                                <Gauge className="h-4 w-4" /> Quality-first compression
                            </span>
                        </div>
                    </div>

                    <aside className="hidden md:block" id="compress" aria-label="Compress PDF dropzone">
                        <CompressDropBox />
                        <div className="mt-3 text-xs text-outline">
                            Pro tip: choose <strong>Compact</strong> for best clarity. Use Rasterize only if you must hit a strict size.
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* QUALITY RULES */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">Quality-first compression rules</h2>
                        <p className="text-on-surface-variant mb-6">
                            Most “quality loss” comes from images. The goal here is smaller size with the same professional look.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {qualityRules.map((item) => (
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
                                <div className="font-semibold mb-3">If you still need a strict limit:</div>
                                <ul className="grid grid-cols-2 gap-2 text-sm text-on-surface-variant">
                                    <li>
                                        <a href="/compress-pdf-to-10mb/" className="text-primary-700 underline hover:text-primary-900">Compress to 10MB</a>
                                    </li>
                                    <li>
                                        <a href="/compress-pdf-to-5mb/" className="text-primary-700 underline hover:text-primary-900">Compress to 5MB</a>
                                    </li>
                                    <li>
                                        <a href="/compress-pdf-to-2mb/" className="text-primary-700 underline hover:text-primary-900">Compress to 2MB</a>
                                    </li>
                                    <li>
                                        <a href="/compress-pdf-to-1mb/" className="text-primary-700 underline hover:text-primary-900">Compress to 1MB</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* USE CASES */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4">When this page is the right choice</h2>
                        <p className="text-on-surface-variant mb-6">
                            Use this when your priority is clarity (sharp text, clean layout), not maximum shrinking.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {whenToUse.map((c) => (
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
                        <h2 className="text-2xl font-bold mb-6">How to compress a PDF without losing quality (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p className="text-on-surface-variant">
                                    Upload the PDF you want to shrink. The file is transferred over an encrypted TLS connection for processing.
                                </p>
                            </li>
                            <li id="step-choose">
                                <h3 className="font-semibold">2) Choose Compact (retain-PDF)</h3>
                                <p className="text-on-surface-variant">
                                    Select <strong>Compact</strong> to preserve sharp text and layout. This is the recommended mode for professional documents.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download the smaller PDF</h3>
                                <p className="text-on-surface-variant">
                                    Download instantly. No signup and no watermark.
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
                        <h2 className="text-2xl font-bold mb-6">Compress PDF without losing quality — FAQs</h2>
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
                            Related compression & PDF tools
                        </h2>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF (main tool)</a></li>
                            <li><a href="/compress-scanned-pdf-online/" className="underline hover:text-primary-900">Compress scanned PDF</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF (if limit is too strict)</a></li>
                            <li><a href="/merge-pdf/" className="underline hover:text-primary-900">Merge PDF files</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-primary-900">Sign PDF</a></li>
                            <li><a href="/edit-pdf/" className="underline hover:text-primary-900">Edit PDF</a></li>
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
                                        <a href="/compress-pdf-to-100kb/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Compress to 100KB
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/compress-pdf-to-1mb/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Compress to 1MB
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/compress-pdf-for-email/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Compress for Email
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* NEXT STEPS */}
                            <div>
                                <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Next Steps</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/merge-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Merge PDF</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/sign-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Sign PDF</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/edit-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Edit PDF</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PARENT */}
                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                            <a href="/compress-pdf/" className="text-sm font-semibold text-outline hover:text-primary-600 uppercase tracking-wide">
                                View All Compressors
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

export default { Page: CompressPdfWithoutLosingQuality };
