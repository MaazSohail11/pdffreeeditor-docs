// pages/png-to-text/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert PNG to text online (OCR)",
    description:
        "Upload a PNG image or screenshot, select the correct language to improve accuracy, run OCR, then copy the extracted text. Convert PNG to editable text in seconds.",
    totalTime: "PT1M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/png-to-text/#step-upload`,
            name: "Upload the PNG image",
            text:
                "Upload a PNG screenshot or image that contains text. Crop to the text region for best OCR results.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/png-to-text/#step-language`,
            name: "Select the correct language",
            text:
                "Choose the primary language of the PNG image to improve OCR accuracy, especially for accents and language-specific characters.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/png-to-text/#step-copy`,
            name: "Run OCR and copy the extracted text",
            text:
                "Run OCR to extract text from the PNG image, then copy and paste it into Word, Google Docs, email, or any editor.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I convert PNG to text online?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload your PNG image, select the correct language (recommended), run OCR, then copy the extracted text. This converts a PNG screenshot into editable text.",
            },
        },
        {
            "@type": "Question",
            name: "Why is PNG great for screenshots?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "PNG screenshots typically preserve sharp text edges. That often helps OCR produce cleaner results than heavily compressed images.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to choose a language for PNG OCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It’s optional, but selecting the correct language usually improves OCR accuracy—especially for accented letters and language-specific characters.",
            },
        },
        {
            "@type": "Question",
            name: "Can I OCR a scanned PDF instead of a PNG?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. For PDFs, use OCR PDF or Make PDF Searchable. This page is optimized for PNG images and screenshots.",
            },
        },
        {
            "@type": "Question",
            name: "Can I convert multiple pages at once?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "For multi-page PDFs, split the PDF to keep only the pages you need, then run OCR. For many images, combine them into a PDF for a single searchable output.",
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
        { "@type": "ListItem", position: 4, name: "PNG to Text (OCR)", item: `${base}/png-to-text/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — PNG to Text (OCR)",
    url: `${base}/png-to-text/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PNG to Text (OCR) — Extract Text from PNG Screenshots Online",
    description:
        "Convert PNG to text online with OCR. Extract copyable text from PNG screenshots and images, choose language for better accuracy, and reuse the text anywhere.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/png-to-text/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "PNG to Text (OCR) — Extract Text from PNG Screenshots Online",
    description:
        "Convert PNG to text online with OCR. Extract text from PNG screenshots, select language for better accuracy, then copy the result instantly. Free, fast, and no watermark.",
    canonical: `${base}/png-to-text/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/png-to-text/`,
        title: "PNG to Text (OCR) — Copy Text from a PNG Screenshot",
        description:
            "Extract text from PNG screenshots and images. Choose language for better OCR accuracy and copy the text instantly.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "PNG to Text (OCR)",
        description:
            "Convert PNG screenshots into copyable text online with OCR. Upload, choose language, copy text.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/png-to-text/` },
        { lang: "x-default", url: `${base}/png-to-text/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
