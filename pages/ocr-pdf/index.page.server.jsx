// pages/ocr-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to OCR a PDF online (make a scanned PDF searchable)",
    description:
        "Upload a scanned PDF, select the language, and download a searchable PDF with an invisible text overlay. OCR is capped to the first 500 pages for fast processing.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR PDF Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/ocr-pdf/#step-upload`,
            name: "Upload your scanned PDF",
            text:
                "Upload a scanned (image-only) PDF. For long documents, split the PDF first and OCR only the pages you need (OCR processes the first 500 pages).",
        },
        {
            "@type": "HowToStep",
            url: `${base}/ocr-pdf/#step-language`,
            name: "Select the document language",
            text:
                "Choose the primary language of the document to improve OCR accuracy, especially for accents and similar-looking characters.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/ocr-pdf/#step-download`,
            name: "Download a searchable PDF",
            text:
                "Download the searchable PDF with an invisible text overlay. You can now search (Ctrl+F) and copy text from the document.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is OCR PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "OCR (Optical Character Recognition) converts scanned PDFs into real text so you can search, select, and copy words instead of treating the PDF like an image.",
            },
        },
        {
            "@type": "Question",
            name: "Why can’t I copy text from my PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "If your PDF is a scan (image-only), it has no real text layer. OCR recognizes text inside the page images and adds an invisible overlay so copying and searching works.",
            },
        },
        {
            "@type": "Question",
            name: "Is there a page limit?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. OCR is capped to the first 500 pages for fast processing. If your file is longer, split the PDF and OCR only the pages you need.",
            },
        },
        {
            "@type": "Question",
            name: "Will the downloaded PDF have a watermark?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "No. The OCR PDF result downloads without a watermark.",
            },
        },
        {
            "@type": "Question",
            name: "How can I improve OCR accuracy?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use clear scans, avoid blur and shadows, keep pages straight, and select the correct language before running OCR.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "OCR Tools", item: `${base}/ocr/` },
        { "@type": "ListItem", position: 4, name: "OCR PDF", item: `${base}/ocr-pdf/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex OCR PDF — OCR PDF Online Free",
    url: `${base}/ocr-pdf/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "OCR PDF Online Free — Make Scanned PDFs Searchable (PDF OCR)",
    description:
        "Upload a scanned PDF and download a searchable PDF with an invisible text overlay. OCR is capped to the first 500 pages for fast processing.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/ocr-pdf/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "OCR PDF – Make Scanned PDFs Searchable (Free, No Watermark)",
    description:
        "Upload a scanned PDF and download a searchable PDF with invisible text overlay. OCR is capped to the first 500 pages for fast, secure processing—split pages to OCR only what you need.",
    canonical: `${base}/ocr-pdf/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/ocr-pdf/`,
        title: "OCR PDF Online – Add Searchable Text Layer",
        description:
            "Convert scanned PDFs into searchable, selectable text and download a searchable PDF with invisible text overlay. Free, no watermark.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "OCR PDF – Make Scans Searchable",
        description: "Convert scans to searchable PDFs with invisible text overlay. Free online OCR.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/ocr-pdf/` },
        { lang: "x-default", url: `${base}/ocr-pdf/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
