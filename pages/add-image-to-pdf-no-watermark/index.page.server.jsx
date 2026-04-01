// pages/add-image-to-pdf-no-watermark/index.page.server.jsx
const base = "https://pdffreeeditor.com";
const canonical = `${base}/add-image-to-pdf-no-watermark/`;

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${canonical}#howto`,
    name: "How to add an image to a PDF online (no watermark)",
    description:
        "Upload your PDF, insert an image (logo/photo), position it on the page, and download the updated PDF. No signup and no watermark.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor"],
    step: [
        {
            "@type": "HowToStep",
            url: `${canonical}#step-upload`,
            name: "Upload your PDF",
            text: "Open the page and upload your PDF in the drop box to start editing."
        },
        {
            "@type": "HowToStep",
            url: `${canonical}#step-insert`,
            name: "Insert the image",
            text: "Choose the image tool, upload your logo or photo, then place, resize and rotate it on the PDF page."
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
            name: "How do I add an image to a PDF online without a watermark?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Upload your PDF, choose the image tool in the editor, insert your image (logo/photo), place it on the page, then download — no signup and no watermark."
            }
        },
        {
            "@type": "Question",
            name: "Can I insert a logo into a PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Insert your logo image and position it on the header, footer, or anywhere on the page."
            }
        },
        {
            "@type": "Question",
            name: "Do you upload my PDF to your servers?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "By default, editing runs in your browser so your PDF stays on your device. If any feature ever needs an upload, you’ll see it clearly before starting."
            }
        },
        {
            "@type": "Question",
            name: "Can I resize and rotate the image?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. After inserting, you can resize and rotate for a perfect fit."
            }
        },
        {
            "@type": "Question",
            name: "What image formats work best?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "PNG is great for logos and stamps. JPG is best for photos. If you need transparency, use a PNG."
            }
        },
        {
            "@type": "Question",
            name: "My PDF got bigger after adding an image — what should I do?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "That’s normal. After inserting images, run Compress PDF to reduce file size for email or portal limits."
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
        { "@type": "ListItem", position: 3, name: "Add Image to PDF", item: canonical }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${canonical}#app`,
    name: "Add Image to PDF Online — Insert Logo/Photo (No Watermark)",
    url: canonical,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Add Image to PDF Online — Insert Logo or Photo (No Watermark, No Signup)",
    description:
        "Add an image to a PDF online with no watermark. Insert logos, photos, stamps, or screenshots, then download instantly — no signup.",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Add Image to PDF Online — Insert Logo/Photo (No Watermark, No Signup)",
    description:
        "Add an image to a PDF online with no watermark. Insert logos, photos, stamps or screenshots, then download instantly. Free, no signup.",
    canonical,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: canonical,
        title: "Add Image to PDF Online — No Watermark",
        description:
            "Insert a logo or photo into any PDF in seconds. Free, no signup, no watermark — download instantly.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Add Image to PDF — No Watermark",
        description: "Insert logo/photo into PDF online for free. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: canonical },
        { lang: "x-default", url: canonical }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
