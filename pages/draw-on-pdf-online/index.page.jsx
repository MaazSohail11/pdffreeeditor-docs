// pages/draw-on-pdf-online/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    PenTool,
    FileText,
    Upload,
    CheckCircle2,
    Lock,
    Link as LinkIcon,
} from "lucide-react";
import InlineDropBox from "/src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function DrawOnPdfOnline() {
    const trustBullets = [
        "Free forever — no signup, no watermark",
        "Draw, circle, underline, add arrows and handwritten notes",
        "Works on desktop & mobile (iPhone/Android/Mac/Windows)",
        "Runs locally in your browser by default (privacy-first)",
    ];

    const useCases = [
        {
            title: "Mark up homework, assignments, and study notes",
            body: "Circle important parts, write quick notes in the margins, and highlight key lines before submitting.",
        },
        {
            title: "Review contracts and proposals",
            body: "Draw arrows, add quick callouts, and point to clauses that need changes — without printing anything.",
        },
        {
            title: "Annotate floor plans, designs, and diagrams",
            body: "Sketch changes directly on the PDF: boxes, arrows, quick shapes, and notes for teammates.",
        },
        {
            title: "Sign or initial with a pen tool",
            body: "If you don’t want a typed signature, draw your initials or signature directly on the PDF.",
        },
    ];

    const tips = [
        {
            title: "Best results on iPad / stylus",
            body: "Use a stylus (or Apple Pencil) for clean handwriting. On phones, zoom in and write slowly for precision.",
        },
        {
            title: "Scanned PDFs still work",
            body: "Even if the text isn’t selectable, you can still draw on top of scanned pages (notes, arrows, circles).",
        },
        {
            title: "Keep it clean",
            body: "Use a thinner pen for underlines and a thicker pen for emphasis. Pick one color for comments to stay readable.",
        },
    ];

    // Visible FAQ (must match server schema)
    const faqs = [
        {
            q: "Can I draw on a PDF online for free?",
            a: "Yes. Upload your PDF, use the draw/pen tool to add handwriting or shapes, then download — no signup and no watermark.",
        },
        {
            q: "Do you upload my PDF to your servers?",
            a: "By default, the editor runs in your browser so your PDF stays on your device. If any feature ever needs an upload, you’ll see it clearly before starting.",
        },
        {
            q: "Can I draw on a scanned PDF?",
            a: "Yes. Drawing works on scanned PDFs because you’re writing on top of the page image.",
        },
        {
            q: "Does it work on iPhone and Android?",
            a: "Yes. Open this page in Safari (iPhone/iPad) or Chrome (Android). Zoom in for precise drawing.",
        },
        {
            q: "How do I remove or undo drawings?",
            a: "Use undo while editing. If you downloaded already, re-open the file and remove the drawn objects in the editor.",
        },
        {
            q: "Will my drawings change PDF quality?",
            a: "Your original PDF stays unchanged; you download a new copy that includes your drawings. Text and layout remain intact.",
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
                            Draw on PDF Online Free
                            <br />
                            <span className="text-blue-600">
                                Add handwriting, arrows & notes — no signup
                            </span>
                        </h1>

                        <p className="text-lg text-gray-700 mb-3">
                            Need to scribble, circle, underline, or add quick handwritten notes on a PDF?
                            Upload your file and draw directly in your browser — then download instantly.
                        </p>

                        <p className="text-base text-gray-700 mb-8">
                            Built for speed and trust: <strong>no signup</strong>, <strong>no watermark</strong>,
                            and your file stays on your device by default.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                            <a
                                href="#start"
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Start — Draw on PDF</span>
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
                                <span>Privacy-first editing experience</span>
                            </li>
                        </ul>
                    </div>

                    {/* Dropbox (same as homepage flow) */}
                    <div id="start" className="w-full">
                        <InlineDropBox
                            className="w-full"
                            minHeight={480}
                            maxWidth={720}
                            label="Choose PDF to Draw On"
                        />
                        <p className="text-xs text-gray-500 mt-3 flex items-center gap-2 justify-center lg:justify-start">
                            <Lock className="h-4 w-4" />
                            Your PDF stays on your device by default.
                        </p>
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* Use cases */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">What people draw on PDFs for</h2>
                        <p className="text-gray-700 mb-6">
                            “Draw on PDF” searches are usually urgent: someone needs to mark something up and submit it today.
                            Here are the most common scenarios this page is built for.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {useCases.map((item) => (
                                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tips */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-4">
                        {tips.map((t) => (
                            <div key={t.title} className="bg-white rounded-xl border border-gray-200 p-5">
                                <h3 className="font-semibold mb-2">{t.title}</h3>
                                <p className="text-gray-700 text-sm">{t.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How to (anchors for schema) */}
                <section id="how-to" className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to draw on a PDF online (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p className="text-gray-700">
                                    Drag &amp; drop your PDF into the box above. The editor opens with your document ready to mark up.
                                </p>
                            </li>
                            <li id="step-draw">
                                <h3 className="font-semibold">2) Choose the draw/pen tool</h3>
                                <p className="text-gray-700">
                                    Pick a pen color and thickness, then draw notes, arrows, circles, or handwriting directly on the page.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download instantly</h3>
                                <p className="text-gray-700">
                                    Export your updated PDF. You’ll get a clean file with your drawings included — no watermark.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Draw on PDF — FAQs</h2>
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
                            Related PDF tools
                        </h2>
                        <p className="text-gray-700 mb-3">
                            After you draw on your PDF, you might also need these:
                        </p>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/highlight-text-in-pdf-free/" className="underline hover:text-blue-900">Highlight text in PDF</a></li>
                            <li><a href="/add-image-to-pdf-no-watermark/" className="underline hover:text-blue-900">Add image/logo to PDF</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-blue-900">Sign PDF online</a></li>
                            <li><a href="/annotate-pdf/" className="underline hover:text-blue-900">Annotate PDF</a></li>
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

export default { Page: DrawOnPdfOnline };
