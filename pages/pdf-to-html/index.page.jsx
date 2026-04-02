// pages/pdf-to-html/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Upload, CheckCircle, Menu } from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function PDFToHTML() {
  const related = [
    { to: "/html-to-pdf/", label: "HTML to PDF" },
    { to: "/pdf-to-word/", label: "PDF to Word" },
    { to: "/pdf-to-pptx/", label: "PDF to PPTX" },
    { to: "/pdf-to-excel/", label: "PDF to Excel/CSV" },
    { to: "/pdf-to-image/", label: "PDF to Image" },
  ];

  return (
    <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      <main className="flex-1">
        <section className="digital-obsidian text-on-surface py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">PDF to HTML — Free</h1>
            <p className="text-lg text-on-surface-variant">Turn PDFs into web-friendly HTML in seconds. No login. No watermark.</p>
            <div className="mt-6">
              <a href="/editor/" className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-8 py-3 rounded-full inline-flex items-center gap-2 font-semibold">
                <Upload className="h-5 w-5" />
                <span>Open Editor to Convert</span>
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-10">
          <ConverterPanel
            defaultFormat="html"
            formatOptions={[{ value: "html", label: "HTML (.html)" }]}
            showEditInstead={false}
          />
        </section>


        <section className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-3">Why convert PDF to HTML?</h2>
          <ul className="space-y-2 text-on-surface-variant">
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> Reuse content on blogs, docs, or product pages.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> 100% free & private—no signup.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> Instant download. No watermark.</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-10">
          <h2 className="text-2xl font-bold mb-3">How to convert PDF to HTML</h2>
          <ol className="list-decimal pl-5 text-on-surface-variant space-y-1">
            <li id="step-upload">Open the <a href="/editor/" className="text-primary-600 underline">Free PDF Editor</a> and upload your PDF.</li>
            <li id="step-review">Check the text and image extraction.</li>
            <li id="step-download">Export as HTML and download instantly.</li>
          </ol>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-14">
          <h3 className="text-xl font-semibold mb-3">Related converters</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <a key={r.to} href={r.to} className="border rounded-lg p-3 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition text-primary-600">{r.label}</a>
            ))}
          </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">Is the PDF to HTML converter free?</summary>
              <p className="mt-2 text-on-surface-variant">Yes—free forever, no login, and no watermark.</p>
            </details>
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">Is the HTML reusable?</summary>
              <p className="mt-2 text-on-surface-variant">We aim for readable, reusable HTML. You can paste it into your site or blog.</p>
            </details>
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">Is it secure?</summary>
              <p className="mt-2 text-on-surface-variant">Processing runs in your browser where possible, keeping files on your device.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>Ac {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/tools/" className="hover:text-on-primary">Tools</a>
          <a href="/privacy/" className="hover:text-on-primary">Privacy</a>
          <a href="/terms/" className="hover:text-on-primary">Terms</a>
          <a href="/contact/" className="hover:text-on-primary">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default { Page: PDFToHTML };

