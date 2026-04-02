import React from "react";
import { Helmet } from "react-helmet";
import SplitIntentTemplate from "/src/components/SplitIntentTemplate.jsx";

export default {
    Page: function ExtractPagesFromPdf() {
        return (
            <>
                <SplitIntentTemplate
                    mode="extract"
                    hero={{
                        h1: "Extract Pages from PDF Online Free",
                        h1Sub: "Save selected pages as a new PDF (no signup)",
                        p1: "Extract one page or a page range from a PDF in seconds. Select the pages you want and download a new PDF instantly — watermark-free.",
                        p2: "This is perfect for pulling out a signature page, a certificate, or a specific chapter without sharing the entire document.",
                        cta1: "Start — Extract Pages",
                        cta2: "How it works (3 steps)",
                        whyTitle: "Why use this Extract Pages tool?",
                        whyP: "Big brands offer extraction tools, but many require accounts or uploads. This page focuses on fast page extraction with clean output and minimal friction.",
                        cardTitle: "Extract exactly the pages you need",
                        cardP1: "Pick pages by clicking numbers or typing ranges like 2,5-7.",
                        cardP2: "Download a new PDF containing only the extracted pages.",
                        cardCta: "Open Extract Tool",
                        useCasesTitle: "Common reasons people extract PDF pages",
                        useCasesP: "These are the real-life situations behind ‘extract pages from PDF’ searches.",
                        howToTitle: "How to extract pages from a PDF (3 steps)",
                        step1: "Upload your PDF. Everything runs locally in your browser.",
                        step2: "Select the exact pages you want to extract (e.g., 1,3,5-8).",
                        step3: "Download a new PDF containing only those pages — no watermark.",
                        faqTitle: "Extract Pages from PDF — FAQs",
                    }}
                    trustBullets={[
                        "Extract one page or a range (1,3,5-8)",
                        "No signup, no watermark",
                        "Local processing in your browser",
                        "Works on iPhone, Android, Mac, Windows",
                    ]}
                    benefits={[
                        "Extract PDF pages for free — no account required",
                        "Keep original quality and layout",
                        "Fast selection with page buttons + ranges",
                        "Great for applications, certificates, signature pages",
                    ]}
                    useCases={[
                        { title: "Extract a signature page", body: "Send only the signed page instead of the entire contract." },
                        { title: "Pull out certificates or receipts", body: "Save just the one page you need for a portal upload or email." },
                        { title: "Extract a chapter from a large PDF", body: "Share a chapter without sending a full book or report." },
                        { title: "Create a ‘short version’ for mobile", body: "Extract the relevant pages so the PDF opens faster on phones." },
                    ]}
                    keywordBlocks={[
                        {
                            title: "Extract a single page from a PDF",
                            p1: "If you only need page 1 (or any single page), upload the PDF, click the page number, and download the new file.",
                            p2: "Tip: use ranges like 7-7 if you prefer typing instead of clicking.",
                        },
                        {
                            title: "Extract multiple pages or ranges",
                            p1: "You can extract multiple pages at once (e.g., 2, 5-7, 11). The output PDF will contain only the selected pages in order.",
                            p2: "If you want to remove pages instead, use the Delete Pages intent page and keep only what you need.",
                        },
                    ]}
                    faqs={[
                        { q: "How do I extract pages from a PDF for free?", a: "Upload your PDF, select pages (or ranges), then download the new PDF. No signup and no watermark." },
                        { q: "Can I extract just one page?", a: "Yes. Select a single page number and download the extracted PDF." },
                        { q: "Can I extract multiple pages at once?", a: "Yes. Use commas and ranges like 1,3,5-8." },
                        { q: "Will extracted pages lose quality?", a: "No. Extracting copies the pages into a new PDF while keeping the original layout and quality." },
                        { q: "Is my PDF uploaded to a server?", a: "No. This page processes the PDF locally in your browser." },
                        { q: "Can I use it offline?", a: <>Yes — after the page loads once. For an offline-focused version, use <a className="text-primary-600 hover:underline" href="/separate-pdf-pages-offline/">Separate PDF Pages Offline</a>.</> },
                    ]}
                    relatedTools={[
                        { href: "/split-pdf/", label: "Split PDF pages" },
                        { href: "/delete-pages-from-pdf-online/", label: "Delete pages from PDF" },
                        { href: "/compress-pdf/", label: "Compress PDF file size" },
                        { href: "/merge-pdf/", label: "Merge PDF files" },
                        { href: "/edit-pdf/", label: "Edit PDF text" },
                        { href: "/sign-pdf/", label: "Sign PDF online" },
                        { href: "/ocr-pdf/", label: "OCR PDF (Searchable)" },
                        { href: "/pdf-to-word/", label: "PDF to Word (Editable)" },
                        { href: "/pdf-to-image/", label: "PDF to Image (JPG/PNG)" },
                    ]}
                    rangeLabel="Pick pages to extract (click buttons or enter ranges)"
                />
                <Helmet>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
                </Helmet>
            </>
        );
    },
};
