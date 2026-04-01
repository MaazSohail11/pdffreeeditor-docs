const base = "https://pdffreeeditor.com";
const slug = "/split-pdf-by-size/";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${base}${slug}#howto`,
    name: "How to split a PDF by size (into smaller parts)",
    description: "Upload a PDF, set a target MB per part, select pages for each chunk, and download each part as a new PDF. Optionally compress parts for tighter limits.",
    totalTime: "PT3M",
    tool: ["Web browser", "TechRex Free PDF Editor"],
    step: [
        { "@type": "HowToStep", url: `${base}${slug}#step-upload`, name: "Upload your PDF", text: "Upload your PDF. Processing runs locally in your browser." },
        { "@type": "HowToStep", url: `${base}${slug}#step-select`, name: "Set target size and select chunks", text: "Set a target MB per part and select/download chunks as new PDFs." },
        { "@type": "HowToStep", url: `${base}${slug}#step-download`, name: "Download parts", text: "Download each part and compress if needed to hit stricter limits." }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How do I split a PDF by file size?", acceptedAnswer: { "@type": "Answer", text: "Upload the PDF, set a target MB per part, then select and download each chunk. Repeat for the next part." } },
        { "@type": "Question", name: "Is the split size exact?", acceptedAnswer: { "@type": "Answer", text: "No. Output varies by page content (especially images). The helper is an estimate based on average page size." } },
        { "@type": "Question", name: "How can I get closer to an exact limit?", acceptedAnswer: { "@type": "Answer", text: "Split first, then compress each downloaded part using a PDF compressor." } },
        { "@type": "Question", name: "Can I target 10MB parts for email?", acceptedAnswer: { "@type": "Answer", text: "Yes. Set 10MB and download each chunk. Splitting can help when attachments are too large." } },
        { "@type": "Question", name: "Is my PDF uploaded?", acceptedAnswer: { "@type": "Answer", text: "No. Splitting runs locally in your browser." } },
        { "@type": "Question", name: "Does it work on mobile?", acceptedAnswer: { "@type": "Answer", text: "Yes. Works on Safari (iOS) and Chrome (Android)." } }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Split PDF by Size", item: `${base}${slug}` }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${base}${slug}#app`,
    name: "Split PDF by Size — Free Splitter by TechRex",
    url: `${base}${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Split PDF by Size — Make Smaller Parts (10MB / 5MB / 2MB)",
    description: "Split a large PDF into smaller parts near a target size using an estimate helper. Free, no signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}${slug}` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: { "@type": "Organization", name: "TechRex", logo: { "@type": "ImageObject", url: `${base}/logo.png` } }
};

export const seo = {
    title: "Split PDF by Size — Make Smaller Parts (10MB / 5MB / 2MB) Free",
    description: "Split a large PDF into smaller parts near a target MB size. Use the built-in size helper to estimate pages per part and download each chunk. No signup, no watermark.",
    canonical: `${base}${slug}`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}${slug}`,
        title: "Split PDF by Size — Free",
        description: "Split big PDFs into smaller parts near a target MB size. Download each part instantly.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Split PDF by Size — Free",
        description: "Split large PDFs into smaller parts near a target MB size. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: `${base}${slug}` },
        { lang: "x-default", url: `${base}${slug}` }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
