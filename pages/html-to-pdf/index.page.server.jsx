// pages/html-to-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/html-to-pdf/#howto`,
  name: "Convert HTML to PDF Online (Free)",
  description:
    "Turn HTML content or webpages into PDF instantly with no signup. Paste or import HTML, preview, and download a static PDF.",
  totalTime: "PT1M",
  tool: ["Web browser", "TechRex Free PDF Editor"],
  step: [
    {
      "@type": "HowToStep",
      name: "Open the HTML to PDF converter",
      text: "Open the Free PDF Editor HTML to PDF tool in your browser.",
      url: `${base}/html-to-pdf/#step-open`
    },
    {
      "@type": "HowToStep",
      name: "Add HTML content",
      text: "Paste or import your HTML content, then preview the layout and styling.",
      url: `${base}/html-to-pdf/#step-add`
    },
    {
      "@type": "HowToStep",
      name: "Export and download PDF",
      text: "Export as PDF with one click and download instantly with no watermark.",
      url: `${base}/html-to-pdf/#step-export`
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the HTML to PDF converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The HTML to PDF converter is 100% free to use with no login, no trial, and no watermark added to your downloads."
      }
    },
    {
      "@type": "Question",
      name: "Does the converter keep my CSS styling and fonts?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Basic CSS styling is preserved so headings, paragraphs, lists, and simple layouts convert cleanly to PDF. You can preview the PDF and adjust the source HTML/CSS if needed."
      }
    },
    {
      "@type": "Question",
      name: "Is my HTML content secure when I convert it to PDF online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Where possible, the conversion runs locally in your browser so the HTML stays on your device. For any required network requests, data is transmitted over encrypted HTTPS/TLS connections."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "HTML to PDF", item: `${base}/html-to-pdf/` }
  ]
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/html-to-pdf/#app`,
  name: "HTML to PDF Converter — TechRex Free PDF Editor",
  url: `${base}/html-to-pdf/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Free online HTML to PDF converter. Turn HTML files, web pages, and snippets into static PDF documents. No signup, no watermark, instant download.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

export const seo = {
  // Target head terms: HTML to PDF, webpage to PDF, online converter
  title: "HTML to PDF Converter (Free) — Webpage to PDF Online (No Signup)",
  description:
    "Convert HTML pages, snippets, and web content to PDF online for free. No signup, no watermark. Clean HTML to PDF converter with instant download.",
  canonical: `${base}/html-to-pdf/`,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/html-to-pdf/`,
    title: "HTML to PDF Converter — Free Webpage to PDF Tool",
    description:
      "Turn HTML content and webpages into static PDFs in seconds. Free, private, and watermark-free.",
    image: `${base}/fpe-og-1200x630.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HTML to PDF Converter — Webpage to PDF Online",
    description:
      "Upload or paste HTML and download a PDF instantly. No login, no watermark.",
    image: `${base}/fpe-og-1200x630.png`
  },
  hreflang: [
    { lang: "en", url: `${base}/html-to-pdf/` },
    { lang: "x-default", url: `${base}/html-to-pdf/` }
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema]
};
