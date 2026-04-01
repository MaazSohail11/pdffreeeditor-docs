// pages/cant-search-text-in-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to fix Ctrl+F not working in a PDF",
    description:
        "Diagnose why PDF search fails (scanned PDF, protected PDF, broken text layer, viewer issue) and fix it by adding a searchable text layer with OCR.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/cant-search-text-in-pdf/#tests`,
            name: "Run the 10-second tests",
            text:
                "Try selecting a single word and use Ctrl+F/Command+F for a visible word. If selection fails or search returns nothing, the PDF is likely scanned (image-only) or the text layer is broken.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/cant-search-text-in-pdf/#upload`,
            name: "Make the PDF searchable using OCR",
            text:
                "Upload the PDF and run OCR to add a searchable text layer (invisible overlay). This makes Ctrl+F, selection, and copy/paste work again for scanned PDFs.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/cant-search-text-in-pdf/#upload`,
            name: "Search again",
            text:
                "Download the searchable output and use Ctrl+F/Command+F to find names, numbers, or phrases instantly.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why does Ctrl+F not work in my PDF even though I can see the text?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Many PDFs are scans (image-only). They look like text but have no real text layer, so Ctrl+F cannot search until OCR adds a searchable text layer.",
            },
        },
        {
            "@type": "Question",
            name: "How can I quickly tell if my PDF is searchable?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Try selecting a single word. If you can’t select individual words/letters and the page highlights like a picture, it’s likely a scanned non-searchable PDF.",
            },
        },
        {
            "@type": "Question",
            name: "Will OCR make Ctrl+F work again?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "For scanned PDFs, yes in most cases. OCR adds an invisible text overlay so search, copy, and selection work much better.",
            },
        },
        {
            "@type": "Question",
            name: "Some pages search and some pages don’t — why?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "That usually means the PDF is mixed: some pages contain real text and other pages are scanned images. OCR the scanned pages for consistent search results.",
            },
        },
        {
            "@type": "Question",
            name: "My file is long and there is a page limit. What should I do?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use Split PDF to keep only the pages you need, then run OCR on the smaller file.",
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
        { "@type": "ListItem", position: 4, name: "Ctrl+F Not Working in PDF", item: `${base}/cant-search-text-in-pdf/` },
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
    headline: "Ctrl+F Doesn’t Work in PDF? Fix Can’t Search Text in PDF",
    description:
        "Learn why PDF search fails (scanned PDFs, restricted PDFs, broken text layers, viewer issues) and how to make a PDF searchable by adding a text layer using OCR.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/cant-search-text-in-pdf/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Ctrl+F Doesn’t Work in PDF? Fix “Can’t Search Text in PDF” (Fast)",
    description:
        "Can’t search in PDF? Ctrl+F returns 0 results? Diagnose the cause (scanned PDF, protected PDF, broken text layer) and make the PDF searchable by adding a text layer with OCR.",
    canonical: `${base}/cant-search-text-in-pdf/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "article",
        url: `${base}/cant-search-text-in-pdf/`,
        title: "Ctrl+F Not Working in PDF? Make It Searchable with OCR",
        description:
            "If Ctrl+F shows 0 results, your PDF may be scanned (image-only). Add a searchable text layer using OCR and search again instantly.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Ctrl+F Doesn’t Work in PDF?",
        description: "Fix PDF search by adding a searchable text layer with OCR.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/cant-search-text-in-pdf/` },
        { lang: "x-default", url: `${base}/cant-search-text-in-pdf/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
