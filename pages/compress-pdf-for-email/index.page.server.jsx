const base = "https://pdffreeeditor.com";
const url = `${base}/compress-pdf-for-email/`;

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Compress PDF", item: `${base}/compress-pdf/` },
        { "@type": "ListItem", position: 4, name: "Compress PDF for Email", item: url }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: "Compress PDF for Email — Free PDF Compressor by TechRex",
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to compress a PDF for email (no signup)",
    description:
        "Upload your PDF, choose Compact or Rasterize compression, and download an email-ready file.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex Free PDF Compressor"],
    step: [
        { "@type": "HowToStep", url: `${url}#step-upload`, name: "Upload your PDF", text: "Open the tool and upload your PDF file. Transfer is encrypted with TLS." },
        { "@type": "HowToStep", url: `${url}#step-choose`, name: "Choose a compression mode", text: "Use Compact for quality-first compression or Rasterize for maximum size reduction." },
        { "@type": "HowToStep", url: `${url}#step-download`, name: "Download & attach", text: "Download the smaller PDF and attach it to your email." }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What PDF size is best for emailing?",
            acceptedAnswer: { "@type": "Answer", text: "Aim under 10MB for maximum compatibility. Some business/Exchange accounts reject larger attachments." }
        },
        {
            "@type": "Question",
            name: "What are common email attachment limits (Gmail, Outlook, Yahoo)?",
            acceptedAnswer: { "@type": "Answer", text: "Gmail allows 25MB total attachments and may turn larger attachments into Drive links. Many Outlook/internet accounts are around 20MB total email size, and some business Exchange accounts default to ~10MB. Yahoo Mail attachments total 25MB." }
        },
        {
            "@type": "Question",
            name: "How do I compress a PDF for email without losing quality?",
            acceptedAnswer: { "@type": "Answer", text: "Start with Compact mode (retain-PDF). It preserves text and vector graphics while optimizing images and removing unnecessary data." }
        },
        {
            "@type": "Question",
            name: "My PDF is still too big—what should I do?",
            acceptedAnswer: { "@type": "Answer", text: "Switch to Rasterize mode and lower quality/DPI gradually. Scanned/image-heavy PDFs usually shrink more with Rasterize." }
        },
        {
            "@type": "Question",
            name: "Is my PDF uploaded to your servers?",
            acceptedAnswer: { "@type": "Answer", text: "Yes for compression. Your PDF is transferred over encrypted TLS to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents to any online tool." }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Compress PDF for Email — Make PDFs Small Enough to Send",
    description:
        "Free tool to compress a PDF for email attachments. Reduce file size with Compact or Rasterize modes, then download and send. No signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Compress PDF for Email — Reduce PDF Size to Send (No Signup, No Watermark)",
    description:
        "Compress a PDF for email attachments. Make PDFs smaller (10MB/5MB/2MB/1MB targets), keep quality with Compact mode or shrink harder with Rasterize. Free, no signup, no watermark.",
    canonical: url,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url,
        title: "Compress PDF for Email — Make PDFs Small Enough to Send",
        description:
            "Reduce PDF file size so you can attach and email it successfully. Free compressor with Compact and Rasterize modes.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress PDF for Email — Free PDF Compressor",
        description: "Make PDFs small enough to email. Compress in minutes and download instantly.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url },
        { lang: "x-default", url }
    ],
    structuredData: [breadcrumbSchema, webappSchema, howToSchema, faqSchema, articleSchema]
};
