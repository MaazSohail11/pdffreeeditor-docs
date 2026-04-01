// pages/sign-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const url = `${base}/sign-pdf/`;

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PDF Free Editor",
  url: base,
  logo: `${base}/logo.png`,
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${url}#app`,
  name: "Sign PDF Online Free — PDF Free Editor",
  url,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Sign PDF online free. Add a signature to PDF by drawing, typing, or uploading an image. No signup, no watermark. Private by default and works on iPhone, Android, Mac, and Windows.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "Sign PDF", item: url },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${url}#howto`,
  name: "How to sign a PDF online for free",
  description:
    "Upload your PDF, add a signature (draw, type, or upload), then download the signed PDF. No signup and no watermark.",
  totalTime: "PT2M",
  tool: ["Web browser", "PDF Free Editor"],
  step: [
    {
      "@type": "HowToStep",
      url: `${url}#step-upload`,
      name: "Upload your PDF",
      text:
        "Upload a PDF to open it in the editor. The document is prepared for signing.",
    },
    {
      "@type": "HowToStep",
      url: `${url}#step-add-signature`,
      name: "Add your signature (draw, type, or upload)",
      text:
        "Create your signature by drawing, typing, or uploading a signature image, then place it anywhere on the PDF.",
    },
    {
      "@type": "HowToStep",
      url: `${url}#step-download`,
      name: "Download the signed PDF",
      text:
        "Export and download the signed PDF instantly with no watermark and no signup.",
    },
  ],
};

// MUST match visible FAQ content on the page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I sign a PDF online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Upload your PDF, add your signature (draw, type, or upload), then download the signed PDF. No signup and no watermark.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add a signature to a PDF on any page?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can place a signature anywhere on any page and add multiple signatures if needed.",
      },
    },
    {
      "@type": "Question",
      name: "How do I sign a PDF on iPhone or Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Open the page in Safari/Chrome, upload your PDF, draw your signature using touch, and download the signed PDF. No app install required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I sign a PDF without Adobe Acrobat?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Upload your PDF and sign directly in your browser — no Adobe Acrobat required.",
      },
    },
    {
      "@type": "Question",
      name: "Is this an electronic signature or a digital signature?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "This tool creates an electronic signature (a signature you place on the PDF). Digital signatures are certificate-based and use cryptography, which is a different workflow.",
      },
    },
    {
      "@type": "Question",
      name: "Do you upload or store my PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "By default, signing runs locally in your browser so your file stays on your device. If any feature ever requires an upload, it should be clearly indicated before you continue.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sign PDF Online Free — Add a Signature to PDF (No Signup, No Watermark)",
  description:
    "Sign PDF online free. Add signature to PDF by drawing, typing, or uploading. Works on iPhone/Android and desktop. No signup, no watermark, private by default.",
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  author: { "@type": "Organization", name: "TechRex" },
  publisher: {
    "@type": "Organization",
    name: "TechRex",
    logo: { "@type": "ImageObject", url: `${base}/logo.png` },
  },
};

export const seo = {
  title: "Sign PDF Online Free — Add Signature to PDF (No Signup, No Watermark)",
  description:
    "Sign PDF online free. Add a signature to PDF by drawing, typing, or uploading an image. No signup, no watermark. Works on iPhone/Android + desktop. Private by default.",
  canonical: url,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url,
    title: "Sign PDF Online Free — Add Signature to PDF",
    description:
      "Upload a PDF, add your signature, and download instantly. Draw, type, or upload. No signup, no watermark.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign PDF Online Free — Add Signature to PDF",
    description:
      "Draw, type, or upload a signature and download instantly. No signup, no watermark.",
    image: `${base}/fpe-og-1200x630.png`,
  },
  hreflang: [
    { lang: "en", url },
    { lang: "x-default", url },
  ],
  structuredData: [orgSchema, webappSchema, breadcrumbSchema, howToSchema, faqSchema, articleSchema],
};
