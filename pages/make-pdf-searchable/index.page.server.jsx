// pages/make-pdf-searchable/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to make a scanned PDF searchable online",
    description:
        "Upload a scanned PDF, select the language, and download a searchable PDF with an invisible OCR text overlay. OCR is capped to the first 500 pages for fast processing.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/make-pdf-searchable/#step-upload`,
            name: "Upload the scanned PDF",
            text:
                "Upload the PDF that isn’t searchable. If it’s longer than 500 pages, split the PDF and upload only the required pages for faster OCR.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/make-pdf-searchable/#step-language`,
            name: "Select the document language",
            text:
                "Choose the primary language to improve OCR accuracy, especially for accented characters and similar-looking letters.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/make-pdf-searchable/#step-download`,
            name: "Download the searchable PDF",
            text:
                "Download the PDF with an invisible text overlay. Ctrl+F works and you can copy/select text from the document.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does “make PDF searchable” mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It means adding a real text layer to a PDF so you can search (Ctrl+F), select, and copy text. Scanned PDFs are often images, so they need OCR to become searchable.",
            },
        },
        {
            "@type": "Question",
            name: "Why can’t I search text in my PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Because it’s likely a scanned/image-only PDF with no text layer. OCR recognizes text inside the image and adds an invisible overlay so search works.",
            },
        },
        {
            "@type": "Question",
            name: "Will OCR change the look of my PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "No. OCR typically keeps the page appearance the same and adds a hidden text layer on top for search and copy.",
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
            name: "Do I need to choose a language?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It’s optional, but selecting the correct language usually improves accuracy—especially for accents and similar-looking characters.",
            },
        },
        {
            "@type": "Question",
            name: "How can I get better OCR accuracy?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use clear scans, avoid blur and shadows, keep pages straight, and select the correct language before running OCR. Higher-quality scans usually produce better results.",
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
        { "@type": "ListItem", position: 4, name: "Make PDF Searchable", item: `${base}/make-pdf-searchable/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — Make PDF Searchable (OCR)",
    url: `${base}/make-pdf-searchable/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Make a Scanned PDF Searchable — Fix Ctrl+F (OCR Text Layer)",
    description:
        "Upload a scanned PDF and download a searchable PDF with an invisible OCR text overlay. Fix Ctrl+F, select and copy text. OCR is capped to the first 500 pages for fast processing.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/make-pdf-searchable/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Make PDF Searchable Online – OCR Scanned PDFs (Fix Ctrl+F)",
    description:
        "Make a scanned PDF searchable online. Add an invisible OCR text layer so Ctrl+F works and text becomes selectable/copyable. OCR is capped to the first 500 pages—split pages to OCR only what you need.",
    canonical: `${base}/make-pdf-searchable/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/make-pdf-searchable/`,
        title: "Make PDF Searchable Online (OCR) — Fix Ctrl+F",
        description:
            "Turn scanned PDFs into searchable documents by adding an OCR text layer. Upload, select language, and download a searchable PDF.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Make PDF Searchable Online — OCR Text Layer",
        description:
            "Fix Ctrl+F in scanned PDFs. Make PDF searchable and selectable with OCR. Free online tool.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/make-pdf-searchable/` },
        { lang: "x-default", url: `${base}/make-pdf-searchable/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
