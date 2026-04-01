// pages/pdf-to-image/index.page.server.jsx
// canonical handled centrally

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Convert PDF to Image Online (Free)",
  description: "Export PDF pages as JPG/PNG — no signup.",
  totalTime: "PT1M",
  step: [
    { "@type": "HowToStep", name: "Upload PDF", text: "Open the Free PDF Editor and drop your PDF.", url: "https://pdffreeeditor.com/pdf-to-image/#step-upload" },
    { "@type": "HowToStep", name: "Choose format", text: "Pick JPG or PNG and quality.", url: "https://pdffreeeditor.com/pdf-to-image/#step-choose" },
    { "@type": "HowToStep", name: "Download images", text: "Export and download instantly.", url: "https://pdffreeeditor.com/pdf-to-image/#step-download" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is the PDF to Image converter free?", acceptedAnswer: { "@type": "Answer", text: "Yes—100% free, no login, and no watermark." } },
    { "@type": "Question", name: "Which image formats are supported?", acceptedAnswer: { "@type": "Answer", text: "Export JPG or PNG with selectable quality where available." } },
    { "@type": "Question", name: "Is my file secure?", acceptedAnswer: { "@type": "Answer", text: "Yes. Conversion runs in your browser where possible so files stay on your device." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pdffreeeditor.com/" },
    { "@type": "ListItem", position: 2, name: "PDF to Image", item: "https://pdffreeeditor.com/pdf-to-image/" },
  ],
};

export const seo = {
  title: "PDF to Image Converter (Free) — PDF to JPG/PNG Online",
  description: "Convert PDF pages to images (JPG/PNG) online for free. No signup, no watermark. Fast export and instant download.",
  
  structuredData: [howToSchema, faqSchema, breadcrumbSchema],};



