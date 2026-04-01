// pages/languages/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Which OCR languages do you support?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "We currently support English, French, Spanish, Portuguese, German, and Italian. Choose the main language on the page for best OCR accuracy.",
            },
        },
        {
            "@type": "Question",
            name: "Does choosing the OCR language matter?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. OCR engines use language-specific rules and dictionaries/models. Selecting the correct language can improve recognition accuracy, especially for accents and non-English text.",
            },
        },
        {
            "@type": "Question",
            name: "What if my PDF has multiple languages?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Pick the dominant language (the one most of the page is written in). If the document is heavily mixed, OCR in the primary language and proofread key lines.",
            },
        },
        {
            "@type": "Question",
            name: "Why is OCR missing accents (é, ñ, ç)?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "This is commonly caused by a language mismatch or a low-quality scan. Select the correct language and ensure the scan is sharp and not skewed or blurry.",
            },
        },
        {
            "@type": "Question",
            name: "My PDF is too long and there’s a page limit. What should I do?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Split the PDF into smaller files, keep only the pages you need, then OCR those parts.",
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
        { "@type": "ListItem", position: 4, name: "OCR Languages", item: `${base}/languages/` },
    ],
};

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Supported OCR languages",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "English" },
        { "@type": "ListItem", position: 2, name: "French" },
        { "@type": "ListItem", position: 3, name: "Spanish" },
        { "@type": "ListItem", position: 4, name: "Portuguese" },
        { "@type": "ListItem", position: 5, name: "German" },
        { "@type": "ListItem", position: 6, name: "Italian" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "OCR Languages Supported (and how to choose the best OCR language)",
    description:
        "See which OCR languages are supported and learn how to choose the correct OCR language for better accuracy—especially for accents and non-English documents.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/languages/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
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

export const seo = {
    title: "OCR Languages Supported (English, French, Spanish, Portuguese, German, Italian)",
    description:
        "Supported OCR languages: English, French, Spanish, Portuguese, German, Italian. Learn how to choose the correct OCR language for better accuracy and cleaner text extraction.",
    canonical: `${base}/languages/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "article",
        url: `${base}/languages/`,
        title: "OCR Languages Supported + How to Choose the Best OCR Language",
        description:
            "See supported OCR languages and learn how to pick the correct language to improve recognition accuracy.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "OCR Languages Supported",
        description: "Supported OCR languages + how to choose the correct language for better accuracy.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/languages/` },
        { lang: "x-default", url: `${base}/languages/` },
    ],
    structuredData: [faqSchema, breadcrumbSchema, itemListSchema, webAppSchema, articleSchema],
};
