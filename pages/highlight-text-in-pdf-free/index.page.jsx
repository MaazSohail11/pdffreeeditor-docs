// pages/highlight-text-in-pdf-free/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    Highlighter,
    FileText,
    Upload,
    CheckCircle2,
    Lock,
    Link as LinkIcon,
} from "lucide-react";
import InlineDropBox from "/src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function HighlightTextInPdfFree() {
    const trustBullets = [
        "Free PDF highlighter — no signup, no watermark",
        "Highlight, underline, and mark key lines fast",
        "Works on iPhone/Android + desktop browsers",
        "Runs locally in your browser by default (privacy-first)",
    ];

    const scenarios = [
        {
            title: "Students: highlight key paragraphs for revision",
            body: "Highlight definitions, formulas, and important lines so you can revise faster and stay organized.",
        },
        {
            title: "Work: review contracts and reports",
            body: "Highlight clauses, mark sections for approval, and share a clear version with your team or clients.",
        },
        {
            title: "Research: annotate PDFs without printing",
            body: "Highlight claims, add quick callouts, and keep a clean digital workflow for reading papers.",
        },
        {
            title: "Proofreading: mark text you need to edit later",
            body: "Highlight sentences you want to rewrite and come back to them without losing your place.",
        },
    ];

    const doThisNotThat = [
        {
            title: "If text is selectable → highlight the text",
            body: "Selectable text lets you highlight cleanly and keeps the PDF sharp.",
        },
        {
            title: "If it’s scanned (image PDF) → use a marker-style highlight",
            body: "You can still highlight visually on scanned pages by drawing a transparent highlight stroke over the area.",
        },
        {
            title: "Need to remove highlights?",
            body: "Use undo while editing. If already downloaded, re-open and delete the highlight objects in the editor.",
        },
    ];

    // Visible FAQ (must match server schema)
    const faqs = [
        {
            q: "How do I highlight text in a PDF for free?",
            a: "Upload your PDF, choose the highlight tool, mark the text you need, then download the updated PDF — no signup and no watermark.",
        },
        {
            q: "Do you add watermarks when I download?",
            a: "No. Your highlighted PDF downloads without a watermark.",
        },
        {
            q: "Do you upload my PDF to your servers?",
            a: "By default, highlighting runs in your browser so your PDF stays on your device. If any feature ever needs an upload, you’ll see it clearly before starting.",
        },
        {
            q: "Can I highlight a scanned PDF?",
            a: "Yes. You can highlight visually by drawing highlight strokes on top of scanned pages. For selectable text on scanned PDFs, you’d need OCR.",
        },
        {
            q: "Does it work on mobile?",
            a: "Yes. Use Safari on iPhone/iPad or Chrome on Android. Zoom in, then highlight accurately.",
        },
        {
            q: "Can I remove highlights later?",
            a: "Yes. Re-open the PDF and delete the highlight marks in the editor, then download again.",
        },
    ];

    return (
        <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
            <SiteNav />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Highlight Text in PDF Free
                            <br />
                            <span className="text-blue-600">Online PDF highlighter — no signup</span>
                        </h1>

                        <p className="text-lg text-gray-700 mb-3">
                            Highlight key lines, mark paragraphs, and keep your PDF readable — right in your browser.
                            Perfect for studying, reviewing contracts, and reading research papers.
                        </p>

                        <p className="text-base text-gray-700 mb-8">
                            Fast + trusted: <strong>free</strong>, <strong>no watermark</strong>, and your file stays on your device by default.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                            <a
                                href="#start"
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Start — Highlight PDF</span>
                            </a>

                            <a
                                href="#how-to"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                            >
                                <FileText className="h-5 w-5" />
                                <span>How it works (3 steps)</span>
                            </a>
                        </div>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                            {trustBullets.map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span>{t}</span>
                                </li>
                            ))}
                            <li className="flex items-center gap-2">
                                <Lock className="h-4 w-4 text-gray-600" />
                                <span>Privacy-first highlighting</span>
                            </li>
                        </ul>
                    </div>

                    <div id="start" className="w-full">
                        <InlineDropBox
                            className="w-full"
                            minHeight={480}
                            maxWidth={720}
                            label="Choose PDF to Highlight"
                        />
                        <p className="text-xs text-gray-500 mt-3 flex items-center gap-2 justify-center lg:justify-start">
                            <Lock className="h-4 w-4" />
                            Your PDF stays on your device by default.
                        </p>
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* Scenarios */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">When people search “highlight PDF”</h2>
                        <p className="text-gray-700 mb-6">
                            Most users want one thing: highlight fast, download fast, no signup. This page is built for that exact flow.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {scenarios.map((s) => (
                                <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                    <h3 className="font-semibold mb-2">{s.title}</h3>
                                    <p className="text-gray-700 text-sm">{s.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Guidance */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-4">
                        {doThisNotThat.map((t) => (
                            <div key={t.title} className="bg-white rounded-xl border border-gray-200 p-5">
                                <h3 className="font-semibold mb-2">{t.title}</h3>
                                <p className="text-gray-700 text-sm">{t.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How to */}
                <section id="how-to" className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to highlight text in a PDF (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p className="text-gray-700">
                                    Upload your file in the box above. The editor opens and your pages are ready to mark.
                                </p>
                            </li>
                            <li id="step-highlight">
                                <h3 className="font-semibold">2) Highlight the text</h3>
                                <p className="text-gray-700">
                                    Choose the highlight tool and drag across the lines you want to mark. Zoom in for accuracy on mobile.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download the updated PDF</h3>
                                <p className="text-gray-700">
                                    Export instantly — your highlighted PDF downloads clean with no watermark.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Highlight PDF — FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <p className="mt-2 text-gray-700">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related tools */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            More tools people use after highlighting
                        </h2>
                        <p className="text-gray-700 mb-3">
                            Common next steps:
                        </p>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/draw-on-pdf-online/" className="underline hover:text-blue-900">Draw on PDF online</a></li>
                            <li><a href="/add-image-to-pdf-no-watermark/" className="underline hover:text-blue-900">Add image/logo to PDF</a></li>
                            <li><a href="/annotate-pdf/" className="underline hover:text-blue-900">Annotate PDF</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-blue-900">Compress PDF</a></li>
                            <li><a href="/merge-pdf/" className="underline hover:text-blue-900">Merge PDFs</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split PDF pages</a></li>
                        </ul>
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

export default { Page: HighlightTextInPdfFree };
