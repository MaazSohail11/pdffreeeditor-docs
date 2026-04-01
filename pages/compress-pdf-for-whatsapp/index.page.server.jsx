const base = "https://pdffreeeditor.com";
const url = `${base}/compress-pdf-for-whatsapp/`;

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Compress PDF", item: `${base}/compress-pdf/` },
        { "@type": "ListItem", position: 4, name: "Compress PDF for WhatsApp", item: url }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: "Compress PDF for WhatsApp — Free PDF Compressor by TechRex",
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to compress a PDF for WhatsApp (no signup)",
    description:
        "Upload your PDF, compress it with Compact or Rasterize mode, then download and share it on WhatsApp.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex Free PDF Compressor"],
    step: [
        { "@type": "HowToStep", url: `${url}#step-upload`, name: "Upload your PDF", text: "Upload your PDF over an encrypted TLS connection." },
        { "@type": "HowToStep", url: `${url}#step-choose`, name: "Compress the PDF", text: "Use Compact for quality or Rasterize for stronger compression—especially for scans." },
        { "@type": "HowToStep", url: `${url}#step-download`, name: "Download and share", text: "Download the smaller PDF and send it via WhatsApp as a document." }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "Do I need to compress a PDF for WhatsApp?", acceptedAnswer: { "@type": "Answer", text: "Not always, but compression helps your PDF send faster and download reliably—especially for large scanned PDFs or when sending to groups." } },
        { "@type": "Question", name: "What size should a PDF be for WhatsApp sharing?", acceptedAnswer: { "@type": "Answer", text: "Limits can vary by how you send the file and platform. For maximum compatibility and fast delivery, keep PDFs as small as possible (often 5–10MB is a great target)." } },
        { "@type": "Question", name: "How do I keep quality while compressing?", acceptedAnswer: { "@type": "Answer", text: "Use Compact mode first. If you’re sending a scanned PDF and need a much smaller file, use Rasterize and lower DPI/quality gradually." } },
        { "@type": "Question", name: "Is my PDF uploaded to your servers?", acceptedAnswer: { "@type": "Answer", text: "Yes for compression. Your PDF is transferred over encrypted TLS to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents." } }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Compress PDF for WhatsApp — Send PDFs Faster",
    description:
        "Compress PDFs for WhatsApp sharing so they send faster and download reliably on mobile. Use Compact or Rasterize and download instantly. No signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: { "@type": "Organization", name: "TechRex", logo: { "@type": "ImageObject", url: `${base}/logo.png` } }
};

export const seo = {
    title: "Compress PDF for WhatsApp — Send PDFs Faster (Free, No Signup, No Watermark)",
    description:
        "Compress a PDF for WhatsApp sharing. Reduce file size for faster sending and easy downloads on mobile. Compact for quality, Rasterize for strict reduction. Free, no signup, no watermark.",
    canonical: url,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url,
        title: "Compress PDF for WhatsApp — Send PDFs Faster",
        description: "Reduce PDF size so it shares faster on WhatsApp chats and groups.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress PDF for WhatsApp — Free PDF Compressor",
        description: "Make PDFs smaller for faster WhatsApp sharing.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url },
        { lang: "x-default", url }
    ],
    structuredData: [breadcrumbSchema, webappSchema, howToSchema, faqSchema, articleSchema]
};
