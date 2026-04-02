// pages/convertor/index.page.jsx
import React, { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import "/src/styles/convertor.css";
import {
  Download,
  Sparkles,
  Wand2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import DocumentUploadGateway from "/src/components/DocumentUploadGateway.jsx";
import { stageFilesForEditor } from "/src/utils/editorHandoff.js";
import SiteNav from "/src/components/SiteNav.jsx";

const EXPORT_API_ENDPOINT = "https://adobe-proxy.maazsohail731.workers.dev";

function ConvertorPage() {
  const [pdfFile, setPdfFile] = useState(null);
  const [format, setFormat] = useState("pdf"); // pdf | docx | pptx | xlsx
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState("");

  const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  const handleExport = useCallback(async () => {
    try {
      setError("");
      if (!pdfFile) return;
      setIsExporting(true);

      const safeName = (pdfFile.name || "document.pdf").replace(
        /[^\w\-\.]+/g,
        "_"
      );

      if (format === "pdf") {
        // Just download the PDF we already prepared
        downloadBlob(pdfFile, safeName);
        return;
      }

      const formData = new FormData();
      formData.append("file", pdfFile, safeName);
      formData.append("target", format);

      const resp = await fetch(EXPORT_API_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (!resp.ok) {
        let message = `Export failed (${resp.status})`;
        try {
          const data = await resp.json();
          if (data?.error) message = data.error;
        } catch {}
        throw new Error(message);
      }

      const out = await resp.blob();
      const base = safeName.replace(/\.pdf$/i, "") || "converted";
      downloadBlob(out, `${base}.${format}`);
    } catch (e) {
      console.error("Convertor export error", e);
      setError(e?.message || "Conversion failed. Please try again.");
    } finally {
      setIsExporting(false);
    }
  }, [pdfFile, format]);

  const handleEditInstead = useCallback(async () => {
    try {
      if (!pdfFile) return;
      await stageFilesForEditor([pdfFile]);
      window.location.href = "/editor/workspace/"; // trailing slash
    } catch (e) {
      console.error("Failed to stage file for editor", e);
      setError("Could not open the editor. Please try again.");
    }
  }, [pdfFile]);

  return (
    <div className="convertor-page font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
      <SiteNav />

      {/* Main */}
      <main className="flex-1 font-ui">
        {/* HERO */}
        <section className="relative overflow-hidden digital-obsidian text-on-surface py-20">
          <div className="orb orb-blue w-[420px] h-[420px] -top-16 -left-24" />
          <div className="orb orb-indigo w-[460px] h-[460px] -bottom-24 -right-20" />

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start relative">
            {/* Left: Copy */}
            <div className="text-center md:text-left space-y-4">
              <h1 className="font-display gradient-title text-4xl md:text-6xl font-extrabold leading-tight">
                Online Document Converter
                <span className="block text-primary-700 mt-1 text-2xl md:text-3xl">
                  Convert to PDF, Word, PowerPoint, or Excel — Free
                </span>
              </h1>

              <p className="text-lg text-on-surface-variant">
                Upload{" "}
                <strong>
                  Word, Excel, PowerPoint, Images, or PDF files
                </strong>
                . We convert them to PDF first, then export to{" "}
                <strong>DOCX, PPTX, XLSX</strong> or keep as{" "}
                <strong>PDF</strong>. Designed to keep layout and fonts as much
                as possible — with no watermark and no signup.
              </p>

              <div className="mt-3 flex flex-col gap-1.5 md:items-start items-center text-sm text-on-surface">
                <div className="inline-flex items-center gap-2">
                  <Sparkles
                    className="h-4 w-4 text-primary-600"
                    aria-hidden="true"
                  />
                  <span>100% free — no account, no watermark, no trial.</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Wand2
                    className="h-4 w-4 text-primary-600"
                    aria-hidden="true"
                  />
                  <span>
                    Private by design — conversion via secure TLS; local
                    pre-processing in your browser where possible.
                  </span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-green-500"
                    aria-hidden="true"
                  />
                  <span>
                    Works on any device — Chrome, Safari, Edge on desktop or
                    mobile.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Tool */}
            <aside>
              <div id="step-upload" />
              <div
                className="glass-card p-5 md:p-6"
                aria-label="Document converter dropzone"
              >
                <DocumentUploadGateway
                  title="Drop a document to convert"
                  subtitle="Or click to choose a file. We’ll turn it into a high-quality PDF, then export to the format you choose."
                  onPdfReady={(pdf) => setPdfFile(pdf)}
                />
              </div>

              {/* Selection + actions */}
              <div
                id="step-select"
                className="mt-6 glass-card p-4 md:p-5 space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-end gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="format"
                      className="block text-sm font-medium text-on-surface-variant"
                    >
                      Choose output format
                    </label>
                    <select
                      id="format"
                      className="mt-1 w-full md:max-w-xs border rounded-md px-3 py-2 text-on-surface font-headline bg-[#091328]/50 backdrop-blur-xl border border-white/5/80"
                      value={format}
                      onChange={(e) => setFormat(e.target.value)}
                      disabled={!pdfFile || isExporting}
                    >
                      <option value="pdf">PDF (.pdf)</option>
                      <option value="docx">Word (.docx)</option>
                      <option value="pptx">PowerPoint (.pptx)</option>
                      <option value="xlsx">Excel (.xlsx)</option>
                    </select>
                    <p className="mt-1 text-xs text-outline">
                      {pdfFile
                        ? `Ready: ${pdfFile.name}`
                        : "Upload a document above to enable conversion."}
                    </p>
                  </div>

                  <div>
                    <button
                      id="step-download"
                      type="button"
                      onClick={handleExport}
                      disabled={!pdfFile || isExporting}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-on-primary shadow-[0_0_25px_rgba(139,92,246,0.2)] ${
                        !pdfFile || isExporting
                          ? "bg-emerald-600/60 cursor-not-allowed"
                          : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-[0_0_25px_rgba(139,92,246,0.2)]-emerald-500/25"
                      }`}
                    >
                      <Download
                        className={`h-4 w-4 ${
                          isExporting ? "animate-pulse" : ""
                        }`}
                        aria-hidden="true"
                      />
                      {isExporting ? "Converting..." : "Convert & Download"}
                    </button>
                  </div>
                </div>

                <div className="mt-1">
                  <button
                    type="button"
                    onClick={handleEditInstead}
                    disabled={!pdfFile || isExporting}
                    className="text-primary-600 hover:text-primary-700 disabled:text-gray-400 underline decoration-transparent hover:decoration-primary-300 text-sm"
                  >
                    …or edit this PDF instead
                  </button>
                </div>

                {error ? (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                ) : null}
              </div>
            </aside>
          </div>
        </section>

        {/* WHAT YOU CAN CONVERT */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Convert between popular formats
              </h2>
              <p className="text-on-surface-variant mb-4">
                This online document converter is built for the everyday jobs
                people actually search for:{" "}
                <strong>Word ⇄ PDF, PDF ⇄ Word, PDF ⇄ Excel, PDF ⇄ PowerPoint</strong>{" "}
                and <strong>image to PDF</strong>. You upload once, we handle
                the heavy lifting, and you download the file you need.
              </p>
              <p className="text-on-surface-variant mb-4">
                For best results, start from the highest-quality original file
                you have. If you want to edit text heavily after conversion,
                export to <strong>Word</strong> or <strong>Excel</strong>. If
                you only need a final shareable copy, convert to{" "}
                <strong>PDF</strong> and you’re done.
              </p>
              <ul className="mt-2 space-y-2 text-sm text-on-surface">
                {[
                  "Word to PDF converter — turn DOC/DOCX into shareable PDFs.",
                  "PDF to Word converter — make PDFs editable in Microsoft Word.",
                  "PowerPoint to PDF converter — export PPT/PPTX to compact PDFs.",
                  "Excel/CSV to PDF converter — create clean, printable tables.",
                  "Image to PDF converter — JPG/PNG photos into a single PDF.",
                  "PDF to Excel/PowerPoint — pull tables or slides out of a PDF.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2
                      className="h-4 w-4 text-green-500 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature / trust block */}
            <div className="border rounded-2xl p-6 bg-[#091328]/50 backdrop-blur-xl border border-white/5 shadow-[0_0_15px_rgba(139,92,246,0.1)] space-y-3">
              <h3 className="text-xl font-semibold mb-1">
                Why use this online document converter?
              </h3>
              <ul className="space-y-2 text-sm text-on-surface">
                <li>
                  <strong>No signup or watermark.</strong> You get clean output
                  files that you can share, print, and re-use.
                </li>
                <li>
                  <strong>Multi-format in one place.</strong> Convert Word,
                  Excel, PowerPoint, images, and PDFs without juggling multiple
                  tools.
                </li>
                <li>
                  <strong>Browser-based.</strong> Use it on Windows, Mac,
                  Linux, iPhone, or Android via your browser.
                </li>
                <li>
                  <strong>Fast turnaround.</strong> Small to mid-sized documents
                  typically convert in a few seconds, depending on your
                  connection.
                </li>
                <li>
                  <strong>Private by design.</strong> Files are processed only
                  for conversion via secure TLS; you don’t need an account.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* KEYWORD-TARGETED INTERNAL LINKS / HUB SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-12 bg-[#091328]/50 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Quick tools: Word ⇄ PDF, PDF ⇄ Word, Excel, PowerPoint & images
          </h2>
          <p className="text-on-surface-variant mb-6 max-w-3xl">
            Need a single, focused tool instead of the all-in-one document
            converter? Use these dedicated converters for the most common
            workflows. They target the same jobs people search for like{" "}
            <em>“Word to PDF converter online free”</em> or{" "}
            <em>“PDF to Word converter without watermark”</em>, but with a
            simpler UI.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/word-to-pdf/"
              className="group border rounded-xl p-5 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition bg-[#091328]/50 backdrop-blur-xl border border-white/5"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Word to PDF converter
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </h3>
              <p className="text-on-surface-variant text-sm mt-1">
                Convert DOC/DOCX to PDF online while keeping layout, fonts, and
                page breaks.
              </p>
            </a>

            <a
              href="/pdf-to-word/"
              className="group border rounded-xl p-5 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition bg-[#091328]/50 backdrop-blur-xl border border-white/5"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2">
                PDF to Word (DOCX)
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </h3>
              <p className="text-on-surface-variant text-sm mt-1">
                Export PDF to editable DOCX with no watermark — great for
                resumes, contracts, and reports.
              </p>
            </a>

            <a
              href="/pptx-to-pdf/"
              className="group border rounded-xl p-5 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition bg-[#091328]/50 backdrop-blur-xl border border-white/5"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2">
                PowerPoint to PDF
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </h3>
              <p className="text-on-surface-variant text-sm mt-1">
                Turn PPT/PPTX slides into PDF — perfect for sharing decks
                without breaking design.
              </p>
            </a>

            <a
              href="/excel-to-pdf/"
              className="group border rounded-xl p-5 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition bg-[#091328]/50 backdrop-blur-xl border border-white/5"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Excel / CSV to PDF
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </h3>
              <p className="text-on-surface-variant text-sm mt-1">
                Convert spreadsheets to PDFs with neat column widths and
                print-ready layout.
              </p>
            </a>

            <a
              href="/image-to-pdf/"
              className="group border rounded-xl p-5 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition bg-[#091328]/50 backdrop-blur-xl border border-white/5"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Image to PDF (JPG / PNG)
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </h3>
              <p className="text-on-surface-variant text-sm mt-1">
                Combine multiple photos into one PDF. Reorder images and keep
                high resolution.
              </p>
            </a>

            <a
              href="/pdf-to-excel/"
              className="group border rounded-xl p-5 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition bg-[#091328]/50 backdrop-blur-xl border border-white/5"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2">
                PDF to Excel (XLSX)
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </h3>
              <p className="text-on-surface-variant text-sm mt-1">
                Extract tables from PDF into Excel for analysis, sorting, and
                charts.
              </p>
            </a>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-on-surface-variant">
            {[
              "Online document converter for PDF, Word, Excel, PowerPoint, and images.",
              "Word to PDF converter — send professional documents in a fixed layout.",
              "PDF to Word converter — turn non-editable PDFs into DOCX for editing.",
              "Image to PDF converter — scan-style PDFs from your photos.",
              "No signup, no watermark — just fast, secure file conversion.",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-green-500"
                  aria-hidden="true"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* HOW IT WORKS (matches HowTo schema via #howto + step IDs) */}
        <section id="howto" className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-3">
            How to convert documents online (3 steps)
          </h2>
          <p className="text-on-surface-variant mb-4">
            The workflow is the same whether you need a{" "}
            <strong>Word to PDF converter</strong>, a{" "}
            <strong>PDF to Word converter</strong>, or an{" "}
            <strong>image to PDF converter</strong>.
          </p>
          <ol className="list-decimal pl-5 text-on-surface-variant space-y-4">
            <li>
              <strong>Upload your file.</strong> Drag &amp; drop a document (or
              tap to browse) in the box above. We accept DOC/DOCX, PPT/PPTX,
              XLS/XLSX, CSV, PDF, JPG, PNG and more.
            </li>
            <li>
              <strong>We convert to PDF first.</strong> Behind the scenes, your
              file is turned into a high-quality PDF to preserve layout, fonts,
              and graphics as much as possible.
            </li>
            <li>
              <strong>Choose output format &amp; download.</strong> Pick PDF,
              DOCX, PPTX, or XLSX and click{" "}
              <span className="font-semibold">Convert &amp; Download</span>. If
              you’d rather tweak the PDF instead, use the{" "}
              <button
                type="button"
                className="text-primary-600 underline decoration-transparent hover:decoration-primary-300"
              >
                “edit this PDF”
              </button>{" "}
              link.
            </li>
          </ol>
        </section>

        {/* BEST PRACTICES / TIPS */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold mb-3">
            Tips for better conversion results
          </h2>
          <p className="text-on-surface-variant mb-4">
            Converters can’t magically fix a messy original file. These quick
            tips help your <strong>online document converter</strong> results
            look cleaner and more professional:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-on-surface-variant text-sm md:text-base">
            <li>
              <strong>Start from the source.</strong> If you have the original
              Word/Excel/PowerPoint file, convert that directly instead of
              converting an exported PDF of the same file.
            </li>
            <li>
              <strong>Avoid low-resolution scans.</strong> Converting a blurry
              scanned image of a document to Word/Excel may not be perfect. If
              possible, export directly from the app that created the document.
            </li>
            <li>
              <strong>Check the result.</strong> After converting, skim the
              output file (especially tables, bullet lists, and multi-column
              layouts) before sending it to someone important.
            </li>
            <li>
              <strong>Use PDF as your final format.</strong> For resumes,
              invoices, and contracts, convert to PDF and send that so layout
              doesn’t change on your recipient’s device.
            </li>
            <li>
              <strong>Use Edit PDF for fine tuning.</strong> If you just need to
              fix a small typo or adjust a label, it’s often faster to edit the
              PDF directly instead of converting back and forth.
            </li>
          </ul>
        </section>

        {/* FAQ (visible, matches & extends schema) */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4 text-sm md:text-base">
            {[
              {
                q: "How do I convert Word to PDF online for free?",
                a: "Upload your DOC or DOCX file in the box at the top, choose PDF as the output format, and click Convert & Download. The converter keeps layout and fonts as much as possible and gives you a clean PDF with no watermark.",
              },
              {
                q: "Can I convert PDF to Word, Excel, or PowerPoint?",
                a: "Yes. Upload your PDF, then select DOCX, XLSX, or PPTX as the output type and convert. This turns the PDF back into an editable Office file that you can open in Microsoft 365 or compatible apps.",
              },
              {
                q: "Is there an image to PDF converter?",
                a: "Yes. Upload JPG or PNG images and choose PDF as the format. You can also use the dedicated Image to PDF tool if you want more control over ordering and page layout.",
              },
              {
                q: "Is this document converter really free and without watermark?",
                a: "Yes. The converter is free to use with no hidden trial, no watermark on your exported files, and no account requirement.",
              },
              {
                q: "Is it safe to convert my documents?",
                a: "Conversion requests are sent over encrypted TLS connections. Files are processed only for the purpose of converting them and you do not need to log in or create an account. For highly sensitive documents, you should always follow your organization’s security policies.",
              },
              {
                q: "Does this work on Mac, Windows, iPhone, and Android?",
                a: "Yes. The converter runs in your browser, so you can use it on macOS, Windows, Linux, iOS, or Android as long as you have a modern browser like Chrome, Edge, Safari, or Firefox.",
              },
              {
                q: "Will the converter keep my formatting?",
                a: "The goal is to keep layout, fonts, tables, and images as close to the original as possible, especially when converting Office files to PDF. For very complex layouts or scanned documents, you may need to do small manual adjustments after conversion.",
              },
            ].map((item, i) => (
              <details
                key={item.q}
                className="bg-[#091328]/50 rounded-xl px-4 py-3"
                defaultOpen={i === 0}
              >
                <summary className="font-semibold cursor-pointer">
                  {item.q}
                </summary>
                <p className="mt-2 text-on-surface-variant">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © {new Date().getFullYear()} Free PDF Editor by TechRex. All rights
          reserved.
        </p>
        <div className="mt-4 space-x-4 text-sm">
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

export default { Page: ConvertorPage };
