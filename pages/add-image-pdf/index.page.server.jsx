// pages/add-image-pdf/index.page.server.jsx

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to add an image to a PDF online (free, no signup)",
  description:
    "Upload a PDF, insert a PNG/JPG/WebP image, position it, and download instantly — all in your browser.",
  totalTime: "PT2M",
  tool: ["Web browser", "PDF Free Editor"],
  step: [
    { "@type": "HowToStep", url: "https://pdffreeeditor.com/add-image-pdf/#step-upload", name: "Upload your PDF", text: "Click Start or drag-and-drop your PDF. The file is processed locally in your browser." },
    { "@type": "HowToStep", url: "https://pdffreeeditor.com/add-image-pdf/#step-insert", name: "Insert your image", text: "Choose Image, select a PNG/JPG/WebP, then drag to position. Use corner handles to resize or rotate." },
    { "@type": "HowToStep", url: "https://pdffreeeditor.com/add-image-pdf/#step-download", name: "Download your updated PDF", text: "Click Download to save your new PDF. No watermark, no signup required." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I add an image to a PDF for free?", acceptedAnswer: { "@type": "Answer", text: "Open the Add Image tool, upload your PDF, insert a PNG/JPG/WebP, position it, and download instantly. 100% free, no watermark." } },
    { "@type": "Question", name: "Is my PDF uploaded to your servers?", acceptedAnswer: { "@type": "Answer", text: "No. Editing happens in your browser using client-side processing. Your files do not leave your device unless you choose to share or store them elsewhere." } },
    { "@type": "Question", name: "Can I add a logo or stamp to multiple pages?", acceptedAnswer: { "@type": "Answer", text: "Yes, you can insert a logo or stamp on any page. Add it to each page where you want it to appear, then download the result." } },
    { "@type": "Question", name: "What image formats are supported?", acceptedAnswer: { "@type": "Answer", text: "Common formats like PNG, JPG/JPEG, and WebP are supported. Transparent PNGs are ideal for logos or stamps." } },
    { "@type": "Question", name: "Does this work on mobile?", acceptedAnswer: { "@type": "Answer", text: "Yes. You can add images to PDFs on iPhone or Android using your mobile browser." } },
    { "@type": "Question", name: "Will there be any watermark?", acceptedAnswer: { "@type": "Answer", text: "No. The resulting PDF has no watermark. The tool is free and does not require signup." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pdffreeeditor.com/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://pdffreeeditor.com/tools/" },
    { "@type": "ListItem", position: 3, name: "Add Image to PDF", item: "https://pdffreeeditor.com/add-image-pdf/" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PDF Free Editor",
  url: "https://pdffreeeditor.com/",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0" }
};

export const prerender = false;

export const seo = {
  title: "Add Image to PDF Online — Free, No Signup, No Watermark",
  description:
    "Add images, logos, or stamps to your PDF in your browser — 100% free, no signup, no watermark. Private: files stay on your device.",
  canonical: "https://pdffreeeditor.com/add-image-pdf/",
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema],
};

