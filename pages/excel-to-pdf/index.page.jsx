// pages/excel-to-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
  Upload,
  CheckCircle,
  Table,
  BarChart3,
  Sparkles,
  ShieldCheck,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function ExcelToPDF() {
  const related = [
    { to: "/pdf-to-excel/", label: "PDF to Excel/CSV" },
    { to: "/word-to-pdf/", label: "Word to PDF" },
    { to: "/pptx-to-pdf/", label: "PPTX to PDF" },
    { to: "/image-to-pdf/", label: "Image to PDF" },
    { to: "/html-to-pdf/", label: "HTML to PDF" },
  ];

  const useCases = [
    "Send financial reports, balance sheets, and P&L as fixed-layout PDFs.",
    "Submit timesheets or attendance sheets to HR portals that only accept PDF uploads.",
    "Share dashboards and KPI tables with clients who don’t use Excel.",
    "Create print-ready invoices, quotes, and receipts from Excel.",
    "Archive CSV exports from tools as readable PDFs instead of raw text files.",
  ];

  const tips = [
    "Limit each sheet to the key columns you need before exporting to PDF.",
    "Use clear headings and bold totals so they stand out on the PDF.",
    "Check print area and page breaks in Excel when possible to avoid clipped columns.",
    "Prefer portrait or landscape orientation based on the number of columns.",
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
            {/* LEFT: headline & value prop */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                Excel &amp; CSV to PDF Converter — Free Online
              </h1>
              <p className="text-lg text-on-surface mb-3">
                Convert <strong>Excel spreadsheets (XLS, XLSX)</strong> and{" "}
                <strong>CSV files</strong> to clean, shareable PDFs in seconds. No login, no
                watermark, and no limits.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                Ideal for <strong>reports, invoices, statements, timesheets,</strong> and{" "}
                <strong>data exports</strong> that must look the same on every device.
              </p>

              <div className="mt-4 flex flex-col gap-2 md:items-start items-center text-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary-600" />
                  100% free — no signup, no watermark, no usage caps
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Private by design — conversion runs in your browser where possible
                </span>
                <span className="inline-flex items-center gap-2">
                  <MonitorSmartphone className="h-4 w-4 text-primary-600" />
                  Works on Windows, Mac, Linux, iPhone, iPad, and Android
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 md:items-start items-center">
                <a
                  href="#excel-to-pdf-converter"
                  className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-8 py-3 rounded-full inline-flex items-center gap-2 font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)]"
                >
                  <Upload className="h-5 w-5" />
                  <span>Choose Excel / CSV — Convert to PDF</span>
                </a>
                <a
                  href="/editor/"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline text-sm"
                >
                  <Table className="h-4 w-4" />
                  <span>Open full PDF editor (annotate or merge after converting)</span>
                </a>
              </div>
            </div>

            {/* RIGHT: converter panel */}
            <aside id="excel-to-pdf-converter">
              <ConverterPanel
                defaultFormat="pdf"
                formatOptions={[{ value: "pdf", label: "PDF (.pdf)" }]}
                showEditInstead={false}
              />
              <p className="mt-3 text-xs text-outline text-center">
                Upload Excel (XLS/XLSX) or CSV files and download a ready-to-share PDF instantly.
              </p>
            </aside>
          </div>
        </section>

        {/* WHY CONVERT EXCEL/CSV TO PDF */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why convert Excel or CSV to PDF?
          </h2>
          <p className="text-on-surface-variant mb-4">
            Excel and CSV are perfect for editing and analysis, but not everyone has spreadsheet
            software installed — and layouts can break when viewed on different devices. Converting
            to <strong>PDF</strong> gives you a fixed, read-only version that looks the same
            everywhere.
          </p>

          <ul className="space-y-3 text-on-surface">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Share tables with perfect layout.</strong> Ensure columns, headers, and
                totals display consistently on any device or PDF viewer.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Meet upload requirements.</strong> Many job portals, client systems, and
                government forms accept only PDF uploads, not XLSX or CSV files.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Protect formulas and structure.</strong> When you export to PDF, recipients
                see the final result but can’t accidentally break formulas or delete rows.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Print-ready in one click.</strong> A PDF version of your spreadsheet is
                easier to print, archive, and attach to emails or chat messages.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Free and private.</strong> This <em>Excel to PDF converter</em> is free
                forever, with no signup and conversion running in your browser where possible.
              </span>
            </li>
          </ul>
        </section>

        {/* USE CASES */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Popular ways to use the Excel/CSV to PDF converter
          </h2>
          <p className="text-on-surface-variant mb-4">
            People use this tool daily to convert spreadsheets into <strong>clean, professional
            PDFs</strong> for all kinds of workflows:
          </p>
          <ul className="list-disc pl-5 text-on-surface-variant space-y-2">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* HOW-TO STEP-BY-STEP */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            How to convert XLS, XLSX, or CSV to PDF (step-by-step)
          </h2>
          <p className="text-on-surface-variant mb-3">
            You don’t need Excel installed to use this online converter. Just follow these steps:
          </p>
          <ol className="list-decimal pl-5 text-on-surface-variant space-y-2">
            <li id="step-upload">
              Open the{" "}
              <a href="#excel-to-pdf-converter" className="text-primary-600 hover:underline">
                Excel/CSV to PDF converter
              </a>{" "}
              and upload your spreadsheet (XLS, XLSX) or CSV file.
            </li>
            <li id="step-review">
              Review page breaks, column widths, and orientation. Make sure your key columns and
              totals are visible on each page.
            </li>
            <li id="step-download">
              Click <strong>Convert &amp; Download</strong> to export as PDF. Your file downloads
              instantly — no watermark, no email required.
            </li>
            <li>
              Need to add notes or combine with other documents? Open the PDF in the{" "}
              <a href="/editor/" className="text-primary-600 hover:underline">
                Free PDF Editor
              </a>{" "}
              to annotate, merge, or rearrange pages.
            </li>
          </ol>
        </section>

        {/* TIPS FOR CLEAN TABLE PDF */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Tips for clean, printable tables in your PDF
          </h2>
          <p className="text-on-surface-variant mb-4">
            Converting a spreadsheet to PDF is straightforward, but a few small tweaks can make
            your exported PDF much easier to read:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-2">
                <Table className="h-5 w-5 text-primary-600" />
                Format the sheet before export
              </h3>
              <ul className="list-disc pl-5 text-on-surface-variant space-y-1">
                {tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-2">
                <BarChart3 className="h-5 w-5 text-primary-600" />
                Make data easier to understand
              </h3>
              <ul className="list-disc pl-5 text-on-surface-variant space-y-1">
                <li>Add descriptive headers and freeze the top row before export.</li>
                <li>Use number formatting for currency, percentages, and dates.</li>
                <li>Highlight key rows (like totals) with bold text or a subtle background.</li>
                <li>Remove unused columns so the PDF focuses on what matters.</li>
              </ul>
            </div>
          </div>
          <p className="text-on-surface-variant mt-4">
            After converting, quickly scroll through the PDF to confirm everything looks right. If
            you see a clipped column or awkward break, adjust the spreadsheet and run the export
            again — it only takes a moment.
          </p>
        </section>

        {/* RELATED CONVERTERS */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold mb-3">Other free document converters</h2>
          <p className="text-on-surface-variant mb-4 text-sm">
            Need to move data the other way or convert different formats? These tools are also
            available:
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

        {/* FAQ */}
        <section id="faq" className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Excel/CSV to PDF Converter — Frequently Asked Questions
          </h2>
          <div className="space-y-3 text-sm">
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is the Excel/CSV to PDF converter really free?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes — the <strong>Excel to PDF converter</strong> is 100% free. There is no
                login, no trial period, and no watermark added to your tables, invoices, or
                reports.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                What formats do you support (XLS, XLSX, CSV)?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                You can upload <strong>XLS</strong>, <strong>XLSX</strong>, and{" "}
                <strong>CSV</strong> files. All of them can be converted to standard PDF files
                that open on any device.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Will my sheet layout and page breaks be preserved?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                The converter aims to keep your <strong>columns, headers, and page breaks</strong>{" "}
                as close as possible to what you see when printing. For best results, review your
                sheet’s print area and orientation before exporting and then check the PDF preview.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is it safe to convert spreadsheets with sensitive data?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Where possible, conversion runs locally in your browser so files stay on your
                device. For any necessary network requests, data is transmitted over encrypted
                connections (TLS). That said, you should always follow your organization’s data
                policies when handling sensitive information.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Does the Excel/CSV to PDF converter work on Mac, Windows, and mobile?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. You can use it on <strong>Windows, macOS, Linux, iPhone, iPad, and
                Android</strong>. Just open the tool in a modern browser like Chrome, Safari,
                Edge, or Firefox.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Can I edit the PDF after converting my spreadsheet?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. After converting your Excel or CSV file to PDF, you can open it in the{" "}
                <a href="/editor/" className="text-primary-600 hover:underline">
                  Free PDF Editor
                </a>{" "}
                to annotate, sign, merge, or rearrange pages before sending it out.
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

export default { Page: ExcelToPDF };
