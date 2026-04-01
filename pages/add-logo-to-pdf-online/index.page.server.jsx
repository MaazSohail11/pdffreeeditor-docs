// pages/add-logo-to-pdf-online/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const slug = "/add-logo-to-pdf-online/";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${base}${slug}#howto`,
    name: "How to add a logo to a PDF online (free, no signup)",
    description:
        "Upload your PDF, insert your logo image, position it precisely, and download the branded PDF instantly — free, no signup, no watermark.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor"],
    step: [
        { "@type": "HowToStep", url: `${base}${slug}#step-upload`, name: "Upload your PDF", text: "Upload your PDF to open it in the browser-based editor." },
        { "@type": "HowToStep", url: `${base}${slug}#step-add-logo`, name: "Insert your logo image", text: "Choose the Image/Logo tool, upload your logo (PNG/JPG), and position/resize it on the page." },
        { "@type": "HowToStep", url: `${base}${slug}#step-download`, name: "Download the branded PDF", text: "Export instantly and download the branded PDF with no watermark and no signup." }
    ]
};

// MUST match visible FAQ on the page
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I add a logo to a PDF online?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload your PDF to open the browser editor. Choose the Image/Logo tool, upload your logo (PNG/JPG), position and resize it, then download the updated PDF."
            }
        },
        {
            "@type": "Question",
            name: "Is this free and does it add a watermark?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It is free to use, and the exported PDF has no watermark and no signup required."
            }
        },
        {
            "@type": "Question",
            name: "What logo file format is best for PDFs?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "A transparent PNG is usually best because it blends into the page cleanly and avoids a white background box around the logo."
            }
        },
        {
            "@type": "Question",
            name: "Can I add a logo to multiple pages?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Insert the logo and place it on each page as needed within the editor workflow."
            }
        },
        {
            "@type": "Question",
            name: "Is my PDF uploaded to your servers?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "By default, editing runs locally in your browser so your PDF stays on your device. If a workflow requires upload, it should be indicated before you proceed."
            }
        },
        {
            "@type": "Question",
            name: "After adding a logo, what’s next?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "You can compress the PDF for email, sign it, or type on it using the editor tools."
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
        { "@type": "ListItem", position: 3, name: "Add Logo to PDF", item: `${base}${slug}` }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${base}${slug}#app`,
    name: "Add Logo to PDF Online — PDF Free Editor",
    url: `${base}${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Add Logo to PDF Online — Free (No Signup, No Watermark)",
    description:
        "Add a logo to a PDF online for free. Upload your PDF, insert and position your company logo, then download instantly — no signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}${slug}` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Add Logo to PDF Online — Free (No Signup, No Watermark)",
    description:
        "Add a logo to a PDF online for free. Insert your company logo, resize and position it precisely, then download instantly — no signup, no watermark.",
    canonical: `${base}${slug}`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}${slug}`,
        title: "Add Logo to PDF Online — Free Tool",
        description:
            "Brand your PDFs with a logo in seconds. Free, no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Add Logo to PDF Online — Free Tool",
        description:
            "Upload a PDF, add your logo, and download instantly. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: `${base}${slug}` },
        { lang: "x-default", url: `${base}${slug}` }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
