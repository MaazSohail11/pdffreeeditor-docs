import React from "react";
import { Helmet } from "react-helmet";
import { MessageCircle, Upload, CheckCircle2, Link as LinkIcon, Smartphone, Gauge } from "lucide-react";
import CompressDropBox from "../../src/components/CompressDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function CompressPdfForWhatsApp() {
    const recommendedTargets = [
        { href: "/compress-pdf-to-1mb/", title: "Compress PDF to 1MB", note: "Very smooth sharing in chats/groups" },
        { href: "/compress-pdf-to-500kb/", title: "Compress PDF to 500KB", note: "Fast sends + fast downloads on mobile" },
        { href: "/compress-pdf-for-email/", title: "Compress for Email Too", note: "Same file often needs email later" },
    ];

    const benefits = [
        "Send PDFs faster on WhatsApp chats and groups (especially on mobile data)",
        "Great when recipients can’t download big files reliably",
        "Compact mode keeps text sharp; Rasterize hits smaller sizes for scans",
        "No signup, no watermark — download instantly",
        "Works on iPhone/Android/desktop browsers",
    ];

    const faqs = [
        {
            q: "Do I need to compress a PDF for WhatsApp?",
            a: "Not always, but compression helps your PDF send faster and download reliably—especially for large scanned PDFs or when sending to groups.",
        },
        {
            q: "What size should a PDF be for WhatsApp sharing?",
            a: "WhatsApp limits vary by how you send the file and platform. For maximum compatibility and fast delivery, keep PDFs as small as possible (often 1MB or 500KB is a great target).",
        },
        {
            q: "How do I keep quality while compressing?",
            a: "Use Compact mode first. If you’re sending a scanned PDF and need a much smaller file, use Rasterize and lower DPI/quality gradually.",
        },
        {
            q: "Is my PDF uploaded to your servers?",
            a: "Yes for compression. Your PDF is transferred over encrypted TLS to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents.",
        },
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
                            Compress PDF for WhatsApp
                            <br />
                            <span className="text-blue-600">Send PDFs faster (mobile-friendly)</span>
                        </h1>

                        <p className="text-lg text-gray-700 mb-3">
                            Large PDFs are slow to send and even slower to download on mobile data. Compress your PDF first,
                            then share it on WhatsApp with fewer failures.
                        </p>

                        <p className="text-base text-gray-700 mb-8">
                            Pro move: target <strong>1MB</strong> or <strong>500KB</strong> for the smoothest sharing experience. If your PDF is scanned,
                            use <a href="/compress-scanned-pdf-online/" className="text-blue-600 hover:underline">Compress scanned PDF</a>.
                        </p>

                        <div className="flex flex-col gap-3 md:items-start items-center">
                            <a
                                href="#compress"
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
                            >
                                <Upload className="h-5 w-5" aria-hidden="true" />
                                <span>Start — Compress for WhatsApp</span>
                            </a>

                            <a
                                href="#targets"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                            >
                                <Smartphone className="h-5 w-5" aria-hidden="true" />
                                <span>Recommended targets</span>
                            </a>
                        </div>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                            {[
                                "No signup, no watermark",
                                "Great for WhatsApp groups",
                                "Compact or Rasterize modes",
                                "Works on iPhone + Android",
                            ].map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>

                        <div id="targets" className="mt-8">
                            <h2 className="text-lg font-bold mb-3">Recommended sharing targets</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {recommendedTargets.map((x) => (
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

                        <div className="mt-8 bg-white/70 border border-blue-100 rounded-xl p-4">
                            <div className="flex items-start gap-3">
                                <MessageCircle className="h-5 w-5 text-blue-700 mt-0.5" />
                                <p className="text-sm text-gray-700">
                                    WhatsApp file limits can vary by how you send the file (document vs media) and platform.
                                    Compression still helps because smaller PDFs send faster and are easier for recipients to download.
                                </p>
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
                            <h2 className="text-3xl font-bold mb-4">Why compress PDFs for WhatsApp?</h2>
                            <p className="text-gray-700 mb-4">
                                Even if a platform allows large document sizes, huge PDFs are still annoying: slow upload, slow download,
                                and failures on poor connections. Smaller PDFs simply work better.
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
                            <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Built for mobile sharing</h3>
                            <p className="text-gray-700 mb-2">
                                Compress first, then share. Targets like 500KB or 1MB feel instant compared to large scans.
                            </p>
                            <p className="text-gray-700 mb-6">
                                For scanned PDFs, Rasterize mode usually achieves the biggest reductions.
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
                        <h2 className="text-2xl font-bold mb-6">How to compress a PDF for WhatsApp (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p>Upload your file securely over TLS encryption.</p>
                            </li>
                            <li id="step-choose">
                                <h3 className="font-semibold">2) Compress (Compact or Rasterize)</h3>
                                <p>Compact keeps quality. Rasterize is stronger for scans.</p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download & send on WhatsApp</h3>
                                <p>Download the smaller PDF, then attach it in WhatsApp as a document.</p>
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
                        <h2 className="text-2xl font-bold mb-6">Compress PDF for WhatsApp — FAQs</h2>
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
                            More pages that support WhatsApp sharing
                        </h2>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/compress-pdf-to-1mb/" className="underline hover:text-blue-900">Compress PDF to 1MB</a></li>
                            <li><a href="/compress-pdf-to-500kb/" className="underline hover:text-blue-900">Compress PDF to 500KB</a></li>
                            <li><a href="/compress-scanned-pdf-online/" className="underline hover:text-blue-900">Compress scanned PDF</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split PDF pages (send parts)</a></li>
                            <li><a href="/compress-pdf-for-email/" className="underline hover:text-blue-900">Compress PDF for Email</a></li>
                            <li><a href="/merge-pdf/" className="underline hover:text-blue-900">Merge PDFs</a></li>
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

export default { Page: CompressPdfForWhatsApp };
