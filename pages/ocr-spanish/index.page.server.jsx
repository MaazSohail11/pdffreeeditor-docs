// pages/ocr-spanish/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to OCR a Spanish PDF online (keep ñ and accents, make it searchable)",
    description:
        "Upload a scanned Spanish PDF, select Spanish (Español), run OCR, then download a searchable PDF with an invisible text layer or extract the Spanish text.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/ocr-spanish/#step-upload`,
            name: "Upload your Spanish PDF",
            text:
                "Upload a scanned (image-only) Spanish PDF. If the file is long, split it into smaller PDFs before OCR.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/ocr-spanish/#step-language`,
            name: "Select Spanish (Español)",
            text:
                "If available, select Spanish to improve recognition accuracy for ñ and accented characters. For bilingual pages, choose the dominant language shown on the page.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/ocr-spanish/#step-download`,
            name: "Run OCR and download searchable output",
            text:
                "Run OCR and download a searchable PDF (text layer added) or copy the extracted Spanish text for reuse.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is OCR Spanish?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "OCR Spanish extracts Spanish text from scanned images or PDFs. It can add a machine-readable text layer beneath scanned pages so your document becomes searchable and selectable.",
            },
        },
        {
            "@type": "Question",
            name: "Does choosing Spanish (Español) improve OCR accuracy?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Often yes. Many OCR engines use language-specific dictionaries and rules. Selecting Spanish can improve recognition for ñ, accents, and common words.",
            },
        },
        {
            "@type": "Question",
            name: "Can OCR keep ñ and accents (á, é, í, ó, ú, ü)?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Usually yes if the scan is clear and Spanish is selected. Low-quality scans (blur, skew, heavy compression) can still reduce accuracy.",
            },
        },
        {
            "@type": "Question",
            name: "My Spanish PDF is scanned and Ctrl+F doesn’t work. Why?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Many scanned PDFs contain only page images (no real text). Ctrl+F can’t search images until OCR creates a text layer. After OCR, you should be able to select a single word and search text.",
            },
        },
        {
            "@type": "Question",
            name: "My PDF is too long and there’s a page limit. What should I do?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Split the PDF into smaller files and OCR only the pages you need.",
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
        { "@type": "ListItem", position: 4, name: "OCR Spanish", item: `${base}/ocr-spanish/` },
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
    headline: "OCR Spanish Online — Extract Spanish Text & Make PDFs Searchable",
    description:
        "Run Spanish OCR online to extract text from scanned PDFs and images. Keep ñ and accents readable, add a searchable text layer, and download a searchable PDF.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/ocr-spanish/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "OCR Spanish Online — Extract Spanish Text (Free) + Make PDFs Searchable",
    description:
        "OCR Spanish PDFs and scans online. Keep ñ and accents (á, é, í, ó, ú, ü), extract Spanish text, and download a searchable PDF with an invisible text layer. Split long PDFs if you hit a page limit.",
    canonical: `${base}/ocr-spanish/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "article",
        url: `${base}/ocr-spanish/`,
        title: "OCR Spanish Online — Make Spanish PDFs Searchable",
        description:
            "Extract Spanish text from scanned PDFs and images. Keep ñ and accents readable and add a searchable text layer so Ctrl+F works.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "OCR Spanish Online",
        description: "Extract Spanish text from scans and make PDFs searchable (keep ñ and accents).",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/ocr-spanish/` },
        { lang: "x-default", url: `${base}/ocr-spanish/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
