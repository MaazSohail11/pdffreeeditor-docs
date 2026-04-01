// pages/offline-pdf-editor-browser/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const url = `${base}/offline-pdf-editor-browser/`;

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Offline PDF Editor", item: url },
    ],
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: "Offline PDF Editor in Your Browser — PDF Free Editor by TechRex",
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to edit a PDF locally in your browser (offline-style)",
    description:
        "Open the editor, make changes locally in your browser, and export a clean PDF with no signup and no watermark.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor by TechRex"],
    step: [
        {
            "@type": "HowToStep",
            url: `${url}#step-open`,
            name: "Open the editor",
            text:
                "Open the offline-style PDF editor page and choose a PDF from your device to load it in the browser.",
        },
        {
            "@type": "HowToStep",
            url: `${url}#step-edit`,
            name: "Make changes locally",
            text:
                "Edit text, annotate, sign, redact, or organize pages. Your PDF stays on your device by default.",
        },
        {
            "@type": "HowToStep",
            url: `${url}#step-export`,
            name: "Export and download",
            text:
                "Download the updated PDF instantly. No signup is required and the output file is watermark-free.",
        },
    ],
};

// MUST match visible FAQ content on the page
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is this really an offline PDF editor?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "You typically need an internet connection to open the site the first time. After the editor loads, editing runs locally in your browser (your PDF stays on your device by default). For fully offline use after refresh, the site must cache its app files using a service worker/PWA approach.",
            },
        },
        {
            "@type": "Question",
            name: "Do you upload my PDF to a server?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "By default, no — editing runs locally in your browser, so your file stays on your device. If a feature ever requires an upload, we make that clear before you start.",
            },
        },
        {
            "@type": "Question",
            name: "Can I edit PDF text in the browser?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. If your PDF contains selectable text, you can edit it directly. If the PDF is scanned (image-only), you may need OCR to make the text searchable/selectable.",
            },
        },
        {
            "@type": "Question",
            name: "Can I redact or whiteout sensitive info locally?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. You can cover or redact sensitive sections inside the editor and export a new PDF. Always verify the exported file to ensure sensitive content is removed as intended.",
            },
        },
        {
            "@type": "Question",
            name: "Does it work on iPhone and Android?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Use Safari on iPhone/iPad or Chrome on Android. For best performance with large PDFs, close other heavy tabs before editing.",
            },
        },
        {
            "@type": "Question",
            name: "Is it free and watermark-free?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — you can edit and export without signup and without watermarks.",
            },
        },
        {
            "@type": "Question",
            name: "What are the practical limits?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "There are no artificial site limits. Practical limits depend on your device memory/CPU and the PDF size/complexity. If a file is huge, split it into smaller parts first.",
            },
        },
        {
            "@type": "Question",
            name: "What else can I do besides editing?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "You can sign, annotate, merge/split pages, and more. Browse all tools on the Tools page.",
            },
        },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Offline PDF Editor in Your Browser — No Upload, No Signup (Privacy-first)",
    description:
        "Edit PDFs locally in your browser with an offline-style workflow: no upload by default, no signup, and no watermark. Great for unstable internet and sensitive documents.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Offline PDF Editor in Browser — No Upload, No Signup, No Watermark",
    description:
        "Edit PDFs locally in your browser with an offline-style workflow. No upload by default, no signup, no watermark. Works on desktop and mobile.",
    canonical: url,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url,
        title: "Offline PDF Editor in Browser — Edit Locally (Privacy-first)",
        description:
            "Open a PDF and edit locally in your browser. No upload by default, no signup, no watermark — great for unstable internet and sensitive files.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Offline PDF Editor in Browser — Edit Locally",
        description:
            "Privacy-first PDF editor that runs locally in your browser. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url },
        { lang: "x-default", url },
    ],
    structuredData: [breadcrumbSchema, webappSchema, howToSchema, faqSchema, articleSchema],
};
