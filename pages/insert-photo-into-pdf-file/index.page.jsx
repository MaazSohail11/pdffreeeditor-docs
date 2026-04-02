// pages/insert-photo-into-pdf-file/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    Image as ImageIcon,
    Upload,
    CheckCircle2,
    Lock,
    Link as LinkIcon,
    FileText,
    PenTool,
    Highlighter,
} from "lucide-react";
import SiteNav from "/src/components/SiteNav.jsx";
import InlineDropBox from "/src/components/InlineDropBox.jsx";

function InsertPhotoIntoPdfFilePage() {
    const benefits = [
        "Insert a photo into a PDF file online — fast and simple",
        "No signup, no watermark — download instantly",
        "Private by default: your PDF stays on your device (client-side editor)",
        "Perfect for ID photos, receipts, screenshots, profile pictures, and scanned docs",
        "Works on iPhone, Android, Mac, and Windows",
    ];

    const useCases = [
        {
            title: "Add an ID photo to a form or application",
            body: "Many portals ask you to paste a passport-style photo into a PDF form. Upload your PDF, insert the photo, resize, and place it precisely in the box.",
        },
        {
            title: "Insert a screenshot or evidence page",
            body: "Attach a screenshot (payment proof, email confirmation, chat, etc.) directly onto a PDF page so the file is self-contained.",
        },
        {
            title: "Add a scanned image into a PDF document",
            body: "If you scanned something separately (as JPG/PNG), you can insert the photo into your PDF to keep everything together in one file.",
        },
        {
            title: "Place a signature image when needed",
            body: "If you already have a signature photo, you can insert it as an image and position it on the signature line.",
        },
    ];

    const faqs = [
        {
            q: "How do I insert a photo into a PDF file online?",
            a: (
                <>
                    Upload your PDF using the box above. The editor opens in your browser — choose the Image tool, upload your photo (JPG/PNG), then resize and place it on the page. Download your updated PDF instantly.
                </>
            ),
        },
        {
            q: "Is it free and watermark-free?",
            a: (
                <>
                    Yes. You can insert photos and download with no watermark and no signup.
                </>
            ),
        },
        {
            q: "Do you upload my PDF to your servers?",
            a: (
                <>
                    By default, no — editing runs locally in your browser, so your PDF stays on your device. If a workflow ever requires an upload, the UI should make that clear before you proceed.
                </>
            ),
        },
        {
            q: "Can I insert a photo into a PDF on iPhone or Android?",
            a: (
                <>
                    Yes. Open this page in Safari (iPhone/iPad) or Chrome (Android), upload your PDF, and insert the photo using the editor.
                </>
            ),
        },
        {
            q: "Why does my photo look blurry after inserting?",
            a: (
                <>
                    Blurriness usually comes from a low-resolution source image or heavy compression. Use a higher-quality photo (or a PNG), and avoid scaling a small image up too much.
                </>
            ),
        },
        {
            q: "Can I also add text or sign after inserting a photo?",
            a: (
                <>
                    Yes — after inserting a photo, you can{" "}
                    <a href="/type-on-pdf-document/" className="text-primary-600 hover:underline">type on the PDF</a>,{" "}
                    <a href="/sign-pdf/" className="text-primary-600 hover:underline">sign</a>, or{" "}
                    <a href="/annotate-pdf/" className="text-primary-600 hover:underline">annotate</a>.
                </>
            ),
        },
    ];

    return (
        <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
            <SiteNav />

            {/* Hero */}
            <section className="relative digital-obsidian text-on-surface py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 grid items-center gap-10 lg:grid-cols-2">
                    {/* Left copy */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface font-headline">
                            Insert Photo into a PDF File
                        </h1>
                        <p className="text-lg md:text-xl font-semibold mt-3 text-primary-700">
                            Free • No Signup • No Watermark • Private by default
                        </p>
                        <p className="text-lg md:text-xl text-on-surface-variant mt-6 max-w-xl">
                            Add a picture to any PDF page — ID photos, screenshots, receipts, logos, or scanned images.
                            Upload your PDF, insert the photo, position it precisely, and download instantly.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#start"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none hover:scale-105 active:scale-95 transition-all text-on-primary font-semibold text-lg px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.15)] transition"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Start — Insert Photo</span>
                            </a>
                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 border hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition"
                            >
                                <ImageIcon className="h-5 w-5" />
                                <span>How it works</span>
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-on-surface-variant">
                            <span className="inline-flex items-center gap-2">
                                <Lock className="h-4 w-4" /> Client-side editor (private by default)
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Watermark-free downloads
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Works on mobile + desktop
                            </span>
                        </div>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-on-surface-variant">
                            {benefits.map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Dropbox */}
                    <div id="start">
                        <InlineDropBox className="w-full" minHeight={480} maxWidth={720} label="Choose PDF to insert a photo" />
                        <p className="text-xs text-outline mt-3">
                            Tip: Use a clear PNG/JPG photo for best results. If your PDF is scanned and you need selectable text too, try{" "}
                            <a href="/ocr/" className="text-primary-600 hover:underline">OCR PDF</a>.
                        </p>
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* Use cases */}
                <section className="py-14 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-on-surface font-headline mb-4">
                            Common reasons to insert a photo into a PDF
                        </h2>
                        <p className="text-on-surface-variant mb-8 max-w-3xl">
                            People search “insert photo into PDF file” when they need the photo to appear inside the document itself (not as an email attachment).
                            These are the most common real-world situations:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {useCases.map((u) => (
                                <div key={u.title} className="bg-[#091328]/50 border rounded-xl p-5">
                                    <h3 className="font-semibold text-lg mb-2">{u.title}</h3>
                                    <p className="text-on-surface-variant text-sm">{u.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How-to */}
                <section id="how-to" className="py-14 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-surface font-headline mb-6">
                            How to insert a photo into a PDF (3 steps)
                        </h2>
                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p>
                                    Use the upload box above to open your PDF inside the editor. No install needed.
                                </p>
                            </li>
                            <li id="step-insert">
                                <h3 className="font-semibold">2) Insert the photo and position it</h3>
                                <p>
                                    Choose the Image tool, upload your JPG/PNG, then drag to move and use handles to resize.
                                    Zoom in for pixel-perfect placement.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download your updated PDF</h3>
                                <p>
                                    Export instantly. Your result is clean (no watermark), ready for upload, email, or printing.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-14 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-surface font-headline mb-6">Insert Photo into PDF — FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-[#091328]/50 p-5 rounded-2xl border border-white/5">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <div className="mt-2 text-on-surface-variant">{item.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related */}
                <section className="py-14 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" /> More PDF tools
                        </h2>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/add-image-pdf/" className="underline hover:text-primary-900">Add image/logo to PDF</a></li>
                            <li><a href="/type-on-pdf-document/" className="underline hover:text-primary-900">Type on a PDF</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-primary-900">Sign PDF</a></li>
                            <li><a href="/annotate-pdf/" className="underline hover:text-primary-900">Annotate / highlight PDF</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF</a></li>
                            <li><a href="/merge-pdf/" className="underline hover:text-primary-900">Merge PDF</a></li>
                        </ul>

                        <div className="mt-6 text-sm text-on-surface-variant">
                            Need to add a company logo specifically? Use{" "}
                            <a href="/add-logo-to-pdf-online/" className="text-primary-700 underline hover:text-primary-900">Add logo to PDF online</a>.
                        </div>
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
                                <a href="/excel-to-pdf/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                    Excel to PDF
                                </a>
                            </li>
                            <li>
                                <a href="/pptx-to-pdf/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                    PPTX to PDF
                                </a>
                            </li>
                            <li>
                                <a href="/html-to-pdf/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                    HTML to PDF
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* NEXT STEPS */}
                    <div>
                        <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Next Steps</h3>
                        <ul className="space-y-2">
                            
                            <li>
                                <a href="/compress-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                    <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Compress PDF</span>
                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </li>
                            <li>
                                <a href="/merge-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                    <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Merge PDF</span>
                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                 </div>
                 
                 {/* PARENT */}
                 <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <a href="/convertor/" className="text-sm font-semibold text-outline hover:text-primary-600 uppercase tracking-wide">
                        View Converter Home
                    </a>
                 </div>
            </div>
        </section>
    
</main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
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

export default { Page: InsertPhotoIntoPdfFilePage };
