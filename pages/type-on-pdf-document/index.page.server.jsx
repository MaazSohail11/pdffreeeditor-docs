// pages/type-on-pdf-document/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const slug = "/type-on-pdf-document/";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${base}${slug}#howto`,
    name: "How to type on a PDF document online (free, no signup)",
    description:
        "Upload a PDF, add a text box, type where you need, and download the updated PDF instantly — free, no signup, no watermark.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor"],
    step: [
        { "@type": "HowToStep", url: `${base}${slug}#step-upload`, name: "Upload your PDF", text: "Upload your PDF to open it in the browser-based editor." },
        { "@type": "HowToStep", url: `${base}${slug}#step-type`, name: "Add a text box and type", text: "Choose the Text tool, click where you want to type, and add your text. Reposition and resize as needed." },
        { "@type": "HowToStep", url: `${base}${slug}#step-download`, name: "Download the updated PDF", text: "Export instantly and download the updated PDF with no watermark and no signup." }
    ]
};

// MUST match visible FAQ on the page
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I type on a PDF document online for free?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload your PDF, choose the Text tool to add a text box, click where you want to type, then download the updated PDF. No signup and no watermark."
            }
        },
        {
            "@type": "Question",
            name: "Can I type on a scanned PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. You can type on top of a scanned PDF. If you want scanned text to become selectable/searchable, run OCR first."
            }
        },
        {
            "@type": "Question",
            name: "Do you upload my PDF to your servers?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "By default, editing runs locally in your browser so your file stays on your device. If a workflow requires upload, it should be indicated before you proceed."
            }
        },
        {
            "@type": "Question",
            name: "Can I type on a PDF on iPhone or Android?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Use Safari or Chrome on mobile, upload the PDF, add text, and download the updated file."
            }
        },
        {
            "@type": "Question",
            name: "Can I sign after typing?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. After typing, you can sign the PDF and download instantly."
            }
        },
        {
            "@type": "Question",
            name: "Why can’t I edit existing PDF text?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Some PDFs contain selectable text you can edit, but scanned PDFs are images. For scans, use OCR or type new text boxes on top."
            }
        }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Type on PDF", item: `${base}${slug}` }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${base}${slug}#app`,
    name: "Type on PDF Document — PDF Free Editor",
    url: `${base}${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Type on PDF Document Online — Free (No Signup, No Watermark)",
    description:
        "Type on a PDF document online for free. Upload a PDF, add text boxes, fill forms, and download instantly — no signup, no watermark. OCR support for scanned PDFs.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}${slug}` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Type on PDF Document Online — Free (No Signup, No Watermark)",
    description:
        "Type on a PDF document online for free. Add text boxes, fill forms, and download instantly — no signup, no watermark. OCR help for scanned PDFs.",
    canonical: `${base}${slug}`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}${slug}`,
        title: "Type on PDF Document — Free Online Tool",
        description:
            "Upload a PDF, type where you need, and download instantly. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Type on PDF Document — Free Online Tool",
        description:
            "Fill out PDFs neatly: add text boxes and export instantly. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: `${base}${slug}` },
        { lang: "x-default", url: `${base}${slug}` }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
