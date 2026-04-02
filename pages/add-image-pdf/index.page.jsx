// pages/add-image-pdf/index.page.jsx
import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import {
  FileText,
  Download,
  Zap,
  CheckCircle2,
  Image as ImageIcon,
  ShieldCheck,
  Lock,
  Smartphone,
  Layers,
  HelpCircle,
  Link as LinkIcon,
  Wrench,
  BadgeCheck
} from "lucide-react";
import InlineDropBox from "../../src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

const ImageStampTool = lazy(() => import("/src/components/ImageStampTool.jsx"));

function AddImagePDF() {
  const isBrowser = typeof window !== "undefined";

  const base = "https://pdffreeeditor.com";
  const canonical = `${base}/add-image-pdf/`;
  const ogImage = `${base}/og/add-image-pdf.png`; // Optional: create this file for better previews

  const metaTitle = "Add Image to PDF Online Free (PNG/JPG) – Logo & Stamp | TechRex";
  const metaDescription =
    "Add an image to a PDF online for free. Insert a logo, stamp, signature image, or photo on any page, resize/rotate precisely, and download instantly. No signup, no watermark, private.";

  const toolRef = useRef(null);
  const [isWorkspace, setIsWorkspace] = useState(false);

  useEffect(() => {
    if (isWorkspace && toolRef.current) {
      toolRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isWorkspace]);

  const benefits = [
    "Add logos, stamps, photos, and signature images to any PDF page",
    "Precise control: move, resize, rotate, duplicate, and nudge with arrow keys",
    "Works on desktop and mobile (iPhone/Android friendly)",
    "No signup, no watermark, free to use",
    "Privacy-first workflow (designed to run in your browser)",
    "Great for invoices, letterheads, ID pages, forms, and approvals"
  ];

  const useCases = [
    {
      title: "Add a logo to a PDF (invoice, letterhead, proposal)",
      body:
        "Insert your company logo on the first page or every page. Align it precisely and export a clean, professional PDF."
    },
    {
      title: "Add a stamp or seal (PAID, APPROVED, RECEIVED)",
      body:
        "Place a stamp image on forms and documents. Resize, rotate, and position it consistently across pages."
    },
    {
      title: "Add a photo or ID image to a PDF form",
      body:
        "Attach an ID photo, passport-size image, or profile picture to a PDF page without installing software."
    },
    {
      title: "Add an image-based signature",
      body:
        "If you already have a signature image (PNG/JPG), insert it into a PDF and position it where needed."
    }
  ];

  const proTips = [
    {
      title: "Use PNG for transparent backgrounds",
      body:
        "Logos and stamps look best as PNG with transparency (no white rectangle). JPG works too, but is best for photos."
    },
    {
      title: "Keep it crisp: don’t upscale tiny images",
      body:
        "If your image looks blurry, start with a higher-resolution logo/stamp file. Upscaling small images reduces sharpness."
    },
    {
      title: "Need the same image on multiple pages?",
      body:
        "Duplicate the image and place it on other pages, or reuse the same asset to keep branding consistent."
    },
    {
      title: "File too large after adding images?",
      body:
        "After exporting, run compression for easier sharing and uploads—especially for scanned PDFs."
    }
  ];

  const faqs = [
    {
      q: "How do I add an image to a PDF online?",
      a:
        "Upload your PDF, choose an image (PNG/JPG/WebP), place it on the page, resize/rotate as needed, then download the updated PDF."
    },
    {
      q: "Can I add a logo or stamp to a PDF without watermark?",
      a:
        "Yes. This tool is designed for clean exports: place a logo or stamp and download a watermark-free PDF."
    },
    {
      q: "Can I add an image to every page of a PDF?",
      a:
        "Yes. You can place an image on one page or repeat it across multiple pages depending on what your document needs."
    },
    {
      q: "Which image format is best: PNG or JPG?",
      a:
        "PNG is best for logos/stamps because it supports transparency. JPG is best for photos. WebP can work as well."
    },
    {
      q: "Is it safe and private?",
      a:
        "The workflow is designed to run in your browser so your file stays on your device by default. Review the Privacy Policy for details."
    },
    {
      q: "Can I also edit text in the PDF?",
      a:
        "Yes. If you need to modify text first, use the Edit PDF page, then come back to insert your logo or images."
    }
  ];

  // --- Schemas (helps SEO + rich results; keep visible FAQ aligned with JSON-LD) ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
      { "@type": "ListItem", position: 3, name: "Add Image to PDF", item: canonical }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — Add Image to PDF",
    url: canonical,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to add an image to a PDF",
    description:
      "Upload a PDF, insert a PNG/JPG/WebP image, position it precisely on any page, then download the updated PDF.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        url: `${canonical}#step-upload`,
        name: "Upload your PDF",
        text: "Upload the PDF you want to edit."
      },
      {
        "@type": "HowToStep",
        url: `${canonical}#step-insert`,
        name: "Insert your image",
        text: "Choose a PNG/JPG/WebP image, place it on the page, and resize/rotate for perfect placement."
      },
      {
        "@type": "HowToStep",
        url: `${canonical}#step-download`,
        name: "Download the updated PDF",
        text: "Export and download your new PDF without a watermark."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Free PDF Editor by TechRex" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>

      <SiteNav />

      {/* HERO */}
      <section className="digital-obsidian text-on-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Add Image to PDF Online Free
              <br />
              <span className="text-primary-600">
                Insert Logo, Stamp, Photo (PNG/JPG) • No Signup • No Watermark
              </span>
            </h1>

            <p className="text-lg text-on-surface-variant mb-4">
              Need to <strong>insert an image into a PDF</strong>? Upload your PDF, add a logo or stamp to any page,
              position it precisely, and download instantly.
            </p>

            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5/80 backdrop-blur border border-primary-100 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] mb-6">
              <p className="text-sm font-semibold text-on-surface font-headline flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary-600" aria-hidden="true" /> Quick answer
              </p>
              <ul className="mt-2 text-sm text-on-surface-variant space-y-1">
                <li>• Upload PDF → insert PNG/JPG/WebP → place & resize → download</li>
                <li>• Best for: logos, stamps, signature images, photos, letterheads</li>
                <li>• Works on mobile and desktop</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 md:items-start items-center">
              <a
                href="#image-tool"
                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
              >
                <ImageIcon className="h-4 w-4" aria-hidden="true" />
                <span>Open Image Tool</span>
              </a>

              <a
                href="#how-to"
                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>How it works</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-5 text-sm text-on-surface-variant">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" /> Watermark-free exports
              </span>
              <span className="inline-flex items-center gap-2">
                <Lock className="h-4 w-4" aria-hidden="true" /> Privacy-first
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4" aria-hidden="true" /> Mobile-friendly
              </span>
            </div>

            <p className="mt-5 text-sm text-on-surface-variant">
              Need to change text first? Try{" "}
              <a href="/edit-pdf/" className="text-primary-700 underline hover:text-primary-900">
                Edit PDF
              </a>
              . Need to sign after inserting a logo? Use{" "}
              <a href="/sign-pdf/" className="text-primary-700 underline hover:text-primary-900">
                Sign PDF
              </a>
              .
            </p>
          </div>

          {/* Upload card (visible to bots + users) */}
          <aside aria-label="Upload PDF to add image">
            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl border border-white/5 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.18)] p-4">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-primary-600" aria-hidden="true" />
                <p className="font-semibold text-on-surface font-headline">Upload PDF to start</p>
              </div>
              <InlineDropBox minHeight={420} maxWidth={560} label="Choose a PDF" />
              <p className="mt-3 text-xs text-outline">
                Tip: If your final PDF becomes large after adding images, run{" "}
                <a href="/compress-pdf/" className="underline hover:text-on-surface-variant">
                  Compress PDF
                </a>{" "}
                after exporting.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* TOOL */}
      <section
        id="image-tool"
        ref={toolRef}
        className="py-10 bg-[#091328]/50 backdrop-blur-xl border border-white/5"
        style={{ minHeight: isWorkspace ? "calc(100vh - 100px)" : undefined }}
        aria-label="Add image tool"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <h2 className="text-3xl font-bold text-on-surface font-headline">Add images to your PDF (logo, stamp, photo)</h2>
          <p className="text-on-surface-variant">
            Upload your PDF, insert images, and position them with precision. Resize with locked aspect ratio, rotate,
            duplicate, align, nudge with arrow keys, and place the image exactly where it belongs.
          </p>

          {isBrowser ? (
            <Suspense fallback={<div className="py-8 text-on-surface-variant">Loading image tool…</div>}>
              <ImageStampTool
                fullHeight
                onPdfLoaded={() => setIsWorkspace(true)}
              />
            </Suspense>
          ) : (
            <div className="bg-[#091328]/50 border rounded-2xl p-6 text-on-surface-variant">
              <p className="font-semibold mb-2">Tool loads in the browser</p>
              <p className="text-sm">
                The interactive editor loads on the client to avoid server-side rendering issues. The page content
                below explains exactly how to add a logo/stamp/photo to a PDF.
              </p>
            </div>
          )}
        </div>
      </section>

      <main className="flex-1">
        {/* BENEFITS */}
        <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why use TechRex to add images to a PDF?</h2>
              <p className="text-on-surface-variant mb-6">
                This page focuses on one high-intent job: <strong>insert an image into a PDF</strong> cleanly and fast.
                It’s ideal for branding, stamps, approvals, and form workflows.
              </p>

              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <span className="text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-[#091328]/50 border rounded-2xl p-5">
                <p className="font-semibold text-on-surface font-headline flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary-600" aria-hidden="true" /> Privacy & trust
                </p>
                <p className="mt-2 text-sm text-on-surface-variant">
                  The workflow is designed to run in your browser so your file stays on your device by default. For full details,
                  review{" "}
                  <a href="/privacy/" className="text-primary-700 underline hover:text-primary-900">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms/" className="text-primary-700 underline hover:text-primary-900">
                    Terms
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* USE CASES */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-[0_0_25px_rgba(139,92,246,0.2)] border">
                <Zap className="h-14 w-14 text-primary-600 mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-on-surface font-headline mb-2">Insert pictures in seconds</h3>
                <p className="text-on-surface-variant mb-5">Upload → insert → download. Works on desktop and mobile.</p>
                <a
                  href="#image-tool"
                  className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary hover:scale-105 active:scale-95 transition-all px-6 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] inline-flex items-center gap-2 transition"
                >
                  <ImageIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Open Image Tool</span>
                </a>
              </div>

              <div className="grid gap-4">
                {useCases.map((u) => (
                  <div key={u.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                    <p className="font-semibold text-on-surface font-headline">{u.title}</p>
                    <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{u.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LONG-TAIL SECTIONS */}
        <section className="py-10 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
          <div className="max-w-4xl mx-auto px-6 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-3">Add JPG/PNG/WebP to a PDF (clean export)</h2>
              <p className="text-on-surface-variant">
                Insert JPG, PNG, or WebP images and place them anywhere on a page. For logos and stamps, PNG is ideal
                because it supports transparent backgrounds.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Insert a logo or stamp into a PDF</h2>
              <p className="text-on-surface-variant">
                Add a company logo to invoices, proposals, and letterheads—or insert a stamp like APPROVED/PAID/RECEIVED
                on forms. Resize, rotate, and align so it matches the document layout.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Add a photo to one page or multiple pages</h2>
              <p className="text-on-surface-variant">
                Place an ID photo or product image on a single page, or repeat the image across multiple pages when you
                need consistency for branding or stamping workflows.
              </p>
            </div>
          </div>
        </section>

        {/* HOW-TO */}
        <section id="how-to" className="py-16 bg-[#091328]/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">How to add an image to a PDF (3 steps)</h2>
            <ol className="space-y-6 list-decimal ml-6 text-on-surface">
              <li id="step-upload">
                <h3 className="font-semibold">1) Upload your PDF</h3>
                <p className="text-on-surface-variant">
                  Upload your PDF to open it in the image tool. Then move to the page where you want to insert the image.
                </p>
              </li>
              <li id="step-insert">
                <h3 className="font-semibold">2) Insert and position the image</h3>
                <p className="text-on-surface-variant">
                  Select an image (PNG/JPG/WebP), drop it on the page, resize from corners, and rotate for perfect placement.
                  Use precise positioning to align logos and stamps.
                </p>
              </li>
              <li id="step-download">
                <h3 className="font-semibold">3) Download the updated PDF</h3>
                <p className="text-on-surface-variant">
                  Export and download your updated PDF. If you need to sign after inserting a logo, go to{" "}
                  <a href="/sign-pdf/" className="text-primary-700 underline hover:text-primary-900">
                    Sign PDF
                  </a>
                  .
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* PRO TIPS */}
        <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Wrench className="h-6 w-6" aria-hidden="true" /> Pro tips (better results)
            </h2>
            <p className="text-on-surface-variant mb-6">
              These best practices improve quality and reduce common issues like blurry logos or oversized files.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {proTips.map((t) => (
                <div key={t.title} className="bg-[#091328]/50 border rounded-2xl p-6">
                  <p className="font-semibold text-on-surface font-headline">{t.title}</p>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                    {t.body}
                    {t.title.includes("File too large") && (
                      <>
                        {" "}
                        Try{" "}
                        <a href="/compress-pdf/" className="text-primary-700 underline hover:text-primary-900">
                          Compress PDF
                        </a>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-[#091328]/50" aria-label="Add Image to PDF FAQs">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="h-6 w-6" aria-hidden="true" /> FAQs
            </h2>

            <div className="space-y-4">
              {faqs.map((item, i) => (
                <details key={i} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 p-5 rounded-2xl border border-white/5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                  <summary className="font-semibold cursor-pointer text-on-surface font-headline">{item.q}</summary>
                  <p className="mt-2 text-on-surface-variant">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED TOOLS */}
        <section className="py-12 bg-[#091328]/50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <LinkIcon className="h-5 w-5" aria-hidden="true" />
              Related tools
            </h2>
            <p className="text-on-surface-variant mb-4">
              Complete your workflow with these related pages:
            </p>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
              <li><a href="/edit-pdf/" className="underline hover:text-primary-900">Edit PDF</a></li>
              <li><a href="/add-logo-to-pdf-online/" className="underline hover:text-primary-900">Add Logo to PDF</a></li>
              <li><a href="/sign-pdf/" className="underline hover:text-primary-900">Sign PDF</a></li>
              <li><a href="/merge-pdf/" className="underline hover:text-primary-900">Merge PDF</a></li>
              <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF</a></li>
              <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF</a></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-primary">
              Add your logo or stamp to a PDF now
            </h2>
            <p className="mt-3 text-slate-200">
              Upload → place image → download. Clean, fast, and built for real workflows.
            </p>
            <a
              href="#image-tool"
              className="mt-7 inline-flex items-center gap-2 bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-slate-900 px-8 py-4 rounded-full font-bold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-slate-100 transition"
            >
              <Download className="h-5 w-5 text-primary-600" aria-hidden="true" />
              <span>Open Image Tool</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
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

export default { Page: AddImagePDF };
