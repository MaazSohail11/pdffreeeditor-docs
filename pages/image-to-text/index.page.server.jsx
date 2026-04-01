// pages/image-to-text/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert an image to text online (OCR)",
    description:
        "Upload an image (photo or screenshot), choose the correct language for better accuracy, run OCR, then copy the extracted text. Convert picture to text in seconds.",
    totalTime: "PT1M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/image-to-text/#step-upload`,
            name: "Upload the image",
            text:
                "Upload a clear image that contains text (screenshot, photo, or scanned page image). Crop to the text region for best results.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/image-to-text/#step-language`,
            name: "Select the correct language",
            text:
                "Choose the primary language of the image to improve OCR accuracy, especially for accented letters and language-specific characters.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/image-to-text/#step-copy`,
            name: "Run OCR and copy the extracted text",
            text:
                "Run OCR to extract text from the image, then copy and paste it into Word, Google Docs, email, or any editor.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I convert an image to text online?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload your image, select the correct language (recommended), run OCR, and copy the extracted text. This turns a screenshot or photo into editable text.",
            },
        },
        {
            "@type": "Question",
            name: "What images work best for OCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Screenshots and sharp photos work best. Avoid blur, shadows, skewed angles, and tiny text for cleaner OCR output.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to choose a language?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It’s optional, but selecting the correct language usually improves OCR accuracy—especially for accented letters and similar-looking characters.",
            },
        },
        {
            "@type": "Question",
            name: "Can this extract text from a scanned PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "For PDFs, use OCR PDF or Make PDF Searchable. This page is designed for image files like screenshots and photos.",
            },
        },
        {
            "@type": "Question",
            name: "Is my image stored?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "For sensitive documents, avoid uploading confidential data and review the Privacy policy. For testing, use sample images or redact sensitive content.",
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
        { "@type": "ListItem", position: 4, name: "Image to Text (OCR)", item: `${base}/image-to-text/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — Image to Text (OCR)",
    url: `${base}/image-to-text/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Image to Text (OCR) — Extract Text from Photos & Screenshots",
    description:
        "Convert image to text online with OCR. Extract copyable text from photos, screenshots, and scanned images. Choose language for better accuracy and reuse the text anywhere.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/image-to-text/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Image to Text (OCR) — Extract Text from Images Online (Free)",
    description:
        "Convert image to text online with OCR. Extract text from screenshots and photos, choose language for better accuracy, and copy the result instantly. Free, fast, and no watermark.",
    canonical: `${base}/image-to-text/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/image-to-text/`,
        title: "Image to Text (OCR) — Copy Text from Image",
        description:
            "Extract text from screenshots, photos, and scanned images. Choose language for better OCR accuracy and copy the result instantly.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Image to Text (OCR)",
        description:
            "Extract text from images online. OCR screenshots and photos into copyable text in seconds.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/image-to-text/` },
        { lang: "x-default", url: `${base}/image-to-text/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
