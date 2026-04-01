// pages/merge-pdf/index.page.server.jsx

const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/merge-pdf/#howto`,
  name: "How to merge PDF files online (free, no signup)",
  description:
    "Step-by-step guide to combine multiple PDFs in your browser for free using TechRex Free PDF Editor.",
  totalTime: "PT2M",
  tool: ["Web browser", "TechRex Free PDF Editor"],
  step: [
    {
      "@type": "HowToStep",
      url: `${base}/merge-pdf/#step-upload`,
      name: "Upload your PDFs",
      text:
        "Open the merger and upload or drag & drop your PDF files. You can add as many as you need."
    },
    {
      "@type": "HowToStep",
      url: `${base}/merge-pdf/#step-reorder`,
      name: "Reorder the files",
      text:
        "Drag to arrange the PDFs in your preferred order before merging into a single document."
    },
    {
      "@type": "HowToStep",
      url: `${base}/merge-pdf/#step-download`,
      name: "Merge & download",
      text:
        "Click Merge to create a single PDF and download instantly — no watermark, no signup."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I merge PDF files online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Open the TechRex Merge PDF tool, upload your PDFs, reorder them, and click Merge. Download the combined file instantly — no signup or watermark."
      }
    },
    {
      "@type": "Question",
      name: "Is my file uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Merging is done locally in your browser using client-side processing, so your PDFs stay on your device unless you choose to share them."
      }
    },
    {
      "@type": "Question",
      name: "Can I merge large PDFs and many files?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The merger can handle large, multi-page PDFs and many files. The main limit is your device memory and browser, not an artificial cap."
      }
    },
    {
      "@type": "Question",
      name: "Does it work on iPhone and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The PDF merger is mobile-friendly and runs in Safari or Chrome on iOS and Android — no app install needed."
      }
    },
    {
      "@type": "Question",
      name: "Can I remove or rotate pages before merging?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Use the Edit PDF or Split PDF tools to remove, rotate, or clean up pages, then merge the updated files into one document."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
    { "@type": "ListItem", position: 3, name: "Merge PDF", item: `${base}/merge-pdf/` }
  ]
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/merge-pdf/#app`,
  name: "Merge PDF Online Free — TechRex PDF Merger",
  url: `${base}/merge-pdf/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

export const seo = {
  title: "Merge PDF Online Free — Combine PDFs (No Signup, No Watermark)",
  description:
    "Merge PDF files online in your browser. Combine multiple PDFs into one document — 100% free, no signup, no watermark. Fast, private PDF merger for desktop and mobile.",
  canonical: `${base}/merge-pdf/`,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/merge-pdf/`,
    title: "Merge PDF Online Free — Combine PDF Files",
    description:
      "Combine multiple PDF files into a single document. Free online PDF merger with no signup and no watermark.",
    image: `${base}/fpe-og-1200x630.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF Online Free — No Signup, No Watermark",
    description:
      "Browser-based PDF merger to combine PDFs quickly and securely on any device.",
    image: `${base}/fpe-og-1200x630.png`
  },
  hreflang: [
    { lang: "en", url: `${base}/merge-pdf/` },
    { lang: "x-default", url: `${base}/merge-pdf/` }
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema]
};
