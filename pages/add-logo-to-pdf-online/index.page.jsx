// pages/add-logo-to-pdf-online/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    Image as ImageIcon,
    Upload,
    CheckCircle2,
    Lock,
    Link as LinkIcon,
    FileText,
    Layers,
    Zap,
} from "lucide-react";
import SiteNav from "/src/components/SiteNav.jsx";
import InlineDropBox from "/src/components/InlineDropBox.jsx";

function AddLogoToPdfOnlinePage() {
    const benefits = [
        "Add a logo to a PDF online — place it anywhere on the page",
        "No signup, no watermark — clean export",
        "Private by default (client-side editor)",
        "Perfect for invoices, letterheads, proposals, certificates, reports",
        "Works on mobile + desktop",
    ];

    const placementTips = [
        {
            title: "Top-left for letterheads",
            body: "The classic professional placement. Keep margins consistent and align with the document’s baseline grid for a clean brand look.",
        },
        {
            title: "Top-right for invoices",
            body: "Common for business invoices—logo stays visible without pushing content down. Use a transparent PNG for best results.",
        },
        {
            title: "Footer for subtle branding",
            body: "If you want branding without distracting the reader, place a small logo in the footer of the first page only.",
        },
        {
            title: "Stamp-style for approvals",
            body: "Use a semi-transparent logo or stamp image to mark “Approved / Paid / Draft” (keep it readable, not aggressive).",
        },
    ];

    const faqs = [
        {
            q: "How do I add a logo to a PDF online?",
            a: (
                <>
                    Upload your PDF above to open the browser editor. Choose the Image/Logo tool, upload your logo (PNG/JPG),
                    then drag to position and resize it. Download the updated PDF instantly.
                </>
            ),
        },
        {
            q: "Is this free and does it add a watermark?",
            a: <>It’s free to use, and your download has no watermark and no signup required.</>,
        },
        {
            q: "What logo file format is best for PDFs?",
            a: (
                <>
                    A transparent PNG is usually best. It blends into the page cleanly and avoids a white box around the logo.
                </>
            ),
        },
        {
            q: "Can I add a logo to multiple pages?",
            a: (
                <>
                    Yes — insert it once, then duplicate/position per page as needed inside the editor workflow.
                </>
            ),
        },
        {
            q: "Is my PDF uploaded to your servers?",
            a: (
                <>
                    By default, editing runs locally in your browser, so your PDF stays on your device. If a workflow requires upload,
                    the UI should indicate it before you proceed.
                </>
            ),
        },
        {
            q: "After adding a logo, what’s next?",
            a: (
                <>
                    If you’re sending the PDF, you might also{" "}
                    <a href="/compress-pdf/" className="text-blue-600 hover:underline">compress it for email</a>{" "}
                    or{" "}
                    <a href="/sign-pdf/" className="text-blue-600 hover:underline">sign it</a>.
                </>
            ),
        },
    ];

    return (
        <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
            <SiteNav />

            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
                            Add Logo to PDF Online
                        </h1>
                        <p className="text-lg md:text-xl font-semibold mt-3 text-blue-700">
                            Free • No Signup • No Watermark • Private by default
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-xl">
                            Brand your PDFs professionally. Add your company logo to invoices, proposals, letterheads, and reports —
                            place it precisely, keep it sharp, and download instantly.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#start"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 shadow-md transition"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Start — Add Logo</span>
                            </a>
                            <a
                                href="#how-to"
                                className="bg-white text-blue-600 border hover:shadow px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition"
                            >
                                <ImageIcon className="h-5 w-5" />
                                <span>How it works</span>
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-700">
                            <span className="inline-flex items-center gap-2">
                                <Lock className="h-4 w-4" /> Client-side editor (private by default)
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Clean export (no watermark)
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Zap className="h-4 w-4 text-yellow-600" /> Fast placement + instant download
                            </span>
                        </div>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                            {benefits.map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="start">
                        <InlineDropBox className="w-full" minHeight={480} maxWidth={720} label="Choose PDF to add your logo" />
                        <p className="text-xs text-gray-500 mt-3">
                            Pro tip: Use a transparent PNG logo for the cleanest result.
                        </p>
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* Placement guide */}
                <section className="py-14 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Best logo placements for a professional PDF
                        </h2>
                        <p className="text-gray-700 mb-8 max-w-3xl">
                            People don’t just want “add logo” — they want it to look legitimate. These placements match how real businesses format PDFs.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {placementTips.map((t) => (
                                <div key={t.title} className="bg-gray-50 border rounded-xl p-5">
                                    <h3 className="font-semibold text-lg mb-2">{t.title}</h3>
                                    <p className="text-gray-700 text-sm">{t.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How-to */}
                <section id="how-to" className="py-14 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            How to add a logo to a PDF (3 steps)
                        </h2>
                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p>Use the upload box above to open your PDF in the editor.</p>
                            </li>
                            <li id="step-add-logo">
                                <h3 className="font-semibold">2) Insert your logo image</h3>
                                <p>
                                    Choose the Image/Logo tool, upload your logo (PNG/JPG), then drag to position it.
                                    Resize carefully to keep it sharp and proportional.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download the branded PDF</h3>
                                <p>Export instantly. No watermark, no signup.</p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Quality notes */}
                <section className="py-14 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Keep your logo crisp (avoid “cheap PDF” vibes)
                        </h2>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                            <li>Use a high-resolution logo (avoid tiny images scaled up).</li>
                            <li>Prefer transparent PNG to avoid white background boxes.</li>
                            <li>Align to margins and use consistent spacing (looks instantly more professional).</li>
                            <li>Don’t cover important text; zoom in and place precisely.</li>
                        </ul>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-14 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Add Logo to PDF — FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-white p-5 rounded-xl border border-gray-200">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <div className="mt-2 text-gray-700">{item.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related */}
                <section className="py-14 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" /> Related tools
                        </h2>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/add-image-pdf/" className="underline hover:text-blue-900">Add image to PDF</a></li>
                            <li><a href="/insert-photo-into-pdf-file/" className="underline hover:text-blue-900">Insert photo into PDF</a></li>
                            <li><a href="/type-on-pdf-document/" className="underline hover:text-blue-900">Type on a PDF</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-blue-900">Sign PDF</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-blue-900">Compress PDF</a></li>
                            <li><a href="/merge-pdf/" className="underline hover:text-blue-900">Merge PDF</a></li>
                        </ul>

                        <div className="mt-6 text-sm text-gray-600">
                            If you’re adding a logo to invoices, you may also want to{" "}
                            <a href="/type-on-pdf-document/" className="text-blue-700 underline hover:text-blue-900">type on the PDF</a>{" "}
                            to fill out totals and client details.
                        </div>
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
                                <a href="/excel-to-pdf/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    Excel to PDF
                                </a>
                            </li>
                            <li>
                                <a href="/pptx-to-pdf/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    PPTX to PDF
                                </a>
                            </li>
                            <li>
                                <a href="/html-to-pdf/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    HTML to PDF
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* NEXT STEPS */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Next Steps</h3>
                        <ul className="space-y-2">
                            
                            <li>
                                <a href="/compress-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                    <span className="font-semibold text-gray-700 group-hover:text-blue-700">Compress PDF</span>
                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </li>
                            <li>
                                <a href="/merge-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                    <span className="font-semibold text-gray-700 group-hover:text-blue-700">Merge PDF</span>
                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                 </div>
                 
                 {/* PARENT */}
                 <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                    <a href="/convertor/" className="text-sm font-semibold text-gray-500 hover:text-blue-600 uppercase tracking-wide">
                        View Converter Home
                    </a>
                 </div>
            </div>
        </section>
    
</main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
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

export default { Page: AddLogoToPdfOnlinePage };
