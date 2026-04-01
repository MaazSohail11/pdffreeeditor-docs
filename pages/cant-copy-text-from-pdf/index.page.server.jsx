// pages/cant-copy-text-from-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to fix a PDF you can’t copy text from",
    description:
        "Diagnose why copying text from a PDF fails (scanned image PDF vs protected PDF), then fix it by running OCR to create a selectable text layer.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/cant-copy-text-from-pdf/#tests`,
            name: "Diagnose the cause",
            text:
                "Try selecting a single word. If you can’t select individual words/letters, the PDF is likely a scan. If selection works but copy fails, the PDF may be protected.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/cant-copy-text-from-pdf/#upload`,
            name: "Run OCR for scanned PDFs",
            text:
                "Upload the scanned PDF and run OCR. OCR creates a text layer so you can select, copy, and search text.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/cant-copy-text-from-pdf/#upload`,
            name: "Copy the text normally",
            text:
                "After OCR completes, copy/paste text from the new output, or extract text using PDF to Text if you only need the raw text.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why can’t I copy text from my PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Most commonly the PDF is a scan (image-only) with no real text layer. Another common reason is copy restrictions or unusual embedded fonts/layers.",
            },
        },
        {
            "@type": "Question",
            name: "How do I tell if my PDF is scanned?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Try selecting a single word. If you can’t select individual words/letters and only a big box highlights, it’s likely a scanned image PDF.",
            },
        },
        {
            "@type": "Question",
            name: "Will OCR make my PDF searchable and copyable?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. OCR adds a text layer so search (Ctrl+F), selection, and copy/paste work much better on scanned PDFs.",
            },
        },
        {
            "@type": "Question",
            name: "My PDF is long and there is a page limit—what do I do?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use Split PDF to keep only the pages you need, then run OCR on the smaller PDF.",
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
        { "@type": "ListItem", position: 4, name: "Can't Copy Text from PDF", item: `${base}/cant-copy-text-from-pdf/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — OCR PDF Tool",
    url: `${base}/ocr-pdf/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can’t Copy Text from a PDF? Fix Scanned & Protected PDFs",
    description:
        "Learn why copying text from a PDF fails (scanned image PDFs vs protected PDFs) and how to fix it by running OCR to create a selectable text layer.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/cant-copy-text-from-pdf/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Can’t Copy Text from PDF? Fix Scanned & Protected PDFs (Fast)",
    description:
        "Can’t copy text from a PDF? Diagnose the cause in seconds (scanned image PDF vs protected PDF) and fix it with OCR to make text selectable, searchable, and copyable again.",
    canonical: `${base}/cant-copy-text-from-pdf/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/cant-copy-text-from-pdf/`,
        title: "Can’t Copy Text from PDF? Fix It (OCR for Scanned PDFs)",
        description:
            "If your PDF is scanned or protected, copying text can fail. Run OCR to create a real text layer so copy/paste and Ctrl+F work again.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Can’t Copy Text from PDF? Fix It",
        description: "Diagnose the cause and make PDF text selectable using OCR.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/cant-copy-text-from-pdf/` },
        { lang: "x-default", url: `${base}/cant-copy-text-from-pdf/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
