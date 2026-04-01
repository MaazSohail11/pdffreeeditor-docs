// pages/jpg-to-text/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert JPG to text online (OCR)",
    description:
        "Upload a JPG/JPEG image, select the correct language to improve accuracy, run OCR, then copy the extracted text. Convert JPG to editable text in seconds.",
    totalTime: "PT1M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/jpg-to-text/#step-upload`,
            name: "Upload the JPG/JPEG image",
            text:
                "Upload a clear JPG (or JPEG). Crop to the text region and avoid heavy compression for best OCR results.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/jpg-to-text/#step-language`,
            name: "Select the correct language",
            text:
                "Choose the primary language of the image to improve OCR accuracy, especially for accents and language-specific characters.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/jpg-to-text/#step-copy`,
            name: "Run OCR and copy the extracted text",
            text:
                "Run OCR to extract text from the JPG image, then copy and paste it into Word, Google Docs, email, or any editor.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I convert JPG to text online?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload your JPG/JPEG image, select the correct language (recommended), run OCR, then copy the extracted text. This converts a JPG photo or screenshot into editable text.",
            },
        },
        {
            "@type": "Question",
            name: "Does this work for JPEG files too?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. JPG and JPEG are the same format in practice, and OCR works for both.",
            },
        },
        {
            "@type": "Question",
            name: "What kind of JPG images work best for OCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Screenshots and sharp photos with good lighting work best. Avoid blur, skewed angles, heavy compression artifacts, and tiny text for cleaner OCR output.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to choose a language for OCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It’s optional, but selecting the correct language usually improves OCR accuracy—especially for accented letters and language-specific characters.",
            },
        },
        {
            "@type": "Question",
            name: "Can I extract text from a scanned PDF instead of a JPG?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. For PDFs, use OCR PDF or Make PDF Searchable. This page is optimized for JPG/JPEG image uploads.",
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
        { "@type": "ListItem", position: 4, name: "JPG to Text (OCR)", item: `${base}/jpg-to-text/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — JPG to Text (OCR)",
    url: `${base}/jpg-to-text/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "JPG to Text (OCR) — Extract Text from JPG/JPEG Images Online",
    description:
        "Convert JPG to text online with OCR. Extract copyable text from JPG/JPEG screenshots and photos, choose language for better accuracy, and reuse the text anywhere.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/jpg-to-text/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "JPG to Text (OCR) — Extract Text from JPG/JPEG Images Online",
    description:
        "Convert JPG to text online with OCR. Extract text from JPG/JPEG photos and screenshots, select language for better accuracy, then copy the result instantly. Free, fast, and no watermark.",
    canonical: `${base}/jpg-to-text/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/jpg-to-text/`,
        title: "JPG to Text (OCR) — Copy Text from a JPG Image",
        description:
            "Extract text from JPG/JPEG screenshots and photos. Choose language for better OCR accuracy and copy the text instantly.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "JPG to Text (OCR)",
        description:
            "Convert JPG/JPEG images into copyable text online with OCR. Upload, choose language, copy text.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/jpg-to-text/` },
        { lang: "x-default", url: `${base}/jpg-to-text/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
