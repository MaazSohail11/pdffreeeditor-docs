import React from "react";
import { Helmet } from "react-helmet";
import SplitIntentTemplate from "/src/components/SplitIntentTemplate.jsx";

export default {
    Page: function DeletePagesFromPdfOnline() {
        return (
            <>
                <SplitIntentTemplate
                    mode="delete"
                    hero={{
                        h1: "Delete Pages from PDF Online Free",
                        h1Sub: "Remove unwanted pages (no signup, no watermark)",
                        p1: "Delete pages from a PDF by selecting only the pages you want to keep — then download a clean updated PDF instantly.",
                        p2: "Perfect for removing blank pages, cover pages, extra terms, or accidental scans before sharing.",
                        cta1: "Start — Delete Pages",
                        cta2: "How it works (3 steps)",
                        whyTitle: "Why use this Delete Pages tool?",
                        whyP: "Many online tools require accounts or uploads to delete PDF pages. This page keeps it simple: select what to keep, download the updated file.",
                        cardTitle: "Delete pages by keeping only what matters",
                        cardP1: "Click pages to keep, or type ranges like 1-3, 7-10.",
                        cardP2: "The new PDF will exclude everything you didn’t select.",
                        cardCta: "Open Delete Pages Tool",
                        useCasesTitle: "Why people delete pages from PDFs",
                        useCasesP: "This is the real intent behind ‘delete pages from PDF online’ searches.",
                        howToTitle: "How to delete pages from a PDF (3 steps)",
                        step1: "Upload your PDF. Processing runs in your browser.",
                        step2: "Select the pages you want to keep (everything else is removed from the new file).",
                        step3: "Download the updated PDF instantly — no watermark.",
                        faqTitle: "Delete Pages from PDF — FAQs",
                    }}
                    trustBullets={[
                        "Delete single or multiple pages fast",
                        "Ranges supported (1-3, 7-10)",
                        "No signup, no watermark",
                        "Local processing in your browser",
                    ]}
                    benefits={[
                        "Delete pages from PDF online for free",
                        "No quality loss — layout stays intact",
                        "Works on mobile and desktop",
                        "Original file stays unchanged (you download a new copy)",
                    ]}
                    useCases={[
                        { title: "Remove blank or duplicate pages", body: "Delete empty scans or duplicated pages before sending the file." },
                        { title: "Remove cover pages or appendices", body: "Keep only the section you need to share." },
                        { title: "Remove extra terms or internal notes", body: "Create a shareable version without sensitive pages." },
                        { title: "Fix a ‘too many pages’ portal upload", body: "Some portals want only specific pages—delete the rest from the copy you upload." },
                    ]}
                    keywordBlocks={[
                        {
                            title: "Remove pages from PDF without editing the original",
                            p1: "This tool creates a new PDF that contains only your selected pages. Your original file is not modified.",
                            p2: "Tip: if you need to extract pages (instead of deleting), use Extract Pages from PDF.",
                        },
                        {
                            title: "Delete multiple pages at once using ranges",
                            p1: "You can delete lots of pages quickly by selecting what to keep with ranges like 1-3, 10-12, 20.",
                            p2: "This is faster than clicking every page in a long document.",
                        },
                    ]}
                    faqs={[
                        { q: "How do I delete pages from a PDF online for free?", a: "Upload your PDF, select the pages you want to keep, and download the new PDF. No signup, no watermark." },
                        { q: "Can I delete multiple pages at once?", a: "Yes. Use ranges like 1-3, 7-10 to keep only what you need." },
                        { q: "Does this reduce quality?", a: "No. The selected pages keep their original layout and quality." },
                        { q: "Is my original PDF changed?", a: "No. You download a new PDF; your original file remains untouched." },
                        { q: "Is my PDF uploaded to your servers?", a: "No. Page selection and export run locally in your browser." },
                        { q: "Can I do this on iPhone or Android?", a: "Yes. It works in modern mobile browsers like Safari and Chrome." },
                    ]}
                    relatedTools={[
                        { href: "/extract-pages-from-pdf/", label: "Extract pages from PDF" },
                        { href: "/split-pdf/", label: "Split PDF pages" },
                        { href: "/compress-pdf/", label: "Compress PDF file size" },
                        { href: "/merge-pdf/", label: "Merge PDF files" },
                        { href: "/edit-pdf/", label: "Edit PDF text" },
                        { href: "/sign-pdf/", label: "Sign PDF online" },
                        { href: "/ocr-pdf/", label: "OCR PDF (Searchable)" },
                        { href: "/word-to-pdf/", label: "Convert Word to PDF" },
                        { href: "/pdf-to-image/", label: "Convert PDF to Image" },
                    ]}
                    rangeLabel="Pick pages to keep (unselected pages will be deleted from the new PDF)"
                />
                <Helmet>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
                </Helmet>
            </>
        );
    },
};
