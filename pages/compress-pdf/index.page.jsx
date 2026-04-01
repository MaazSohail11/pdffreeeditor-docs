// pages/compress-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Gauge, Upload, CheckCircle2, Link as LinkIcon } from "lucide-react";
import CompressDropBox from "../../src/components/CompressDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function CompressPDF() {
  const base = "https://pdffreeeditor.com";
  const canonical = `${base}/compress-pdf/`;
  const ogImage = `${base}/og/compress-pdf.png`;

  const metaTitle = "Compress PDF Online Free – Reduce File Size | TechRex";
  const metaDescription =
    "Reduce PDF file size online for free. Compress PDF for email, website uploads, and storage. No signup, no watermark, and secure processing.";

  // Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
      { "@type": "ListItem", position: 3, name: "Compress PDF", item: canonical }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — Compress PDF",
    url: canonical,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to compress a PDF online",
    description: "Upload your PDF, choose a compression mode (Compact or Rasterize), and download the smaller PDF.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        url: `${canonical}#step-upload`,
        name: "Upload your PDF",
        text: "Drag & drop your PDF into the compressor or click to browse."
      },
      {
        "@type": "HowToStep",
        url: `${canonical}#step-choose`,
        name: "Choose a compression mode",
        text: "Use Compact to keep structure or Rasterize for maximum reduction."
      },
      {
        "@type": "HowToStep",
        url: `${canonical}#step-download`,
        name: "Download the smaller PDF",
        text: "Download the reduced PDF instantly without watermarks."
      }
    ]
  };

  const faqs = [
    {
      q: "How do I compress a PDF online for free?",
      a: "Open this Compress PDF tool, upload your file, choose Compact or Rasterize and download the smaller PDF. There is no signup, watermark or trial — it is free to use."
    },
    {
      q: "What’s the difference between Compact and Rasterize?",
      a: "Compact retains the original PDF structure so text and vector graphics stay crisp while images and metadata are optimized. Rasterize converts each page into an image for the smallest file size, which is ideal for strict upload limits."
    },
    {
      q: "Can I compress PDF to 500KB or 1MB?",
      a: "Yes. There is no fixed 500KB button, but you can use Rasterize and gradually lower quality or DPI until the output is close to the size requirement. For text-heavy files, Compact often reaches small sizes while keeping high quality."
    },
    {
      q: "Will compressing a PDF reduce quality?",
      a: "Compact mode is designed to reduce PDF size while maintaining readability and layout. Rasterize mode trades some quality for maximum size reduction. You can always try Compact first and only use Rasterize when necessary."
    },
    {
      q: "Is my PDF uploaded to your servers?",
      a: "Your PDF is sent over an encrypted TLS connection to our compression backend and Adobe PDF Services for processing. We recommend avoiding any online tool for extremely sensitive documents."
    },
    {
      q: "Can I compress PDFs on iPhone or Android?",
      a: "Yes. This PDF compressor works in modern mobile browsers like Safari and Chrome, so you can shrink PDFs on your phone or tablet without installing an app."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
  const benefits = [
    "Online PDF compressor — reduce PDF file size in seconds",
    "No signup, no watermark — always free to use",
    "Choose between Compact (retain-PDF) and Rasterize modes",
    "Great for email limits, online forms and website uploads",
    "Works on iPhone, Android, Mac and Windows",
  ];

  const reasons = [
    {
      title: "Email attachments and upload limits",
      body: "Many email providers and online forms reject large PDFs. Compressing your PDF makes it easier to send proposals, invoices, reports and scanned documents without hitting size limits.",
    },
    {
      title: "Faster sharing and downloads",
      body: "Smaller PDFs open faster on slow connections and mobile data. Compression is ideal for documents you share publicly or host on your website.",
    },
    {
      title: "Save storage space",
      body: "If you store a lot of PDFs, even a 50–80% reduction per file adds up. Compressing keeps your archive lighter without needing to delete anything.",
    },
    {
      title: "Better experience on mobile",
      body: "Compressed PDFs load quicker and scroll more smoothly on phones and tablets, especially if they contain a lot of images.",
    },
  ];

  return (
    <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TechRex Free PDF Editor" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Compress PDF PDF Online Free – TechRex" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Compress PDF PDF Online Free – TechRex" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Compress PDF Online Free
              <br />
              <span className="text-blue-600">
                PDF compressor to reduce file size fast
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-3">
              Use this free online PDF compressor to make large PDFs smaller
              for email, uploads and storage. Drag and drop, choose a
              compression mode and download a reduced PDF in seconds.
            </p>
            <p className="text-base text-gray-700 mb-8">
              No signup, no watermark and no software install — just a simple
              way to <strong>reduce PDF file size</strong> and keep your
              document ready to share.
            </p>

            <div className="flex flex-col gap-3 md:items-start items-center">
              <a
                href="#compress"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
              >
                <Upload className="h-5 w-5" aria-hidden="true" />
                <span>Start — Compress PDF</span>
              </a>

              <a
                href="#how-to"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
              >
                <FileText className="h-5 w-5" aria-hidden="true" />
                <span>How it works (3 steps)</span>
              </a>
            </div>

            {/* Trust bullets */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Free PDF compressor — no watermark",
                "Compress PDF to around 500KB or 1MB",
                "Reduce PDF file size for email and online forms",
                "Secure TLS upload; works on phone and desktop",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside
            className="hidden md:block"
            id="compress"
            aria-label="Compress PDF dropzone"
          >
            <CompressDropBox />
          </aside>
        </div>
      </section>

      {/* Main */}
      <main className="flex-1">
        {/* Why use our compressor */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why use this online PDF compressor?
              </h2>
              <p className="text-gray-700 mb-4">
                Many “compress PDF online” tools add watermarks, require signup
                or give you only one free use. This compressor focuses on{" "}
                <strong>simple, fast PDF size reduction</strong> with no
                friction.
              </p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="h-5 w-5 text-blue-600 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-6 text-center shadow">
              <Gauge
                className="h-16 w-16 text-blue-600 mx-auto mb-4"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Reliable PDF compression for everyday use
              </h3>
              <p className="text-gray-700 mb-2">
                Shrink file size while keeping your PDF format intact and ready
                to share. Great for contracts, brochures, scanned PDFs and more.
              </p>
              <p className="text-gray-700 mb-6">
                Files are sent over an encrypted TLS connection to our
                compression service, then your smaller PDF is downloaded
                automatically.
              </p>
              <a
                href="#compress"
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow inline-flex items-center gap-2 transition"
              >
                <Upload className="h-5 w-5" aria-hidden="true" />
                <span>Open Compressor</span>
              </a>
            </div>
          </div>
        </section>

        {/* Why compress a PDF */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Why compress a PDF?</h2>
            <p className="text-gray-700 mb-4">
              Compressing a PDF reduces its file size while keeping the content
              the same. It is one of the easiest ways to{" "}
              <strong>shrink PDF files</strong> so they are easier to send,
              store and open on any device.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-lg border p-4 shadow-sm"
                >
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keyword-targeted sections */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Compress PDF to 500KB / 1MB
              </h2>
              <p className="text-gray-700 mb-2">
                Many application portals and government forms ask you to{" "}
                <strong>compress PDF to 500KB</strong> or 1MB. There
                isn’t a single magic button, but you can get close by tuning the
                compression strength.
              </p>
              <p className="text-gray-700 text-sm">
                Start with Compact mode for good quality at a smaller size. If
                you still need a much smaller file, switch to Rasterize and
                lower the quality/DPI. Check the resulting file size and repeat
                until you reach the target requirement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Compress PDF without losing quality
              </h2>
              <p className="text-gray-700 mb-2">
                For presentations, CVs or official documents, you want to{" "}
                <strong>compress a PDF without losing quality</strong>. Use the
                Compact (retain-PDF) mode, which keeps fonts and vector graphics
                intact while re-encoding images and cleaning up unnecessary
                data.
              </p>
              <p className="text-gray-700 text-sm">
                Text remains sharp and logos stay crisp, so the document still
                looks professional while being significantly smaller.
              </p>
            </div>
          </div>
        </section>

        {/* Compression Targets & Use Cases */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Popular Compression Targets</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  By Use Case
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/compress-pdf-for-email/" className="group flex items-center gap-2">
                      <span className="text-blue-600 font-medium group-hover:underline">Compress PDF for Email</span>
                      <span className="text-gray-500 text-sm">(Outlook, Gmail limits)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/compress-pdf-for-portal-upload/" className="group flex items-center gap-2">
                      <span className="text-blue-600 font-medium group-hover:underline">Compress PDF for Portal Upload</span>
                      <span className="text-gray-500 text-sm">(Strict 1MB/2MB limits)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/compress-pdf-for-whatsapp/" className="group flex items-center gap-2">
                      <span className="text-blue-600 font-medium group-hover:underline">Compress PDF for WhatsApp</span>
                      <span className="text-gray-500 text-sm">(Fast mobile sharing)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-blue-600" />
                  By File Size
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="/compress-pdf-to-500kb/" className="p-2 rounded-lg hover:bg-blue-50 text-blue-700 font-medium transition">
                    Compress to 500KB
                  </a>
                  <a href="/compress-pdf-to-1mb/" className="p-2 rounded-lg hover:bg-blue-50 text-blue-700 font-medium transition">
                    Compress to 1MB
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How-to section (anchors for schema) */}
        <section id="how-to" className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">
              How to compress a PDF online (3 steps)
            </h2>
            <ol className="space-y-6 list-decimal ml-6 text-gray-700">
              <li id="step-upload">
                <h3 className="font-semibold">1) Upload your PDF</h3>
                <p className="text-gray-700">
                  Drag &amp; drop your PDF into the compressor or click to
                  browse your files. Large PDFs may take a moment to upload over
                  an encrypted TLS connection.
                </p>
              </li>
              <li id="step-choose">
                <h3 className="font-semibold">
                  2) Choose a compression mode (Compact or Rasterize)
                </h3>
                <p className="text-gray-700">
                  Use <strong>Compact</strong> to keep the PDF structure, sharp
                  text and vector graphics while reducing file size. Use{" "}
                  <strong>Rasterize</strong> when you need the smallest possible
                  file, converting each page to an image at your chosen
                  quality/DPI.
                </p>
              </li>
              <li id="step-download">
                <h3 className="font-semibold">3) Download the smaller PDF</h3>
                <p className="text-gray-700">
                  When compression finishes, download your reduced PDF
                  instantly. You get a clean file with no watermark and no
                  signup required.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Inline compressor on small screens */}
        <section
          className="py-12 bg-white md:hidden"
          id="compress-inline"
          aria-label="Compress PDF dropzone (mobile)"
        >
          <div className="max-w-4xl mx-auto px-6">
            <CompressDropBox />
          </div>
        </section>

        {/* FAQ visible on page */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Compress PDF — FAQs</h2>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <details
                  key={i}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <summary className="font-semibold cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-gray-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related tools */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <LinkIcon className="h-5 w-5" />
              More free PDF tools
            </h2>
            <p className="text-gray-700 mb-3">
              After you compress your PDF, you can keep working with these
              tools:
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
              <li>
                <a href="/edit-pdf/" className="underline hover:text-blue-900">
                  Edit PDF text online
                </a>
              </li>
              <li>
                <a
                  href="/annotate-pdf/"
                  className="underline hover:text-blue-900"
                >
                  Annotate &amp; highlight PDF
                </a>
              </li>
              <li>
                <a
                  href="/add-image-pdf/"
                  className="underline hover:text-blue-900"
                >
                  Add image to PDF
                </a>
              </li>
              <li>
                <a href="/sign-pdf/" className="underline hover:text-blue-900">
                  Sign PDF online
                </a>
              </li>
              <li>
                <a href="/merge-pdf/" className="underline hover:text-blue-900">
                  Merge PDF files
                </a>
              </li>
              <li>
                <a href="/split-pdf/" className="underline hover:text-blue-900">
                  Split PDF pages
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © {new Date().getFullYear()} Free PDF Editor by TechRex. All rights
          reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/privacy/" className="hover:text-white">
            Privacy
          </a>
          <a href="/terms/" className="hover:text-white">
            Terms
          </a>
          <a href="/contact/" className="hover:text-white">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default { Page: CompressPDF };
