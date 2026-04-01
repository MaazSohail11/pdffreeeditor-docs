// pages/index.page.server.jsx

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PDF Free Editor",
  url: "https://pdffreeeditor.com/",
  logo: "https://pdffreeeditor.com/logo.png",
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free PDF Editor",
  url: "https://pdffreeeditor.com/",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  description:
    "Edit, merge, split, sign, compress, annotate, and convert PDFs online. 100% free, no signup, no watermark. Client-side processing for privacy.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const toolsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free PDF Tools",
  itemListElement: [
    { "@type": "ListItem", position: 1, url: "https://pdffreeeditor.com/edit-pdf/", name: "Edit PDF text (free, no signup)" },
    { "@type": "ListItem", position: 2, url: "https://pdffreeeditor.com/compress-pdf/", name: "Compress PDF (reduce file size)" },
    { "@type": "ListItem", position: 3, url: "https://pdffreeeditor.com/merge-pdf/", name: "Merge PDF (combine files)" },
    { "@type": "ListItem", position: 4, url: "https://pdffreeeditor.com/split-pdf/", name: "Split PDF (extract pages)" },
    { "@type": "ListItem", position: 5, url: "https://pdffreeeditor.com/sign-pdf/", name: "Sign PDF online (draw/type/upload)" },
    { "@type": "ListItem", position: 6, url: "https://pdffreeeditor.com/annotate-pdf/", name: "Annotate PDF (highlight and comments)" },
    { "@type": "ListItem", position: 7, url: "https://pdffreeeditor.com/convertor/", name: "PDF converters (PDF to Word, image to PDF, etc.)" },
    { "@type": "ListItem", position: 8, url: "https://pdffreeeditor.com/ocr/", name: "OCR PDF (make scanned PDFs searchable)" },
    { "@type": "ListItem", position: 9, url: "https://pdffreeeditor.com/editor/", name: "Open PDF Editor" },
  ],
};

const howToHomeSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to use the Free PDF Editor",
  description: "Edit, sign, compress, and modify PDFs directly in your browser in three steps.",
  totalTime: "PT2M",
  tool: ["Web browser", "PDF Free Editor"],
  step: [
    {
      "@type": "HowToStep",
      url: "https://pdffreeeditor.com/#step-open",
      name: "Open the editor & upload",
      text: "Open the editor and drag & drop your PDF.",
    },
    {
      "@type": "HowToStep",
      url: "https://pdffreeeditor.com/#step-edit",
      name: "Make changes",
      text: "Edit text, add a signature or images, compress, merge or split pages.",
    },
    {
      "@type": "HowToStep",
      url: "https://pdffreeeditor.com/#step-download",
      name: "Download — no watermark",
      text: "Export instantly. No signup, no watermark.",
    },
  ],
};

// MUST match visible FAQ on the page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you upload my PDF files to your servers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. By default, editing runs locally in your browser, so your files stay on your device. If a feature ever requires an upload, we clearly tell you before you start.",
      },
    },
    {
      "@type": "Question",
      name: "Is this PDF editor really free and watermark-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — you can edit and download without a watermark and without signing up.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit text inside a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes for PDFs that contain selectable text. If your PDF is scanned (image-based), you’ll need OCR to make the text selectable/editable.",
      },
    },
    {
      "@type": "Question",
      name: "Can I compress a PDF to 1MB or for email upload limits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — use the Compress PDF tool to reduce file size for email, portals, or forms. Results depend on images and how the PDF was created.",
      },
    },
    {
      "@type": "Question",
      name: "Can I split a PDF or delete/extract pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — use the Split PDF tool to extract pages or separate a file into parts.",
      },
    },
    {
      "@type": "Question",
      name: "Can I merge multiple PDFs into one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — use the Merge PDF tool to combine files and reorder pages.",
      },
    },
    {
      "@type": "Question",
      name: "Can I sign a PDF online (mobile too)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — sign PDFs on desktop or mobile and download instantly.",
      },
    },
    {
      "@type": "Question",
      name: "What file types do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF is supported, and common documents/images can be converted to PDF (Word, Excel, PowerPoint, JPG/PNG) via Converters.",
      },
    },
  ],
};

export const seo = {
  title: "Free PDF Editor Online — Edit, Sign, Merge (No Signup, No Watermark)",
  description:
    "A fast, free PDF editor that runs in your browser. Edit, sign, merge, split, compress, annotate, and add images. 100% free, no signup, no watermark. Files stay on your device.",
  canonical: "https://pdffreeeditor.com/",
  structuredData: [orgSchema, webAppSchema, toolsSchema, howToHomeSchema, faqSchema],
};
