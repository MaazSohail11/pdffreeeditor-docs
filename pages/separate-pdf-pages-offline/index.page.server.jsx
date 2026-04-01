const base = "https://pdffreeeditor.com";
const slug = "/separate-pdf-pages-offline/";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${base}${slug}#howto`,
    name: "How to separate PDF pages offline (after load)",
    description: "Open the tool page, upload your PDF, select pages, and download a new PDF. Page processing runs locally in your browser.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex Free PDF Editor"],
    step: [
        { "@type": "HowToStep", url: `${base}${slug}#step-upload`, name: "Open tool & upload", text: "Open the page once, then upload a PDF from your device. Processing runs locally in your browser." },
        { "@type": "HowToStep", url: `${base}${slug}#step-select`, name: "Select pages", text: "Choose page numbers or ranges like 1,3,5-8." },
        { "@type": "HowToStep", url: `${base}${slug}#step-download`, name: "Download new PDF", text: "Download a new PDF containing only the selected pages. No signup, no watermark." }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "Can I separate PDF pages without internet?", acceptedAnswer: { "@type": "Answer", text: "Yes — after the tool page loads once. Page selection and export run locally in your browser." } },
        { "@type": "Question", name: "Are my PDFs uploaded anywhere?", acceptedAnswer: { "@type": "Answer", text: "No. This page processes your PDF locally on your device." } },
        { "@type": "Question", name: "Does it work on mobile?", acceptedAnswer: { "@type": "Answer", text: "Yes. It works in Safari (iOS) and Chrome (Android)." } },
        { "@type": "Question", name: "Can I extract a single page?", acceptedAnswer: { "@type": "Answer", text: "Yes. Select one page and download the new PDF." } },
        { "@type": "Question", name: "Can I remove pages too?", acceptedAnswer: { "@type": "Answer", text: "Yes. Select only the pages you want to keep and download the new PDF." } },
        { "@type": "Question", name: "Do you add a watermark?", acceptedAnswer: { "@type": "Answer", text: "No. Downloads are clean and watermark-free." } }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Separate PDF Pages Offline", item: `${base}${slug}` }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${base}${slug}#app`,
    name: "Separate PDF Pages Offline — Free PDF Separator by TechRex",
    url: `${base}${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Separate PDF Pages Offline — Split & Extract in Your Browser",
    description: "Separate or extract PDF pages locally in your browser. Works offline after the page loads. Free, no signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}${slug}` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: { "@type": "Organization", name: "TechRex", logo: { "@type": "ImageObject", url: `${base}/logo.png` } }
};

export const seo = {
    title: "Separate PDF Pages Offline — Split & Extract (No Upload, No Signup)",
    description: "Separate PDF pages offline after the page loads. Select pages or ranges and download a new PDF instantly. No upload, no signup, no watermark.",
    canonical: `${base}${slug}`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}${slug}`,
        title: "Separate PDF Pages Offline — Free",
        description: "Split/extract pages locally in your browser. Offline after load. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Separate PDF Pages Offline — Free",
        description: "Separate pages locally in your browser. Offline after load. No watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: `${base}${slug}` },
        { lang: "x-default", url: `${base}${slug}` }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
