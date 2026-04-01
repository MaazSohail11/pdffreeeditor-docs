// pages/contact/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Mail, MessageCircle, FileQuestion, Shield } from "lucide-react";
import SiteNav from "/src/components/SiteNav.jsx";

function Contact() {
  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 text-gray-900 min-h-screen flex flex-col">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      <main className="flex-1">
        <section className="border-b bg-white/70 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-2">
              Contact TechRex
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Contact TechRex Free PDF Editor
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
              Have a question about our free PDF tools, found a bug, or need help
              with a specific file? We&rsquo;re happy to hear from you.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Email cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* General contact */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h2 className="text-lg font-semibold">
                      General &amp; business inquiries
                    </h2>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    For feedback, partnerships, press, or any non-support questions
                    about TechRex Free PDF Editor:
                  </p>
                  <a
                    href="mailto:contact@pdffreeeditor.com"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 hover:underline break-all"
                  >
                    contact@pdffreeeditor.com
                  </a>
                  <p className="mt-3 text-xs text-gray-500">
                    Please include as much context as possible (link to the page,
                    browser/device, and what you were trying to do).
                  </p>
                </div>

                {/* Support */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h2 className="text-lg font-semibold">
                      Help &amp; technical support
                    </h2>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Stuck on a conversion, seeing an error, or want to report a bug?
                    Our support team is available at:
                  </p>
                  <a
                    href="mailto:help@pdffreeeditor.com"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 hover:underline break-all"
                  >
                    help@pdffreeeditor.com
                  </a>
                  <ul className="mt-3 text-xs text-gray-500 list-disc pl-4 space-y-1">
                    <li>Attach the PDF or screenshot if possible.</li>
                    <li>Mention the tool you were using (e.g. “PDF to Word”).</li>
                    <li>Include your browser and device (e.g. Chrome on Windows).</li>
                  </ul>
                </div>
              </div>

              {/* Helpful links */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <FileQuestion className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-semibold">Before you email us</h2>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Many common questions are answered directly on our tool pages:
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>
                    Explore all tools on the{" "}
                    <a
                      href="/tools/"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Tools page
                    </a>{" "}
                    (merge, sign, convert, and more).
                  </li>
                  <li>
                    Each converter (like{" "}
                    <a
                      href="/pdf-to-word/"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      PDF to Word
                    </a>{" "}
                    or{" "}
                    <a
                      href="/merge-pdf/"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Merge PDF
                    </a>
                    ) includes a short &ldquo;How it works&rdquo; and FAQ section.
                  </li>
                  <li>
                    For legal and data questions, see our{" "}
                    <a
                      href="/privacy/"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/terms/"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Terms of Use
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>

            {/* Privacy / data sidebar */}
            <aside className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-50 text-slate-700">
                    <Shield className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-semibold">Privacy &amp; data</h2>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  TechRex Free PDF Editor is built to be fast, simple, and private.
                  For questions about how your files are handled:
                </p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>
                    <a
                      href="/privacy/"
                      className="hover:text-blue-700 hover:underline"
                    >
                      Read our Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms/"
                      className="hover:text-blue-700 hover:underline"
                    >
                      View Terms of Use
                    </a>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-gray-500">
                  If you email us about a privacy concern, avoid sending sensitive
                  personal information or documents unless absolutely necessary.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-dashed border-slate-200 p-4">
                <h3 className="text-sm font-semibold mb-1 text-gray-900">
                  Response time
                </h3>
                <p className="text-xs text-gray-600">
                  We aim to reply to most messages within{" "}
                  <span className="font-medium">24–48 hours</span>, excluding
                  weekends and major holidays. Thanks for your patience!
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Tools - Auto Injected */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Explore more PDF tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium">
              <a href="/compress-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">📉</span>
                <span>Compress PDF</span>
              </a>
              <a href="/pdf-to-word/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">📝</span>
                <span>PDF to Word</span>
              </a>
              <a href="/merge-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">➕</span>
                <span>Merge PDF</span>
              </a>
              <a href="/split-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">✂️</span>
                <span>Split PDF</span>
              </a>
              <a href="/edit-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">✏️</span>
                <span>Edit PDF</span>
              </a>
              <a href="/sign-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">✒️</span>
                <span>Sign PDF</span>
              </a>
              <a href="/ocr-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">🔍</span>
                <span>OCR PDF</span>
              </a>
              <a href="/pdf-to-image/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">🖼️</span>
                <span>PDF to Image</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default { Page: Contact };
