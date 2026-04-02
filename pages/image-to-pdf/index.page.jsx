// pages/image-to-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
  Image as ImageIcon,
  Upload,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import ConverterPanel from "/src/components/ConverterPanel.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function ImageToPDF() {
  const related = [
    { to: "/pdf-to-image/", label: "PDF to Image" },
    { to: "/word-to-pdf/", label: "Word to PDF" },
    { to: "/pptx-to-pdf/", label: "PPTX to PDF" },
    { to: "/excel-to-pdf/", label: "Excel/CSV to PDF" },
    { to: "/html-to-pdf/", label: "HTML to PDF" },
  ];

  const useCases = [
    "Turn scanned receipts into a single PDF for expense reports.",
    "Combine photos of handwritten notes into one PDF study pack.",
    "Bundle ID photos, passports, and documents for online applications.",
    "Create a photo album PDF from vacation or event pictures.",
    "Convert phone camera scans into a clean PDF for printing or emailing.",
  ];

  const tips = [
    "Use good lighting when capturing documents so text stays readable in the PDF.",
    "Rotate sideways photos before converting so pages stay upright.",
    "Keep related images together and name them clearly for easier archiving.",
    "Use higher-resolution images if you plan to print the final PDF.",
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
            {/* LEFT: value prop */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                Image to PDF Converter — Free Online
              </h1>
              <p className="text-lg text-on-surface mb-3">
                Convert <strong>JPG, JPEG, PNG, and photos</strong> to PDF in seconds. Combine
                multiple images into a single, neat PDF — <strong>no login</strong>,{" "}
                <strong>no watermark</strong>, and no limits.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                Perfect for <strong>scans, receipts, homework, ID photos, and photo bundles</strong>{" "}
                that need to be uploaded as one PDF file.
              </p>

              <div className="mt-4 flex flex-col gap-2 md:items-start items-center text-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary-600" />
                  100% free — no signup, no watermark, no email required
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Private by design — conversion runs in your browser where possible
                </span>
                <span className="inline-flex items-center gap-2">
                  <MonitorSmartphone className="h-4 w-4 text-primary-600" />
                  Works on iPhone, Android, Windows, Mac, and tablets
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-4 md:items-start items-center">
                <a
                  href="#image-to-pdf-converter"
                  className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-10 py-3.5 rounded-xl inline-flex items-center gap-3 font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)]"
                >
                  <Upload className="h-5 w-5" />
                  <span>Choose Images — Convert to PDF</span>
                </a>
                <a
                  href="/editor/"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline text-sm"
                >
                  <ImageIcon className="h-4 w-4" />
                  <span>Open full PDF editor (add text, signatures, and more)</span>
                </a>
              </div>
            </div>

            {/* RIGHT: converter panel */}
            <aside id="image-to-pdf-converter">
              <ConverterPanel
                defaultFormat="pdf"
                formatOptions={[{ value: "pdf", label: "PDF (.pdf)" }]}
                showEditInstead={false}
              />
              <p className="mt-3 text-xs text-outline text-center">
                Upload JPG, JPEG, or PNG files and instantly create a single or multi-page PDF.
              </p>
            </aside>
          </div>
        </section>

        {/* WHY CONVERT IMAGES TO PDF */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why convert images (JPG/PNG) to PDF?
          </h2>
          <p className="text-on-surface-variant mb-4">
            Images are great for capturing documents and memories, but they are awkward to upload,
            print, and share in bulk. A <strong>PDF</strong> is a universal format that works the
            same across devices, email clients, and upload forms.
          </p>

          <ul className="space-y-3 text-on-surface">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Bundle many photos into one file.</strong> Instead of sending ten separate
                JPGs, combine them into a tidy multi-page PDF that’s easy to scroll and download.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Meet website and portal requirements.</strong> Many job portals, school
                systems, and government forms only accept PDF uploads, not images.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Keep order and layout under control.</strong> You control the order of
                pages and how each image appears, instead of relying on random file sorting.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Print and archive easily.</strong> A PDF of your images is simpler to print,
                store, and re-send than a folder full of separate PNG/JPG files.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                <strong>Free, private, and fast.</strong> This image to PDF converter is 100% free,
                runs in your browser where possible, and never adds watermarks.
              </span>
            </li>
          </ul>
        </section>

        {/* USE CASES */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Popular ways to use the Image to PDF converter
          </h2>
          <p className="text-on-surface-variant mb-4">
            People use this tool every day to convert and combine photos into PDFs for both personal
            and professional tasks:
          </p>
          <ul className="list-disc pl-5 text-on-surface-variant space-y-2">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* HOW-TO: JPG/PNG → PDF */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            How to convert JPG/PNG images to PDF (step-by-step)
          </h2>
          <p className="text-on-surface-variant mb-3">
            You don’t need any special app installed on your device. Just follow these simple steps
            in your browser:
          </p>
          <ol className="list-decimal pl-5 text-on-surface-variant space-y-2">
            <li id="step-upload">
              Open the{" "}
              <a href="#image-to-pdf-converter" className="text-primary-600 hover:underline">
                Image to PDF converter
              </a>{" "}
              and upload your JPG, JPEG, or PNG files (you can select multiple images).
            </li>
            <li id="step-review">
              Arrange the image order, check orientation, and adjust size if needed so everything
              looks correct for each page.
            </li>
            <li id="step-download">
              Click <strong>Convert &amp; Download</strong> to export your images as a single PDF.
              The file downloads instantly — no email, no watermark.
            </li>
            <li>
              Need to add text, highlight sections, or sign the PDF? Open it in the{" "}
              <a href="/editor/" className="text-primary-600 hover:underline">
                Free PDF Editor
              </a>{" "}
              to annotate, sign, or merge with other documents.
            </li>
          </ol>
        </section>

        {/* TIPS FOR CLEAN DOCUMENT SCANS */}
        <section className="max-w-5xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Tips for turning photos into clear PDF documents
          </h2>
          <p className="text-on-surface-variant mb-4">
            If you’re using your phone camera as a scanner, a few small tweaks can make your final
            PDF much easier to read:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-2">
                <ImageIcon className="h-5 w-5 text-primary-600" />
                Capture better “scanned” images
              </h3>
              <ul className="list-disc pl-5 text-on-surface-variant space-y-1">
                {tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-2">
                <Upload className="h-5 w-5 text-primary-600" />
                Prepare for upload & sharing
              </h3>
              <ul className="list-disc pl-5 text-on-surface-variant space-y-1">
                <li>Group related pages (e.g., all receipts for one trip) into a single PDF.</li>
                <li>Keep file sizes reasonable by avoiding ultra-huge photos unless needed.</li>
                <li>
                  Use this converter to combine images, then compress the PDF using the{" "}
                  <a href="/compress-pdf/" className="text-primary-600 hover:underline">
                    Compress PDF
                  </a>{" "}
                  tool if upload size is limited.
                </li>
                <li>
                  After converting, quickly scroll the PDF to confirm every page is sharp and
                  upright before sending.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* RELATED CONVERTERS */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold mb-3">Other free online converters</h2>
          <p className="text-on-surface-variant mb-4 text-sm">
            Move between images, PDFs, and Office formats with these tools:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            Image to PDF Converter — Frequently Asked Questions
          </h2>
          <div className="space-y-3 text-sm">
            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is the Image to PDF converter really free?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes — this <strong>Image to PDF</strong> tool is free forever. There is no login,
                no trial, and no watermark added to your PDFs. Just upload your images and download
                the PDF instantly.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Which image formats are supported (JPG, PNG, etc.)?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                The converter supports <strong>JPG, JPEG, and PNG</strong>, which covers most
                camera and phone image formats. If your image is in another format, saving it as JPG
                or PNG first usually works.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Can I combine multiple images into a single PDF?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Absolutely. Upload several images at once, arrange the order, and export them as one{" "}
                <strong>multi-page PDF</strong>. This is ideal for document scans, homework
                submissions, or photo bundles.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Is it safe to convert photos of IDs or documents?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Where possible, conversion runs locally in your browser so your images stay on your
                device. For any required network processing, files are sent over encrypted TLS. You
                should still follow your organization’s rules for highly sensitive documents.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Does the Image to PDF converter work on my phone?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. You can use it on <strong>iPhone, Android, and tablets</strong>. Open the page
                in Safari or Chrome, select photos from your gallery, and convert them to PDF with a
                few taps.
              </p>
            </details>

            <details className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded p-4">
              <summary className="font-semibold cursor-pointer">
                Can I edit the PDF after converting my images?
              </summary>
              <p className="mt-2 text-on-surface-variant">
                Yes. After you create the PDF, you can open it in the{" "}
                <a href="/editor/" className="text-primary-600 hover:underline">
                  Free PDF Editor
                </a>{" "}
                to add text, highlight important parts, sign, merge with other PDFs, or reorder
                pages before sending.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
        <div className="mt-4 space-x-6">
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

export default { Page: ImageToPDF };
