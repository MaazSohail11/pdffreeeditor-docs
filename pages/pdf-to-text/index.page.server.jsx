// pages/pdf-to-text/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to extract text from a PDF (including scanned PDFs)",
    description:
        "Upload a PDF, choose the correct language, and extract text using OCR. For fast processing, OCR is capped to the first 500 pages—split PDFs to OCR only the pages you need.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex PDF to Text Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/pdf-to-text/#step-upload`,
            name: "Upload your PDF",
            text:
                "Upload a PDF file. If it’s longer than 500 pages, split the PDF and upload only the required pages for faster OCR.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/pdf-to-text/#step-language`,
            name: "Choose the correct language",
            text:
                "Select the primary language of the document to improve OCR accuracy, especially for accented characters and similar-looking letters.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/pdf-to-text/#step-result`,
            name: "Copy or export the extracted text",
            text:
                "Copy the extracted text and reuse it anywhere. For a searchable PDF instead of raw text, use OCR PDF or Make PDF Searchable.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I extract text from a PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload your PDF. If it’s scanned/image-only, OCR recognizes the characters and produces real text you can copy and reuse.",
            },
        },
        {
            "@type": "Question",
            name: "How do I extract text from a scanned PDF (scanned PDF to text)?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Scanned PDFs are images. OCR reads the page image and converts it to text. Select the correct language for best accuracy, then copy the extracted text.",
            },
        },
        {
            "@type": "Question",
            name: "Why can’t I copy text from my PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Many PDFs are scans or flattened images with no text layer. OCR is required to convert the page image into selectable/copyable text.",
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
            name: "Will OCR preserve formatting (tables/columns)?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "OCR focuses on recognizing text. Simple paragraphs often extract well, but complex formatting like tables and multi-column layouts may need cleanup after extraction.",
            },
        },
        {
            "@type": "Question",
            name: "How can I improve OCR accuracy?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use clear scans, avoid blur and shadows, keep pages straight, and select the correct language before OCR. Higher-quality scans usually produce better results.",
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
        { "@type": "ListItem", position: 4, name: "PDF to Text", item: `${base}/pdf-to-text/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — PDF to Text Converter (OCR)",
    url: `${base}/pdf-to-text/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PDF to Text Converter (OCR) — Extract Text from PDF and Scanned PDFs",
    description:
        "Convert PDF to text online. Extract text from PDFs, including scanned/image-only PDFs using OCR. Copy the extracted text and reuse it anywhere. OCR capped to first 500 pages for fast processing.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/pdf-to-text/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "PDF to Text Converter (OCR) — Extract Text from PDF & Scanned PDFs",
    description:
        "Extract text from PDF online, including scanned PDFs (OCR). Convert scanned PDF to text, copy text fast, and reuse it anywhere. OCR capped to first 500 pages—split pages to OCR only what you need.",
    canonical: `${base}/pdf-to-text/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/pdf-to-text/`,
        title: "PDF to Text Converter (OCR) — Extract Text from PDF",
        description:
            "Convert PDF to text online. Extract text from scanned PDFs using OCR, choose language for accuracy, and copy results fast.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "PDF to Text Converter (OCR)",
        description:
            "Extract text from PDFs and scanned PDFs (OCR). Copy text fast. Free online PDF to text converter.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/pdf-to-text/` },
        { lang: "x-default", url: `${base}/pdf-to-text/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
