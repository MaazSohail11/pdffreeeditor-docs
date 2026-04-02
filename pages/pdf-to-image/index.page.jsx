// pages/pdf-to-image/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Image as ImageIcon, Upload, CheckCircle, Menu } from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function PDFToImage() {
  const related = [
    { to: "/image-to-pdf/", label: "Image to PDF" },
    { to: "/pdf-to-word/", label: "PDF to Word" },
    { to: "/pdf-to-pptx/", label: "PDF to PPTX" },
    { to: "/pdf-to-excel/", label: "PDF to Excel/CSV" },
    { to: "/pdf-to-html/", label: "PDF to HTML" },
  ];

  return (
    <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      <main className="flex-1">
        <section className="digital-obsidian text-on-surface py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">PDF to Image — Free</h1>
              <p className="text-lg text-on-surface-variant">Export PDF pages as JPG/PNG in seconds. No login. No watermark.</p>
              <div className="mt-6 flex flex-col gap-3 md:items-start items-center">
                <a href="/editor/" className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-8 py-3 rounded-full inline-flex items-center gap-2 font-semibold">
                  <Upload className="h-5 w-5" />
                  <span>Open Editor to Convert</span>
                </a>
              </div>
            </div>
            <aside>
              <ConverterPanel
                defaultFormat="png"
                formatOptions={[
                  { value: "png", label: "PNG (.png)" },
                  { value: "jpg", label: "JPG (.jpg)" }
                ]}
                showEditInstead={false}
              />
            </aside>
          </div>
        </section>


        <section className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-3">Why convert PDF to images?</h2>
          <ul className="space-y-2 text-on-surface-variant">
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> Share slides and pages on socials or embeds.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> Free & private—no signup or watermark.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> Instant download on any device.</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-10">
          <h2 className="text-2xl font-bold mb-3">How to convert PDF to JPG/PNG</h2>
          <ol className="list-decimal pl-5 text-on-surface-variant space-y-1">
            <li id="step-upload">Open the <a href="/editor/" className="text-primary-600 underline">Free PDF Editor</a> and upload your PDF.</li>
            <li id="step-choose">Choose JPG or PNG output.</li>
            <li id="step-download">Export and download images instantly.</li>
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
              <summary className="font-semibold cursor-pointer">Is the PDF to Image converter free?</summary>
              <p className="mt-2 text-on-surface-variant">Yes—free forever, no login, and no watermark.</p>
            </details>
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">Which formats can I export?</summary>
              <p className="mt-2 text-on-surface-variant">Export to JPG or PNG, great for sharing on social or embedding on web pages.</p>
            </details>
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">Is it secure?</summary>
              <p className="mt-2 text-on-surface-variant">Processing runs in your browser where possible for privacy.</p>
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

export default { Page: PDFToImage };

