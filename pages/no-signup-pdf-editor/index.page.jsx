// pages/no-signup-pdf-editor/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    UserX,
    Lock,
    ShieldCheck,
    CheckCircle2,
    Upload,
    FileText,
    Zap,
    Link as LinkIcon,
} from "lucide-react";
import InlineDropBox from "/src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function NoSignupPdfEditor() {
    const benefits = [
        "No signup / no login — edit PDFs without creating an account",
        "No watermark on downloads",
        "Privacy-first by default: your PDF stays on your device",
        "Edit, sign, annotate, merge, split, compress, and convert",
        "Works on desktop & mobile (iPhone/Android/Mac/Windows)",
    ];

    const sections = [
        {
            title: "Why people search “no signup PDF editor”",
            body:
                "A lot of tools lock downloads behind registration or trials. This page is built for users who want a simple signature workflow without accounts, or surprise paywalls.",
        },
        {
            title: "What you can do without an account",
            body:
                "Open a PDF and edit text, add signatures, highlight/annotate, organize pages, compress for uploads, and export instantly. No signup required.",
        },
        {
            title: "Privacy-first workflow (by default)",
            body:
                "When editing runs locally in the browser, your PDF doesn’t need to leave your device. If a feature ever requires an upload, it should be clearly communicated before you start.",
        },
        {
            title: "Faster: fewer steps, fewer blockers",
            body:
                "No account creation means fewer interruptions — ideal when you’re on mobile, sharing a device, or just trying to submit a form before a deadline.",
        },
    ];

    // MUST match server FAQ schema text
    const faqs = [
        {
            q: "Is this PDF editor really no signup?",
            a: (
                <>
                    Yes. You can open, edit, and download PDFs without creating an account or logging in.
                </>
            ),
        },
        {
            q: "Is it free and watermark-free?",
            a: (
                <>
                    Yes — downloads are watermark-free, and you don’t need to register.
                </>
            ),
        },
        {
            q: "Do you upload my PDF to a server?",
            a: (
                <>
                    By default, no — your PDF stays on your device while you edit.
                    If a feature ever requires an upload, we clearly tell you before you start.
                </>
            ),
        },
        {
            q: "Can I edit text inside the PDF?",
            a: (
                <>
                    Yes for PDFs that contain selectable text. If your PDF is scanned (image-only),
                    run{" "}
                    <a href="/ocr/" className="text-blue-600 hover:underline">
                        OCR
                    </a>{" "}
                    first to make text searchable/selectable.
                </>
            ),
        },
        {
            q: "Can I sign a PDF without signing up?",
            a: (
                <>
                    Yes. Upload your PDF, add a signature in the editor, and download the signed file instantly —
                    no login required.
                </>
            ),
        },
        {
            q: "What are the practical limits?",
            a: (
                <>
                    There are no artificial limits from us. Practical limits depend on your device memory/CPU and the PDF size/complexity.
                    If a PDF is huge, split it first using{" "}
                    <a href="/split-pdf/" className="text-blue-600 hover:underline">
                        Split PDF
                    </a>.
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

            {/* HERO */}
            <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 grid items-start gap-10 lg:grid-cols-2">
                    {/* LEFT */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            No Signup PDF Editor
                        </h1>
                        <p className="text-lg md:text-xl font-semibold mt-3 text-blue-700">
                            Edit PDFs without login • No watermark • Privacy-first
                        </p>

                        <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-xl mx-auto lg:mx-0">
                            Upload a PDF and start editing immediately — no account creation, no email capture, and no “download locked” screens.
                            By default, your PDF stays on your device while you work.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#start"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 shadow-md transition"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Start Editing</span>
                            </a>

                            <a
                                href="#how-to"
                                className="bg-white text-blue-600 border hover:shadow px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition"
                            >
                                <FileText className="h-5 w-5" />
                                <span>How it works</span>
                            </a>
                        </div>

                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 max-w-xl mx-auto lg:mx-0">
                            {[
                                "No signup / no login required",
                                "Watermark-free downloads",
                                "Private by default (local-first)",
                                "Works on mobile and desktop",
                            ].map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                            <span className="inline-flex items-center gap-2">
                                <UserX className="h-4 w-4" /> No account
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Lock className="h-4 w-4" /> Files stay on device
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4" /> Privacy-first
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Zap className="h-4 w-4" /> Fast workflow
                            </span>
                        </div>
                    </div>

                    {/* RIGHT: Dropbox to main editor */}
                    <div id="start">
                        <InlineDropBox className="w-full" minHeight={480} maxWidth={720} label="Choose PDF to Edit" />
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* WHY / CONTENT */}
                <section className="py-14 bg-white">
                    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Edit PDFs with no signup (and no friction)</h2>
                            <p className="text-gray-700 mb-4">
                                This page is built for high-intent searches like “PDF editor no signup” and “edit PDF without login.”
                                The goal is simple: open a file, do the task, export — without accounts or delays.
                            </p>

                            <div className="bg-gray-50 border rounded-xl p-5">
                                <p className="text-gray-900 font-semibold mb-2">What “no signup” should mean</p>
                                <p className="text-gray-700 text-sm">
                                    No forced registration, no email gates, and no “download requires login” surprise screens.
                                    You should be able to finish the job and leave.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {sections.map((s) => (
                                <div key={s.title} className="bg-white border rounded-2xl p-5 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{s.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BENEFITS */}
                <section className="py-14 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">What you can do (no login required)</h2>
                            <p className="text-gray-700 mb-4">
                                Use the main editor to handle common PDF jobs end-to-end — editing, signing, annotating, compressing, and more.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-5 w-5 text-blue-700 flex items-center justify-center" aria-hidden="true">
                                            •
                                        </span>
                                        <span className="text-gray-800">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white border rounded-2xl p-8 shadow text-center">
                            <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Start editing in seconds</h3>
                            <p className="text-gray-700 mb-6">
                                Upload your PDF, make changes, and download — no signup, no watermark.
                            </p>
                            <a
                                href="#start"
                                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow inline-flex items-center gap-2 transition"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Open Editor</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* HOW TO */}
                <section id="how-to" className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6 text-center">How to edit a PDF with no signup (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-open">
                                <h3 className="font-semibold text-gray-900">1) Upload your PDF</h3>
                                <p className="text-gray-700">
                                    Use the dropbox above to choose a PDF from your device and load it in the editor.
                                </p>
                            </li>
                            <li id="step-edit">
                                <h3 className="font-semibold text-gray-900">2) Make changes</h3>
                                <p className="text-gray-700">
                                    Edit text, add a signature, annotate, organize pages, or compress for uploads — all without logging in.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold text-gray-900">3) Download instantly</h3>
                                <p className="text-gray-700">
                                    Export a clean PDF with no watermark. No account creation is required.
                                </p>
                            </li>
                        </ol>

                        <div className="mt-10 text-center">
                            <a
                                href="#start"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg shadow transition"
                            >
                                <Upload className="h-5 w-5" />
                                Edit a PDF Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-14 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6 text-center">No Signup PDF Editor — FAQs</h2>

                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details
                                    key={i}
                                    className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 open:shadow-md transition"
                                >
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                                        <span className="text-lg font-semibold text-gray-900">{item.q}</span>
                                        <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <div className="mt-3 text-gray-700 leading-relaxed text-sm">{item.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="py-14 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related pages
                        </h2>
                        <p className="text-gray-700 mb-4">More “privacy / no friction” intent pages:</p>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/offline-pdf-editor-browser/" className="underline hover:text-blue-900">Offline-style PDF editor</a></li>
                            <li><a href="/edit-pdf-without-uploading-to-server/" className="underline hover:text-blue-900">Edit PDF without uploading</a></li>
                            <li><a href="/sign-pdf-document-private/" className="underline hover:text-blue-900">Private PDF signing</a></li>
                            <li><a href="/remove-watermark-from-pdf-free-no-login/" className="underline hover:text-blue-900">Remove watermark (no login)</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split / extract pages</a></li>
                            <li><a href="/tools/" className="underline hover:text-blue-900">Browse all tools</a></li>
                        </ul>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
                <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
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

export default { Page: NoSignupPdfEditor };
