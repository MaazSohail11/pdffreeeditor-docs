// pages/sign-pdf-document-private/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const url = `${base}/sign-pdf-document-private/`;

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Private PDF Signing", item: url },
    ],
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: "Sign PDF Document Privately — PDF Free Editor by TechRex",
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to sign a PDF document privately (no signup)",
    description:
        "Open the editor, add your signature, and download a signed PDF with no signup and no watermark. Privacy-first workflow by default.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor by TechRex"],
    step: [
        {
            "@type": "HowToStep",
            url: `${url}#step-open`,
            name: "Open the editor and choose your PDF",
            text:
                "Open the page and select a PDF from your device to load it in the editor.",
        },
        {
            "@type": "HowToStep",
            url: `${url}#step-sign`,
            name: "Add your signature",
            text:
                "Draw, type, or upload a signature image and place it where required in the document.",
        },
        {
            "@type": "HowToStep",
            url: `${url}#step-download`,
            name: "Download the signed PDF",
            text:
                "Export and download your signed PDF instantly. No signup is required and the output is watermark-free.",
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
            name: "How can I sign a PDF document privately?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Open this page, upload your PDF, add your signature in the editor, and download the signed file. By default, the editing workflow runs locally in your browser so your PDF stays on your device.",
            },
        },
        {
            "@type": "Question",
            name: "Do you upload my PDF to a server when I sign it?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "By default, no — your PDF stays on your device while you sign. If a feature ever requires an upload, we clearly tell you before you start.",
            },
        },
        {
            "@type": "Question",
            name: "Can I draw, type, or upload a signature?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. You can draw your signature, type it, or upload an image of your signature and place it anywhere on the page.",
            },
        },
        {
            "@type": "Question",
            name: "Does it work on iPhone and Android?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Use Safari on iPhone/iPad or Chrome on Android. For large PDFs, close other heavy tabs for smoother performance.",
            },
        },
        {
            "@type": "Question",
            name: "Is it free and watermark-free?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes — no signup, no watermark. You can sign and download your PDF instantly.",
            },
        },
        {
            "@type": "Question",
            name: "Is a “private signature” legally valid?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Many documents accept an electronic signature, but legality depends on your country, document type, and the receiving party’s requirements. If you need audit trails or identity verification, use a dedicated e-signature platform.",
            },
        },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sign PDF Document Privately — No Signup, No Watermark (Privacy-first)",
    description:
        "Sign a PDF document with a private workflow by default: no signup, no watermark, and local-first editing in your browser.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` },
    },
};

export const seo = {
    title: "Sign PDF Document Privately — No Signup, No Watermark",
    description:
        "Sign a PDF document privately with a local-first workflow by default. No signup, no watermark. Draw/type/upload signature and download instantly (mobile-friendly).",
    canonical: url,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url,
        title: "Sign PDF Document Privately — No Signup, No Watermark",
        description:
            "Upload a PDF, add your signature, and download instantly. Privacy-first workflow by default — no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Sign PDF Privately — No Signup",
        description:
            "Sign PDFs with a private workflow by default. No watermark, mobile-friendly.",
        image: `${base}/fpe-og-1200x630.png`,
    },
    hreflang: [
        { lang: "en", url },
        { lang: "x-default", url },
    ],
    structuredData: [breadcrumbSchema, webappSchema, howToSchema, faqSchema, articleSchema],
};
