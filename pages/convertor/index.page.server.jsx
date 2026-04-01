// pages/convertor/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/convertor/#howto`,
  name: "How to convert documents online (free, no signup)",
  description:
    "Upload Word, Excel, PowerPoint, images, or PDF, choose an output format, and download instantly — no signup or watermark.",
  totalTime: "PT1M",
  tool: ["Web browser", "TechRex Free PDF Editor"],
  step: [
    {
      "@type": "HowToStep",
      url: `${base}/convertor/#step-upload`,
      name: "Upload your document",
      text:
        "Drop or choose a file in the converter. Supported formats include DOC/DOCX, PPT/PPTX, XLS/XLSX, CSV, PDF, JPG, and PNG.",
    },
    {
      "@type": "HowToStep",
      url: `${base}/convertor/#step-select`,
      name: "Choose format",
      text:
        "Pick PDF, Word (DOCX), PowerPoint (PPTX), or Excel (XLSX) as your output format.",
    },
    {
      "@type": "HowToStep",
      url: `${base}/convertor/#step-download`,
      name: "Convert and download",
      text:
        "Click Convert & Download to get your file instantly. No signup, no watermark on the exported document.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert Word to PDF online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Open the online document converter, upload your DOC or DOCX file, choose PDF as the output format, and click Convert & Download. The service preserves layout and fonts as much as possible and gives you a clean PDF with no watermark.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert PDF to Word, Excel, or PowerPoint?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Upload your PDF, select Word (DOCX), Excel (XLSX), or PowerPoint (PPTX), and run the conversion. The output files are editable in Microsoft 365 or compatible apps and are exported without watermarks.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an image to PDF converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can upload JPG or PNG images and choose PDF as the target format to create a single PDF from photos. For more layout options, you can also use the dedicated Image to PDF tool.",
      },
    },
    {
      "@type": "Question",
      name: "Is this converter really free and without watermark?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The online document converter is free to use with no account requirement, no trial limitations, and no watermarks added to your converted files.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to convert my documents online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Conversion requests are sent over encrypted TLS connections and files are used only for processing your conversion. You do not need to log in or create an account. For highly confidential information, always follow your organization’s security policies.",
      },
    },
    {
      "@type": "Question",
      name: "Which formats are supported by the document converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You can upload common document and image formats such as DOC, DOCX, PPT, PPTX, XLS, XLSX, CSV, PDF, JPG, and PNG. You can export to PDF, Word (DOCX), PowerPoint (PPTX), or Excel (XLSX).",
      },
    },
    {
      "@type": "Question",
      name: "Will the converter keep my formatting?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The converter is designed to preserve layout, fonts, images, and tables as closely as possible, especially when converting Office documents to PDF. For very complex layouts or scanned documents, you may need light manual adjustments after conversion.",
      },
    },
    {
      "@type": "Question",
      name: "Does the converter work on Mac, Windows, iPhone, and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The document converter runs in the browser, so it works on macOS, Windows, Linux, iOS, and Android as long as you have a modern browser like Chrome, Safari, Edge, or Firefox.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Document Converter",
      item: `${base}/convertor/`,
    },
  ],
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/convertor/#app`,
  name: "Online Document Converter — Free PDF Editor by TechRex",
  url: `${base}/convertor/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  alternateName: [
    "Online PDF converter",
    "Word to PDF converter",
    "PDF to Word converter",
  ],
};

export const seo = {
  // Focused on “online document converter / PDF converter” + mid-tail variants
  title:
    "Online Document Converter — Convert to PDF, Word, PowerPoint, or Excel (Free)",
  description:
    "Convert Word, Excel, PowerPoint, images, and PDFs online. Word ⇄ PDF, PDF ⇄ Word, PDF ⇄ Excel, image to PDF and more. 100% free, no signup, no watermark. Fast, secure, and mobile-friendly.",
  canonical: `${base}/convertor/`,
  robots:
    "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/convertor/`,
    title: "Online Document Converter — PDF, Word, PPTX, Excel",
    description:
      "Convert DOCX, PPTX, XLSX, PDF, and images with a free online document converter. No signup, no watermark, private and fast.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert to PDF, Word, PowerPoint, or Excel — Free & Online",
    description:
      "Upload a document and download it as PDF, DOCX, PPTX, or XLSX. Free, secure, and works in any browser.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  hreflang: [
    { lang: "en", url: `${base}/convertor/` },
    { lang: "x-default", url: `${base}/convertor/` },
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema],
};
