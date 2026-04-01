// pages/no-signup-pdf-editor/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const url = `${base}/no-signup-pdf-editor/`;

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "No Signup PDF Editor", item: url },
    ],
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: "No Signup PDF Editor — PDF Free Editor by TechRex",
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to edit a PDF with no signup (no login required)",
    description:
        "Upload your PDF, make edits, and download a clean file without creating an account. No signup and no watermark.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor by TechRex"],
    step: [
        {
            "@type": "HowToStep",
            url: `${url}#step-open`,
            name: "Upload your PDF",
            text:
                "Open the no signup PDF editor page and choose a PDF from your device to load it in the editor.",
        },
        {
            "@type": "HowToStep",
            url: `${url}#step-edit`,
            name: "Make changes",
            text:
                "Edit text, add a signature, annotate, organize pages, or compress the PDF — no login required.",
        },
        {
            "@type": "HowToStep",
            url: `${url}#step-download`,
            name: "Download instantly",
            text:
                "Export and download your PDF with no watermark. No account creation is required.",
        },
    ],
};

// MUST match visible FAQ content
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is this PDF editor really no signup?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. You can open, edit, and download PDFs without creating an account or logging in.",
            },
        },
        {
            "@type": "Question",
            name: "Is it free and watermark-free?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes — downloads are watermark-free, and you don’t need to register.",
            },
        },
        {
            "@type": "Question",
            name: "Do you upload my PDF to a server?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "By default, no — your PDF stays on your device while you edit. If a feature ever requires an upload, we clearly tell you before you start.",
            },
        },
        {
            "@type": "Question",
            name: "Can I edit text inside the PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes for PDFs that contain selectable text. If your PDF is scanned (image-only), run OCR first to make text searchable/selectable.",
            },
        },
        {
            "@type": "Question",
            name: "Can I sign a PDF without signing up?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Upload your PDF, add a signature in the editor, and download the signed file instantly — no login required.",
            },
        },
        {
            "@type": "Question",
            name: "What are the practical limits?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "There are no artificial limits from us. Practical limits depend on your device memory/CPU and the PDF size/complexity. If a PDF is huge, split it first.",
            },
        },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "No Signup PDF Editor — Edit PDFs Without Login (No Watermark)",
    description:
        "Edit PDFs without creating an account. No signup, no watermark, and a private workflow by default. Upload, edit, and download instantly.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "No Signup PDF Editor — Edit PDFs Without Login (No Watermark)",
    description:
        "Edit PDFs with no signup and no login required. Watermark-free downloads and a privacy-first workflow by default. Works on desktop and mobile.",
    canonical: url,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url,
        title: "No Signup PDF Editor — Edit PDFs Without Login",
        description:
            "Upload a PDF, edit instantly, and download with no watermark. No signup or login required.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "No Signup PDF Editor — No Login",
        description:
            "Edit PDFs without creating an account. Watermark-free downloads.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url },
        { lang: "x-default", url },
    ],
    structuredData: [breadcrumbSchema, webappSchema, howToSchema, faqSchema, articleSchema],
};
