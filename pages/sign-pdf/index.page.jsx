// pages/sign-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
  PenTool,
  Upload,
  Lock,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileText,
  HelpCircle,
  Link as LinkIcon,
  Smartphone,
  ClipboardCheck,
  Wrench,
  Download
} from "lucide-react";
import InlineDropBox from "/src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function SignPDF() {
  const base = "https://pdffreeeditor.com";
  const canonical = `${base}/sign-pdf/`;

  const metaTitle = "Sign PDF Online Free – Add an Electronic Signature | TechRex";
  const metaDescription =
    "Sign PDFs online for free. Draw, type, or upload a signature, place it anywhere, and download instantly. No signup, no watermark. Works on mobile and desktop.";

  // Optional: create /public/og/sign-pdf.png (recommended)
  const ogImage = `${base}/og/sign-pdf.png`;

  const keyFeatures = [
    {
      title: "Sign any PDF (any page, anywhere)",
      body: "Place a signature on the first page, last page, or multiple pages. Move, resize, and align until it looks right."
    },
    {
      title: "Draw • Type • Upload",
      body: "Create a signature by drawing with mouse/touch, typing a signature-style name, or uploading a PNG/JPG signature image."
    },
    {
      title: "No signup, no watermark",
      body: "Download your signed PDF instantly without creating an account and without branding on your document."
    },
    {
      title: "Private by default",
      body: "Signing is designed to run in the browser so your file stays on your device by default. See the Privacy Policy for details."
    },
    {
      title: "Works on mobile & desktop",
      body: "Sign PDFs on iPhone, Android, Mac, or Windows in modern browsers (Safari/Chrome/Edge) with no install."
    },
    {
      title: "Fast for real workflows",
      body: "Great for contracts, NDAs, HR forms, school documents, and approvals—upload, sign, export, done."
    }
  ];

  const useCases = [
    {
      title: "Sign contracts & agreements",
      body: "Add your signature to business contracts, NDAs, rental agreements, service terms, and client paperwork without printing."
    },
    {
      title: "Fill and sign forms",
      body: "Sign application forms, school documents, HR onboarding PDFs, and approvals in seconds—especially useful for portal uploads."
    },
    {
      title: "Sign PDFs on your phone",
      body: "Use touch to draw your signature on iPhone/Android when you’re away from your laptop—no app required."
    },
    {
      title: "Sign without Adobe Acrobat",
      body: "Upload your PDF and sign directly in the browser—no Adobe software needed for basic electronic signatures."
    }
  ];

  const troubleshooting = [
    {
      title: "My signature looks blurry",
      body:
        "Use a higher-resolution signature image (PNG recommended), avoid tiny signatures, and export at normal zoom. If the PDF is a scan, consider running OCR first for cleaner appearance."
    },
    {
      title: "I need multiple signatures",
      body:
        "Place as many signatures as needed across pages. If multiple people must sign, share the signed file and repeat the process for each signer if your workflow allows."
    },
    {
      title: "The portal rejects my signed PDF (file too large)",
      body:
        "After signing, compress the PDF for upload limits. This is common with scanned PDFs and image-heavy documents."
    },
    {
      title: "I need a certificate-based digital signature",
      body:
        "This page adds an electronic signature (visual signature on the PDF). Certificate-based digital signatures are a different workflow and may be required by some organizations."
    }
  ];

  // Keep visible FAQ and JSON-LD FAQ aligned 1:1 (same wording, no extra claims)
  const faqs = [
    {
      q: "How do I sign a PDF online for free?",
      a:
        "Upload your PDF, add your signature (draw, type, or upload), place it on the page, then download the signed PDF. No signup and no watermark."
    },
    {
      q: "Can I add a signature to any page (not only the last page)?",
      a:
        "Yes. You can place a signature anywhere on any page, and add multiple signatures if needed."
    },
    {
      q: "How do I sign a PDF on iPhone or Android?",
      a:
        "Open this page in Safari or Chrome, upload your PDF, draw your signature with touch (or type/upload), then download the signed file. No app install required."
    },
    {
      q: "Can I sign a PDF without Adobe Acrobat?",
      a:
        "Yes. Upload your PDF here and sign directly in the browser—no Adobe required for basic electronic signatures."
    },
    {
      q: "Is this an electronic signature or a digital signature?",
      a:
        "This tool creates an electronic signature (a visual signature you place on the PDF). A digital signature is certificate-based and cryptographic, and is a different workflow."
    },
    {
      q: "Do you upload or store my PDF?",
      a:
        "By default, signing runs locally in your browser so your file stays on your device. If a feature ever requires an upload, the UI should clearly indicate it before you continue."
    },
    {
      q: "Why is my signed PDF still large?",
      a:
        "Image-heavy or scanned PDFs can be large. After signing, compress the PDF to reduce file size for email or portal uploads."
    },
    {
      q: "Can I remove sensitive info before signing?",
      a:
        "Yes. Redact or remove sensitive content first, then sign and export the final document."
    }
  ];

  // Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
      { "@type": "ListItem", position: 3, name: "Sign PDF", item: canonical }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — Sign PDF",
    url: canonical,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to sign a PDF online",
    description:
      "Upload a PDF, add a signature by drawing, typing, or uploading an image, place it on the page, then download the signed PDF.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        url: `${canonical}#step-upload`,
        name: "Upload your PDF",
        text: "Upload the PDF you want to sign."
      },
      {
        "@type": "HowToStep",
        url: `${canonical}#step-sign`,
        name: "Create and place your signature",
        text: "Draw, type, or upload your signature and place it on any page."
      },
      {
        "@type": "HowToStep",
        url: `${canonical}#step-download`,
        name: "Download the signed PDF",
        text: "Export and download your signed PDF without a watermark."
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
    <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
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
        <meta property="og:site_name" content="TechRex Free PDF Editor" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Sign PDF Online Free – TechRex" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Sign PDF Online Free – TechRex" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>

      <SiteNav />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                Sign PDF Online Free
                <span className="block text-blue-600">Add an Electronic Signature (No Signup)</span>
              </h1>

              <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                Upload a PDF, add your signature, and download instantly. Draw, type, or upload a signature image—fast,
                clean, and watermark-free.
              </p>

              {/* Trust/answer-first box */}
              <div className="mt-6 bg-white/80 backdrop-blur border border-blue-100 rounded-2xl p-5 shadow-sm max-w-xl mx-auto lg:mx-0">
                <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-600" aria-hidden="true" /> Quick steps
                </p>
                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                  <li>• Upload PDF → add signature → download signed PDF</li>
                  <li>• Sign on iPhone/Android + desktop browsers</li>
                  <li>• No signup • No watermark</li>
                </ul>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#sign-start"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 shadow transition"
                >
                  <Upload className="h-5 w-5" aria-hidden="true" />
                  <span>Upload PDF to Sign</span>
                </a>

                <a
                  href="/editor/"
                  className="bg-white text-blue-600 border border-blue-200 hover:shadow px-7 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition"
                >
                  <PenTool className="h-5 w-5" aria-hidden="true" />
                  <span>Open Full Editor</span>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2">
                  <Lock className="h-4 w-4" aria-hidden="true" /> Private by default
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" /> Watermark-free
                </span>
                <span className="inline-flex items-center gap-2">
                  <Smartphone className="h-4 w-4" aria-hidden="true" /> Mobile-friendly
                </span>
              </div>
            </div>

            {/* DROPBOX */}
            <aside id="sign-start" aria-label="Upload PDF to sign">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.18)] p-4">
                <InlineDropBox
                  className="w-full"
                  minHeight={440}
                  maxWidth={720}
                  label="Choose a PDF to Sign"
                />
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Tip: If you need to compress for an upload limit, use{" "}
                <a className="text-blue-600 underline hover:text-blue-800" href="/compress-pdf/">
                  Compress PDF
                </a>
                .
              </p>
            </aside>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Add a signature to PDF in minutes
            </h2>
            <p className="mt-3 text-gray-700 max-w-3xl">
              This page is built for the exact intent behind “sign PDF online”: upload, place a signature, and export a clean signed PDF.
              No account friction and no watermark.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((f) => (
                <div
                  key={f.title}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
                >
                  <p className="font-semibold text-gray-900">{f.title}</p>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO */}
        <section id="how-to" className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900">How to sign a PDF online (3 steps)</h2>

            <ol className="mt-6 space-y-6">
              <li id="step-upload" className="bg-white rounded-2xl border p-6 shadow-sm">
                <p className="font-semibold text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" /> 1) Upload your PDF
                </p>
                <p className="mt-2 text-gray-700">
                  Click “Upload PDF to Sign” and choose your file. The signing interface opens with your document ready.
                </p>
              </li>

              <li id="step-sign" className="bg-white rounded-2xl border p-6 shadow-sm">
                <p className="font-semibold text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" /> 2) Create and place your signature
                </p>
                <p className="mt-2 text-gray-700">
                  Draw with touch/mouse, type a signature-style name, or upload a signature image. Place it anywhere on any page.
                </p>
              </li>

              <li id="step-download" className="bg-white rounded-2xl border p-6 shadow-sm">
                <p className="font-semibold text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" /> 3) Download the signed PDF
                </p>
                <p className="mt-2 text-gray-700">
                  Export and download instantly. No signup, no watermark.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900">Common reasons people sign PDFs</h2>
            <p className="mt-3 text-gray-700 max-w-3xl">
              High-intent “sign PDF” queries usually come from contracts, forms, approvals, and mobile signing needs.
              These are the most common use cases.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {useCases.map((u) => (
                <div key={u.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <p className="font-semibold text-gray-900">{u.title}</p>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{u.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST + CLARITY */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900">Electronic vs digital signatures (quick clarity)</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              This tool adds an <strong>electronic signature</strong> (a visual signature placed on the PDF). A{" "}
              <strong>digital signature</strong> is certificate-based and cryptographic (often used in regulated workflows).
            </p>

            <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-gray-900 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-blue-600" aria-hidden="true" /> Best practice
              </p>
              <p className="mt-2 text-gray-700">
                If your organization requests a certificate-based digital signature, confirm the requirement first.
                For most everyday contracts and forms, an electronic signature is the expected workflow.
              </p>
            </div>

            <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" aria-hidden="true" /> Privacy note
              </p>
              <p className="mt-2 text-gray-700">
                By default, signing runs locally in your browser. If any feature requires an upload, the UI should clearly indicate it.
                See{" "}
                <a href="/privacy/" className="text-blue-600 underline hover:text-blue-800">
                  Privacy Policy
                </a>{" "}
                for details.
              </p>
            </div>
          </div>
        </section>

        {/* TROUBLESHOOTING */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Wrench className="h-6 w-6" aria-hidden="true" /> Troubleshooting
            </h2>
            <p className="mt-3 text-gray-700">
              If something looks off after signing, these fixes solve most issues quickly.
            </p>

            <div className="mt-8 space-y-4">
              {troubleshooting.map((t) => (
                <div key={t.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <p className="font-semibold text-gray-900">{t.title}</p>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{t.body}</p>
                  {t.title.includes("file too large") && (
                    <p className="mt-3 text-sm text-gray-700">
                      Try{" "}
                      <a className="text-blue-600 underline hover:text-blue-800" href="/compress-pdf/">
                        Compress PDF
                      </a>{" "}
                      after signing.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-gray-50" aria-label="Sign PDF FAQs">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900">Sign PDF — FAQs</h2>

            <div className="mt-6 space-y-4">
              {faqs.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-gray-200 p-5 open:shadow-sm transition"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                    <span className="font-semibold text-gray-900">{item.q}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    {item.a}
                    {item.q === "Why is my signed PDF still large?" && (
                      <>
                        {" "}
                        <a className="text-blue-600 underline hover:text-blue-800" href="/compress-pdf/">
                          Compress PDF
                        </a>
                        .
                      </>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <LinkIcon className="h-5 w-5" aria-hidden="true" />
              Related PDF tools
            </h2>
            <p className="text-gray-700 mb-4">
              Before or after signing, these tools help you complete the full workflow:
            </p>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
              <li><a href="/edit-pdf/" className="underline hover:text-blue-900">Edit PDF</a></li>
              <li><a href="/add-image-pdf/" className="underline hover:text-blue-900">Add image / logo to PDF</a></li>
              <li><a href="/merge-pdf/" className="underline hover:text-blue-900">Merge PDFs</a></li>
              <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split / extract pages</a></li>
              <li><a href="/compress-pdf/" className="underline hover:text-blue-900">Compress PDF</a></li>
              <li><a href="/ocr/" className="underline hover:text-blue-900">OCR scanned PDF</a></li>
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to sign your PDF?</h2>
            <p className="mt-3 text-slate-200">Upload → sign → download. Free, watermark-free, and no signup.</p>
            <a
              href="#sign-start"
              className="mt-7 inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold shadow hover:bg-slate-100 transition"
            >
              <Download className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <span>Upload PDF to Sign</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
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

export default { Page: SignPDF };
