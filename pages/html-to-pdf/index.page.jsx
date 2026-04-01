// pages/html-to-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
  FileText,
  Upload,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowRight,
} from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function HTMLToPDF() {
  const related = [
    { to: "/pdf-to-html/", label: "PDF to HTML" },
    { to: "/word-to-pdf/", label: "Word to PDF" },
    { to: "/pptx-to-pdf/", label: "PPTX to PDF" },
    { to: "/excel-to-pdf/", label: "Excel/CSV to PDF" },
    { to: "/image-to-pdf/", label: "Image to PDF" },
  ];

  const useCases = [
    "Save documentation or help pages as PDFs for offline reference.",
    "Archive blog posts, articles, and tutorials as clean, printable PDFs.",
    "Capture invoices, order confirmations, and receipts from web apps.",
    "Generate PDFs from HTML templates for quotes, reports, or contracts.",
    "Turn dashboards or internal tools into static PDFs to share with stakeholders.",
  ];

  return (
    <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
      <SiteNav />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
            {/* LEFT: main pitch */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                HTML to PDF Converter — Free Online
              </h1>
              <p className="text-lg text-gray-800 mb-3">
                Convert <strong>HTML files, web pages, and snippets</strong> to PDF in seconds.
                Clean, static, and ready to share — <strong>no login</strong>, <strong>no watermark</strong>.
              </p>
              <p className="text-sm text-gray-600">
                Great for saving <strong>documentation, invoices, blog posts, and app screens</strong> as
                high-quality PDFs that look the same on every device.
              </p>

              <div className="mt-4 flex flex-col gap-2 md:items-start items-center text-sm text-gray-700">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  100% free — no signup, no email, no hidden limits
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Private by design — processing runs in your browser where possible
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-indigo-600" />
                  Works on Chrome, Edge, Firefox, and Safari on desktop & mobile
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 md:items-start items-center">
                <a
                  href="#html-to-pdf-converter"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-xl inline-flex items-center gap-2 font-semibold shadow-lg"
                >
                  <Upload className="h-5 w-5" />
                  <span>Convert HTML to PDF</span>
                </a>
                <a
                  href="/editor/"
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline text-sm"
                >
                  <FileText className="h-4 w-4" />
                  <span>Open full PDF editor (edit, sign, merge, and more)</span>
                </a>
              </div>
            </div>

            {/* RIGHT: converter panel */}
            <aside id="html-to-pdf-converter">
              <ConverterPanel
                defaultFormat="pdf"
                formatOptions={[{ value: "pdf", label: "PDF (.pdf)" }]}
                showEditInstead={false}
              />
              <p className="mt-3 text-xs text-gray-500 text-center">
                Paste or upload HTML (where supported) and download a neat PDF with one click.
              </p>
            </aside>
          </div>
        </section>

        {/* WHY HTML → PDF */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why convert HTML or web pages to PDF?
          </h2>
          <p className="text-gray-700 mb-4">
            HTML is perfect for live, interactive content — but it’s not ideal when you need
            something printable, static, and easy to attach to an email or upload to a portal. A{" "}
            <strong>PDF</strong> keeps your layout and text readable on every device, with no
            missing styles or broken scripts.
          </p>

          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Make web content printable.</strong> Convert long articles, blogs, or
                documentation pages into PDFs that are easy to print, highlight, and share.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Freeze dynamic pages.</strong> Turn dashboards, order confirmations, or
                online forms into static PDF snapshots for records and compliance.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Standardize sharing.</strong> PDF is accepted almost everywhere — job
                portals, government forms, school systems, and client portals.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Developer-friendly output.</strong> Use HTML templates to generate invoices,
                reports, or statements, then export as PDF for your users or team.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Free & private.</strong> The HTML to PDF converter is free forever, with no
                watermarks or logins, and processing stays in your browser where possible.
              </span>
            </li>
          </ul>
        </section>

        {/* USE CASES */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            HTML to PDF converter: common use cases
          </h2>
          <p className="text-gray-700 mb-3">
            This tool is used by students, freelancers, and teams to turn live web content into
            portable PDFs:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* HOW-TO SECTION */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            How to convert HTML to PDF (step-by-step)
          </h2>
          <p className="text-gray-700 mb-3">
            You can convert HTML or web pages to PDF directly in your browser — no extensions or
            desktop apps required:
          </p>
          <ol className="list-decimal pl-5 text-gray-700 space-y-2">
            <li id="step-open">
              Open the{" "}
              <a href="#html-to-pdf-converter" className="text-blue-600 hover:underline">
                HTML to PDF converter
              </a>{" "}
              in your browser.
            </li>
            <li id="step-add">
              Add your HTML content:
              <span className="block ml-4">
                – Paste or import HTML (where supported), or export via your existing workflow.
              </span>
              <span className="block ml-4">
                – Preview the output to make sure headings, paragraphs, and tables look correct.
              </span>
            </li>
            <li id="step-export">
              Click <strong>Convert &amp; Download</strong> or export as PDF. Your file downloads
              instantly with <strong>no watermark</strong>.
            </li>
            <li>
              Need more changes? Open the exported file in the{" "}
              <a href="/editor/" className="text-blue-600 hover:underline">
                Free PDF Editor
              </a>{" "}
              to add text, images, signatures, or combine with other PDFs.
            </li>
          </ol>
        </section>

        {/* BEST PRACTICES / TIPS */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Tips for better HTML to PDF results
          </h2>
          <p className="text-gray-700 mb-4">
            A few simple tweaks to your HTML and CSS can make your exported PDF look much more
            professional:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-sm">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" />
                Structure your content
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use semantic headings (H1 → H2 → H3) for clean sectioning.</li>
                <li>Keep line lengths reasonable for better readability on A4/Letter pages.</li>
                <li>Use lists for bullet points instead of manual dashes or spacing.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Upload className="h-4 w-4 text-blue-600" />
                Style for printing & PDF
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use web-safe fonts or embedded fonts where possible.</li>
                <li>Avoid overly bright backgrounds or heavy animations.</li>
                <li>
                  If needed, export the PDF and then{" "}
                  <a href="/compress-pdf/" className="text-blue-600 hover:underline">
                    compress the PDF
                  </a>{" "}
                  to meet upload size limits.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* RELATED CONVERTERS */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Other free online converters
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            Move between web, Office formats, and PDFs with these tools:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {related.map((r) => (
              <a
                key={r.to}
                href={r.to}
                className="border rounded-lg p-3 hover:shadow transition flex items-center justify-between text-blue-600 text-sm"
              >
                <span>{r.label}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            HTML to PDF Converter — Frequently Asked Questions
          </h2>
          <div className="space-y-3 text-sm">
            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is the HTML to PDF converter really free?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes — this <strong>HTML to PDF converter</strong> is free to use with no signup, no
                trial, and no watermark. Just open the tool, add your content, and download the PDF.
              </p>
            </details>

            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Does it support CSS styling and fonts?
              </summary>
              <p className="mt-2 text-gray-700">
                Basic CSS styling is preserved. In most cases, headings, paragraphs, lists, and
                simple layouts convert cleanly. Use the preview to confirm that fonts, colors, and
                spacing look the way you expect before downloading.
              </p>
            </details>

            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Can I convert an entire webpage or just HTML snippets?
              </summary>
              <p className="mt-2 text-gray-700">
                You can convert HTML content from web pages, templates, or snippets. Depending on
                your workflow and tools, you may paste or import HTML and then export to PDF from
                there.
              </p>
            </details>

            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is my HTML content secure and private?
              </summary>
              <p className="mt-2 text-gray-700">
                Where possible, processing runs locally in your browser so your content stays on
                your device. For any required network calls, traffic is encrypted with HTTPS/TLS.
                You should still follow your company or organization’s policies for sensitive data.
              </p>
            </details>

            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Can I edit the PDF after converting from HTML?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes. After creating the PDF, open it in the{" "}
                <a href="/editor/" className="text-blue-600 hover:underline">
                  Free PDF Editor
                </a>{" "}
                to add text, images, annotations, signatures, or to merge it with other PDF
                documents.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
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

export default { Page: HTMLToPDF };
