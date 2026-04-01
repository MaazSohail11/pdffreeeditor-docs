// pages/photo-to-text/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert a photo to text online (OCR)",
    description:
        "Upload a clear phone photo, select the correct language to improve accuracy, run OCR, then copy the extracted text. Scan photo text without retyping.",
    totalTime: "PT1M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/photo-to-text/#step-upload`,
            name: "Upload the photo",
            text:
                "Upload a clear photo from your phone camera. Crop to the text region if possible for best OCR results.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/photo-to-text/#step-language`,
            name: "Select the correct language",
            text:
                "Choosing the primary language of the photo usually improves OCR accuracy, especially for accented letters and special characters.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/photo-to-text/#step-copy`,
            name: "Run OCR and copy the extracted text",
            text:
                "Run OCR to extract text from the photo, then copy and paste it into Word, Google Docs, email, or any editor.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I convert a photo to text online?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload a clear photo, choose the correct language (recommended), run OCR, then copy the extracted text. This turns a phone camera photo into editable text.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to select a language?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It’s optional, but selecting the correct language usually improves OCR accuracy—especially for accented letters and language-specific characters.",
            },
        },
        {
            "@type": "Question",
            name: "What kind of photos work best for OCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Sharp, well-lit photos where text is large and straight. Avoid blur, shadows, glare, extreme angles, and tiny text for best results.",
            },
        },
        {
            "@type": "Question",
            name: "Does OCR work for handwriting in photos?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "OCR is best on printed text. Neat handwriting can work, but results vary—proofread important text.",
            },
        },
        {
            "@type": "Question",
            name: "I have a scanned PDF, not a photo. What should I use?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use OCR PDF or Make PDF Searchable for PDFs. This page is optimized for phone photos and images.",
            },
        },
        {
            "@type": "Question",
            name: "My document is long and there is a page limit—what should I do?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use Split PDF to extract only the pages you need, then run OCR on those pages.",
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
        { "@type": "ListItem", position: 4, name: "Photo to Text (OCR)", item: `${base}/photo-to-text/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — Photo to Text (OCR)",
    url: `${base}/photo-to-text/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Photo to Text (OCR) — Scan Photo Text from Your Phone",
    description:
        "Convert a phone photo into editable text using OCR. Upload a clear photo, choose language for better accuracy, run OCR, and copy the extracted text instantly.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/photo-to-text/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Photo to Text (OCR) — Scan Photo Text from Your Phone Online",
    description:
        "Convert photo to text online with OCR. Upload a phone photo, select language for better accuracy, run OCR, and copy the extracted text instantly. Free, fast, no watermark.",
    canonical: `${base}/photo-to-text/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/photo-to-text/`,
        title: "Photo to Text (OCR) — Scan Photo Text Instantly",
        description:
            "Extract text from phone photos of documents, notes, receipts, and signs. Choose language for better OCR accuracy and copy text instantly.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Photo to Text (OCR)",
        description:
            "Scan photo text from your phone. Upload, choose language, run OCR, copy instantly.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/photo-to-text/` },
        { lang: "x-default", url: `${base}/photo-to-text/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
