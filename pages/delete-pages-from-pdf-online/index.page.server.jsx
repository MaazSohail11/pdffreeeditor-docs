const base = "https://pdffreeeditor.com";
const slug = "/delete-pages-from-pdf-online/";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${base}${slug}#howto`,
    name: "How to delete pages from a PDF online for free",
    description: "Upload a PDF, select the pages you want to keep, and download a new PDF without the removed pages.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex Free PDF Editor"],
    step: [
        { "@type": "HowToStep", url: `${base}${slug}#step-upload`, name: "Upload your PDF", text: "Upload your PDF to the delete pages tool. Processing runs locally in your browser." },
        { "@type": "HowToStep", url: `${base}${slug}#step-select`, name: "Select pages to keep", text: "Choose the pages you want to keep using page numbers or ranges like 1-3, 7-10." },
        { "@type": "HowToStep", url: `${base}${slug}#step-download`, name: "Download updated PDF", text: "Download a new PDF that excludes all unselected pages. No signup, no watermark." }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How do I delete pages from a PDF online for free?", acceptedAnswer: { "@type": "Answer", text: "Upload your PDF, select the pages you want to keep, and download the new PDF. No signup, no watermark." } },
        { "@type": "Question", name: "Can I delete multiple pages at once?", acceptedAnswer: { "@type": "Answer", text: "Yes. Use ranges like 1-3, 7-10 to keep only what you need." } },
        { "@type": "Question", name: "Does this reduce quality?", acceptedAnswer: { "@type": "Answer", text: "No. The selected pages keep their original layout and quality." } },
        { "@type": "Question", name: "Is my original PDF changed?", acceptedAnswer: { "@type": "Answer", text: "No. You download a new PDF; your original file remains untouched." } },
        { "@type": "Question", name: "Is my PDF uploaded to your servers?", acceptedAnswer: { "@type": "Answer", text: "No. Page selection and export run locally in your browser." } },
        { "@type": "Question", name: "Can I do this on iPhone or Android?", acceptedAnswer: { "@type": "Answer", text: "Yes. It works in modern mobile browsers like Safari and Chrome." } }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Delete Pages from PDF", item: `${base}${slug}` }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${base}${slug}#app`,
    name: "Delete Pages from PDF — Free PDF Page Remover by TechRex",
    url: `${base}${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Delete Pages from PDF Online Free — No Signup, No Watermark",
    description: "Delete PDF pages online for free. Keep only the pages you need and download a clean updated PDF instantly.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}${slug}` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: { "@type": "Organization", name: "TechRex", logo: { "@type": "ImageObject", url: `${base}/logo.png` } }
};

export const seo = {
    title: "Delete Pages from PDF Online Free — Remove Pages (No Signup)",
    description: "Delete PDF pages online for free. Select pages to keep and download an updated PDF instantly. No signup, no watermark, works on mobile.",
    canonical: `${base}${slug}`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}${slug}`,
        title: "Delete Pages from PDF — Free Page Remover",
        description: "Remove unwanted PDF pages fast. Keep selected pages and download a clean updated PDF. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Delete Pages from PDF — Free",
        description: "Remove PDF pages online for free. Keep what you need and download instantly.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: `${base}${slug}` },
        { lang: "x-default", url: `${base}${slug}` }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
