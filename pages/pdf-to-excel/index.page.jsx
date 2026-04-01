// pages/pdf-to-excel/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Upload, CheckCircle, Menu } from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function PDFToExcel() {
  const related = [
    { to: "/excel-to-pdf/", label: "Excel/CSV to PDF" },
    { to: "/pdf-to-word/", label: "PDF to Word" },
    { to: "/pdf-to-pptx/", label: "PDF to PPTX" },
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
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">PDF to Excel/CSV — Free</h1>
              <p className="text-lg text-gray-700">Extract tables from PDF to XLSX or CSV in seconds. No login. No watermark.</p>
              <div className="mt-6 flex flex-col gap-3 md:items-start items-center">
                <a href="/editor/" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-xl inline-flex items-center gap-2 font-semibold">
                  <Upload className="h-5 w-5" />
                  <span>Open Editor to Convert</span>
                </a>
              </div>
            </div>
            <aside>
              <ConverterPanel
                defaultFormat="xlsx"
                formatOptions={[{ value: "xlsx", label: "Excel (.xlsx)" }]}
                showEditInstead={false}
              />
            </aside>
          </div>
        </section>


        <section className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-3">Why convert PDF to Excel/CSV?</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> Reuse data from invoices, reports, and tables.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> 100% free & private—no signup.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> Instant download. No watermark.</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-10">
          <h2 className="text-2xl font-bold mb-3">How to convert PDF to Excel/CSV</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1">
            <li id="step-upload">Open the <a href="/editor/" className="text-blue-600 underline">Free PDF Editor</a> and upload your PDF.</li>
            <li id="step-review">Review extracted tables and columns.</li>
            <li id="step-download">Export as XLSX or CSV and download.</li>
          </ol>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-14">
          <h3 className="text-xl font-semibold mb-3">Related converters</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <a key={r.to} href={r.to} className="border rounded-lg p-3 hover:shadow transition text-blue-600">{r.label}</a>
            ))}
          </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">Is the PDF to Excel/CSV converter free?</summary>
              <p className="mt-2 text-gray-700">Yes—free forever, no login, and no watermark.</p>
            </details>
            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">How accurate is the extraction?</summary>
              <p className="mt-2 text-gray-700">We aim for high accuracy. Review detected tables and adjust if needed before export.</p>
            </details>
            <details className="bg-white border rounded p-4">
              <summary className="font-semibold cursor-pointer">Is it secure?</summary>
              <p className="mt-2 text-gray-700">Processing runs in your browser where possible so your data stays private.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>Ac {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
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

export default { Page: PDFToExcel };

