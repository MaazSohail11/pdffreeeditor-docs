// pages/type-on-pdf-document/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    Type,
    Upload,
    CheckCircle2,
    Lock,
    Link as LinkIcon,
    FileText,
    Search,
    PenTool,
} from "lucide-react";
import SiteNav from "/src/components/SiteNav.jsx";
import InlineDropBox from "/src/components/InlineDropBox.jsx";

function TypeOnPdfDocumentPage() {
    const benefits = [
        "Type on a PDF document online — add text boxes anywhere",
        "No signup, no watermark — export instantly",
        "Private by default (client-side editor)",
        "Works for forms, applications, invoices, contracts, school documents",
        "If your PDF is scanned, OCR can make text selectable/searchable",
    ];

    const scenarios = [
        {
            title: "Fill out a PDF form (typed, not handwritten)",
            body: "Add text boxes to complete forms neatly so they’re readable and professional.",
        },
        {
            title: "Add missing info to a PDF",
            body: "Type dates, names, invoice totals, addresses, or short notes without recreating the document.",
        },
        {
            title: "Type on a scanned PDF (image-based)",
            body: "If the PDF is a scan, you can still type on top. If you want selectable text/search, run OCR first.",
        },
        {
            title: "Type and sign in one flow",
            body: "Fill a contract, then sign it — without printing and scanning.",
        },
    ];

    const faqs = [
        {
            q: "How do I type on a PDF document online for free?",
            a: (
                <>
                    Upload your PDF using the box above. In the editor, choose the Text tool to add a text box,
                    click where you want to type, then download the updated PDF. No signup and no watermark.
                </>
            ),
        },
        {
            q: "Can I type on a scanned PDF?",
            a: (
                <>
                    Yes — you can type on top of a scanned PDF. If you want the scanned text to become selectable/searchable,
                    use{" "}
                    <a href="/ocr/" className="text-blue-600 hover:underline">OCR PDF</a>{" "}
                    first.
                </>
            ),
        },
        {
            q: "Do you upload my PDF to your servers?",
            a: (
                <>
                    By default, editing runs locally in your browser so your file stays on your device. If a workflow requires upload,
                    it should be indicated before you proceed.
                </>
            ),
        },
        {
            q: "Can I type on a PDF on iPhone or Android?",
            a: (
                <>
                    Yes — this works in modern browsers (Safari/Chrome). Upload the PDF, add text, and export the updated file.
                </>
            ),
        },
        {
            q: "Can I sign after typing?",
            a: (
                <>
                    Yes — after typing, you can{" "}
                    <a href="/sign-pdf/" className="text-blue-600 hover:underline">sign the PDF</a>{" "}
                    and download instantly.
                </>
            ),
        },
        {
            q: "Why can’t I edit existing PDF text?",
            a: (
                <>
                    Some PDFs contain selectable text you can edit, but scanned PDFs are images. For scans, use{" "}
                    <a href="/ocr/" className="text-blue-600 hover:underline">OCR</a>{" "}
                    or type new text boxes on top.
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
                            Type on a PDF Document
                        </h1>
                        <p className="text-lg md:text-xl font-semibold mt-3 text-blue-700">
                            Free • No Signup • No Watermark • Private by default
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-xl">
                            Fill forms, add text boxes, and complete documents neatly — straight in your browser.
                            Upload a PDF, type where you need, then download instantly.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#start"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 shadow-md transition"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Start — Type on PDF</span>
                            </a>
                            <a
                                href="#how-to"
                                className="bg-white text-blue-600 border hover:shadow px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition"
                            >
                                <Type className="h-5 w-5" />
                                <span>How it works</span>
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-700">
                            <span className="inline-flex items-center gap-2">
                                <Lock className="h-4 w-4" /> Client-side editor (private by default)
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> No watermark downloads
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Search className="h-4 w-4 text-blue-700" /> OCR available for scanned PDFs
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
                        <InlineDropBox className="w-full" minHeight={480} maxWidth={720} label="Choose PDF to type on" />
                        <p className="text-xs text-gray-500 mt-3">
                            If your PDF is a scan (image-only) and you want searchable text, run{" "}
                            <a href="/ocr/" className="text-blue-600 hover:underline">OCR</a>{" "}
                            first — then type or edit more easily.
                        </p>
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* Scenarios */}
                <section className="py-14 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            When people need to type on a PDF
                        </h2>
                        <p className="text-gray-700 mb-8 max-w-3xl">
                            The intent behind “type on PDF document” is usually urgent: forms, applications, and signatures.
                            This page is built to get you from upload → typed PDF → download in minutes.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {scenarios.map((s) => (
                                <div key={s.title} className="bg-gray-50 border rounded-xl p-5">
                                    <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                                    <p className="text-gray-700 text-sm">{s.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How-to */}
                <section id="how-to" className="py-14 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            How to type on a PDF (3 steps)
                        </h2>
                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p>Use the upload box to open your file inside the browser editor.</p>
                            </li>
                            <li id="step-type">
                                <h3 className="font-semibold">2) Add a text box and type</h3>
                                <p>
                                    Select the Text tool, click where you want to type, then type. Resize and reposition the text box as needed.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download the updated PDF</h3>
                                <p>Export instantly. No signup, no watermark.</p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Fast guidance */}
                <section className="py-14 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Scanned PDF vs editable PDF (don’t waste time)</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 border rounded-xl p-5">
                                <h3 className="font-semibold mb-2">If your PDF has selectable text</h3>
                                <p className="text-gray-700 text-sm">
                                    You can usually click and edit or add new text cleanly. Great for digital PDFs created from Word/Google Docs.
                                </p>
                            </div>
                            <div className="bg-gray-50 border rounded-xl p-5">
                                <h3 className="font-semibold mb-2">If your PDF is scanned (image-only)</h3>
                                <p className="text-gray-700 text-sm">
                                    You can still type on top, but the original text won’t become editable unless you run{" "}
                                    <a href="/ocr/" className="text-blue-700 underline hover:text-blue-900">OCR</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-14 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Type on PDF — FAQs</h2>
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
                            <li><a href="/edit-pdf/" className="underline hover:text-blue-900">Edit PDF text</a></li>
                            <li><a href="/ocr/" className="underline hover:text-blue-900">OCR PDF (scanned PDFs)</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-blue-900">Sign PDF</a></li>
                            <li><a href="/annotate-pdf/" className="underline hover:text-blue-900">Annotate / highlight</a></li>
                            <li><a href="/insert-photo-into-pdf-file/" className="underline hover:text-blue-900">Insert photo into PDF</a></li>
                            <li><a href="/add-logo-to-pdf-online/" className="underline hover:text-blue-900">Add logo to PDF</a></li>
                        </ul>

                        <div className="mt-6 text-sm text-gray-600">
                            Need to sign after typing? Use{" "}
                            <a href="/sign-pdf/" className="text-blue-700 underline hover:text-blue-900">Sign PDF</a>{" "}
                            for a clean, professional finish.
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

export default { Page: TypeOnPdfDocumentPage };
