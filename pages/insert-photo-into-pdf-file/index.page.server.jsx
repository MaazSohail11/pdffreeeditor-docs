// pages/insert-photo-into-pdf-file/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const slug = "/insert-photo-into-pdf-file/";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${base}${slug}#howto`,
    name: "How to insert a photo into a PDF file online (free, no signup)",
    description:
        "Upload your PDF, insert a photo (JPG/PNG) onto any page, position it precisely, and download the updated PDF instantly — free, no signup.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor"],
    step: [
        {
            "@type": "HowToStep",
            url: `${base}${slug}#step-upload`,
            name: "Upload your PDF",
            text:
                "Open the Insert Photo into PDF page and upload your PDF to launch the browser-based editor."
        },
        {
            "@type": "HowToStep",
            url: `${base}${slug}#step-insert`,
            name: "Insert the photo and position it",
            text:
                "Choose the Image tool, upload your photo (JPG/PNG), then drag to move and resize it on the PDF page."
        },
        {
            "@type": "HowToStep",
            url: `${base}${slug}#step-download`,
            name: "Download the updated PDF",
            text:
                "Export instantly and download the updated PDF with your photo inserted — no signup and no watermark."
        }
    ]
};

// MUST match visible FAQ on the page
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I insert a photo into a PDF file online?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload your PDF using the box on the page. In the browser editor, choose the Image tool, upload your photo (JPG/PNG), resize and place it, then download the updated PDF."
            }
        },
        {
            "@type": "Question",
            name: "Is it free and watermark-free?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. You can insert photos and download with no watermark and no signup."
            }
        },
        {
            "@type": "Question",
            name: "Do you upload my PDF to your servers?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "By default, no. Editing runs locally in your browser so the PDF stays on your device. If a workflow ever requires an upload, it should be clearly indicated before you proceed."
            }
        },
        {
            "@type": "Question",
            name: "Can I insert a photo into a PDF on iPhone or Android?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Open the page in Safari or Chrome on mobile, upload your PDF, insert the photo, and download the updated file."
            }
        },
        {
            "@type": "Question",
            name: "Why does my photo look blurry after inserting?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Blurriness usually comes from a low-resolution image or heavy compression. Use a higher-quality photo (or PNG) and avoid enlarging a small image too much."
            }
        },
        {
            "@type": "Question",
            name: "Can I also add text or sign after inserting a photo?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. After inserting a photo, you can type on the PDF, sign it, or annotate it using the editor tools."
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
        { "@type": "ListItem", position: 3, name: "Insert Photo into PDF", item: `${base}${slug}` }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${base}${slug}#app`,
    name: "Insert Photo into PDF File — PDF Free Editor",
    url: `${base}${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Insert Photo into PDF File Online — Free (No Signup, No Watermark)",
    description:
        "Insert a photo into a PDF file online for free. Upload your PDF, add a picture to any page, resize and position it, then download instantly — no signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}${slug}` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Insert Photo into PDF File Online — Free (No Signup, No Watermark)",
    description:
        "Insert a photo into a PDF file online for free. Add a picture to any PDF page, resize and position it precisely, then download instantly — no signup, no watermark.",
    canonical: `${base}${slug}`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}${slug}`,
        title: "Insert Photo into PDF File — Free Online Tool",
        description:
            "Upload your PDF, insert a photo (JPG/PNG), position it, and download instantly. Free, no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Insert Photo into PDF File — Free Online Tool",
        description:
            "Add a picture to any PDF page and download instantly. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: `${base}${slug}` },
        { lang: "x-default", url: `${base}${slug}` }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
