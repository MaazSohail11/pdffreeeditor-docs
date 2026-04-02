// pages/pdf-to-pptx/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Layers, Upload, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function PDFToPPTX() {
  const related = [
    { to: "/pptx-to-pdf/", label: "PPTX to PDF" },
    { to: "/pdf-to-word/", label: "PDF to Word" },
    { to: "/pdf-to-excel/", label: "PDF to Excel/CSV" },
    { to: "/pdf-to-image/", label: "PDF to Image" },
    { to: "/pdf-to-html/", label: "PDF to HTML" },
  ];

  return (
    <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="digital-obsidian text-on-surface py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            {/* Left: main copy */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                PDF to PPTX Converter Online (Free)
              </h1>
              <p className="text-lg md:text-xl text-on-surface mb-3">
                Convert PDF to PowerPoint in seconds. Turn static PDF pages into{" "}
                <strong>editable PPTX slides</strong> you can present, edit, and reuse — no signup,
                no email, and no watermark.
              </p>

              <ul className="mt-4 space-y-2 text-sm md:text-base text-on-surface-variant">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Convert PDF to PPTX for PowerPoint, Keynote, or Google Slides.</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Preserve slide order and layout where possible.</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Works on Windows, Mac, iPhone, and Android.</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 md:items-start items-center">
                <a
                  href="/editor/"
                  className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-8 py-3 rounded-full inline-flex items-center gap-2 font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)]"
                >
                  <Upload className="h-5 w-5" />
                  <span>Convert PDF to PowerPoint — Free</span>
                </a>
                <p className="text-xs text-on-surface-variant flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary-600" />
                  <span>Private by default — processing runs in your browser where possible.</span>
                </p>
              </div>
            </div>

            {/* Right: converter panel */}
            <aside
              className="w-full"
              aria-label="PDF to PPTX converter dropzone"
            >
              <ConverterPanel
                defaultFormat="pptx"
                formatOptions={[{ value: "pptx", label: "PowerPoint (.pptx)" }]}
                showEditInstead={false}
              />
              <p className="mt-3 text-xs text-on-surface-variant text-center md:text-left">
                Upload a PDF above to convert it to PPTX. Need to tweak content inside the PDF
                first? Try{" "}
                <a href="/edit-pdf/" className="text-primary-600 hover:underline">
                  Edit PDF
                </a>{" "}
                before exporting to slides.
              </p>
            </aside>
          </div>
        </section>

        {/* Why convert PDF to PPTX with PDF Free Editor? */}
        <section className="max-w-5xl mx-auto px-6 py-10 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why convert PDF to PPTX with PDF Free Editor?
          </h2>
          <p className="text-on-surface-variant mb-4">
            The PDF to PPTX converter from <strong>PDF Free Editor</strong> is built for real-world
            presentations: training decks, sales pitch slides, webinars, school projects, and more.
            It lets you reuse existing PDFs as editable PowerPoint slides instead of rebuilding
            everything from scratch.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-primary-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-on-surface font-headline">
                    Convert PDF pages directly into slide decks
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    Every page in your PDF becomes a slide in your PPTX. This makes it easy to take
                    reports, whitepapers, and brochures and turn them into shareable presentation
                    decks for meetings or classes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-on-surface font-headline">
                    Free forever — no signup, no watermark
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    There’s no registration wall, no free trial trap, and no watermark stamped on
                    your slides. Just upload your PDF, convert to PPTX, and download — ready to
                    present.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-on-surface font-headline">
                    Fast PDF to PowerPoint conversion
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    The converter is optimized for everyday PDFs so you can go from document to
                    slides in seconds. Great for last-minute decks when you only have a PDF version
                    on hand.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-on-surface font-headline">
                    Privacy-first PDF to PPTX converter
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    The tool is designed to use <strong>client-side processing where possible</strong>,
                    so your PDFs stay on your device by default. That’s ideal for confidential
                    presentations, internal training decks, and sensitive documents.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-on-surface font-headline">
                    Works with PowerPoint, Keynote, and Google Slides
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    The exported PPTX files open in Microsoft PowerPoint, Apple Keynote, and Google
                    Slides, so you can edit and present on whichever platform you prefer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-on-surface font-headline">
                    Edit or rearrange slides after conversion
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    Once you convert PDF to PowerPoint, you’re free to rearrange slides, add notes,
                    change fonts, and insert animations — just like any other PPTX deck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How-to section with anchors used by schema */}
        <section className="max-w-4xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How to convert PDF to PPTX</h2>
          <p className="text-on-surface-variant mb-3">
            Follow these simple steps to turn a PDF into an editable PowerPoint (.pptx) presentation:
          </p>
          <ol className="list-decimal pl-5 text-on-surface-variant space-y-3">
            <li id="step-upload">
              <strong>Upload your PDF.</strong> Open the{" "}
              <a href="/editor/" className="text-primary-600 underline">
                Free PDF Editor
              </a>{" "}
              and drag &amp; drop your PDF, or click to browse your files.
            </li>
            <li id="step-review">
              <strong>Review the slide order and content.</strong> Each PDF page becomes a slide.
              Make sure the sequence and content look right before exporting. If needed, adjust or
              edit in the editor.
            </li>
            <li id="step-download">
              <strong>Export as PPTX and download.</strong> Choose{" "}
              <span className="font-semibold">PowerPoint (.pptx)</span> as the output format and
              click convert. Your PPTX downloads instantly, ready to open in PowerPoint or Google
              Slides.
            </li>
          </ol>

          <p className="mt-4 text-sm text-on-surface-variant">
            Tip: For long reports or multi-page PDFs, consider using{" "}
            <a href="/split-pdf/" className="text-primary-600 hover:underline">
              Split PDF
            </a>{" "}
            to break content into smaller decks before converting to PPTX.
          </p>
        </section>

        {/* Use cases */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            When to use a PDF to PowerPoint converter
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-on-surface-variant">
            <div className="bg-[#091328]/50 rounded-xl p-4">
              <h3 className="font-semibold mb-1 text-on-surface font-headline">Training &amp; onboarding</h3>
              <p className="text-sm">
                Turn static training PDFs into interactive decks. Add speaker notes, quizzes, and
                animations in PowerPoint after conversion.
              </p>
            </div>
            <div className="bg-[#091328]/50 rounded-xl p-4">
              <h3 className="font-semibold mb-1 text-on-surface font-headline">Sales &amp; client pitches</h3>
              <p className="text-sm">
                Convert product PDFs or case studies into presentable slides you can customize for
                each client meeting.
              </p>
            </div>
            <div className="bg-[#091328]/50 rounded-xl p-4">
              <h3 className="font-semibold mb-1 text-on-surface font-headline">Classroom &amp; academic use</h3>
              <p className="text-sm">
                Turn lecture notes or PDF articles into slide decks for lessons, seminars, or
                student presentations.
              </p>
            </div>
          </div>
        </section>

        {/* Related converters */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold mb-3">Related PDF converters</h2>
          <p className="text-on-surface-variant mb-3 text-sm">
            Need a different conversion direction? These tools work alongside PDF to PPTX:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <a
                key={r.to}
                href={r.to}
                className="border rounded-lg p-3 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition text-primary-700 text-sm font-medium"
              >
                {r.label}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            PDF to PPTX: Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is the PDF to PPTX converter really free?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. The PDF to PowerPoint converter is <strong>100% free</strong> with no signup,
                no email capture, and no watermark on your slides. Convert as many PDFs as your
                device can handle.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Will the slides be editable in PowerPoint?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. The tool exports to <strong>.pptx</strong>, so you can open the file in
                PowerPoint, Keynote, or Google Slides, then edit text, rearrange slides, insert
                images, and add animations as usual.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Does the converter preserve layout and design?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                The converter aims to preserve page order and general layout. Simple, slide-like
                PDFs usually convert very cleanly. Complex multi-column layouts or heavy design
                elements may need a quick manual polish after conversion.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is it safe to convert PDFs to PPTX online?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. Where possible, conversion runs locally in your browser so PDFs stay on your
                device. Still, avoid converting highly sensitive documents on shared or public
                computers.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Can I go from PPTX back to PDF?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Absolutely. Use the{" "}
                <a href="/pptx-to-pdf/" className="text-primary-600 hover:underline">
                  PPTX to PDF converter
                </a>{" "}
                to turn your PowerPoint slides back into a PDF for sharing, printing, or archiving.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          Ac {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.
        </p>
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

export default { Page: PDFToPPTX };
