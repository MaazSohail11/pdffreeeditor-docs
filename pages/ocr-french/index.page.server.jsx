// pages/ocr-french/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to OCR a French PDF online (keep accents, make it searchable)",
    description:
        "Upload a scanned French PDF, select French as the OCR language, run OCR, then download a searchable PDF with an invisible text layer or extract the French text.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/ocr-french/#step-upload`,
            name: "Upload your French PDF",
            text:
                "Upload a scanned (image-only) French PDF. If the file is long, split it into smaller parts before OCR.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/ocr-french/#step-language`,
            name: "Select French as the OCR language",
            text:
                "Choose French to improve recognition accuracy, especially accents and common French words. If the PDF is bilingual, select the dominant language on the page.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/ocr-french/#step-download`,
            name: "Run OCR and download searchable output",
            text:
                "Run OCR and download a searchable PDF (text layer added) or copy the extracted French text for reuse.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is OCR French?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "OCR French extracts French text from scanned images or PDFs. It adds a machine-readable text layer beneath scanned pages so your document becomes searchable and selectable.",
            },
        },
        {
            "@type": "Question",
            name: "Does choosing French as the OCR language improve accuracy?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Language selection can improve OCR accuracy because many OCR engines use language-specific dictionaries and rules, especially for accented characters and common words.",
            },
        },
        {
            "@type": "Question",
            name: "Can OCR keep French accents like é, è, ê, ç, à?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Often yes—if the scan is clear and French is selected. Low-quality scans (blur, skew, heavy compression) can still reduce accuracy.",
            },
        },
        {
            "@type": "Question",
            name: "My French PDF is scanned and Ctrl+F doesn’t work. Why?",
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
        { "@type": "ListItem", position: 4, name: "OCR French", item: `${base}/ocr-french/` },
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
    headline: "OCR French Online — Extract French Text & Make PDFs Searchable",
    description:
        "Run French OCR online to extract text from scanned PDFs and images. Keep accents readable, add a searchable text layer, and download a searchable PDF.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/ocr-french/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "OCR French Online — Extract French Text (Free) + Make PDFs Searchable",
    description:
        "OCR French PDFs and scans online. Keep accents (é, è, ê, ç), extract French text, and download a searchable PDF with an invisible text layer. Split long PDFs if you hit a page limit.",
    canonical: `${base}/ocr-french/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "article",
        url: `${base}/ocr-french/`,
        title: "OCR French Online — Make French PDFs Searchable",
        description:
            "Extract French text from scanned PDFs and images. Keep accents readable and add a searchable text layer so Ctrl+F works.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "OCR French Online",
        description: "Extract French text from scans and make PDFs searchable (keep accents).",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/ocr-french/` },
        { lang: "x-default", url: `${base}/ocr-french/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
