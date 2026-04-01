// pages/pdf-to-excel-ocr/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert a scanned PDF to Excel (OCR)",
    description:
        "Use OCR to recognize text in a scanned PDF, then convert the OCR’d PDF into an editable Excel (XLSX) spreadsheet. OCR is capped to the first 500 pages for fast processing—split PDFs to OCR only what you need.",
    totalTime: "PT3M",
    tool: ["Web browser", "TechRex OCR Tool", "TechRex PDF to Excel Converter"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/pdf-to-excel-ocr/#step-upload`,
            name: "Upload the scanned PDF and run OCR",
            text:
                "Upload your scanned (image-only) PDF and run OCR to create a searchable text layer. If the PDF is longer than 500 pages, split it and OCR only the pages that contain tables.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/pdf-to-excel-ocr/#step-language`,
            name: "Select the correct language",
            text:
                "Choose the primary document language to improve OCR accuracy, especially for accents and similar-looking characters.",
        },
        {
            "@type": "HowToStep",
            url: `${base}/pdf-to-excel-ocr/#step-excel`,
            name: "Convert the OCR’d PDF to Excel (XLSX)",
            text:
                "After OCR finishes, convert the searchable PDF to Excel using the PDF to Excel converter, then verify and clean up cells in Excel if needed.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I convert a scanned PDF to Excel (OCR)?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use the OCR-first workflow: OCR the scanned PDF to create a searchable text layer, then convert the OCR’d PDF to Excel (XLSX). This helps extract tables and numbers without manual retyping.",
            },
        },
        {
            "@type": "Question",
            name: "Why can’t I convert scanned PDF to Excel directly?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Scanned PDFs are images. Without OCR there is no real text to extract into spreadsheet cells. OCR converts the image into text first.",
            },
        },
        {
            "@type": "Question",
            name: "Will the Excel file keep the same table formatting?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Simple tables often extract well, but complex layouts (merged cells, multi-column pages, borders-as-images) may require cleanup after conversion.",
            },
        },
        {
            "@type": "Question",
            name: "Is there a page limit?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. OCR is capped to the first 500 pages for fast processing. If your PDF is longer, split the PDF and OCR only the pages you need.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to choose a language for OCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It’s optional but recommended. Selecting the correct language usually improves OCR accuracy, especially for accented letters and similar-looking characters.",
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
        { "@type": "ListItem", position: 4, name: "Scanned PDF to Excel (OCR)", item: `${base}/pdf-to-excel-ocr/` },
    ],
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TechRex — Scanned PDF to Excel (OCR)",
    url: `${base}/pdf-to-excel-ocr/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: `${base}/logo.png`,
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Scanned PDF to Excel (OCR) — Convert PDF Tables to XLSX",
    description:
        "Convert scanned (image-only) PDFs into editable Excel spreadsheets using OCR-first workflow. Run OCR to create a text layer, then convert to XLSX. OCR capped to the first 500 pages for fast processing.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/pdf-to-excel-ocr/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Scanned PDF to Excel (OCR) — Convert PDF Tables to XLSX Online",
    description:
        "Convert scanned PDF to Excel using OCR. Extract tables and numbers into editable XLSX cells. OCR capped to first 500 pages—split PDF pages to OCR only what you need for fast processing.",
    canonical: `${base}/pdf-to-excel-ocr/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}/pdf-to-excel-ocr/`,
        title: "Scanned PDF to Excel (OCR) — Extract Tables into XLSX",
        description:
            "OCR your scanned PDF first (text layer), then convert to Excel (XLSX). Best workflow for invoices, statements, and tables.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Scanned PDF to Excel (OCR)",
        description:
            "Convert scanned PDF tables into editable Excel cells using OCR-first workflow. Split long PDFs to stay under the OCR cap.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/pdf-to-excel-ocr/` },
        { lang: "x-default", url: `${base}/pdf-to-excel-ocr/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
