const base = "https://pdffreeeditor.com";
const url = `${base}/compress-pdf-without-losing-quality/`;

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to compress a PDF without losing quality",
    description:
        "Upload your PDF, choose Compact (retain-PDF) to preserve sharp text and layout, and download a smaller PDF without signup or watermark.",
    totalTime: "PT3M",
    tool: ["Web browser", "TechRex PDF Compressor"],
    step: [
        { "@type": "HowToStep", url: `${url}#step-upload`, name: "Upload your PDF", text: "Upload the PDF you want to shrink. The file is transferred over an encrypted TLS connection for processing." },
        { "@type": "HowToStep", url: `${url}#step-choose`, name: "Choose Compact (retain-PDF)", text: "Select Compact mode to preserve sharp text and layout while optimizing images and unnecessary data." },
        { "@type": "HowToStep", url: `${url}#step-download`, name: "Download the smaller PDF", text: "Download instantly. No signup and no watermark." }
    ]
};

// MUST match visible FAQ exactly
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "Can I compress a PDF without losing quality?", acceptedAnswer: { "@type": "Answer", text: "Often you can reduce file size with minimal visible change—especially for text-heavy PDFs—by using Compact mode. However, image-heavy PDFs (scans/photos) may require stronger compression that can reduce clarity." } },
        { "@type": "Question", name: "Is this “lossless” compression?", acceptedAnswer: { "@type": "Answer", text: "Not always. True lossless compression for PDFs is limited, because large size is usually caused by embedded images. Compact mode is quality-first, but images can still be recompressed for size reduction." } },
        { "@type": "Question", name: "Which mode should I use to keep text sharp?", acceptedAnswer: { "@type": "Answer", text: "Use Compact (retain-PDF). It preserves PDF structure so text and vector elements stay crisp. Avoid Rasterize unless you have a strict size target." } },
        { "@type": "Question", name: "Why didn’t my PDF shrink much?", acceptedAnswer: { "@type": "Answer", text: "Some PDFs are already optimized, or the file is dominated by images that are hard to compress without quality loss. If you need more reduction, try Rasterize or remove unnecessary pages." } },
        { "@type": "Question", name: "Will the layout/fonts change?", acceptedAnswer: { "@type": "Answer", text: "Compact mode is designed to preserve layout and readability. Results vary by PDF, but this is the best mode when you want the document to still look professional." } },
        { "@type": "Question", name: "Is my PDF uploaded to your servers?", acceptedAnswer: { "@type": "Answer", text: "Your PDF is transferred over an encrypted TLS connection to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents to any online service." } },
        { "@type": "Question", name: "Does it work on iPhone and Android?", acceptedAnswer: { "@type": "Answer", text: "Yes. Open this page in Safari (iOS) or Chrome (Android) and compress PDFs without installing an app." } },
        { "@type": "Question", name: "If I need a strict limit (like 1MB), what should I do?", acceptedAnswer: { "@type": "Answer", text: "Use the size-target pages like Compress to 1MB/2MB/5MB/10MB. They’re designed for strict upload limits." } }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Compress PDF", item: `${base}/compress-pdf/` },
        { "@type": "ListItem", position: 4, name: "Compress without losing quality", item: url }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: "Compress PDF Without Losing Quality — TechRex",
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Compress PDF Without Losing Quality — Free (No Signup, No Watermark)",
    description:
        "Quality-first PDF compression using Compact (retain-PDF) mode to keep text sharp and layout professional while reducing file size.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Compress PDF Without Losing Quality — Free (No Signup, No Watermark)",
    description:
        "Reduce PDF file size without ruining quality. Use Compact (retain-PDF) mode to keep text sharp and layout professional. Free, no signup, no watermark.",
    canonical: url,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url,
        title: "Compress PDF Without Losing Quality — Free",
        description:
            "Quality-first compression: keep text sharp and layout clean while reducing PDF size. Free, no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress PDF Without Losing Quality — Free",
        description:
            "Shrink PDFs while keeping a professional look. Compact mode for best clarity. Free, no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url },
        { lang: "x-default", url }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
