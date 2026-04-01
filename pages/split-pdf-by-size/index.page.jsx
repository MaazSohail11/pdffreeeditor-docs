import React from "react";
import { Helmet } from "react-helmet";
import SplitIntentTemplate from "/src/components/SplitIntentTemplate.jsx";

export default {
    Page: function SplitPdfBySize() {
        return (
            <>
                <SplitIntentTemplate
                    mode="size"
                    hero={{
                        h1: "Split PDF by Size",
                        h1Sub: "Make smaller parts (10MB / 5MB / 2MB targets)",
                        p1: "Split a large PDF into smaller parts that fit common upload or email limits. Use the built-in size helper to estimate pages per part, then download each part.",
                        p2: "Exact MB splits vary by content (images vs text). If you need a tighter result, split first, then compress each part.",
                        cta1: "Start — Split by Size",
                        cta2: "How it works (3 steps)",
                        whyTitle: "Why split a PDF by size?",
                        whyP: "Many people need PDFs under a limit for email or portals. Competitors even offer dedicated split-by-size tools — so this page matches that intent with an on-page size helper.",
                        cardTitle: "Size helper (estimate) built in",
                        cardP1: "Set a target MB per part and the tool estimates pages per chunk.",
                        cardP2: "Download each chunk as its own PDF.",
                        cardCta: "Open Split-by-Size Tool",
                        useCasesTitle: "Common reasons to split by size",
                        useCasesP: "These are the high-intent situations behind ‘split PDF by size’ searches.",
                        howToTitle: "How to split a PDF by size (3 steps)",
                        step1: "Upload your PDF. Processing runs locally in your browser.",
                        step2: "Set a target MB per part and select/download each chunk.",
                        step3: "If needed, compress each part for tighter size limits.",
                        faqTitle: "Split PDF by Size — FAQs",
                    }}
                    trustBullets={[
                        "Split into parts near a target MB",
                        "Helper estimates pages per part",
                        "No signup, no watermark",
                        "Local processing in your browser",
                    ]}
                    benefits={[
                        "Split large PDFs into smaller parts for upload limits",
                        "Target common sizes like 10MB, 5MB, 2MB (estimate)",
                        "Download one part at a time",
                        "Pair with compression for stricter limits",
                    ]}
                    useCases={[
                        { title: "Email attachment size issues", body: "If attachments are too big, splitting into smaller PDFs can help before sending." },
                        { title: "Portal uploads with strict caps", body: "Universities, visa portals, and forms often reject large PDFs." },
                        { title: "Large scanned documents", body: "Scans can be heavy. Split into parts and compress if needed." },
                        { title: "Share big reports in parts", body: "Split a long report into multiple smaller PDFs for easier sharing." },
                    ]}
                    keywordBlocks={[
                        {
                            title: "Split PDF into 10MB / 5MB / 2MB parts (estimate)",
                            p1: "The tool estimates chunk size using average bytes per page. Image-heavy pages vary more, so treat it as a starting point.",
                            p2: "If you need to hit a strict number, split first, then compress each part.",
                        },
                        {
                            title: "Need tighter control? Split + compress",
                            p1: "For strict portals, the winning workflow is: split into parts → compress each part → upload.",
                            p2: "Use Compress PDF after you download a part to reduce file size further.",
                        },
                    ]}
                    faqs={[
                        { q: "How do I split a PDF by file size?", a: "Upload the PDF, set a target MB per part, then select and download each chunk. Repeat for the next part." },
                        { q: "Is the split size exact?", a: "No. Output varies by page content (especially images). The helper is an estimate based on average page size." },
                        { q: "How can I get closer to an exact limit?", a: <>Split first, then compress each downloaded part using <a className="text-blue-600 hover:underline" href="/compress-pdf/">Compress PDF</a>.</> },
                        { q: "Can I target 10MB parts for email?", a: "Yes. Set 10MB and download each chunk. Many email providers cap attachments, so splitting can help." },
                        { q: "Is my PDF uploaded?", a: "No. Splitting runs locally in your browser." },
                        { q: "Does it work on mobile?", a: "Yes. Works on Safari (iOS) and Chrome (Android)." },
                    ]}
                    relatedTools={[
                        { href: "/compress-pdf/", label: "Compress PDF file size" },
                        { href: "/split-pdf-in-half/", label: "Split PDF in half (by pages)" },
                        { href: "/split-pdf/", label: "Split PDF (manual ranges)" },
                        { href: "/extract-pages-from-pdf/", label: "Extract pages from PDF" },
                        { href: "/merge-pdf/", label: "Merge PDF files" },
                        { href: "/edit-pdf/", label: "Edit PDF text" },
                        { href: "/sign-pdf/", label: "Sign PDF online" },
                        { href: "/ocr-pdf/", label: "OCR PDF (Searchable)" },
                        { href: "/pdf-to-word/", label: "PDF to Word" },
                    ]}
                    rangeLabel="Pick pages for this part (or use the size helper’s ‘Select part’ buttons)"
                    helperNote={
                        <span>
                            Size targets are an <strong>estimate</strong> based on average bytes per page. Image-heavy PDFs vary more — use compression if you need tighter limits.
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
