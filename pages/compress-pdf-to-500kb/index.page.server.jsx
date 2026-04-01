const base = "https://pdffreeeditor.com";
const url = `${base}/compress-pdf-to-500kb/`;

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to compress a PDF to 500KB online",
    description:
        "Upload your PDF, choose Compact or Rasterize compression, and download a smaller file near 500KB for strict upload limits.",
    totalTime: "PT3M",
    tool: ["Web browser", "TechRex PDF Compressor"],
    step: [
        {
            "@type": "HowToStep",
            url: `${url}#step-upload`,
            name: "Upload your PDF",
            text:
                "Upload the PDF you need under 500KB. The file is transferred over an encrypted TLS connection for processing."
        },
        {
            "@type": "HowToStep",
            url: `${url}#step-choose`,
            name: "Choose Compact or Rasterize",
            text:
                "Start with Compact for best quality. If you still need smaller size, switch to Rasterize and reduce quality/DPI step-by-step to approach 500KB."
        },
        {
            "@type": "HowToStep",
            url: `${url}#step-download`,
            name: "Download the compressed PDF",
            text:
                "Download the smaller PDF and upload it to your portal/form. No signup and no watermark."
        }
    ]
};

// MUST match visible FAQ in JSX exactly (same questions + same answer meaning)
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you compress a PDF to exactly 500KB?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Often you can get close, but not always. Image-heavy scans/photos may not reach 500KB without lowering quality. Try Rasterize and reduce DPI/quality gradually."
            }
        },
        {
            "@type": "Question",
            name: "Is there a one-click “500KB” button?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Not reliably—PDFs vary. Best workflow: Compact first → if still too large, switch to Rasterize and reduce DPI/quality step-by-step until you’re near 500KB."
            }
        },
        {
            "@type": "Question",
            name: "What’s the difference between Compact and Rasterize?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Compact keeps the PDF structure (sharp text/vectors) while optimizing images/metadata. Rasterize converts pages to images at your chosen quality/DPI for maximum size reduction."
            }
        },
        {
            "@type": "Question",
            name: "Why is my PDF stuck above 500KB?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Usually because it contains large images/scans, many pages, or already-optimized content. Use Rasterize, reduce DPI/quality, remove pages, or split the PDF if allowed."
            }
        },
        {
            "@type": "Question",
            name: "Will Rasterize affect text selection/search?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Rasterize makes pages image-based, so text may no longer be selectable/searchable. If you need searchable text afterward, run OCR after compressing."
            }
        },
        {
            "@type": "Question",
            name: "Is my PDF uploaded to your servers?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Your PDF is transferred over an encrypted TLS connection to our compression backend and Adobe PDF Services for processing. Avoid uploading extremely sensitive documents."
            }
        },
        {
            "@type": "Question",
            name: "Does it work on iPhone and Android?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. Use Safari (iOS) or Chrome (Android) to compress PDFs without installing an app."
            }
        },
        {
            "@type": "Question",
            name: "What should I do after compressing for a portal?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "If needed, split/reorder pages, then sign the PDF before uploading."
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
        { "@type": "ListItem", position: 3, name: "Compress PDF", item: `${base}/compress-pdf/` },
        { "@type": "ListItem", position: 4, name: "Compress to 500KB", item: url }
    ]
};

const webappSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: "Compress PDF to 500KB — TechRex Free PDF Compressor",
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Compress PDF to 500KB Online — Free (No Signup, No Watermark)",
    description:
        "Compress a PDF to ~500KB for strict upload limits. Use Compact for quality or Rasterize for maximum size reduction. Free, no signup, no watermark.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TechRex" },
    publisher: {
        "@type": "Organization",
        name: "TechRex",
        logo: { "@type": "ImageObject", url: `${base}/logo.png` }
    }
};

export const seo = {
    title: "Compress PDF to 500KB Online — Free (No Signup, No Watermark)",
    description:
        "Reduce PDF size to ~500KB for strict upload limits. Choose Compact (best quality) or Rasterize (smallest size). Free, no signup, no watermark.",
    canonical: url,
    robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    og: {
        type: "website",
        url,
        title: "Compress PDF to 500KB — Free PDF Compressor",
        description:
            "Need a PDF under 500KB? Compress fast using Compact or Rasterize modes. Free, no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress PDF to 500KB — Free PDF Compressor",
        description:
            "Reduce PDF file size to ~500KB for strict upload limits. Free, no signup, no watermark.",
        image: `${base}/fpe-og-1200x630.png`
    },
    hreflang: [
        { lang: "en", url },
        { lang: "x-default", url }
    ],
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema, articleSchema]
};
