// pages/screenshot-to-text/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to extract text from a screenshot (OCR)",
    description:
        "Upload a screenshot, crop to the text area, select the correct language, run OCR, then copy the extracted text. Convert screenshot to text without retyping.",
    totalTime: "PT1M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/screenshot-to-text/#step-upload`,
            name: "Upload the screenshot",
            text: "Upload a screenshot image that contains text (chat, error message, PDF, slide, website, etc.).",
        },
        {
            "@type": "HowToStep",
            url: `${base}/screenshot-to-text/#step-crop`,
            name: "Crop to the text area",
            text: "Crop out sidebars, icons, and extra UI so OCR focuses only on the words you need.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/screenshot-to-text/#step-language`,
            name: "Select language, run OCR, and copy text",
            text: "Select the correct language (recommended), run OCR, then copy and paste the extracted text anywhere.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I extract text from a screenshot?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload the screenshot, crop to the text area, choose the correct language (recommended), run OCR, then copy the extracted text.",
            },
        },
        {
            "@type": "Question",
            name: "Is screenshot to text the same as PNG to text?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Most screenshots are PNG, so the workflow is similar. This page is optimized for screenshot intent. If you specifically have a PNG file, use PNG to Text.",
            },
        },
        {
            "@type": "Question",
            name: "Does it work on iPhone and Android screenshots?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Upload the screenshot image and run OCR. For best results, use a sharp screenshot and crop to the text area.",
            },
        },
        {
            "@type": "Question",
            name: "Should I screenshot a PDF to extract text?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Usually no. If you have the PDF file, use OCR PDF or Make PDF Searchable for cleaner results.",
            },
        },
        {
            "@type": "Question",
            name: "What if my PDF is long and there is a page limit?",
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
        { "@type": "ListItem", position: 4, name: "Screenshot to Text (OCR)", item: `${base}/screenshot-to-text/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — Screenshot to Text (OCR)",
    url: `${base}/screenshot-to-text/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Screenshot to Text (OCR) — Extract Text from Screenshot Images Online",
    description:
        "Convert screenshots into copyable text using OCR. Upload a screenshot, crop to the text area, select language for better accuracy, run OCR, and copy text instantly.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/screenshot-to-text/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Screenshot to Text (OCR) — Extract Text from Screenshot Images Online",
    description:
        "Extract text from a screenshot online with OCR. Upload a screenshot, crop to the text area, choose language for better accuracy, run OCR, then copy the text instantly. Free and fast.",
    canonical: `${base}/screenshot-to-text/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/screenshot-to-text/`,
        title: "Screenshot to Text (OCR) — Copy Text from Screenshots",
        description:
            "Convert screenshot images into copyable text. Upload, crop, choose language, run OCR, and copy instantly.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Screenshot to Text (OCR)",
        description: "Extract text from screenshots online. Upload, crop, OCR, copy instantly.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/screenshot-to-text/` },
        { lang: "x-default", url: `${base}/screenshot-to-text/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
