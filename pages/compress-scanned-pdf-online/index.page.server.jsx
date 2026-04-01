const base = "https://pdffreeeditor.com";
const url = `${base}/compress-scanned-pdf-online/`;

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to compress a scanned PDF online",
    description:
        "Upload your scanned PDF, choose Compact or Rasterize compression, and download a smaller PDF for email and upload limits.",
    totalTime: "PT4M",
    tool: ["Web browser", "TechRex PDF Compressor"],
    step: [
        { "@type": "HowToStep", url: `${url}#step-upload`, name: "Upload your scanned PDF", text: "Upload the scanned PDF. The file is transferred over an encrypted TLS connection for processing." },
        { "@type": "HowToStep", url: `${url}#step-choose`, name: "Choose Compact or Rasterize", text: "Start with Compact. If you need a much smaller file, use Rasterize and reduce quality/DPI step-by-step." },
        { "@type": "HowToStep", url: `${url}#step-download`, name: "Download & verify readability", text: "Download the smaller PDF and zoom to confirm small text is still readable." }
    ]
};

// MUST match visible FAQ exactly
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How do I compress a scanned PDF online?", acceptedAnswer: { "@type": "Answer", text: "Upload your scanned PDF, start with Compact, and if the file is still too large, switch to Rasterize and reduce quality/DPI step-by-step until you reach the size you need." } },
        { "@type": "Question", name: "Why are scanned PDFs so large?", acceptedAnswer: { "@type": "Answer", text: "A scanned PDF is mostly images (each page is like a photo). Large images make the file size huge compared to normal text-based PDFs." } },
        { "@type": "Question", name: "Will compressing a scanned PDF reduce clarity?", acceptedAnswer: { "@type": "Answer", text: "It can. Size reduction usually comes from compressing/downsampling images, which can reduce sharpness—especially small text. Reduce in small steps and stop when it remains readable." } },
        { "@type": "Question", name: "What mode should I use for scanned PDFs?", acceptedAnswer: { "@type": "Answer", text: "If you need maximum reduction, use Rasterize. If you want better “PDF behavior” and lighter changes, start with Compact and only use Rasterize if needed." } },
        { "@type": "Question", name: "Can I make it under 1MB / 2MB?", acceptedAnswer: { "@type": "Answer", text: "Often yes, but it depends on pages and scan quality. For strict limits, use the target pages and Rasterize with lower quality/DPI step-by-step." } },
        { "@type": "Question", name: "Is my scanned PDF uploaded to your servers?", acceptedAnswer: { "@type": "Answer", text: "Your PDF is transferred over an encrypted TLS connection to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents to any online service." } },
        { "@type": "Question", name: "Does it work on iPhone and Android?", acceptedAnswer: { "@type": "Answer", text: "Yes. Open this page in Safari (iOS) or Chrome (Android) and compress scanned PDFs without installing an app." } },
        { "@type": "Question", name: "If clarity gets bad, what should I do?", acceptedAnswer: { "@type": "Answer", text: "Try compressing less, removing unnecessary pages, or splitting the PDF. For tiny-text documents, aggressive compression can make text unreadable." } }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
        { "@type": "ListItem", position: 3, name: "Compress PDF", item: `${base}/compress-pdf/` },
        { "@type": "ListItem", position: 4, name: "Compress scanned PDF", item: url }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: "Compress Scanned PDF Online — TechRex",
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Compress Scanned PDF Online — Free (No Signup, No Watermark)",
    description:
        "Reduce scanned PDF size (image-heavy scans) using Compact or Rasterize compression. Built for strict upload limits and readable results.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Compress Scanned PDF Online — Free (No Signup, No Watermark)",
    description:
        "Shrink scanned PDFs online (image-heavy files). Use Compact or Rasterize to reduce size for email and upload limits. Free, no signup, no watermark.",
    canonical: url,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url,
        title: "Compress Scanned PDF — Free",
        description:
            "Reduce scanned PDF size fast. Designed for image-heavy scans and strict upload limits. Free, no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress Scanned PDF — Free",
        description:
            "Shrink scanned PDFs for uploads and email. Compact or Rasterize modes. Free, no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url },
        { lang: "x-default", url }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
