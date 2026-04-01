// pages/edit-pdf/index.page.jsx
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Type,
  FileText,
  Download,
  CheckCircle,
  Wand2,
  Menu,
  X,
  Link as LinkIcon,
} from "lucide-react";

import InlineDropBox from "../../src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";
import { initScrollProtection } from "/src/utils/scrollProtection.js";

function EditPDF() {
  const [isOpen, setIsOpen] = useState(false);

  // Protect against external scripts (like AdSense) disabling scroll
  useEffect(() => {
    const cleanup = initScrollProtection();
    return cleanup;
  }, []);

  // Emphasise: free, same font, no background change, no signup
  const benefits = [
    "Edit PDF text online free in your browser — no signup or account needed",
    "Keeps your original fonts, spacing and layout wherever the PDF provides that information",
    "No background change — only the text layer is updated so the page design stays the same",
    "Client-side only PDF text editor — your file never leaves your device",
    "Adjust font size, bold/italic, color and alignment in new or existing text boxes",
    "Mobile-friendly interface: pinch-zoom, tap text to edit and download updated PDFs instantly",
  ];

  return (
    <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          {/* Primary page intent as the single H1 */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Edit PDF Text Online Free
              <br />
              <span className="text-blue-600">
                Same Font &amp; Layout • No Signup • No Watermark
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-3">
              Use this PDF text editor online free to fix typos, update names,
              change dates or replace whole sentences directly inside your PDF.
              The tool keeps your original fonts and layout wherever possible,
              so the document still looks the same.
            </p>
            <p className="text-base text-gray-600 mb-8">
              Everything runs locally in your browser — no account, no trial
              and no watermark. Just upload your file, edit the text and
              download an updated PDF with the same background and design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <a
                href="/editor/"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center space-x-2 shadow-lg hover:bg-blue-700"
              >
                <Type className="h-5 w-5" />
                <span>Edit PDF Text — Free</span>
              </a>
              <a
                href="#how-to"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center space-x-2 border shadow-sm hover:shadow-md"
              >
                <FileText className="h-5 w-5" />
                <span>How it works (3 steps)</span>
              </a>
            </div>
          </div>

          <aside>
            <InlineDropBox minHeight={420} maxWidth={560} />
          </aside>
        </div>
      </section>

      <main className="flex-1">
        {/* Benefits */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                PDF text editor online free (same font, no background change)
              </h2>
              <p className="text-gray-600 mb-4">
                Unlike basic PDF viewers, this editor lets you work on the{" "}
                <strong>actual text layer</strong> in your file. That means you
                can edit text in a PDF online free while preserving fonts,
                colours and spacing, instead of redrawing the whole page.
              </p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border rounded-xl p-6 text-center shadow">
              <Wand2 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Seamless text editing with matching fonts
              </h2>
              <p className="text-gray-600 mb-6">
                Click any detected text to edit it directly or add a new text
                box. The editor reads your PDF information and matches fonts and
                alignment where possible, so the page keeps the same style and
                background while you only change the words.
              </p>
              <a
                href="/editor/"
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow inline-flex items-center space-x-2 transition"
              >
                <Download className="h-5 w-5" />
                <span>Open PDF Text Editor</span>
              </a>
            </div>
          </div>
        </section>

        {/* How-to */}
        <section id="how-to" className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">
              How to edit PDF text online free (3 steps)
            </h2>
            <ol className="space-y-6 list-decimal ml-6 text-gray-700">
              <li id="step-upload">
                <h4 className="font-semibold">1) Open the editor &amp; upload</h4>
                <p className="text-gray-600">
                  Open the editor and drag &amp; drop your PDF, or pick it from
                  your device. Processing runs locally in your browser, so your
                  file is not uploaded to any server.
                </p>
              </li>
              <li id="step-edit">
                <h4 className="font-semibold">
                  2) Click text to edit or add a text box
                </h4>
                <p className="text-gray-600">
                  Click any detected text to edit it directly, or insert a new
                  text box. Adjust font size, weight, alignment and colour. The
                  PDF text editor keeps your existing layout and background so
                  only the content changes.
                </p>
              </li>
              <li id="step-download">
                <h4 className="font-semibold">3) Download — no watermark</h4>
                <p className="text-gray-600">
                  When you are happy with the changes, export and download your
                  updated file. You get a clean PDF with your edited text, no
                  watermark, no signup and no limits.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">
              Popular ways to edit text in a PDF
            </h2>
            <p className="text-gray-600 mb-4">
              Here are some everyday ways people use this online PDF text
              editor. All of them benefit from keeping the original font and
              background intact:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <details className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Fix typos and update names
                </summary>
                <p className="mt-2 text-gray-600">
                  Correct spelling mistakes, update contact details or change a
                  job title directly in the PDF — perfect when you only need a
                  quick change and want the document to look exactly the same.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Redact or white-out sensitive text
                </summary>
                <p className="mt-2 text-gray-600">
                  Use subtle white-out to hide sensitive lines, then add
                  replacement text on top. The original layout and background
                  remain untouched so the page still looks professional.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Add notes and annotations
                </summary>
                <p className="mt-2 text-gray-600">
                  Insert text boxes for comments, explanations or instructions.
                  Great for sending feedback on contracts, coursework, design
                  mockups and more.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Rebrand PDFs without redesigning
                </summary>
                <p className="mt-2 text-gray-600">
                  Replace brand names, URLs or CTAs in your PDFs while keeping
                  your original fonts and colours. Ideal for quick rebranding
                  and campaign updates.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Localise small text blocks
                </summary>
                <p className="mt-2 text-gray-600">
                  Translate headlines, key bullet points or calls to action into
                  another language without rebuilding the layout from scratch.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Fill &amp; tweak forms without Adobe
                </summary>
                <p className="mt-2 text-gray-600">
                  Edit text in form fields, add missing labels or correct
                  instructions directly in the PDF, then download and share —
                  no Adobe subscription needed.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* How fonts & background are preserved */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-3">
              How this PDF text editor keeps fonts and background intact
            </h2>
            <p className="text-gray-700 mb-3">
              When you edit PDF text online, the biggest worry is usually:
              <em> “Will the formatting break?”</em> This editor focuses on the
              text layer only. The vector graphics, images and page background
              are left untouched, so the document looks the same before and
              after you edit.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>
                It reads font information from the PDF and matches it for
                edited lines wherever possible.
              </li>
              <li>
                Text alignment, line spacing and paragraph layout are preserved,
                so new content blends into the page.
              </li>
              <li>
                Background elements like logos, photos, watermarks and coloured
                sections are not redrawn or compressed.
              </li>
              <li>
                For stubborn text, you can white-out a small area and place new
                text on top without changing the rest of the design.
              </li>
            </ul>
          </div>
        </section>

        {/* Scanned PDFs / limitations */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-3">
              Editing scanned or image-only PDFs
            </h2>
            <p className="text-gray-700 mb-3">
              Some files are not true text PDFs but <strong>scanned images</strong>{" "}
              wrapped in a PDF. In those cases, there is no editable text layer
              to update. You still have a few options:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>
                Add new text boxes on top of the scanned content to correct or
                replace small parts of the page.
              </li>
              <li>
                Combine this tool with a <strong>PDF to Word converter</strong>{" "}
                for heavy editing, then export back to PDF.
              </li>
              <li>
                Use white-out rectangles to hide lines you no longer want to
                show.
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              This is the same behaviour you see in most PDF text editor online
              tools — it is limited by how much text information the original
              file contains.
            </p>
          </div>
        </section>

        {/* Privacy & Trust */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
            <p className="text-gray-700 mb-3">
              Editing runs <strong>entirely in your browser</strong>. We do not
              upload your PDF to a server by default, which makes this a good
              choice for contracts, invoices and other private documents.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>No signup, no account, no email required.</li>
              <li>No watermark or forced upgrades — the editor is 100% free.</li>
              <li>
                TLS is used for any optional network requests made by the site.
              </li>
              <li>
                You can clear your browser cache and local storage to remove
                local traces of recent documents.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ (visible) */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Will the fonts and background stay the same?",
                  a: "Yes. The editor works on the text layer in your PDF and keeps the original fonts, background and layout wherever the PDF provides that information. Only the words you change are updated.",
                },
                {
                  q: "Is this PDF text editor really free and without signup?",
                  a: "Yes. You can edit PDF text online free with no signup, no account, no trial and no watermark on your downloaded files.",
                },
                {
                  q: "Will my PDF be uploaded to a server?",
                  a: "No. Editing runs locally in your browser using client-side processing, so your file stays on your own device.",
                },
                {
                  q: "I can't edit some text — why?",
                  a: "If a PDF is flattened or scanned, it may not contain an editable text layer. In that case you can add a new text box on top, or use a PDF to Word converter for deeper editing.",
                },
                {
                  q: "Can I change font and size?",
                  a: "You can change size, weight, colour and alignment for text you add. Existing text will try to match your PDF’s style wherever possible.",
                },
                {
                  q: "Does it work on mobile?",
                  a: "Yes. Use a modern browser on iOS or Android, zoom in on the area you want to change and tap text to edit.",
                },
                {
                  q: "Any limits, watermarks or subscriptions?",
                  a: "There are no watermarks, subscriptions or hidden trials. Very large files may depend on your device’s memory and browser performance.",
                },
              ].map((item, i) => (
                <details key={i} className="bg-white p-4 rounded-lg shadow-sm">
                  <summary className="font-semibold cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-gray-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related tools (exact-match anchors) */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <LinkIcon className="h-5 w-5" />
              Related tools
            </h2>
            <p className="text-gray-600 mb-3">
              Need to do more than just edit text in a PDF? Try these other
              free tools:
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
              <li>
                <a
                  href="/add-image-pdf/"
                  className="underline hover:text-blue-900"
                >
                  Add image to PDF
                </a>
              </li>
              <li>
                <a
                  href="/sign-pdf/"
                  className="underline hover:text-blue-900"
                >
                  Sign PDF online
                </a>
              </li>
              <li>
                <a
                  href="/merge-pdf/"
                  className="underline hover:text-blue-900"
                >
                  Merge PDF files
                </a>
              </li>
              <li>
                <a
                  href="/split-pdf/"
                  className="underline hover:text-blue-900"
                >
                  Split PDF pages
                </a>
              </li>
              <li>
                <a
                  href="/pdf-to-word/"
                  className="underline hover:text-blue-900"
                >
                  PDF to Word converter
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              Ready to edit your PDF text?
            </h2>
            <p className="text-blue-100 mb-6">
              Fix text while keeping your fonts, background and layout exactly
              how you designed them — free, online and with no signup.
            </p>
            <a
              href="/editor/"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 inline-flex items-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Open PDF Text Editor</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © {new Date().getFullYear()} PDF Free Editor by TechRex. All rights
          reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/tools/" className="hover:text-white">
            Tools
          </a>
          <a href="/privacy/" className="hover:text-white">
            Privacy Policy
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

export default { Page: EditPDF };
