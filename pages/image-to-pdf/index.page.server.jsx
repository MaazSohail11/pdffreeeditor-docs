// pages/image-to-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/image-to-pdf/#howto`,
  name: "Convert Images (JPG/PNG) to PDF Online for Free",
  description:
    "Upload JPG, JPEG, or PNG images and convert them to a single PDF online. No signup, no watermark, and instant download.",
  totalTime: "PT1M",
  tool: ["Web browser", "TechRex Free PDF Editor"],
  step: [
    {
      "@type": "HowToStep",
      name: "Upload images",
      text: "Open the Image to PDF converter and drop your JPG, JPEG, or PNG files.",
      url: `${base}/image-to-pdf/#step-upload`
    },
    {
      "@type": "HowToStep",
      name: "Arrange pages",
      text: "Reorder, rotate, or resize images if needed so they appear correctly in the PDF.",
      url: `${base}/image-to-pdf/#step-review`
    },
    {
      "@type": "HowToStep",
      name: "Download PDF",
      text: "Export as a single PDF with one click and download instantly without watermarks.",
      url: `${base}/image-to-pdf/#step-download`
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Image to PDF converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The Image to PDF converter is 100% free with no signup, no trial, and no watermark added to your exported PDFs."
      }
    },
    {
      "@type": "Question",
      name: "Which image formats can I convert to PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You can upload JPG, JPEG, and PNG images. These common formats from phones and cameras can all be combined into a single PDF."
      }
    },
    {
      "@type": "Question",
      name: "Can I combine multiple images into one PDF file?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can upload multiple images, arrange their order, and convert them into a single multi-page PDF for easier sharing and uploading."
      }
    },
    {
      "@type": "Question",
      name: "Is it safe to convert photos of documents or IDs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Where possible, conversion runs locally in your browser so images stay on your device. For any required network processing, files are transmitted over encrypted TLS connections and are not stored permanently."
      }
    },
    {
      "@type": "Question",
      name: "Does the Image to PDF converter work on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The converter works on iPhone, Android, tablets, and desktop in modern browsers like Safari, Chrome, Edge, and Firefox."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "Image to PDF", item: `${base}/image-to-pdf/` }
  ]
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/image-to-pdf/#app`,
  name: "Image to PDF Converter — TechRex Free PDF Editor",
  url: `${base}/image-to-pdf/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Free online Image to PDF converter. Turn JPG, JPEG, PNG, and photos into a single PDF. Combine multiple images, reorder pages, and download instantly with no signup and no watermark.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

export const seo = {
  // Target head terms: Image to PDF, JPG to PDF, PNG to PDF
  title: "Image to PDF Converter (Free) — JPG/PNG to PDF Online (No Signup)",
  description:
    "Convert images (JPG, JPEG, PNG, photos, and scans) to PDF online for free. Combine multiple images into a single PDF. No signup, no watermark, instant download.",
  canonical: `${base}/image-to-pdf/`,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/image-to-pdf/`,
    title: "Image to PDF Converter — Free JPG/PNG to PDF Online",
    description:
      "Turn JPG, JPEG, and PNG images into a single PDF in seconds. Free, private, and watermark-free.",
    image: `${base}/fpe-og-1200x630.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image to PDF Converter — JPG/PNG to PDF",
    description:
    "Upload photos or scans and download a PDF instantly. No login and no watermark.",
    image: `${base}/fpe-og-1200x630.png`
  },
  hreflang: [
    { lang: "en", url: `${base}/image-to-pdf/` },
    { lang: "x-default", url: `${base}/image-to-pdf/` }
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema]
};
