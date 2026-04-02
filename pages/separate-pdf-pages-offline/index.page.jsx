import React from "react";
import { Helmet } from "react-helmet";
import SplitIntentTemplate from "/src/components/SplitIntentTemplate.jsx";

export default {
    Page: function SeparatePdfPagesOffline() {
        return (
            <>
                <SplitIntentTemplate
                    mode="offline"
                    hero={{
                        h1: "Separate PDF Pages Offline",
                        h1Sub: "Split & extract pages in your browser (no upload)",
                        p1: "Need to separate PDF pages when you have weak internet or strict privacy needs? Load this page once, then separate/extract pages locally in your browser.",
                        p2: "Ideal for travel, schools, offices, or any situation where you don’t want to upload documents to a server.",
                        cta1: "Start — Separate Pages",
                        cta2: "How it works (3 steps)",
                        whyTitle: "Why an offline-friendly PDF separator matters",
                        whyP: "Some tools advertise privacy or offline access after load. This page is built to match that intent: keep processing on-device and reduce dependency on uploads.",
                        cardTitle: "Works offline after load",
                        cardP1: "Open this page once, then you can separate/extract pages locally.",
                        cardP2: "Download a new PDF containing only the pages you selected.",
                        cardCta: "Open Offline Separator",
                        useCasesTitle: "When offline page separation is useful",
                        useCasesP: "These are the real-world reasons people search ‘separate PDF pages offline’.",
                        howToTitle: "How to separate PDF pages offline (3 steps)",
                        step1: "Open the tool page (one-time load). Upload your PDF from your device.",
                        step2: "Select pages or ranges you want to keep/extract.",
                        step3: "Download the new PDF instantly — no watermark.",
                        faqTitle: "Separate PDF Pages Offline — FAQs",
                    }}
                    trustBullets={[
                        "Local processing (no upload)",
                        "Offline after the page loads",
                        "No signup, no watermark",
                        "Mobile + desktop supported",
                    ]}
                    benefits={[
                        "Separate pages without sending files to a server",
                        "Useful on weak connections or restricted networks",
                        "Fast page selection with ranges and buttons",
                        "Clean output PDF with no branding",
                    ]}
                    useCases={[
                        { title: "Travel / airplane / unstable internet", body: "Open the tool, then separate pages locally without relying on a strong connection." },
                        { title: "Work documents with privacy concerns", body: "Create a smaller shareable PDF without uploading sensitive content." },
                        { title: "School or office networks that block uploads", body: "Process pages in-browser even if file upload tools are restricted." },
                        { title: "Large PDFs that are slow to send", body: "Extract only the needed pages and share the smaller file." },
                    ]}
                    keywordBlocks={[
                        {
                            title: "Offline access after load (what it means)",
                            p1: "“Offline after load” means you open the page once, then the page-splitting runs on-device inside your browser session.",
                            p2: "If your browser caches the page assets, it can keep working even when the connection drops.",
                        },
                        {
                            title: "Separate pages vs extract pages",
                            p1: "Separating pages usually means creating a new PDF from selected pages. That’s exactly what this tool does: select → download a new file.",
                            p2: "If you want a dedicated extractor intent page, use Extract Pages from PDF.",
                        },
                    ]}
                    faqs={[
                        { q: "Can I separate PDF pages without internet?", a: "Yes — after the tool page loads once. The page selection and export run locally in your browser." },
                        { q: "Are my PDFs uploaded anywhere?", a: "No. This page processes your PDF locally on your device." },
                        { q: "Does it work on mobile?", a: "Yes. It works in Safari (iOS) and Chrome (Android)." },
                        { q: "Can I extract a single page?", a: "Yes. Select one page and download the new PDF." },
                        { q: "Can I remove pages too?", a: <>Yes. Select only the pages you want to keep. For a delete-focused intent page, use <a className="text-primary-600 hover:underline" href="/delete-pages-from-pdf-online/">Delete Pages from PDF</a>.</> },
                        { q: "Do you add a watermark?", a: "No. Downloads are clean and watermark-free." },
                    ]}
                    relatedTools={[
                        { href: "/extract-pages-from-pdf/", label: "Extract pages from PDF" },
                        { href: "/delete-pages-from-pdf-online/", label: "Delete pages from PDF" },
                        { href: "/split-pdf/", label: "Split PDF pages" },
                        { href: "/compress-pdf/", label: "Compress PDF file size" },
                        { href: "/merge-pdf/", label: "Merge PDF files" },
                        { href: "/edit-pdf/", label: "Edit PDF text" },
                        { href: "/ocr-pdf/", label: "OCR PDF (Searchable)" },
                        { href: "/word-to-pdf/", label: "Word to PDF" },
                        { href: "/pdf-to-image/", label: "PDF to Image" },
                    ]}
                    rangeLabel="Pick pages to separate (select pages or type ranges)"
                    helperNote={
                        <span>
                            Tip: “Offline” here means page splitting runs in your browser after this tool page loads. Some tools describe this as “offline access after load.”
                        </span>
                    }
                />
                <Helmet>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
                </Helmet>
            </>
        );
    },
};
