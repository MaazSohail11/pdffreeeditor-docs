// pages/compress-pdf/index.page.server.jsx

const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/compress-pdf/#howto`,
  name: "How to compress a PDF online for free (no signup)",
  description:
    "Upload your PDF to the online compressor, choose a compression mode and download the smaller file. Reduce PDF file size for email, forms and storage.",
  totalTime: "PT2M",
  tool: ["Web browser", "TechRex Free PDF Compressor"],
  step: [
    {
      "@type": "HowToStep",
      url: `${base}/compress-pdf/#step-upload`,
      name: "Upload your PDF",
      text:
        "Open the Compress PDF tool and drag and drop your PDF file or select it from your device. The file is sent over an encrypted TLS connection for compression."
    },
    {
      "@type": "HowToStep",
      url: `${base}/compress-pdf/#step-choose`,
      name: "Choose a compression mode",
      text:
        "Select Compact (retain-PDF) to keep sharp text and vector graphics while reducing size, or choose Rasterize to convert each page to an image for the smallest possible PDF."
    },
    {
      "@type": "HowToStep",
      url: `${base}/compress-pdf/#step-download`,
      name: "Download the compressed PDF",
      text:
        "When compression completes, download your smaller PDF instantly. There is no signup and no watermark on the output file."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I compress a PDF online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Open the Compress PDF tool, upload your file, choose Compact or Rasterize and download the smaller PDF. The service is free to use with no signup and no watermark on the result."
      }
    },
    {
      "@type": "Question",
      name: "What’s the difference between Compact and Rasterize compression?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Compact retains the original PDF structure, keeping text and vector graphics crisp while optimizing images and metadata to reduce file size. Rasterize converts each page into an image at your chosen quality and DPI for maximum size reduction."
      }
    },
    {
      "@type": "Question",
      name: "Can I compress a PDF to 100KB, 200KB or 1MB?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. There is no fixed 100KB button, but you can use Rasterize and lower the quality or DPI to approach target sizes like 100KB, 200KB or 1MB. For text-heavy PDFs, Compact often reaches small file sizes while maintaining high quality."
      }
    },
    {
      "@type": "Question",
      name: "How do I compress a PDF without losing quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Choose the Compact (retain-PDF) mode. It preserves fonts, vectors and layout while removing unnecessary data and re-encoding images, so the PDF remains sharp and readable after compression."
      }
    },
    {
      "@type": "Question",
      name: "Is my PDF uploaded to your servers when I compress it?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Your PDF is transferred over an encrypted TLS connection to our compression backend and Adobe PDF Services for processing. As with any online service, avoid uploading extremely sensitive documents."
      }
    },
    {
      "@type": "Question",
      name: "Does the Compress PDF tool work on iPhone and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can open the Compress PDF tool in a modern mobile browser on iOS or Android and reduce PDF file size without installing an app."
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
    { "@type": "ListItem", position: 3, name: "Compress PDF", item: `${base}/compress-pdf/` }
  ]
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/compress-pdf/#app`,
  name: "Compress PDF Online — Free PDF Compressor by TechRex",
  url: `${base}/compress-pdf/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Compress PDF Online Free — Reduce PDF File Size Without Signup",
  description:
    "Compress PDF online free with this PDF compressor. Reduce PDF file size for email and uploads, compress PDFs to around 100KB, 200KB or 1MB and keep quality using Compact or Rasterize modes.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${base}/compress-pdf/`
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
    "Compress PDF Online Free — PDF Compressor to Reduce File Size (No Signup, No Watermark)",
  description:
    "Use this free online PDF compressor to reduce PDF file size for email and uploads. Compress PDF online, target 100KB/200KB/1MB and keep quality with Compact mode. No signup, no watermark.",
  canonical: `${base}/compress-pdf/`,
  robots:
    "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/compress-pdf/`,
    title: "Compress PDF Online Free — Reduce PDF File Size",
    description:
      "Make a PDF smaller for email and uploads in seconds. Free online PDF compressor with Compact and Rasterize modes — no signup, no watermark.",
    image: `${base}/fpe-og-1200x630.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF Online — Free PDF Compressor",
    description:
      "Shrink large PDFs without signup or watermark. Reduce PDF file size online for email, uploads and storage.",
    image: `${base}/fpe-og-1200x630.png`
  },
  hreflang: [
    { lang: "en", url: `${base}/compress-pdf/` },
    { lang: "x-default", url: `${base}/compress-pdf/` }
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
