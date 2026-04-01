// pages/is-my-pdf-scanned/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to tell if a PDF is scanned (image-only) and make it searchable",
    description:
        "Use fast tests (select a word, Ctrl+F, zoom, check other pages) to confirm if a PDF is scanned/image-only. If it is, run OCR to add a searchable text layer.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/is-my-pdf-scanned/#tests`,
            name: "Try selecting a single word",
            text:
                "If you cannot select individual words/letters and the page behaves like an image, the PDF is likely scanned (image-only).",
        },
        {
            "@type": "HowToStep",
            url: `${base}/is-my-pdf-scanned/#tests`,
            name: "Try Ctrl+F / Command+F",
            text:
                "Search for a word you can clearly see. If it finds nothing, there is probably no searchable text layer.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/is-my-pdf-scanned/#fix`,
            name: "Run OCR to add a searchable text layer",
            text:
                "Upload the scanned PDF and run OCR. OCR adds an invisible text layer so the PDF becomes searchable, selectable, and copyable.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How can I tell if a PDF is scanned?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Try selecting a single word. If you can’t highlight individual words/letters and the page behaves like an image, it’s likely a scanned (image-only) PDF.",
            },
        },
        {
            "@type": "Question",
            name: "Why doesn’t Ctrl+F work on a scanned PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Scanned PDFs often contain only image data (a picture of the page), not real text. Ctrl+F can only search actual text until OCR creates a text layer.",
            },
        },
        {
            "@type": "Question",
            name: "What does OCR do to a scanned PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "OCR detects letters in the image and adds an invisible searchable text layer underneath, making the PDF searchable and selectable.",
            },
        },
        {
            "@type": "Question",
            name: "Can a PDF be partially scanned?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Mixed PDFs are common—some pages contain real text, others are scanned images. OCR the scanned pages for consistent search results.",
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
        { "@type": "ListItem", position: 4, name: "Is My PDF Scanned?", item: `${base}/is-my-pdf-scanned/` },
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
    headline: "Is My PDF Scanned? How to Tell If a PDF Is Image-Only (and Fix It)",
    description:
        "Learn how to tell if a PDF is scanned (image-only) using quick tests like selecting a word and Ctrl+F. Convert scanned PDFs into searchable PDFs using OCR.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/is-my-pdf-scanned/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Is My PDF Scanned? 10-Second Tests + Make It Searchable (OCR)",
    description:
        "How to tell if a PDF is scanned (image-only): try selecting a word, Ctrl+F, and zoom tests. If it’s scanned, run OCR to add a searchable text layer.",
    canonical: `${base}/is-my-pdf-scanned/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "article",
        url: `${base}/is-my-pdf-scanned/`,
        title: "Is My PDF Scanned? How to Tell + Convert to Searchable with OCR",
        description:
            "If Ctrl+F doesn’t work and you can’t select text, your PDF is likely scanned (image-only). Add a searchable text layer using OCR.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Is My PDF Scanned?",
        description: "Fast tests to confirm, plus the quickest fix: OCR to make it searchable.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/is-my-pdf-scanned/` },
        { lang: "x-default", url: `${base}/is-my-pdf-scanned/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
