// pages/offline-pdf-editor-browser/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    WifiOff,
    Lock,
    ShieldCheck,
    CheckCircle2,
    Upload,
    FileText,
    PenTool,
    Highlighter,
    Scissors,
    Layers,
    Search,
    Link as LinkIcon,
} from "lucide-react";
import InlineDropBox from "/src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function OfflinePdfEditorBrowser() {
    const benefits = [
        "Edit PDFs locally in your browser — no account, no watermark",
        "Privacy-first: your file stays on your device by default",
        "Works on Windows, Mac, iPhone & Android (modern browsers)",
        "Great for sensitive docs (contracts, IDs, bank letters, school files)",
        "Fast workflow: open → edit → export instantly",
    ];

    const useCases = [
        {
            title: "Edit a PDF without uploading it",
            body:
                "If you don’t want to email documents around or trust random sites, a browser-based editor that processes locally is the simplest path.",
            icon: <Lock className="h-5 w-5" />,
        },
        {
            title: "Work when your connection is unstable",
            body:
                "Even if your internet drops after the page loads, edits still run locally. You can keep working and export without waiting on uploads.",
            icon: <WifiOff className="h-5 w-5" />,
        },
        {
            title: "Redact, annotate, sign, and share safely",
            body:
                "Mark up documents, add signatures, highlight text, or cover sensitive sections — then export a clean PDF in seconds.",
            icon: <ShieldCheck className="h-5 w-5" />,
        },
        {
            title: "Fix quick document tasks in one place",
            body:
                "Instead of juggling multiple tools, open one editor and do common tasks like add text, insert images, reorder, or split pages.",
            icon: <FileText className="h-5 w-5" />,
        },
    ];

    const faq = [
        {
            q: "Is this really an offline PDF editor?",
            a: (
                <>
                    You typically need an internet connection to open the site the first time.
                    After the editor loads, editing runs locally in your browser (your PDF stays on your device by default).
                    For “fully offline after refresh,” a site must cache its app files using a service worker/PWA approach.
                </>
            ),
        },
        {
            q: "Do you upload my PDF to a server?",
            a: (
                <>
                    By default, no — editing runs locally in your browser, so your file stays on your device.
                    If a feature ever requires an upload, we make that clear before you start.
                </>
            ),
        },
        {
            q: "Can I edit PDF text in the browser?",
            a: (
                <>
                    Yes. If your PDF contains selectable text, you can edit it directly.
                    If the PDF is scanned (image-only), you’ll need{" "}
                    <a href="/ocr/" className="text-blue-600 hover:underline">
                        OCR
                    </a>{" "}
                    to make the text searchable/selectable.
                </>
            ),
        },
        {
            q: "Can I redact/whiteout sensitive info locally?",
            a: (
                <>
                    Yes — you can cover or redact sensitive sections inside the editor and export a new PDF.
                    Always double-check the exported file to ensure the sensitive layer is truly removed (not just visually covered).
                </>
            ),
        },
        {
            q: "Does it work on iPhone and Android?",
            a: (
                <>
                    Yes. Use Safari on iPhone/iPad or Chrome on Android. For best results, close other heavy tabs before editing big PDFs.
                </>
            ),
        },
        {
            q: "Is it free and watermark-free?",
            a: (
                <>
                    Yes — you can edit and export without signup and without watermarks.
                </>
            ),
        },
        {
            q: "What are the practical limits?",
            a: (
                <>
                    There are no “fake” limits from us. Real-world limits depend on your device memory/CPU and the PDF size/complexity.
                    If a PDF is huge, try splitting it first using{" "}
                    <a href="/split-pdf/" className="text-blue-600 hover:underline">
                        Split PDF
                    </a>.
                </>
            ),
        },
        {
            q: "What else can I do besides editing?",
            a: (
                <>
                    You can sign, annotate, merge/split pages, and more. Browse all tools here:{" "}
                    <a href="/tools/" className="text-blue-600 hover:underline">
                        Tools
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
                            Offline PDF Editor in Your Browser
                        </h1>
                        <p className="text-lg md:text-xl font-semibold mt-3 text-blue-700">
                            Edit locally • No signup • No watermark • Privacy-first
                        </p>

                        <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-xl mx-auto lg:mx-0">
                            Open your PDF and edit it directly in the browser. Your document stays on your device by default —
                            ideal when you want an “offline-style” workflow without uploading sensitive files.
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
                                "Local-first editing (no upload by default)",
                                "Great for unstable internet connections",
                                "Works on phone & desktop",
                                "Export instantly — no watermark",
                            ].map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                            <span className="inline-flex items-center gap-2">
                                <Lock className="h-4 w-4" /> Files stay on device
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4" /> Privacy-first
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <WifiOff className="h-4 w-4" /> Works with flaky internet
                            </span>
                        </div>
                    </div>

                    {/* RIGHT: Dropbox to main editor */}
                    <div id="start">
                        <InlineDropBox
                            className="w-full"
                            minHeight={480}
                            maxWidth={720}
                            label="Choose PDF to Edit"
                        />
                    </div>
                </div>
            </section>

            {/* WHAT IT MEANS */}
            <section className="py-14 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">What “offline PDF editor” usually means</h2>
                        <p className="text-gray-700 mb-4">
                            Most people searching “offline PDF editor in browser” want a tool that does not require uploading their PDF.
                            This page is built for that intent: the editor runs locally, so you can edit and export without sending your file anywhere by default.
                        </p>
                        <div className="bg-gray-50 border rounded-xl p-5">
                            <p className="text-gray-800 font-semibold mb-2">Reality check (important):</p>
                            <p className="text-gray-700 text-sm">
                                A website still needs to load in your browser. After it loads, local processing keeps working even if your connection drops.
                                If you need “works after refresh with no internet,” the site must cache its app assets via a service worker/PWA setup.
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {useCases.map((c) => (
                            <div key={c.title} className="bg-white border rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-2 text-blue-700 mb-2">
                                    <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center">
                                        {c.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900">{c.title}</h3>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{c.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="py-14 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4 text-center">Do more than “just open a PDF”</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-center mb-10">
                        This isn’t a viewer. It’s a full browser-based PDF workspace — built to help you finish real document tasks quickly.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Edit & type on PDFs",
                                desc: "Fix text, add notes, fill forms, and adjust content directly in the editor.",
                                icon: <FileText className="h-6 w-6" />,
                                link: "/edit-pdf/",
                                linkText: "Edit PDF text",
                            },
                            {
                                title: "Sign & annotate",
                                desc: "Draw/insert signatures, highlight sections, add comments and markup.",
                                icon: <PenTool className="h-6 w-6" />,
                                link: "/sign-pdf/",
                                linkText: "Sign PDFs",
                            },
                            {
                                title: "Organize pages",
                                desc: "Split, reorder, or merge PDFs when you need a clean upload-ready document.",
                                icon: <Layers className="h-6 w-6" />,
                                link: "/split-pdf/",
                                linkText: "Split / extract pages",
                            },
                            {
                                title: "Highlight & review",
                                desc: "Quickly review PDFs with highlights and simple annotations — great for students.",
                                icon: <Highlighter className="h-6 w-6" />,
                                link: "/annotate-pdf/",
                                linkText: "Annotate PDF",
                            },
                            {
                                title: "Extract text from scans",
                                desc: "If your PDF is scanned, OCR makes it searchable and selectable.",
                                icon: <Search className="h-6 w-6" />,
                                link: "/ocr/",
                                linkText: "Run OCR",
                            },
                            {
                                title: "Split big files",
                                desc: "If your device struggles with huge PDFs, split into smaller parts first.",
                                icon: <Scissors className="h-6 w-6" />,
                                link: "/split-pdf/",
                                linkText: "Split PDF",
                            },
                        ].map((x) => (
                            <div key={x.title} className="bg-white rounded-2xl border p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 bg-blue-50 rounded-xl text-blue-700">{x.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900">{x.title}</h3>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">{x.desc}</p>
                                <a href={x.link} className="text-blue-700 font-semibold hover:underline">
                                    {x.linkText} →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW TO */}
            <section id="how-to" className="py-14 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        How to edit a PDF locally in your browser (3 steps)
                    </h2>

                    <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                        <li id="step-open">
                            <h3 className="font-semibold text-gray-900">1) Open the editor</h3>
                            <p className="text-gray-700">
                                Use the dropbox above to choose a PDF from your device. The editor loads in your browser.
                            </p>
                        </li>
                        <li id="step-edit">
                            <h3 className="font-semibold text-gray-900">2) Make changes locally</h3>
                            <p className="text-gray-700">
                                Edit text, add a signature, annotate, redact, or organize pages. Your PDF stays on your device by default.
                            </p>
                        </li>
                        <li id="step-export">
                            <h3 className="font-semibold text-gray-900">3) Export & download</h3>
                            <p className="text-gray-700">
                                Download the updated PDF instantly — no watermark and no account required.
                            </p>
                        </li>
                    </ol>

                    <div className="mt-10 text-center">
                        <a
                            href="#start"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg shadow transition"
                        >
                            <Upload className="h-5 w-5" />
                            Open Offline-Style Editor
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-14 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6 text-center">Offline PDF Editor — FAQs</h2>

                    <div className="space-y-4">
                        {faq.map((item, i) => (
                            <details key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 open:shadow-md transition">
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

            {/* RELATED TOOLS */}
            <section className="py-14 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <LinkIcon className="h-5 w-5" />
                        Related tools
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Need a specific workflow? These pages may be a better fit:
                    </p>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                        <li><a href="/edit-pdf/" className="underline hover:text-blue-900">Edit PDF text</a></li>
                        <li><a href="/sign-pdf/" className="underline hover:text-blue-900">Sign PDF</a></li>
                        <li><a href="/annotate-pdf/" className="underline hover:text-blue-900">Annotate PDF</a></li>
                        <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split / extract pages</a></li>
                        <li><a href="/merge-pdf/" className="underline hover:text-blue-900">Merge PDFs</a></li>
                        <li><a href="/compress-pdf/" className="underline hover:text-blue-900">Compress PDF</a></li>
                    </ul>
                </div>
            </section>

            {/* FOOTER */}
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

export default { Page: OfflinePdfEditorBrowser };
