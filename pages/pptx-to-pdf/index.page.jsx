// pages/pptx-to-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
  Layers,
  Upload,
  CheckCircle,
  ShieldCheck,
  MonitorSmartphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function PPTXToPDF() {
  const related = [
    { to: "/pdf-to-pptx/", label: "PDF to PPTX" },
    { to: "/word-to-pdf/", label: "Word to PDF" },
    { to: "/excel-to-pdf/", label: "Excel/CSV to PDF" },
    { to: "/image-to-pdf/", label: "Image to PDF" },
    { to: "/html-to-pdf/", label: "HTML to PDF" },
  ];

  const useCases = [
    "Send a PowerPoint presentation as a read-only PDF so the layout doesn’t change.",
    "Upload pitch decks and slide decks to job portals or client portals that only accept PDFs.",
    "Share lecture slides or training presentations with students and teammates.",
    "Create print-ready handouts from PPT or PPTX files for meetings and conferences.",
    "Archive old PowerPoint presentations in a stable PDF format.",
  ];

  const tips = [
    "Use standard fonts in PowerPoint (e.g., Arial, Calibri, Times New Roman) to reduce font substitution.",
    "Keep text away from the extreme edges of slides to avoid cropping in PDF viewers and when printing.",
    "Check that images and logos are high-resolution in your PPTX for crisp PDFs.",
    "Avoid overly complex animations; they won’t carry over to PDF, which is static by design.",
  ];

  return (
    <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
      <SiteNav />

      <main className="flex-1">
        {/* HERO */}
        <section className="digital-obsidian text-on-surface py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT: copy */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                PPTX to PDF Converter — Free PowerPoint to PDF Online
              </h1>
              <p className="text-lg text-on-surface mb-3">
                Convert <strong>PowerPoint presentations (PPT &amp; PPTX)</strong> to PDF online
                in seconds. No signup, no watermark, no installs — just upload and download.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                Perfect for <strong>pitch decks</strong>, <strong>lectures</strong>,{" "}
                <strong>marketing presentations</strong>, and <strong>training slides</strong>
                that must look the same on every device.
              </p>

              <div className="mt-4 flex flex-col gap-2 md:items-start items-center text-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary-600" />
                  100% free — no login, no watermark, unlimited PPTX to PDF conversions
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Private by design — processing in your browser where possible
                </span>
                <span className="inline-flex items-center gap-2">
                  <MonitorSmartphone className="h-4 w-4 text-primary-600" />
                  Works on Windows, Mac, Linux, iPhone, and Android
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 md:items-start items-center">
                <a
                  href="#pptx-to-pdf-converter"
                  className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-8 py-3 rounded-full inline-flex items-center gap-2 font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)]"
                >
                  <Upload className="h-5 w-5" />
                  <span>Choose PPT / PPTX File — Convert to PDF</span>
                </a>
                <a
                  href="/editor/"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline"
                >
                  <Layers className="h-4 w-4" />
                  <span>Open full PDF editor (edit slides after converting)</span>
                </a>
              </div>
            </div>

            {/* RIGHT: converter widget */}
            <aside id="pptx-to-pdf-converter">
              <ConverterPanel
                defaultFormat="pdf"
                formatOptions={[{ value: "pdf", label: "PDF (.pdf)" }]}
                showEditInstead={false}
              />
              <p className="mt-3 text-xs text-outline text-center">
                Upload your PowerPoint presentation and download a shareable PDF instantly.
              </p>
            </aside>
          </div>
        </section>

        {/* WHY CONVERT PPTX → PDF WITH TECHREX */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why use this PPTX to PDF converter?
          </h2>
          <p className="text-on-surface-variant mb-4">
            Plenty of sites offer &ldquo;PowerPoint to PDF&rdquo; conversion, but many come with
            hidden limits, signups, or watermarks on your slides. This tool is built to keep your{" "}
            <strong>workflow fast, private, and frustration-free</strong>.
          </p>

          <ul className="space-y-3 text-on-surface">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Free forever — no signup.</strong> Convert PPT and PPTX to PDF without
                creating an account or entering an email address.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>No watermark on your slides.</strong> Your exported PDF is clean and
                professional — ideal for clients, colleagues, or professors.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Preserve slide order and layout.</strong> The converter respects your slide
                sequence so your story flows exactly as you designed it in PowerPoint.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Privacy-first architecture.</strong> Where possible, conversion runs
                directly in your browser so your PowerPoint files stay on your own device.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Works on any device.</strong> Use the PPTX to PDF converter on Windows,
                macOS, Linux, ChromeOS, iPhone, iPad, or Android — all you need is a modern
                browser.
              </span>
            </li>
          </ul>
        </section>

        {/* WHY CONVERT POWERPOINT TO PDF (USE CASES) */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            When should you convert PowerPoint to PDF?
          </h2>
          <p className="text-on-surface-variant mb-4">
            PDF is the safest format for <strong>sharing presentations</strong> when you don’t
            control what app, device, or screen size the viewer is using. Common reasons to use a{" "}
            <strong>PPTX to PDF converter</strong> include:
          </p>
          <ul className="list-disc pl-5 text-on-surface-variant space-y-2">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* HOW TO CONVERT PPTX → PDF */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            How to convert PPTX to PDF (step-by-step)
          </h2>
          <p className="text-on-surface-variant mb-3">
            You don’t need PowerPoint installed to use this online converter. Follow these simple
            steps:
          </p>
          <ol className="list-decimal pl-5 text-on-surface-variant space-y-2">
            <li id="step-upload">
              Click{" "}
              <a href="#pptx-to-pdf-converter" className="text-primary-600 hover:underline">
                Choose PPT / PPTX File
              </a>{" "}
              and upload your presentation.
            </li>
            <li id="step-review">
              The converter prepares your slides. Quickly review the pages to confirm the slide
              order and basic layout.
            </li>
            <li id="step-download">
              Click <strong>Convert &amp; Download</strong> to export your PowerPoint as a PDF
              file. The download starts instantly with no watermark.
            </li>
            <li>
              Need to tweak pages after converting? Open the{" "}
              <a href="/editor/" className="text-primary-600 hover:underline">
                Free PDF Editor
              </a>{" "}
              to add annotations, combine with other PDFs, or rearrange pages before sharing.
            </li>
          </ol>
        </section>

        {/* TIPS TO PRESERVE SLIDE LAYOUT */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Tips to keep your slide layout clean when exporting to PDF
          </h2>
          <p className="text-on-surface-variant mb-4">
            Converting <strong>PPT or PPTX to PDF</strong> is usually very accurate, but a few
            habits in PowerPoint can help your exported PDFs look even better:
          </p>
          <ul className="list-disc pl-5 text-on-surface-variant space-y-2">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
          <p className="text-on-surface-variant mt-3">
            After conversion, scroll through the PDF quickly to ensure charts, images, and
            bullet lists look right. If you spot something off, make a small edit in the original
            PPTX and run the conversion again — it only takes a few seconds.
          </p>
        </section>

        {/* RELATED CONVERTERS (INTERNAL LINKS, TRAILING SLASHES) */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold mb-3">Other free document converters</h2>
          <p className="text-on-surface-variant mb-4 text-sm">
            Need to go from PDF back to PowerPoint, or convert other formats like Word, Excel, or
            images? These tools can help:
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

        {/* FAQ FOR SNIPPETS & AI */}
        <section id="faq" className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            PPTX to PDF Converter — Frequently Asked Questions
          </h2>
          <div className="space-y-3 text-sm">
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is the PPTX to PDF converter really free?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes — the PowerPoint to PDF converter is <strong>100% free</strong>. There is no
                login, no trial, and no watermark added to your slides. Convert as many PPT and
                PPTX files as you like.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Do you support both PPT and PPTX files?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. You can upload older <strong>.ppt</strong> files and modern{" "}
                <strong>.pptx</strong> presentations. Both formats are converted to standard PDF
                that opens everywhere.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Will the PDF keep the same slide layout and design?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                The converter is designed to preserve your <strong>slide order, fonts, colors, and
                background images</strong> as closely as possible. Some animations and transitions
                cannot be represented in a static PDF, but the visual layout is kept.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is it safe to convert PowerPoint files online?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Where possible, PPTX to PDF conversion runs directly in your browser so files stay
                on your device. For any server-side tasks, files are sent over encrypted
                connections (TLS) and are not stored permanently. For extremely sensitive content,
                avoid uploading to any online service unless required.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Does the converter work on Mac, Windows, and mobile?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. You can use it on <strong>Windows, macOS, Linux, iOS, and Android</strong>.
                Just open the PPTX to PDF converter in a modern browser like Chrome, Safari, Edge,
                or Firefox.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Can I edit or merge the PDF after converting my slides?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. Once you convert your PowerPoint presentation to PDF, you can open it in the{" "}
                <a href="/editor/" className="text-primary-600 hover:underline">
                  Free PDF Editor
                </a>{" "}
                to add notes, merge with other PDFs, or rearrange pages before downloading again.
              </p>
            </details>
          </div>
        </section>
      </main>

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

export default { Page: PPTXToPDF };
