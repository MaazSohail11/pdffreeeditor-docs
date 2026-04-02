// pages/sign-pdf-document-private/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    PenTool,
    Lock,
    ShieldCheck,
    CheckCircle2,
    Upload,
    FileText,
    Smartphone,
    Link as LinkIcon,
} from "lucide-react";
import InlineDropBox from "/src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function SignPdfDocumentPrivate() {
    const benefits = [
        "Private signing workflow — your PDF stays on your device by default",
        "No signup, no watermark — sign and download instantly",
        "Draw, type, or upload a signature inside the editor",
        "Works on iPhone, Android, Mac, Windows (modern browsers)",
        "Great for contracts, HR forms, school documents, invoices",
    ];

    const useCases = [
        {
            title: "Sign a contract without uploading it",
            body:
                "If you’re signing a sensitive document, you may prefer an editor that works locally in the browser by default, instead of sending your PDF to a third-party server.",
        },
        {
            title: "Add initials to every page",
            body:
                "Place your initials and signature wherever needed, then export a clean PDF ready for email or portals.",
        },
        {
            title: "Sign on your phone (no app)",
            body:
                "Open the editor on iPhone/Android, draw with your finger, and download the signed PDF instantly.",
        },
        {
            title: "Finish a form fast",
            body:
                "Type into fields, add date/name, then sign — all in one editor session so you don’t jump between tools.",
        },
    ];

    // MUST match server FAQ schema text
    const faqs = [
        {
            q: "How can I sign a PDF document privately?",
            a: (
                <>
                    Open this page, upload your PDF, add your signature in the editor, and download the signed file.
                    By default, the editing workflow runs locally in your browser so your PDF stays on your device.
                </>
            ),
        },
        {
            q: "Do you upload my PDF to a server when I sign it?",
            a: (
                <>
                    By default, no — your PDF stays on your device while you sign.
                    If a feature ever requires an upload, we clearly tell you before you start.
                </>
            ),
        },
        {
            q: "Can I draw, type, or upload a signature?",
            a: (
                <>
                    Yes. You can draw your signature, type it, or upload an image of your signature and place it anywhere on the page.
                </>
            ),
        },
        {
            q: "Does it work on iPhone and Android?",
            a: (
                <>
                    Yes. Use Safari on iPhone/iPad or Chrome on Android. For large PDFs, close other heavy tabs for smoother performance.
                </>
            ),
        },
        {
            q: "Is it free and watermark-free?",
            a: (
                <>
                    Yes — no signup, no watermark. You can sign and download your PDF instantly.
                </>
            ),
        },
        {
            q: "Is a “private signature” legally valid?",
            a: (
                <>
                    Many documents accept an electronic signature, but legality depends on your country, document type, and the receiving party’s requirements.
                    If you need audit trails or identity verification, use a dedicated e-signature platform.
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

            {/* HERO */}
            <section className="relative digital-obsidian text-on-surface py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 grid items-start gap-10 lg:grid-cols-2">
                    {/* LEFT */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface font-headline leading-tight">
                            Sign a PDF Document Privately
                        </h1>
                        <p className="text-lg md:text-xl font-semibold mt-3 text-primary-700">
                            No signup • No watermark • Privacy-first
                        </p>

                        <p className="text-lg md:text-xl text-on-surface-variant mt-6 max-w-xl mx-auto lg:mx-0">
                            Upload a PDF, add your signature, and download the signed file in seconds.
                            Built for a private workflow — your PDF stays on your device by default.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#start"
                                className="bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-on-primary font-semibold text-lg px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.15)] transition"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Start Signing</span>
                            </a>

                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 border hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition"
                            >
                                <FileText className="h-5 w-5" />
                                <span>How it works</span>
                            </a>
                        </div>

                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-on-surface-variant max-w-xl mx-auto lg:mx-0">
                            {[
                                "Private by default (no upload needed)",
                                "Sign on phone or desktop",
                                "Instant download — no watermark",
                                "Works with contracts & forms",
                            ].map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-on-surface-variant">
                            <span className="inline-flex items-center gap-2">
                                <Lock className="h-4 w-4" /> Files stay on device
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4" /> Privacy-first
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Smartphone className="h-4 w-4" /> Mobile-friendly
                            </span>
                        </div>
                    </div>

                    {/* RIGHT: Dropbox to main editor */}
                    <div id="start">
                        <InlineDropBox className="w-full" minHeight={480} maxWidth={720} label="Choose PDF to Sign" />
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* WHY THIS PAGE */}
                <section className="py-14 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Why “private PDF signing” matters</h2>
                            <p className="text-on-surface-variant mb-4">
                                When you sign PDFs online, the biggest concern is where your document goes.
                                This page is designed for users who want a simple signature workflow without accounts,
                                and with local-first processing by default.
                            </p>
                            <div className="bg-[#091328]/50 border rounded-xl p-5">
                                <p className="text-on-surface font-headline font-semibold mb-2">Practical privacy tip</p>
                                <p className="text-on-surface-variant text-sm">
                                    Always confirm the exported PDF contains the signature exactly where intended.
                                    If you’re signing highly sensitive documents, avoid any tool that requires uploads unless you trust the provider and policy.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {useCases.map((c) => (
                                <div key={c.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <h3 className="font-bold text-on-surface font-headline mb-2">{c.title}</h3>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">{c.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BENEFITS */}
                <section className="py-14 bg-[#091328]/50">
                    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">What you can do on this page</h2>
                            <p className="text-on-surface-variant mb-4">
                                This page launches the main editor (the same editor used on the homepage) so you can sign and finish the document end-to-end.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-5 w-5 text-primary-700 flex items-center justify-center" aria-hidden="true">
                                            •
                                        </span>
                                        <span className="text-on-surface">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-[0_0_25px_rgba(139,92,246,0.2)] text-center">
                            <PenTool className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-on-surface font-headline mb-3">Sign in seconds</h3>
                            <p className="text-on-surface-variant mb-6">
                                Upload your PDF, place your signature, and download. No signup, no watermark.
                            </p>
                            <a
                                href="#start"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-6 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] inline-flex items-center gap-2 transition"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Open Signature Editor</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* HOW TO */}
                <section id="how-to" className="py-14 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6 text-center">How to sign a PDF privately (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-open">
                                <h3 className="font-semibold text-on-surface font-headline">1) Open the editor and choose your PDF</h3>
                                <p className="text-on-surface-variant">
                                    Use the dropbox above to select a PDF from your device and load it in the editor.
                                </p>
                            </li>
                            <li id="step-sign">
                                <h3 className="font-semibold text-on-surface font-headline">2) Add your signature</h3>
                                <p className="text-on-surface-variant">
                                    Draw, type, or upload a signature image, then place it where you need it (signature line, initials, date, etc.).
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold text-on-surface font-headline">3) Download the signed PDF</h3>
                                <p className="text-on-surface-variant">
                                    Export instantly. The output is watermark-free and you don’t need an account.
                                </p>
                            </li>
                        </ol>

                        <div className="mt-10 text-center">
                            <a
                                href="#start"
                                className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none hover:scale-105 active:scale-95 transition-all text-on-primary font-semibold px-7 py-3 rounded-full shadow-[0_0_25px_rgba(139,92,246,0.2)] transition"
                            >
                                <Upload className="h-5 w-5" />
                                Sign a PDF Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-14 bg-[#091328]/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6 text-center">Private PDF Signing — FAQs</h2>

                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details
                                    key={i}
                                    className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl border border-white/5 shadow-[0_0_15px_rgba(139,92,246,0.1)] p-5 open:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition"
                                >
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                                        <span className="text-lg font-semibold text-on-surface font-headline">{item.q}</span>
                                        <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <div className="mt-3 text-on-surface-variant leading-relaxed text-sm">{item.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="py-14 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related pages
                        </h2>
                        <p className="text-on-surface-variant mb-4">If you’re doing more than signing, these help:</p>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/no-signup-pdf-editor/" className="underline hover:text-primary-900">No signup PDF editor</a></li>
                            <li><a href="/edit-pdf-without-uploading-to-server/" className="underline hover:text-primary-900">Edit PDF without uploading</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Extract / remove pages</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF</a></li>
                            <li><a href="/ocr/" className="underline hover:text-primary-900">OCR scanned PDF</a></li>
                            <li><a href="/tools/" className="underline hover:text-primary-900">Browse all tools</a></li>
                        </ul>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
                <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
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

export default { Page: SignPdfDocumentPrivate };
