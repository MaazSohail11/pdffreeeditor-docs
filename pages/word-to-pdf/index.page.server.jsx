// pages/word-to-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/word-to-pdf/#howto`,
  name: "Convert Word to PDF Online (Free DOC/DOCX to PDF)",
  description:
    "Step-by-step guide to convert Word documents (DOC and DOCX) to PDF online for free with no signup or watermark.",
  totalTime: "PT1M",
  tool: ["Web browser", "TechRex Free PDF Editor"],
  step: [
    {
      "@type": "HowToStep",
      name: "Upload Word file",
      text: "Open the Word to PDF converter, click Choose Word File, and upload your DOC or DOCX document.",
      url: `${base}/word-to-pdf/#step-upload`
    },
    {
      "@type": "HowToStep",
      name: "Review and format (optional)",
      text: "Preview pages to make sure headings, tables, and images look right.",
      url: `${base}/word-to-pdf/#step-review`
    },
    {
      "@type": "HowToStep",
      name: "Download the PDF",
      text: "Click Convert & Download to export your Word file as a PDF instantly with no watermark.",
      url: `${base}/word-to-pdf/#step-download`
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Word to PDF converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The Word to PDF converter is 100% free with no signup, no trial, and no watermark added to your PDFs."
      }
    },
    {
      "@type": "Question",
      name: "Do you support both DOC and DOCX formats?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can upload older DOC files and modern DOCX documents and convert both to standard PDF format."
      }
    },
    {
      "@type": "Question",
      name: "Will the PDF keep the same layout as the Word document?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The converter is designed to preserve fonts, spacing, page breaks, and layout as closely as possible. For important documents like resumes or contracts, preview the PDF before sending."
      }
    },
    {
      "@type": "Question",
      name: "Is it safe to convert Word files online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Where possible, conversion is done in your browser so files stay on your device. For any required server-side processing, files are protected with TLS and are not stored permanently."
      }
    },
    {
      "@type": "Question",
      name: "Does the Word to PDF converter work on Mac, Windows, and mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can use it on Windows, macOS, Linux, iOS, and Android using any modern browser such as Chrome, Safari, Edge, or Firefox."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "Word to PDF", item: `${base}/word-to-pdf/` }
  ]
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/word-to-pdf/#app`,
  name: "Word to PDF Converter — TechRex Free PDF Editor",
  url: `${base}/word-to-pdf/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Online Word to PDF converter for DOC and DOCX files. Convert Word documents to PDF for free with no signup and no watermark.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

export const seo = {
  // Target head terms + variations: "Word to PDF", "DOCX to PDF", "online Word to PDF converter"
  title: "Word to PDF Converter — Free DOC/DOCX to PDF Online (No Signup)",
  description:
    "Convert Word documents (DOC & DOCX) to PDF online for free. No signup, no watermark, and instant download. Works on Windows, Mac, Linux, iPhone, and Android.",
  canonical: `${base}/word-to-pdf/`,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/word-to-pdf/`,
    title: "Word to PDF Converter — Free DOCX to PDF Online",
    description:
      "Upload a Word document and download a clean PDF copy in seconds. 100% free, no signup, no watermark.",
    image: `${base}/fpe-og-1200x630.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Word to PDF Converter — DOC/DOCX to PDF",
    description:
      "Convert Word (DOC/DOCX) to PDF online. Fast, privacy-friendly, and watermark-free.",
    image: `${base}/fpe-og-1200x630.png`
  },
  hreflang: [
    { lang: "en", url: `${base}/word-to-pdf/` },
    { lang: "x-default", url: `${base}/word-to-pdf/` }
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema]
};
