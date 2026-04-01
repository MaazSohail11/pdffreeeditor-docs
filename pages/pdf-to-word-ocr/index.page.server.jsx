// pages/pdf-to-word-ocr/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert a scanned PDF to Word (OCR)",
    description:
        "Use OCR to recognize text in a scanned PDF, then convert the OCR’d PDF to an editable Word (DOCX) document. OCR is capped to the first 500 pages for fast processing.",
    totalTime: "PT3M",
    tool: ["Web browser", "TechRex OCR Tool", "TechRex PDF to Word Converter"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/pdf-to-word-ocr/#step-upload`,
            name: "Upload the scanned PDF and run OCR",
            text:
                "Upload your scanned (image-only) PDF and run OCR to create a searchable text layer. If the PDF is longer than 500 pages, split it and OCR only required pages.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/pdf-to-word-ocr/#step-language`,
            name: "Select the correct language",
            text:
                "Choose the document language to improve OCR accuracy, especially for accents and similar-looking characters.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/pdf-to-word-ocr/#step-convert`,
            name: "Convert the OCR’d PDF to Word (DOCX)",
            text:
                "After OCR finishes, convert the searchable PDF to Word using the PDF to Word converter to get an editable DOCX document.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I convert a scanned PDF to an editable Word document?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use the 2-step method: run OCR on the scanned PDF to create a real text layer, then convert that OCR’d PDF to Word (DOCX). This avoids retyping and makes the content editable.",
            },
        },
        {
            "@type": "Question",
            name: "Why can’t I convert scanned PDF to Word directly?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Scanned PDFs are images. Without OCR, there is no real text to convert. OCR turns the scan into text first, then Word conversion becomes possible.",
            },
        },
        {
            "@type": "Question",
            name: "Will the Word file keep the same layout?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Simple documents often convert well. Complex layouts (tables, multi-column, forms) may need cleanup after conversion because OCR focuses on recognizing text and layout fidelity depends on the document.",
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
            name: "Do I need to choose a language for OCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It’s optional, but selecting the correct language usually improves OCR accuracy—especially for accented letters and similar-looking characters.",
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
        { "@type": "ListItem", position: 4, name: "Scanned PDF to Word (OCR)", item: `${base}/pdf-to-word-ocr/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — Scanned PDF to Word (OCR)",
    url: `${base}/pdf-to-word-ocr/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Scanned PDF to Word (OCR) — Convert Scan to Editable DOCX",
    description:
        "Convert scanned (image-only) PDFs into editable Word documents using the OCR-first workflow. Run OCR to create a text layer, then convert to DOCX. OCR capped to the first 500 pages for fast processing.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/pdf-to-word-ocr/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Scanned PDF to Word (OCR) — Convert to Editable DOCX Online",
    description:
        "Convert scanned PDF to Word using OCR. Fix “can’t select text” PDFs by creating a text layer first, then convert the OCR’d PDF to editable DOCX. OCR capped to first 500 pages—split pages to OCR only what you need.",
    canonical: `${base}/pdf-to-word-ocr/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/pdf-to-word-ocr/`,
        title: "Scanned PDF to Word (OCR) — Editable DOCX",
        description:
            "OCR your scanned PDF first (text layer), then convert it to Word (DOCX). Fix non-selectable scans and avoid retyping.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Scanned PDF to Word (OCR)",
        description:
            "Convert scan to editable Word with OCR-first workflow. Split long PDFs to stay under the OCR cap.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/pdf-to-word-ocr/` },
        { lang: "x-default", url: `${base}/pdf-to-word-ocr/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
