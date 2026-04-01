// pages/pdf-to-html/index.page.server.jsx
// canonical handled centrally

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Convert PDF to HTML Online (Free)",
  description: "Turn PDFs into HTML snippets or pages—no signup.",
  totalTime: "PT1M",
  step: [
    { "@type": "HowToStep", name: "Upload PDF", text: "Open the Free PDF Editor and drop your PDF.", url: "https://pdffreeeditor.com/pdf-to-html/#step-upload" },
    { "@type": "HowToStep", name: "Review content", text: "Check text and images.", url: "https://pdffreeeditor.com/pdf-to-html/#step-review" },
    { "@type": "HowToStep", name: "Export HTML", text: "Download your HTML instantly.", url: "https://pdffreeeditor.com/pdf-to-html/#step-download" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is the PDF to HTML converter free?", acceptedAnswer: { "@type": "Answer", text: "Yes—100% free, no login, and no watermark." } },
    { "@type": "Question", name: "Will the HTML be clean and reusable?", acceptedAnswer: { "@type": "Answer", text: "We aim for readable HTML that you can paste into blogs or docs. Review before publishing." } },
    { "@type": "Question", name: "Is my file secure?", acceptedAnswer: { "@type": "Answer", text: "Yes. Where possible, conversion runs in your browser so your file stays on your device." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pdffreeeditor.com/" },
    { "@type": "ListItem", position: 2, name: "PDF to HTML", item: "https://pdffreeeditor.com/pdf-to-html/" },
  ],
};

export const seo = {
  title: "PDF to HTML Converter (Free) — Extract Web Content Online",
  description: "Convert PDF to HTML online for free. No signup, no watermark. Extract text and images with instant download.",
  
  structuredData: [howToSchema, faqSchema, breadcrumbSchema],};



