// pages/highlight-text-in-pdf-free/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const canonical = `${base}/highlight-text-in-pdf-free/`;

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${canonical}#howto`,
    name: "How to highlight text in a PDF for free (no signup)",
    description:
        "Upload your PDF, highlight the text you need, and download the updated file. Free online PDF highlighter with no signup and no watermark.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor"],
    step: [
        {
            "@type": "HowToStep",
            url: `${canonical}#step-upload`,
            name: "Upload your PDF",
            text: "Open the page and upload your PDF in the drop box to start highlighting."
        },
        {
            "@type": "HowToStep",
            url: `${canonical}#step-highlight`,
            name: "Highlight the text",
            text: "Choose the highlight tool and mark the lines or paragraphs you want to emphasize."
        },
        {
            "@type": "HowToStep",
            url: `${canonical}#step-download`,
            name: "Download the updated PDF",
            text: "Export and download your highlighted PDF instantly with no watermark."
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I highlight text in a PDF for free?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload your PDF, choose the highlight tool, mark the text you need, then download the updated PDF — no signup and no watermark."
            }
        },
        {
            "@type": "Question",
            name: "Do you add watermarks when I download?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "No. Your highlighted PDF downloads without a watermark."
            }
        },
        {
            "@type": "Question",
            name: "Do you upload my PDF to your servers?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "By default, highlighting runs in your browser so your PDF stays on your device. If any feature ever needs an upload, you’ll see it clearly before starting."
            }
        },
        {
            "@type": "Question",
            name: "Can I highlight a scanned PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. You can highlight visually by drawing highlight strokes on top of scanned pages. For selectable text on scanned PDFs, you’d need OCR."
            }
        },
        {
            "@type": "Question",
            name: "Does it work on mobile?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Use Safari on iPhone/iPad or Chrome on Android. Zoom in, then highlight accurately."
            }
        },
        {
            "@type": "Question",
            name: "Can I remove highlights later?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Re-open the PDF and delete the highlight marks in the editor, then download again."
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
        { "@type": "ListItem", position: 3, name: "Highlight PDF", item: canonical }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${canonical}#app`,
    name: "Highlight Text in PDF — Free PDF Highlighter",
    url: canonical,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Highlight Text in PDF Free — Online PDF Highlighter (No Signup)",
    description:
        "Highlight text in a PDF for free. Upload your file, mark important lines, and download instantly — no signup and no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Highlight Text in PDF Free — Online PDF Highlighter (No Signup, No Watermark)",
    description:
        "Highlight text in a PDF for free online. Mark important lines fast in your browser, then download instantly. No signup, no watermark.",
    canonical,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: canonical,
        title: "Highlight Text in PDF Free — Online PDF Highlighter",
        description: "Upload a PDF, highlight text in seconds, and download instantly. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Highlight Text in PDF — Free PDF Highlighter",
        description: "Highlight PDF text online for free. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: canonical },
        { lang: "x-default", url: canonical }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
