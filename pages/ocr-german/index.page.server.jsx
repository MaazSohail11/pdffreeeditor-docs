// pages/ocr-german/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to OCR a German PDF online (keep ä/ö/ü/ß, make it searchable)",
    description:
        "Upload a scanned German PDF, select German (Deutsch), run OCR, then download a searchable PDF with an invisible text layer or extract the German text.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/ocr-german/#step-upload`,
            name: "Upload your German PDF",
            text:
                "Upload a scanned (image-only) German PDF. If the file is long, split it into smaller PDFs before OCR.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/ocr-german/#step-language`,
            name: "Select German (Deutsch)",
            text:
                "If available, select German to improve recognition accuracy for umlauts (ä, ö, ü) and ß. For bilingual pages, choose the dominant language shown on the page.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/ocr-german/#step-download`,
            name: "Run OCR and download searchable output",
            text:
                "Run OCR and download a searchable PDF (text layer added) or copy the extracted German text for reuse.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is OCR German?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "OCR German extracts German text from scanned images or PDFs and can add a machine-readable text layer beneath scanned pages so your document becomes searchable and selectable.",
            },
        },
        {
            "@type": "Question",
            name: "Does selecting German (Deutsch) improve OCR accuracy?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Often yes. Many OCR engines use language-specific dictionaries and rules. Selecting German can improve recognition for umlauts (ä, ö, ü), ß, and common German words.",
            },
        },
        {
            "@type": "Question",
            name: "Can OCR keep German characters like ä, ö, ü, ß?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Usually yes if the scan is clear and German is selected. Low-quality scans (blur, skew, heavy compression) can still reduce accuracy.",
            },
        },
        {
            "@type": "Question",
            name: "My German PDF is scanned and Ctrl+F doesn’t work. Why?",
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
        { "@type": "ListItem", position: 4, name: "OCR German", item: `${base}/ocr-german/` },
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
    headline: "OCR German Online — Extract German Text & Make PDFs Searchable",
    description:
        "Run German OCR online to extract text from scanned PDFs and images. Keep umlauts and ß readable, add a searchable text layer, and download a searchable PDF.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/ocr-german/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "OCR German Online — Extract German Text (Free) + Make PDFs Searchable",
    description:
        "OCR German PDFs and scans online. Keep umlauts (ä, ö, ü) and ß, extract German text, and download a searchable PDF with an invisible text layer. Split long PDFs if you hit a page limit.",
    canonical: `${base}/ocr-german/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "article",
        url: `${base}/ocr-german/`,
        title: "OCR German Online — Make German PDFs Searchable",
        description:
            "Extract German text from scanned PDFs and images. Keep umlauts and ß readable and add a searchable text layer so Ctrl+F works.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "OCR German Online",
        description: "Extract German text from scans and make PDFs searchable (keep ä/ö/ü/ß).",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/ocr-german/` },
        { lang: "x-default", url: `${base}/ocr-german/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
