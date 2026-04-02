import React from "react";
import { Helmet } from "react-helmet";
import { Mail, Upload, CheckCircle2, FileText, Link as LinkIcon, Gauge } from "lucide-react";
import CompressDropBox from "../../src/components/CompressDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function CompressPdfForEmail() {
    const quickTargets = [
        { href: "/compress-pdf-to-1mb/", label: "Compress to 1MB (very strict)" },
        { href: "/compress-pdf-to-500kb/", label: "Compress to 500KB (strict)" },
    ];

    const benefits = [
        "Make PDFs small enough to attach and send (no signup, no watermark)",
        "Choose Compact (better quality) or Rasterize (smallest size)",
        "Works on desktop + mobile (iPhone/Android)",
        "Built for real-world limits: Outlook/Exchange can be as low as ~10–20MB",
        "Fast results: compress → download → attach",
    ];

    const faqs = [
        {
            q: "What PDF size is best for emailing?",
            a: "Aim for a small size like 1MB or 500KB for maximum compatibility. Some accounts (especially business/Exchange) can reject larger attachments, even if Gmail supports higher totals.",
        },
        {
            q: "What are common email attachment limits (Gmail, Outlook, Yahoo)?",
            a: "Gmail allows 25MB total attachments but may turn larger files into Drive links. Many Outlook/internet accounts are around 20MB total email size, and some business Exchange accounts default to ~10MB. Yahoo Mail attachments total 25MB.",
        },
        {
            q: "How do I compress a PDF for email without losing quality?",
            a: "Start with Compact mode (retain-PDF). It preserves text and vector graphics while optimizing images and removing unnecessary data.",
        },
        {
            q: "My PDF is still too big—what should I do?",
            a: "Switch to Rasterize mode and lower quality/DPI gradually. If the file is scanned/image-heavy, Rasterize usually achieves much smaller sizes.",
        },
        {
            q: "Is my PDF uploaded to your servers?",
            a: "Yes for compression. Your PDF is transferred over encrypted TLS to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents to any online tool.",
        },
    ];

    return (
        <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>
            <SiteNav />

            {/* Hero */}
            <section className="digital-obsidian text-on-surface py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Compress PDF for Email
                            <br />
                            <span className="text-primary-600">Make a PDF small enough to attach & send</span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-3">
                            Email attachments fail all the time because PDFs are too large. Use this free tool to
                            compress your PDF for email — then attach it confidently.
                        </p>
                        <p className="text-base text-on-surface-variant mb-8">
                            Best practice: aim under <strong>1MB</strong> or <strong>500KB</strong> for maximum compatibility across providers.
                        </p>

                        <div className="flex flex-col gap-3 md:items-start items-center">
                            <a
                                href="#compress"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <Upload className="h-5 w-5" aria-hidden="true" />
                                <span>Start — Compress for Email</span>
                            </a>

                            <a
                                href="#targets"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <Mail className="h-5 w-5" aria-hidden="true" />
                                <span>Jump to size targets</span>
                            </a>
                        </div>

                        {/* Trust bullets */}
                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-on-surface-variant">
                            {[
                                "Free, no signup, no watermark",
                                "Compact mode for quality-first compression",
                                "Rasterize mode for strict size limits",
                                "Works on iPhone, Android, Mac, Windows",
                            ].map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Quick targets */}
                        <div id="targets" className="mt-8">
                            <h2 className="text-lg font-bold mb-3">Popular email-safe targets</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {quickTargets.map((x) => (
                                    <a
                                        key={x.href}
                                        href={x.href}
                                        className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-4 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition text-left"
                                    >
                                        <div className="flex items-center gap-2 text-primary-700 font-semibold">
                                            <Gauge className="h-4 w-4" />
                                            <span>{x.label}</span>
                                        </div>
                                        <p className="text-sm text-on-surface-variant mt-1">
                                            Land on a page optimized for that exact constraint.
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="hidden md:block" id="compress" aria-label="Compress PDF dropzone">
                        <CompressDropBox />
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* Why this page exists */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Why PDFs fail to send via email</h2>
                            <p className="text-on-surface-variant mb-4">
                                Email providers enforce strict message-size limits. Even if one provider supports a
                                larger attachment, the recipient’s server might reject it.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-5 w-5 text-primary-600 flex items-center justify-center" aria-hidden="true">•</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 text-center shadow-[0_0_25px_rgba(139,92,246,0.2)]">
                            <Mail className="h-16 w-16 text-primary-600 mx-auto mb-4" aria-hidden="true" />
                            <h3 className="text-2xl font-bold text-on-surface font-headline mb-3">Email-ready PDFs in minutes</h3>
                            <p className="text-on-surface-variant mb-2">
                                Start with Compact for quality. If you must hit a hard limit, use Rasterize.
                            </p>
                            <p className="text-on-surface-variant mb-6">
                                Then attach the compressed PDF and send.
                            </p>
                            <a
                                href="#compress"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-6 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] inline-flex items-center gap-2 transition"
                            >
                                <Upload className="h-5 w-5" aria-hidden="true" />
                                <span>Open Compressor</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* How to */}
                <section id="how-to" className="py-12 bg-[#091328]/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to compress a PDF for email (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p>Drag & drop your file into the compressor (TLS encrypted transfer).</p>
                            </li>
                            <li id="step-choose">
                                <h3 className="font-semibold">2) Choose Compact or Rasterize</h3>
                                <p>
                                    Use <strong>Compact</strong> first for quality. Use <strong>Rasterize</strong> when you
                                    need a much smaller PDF.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download & attach</h3>
                                <p>Download the smaller PDF and attach it to your email.</p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Mobile dropbox */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5 md:hidden" id="compress-inline" aria-label="Compress PDF dropzone (mobile)">
                    <div className="max-w-4xl mx-auto px-6">
                        <CompressDropBox />
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Compress PDF for Email — FAQs</h2>
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

                {/* Related */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            More compression targets + tools
                        </h2>
                        <p className="text-on-surface-variant mb-3">
                            If you’re emailing for a strict limit, use a target page:
                        </p>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/compress-pdf-to-1mb/" className="underline hover:text-primary-900">Compress PDF to 1MB</a></li>
                            <li><a href="/compress-pdf-to-500kb/" className="underline hover:text-primary-900">Compress PDF to 500KB</a></li>
                            <li><a href="/compress-pdf-without-losing-quality/" className="underline hover:text-primary-900">Compress without losing quality</a></li>
                            <li><a href="/compress-scanned-pdf-online/" className="underline hover:text-primary-900">Compress scanned PDF</a></li>
                        </ul>

                        <p className="text-on-surface-variant mt-6 mb-3">Or keep working:</p>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/merge-pdf/" className="underline hover:text-primary-900">Merge PDFs</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF pages</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-primary-900">Sign PDF</a></li>
                            <li><a href="/edit-pdf/" className="underline hover:text-primary-900">Edit PDF text</a></li>
                            <li><a href="/annotate-pdf/" className="underline hover:text-primary-900">Annotate PDF</a></li>
                            <li><a href="/convertor/" className="underline hover:text-primary-900">PDF Converters</a></li>
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
                                        <a href="/compress-pdf-to-500kb/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Compress to 500KB
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/compress-pdf-to-1mb/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Compress to 1MB
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

export default { Page: CompressPdfForEmail };
