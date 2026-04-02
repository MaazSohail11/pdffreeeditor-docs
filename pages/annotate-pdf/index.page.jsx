// pages/annotate-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import AnnotateLight from "/src/components/AnnotateLight.jsx";
import { Highlighter, MessageSquare, Link as LinkIcon } from "lucide-react";

function AnnotatePDFPage() {
  const benefits = [
    "Annotate PDF online free in your browser — no signup or account needed",
    "Quick highlights, underlines and freehand markup for any page",
    "Add sticky notes and comments without changing the original text",
    "Lightweight PDF annotator — loads faster than a full editor",
    "Client-side only: your PDF stays on your device for privacy",
    "Download an annotated PDF with your highlights and notes preserved",
  ];

  const useCases = [
    {
      title: "Study & revision",
      body: "Highlight key definitions, formulas and examples in lecture slides or ebooks. Add short notes so you can quickly revise later.",
    },
    {
      title: "Review contracts & reports",
      body: "Mark confusing sections, flag questions and leave comments for colleagues without editing the original wording.",
    },
    {
      title: "Team feedback on designs",
      body: "Drop comments on mockups, wireframes or PDFs exported from Figma and share a single annotated file with your team.",
    },
    {
      title: "Client approvals",
      body: "Collect feedback from clients directly on invoices, proposals or presentations by asking them to highlight and comment.",
    },
    {
      title: "Teachers & tutors",
      body: "Annotate student work with highlights and notes, then export annotated PDFs to return feedback quickly.",
    },
    {
      title: "Personal reading & research",
      body: "Use highlights and notes to track important quotes, ideas and references across long PDF documents.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-on-surface font-headline">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-primary-50">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-center md:text-left">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-xs font-semibold text-amber-700">
                <Highlighter className="h-4 w-4" /> New: Lightweight PDF annotator
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Annotate PDF Online Free
                <span className="block text-primary-600">
                  Highlight, comment &amp; add notes in seconds
                </span>
              </h1>
              <p className="text-lg text-on-surface-variant">
                Quickly highlight PDF text, draw markup and drop sticky notes
                without installing anything. This online PDF annotator runs
                fully in your browser, so you can add remarks without uploading
                your file to a server.
              </p>
              <p className="text-sm text-on-surface-variant">
                Perfect when you just want to{" "}
                <strong>highlight a PDF online</strong> or{" "}
                <strong>add notes to a PDF</strong> — no full editor load, no
                signup and no watermark on the exported file.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-2 bg-[#091328]/50 backdrop-blur-xl border border-white/5 px-3 py-2 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                  <Highlighter className="h-4 w-4 text-amber-500" /> Freeform highlights
                </span>
                <span className="inline-flex items-center gap-2 bg-[#091328]/50 backdrop-blur-xl border border-white/5 px-3 py-2 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                  <MessageSquare className="h-4 w-4 text-primary-500" /> Sticky notes &amp; comments
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-amber-200/50 -z-10" />
              <div className="rounded-2xl border bg-[#091328]/50 backdrop-blur-xl border border-white/5 shadow-[0_0_25px_rgba(139,92,246,0.2)] p-6">
                <div className="text-sm font-semibold text-on-surface mb-3">
                  How to annotate a PDF online
                </div>
                <ol className="space-y-2 text-sm text-on-surface-variant list-decimal list-inside">
                  <li>Upload your PDF (stays on-device).</li>
                  <li>Highlight text or draw, then add notes.</li>
                  <li>Export and download the annotated PDF.</li>
                </ol>
                <p className="mt-3 text-xs text-outline">
                  All annotations are applied locally in your browser for
                  maximum privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tool */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <AnnotateLight />
        </section>

        {/* Benefits */}
        <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Free online PDF annotator — no signup, no watermark
              </h2>
              <p className="text-on-surface-variant mb-4">
                This tool focuses on{" "}
                <strong>fast, lightweight PDF annotation</strong>. Instead of
                loading a full PDF editor, you get just what you need to{" "}
                <strong>highlight PDF online</strong>, underline important
                points and leave comments for yourself or others.
              </p>
              <ul className="space-y-3">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-[10px] font-bold text-amber-700">
                      {i + 1}
                    </span>
                    <span className="text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                When to use an annotator instead of a full editor
              </h3>
              <p className="text-on-surface-variant mb-3">
                A full editor is great when you need to change the actual text
                or layout of a PDF. A PDF annotator is faster when you just
                want to mark things up. Use this page when:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-on-surface-variant">
                <li>You want to highlight passages while reading.</li>
                <li>You need to leave comments on a contract without editing it.</li>
                <li>You’re reviewing designs or reports and want to point at areas.</li>
                <li>
                  You prefer quick markup with{" "}
                  <strong>no account and no watermark</strong>.
                </li>
              </ul>
              <p className="text-on-surface-variant mt-3">
                If you want to edit the text itself, try the{" "}
                <a
                  href="/edit-pdf/"
                  className="underline text-primary-600 hover:text-primary-800"
                >
                  Edit PDF text online
                </a>{" "}
                tool instead.
              </p>
            </div>
          </div>
        </section>

        {/* How-to (for schema anchors) */}
        <section id="how-to" className="py-12 bg-[#091328]/50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">
              How to annotate a PDF online (3 simple steps)
            </h2>
            <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
              <li id="step-upload">
                <h3 className="font-semibold">
                  1) Upload your PDF to the annotator
                </h3>
                <p className="text-on-surface-variant">
                  Click to select a PDF from your device or drag and drop it
                  into the upload area. The file is opened directly in your
                  browser — it is not sent to our servers.
                </p>
              </li>
              <li id="step-annotate">
                <h3 className="font-semibold">
                  2) Highlight text and add notes or drawings
                </h3>
                <p className="text-on-surface-variant">
                  Choose the highlighter tool to mark important text, or use
                  freehand drawing to circle and underline. Add sticky notes to
                  leave comments, questions or explanations on any part of the
                  page.
                </p>
              </li>
              <li id="step-download">
                <h3 className="font-semibold">
                  3) Export the annotated PDF with your remarks
                </h3>
                <p className="text-on-surface-variant">
                  When you are done, export the file and download a new PDF
                  containing your highlights and annotations. You get a clean
                  file with no watermark and no trace of accounts or signups.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">
              Popular ways to highlight and annotate PDFs
            </h2>
            <p className="text-on-surface-variant mb-4">
              People use this PDF highlighter and annotator in many different
              workflows. Here are a few examples:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((item, i) => (
                <details
                  key={i}
                  className="bg-[#091328]/50 p-4 rounded-lg border border-white/5"
                >
                  <summary className="font-semibold cursor-pointer">
                    {item.title}
                  </summary>
                  <p className="mt-2 text-on-surface-variant">{item.body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy & security */}
        <section className="py-12 bg-[#091328]/50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-3">
              Security &amp; privacy for PDF annotations
            </h2>
            <p className="text-on-surface-variant mb-3">
              Many online PDF annotation tools require you to upload documents
              to their servers. This lightweight annotator works differently:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-on-surface-variant">
              <li>
                <strong>Client-side rendering</strong> — your PDF is opened and
                annotated directly in your browser.
              </li>
              <li>
                <strong>No signup or account</strong> — we don’t ask for an
                email or login to let you highlight PDFs online.
              </li>
              <li>
                <strong>No watermark</strong> — exported files contain only your
                annotations, not our branding.
              </li>
              <li>
                You can clear your browser cache and local storage to remove any
                traces of recently opened documents.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is this PDF annotator free and without signup?",
                  a: "Yes. You can annotate PDF online free with no signup, no account and no trial. Just upload, highlight, add notes and download your annotated file.",
                },
                {
                  q: "Can I just highlight text in a PDF online?",
                  a: "Yes. Use the highlighter tool to mark important passages in your PDF. You can also draw, underline and combine highlights with sticky notes.",
                },
                {
                  q: "Will my PDF be uploaded to your server?",
                  a: "No. The annotator runs in your browser and processes your PDF locally. Your document is not stored on our servers by default.",
                },
                {
                  q: "What is the difference between annotating and editing a PDF?",
                  a: "Annotating adds layers on top of the PDF such as highlights, shapes and comments. Editing changes the underlying text or layout. Use this page for quick markup and the Edit PDF Text tool if you need to change the actual words.",
                },
                {
                  q: "Does this tool add a watermark to my annotated PDF?",
                  a: "No. Exported PDFs keep your annotations but do not include any watermark or branding from us.",
                },
                {
                  q: "Does the PDF annotator work on mobile?",
                  a: "Yes. You can open this page in a modern mobile browser on iOS or Android, pinch-zoom into areas you want to highlight and tap to add notes.",
                },
              ].map((item, i) => (
                <details key={i} className="bg-[#091328]/50 p-4 rounded-lg border border-white/5">
                  <summary className="font-semibold cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-on-surface-variant">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related tools */}
        <section className="py-12 bg-[#091328]/50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <LinkIcon className="h-5 w-5" />
              More free PDF tools
            </h2>
            <p className="text-on-surface-variant mb-3">
              After you annotate your PDF online, you can use these tools to
              continue working with the same file:
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
              <li>
                <a
                  href="/edit-pdf/"
                  className="underline hover:text-primary-900"
                >
                  Edit PDF text online
                </a>
              </li>
              <li>
                <a
                  href="/add-image-pdf/"
                  className="underline hover:text-primary-900"
                >
                  Add image to PDF
                </a>
              </li>
              <li>
                <a
                  href="/sign-pdf/"
                  className="underline hover:text-primary-900"
                >
                  Sign PDF online
                </a>
              </li>
              <li>
                <a
                  href="/merge-pdf/"
                  className="underline hover:text-primary-900"
                >
                  Merge PDF files
                </a>
              </li>
              <li>
                <a
                  href="/split-pdf/"
                  className="underline hover:text-primary-900"
                >
                  Split PDF pages
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Tools - Auto Injected */}
        <section className="py-12 bg-[#091328]/50 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 text-on-surface font-headline">Explore more PDF tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium">
              <a href="/compress-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">📉</span>
                <span>Compress PDF</span>
              </a>
              <a href="/pdf-to-word/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">📝</span>
                <span>PDF to Word</span>
              </a>
              <a href="/merge-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">➕</span>
                <span>Merge PDF</span>
              </a>
              <a href="/split-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">✂️</span>
                <span>Split PDF</span>
              </a>
              <a href="/edit-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">✏️</span>
                <span>Edit PDF</span>
              </a>
              <a href="/sign-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">✒️</span>
                <span>Sign PDF</span>
              </a>
              <a href="/ocr-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">🔍</span>
                <span>OCR PDF</span>
              </a>
              <a href="/pdf-to-image/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">🖼️</span>
                <span>PDF to Image</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default { Page: AnnotatePDFPage };
