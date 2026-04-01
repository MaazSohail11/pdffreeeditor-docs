const base = "https://pdffreeeditor.com";
const slug = "/split-pdf-in-half/";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${base}${slug}#howto`,
    name: "How to split a PDF in half (by pages)",
    description: "Upload a PDF, split it into first half and second half by page count, and download each half as a separate PDF.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex Free PDF Editor"],
    step: [
        { "@type": "HowToStep", url: `${base}${slug}#step-upload`, name: "Upload your PDF", text: "Upload your PDF. Processing runs locally in your browser." },
        { "@type": "HowToStep", url: `${base}${slug}#step-select`, name: "Select first half or second half", text: "Use quick half buttons or choose a page range." },
        { "@type": "HowToStep", url: `${base}${slug}#step-download`, name: "Download the halves", text: "Download each half as its own PDF. No signup, no watermark." }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How do I split a PDF in half?", acceptedAnswer: { "@type": "Answer", text: "Upload the PDF, then download the first half and second half as two separate PDFs." } },
        { "@type": "Question", name: "Can I choose a custom split point?", acceptedAnswer: { "@type": "Answer", text: "Yes. Type a range like 1-12 to download a custom part." } },
        { "@type": "Question", name: "Does this cut each page in half down the middle?", acceptedAnswer: { "@type": "Answer", text: "No. This tool splits by document pages (two files). Cutting a single page into two halves is a different operation." } },
        { "@type": "Question", name: "Is it free and watermark-free?", acceptedAnswer: { "@type": "Answer", text: "Yes. No signup and no watermark on downloads." } },
        { "@type": "Question", name: "Is my file uploaded to a server?", acceptedAnswer: { "@type": "Answer", text: "No. Splitting runs locally in your browser." } },
        { "@type": "Question", name: "How do I split into more than two parts?", acceptedAnswer: { "@type": "Answer", text: "Use split-by-size or select multiple ranges and download multiple parts." } }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Split PDF in Half", item: `${base}${slug}` }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${base}${slug}#app`,
    name: "Split PDF in Half — Free PDF Splitter by TechRex",
    url: `${base}${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Split PDF in Half Online — Two Parts by Pages (No Signup)",
    description: "Split a PDF into first half and second half by pages and download two PDFs instantly. Free, no signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}${slug}` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: { "@type": "Organization", name: "TechRex", logo: { "@type": "ImageObject", url: `${base}/logo.png` } }
};

export const seo = {
    title: "Split PDF in Half Online — Two Parts by Pages (No Signup, No Watermark)",
    description: "Split a PDF into two parts (first half / second half) by pages. Download two PDFs instantly. Free, no signup, no watermark.",
    canonical: `${base}${slug}`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}${slug}`,
        title: "Split PDF in Half — Two Parts by Pages",
        description: "Download first half and second half as separate PDFs. Free, no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Split PDF in Half — Free",
        description: "Split into first and second halves by pages. Download two PDFs instantly.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: `${base}${slug}` },
        { lang: "x-default", url: `${base}${slug}` }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
