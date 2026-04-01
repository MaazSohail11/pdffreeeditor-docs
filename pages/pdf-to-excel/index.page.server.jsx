// pages/pdf-to-excel/index.page.server.jsx
// canonical handled centrally

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Convert PDF to Excel/CSV Online (Free)",
  description: "Extract tables from PDF into XLSX/CSV—no signup.",
  totalTime: "PT1M",
  step: [
    { "@type": "HowToStep", name: "Upload PDF", text: "Open the Free PDF Editor and drop your PDF.", url: "https://pdffreeeditor.com/pdf-to-excel/#step-upload" },
    { "@type": "HowToStep", name: "Review tables", text: "Check detected tables and columns.", url: "https://pdffreeeditor.com/pdf-to-excel/#step-review" },
    { "@type": "HowToStep", name: "Download XLSX/CSV", text: "Export as Excel or CSV and download.", url: "https://pdffreeeditor.com/pdf-to-excel/#step-download" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is the PDF to Excel/CSV converter free?", acceptedAnswer: { "@type": "Answer", text: "Yes—100% free, no login, and no watermark." } },
    { "@type": "Question", name: "How accurate is table extraction?", acceptedAnswer: { "@type": "Answer", text: "We aim for high accuracy. Verify detected tables in the preview before exporting." } },
    { "@type": "Question", name: "Is my data secure?", acceptedAnswer: { "@type": "Answer", text: "Yes. Where possible, conversion runs in your browser so files stay on your device." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pdffreeeditor.com/" },
    { "@type": "ListItem", position: 2, name: "PDF to Excel/CSV", item: "https://pdffreeeditor.com/pdf-to-excel/" },
  ],
};

export const seo = {
  title: "PDF to Excel/CSV Converter (Free) — Extract Tables Online",
  description: "Convert PDF to Excel (XLSX) or CSV online for free. No signup, no watermark. Accurate table extraction with instant download.",
  
  structuredData: [howToSchema, faqSchema, breadcrumbSchema],};



