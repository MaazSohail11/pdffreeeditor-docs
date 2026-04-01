// pages/pdf-to-pptx/index.page.server.jsx
// canonical is handled centrally; we still provide full URLs with trailing slashes.

const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/pdf-to-pptx/#howto`,
  name: "Convert PDF to PPTX Online (Free, No Signup)",
  description:
    "Step-by-step guide to convert PDF to PowerPoint (PPTX) online for free. No signup, no watermark, fast and private.",
  totalTime: "PT1M",
  tool: ["Web browser", "PDF Free Editor"],
  step: [
    {
      "@type": "HowToStep",
      name: "Upload PDF",
      text: "Open the Free PDF Editor and drop your PDF file or click to choose it from your device.",
      url: `${base}/pdf-to-pptx/#step-upload`,
    },
    {
      "@type": "HowToStep",
      name: "Review slides",
      text: "Check page order and slide content before exporting to PPTX.",
      url: `${base}/pdf-to-pptx/#step-review`,
    },
    {
      "@type": "HowToStep",
      name: "Download PPTX",
      text: "Export as PowerPoint (.pptx) and download your new slide deck instantly.",
      url: `${base}/pdf-to-pptx/#step-download`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the PDF to PPTX converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes—PDF Free Editor’s PDF to PPTX converter is 100% free to use with no signup, no email gate, and no watermark on your downloads.",
      },
    },
    {
      "@type": "Question",
      name: "Will the slides be editable in PowerPoint?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The tool exports to PPTX so you can edit slides in Microsoft PowerPoint, Apple Keynote, or Google Slides, including rearranging slides, updating text, and adding animations.",
      },
    },
    {
      "@type": "Question",
      name: "Does the converter preserve slide layout?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The converter aims to preserve page/slide order and general layout where possible. Simple PDFs convert very cleanly; complex designs may require a quick manual touch-up.",
      },
    },
    {
      "@type": "Question",
      name: "Is my file secure when I convert PDF to PPTX?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Where possible, conversion runs locally in your browser using client-side processing so your PDFs stay on your device. Avoid converting highly sensitive documents on shared or public computers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert PPTX back to PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can use the PPTX to PDF converter on PDF Free Editor to turn PowerPoint slides back into a PDF for easy sharing and printing.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "PDF to PPTX", item: `${base}/pdf-to-pptx/` },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/pdf-to-pptx/#app`,
  name: "PDF to PPTX Converter — PDF Free Editor",
  url: `${base}/pdf-to-pptx/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Convert PDF to PPTX online for free. Turn PDF pages into editable PowerPoint slides without signup or watermark.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export const seo = {
  title: "PDF to PPTX Converter (Free) — Convert PDF to PowerPoint Online",
  description:
    "Convert PDF to PPTX online for free. Turn PDF pages into editable PowerPoint presentations in seconds — no signup, no watermark, fast and secure conversion with instant download.",
  canonical: `${base}/pdf-to-pptx/`,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/pdf-to-pptx/`,
    title: "PDF to PPTX Converter — Free PDF to PowerPoint Tool",
    description:
      "Upload a PDF and download an editable PowerPoint (.pptx) deck instantly. No watermark and no signup required.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PDF to PPTX Online — Free & Private",
    description:
      "Use PDF Free Editor to turn PDFs into editable PowerPoint slides. 100% free PDF to PPTX converter with instant download.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  hreflang: [
    { lang: "en", url: `${base}/pdf-to-pptx/` },
    { lang: "x-default", url: `${base}/pdf-to-pptx/` },
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema],
};
