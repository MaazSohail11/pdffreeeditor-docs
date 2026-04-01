// pages/searchable-vs-non-searchable-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to check if a PDF is searchable (and make it searchable)",
    description:
        "Use three quick tests (highlight, Ctrl+F, zoom) to check if a PDF is searchable. If it is scanned/image-only, run OCR to add a text layer and make the PDF searchable.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex OCR Tool"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}/searchable-vs-non-searchable-pdf/#test-highlight`,
            name: "Try highlighting a single word",
            text:
                "If you can select a single word or letter, the PDF contains real text. If the whole page highlights like a picture, it’s likely scanned (image-only).",
        },
        {
            "@type": "HowToStep",
            url: `${base}/searchable-vs-non-searchable-pdf/#test-ctrlf`,
            name: "Try Ctrl+F (or Command+F)",
            text:
                "Search for a word you can clearly see. If nothing is found, the PDF is probably not searchable (no text layer).",
        },
        {
            "@type": "HowToStep",
            url: `${base}/searchable-vs-non-searchable-pdf/#fix`,
            name: "Run OCR to add a text layer",
            text:
                "Upload the scanned PDF and run OCR. OCR adds an invisible text layer so the PDF becomes searchable, selectable, and copyable.",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is a searchable PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "A searchable PDF contains an actual text layer. You can highlight words, copy/paste text, and search using Ctrl+F/Command+F.",
            },
        },
        {
            "@type": "Question",
            name: "Why is my PDF not searchable if it clearly shows text?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It may be a scanned image PDF without an underlying text layer. It looks like text, but computers only see an image until OCR adds real text.",
            },
        },
        {
            "@type": "Question",
            name: "What does OCR do to a scanned PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "OCR detects the letters in the scanned image and creates an invisible text layer underneath, making the PDF searchable and copyable.",
            },
        },
        {
            "@type": "Question",
            name: "Can a PDF be partially searchable?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Some PDFs contain a mix of real text pages and scanned image pages. OCR the scanned pages for consistent search and copy results.",
            },
        },
        {
            "@type": "Question",
            name: "My PDF is long and there is a page limit. What should I do?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use Split PDF to keep only the pages you need, then run OCR on the smaller file.",
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
        {
            "@type": "ListItem",
            position: 4,
            name: "Searchable vs Non-Searchable PDF",
            item: `${base}/searchable-vs-non-searchable-pdf/`,
        },
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
    headline: "Searchable vs Non-Searchable PDF — How to Tell the Difference and Fix It",
    description:
        "Learn what makes a PDF searchable, how to test if a PDF is text-searchable, and how to convert scanned image PDFs into searchable PDFs using OCR.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/searchable-vs-non-searchable-pdf/` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Searchable vs Non-Searchable PDF — How to Tell (and Fix It Fast)",
    description:
        "Searchable vs non-searchable PDF: learn the difference, run 10-second tests (highlight, Ctrl+F), and make scanned PDFs searchable by adding a text layer with OCR.",
    canonical: `${base}/searchable-vs-non-searchable-pdf/`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "article",
        url: `${base}/searchable-vs-non-searchable-pdf/`,
        title: "Searchable vs Non-Searchable PDF — Fix Scanned PDFs with OCR",
        description:
            "If Ctrl+F doesn’t work and you can’t copy text, your PDF is likely scanned. Learn the tests and convert it to searchable with OCR.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Searchable vs Non-Searchable PDF",
        description: "Learn the tests and convert scanned PDFs into searchable PDFs using OCR.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url: `${base}/searchable-vs-non-searchable-pdf/` },
        { lang: "x-default", url: `${base}/searchable-vs-non-searchable-pdf/` },
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema],
};
