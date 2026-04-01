// pages/why-ocr-improves-searchability/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to add a searchable text layer to a scanned PDF (OCR)",
    description:
        "Use OCR to add an invisible text layer to scanned PDFs so Ctrl+F, text selection, and copy/paste work. Split long PDFs first if you hit a page limit.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/why-ocr-improves-searchability/#step-1`,
            name: "Upload a scanned PDF",
            text:
                "Upload your scanned (image-only) PDF. Scans typically contain only image data, not searchable text, until OCR is applied.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/why-ocr-improves-searchability/#step-2`,
            name: "Run OCR to create a text layer",
            text:
                "OCR detects the letters in the scan and generates a hidden, searchable text layer beneath the page images (the PDF usually looks the same).",
        },
        {
            "@type": "HowToStep",
            url: `${base}/why-ocr-improves-searchability/#step-3`,
            name: "Download a searchable PDF",
            text:
                "Download the OCR’d PDF and use Ctrl+F to search, highlight text, and copy/paste content.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is OCR in a PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "OCR (Optical Character Recognition) converts text inside scanned images into real, machine-readable text. In PDFs, OCR typically adds an invisible text layer beneath scanned page images so the file becomes searchable and selectable.",
            },
        },
        {
            "@type": "Question",
            name: "Does OCR change how my PDF looks?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Usually no. OCR often keeps the scanned page image and adds a hidden text layer underneath (sometimes called a sandwich PDF).",
            },
        },
        {
            "@type": "Question",
            name: "Why does OCR make Ctrl+F work in scanned PDFs?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Ctrl+F searches real text. A scanned PDF often contains only image data, so there is nothing to search until OCR creates a text layer.",
            },
        },
        {
            "@type": "Question",
            name: "My PDF is too long and there’s a page limit. What should I do?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Split the PDF into smaller parts, keep only the pages you need, then run OCR on that smaller file.",
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
        {
            "@type": "ListItem",
            position: 4,
            name: "Why OCR Improves Searchability",
            item: `${base}/why-ocr-improves-searchability/`,
        },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — OCR Tools",
    url: `${base}/ocr/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why OCR Improves PDF Searchability (Add a Text Layer)",
    description:
        "Learn how OCR adds an invisible text layer to scanned PDFs so Ctrl+F, selection, copy/paste, and accessibility work. Includes simple tests and the fastest workflow.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/why-ocr-improves-searchability/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "What Is OCR in a PDF? Add a Text Layer & Make Scans Searchable",
    description:
        "OCR adds a searchable text layer to scanned PDFs (often invisible under the image). Learn why Ctrl+F fails on scans and how to make PDFs searchable online.",
    canonical: `${base}/why-ocr-improves-searchability/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "article",
        url: `${base}/why-ocr-improves-searchability/`,
        title: "What Is OCR in a PDF? Add a Searchable Text Layer",
        description:
            "Scanned PDFs are often image-only. OCR adds an invisible text layer so Ctrl+F, selection, and copy/paste work.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "What Is OCR in a PDF?",
        description: "OCR adds a searchable text layer to scanned PDFs so Ctrl+F works.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/why-ocr-improves-searchability/` },
        { lang: "x-default", url: `${base}/why-ocr-improves-searchability/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
