// pages/draw-on-pdf-online/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const canonical = `${base}/draw-on-pdf-online/`;

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${canonical}#howto`,
    name: "How to draw on a PDF online for free (no signup)",
    description:
        "Upload your PDF, choose the draw/pen tool, and download the updated file. Add handwriting, arrows, circles, and notes on any PDF in your browser.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor"],
    step: [
        {
            "@type": "HowToStep",
            url: `${canonical}#step-upload`,
            name: "Upload your PDF",
            text: "Open the page and upload your PDF in the drop box to start drawing on it."
        },
        {
            "@type": "HowToStep",
            url: `${canonical}#step-draw`,
            name: "Choose the draw tool",
            text: "Pick a pen color and thickness, then draw notes, arrows, circles, or handwriting directly on the PDF."
        },
        {
            "@type": "HowToStep",
            url: `${canonical}#step-download`,
            name: "Download the updated PDF",
            text: "Export and download your PDF instantly. The output is watermark-free."
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can I draw on a PDF online for free?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Upload your PDF, use the draw/pen tool to add handwriting or shapes, then download — no signup and no watermark."
            }
        },
        {
            "@type": "Question",
            name: "Do you upload my PDF to your servers?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "By default, the editor runs in your browser so your PDF stays on your device. If any feature ever needs an upload, you’ll see it clearly before starting."
            }
        },
        {
            "@type": "Question",
            name: "Can I draw on a scanned PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Drawing works on scanned PDFs because you’re writing on top of the page image."
            }
        },
        {
            "@type": "Question",
            name: "Does it work on iPhone and Android?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Open this page in Safari (iPhone/iPad) or Chrome (Android). Zoom in for precise drawing."
            }
        },
        {
            "@type": "Question",
            name: "How do I remove or undo drawings?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Use undo while editing. If you downloaded already, re-open the file and remove the drawn objects in the editor."
            }
        },
        {
            "@type": "Question",
            name: "Will my drawings change PDF quality?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Your original PDF stays unchanged; you download a new copy that includes your drawings. Text and layout remain intact."
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
        { "@type": "ListItem", position: 3, name: "Draw on PDF", item: canonical }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${canonical}#app`,
    name: "Draw on PDF Online — Free PDF Drawing Tool",
    url: canonical,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Draw on PDF Online Free — Add Handwriting, Notes & Shapes (No Signup)",
    description:
        "Draw on PDF online for free. Add handwriting, arrows, circles, and notes in your browser, then download instantly with no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Draw on PDF Online Free — Add Handwriting & Notes (No Signup, No Watermark)",
    description:
        "Draw on PDFs online for free. Add handwriting, arrows, circles and notes in your browser, then download instantly. No signup, no watermark.",
    canonical,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: canonical,
        title: "Draw on PDF Online Free — Add Handwriting & Notes",
        description:
            "Upload a PDF and draw on it in seconds. Free, no signup, no watermark — download instantly.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Draw on PDF Online — Free PDF Drawing Tool",
        description: "Add handwriting and notes to any PDF. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: canonical },
        { lang: "x-default", url: canonical }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
