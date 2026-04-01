// pages/pdf-to-word/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Upload, CheckCircle, Edit3, ShieldCheck, Zap } from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function PDFToWord() {
  const related = [
    { to: "/word-to-pdf/", label: "Word to PDF" },
    { to: "/pdf-to-pptx/", label: "PDF to PPTX" },
    { to: "/pdf-to-excel/", label: "PDF to Excel/CSV" },
    { to: "/pdf-to-image/", label: "PDF to Image" },
    { to: "/pdf-to-html/", label: "PDF to HTML" },
  ];

  return (
    <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            {/* Copy column */}
            <div className="text-center md:text-left">
              {/* Primary H1 targeting head term + modifiers */}
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                PDF to Word Converter Online (Free)
              </h1>
              <p className="text-lg md:text-xl text-gray-800 mb-3">
                Convert PDF to editable Word documents{" "}
                <strong>(DOC &amp; DOCX)</strong> in seconds. No signup, no email, no watermark —
                just a clean, accurate PDF to Word converter that works in your browser.
              </p>

              <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Turn PDFs into fully editable Word files (DOCX).</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Preserves layout, fonts, and paragraphs where possible.</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Works on Mac, Windows, iPhone, and Android.</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 md:items-start items-center">
                <a
                  href="/editor/"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-xl inline-flex items-center gap-2 font-semibold shadow-lg"
                >
                  <Upload className="h-5 w-5" />
                  <span>Convert PDF to Word — Free</span>
                </a>
                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  <span>Private by design — processing runs in your browser where possible.</span>
                </p>
              </div>
            </div>

            {/* Tool column */}
            <aside aria-label="PDF to Word converter dropzone" className="w-full">
              <ConverterPanel
                defaultFormat="docx"
                formatOptions={[{ value: "docx", label: "Word (.docx)" }]}
                showEditInstead={false}
              />
              <p className="mt-3 text-xs text-gray-600 text-center md:text-left">
                Upload your PDF above to convert it to an editable Word document. For quick tweaks
                without converting, try{" "}
                <a href="/edit-pdf/" className="text-blue-600 hover:underline">
                  Edit PDF
                </a>
                .
              </p>
            </aside>
          </div>
        </section>

        {/* Why convert PDF to Word with PDF Free Editor? */}
        <section className="max-w-5xl mx-auto px-6 py-10 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why convert PDF to Word with PDF Free Editor?
          </h2>
          <p className="text-gray-700 mb-4">
            PDF Free Editor gives you a fast, no-nonsense way to{" "}
            <strong>convert PDF to Word online for free</strong>. There’s no signup, no email gate,
            and no watermark — making it ideal for resumes, contracts, school assignments, and any
            document where you need a clean, editable Word file.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Fully editable Word (DOCX) output
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Edit text, adjust paragraphs, and change formatting in Word, Google Docs, or
                    any compatible editor. Perfect for fixing typos, updating templates, or reusing
                    content from older PDFs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Free forever — no signup, no watermark
                  </h3>
                  <p className="text-gray-700 text-sm">
                    You don’t need an account, trial, or credit card. Simply upload, convert, and
                    download your Word file. The exported document is watermark-free and ready to
                    send.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Browser-based &amp; mobile-friendly
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Convert PDFs on Chrome, Edge, Safari, or Firefox — on desktop or mobile. You
                    don’t have to install heavy software just to turn a PDF into a Word document.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Privacy-first PDF to Word conversion
                  </h3>
                  <p className="text-gray-700 text-sm">
                    The converter is built to use <strong>client-side processing where possible</strong>,
                    so your PDFs stay on your device by default. That makes it a great fit for
                    sensitive documents like contracts, invoices, and HR paperwork.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Edit3 className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Convert or edit — your choice
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Sometimes you don’t need a full conversion. Use{" "}
                    <a href="/edit-pdf/" className="text-blue-600 hover:underline">
                      Edit PDF
                    </a>{" "}
                    to make quick edits directly in the PDF or use this{" "}
                    <strong>PDF to Word converter</strong> when you want complete control in Word.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Optimized for everyday documents
                  </h3>
                  <p className="text-gray-700 text-sm">
                    The tool works best on digital PDFs (exported from apps like Word, Google Docs,
                    or InDesign). Scanned PDFs still work, but text may come through as images
                    depending on the file’s quality and structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How-to guide */}
        <section className="max-w-4xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How to convert PDF to Word (DOCX)</h2>
          <p className="text-gray-700 mb-3">
            Converting PDF to Word with PDF Free Editor takes just a few clicks. Follow this simple
            step-by-step guide:
          </p>
          <ol className="list-decimal pl-5 text-gray-700 space-y-3">
            <li id="step-upload">
              <strong>Upload your PDF file.</strong> Open the{" "}
              <a href="/editor/" className="text-blue-600 underline">
                Free PDF Editor
              </a>{" "}
              and drag &amp; drop your PDF, or click to choose it from your device.
            </li>
            <li id="step-review">
              <strong>Review layout and content.</strong> Check that pages, headings, and
              paragraphs look correct. If needed, make quick edits or adjust before conversion.
            </li>
            <li id="step-download">
              <strong>Convert PDF to Word and download.</strong> Choose{" "}
              <span className="font-semibold">Word (.docx)</span> as the output format and click{" "}
              <span className="font-semibold">Convert</span>. Your DOCX file downloads instantly.
            </li>
          </ol>

          <p className="mt-4 text-sm text-gray-600">
            Tip: For simple text-heavy PDFs (like essays, reports, or letters), conversion is
            usually very accurate. Complex layouts (magazines, multi-column brochures) may need a
            quick manual polish in Word after conversion.
          </p>
        </section>

        {/* Use cases & examples */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Common ways to use a PDF to Word converter
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-gray-700">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold mb-1 text-gray-900">Resumes &amp; cover letters</h3>
              <p className="text-sm">
                Got an old resume only in PDF? Convert PDF to Word, update your skills and
                experience, and export back to PDF when you’re done.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold mb-1 text-gray-900">Contracts &amp; legal templates</h3>
              <p className="text-sm">
                Take a PDF contract template, turn it into an editable document, and quickly update
                clauses, names, and dates without rebuilding it from scratch.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold mb-1 text-gray-900">Assignments &amp; study notes</h3>
              <p className="text-sm">
                Convert lecture PDFs or worksheets into Word so you can highlight, comment, and
                reorganize your notes for exams and projects.
              </p>
            </div>
          </div>
        </section>

        {/* Related converters */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold mb-3">Related PDF converters</h2>
          <p className="text-gray-700 mb-3 text-sm">
            Need to go the other way or export to a different format? Try these tools:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <a
                key={r.to}
                href={r.to}
                className="border rounded-lg p-3 hover:shadow transition text-blue-700 text-sm font-medium"
              >
                {r.label}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">PDF to Word: Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is the PDF to Word converter really free?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes. The PDF to Word converter is <strong>100% free</strong> to use with no signup,
                no email, and no watermark. You can convert as many PDFs as your device can handle.
              </p>
            </details>

            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Will the Word file be fully editable?
              </summary>
              <p className="mt-2 text-gray-700">
                In most cases, yes. For digital PDFs, the output is an editable DOCX file where you
                can change text, paragraphs, and basic formatting. Complex layouts may need a quick
                cleanup, but you still avoid retyping everything.
              </p>
            </details>

            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                What about scanned PDFs or photos of documents?
              </summary>
              <p className="mt-2 text-gray-700">
                Scanned PDFs can be converted, but depending on how they were created, some text
                may appear as images. For best results, use the highest-quality original file
                available or convert directly from the source document if you have it.
              </p>
            </details>

            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is it safe to convert PDFs to Word online?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes. PDF Free Editor is designed to be <strong>privacy-first</strong>. Where
                possible, processing happens locally in your browser, so your files stay on your
                device. Avoid uploading sensitive files on shared or public devices.
              </p>
            </details>

            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Do you support both DOC and DOCX?
              </summary>
              <p className="mt-2 text-gray-700">
                Exported files use the <strong>DOCX</strong> format, which is fully compatible with
                modern Microsoft Word, Google Docs, and most office suites. You can save as legacy
                DOC from within Word if needed.
              </p>
            </details>

            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Can I edit the PDF without converting to Word?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes. If you only need small changes, open{" "}
                <a href="/edit-pdf/" className="text-blue-600 hover:underline">
                  Edit PDF
                </a>{" "}
                to tweak text, add images, or sign directly in the PDF and download the updated
                file.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/tools/" className="hover:text-white">
            Tools
          </a>
          <a href="/privacy/" className="hover:text-white">
            Privacy
          </a>
          <a href="/terms/" className="hover:text-white">
            Terms
          </a>
          <a href="/contact/" className="hover:text-white">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default { Page: PDFToWord };
