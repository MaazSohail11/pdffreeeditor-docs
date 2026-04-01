// pages/pdf-to-word/index.page.server.jsx
// canonical usually handled centrally; we still provide the literal URL with trailing slash for safety.

const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/pdf-to-word/#howto`,
  name: "Convert PDF to Word Online (Free, No Signup)",
  description:
    "Step-by-step instructions to convert PDF to editable Word (DOCX) online for free. No signup, no email, and no watermark.",
  totalTime: "PT1M",
  tool: ["Web browser", "PDF Free Editor"],
  step: [
    {
      "@type": "HowToStep",
      name: "Upload PDF",
      text: "Open the Free PDF Editor and drop your PDF file or click to choose it.",
      url: `${base}/pdf-to-word/#step-upload`,
    },
    {
      "@type": "HowToStep",
      name: "Review text and layout",
      text: "Check pages, headings, and paragraphs and make quick edits if needed.",
      url: `${base}/pdf-to-word/#step-review`,
    },
    {
      "@type": "HowToStep",
      name: "Download DOCX",
      text: "Export as Word (.docx) and download your fully editable document instantly.",
      url: `${base}/pdf-to-word/#step-download`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the PDF to Word converter really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes—PDF Free Editor’s PDF to Word converter is 100% free to use with no signup, no email gate, and no watermark on your downloads.",
      },
    },
    {
      "@type": "Question",
      name: "Will the Word file be editable?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. For most digital PDFs, the output is an editable DOCX file where you can change text, paragraphs, and basic formatting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support both DOC and DOCX?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The converter exports to DOCX, which opens in modern Microsoft Word, Google Docs, and other office suites. You can save as DOC inside Word if you need the older format.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to convert PDFs to Word online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Where possible, conversion runs in your browser using client-side processing so your files stay on your device. Avoid converting sensitive documents on shared or public devices.",
      },
    },
    {
      "@type": "Question",
      name: "What about scanned PDFs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Scanned PDFs can be converted, but depending on how the file was created, some text may be stored as images. For best results, use the original digital document when possible.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit the PDF directly without converting to Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. If you only need small changes, you can use the Edit PDF tool to adjust text, add images, or sign directly in the PDF before downloading.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "PDF to Word", item: `${base}/pdf-to-word/` },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/pdf-to-word/#app`,
  name: "PDF to Word Converter — PDF Free Editor",
  url: `${base}/pdf-to-word/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Convert PDF to editable Word (DOC/DOCX) online for free. No signup, no watermark, and instant download.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export const seo = {
  // Strong, keyword-rich title aimed at human CTR + search intent
  title: "PDF to Word Converter (Free) — Convert PDF to DOC/DOCX Online",
  description:
    "Convert PDF to Word online for free. Turn PDFs into editable DOC/DOCX documents in seconds — no signup, no email, and no watermark. Fast, private PDF to Word converter that works on any device.",
  canonical: `${base}/pdf-to-word/`,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/pdf-to-word/`,
    title: "PDF to Word Converter — Free Online Tool (No Signup)",
    description:
      "Upload a PDF and download an editable Word document (DOCX) instantly. No watermark, no email required.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PDF to Word Online — Free & Private",
    description:
      "Use PDF Free Editor to turn PDFs into editable Word files in seconds. 100% free, with no signup and no watermark.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  hreflang: [
    { lang: "en", url: `${base}/pdf-to-word/` },
    { lang: "x-default", url: `${base}/pdf-to-word/` },
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema],
};
