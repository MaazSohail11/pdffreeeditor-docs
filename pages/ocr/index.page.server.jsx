// pages/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
    { "@type": "ListItem", position: 3, name: "OCR", item: `${base}/ocr/` },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TechRex OCR — Online OCR Tools",
  url: `${base}/ocr/`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0" },
  logo: `${base}/logo.png`,
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to extract text with OCR (PDFs & images)",
  description:
    "Upload a scanned PDF or image, choose the correct language for better accuracy, run OCR, then download searchable output or copy extracted text.",
  totalTime: "PT2M",
  tool: ["Web browser", "TechRex OCR Tool"],
  step: [
    {
      "@type": "HowToStep",
      url: `${base}/ocr/#step-upload`,
      name: "Upload a PDF or image",
      text:
        "Upload a scanned PDF, screenshot, photo, or image document. If the PDF is long, split it first so you OCR only the pages you need.",
    },
    {
      "@type": "HowToStep",
      url: `${base}/ocr/#step-language`,
      name: "Choose the correct language",
      text:
        "Select the language that matches your document to improve OCR accuracy, especially accents and special characters.",
    },
    {
      "@type": "HowToStep",
      url: `${base}/ocr/#step-download`,
      name: "Run OCR and get searchable output",
      text:
        "Run OCR, then download searchable output or copy the extracted text for reuse.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is OCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "OCR (Optical Character Recognition) converts text inside scanned images or scanned PDFs into machine-readable text so you can search, select, and copy it.",
      },
    },
    {
      "@type": "Question",
      name: "Why doesn’t Ctrl+F work in my PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Most of the time the PDF is scanned (image-only) and contains no real text layer. OCR adds an invisible text layer so Ctrl+F can find words.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make a scanned PDF searchable?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Run OCR on the PDF. OCR creates a hidden text overlay under the scanned image so the PDF becomes searchable and selectable.",
      },
    },
    {
      "@type": "Question",
      name: "Should I choose a language for OCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "If available, choosing the correct language often improves OCR accuracy, especially accents and special characters.",
      },
    },
    {
      "@type": "Question",
      name: "What if my PDF is too long?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Split the PDF into smaller files and OCR only the pages you need. This also speeds up processing and helps avoid page limits.",
      },
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TechRex OCR pages",
  itemListElement: [
    { "@type": "ListItem", position: 1, url: `${base}/ocr-pdf/` },
    { "@type": "ListItem", position: 2, url: `${base}/make-pdf-searchable/` },
    { "@type": "ListItem", position: 3, url: `${base}/pdf-to-text/` },
    { "@type": "ListItem", position: 4, url: `${base}/pdf-to-word-ocr/` },
    { "@type": "ListItem", position: 5, url: `${base}/pdf-to-excel-ocr/` },
    { "@type": "ListItem", position: 6, url: `${base}/image-to-text/` },
    { "@type": "ListItem", position: 7, url: `${base}/jpg-to-text/` },
    { "@type": "ListItem", position: 8, url: `${base}/png-to-text/` },
    { "@type": "ListItem", position: 9, url: `${base}/photo-to-text/` },
    { "@type": "ListItem", position: 10, url: `${base}/screenshot-to-text/` },
    { "@type": "ListItem", position: 11, url: `${base}/languages/` },
    { "@type": "ListItem", position: 12, url: `${base}/ocr-french/` },
    { "@type": "ListItem", position: 13, url: `${base}/ocr-spanish/` },
    { "@type": "ListItem", position: 14, url: `${base}/ocr-german/` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Online OCR — Extract Text from PDFs & Images",
  description:
    "Free online OCR to extract text from scanned PDFs, images, photos, and screenshots. Make scanned PDFs searchable, copy text, choose language for accuracy, and download searchable output.",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/ocr/` },
  author: { "@type": "Organization", name: "TechRex" },
  publisher: {
    "@type": "Organization",
    name: "TechRex",
    logo: { "@type": "ImageObject", url: `${base}/logo.png` },
  },
};

export const seo = {
  title: "Online OCR — Extract Text from PDFs & Images (Free)",
  description:
    "Free online OCR to extract text from scanned PDFs and images. Make PDFs searchable (Ctrl+F works), copy/select text, convert scans to Word/Excel, and choose language for better accuracy.",
  canonical: `${base}/ocr/`,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/ocr/`,
    title: "Online OCR — Extract Text from PDFs & Images",
    description:
      "Extract text from scanned PDFs and images. Make documents searchable, copy text, choose language for better accuracy, and download searchable output.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Online OCR — Extract Text from PDFs & Images",
    description:
      "Free OCR for scanned PDFs, images, photos, and screenshots. Make PDFs searchable and copy text instantly.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  hreflang: [
    { lang: "en", url: `${base}/ocr/` },
    { lang: "x-default", url: `${base}/ocr/` },
  ],
  structuredData: [
    breadcrumbSchema,
    webAppSchema,
    howToSchema,
    faqSchema,
    itemListSchema,
    articleSchema,
  ],
};
