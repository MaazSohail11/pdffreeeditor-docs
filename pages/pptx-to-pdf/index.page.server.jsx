// pages/pptx-to-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/pptx-to-pdf/#howto`,
  name: "Convert PPTX to PDF Online (Free PowerPoint to PDF)",
  description:
    "Upload a PowerPoint file (PPT or PPTX) and convert it to PDF online for free. No signup, no watermark, and instant download.",
  totalTime: "PT1M",
  tool: ["Web browser", "TechRex Free PDF Editor"],
  step: [
    {
      "@type": "HowToStep",
      name: "Upload PowerPoint (PPT or PPTX)",
      text: "Open the PPTX to PDF converter, click Choose PPT/PPTX File, and upload your presentation.",
      url: `${base}/pptx-to-pdf/#step-upload`
    },
    {
      "@type": "HowToStep",
      name: "Review your slides",
      text: "Preview the converted pages to check slide order, layout, and basic formatting.",
      url: `${base}/pptx-to-pdf/#step-review`
    },
    {
      "@type": "HowToStep",
      name: "Download the PDF",
      text: "Click Convert & Download to export your PowerPoint presentation as a PDF with no watermark.",
      url: `${base}/pptx-to-pdf/#step-download`
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the PPTX to PDF converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The PPTX to PDF converter is 100% free to use with no signup, no trial, and no watermark on your slides."
      }
    },
    {
      "@type": "Question",
      name: "Do you support both PPT and PPTX files?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can upload older PPT files and modern PPTX presentations. Both formats are converted to standard PDF."
      }
    },
    {
      "@type": "Question",
      name: "Will the PDF keep my slide layout and design?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The converter is designed to preserve slide order, fonts, colors, and backgrounds as closely as possible. Animations and transitions are not included because PDF is a static format."
      }
    },
    {
      "@type": "Question",
      name: "Is it safe to convert PowerPoint files online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Where possible, conversion runs locally in your browser so files stay on your device. For any server-side processing, files are transmitted via encrypted TLS connections and are not stored permanently."
      }
    },
    {
      "@type": "Question",
      name: "Does the PPTX to PDF converter work on Mac, Windows, and mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can use the converter on Windows, macOS, Linux, iOS, and Android using modern browsers such as Chrome, Safari, Edge, or Firefox."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "PPTX to PDF", item: `${base}/pptx-to-pdf/` }
  ]
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/pptx-to-pdf/#app`,
  name: "PPTX to PDF Converter — TechRex Free PDF Editor",
  url: `${base}/pptx-to-pdf/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Online PPTX to PDF converter for PowerPoint presentations. Convert PPT and PPTX to PDF for free with no signup and no watermark.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

export const seo = {
  // Target head terms: "PPTX to PDF", "PowerPoint to PDF", "PPT to PDF online"
  title: "PPTX to PDF Converter — Free PowerPoint to PDF Online (No Signup)",
  description:
    "Convert PowerPoint presentations (PPT & PPTX) to PDF online for free. No signup, no watermark, and instant download. Works on Windows, Mac, Linux, iPhone, and Android.",
  canonical: `${base}/pptx-to-pdf/`,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/pptx-to-pdf/`,
    title: "PPTX to PDF Converter — Free PowerPoint to PDF Online",
    description:
      "Upload a PPT or PPTX file and get a clean PDF copy in seconds. 100% free, private, and watermark-free.",
    image: `${base}/fpe-og-1200x630.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PPTX to PDF Converter — PowerPoint to PDF",
    description:
      "Convert PowerPoint (PPT/PPTX) to PDF online. Fast, privacy-friendly, and watermark-free.",
    image: `${base}/fpe-og-1200x630.png`
  },
  hreflang: [
    { lang: "en", url: `${base}/pptx-to-pdf/` },
    { lang: "x-default", url: `${base}/pptx-to-pdf/` }
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema]
};
