import React from "react";
import { Helmet } from "react-helmet";
import { Upload, CheckCircle2, Link as LinkIcon, FileUp, Gauge } from "lucide-react";
import CompressDropBox from "../../src/components/CompressDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function CompressPdfForPortalUpload() {
    const targets = [
        { href: "/compress-pdf-to-1mb/", title: "Compress PDF to 1MB", note: "Common hard limit for forms & portals" },
        { href: "/compress-pdf-to-500kb/", title: "Compress PDF to 500KB", note: "Strict government/education portals" },
    ];

    const benefits = [
        "Designed for strict upload limits (1MB/500KB)",
        "Compact mode keeps text sharp; Rasterize hits the smallest sizes",
        "No signup, no watermark — download instantly",
        "Works on mobile (upload from phone camera scans too)",
        "Clear next steps if you miss the limit",
    ];

    const faqs = [
        { q: "How do I compress a PDF for a portal upload?", a: "Upload your PDF, start with Compact mode, then switch to Rasterize if the portal has a strict size cap. Repeat with lower quality/DPI until you meet the requirement." },
        { q: "What if the portal limit is 1MB or even 500KB?", a: "Use our target pages for strict limits. Rasterize usually works best for scanned/image-heavy PDFs: 1MB, 500KB, 300KB and similar constraints." },
        { q: "Why won’t my scanned PDF compress enough?", a: "Scanned PDFs are mostly images. To go very small, you typically need Rasterize at lower DPI/quality. If it’s still too big, split the PDF or upload fewer pages." },
        { q: "Is my file uploaded to your servers?", a: "Yes for compression. Your PDF is sent over encrypted TLS to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents." },
    ];

    return (
        <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>
            <SiteNav />

            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Compress PDF for Portal Upload
                            <br />
                            <span className="text-blue-600">Meet strict size limits (500KB / 1MB)</span>
                        </h1>

                        <p className="text-lg text-gray-700 mb-3">
                            Portals reject PDFs for one reason: file size. Compress your PDF and upload it successfully —
                            no signup, no watermark.
                        </p>
                        <p className="text-base text-gray-700 mb-8">
                            Tip: If your document is scanned, you’ll usually need stronger compression to hit strict limits.
                            Use <a href="/compress-scanned-pdf-online/" className="text-blue-600 hover:underline">Compress scanned PDF</a>.
                        </p>

                        <div className="flex flex-col gap-3 md:items-start items-center">
                            <a
                                href="#compress"
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
                            >
                                <Upload className="h-5 w-5" aria-hidden="true" />
                                <span>Start — Compress for Upload</span>
                            </a>

                            <a
                                href="#targets"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                            >
                                <FileUp className="h-5 w-5" aria-hidden="true" />
                                <span>Pick a target limit</span>
                            </a>
                        </div>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                            {[
                                "No signup, no watermark",
                                "Compact or Rasterize modes",
                                "Great for scanned documents",
                                "Works on phone + desktop",
                            ].map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>

                        <div id="targets" className="mt-8">
                            <h2 className="text-lg font-bold mb-3">Choose your upload limit</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {targets.map((x) => (
                                    <a
                                        key={x.href}
                                        href={x.href}
                                        className="bg-white border rounded-xl p-4 hover:shadow-md transition text-left"
                                    >
                                        <div className="flex items-center gap-2 text-blue-700 font-semibold">
                                            <Gauge className="h-4 w-4" />
                                            <span>{x.title}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">{x.note}</p>
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
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Why portals reject PDFs</h2>
                            <p className="text-gray-700 mb-4">
                                Many portals enforce strict file-size caps and will fail uploads instantly when your PDF is too large.
                                Compression is the fastest fix.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-5 w-5 text-blue-600 flex items-center justify-center" aria-hidden="true">•</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white border rounded-xl p-6 text-center shadow">
                            <FileUp className="h-16 w-16 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Hit the limit, upload, done</h3>
                            <p className="text-gray-700 mb-2">
                                Compact keeps quality for text-heavy PDFs. Rasterize is the “strict limit” mode for scans.
                            </p>
                            <p className="text-gray-700 mb-6">
                                If you still miss the cap: compress again, lower DPI, or split pages.
                            </p>
                            <a
                                href="#compress"
                                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow inline-flex items-center gap-2 transition"
                            >
                                <Upload className="h-5 w-5" aria-hidden="true" />
                                <span>Open Compressor</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section id="how-to" className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to compress a PDF for upload (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p>Upload over TLS. Big scans may take a moment.</p>
                            </li>
                            <li id="step-choose">
                                <h3 className="font-semibold">2) Choose Compact or Rasterize</h3>
                                <p>Compact for quality, Rasterize for strict caps (1MB/500KB).</p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download & upload to the portal</h3>
                                <p>Download the smaller PDF and retry the portal upload.</p>
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="py-12 bg-white md:hidden" aria-label="Compress PDF dropzone (mobile)">
                    <div className="max-w-4xl mx-auto px-6">
                        <CompressDropBox />
                    </div>
                </section>

                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Portal Upload Compression — FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <p className="mt-2 text-gray-700">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            More strict-limit pages + tools
                        </h2>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/compress-pdf-to-1mb/" className="underline hover:text-blue-900">Compress PDF to 1MB</a></li>
                            <li><a href="/compress-pdf-to-500kb/" className="underline hover:text-blue-900">Compress PDF to 500KB</a></li>
                            <li><a href="/compress-scanned-pdf-online/" className="underline hover:text-blue-900">Compress scanned PDF</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split PDF (reduce pages)</a></li>
                        </ul>
                    </div>
                </section>


                {/* SMART LINKING MAP */}
                <section className="py-12 bg-white border-t border-gray-200">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* SIBLINGS */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Related Tools</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/compress-pdf-to-500kb/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                            Compress to 500KB
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/compress-pdf-to-1mb/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                            Compress to 1MB
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/compress-pdf-for-email/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                            Compress for Email
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* NEXT STEPS */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Next Steps</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/merge-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                            <span className="font-semibold text-gray-700 group-hover:text-blue-700">Merge PDF</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/sign-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                            <span className="font-semibold text-gray-700 group-hover:text-blue-700">Sign PDF</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/edit-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                            <span className="font-semibold text-gray-700 group-hover:text-blue-700">Edit PDF</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PARENT */}
                        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                            <a href="/compress-pdf/" className="text-sm font-semibold text-gray-500 hover:text-blue-600 uppercase tracking-wide">
                                View All Compressors
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
                <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="/privacy/" className="hover:text-white">Privacy</a>
                    <a href="/terms/" className="hover:text-white">Terms</a>
                    <a href="/contact/" className="hover:text-white">Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default { Page: CompressPdfForPortalUpload };
