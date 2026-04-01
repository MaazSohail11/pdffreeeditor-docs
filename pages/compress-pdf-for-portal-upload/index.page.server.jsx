const base = "https://pdffreeeditor.com";
const url = `${base}/compress-pdf-for-portal-upload/`;

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Compress PDF", item: `${base}/compress-pdf/` },
        { "@type": "ListItem", position: 4, name: "Compress PDF for Portal Upload", item: url }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: "Compress PDF for Portal Upload — Free PDF Compressor by TechRex",
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to compress a PDF for portal upload (1MB / 2MB / 5MB)",
    description:
        "Upload your PDF, choose Compact or Rasterize, and download a smaller file that meets portal upload limits.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex Free PDF Compressor"],
    step: [
        { "@type": "HowToStep", url: `${url}#step-upload`, name: "Upload your PDF", text: "Upload your PDF over an encrypted TLS connection." },
        { "@type": "HowToStep", url: `${url}#step-choose`, name: "Choose a compression mode", text: "Use Compact for quality-first compression or Rasterize for strict size caps like 1MB or 500KB." },
        { "@type": "HowToStep", url: `${url}#step-download`, name: "Download and upload", text: "Download the smaller PDF and retry the portal upload." }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How do I compress a PDF for a portal upload?", acceptedAnswer: { "@type": "Answer", text: "Upload your PDF, start with Compact mode, then switch to Rasterize if the portal has a strict size cap. Repeat with lower quality/DPI until you meet the requirement." } },
        { "@type": "Question", name: "What if the portal limit is 1MB or even 500KB?", acceptedAnswer: { "@type": "Answer", text: "Use a strict target page and Rasterize when necessary. For scanned/image-heavy PDFs, Rasterize typically achieves much smaller sizes than Compact." } },
        { "@type": "Question", name: "Why won’t my scanned PDF compress enough?", acceptedAnswer: { "@type": "Answer", text: "Scanned PDFs are mostly images. To go very small, use Rasterize at lower DPI/quality. If it’s still too big, split the PDF or upload fewer pages." } },
        { "@type": "Question", name: "Is my file uploaded to your servers?", acceptedAnswer: { "@type": "Answer", text: "Yes for compression. Your PDF is transferred over encrypted TLS to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents." } }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Compress PDF for Portal Upload — Meet Strict Size Limits",
    description:
        "Compress PDFs for portal uploads with strict limits like 1MB, 2MB, 5MB or 500KB. Use Compact or Rasterize and download instantly. No signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: { "@type": "Organization", name: "TechRex", logo: { "@type": "ImageObject", url: `${base}/logo.png` } }
};

export const seo = {
    title: "Compress PDF for Portal Upload — Reduce PDF to 1MB/2MB/5MB (Free, No Signup)",
    description:
        "Compress a PDF for portal uploads and strict size limits (1MB/2MB/5MB/500KB). Use Compact for quality or Rasterize for maximum reduction. Free, no signup, no watermark.",
    canonical: url,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url,
        title: "Compress PDF for Portal Upload — Meet Strict Limits",
        description: "Reduce PDF size to pass strict upload limits (1MB/2MB/5MB/500KB).",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress PDF for Portal Upload — Free PDF Compressor",
        description: "Hit strict upload limits fast. Compress, download, upload.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url },
        { lang: "x-default", url }
    ],
    structuredData: [breadcrumbSchema, webappSchema, howToSchema, faqSchema, articleSchema]
};
