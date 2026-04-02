import React from "react";
import { Helmet } from "react-helmet";
import SplitIntentTemplate from "/src/components/SplitIntentTemplate.jsx";

export default {
    Page: function SplitPdfInHalf() {
        return (
            <>
                <SplitIntentTemplate
                    mode="half"
                    hero={{
                        h1: "Split PDF in Half Online",
                        h1Sub: "Create 2 parts by pages (first half / second half)",
                        p1: "Split a PDF into two parts by page number. Download the first half and second half as separate PDFs — free, no signup, no watermark.",
                        p2: "Note: some people mean ‘cut each page in half’ for 2-up scans. This tool splits by pages (document halves), not slicing a page image.",
                        cta1: "Start — Split in Half",
                        cta2: "How it works (3 steps)",
                        whyTitle: "Why split a PDF into two halves?",
                        whyP: "It’s a common need for long PDFs: send half now, upload in two parts, or fit strict limits by splitting into two documents.",
                        cardTitle: "One click: first half / second half",
                        cardP1: "Upload your PDF, then use the quick buttons to select or download either half.",
                        cardP2: "You can also customize the split point by typing a range.",
                        cardCta: "Open Half Splitter",
                        useCasesTitle: "When splitting a PDF in half is useful",
                        useCasesP: "These are the intent scenarios behind ‘split PDF in half’ searches.",
                        howToTitle: "How to split a PDF in half (3 steps)",
                        step1: "Upload your PDF. Processing runs locally in your browser.",
                        step2: "Use ‘Download first half’ / ‘Download second half’ or choose your own range.",
                        step3: "Download each half as its own PDF — clean and watermark-free.",
                        faqTitle: "Split PDF in Half — FAQs",
                    }}
                    trustBullets={[
                        "Split into 2 PDFs by pages",
                        "Quick first-half / second-half buttons",
                        "No signup, no watermark",
                        "Local processing in your browser",
                    ]}
                    benefits={[
                        "Split PDF into two parts instantly",
                        "Download first half and second half separately",
                        "Great for portals, email, and long documents",
                        "Original PDF stays unchanged",
                    ]}
                    useCases={[
                        { title: "Upload limits / strict portals", body: "If a portal rejects a big PDF, splitting into two parts can help." },
                        { title: "Send a long PDF in two emails", body: "Split into halves to make emailing easier when attachments are large." },
                        { title: "Share only part of a document", body: "Send the relevant half first without sharing the rest." },
                        { title: "Divide a report into two sections", body: "Split a long report into two readable PDFs." },
                    ]}
                    keywordBlocks={[
                        {
                            title: "Split PDF in half by pages (this tool)",
                            p1: "This tool splits the document by page count: first half pages and second half pages become two separate PDFs.",
                            p2: "If you need ‘cut each page down the middle’ (2-up scans), that’s a different tool category.",
                        },
                        {
                            title: "Want more control than half?",
                            p1: "You can choose a custom split point by selecting your own page range (e.g., 1-12) and downloading that part.",
                            p2: "For multiple parts under a target size, use Split PDF by Size.",
                        },
                    ]}
                    faqs={[
                        { q: "How do I split a PDF in half?", a: "Upload the PDF, then click ‘Download first half’ and ‘Download second half’. You’ll get two PDFs." },
                        { q: "Can I choose a custom split point?", a: "Yes. Type a range like 1-12 to download a custom part." },
                        { q: "Does this cut each page in half (down the middle)?", a: "No. This page splits by document pages (two files). Cutting a single page into two halves is a different operation." },
                        { q: "Is it free and watermark-free?", a: "Yes. No signup and no watermark on downloads." },
                        { q: "Is my file uploaded to a server?", a: "No. Splitting runs locally in your browser." },
                        { q: "How do I split into more than two parts?", a: <>Use <a className="text-primary-600 hover:underline" href="/split-pdf-by-size/">Split PDF by Size</a> or manually select ranges and download multiple parts.</> },
                    ]}
                    relatedTools={[
                        { href: "/split-pdf-by-size/", label: "Split PDF by size (parts)" },
                        { href: "/compress-pdf/", label: "Compress PDF file size" },
                        { href: "/extract-pages-from-pdf/", label: "Extract pages from PDF" },
                        { href: "/merge-pdf/", label: "Merge PDF files" },
                        { href: "/edit-pdf/", label: "Edit PDF text" },
                        { href: "/sign-pdf/", label: "Sign PDF online" },
                        { href: "/ocr-pdf/", label: "OCR PDF (Searchable)" },
                        { href: "/pdf-to-word/", label: "PDF to Word" },
                        { href: "/pdf-to-image/", label: "PDF to Image" },
                    ]}
                    rangeLabel="Pick pages for the part you want (or use first-half / second-half buttons)"
                    helperNote={
                        <span>
                            Heads-up: “split in half” can mean <strong>two PDFs by pages</strong> or <strong>cutting each page down the middle</strong>. This tool does the first one (by pages).
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
