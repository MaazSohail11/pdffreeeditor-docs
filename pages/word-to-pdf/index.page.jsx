// pages/word-to-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
  FileText,
  Upload,
  CheckCircle,
  ShieldCheck,
  MonitorSmartphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function WordToPDF() {
  const related = [
    { to: "/pdf-to-word/", label: "PDF to Word" },
    { to: "/pptx-to-pdf/", label: "PPTX to PDF" },
    { to: "/excel-to-pdf/", label: "Excel/CSV to PDF" },
    { to: "/image-to-pdf/", label: "Image to PDF" },
    { to: "/html-to-pdf/", label: "HTML to PDF" },
  ];

  const useCases = [
    "Turn your resume or CV into a professional PDF before applying for jobs.",
    "Lock in the layout of proposals, reports, and client documents.",
    "Create print-ready PDFs from school assignments or theses.",
    "Send invoices, quotes, and contracts as PDFs that look the same everywhere.",
    "Share documentation, manuals, and ebooks in a stable format.",
  ];

  const tips = [
    "Use standard fonts (e.g., Arial, Times New Roman, Calibri) in Word to reduce font substitutions.",
    "Check page breaks and headings in Word before converting to get cleaner PDFs.",
    "Use high-resolution images in Word for clearer PDFs, especially if you plan to print.",
    "Avoid super-wide tables; break them into smaller tables so they fit nicely on PDF pages.",
  ];

  return (
    <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
      <SiteNav />

      <main className="flex-1">
        {/* HERO / PRIMARY INTENT */}
        <section className="digital-obsidian text-on-surface py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT: copy */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                Word to PDF Converter — Free DOC/DOCX to PDF Online
              </h1>
              <p className="text-lg text-on-surface mb-3">
                Convert <strong>Word documents (DOC &amp; DOCX) to PDF online</strong> in seconds.
                No signup, no watermark, and no complicated settings — just upload, convert, and download.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                Perfect for <strong>resumes (CVs)</strong>, <strong>cover letters</strong>,{" "}
                <strong>reports</strong>, <strong>assignments</strong>, and any document that
                needs to look professional on every device.
              </p>

              <div className="mt-4 flex flex-col gap-2 md:items-start items-center text-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary-600" />
                  100% free — no signup, no watermark, unlimited conversions
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Private by design — client-side processing where possible
                </span>
                <span className="inline-flex items-center gap-2">
                  <MonitorSmartphone className="h-4 w-4 text-primary-600" />
                  Works on Windows, Mac, Linux, iPhone, and Android
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 md:items-start items-center">
                <a
                  href="#word-to-pdf-converter"
                  className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-8 py-3 rounded-full inline-flex items-center gap-2 font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)]"
                >
                  <Upload className="h-5 w-5" />
                  <span>Choose Word File — Convert to PDF</span>
                </a>
                <a
                  href="/editor/"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline"
                >
                  <FileText className="h-4 w-4" />
                  <span>Open full PDF editor (edit after converting)</span>
                </a>
              </div>
            </div>

            {/* RIGHT: converter widget */}
            <aside id="word-to-pdf-converter">
              <ConverterPanel
                defaultFormat="pdf"
                formatOptions={[{ value: "pdf", label: "PDF (.pdf)" }]}
                showEditInstead={false}
              />
              <p className="mt-3 text-xs text-outline text-center">
                Upload a Word document and get a high-quality PDF download instantly.
              </p>
            </aside>
          </div>
        </section>

        {/* WHY USE THIS WORD → PDF CONVERTER */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why convert Word to PDF with TechRex?
          </h2>
          <p className="text-on-surface-variant mb-4">
            There are many “Word to PDF” tools online, but a lot of them hide limits behind
            signups, add watermarks to your documents, or upload your files to remote servers
            without making that clear. This converter is built to be{" "}
            <strong>simple, transparent, and privacy-first</strong>.
          </p>

          <ul className="space-y-3 text-on-surface">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>100% free — no login or trial.</strong> Convert as many DOC or DOCX files
                as you want. No account, no email, no credit card.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Clean, professional PDFs.</strong> Great for resumes, academic work,
                business proposals, and any document where layout matters.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Private &amp; secure.</strong> Conversion runs in your browser where
                possible, so your Word files stay on your device instead of being stored on
                someone else’s server.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>No watermarks, ever.</strong> The downloaded PDF is clean and ready to
                send, upload, or print without logos or stamps.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Works on desktop and mobile.</strong> Use it on Windows, macOS, Linux,
                ChromeOS, iPhone, or Android in any modern browser.
              </span>
            </li>
          </ul>
        </section>

        {/* HOW TO CONVERT WORD → PDF (STEP-BY-STEP) */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            How to convert DOC or DOCX to PDF (step-by-step)
          </h2>
          <p className="text-on-surface-variant mb-3">
            You don’t need to install Microsoft Word or any extra software. Use this{" "}
            <strong>online Word to PDF converter</strong> on any device:
          </p>
          <ol className="list-decimal pl-5 text-on-surface-variant space-y-2">
            <li id="step-upload">
              Click{" "}
              <a href="#word-to-pdf-converter" className="text-primary-600 hover:underline">
                Choose Word File
              </a>{" "}
              and upload your <strong>DOC</strong> or <strong>DOCX</strong> document.
            </li>
            <li id="step-review">
              The file is processed and displayed. Check that the pages look right (optional).
            </li>
            <li id="step-download">
              Click <strong>Convert &amp; Download</strong> to get your PDF instantly. No
              watermark, no signup.
            </li>
            <li>
              Need changes after converting? Open the{" "}
              <a href="/editor/" className="text-primary-600 hover:underline">
                Free PDF Editor
              </a>{" "}
              to edit, sign, or add images and then re-export.
            </li>
          </ol>
        </section>

        {/* USE CASES / SCENARIOS */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            When should you convert Word to PDF?
          </h2>
          <p className="text-on-surface-variant mb-4">
            PDF is the safest way to send a document when you want it to look the same for
            everyone — regardless of what device or software they use. Common situations where
            people use this Word to PDF converter include:
          </p>

          <ul className="list-disc pl-5 text-on-surface-variant space-y-2">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* TIPS TO PRESERVE FORMATTING */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            How to avoid formatting issues when converting Word to PDF
          </h2>
          <p className="text-on-surface-variant mb-4">
            Converting from DOC or DOCX to PDF is usually very accurate, but a few small tweaks
            inside Word can help your PDFs look even better:
          </p>

          <ul className="list-disc pl-5 text-on-surface-variant space-y-2">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          <p className="text-on-surface-variant mt-3">
            After converting, skim the PDF for one minute to confirm that headings, bullet lists,
            and images look correct. If something seems off, adjust the Word file and convert
            again — it only takes a few seconds.
          </p>
        </section>

        {/* RELATED CONVERTERS (INTERNAL LINKS WITH SLASHES) */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold mb-3">Other free document converters</h2>
          <p className="text-on-surface-variant mb-4 text-sm">
            Need to go the other way, or work with PowerPoint, Excel, or images? Try these
            tools:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {related.map((r) => (
              <a
                key={r.to}
                href={r.to}
                className="border rounded-lg p-3 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition flex items-center justify-between text-primary-700 text-sm"
              >
                <span>{r.label}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </section>

        {/* FAQ SECTION FOR SNIPPETS / AI */}
        <section id="faq" className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Word to PDF Converter — Frequently Asked Questions
          </h2>
          <div className="space-y-3 text-sm">
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is the Word to PDF converter really free?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes — it is <strong>100% free</strong> with no signup, no trial, and no
                watermark. You can convert as many DOC and DOCX files to PDF as your device can
                handle.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Do you support both DOC and DOCX formats?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. You can upload <strong>older DOC files</strong> and modern{" "}
                <strong>DOCX files</strong>. Both are converted to standard PDF that works
                everywhere.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Will my fonts and layout look the same in the PDF?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                The converter aims to preserve your <strong>fonts, spacing, page breaks</strong>,
                and overall layout. For best results, use common fonts in Word and double-check
                the PDF preview before sending important documents like resumes and contracts.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is it safe to convert Word files online?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Where possible, the conversion runs directly in your browser so your files stay
                on your device. For any server-side work, files are protected with TLS and not
                stored permanently. As with any online tool, avoid uploading highly sensitive
                information if it can be avoided.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Does this work on Mac, Windows, and mobile phones?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. You can use the Word to PDF converter on{" "}
                <strong>Windows, macOS, Linux, iPhone, iPad, and Android</strong> — just open it
                in a modern browser like Chrome, Safari, Edge, or Firefox.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Can I edit the PDF after converting from Word?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. After converting, you can open the file in the{" "}
                <a href="/editor/" className="text-primary-600 hover:underline">
                  Free PDF Editor
                </a>{" "}
                to edit text, add images, sign, or annotate before exporting again.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/tools/" className="hover:text-on-primary">
            Tools
          </a>
          <a href="/privacy/" className="hover:text-on-primary">
            Privacy
          </a>
          <a href="/terms/" className="hover:text-on-primary">
            Terms
          </a>
          <a href="/contact/" className="hover:text-on-primary">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default { Page: WordToPDF };
