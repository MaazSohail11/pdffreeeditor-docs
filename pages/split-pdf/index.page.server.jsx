// pages/split-pdf/index.page.server.jsx

const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/split-pdf/#howto`,
  name: "How to split a PDF or extract pages online (free, no signup)",
  description:
    "Upload your PDF, choose pages or ranges, and download a new file containing only the pages you selected. Split, extract or remove pages from a PDF online for free.",
  totalTime: "PT2M",
  tool: ["Web browser", "TechRex Free PDF Editor"],
  step: [
    {
      "@type": "HowToStep",
      url: `${base}/split-pdf/#step-upload`,
      name: "Upload your PDF",
      text:
        "Open the Split PDF tool and drag and drop your PDF file or choose it from your device. The file is processed locally in your browser using client-side code."
    },
    {
      "@type": "HowToStep",
      url: `${base}/split-pdf/#step-select`,
      name: "Choose pages or ranges",
      text:
        "Select single pages or enter ranges like 1-3, 7-10. You can preview page numbers and decide which pages to keep in the new file."
    },
    {
      "@type": "HowToStep",
      url: `${base}/split-pdf/#step-download`,
      name: "Split and download",
      text:
        "Create your new PDF and download it instantly. Only the selected pages are included, with no watermark and no signup required."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I split a PDF online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Open the Split PDF tool, upload your document, select the pages or ranges you need and click Split & Download. You will receive a new PDF containing only those pages, with no signup and no watermark."
      }
    },
    {
      "@type": "Question",
      name: "Can I extract specific pages from a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Enter specific page numbers (for example 2, 5-7) or use the page selector to choose them. The tool then creates a new PDF with only those extracted pages."
      }
    },
    {
      "@type": "Question",
      name: "Can I remove pages from a PDF using this tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Select only the pages you want to keep and export a new file. All unselected pages are effectively removed from the new PDF."
      }
    },
    {
      "@type": "Question",
      name: "Is my PDF uploaded to your servers?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. The Split PDF tool uses client-side processing in your browser, so the pages are handled locally on your device instead of on a remote server."
      }
    },
    {
      "@type": "Question",
      name: "Does the Split PDF tool work on iPhone and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can split or extract pages from PDFs on mobile devices using modern browsers like Safari or Chrome, without installing an app."
      }
    },
    {
      "@type": "Question",
      name: "What is the maximum PDF file size I can split?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Because splitting runs in your browser, the maximum size depends on available memory and your device. For best performance, keep files under about 100 MB. Very large documents can be split into parts and processed separately."
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Split PDF",
      item: `${base}/split-pdf/`
    }
  ]
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/split-pdf/#app`,
  name: "Split PDF Online — Free PDF Splitter by TechRex",
  url: `${base}/split-pdf/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Split PDF Online Free — Extract & Remove Pages (No Signup, No Watermark)",
  description:
    "Split PDF pages online for free. Extract specific pages or ranges, remove pages you don’t need and download a new PDF with no signup and no watermark. Runs in your browser for privacy.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${base}/split-pdf/`
  },
  author: {
    "@type": "Organization",
    name: "TechRex"
  },
  publisher: {
    "@type": "Organization",
    name: "TechRex",
    logo: {
      "@type": "ImageObject",
      url: `${base}/logo.png`
    }
  }
};

export const seo = {
  title:
    "Split PDF Online Free — Extract & Remove Pages (No Signup, No Watermark)",
  description:
    "Split PDF online free in your browser. Separate PDF pages, extract specific page ranges or remove pages you don’t need. 100% free, no signup, no watermark. Works on desktop and mobile.",
  canonical: `${base}/split-pdf/`,
  robots:
    "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/split-pdf/`,
    title: "Split PDF Online Free — Extract & Remove Pages",
    description:
      "Use this free PDF splitter to separate PDF pages, extract specific ranges and remove pages you don’t need. No signup, no watermark.",
    image: `${base}/fpe-og-1200x630.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Split PDF Online — Free PDF Splitter",
    description:
      "Extract pages from a PDF or remove pages you don’t need. Split PDF online for free, with no signup or watermark.",
    image: `${base}/fpe-og-1200x630.png`
  },
  hreflang: [
    { lang: "en", url: `${base}/split-pdf/` },
    { lang: "x-default", url: `${base}/split-pdf/` }
  ],
  structuredData: [
    howToSchema,
    faqSchema,
    breadcrumbSchema,
    webappSchema,
    articleSchema
  ]
};
