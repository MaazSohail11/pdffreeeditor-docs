const base = "https://pdffreeeditor.com";
const slug = "/extract-pages-from-pdf/";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${base}${slug}#howto`,
    name: "How to extract pages from a PDF online for free",
    description: "Upload a PDF, select the pages you want, and download a new PDF containing only those pages.",
    totalTime: "PT2M",
    tool: ["Web browser", "TechRex Free PDF Editor"],
    step: [
        { "@type": "HowToStep", url: `${base}${slug}#step-upload`, name: "Upload your PDF", text: "Upload your PDF to the page extractor. Processing runs locally in your browser." },
        { "@type": "HowToStep", url: `${base}${slug}#step-select`, name: "Select pages", text: "Choose page numbers or ranges like 1,3,5-8." },
        { "@type": "HowToStep", url: `${base}${slug}#step-download`, name: "Download extracted PDF", text: "Download a new PDF containing only the selected pages. No signup, no watermark." }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How do I extract pages from a PDF for free?", acceptedAnswer: { "@type": "Answer", text: "Upload your PDF, select pages (or ranges), then download the new PDF. No signup and no watermark." } },
        { "@type": "Question", name: "Can I extract just one page?", acceptedAnswer: { "@type": "Answer", text: "Yes. Select a single page number and download the extracted PDF." } },
        { "@type": "Question", name: "Can I extract multiple pages at once?", acceptedAnswer: { "@type": "Answer", text: "Yes. Use commas and ranges like 1,3,5-8." } },
        { "@type": "Question", name: "Will extracted pages lose quality?", acceptedAnswer: { "@type": "Answer", text: "No. Extracting copies the pages into a new PDF while keeping the original layout and quality." } },
        { "@type": "Question", name: "Is my PDF uploaded to a server?", acceptedAnswer: { "@type": "Answer", text: "No. This page processes the PDF locally in your browser." } },
        { "@type": "Question", name: "Can I use it offline?", acceptedAnswer: { "@type": "Answer", text: "Yes — after the page loads once. You can also use the offline-focused separate pages page." } }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Extract Pages from PDF", item: `${base}${slug}` }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${base}${slug}#app`,
    name: "Extract Pages from PDF — Free Page Extractor by TechRex",
    url: `${base}${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Extract Pages from PDF Online Free — No Signup, No Watermark",
    description: "Extract specific pages or ranges from a PDF and download a new PDF instantly. Free, no signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}${slug}` },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: { "@type": "Organization", name: "TechRex", logo: { "@type": "ImageObject", url: `${base}/logo.png` } }
};

export const seo = {
    title: "Extract Pages from PDF Online Free — Save Selected Pages (No Signup)",
    description: "Extract PDF pages online for free. Select page numbers or ranges and download a new PDF with only those pages. No signup, no watermark, works on mobile.",
    canonical: `${base}${slug}`,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url: `${base}${slug}`,
        title: "Extract Pages from PDF — Free Page Extractor",
        description: "Extract one page or a range from a PDF and download a clean new PDF. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Extract Pages from PDF — Free",
        description: "Select pages or ranges and download a new PDF instantly. No signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url: `${base}${slug}` },
        { lang: "x-default", url: `${base}${slug}` }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
