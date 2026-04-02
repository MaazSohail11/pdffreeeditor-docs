// pages/ocr-pdf/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    FileText,
    ScanText,
    Search,
    CheckCircle2,
    ShieldCheck,
    Link as LinkIcon,
    Download,
    Languages,
    Sparkles,
    FileScan,
    ArrowRight,
    BookOpen,
    FileUp,
    Wrench
} from "lucide-react";

function OCRPdfPage() {
    const base = "https://pdffreeeditor.com";
    const canonical = `${base}/ocr-pdf/`;

    // Your confirmed title/description
    const metaTitle = "OCR PDF Online (Free) – Make Scanned PDF Searchable | TechRex";
    const metaDescription =
        "Free OCR for PDFs online. Turn a scanned PDF into a searchable PDF so you can copy text and use Ctrl+F. No signup, fast processing, works on mobile and desktop.";

    // Optional: if you don’t have it yet, create /public/og/ocr-pdf.png (recommended)
    const ogImage = `${base}/og/ocr-pdf.png`;

    const benefits = [
        "Make scanned PDFs searchable by adding an invisible OCR text layer",
        "Search inside scans using Ctrl+F (or Find on mobile)",
        "Copy and select text from image-only PDFs (scans, printouts, photos of documents)",
        "Free to use, no signup, no watermark",
        "Works in your browser on iPhone, Android, Mac & Windows",
        "Great for forms, receipts, invoices, archived documents and scanned records"
    ];

    const howTo = [
        {
            id: "step-upload",
            title: "Upload your scanned PDF",
            body: (
                <>
                    Upload a PDF scan (image-only PDF). If you can’t select text and Ctrl+F finds nothing, OCR will recognize text
                    and add a searchable layer.
                </>
            )
        },
        {
            id: "step-language",
            title: "Select the document language",
            body: (
                <>
                    Choosing the correct language improves OCR accuracy (especially accents and similar-looking characters).
                    If your PDF contains multiple languages, select the dominant one for best results.
                </>
            )
        },
        {
            id: "step-download",
            title: "Download a searchable PDF",
            body: (
                <>
                    Download the OCR’d PDF. You can now search (Ctrl+F) and copy text. If you want to convert the OCR result,
                    use{" "}
                    <a href="/pdf-to-word-ocr/" className="text-primary-700 underline hover:text-primary-900">
                        PDF to Word (OCR)
                    </a>{" "}
                    or{" "}
                    <a href="/pdf-to-excel-ocr/" className="text-primary-700 underline hover:text-primary-900">
                        PDF to Excel (OCR)
                    </a>
                    .
                </>
            )
        }
    ];

    const useCases = [
        {
            icon: <FileScan className="h-5 w-5" aria-hidden="true" />,
            title: "Make scanned PDFs searchable",
            body:
                "Turn image-only PDFs into searchable documents so you can find words instantly (Ctrl+F) and copy text."
        },
        {
            icon: <BookOpen className="h-5 w-5" aria-hidden="true" />,
            title: "Receipts, invoices, and paperwork",
            body:
                "OCR helps you extract and reuse text from scanned paperwork—useful for record keeping, accounting, and reporting."
        },
        {
            icon: <FileUp className="h-5 w-5" aria-hidden="true" />,
            title: "Upload-ready documents",
            body:
                "Many workflows require text-searchable PDFs for review and compliance. OCR makes scanned files easier to verify and manage."
        },
        {
            icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
            title: "Copy text from PDF scans",
            body:
                "After OCR, you can select/copy text from scanned pages for editing, translation, or reuse in other documents."
        }
    ];

    const troubleshooting = [
        {
            title: "OCR text accuracy is low",
            body:
                "Blurry scans, shadows, skewed pages, and low resolution reduce accuracy. For best results, use clear scans with good lighting, keep pages straight, and choose the correct language."
        },
        {
            title: "Text is searchable but looks misread",
            body:
                "Try re-running OCR with the correct language, and ensure pages are upright. If the scan is very low-quality, rescanning at higher quality usually fixes most errors."
        },
        {
            title: "Some pages work, others don’t",
            body:
                "Mixed quality in a single PDF is common. Re-run OCR after improving the problematic pages (rotation, contrast, clarity)."
        },
        {
            title: "I need a Word/Excel file from a scanned PDF",
            body:
                "OCR first, then convert. OCR makes text machine-readable, which improves conversion results for scanned documents."
        }
    ];

    // Visible FAQ MUST match JSON-LD FAQ 1:1
    const faqs = [
        {
            q: "What is OCR PDF?",
            a:
                "OCR (Optical Character Recognition) converts scanned, image-based PDFs into real text by adding an invisible text layer. After OCR, you can search (Ctrl+F), select, and copy text."
        },
        {
            q: "How do I OCR a PDF online for free?",
            a:
                "Upload your scanned PDF, select the correct language, run OCR, and download the searchable PDF. After that, Ctrl+F works and you can copy text."
        },
        {
            q: "Why can’t I copy text from my PDF?",
            a:
                "If your PDF is a scan (image-only), it contains no real text layer. OCR recognizes the text and adds an invisible overlay so copying and searching works."
        },
        {
            q: "How do I make a scanned PDF searchable?",
            a:
                "Run OCR on the scanned PDF to add a text layer. After OCR, Ctrl+F works and you can copy and select text from the document."
        },
        {
            q: "Is this OCR PDF tool free and unlimited?",
            a:
                "Yes. This OCR PDF tool is free to use online with no signup and is designed to work without usage limits."
        },
        {
            q: "Will the downloaded PDF have a watermark?",
            a:
                "No. Your OCR result downloads without a watermark."
        },
        {
            q: "Will OCR make my PDF editable?",
            a:
                "OCR makes text searchable and selectable. Editing depends on the PDF structure and editor capabilities. After OCR, you can try Edit PDF for text-based documents."
        },
        {
            q: "How can I improve OCR accuracy?",
            a:
                "Use clearer scans (less blur/shadow-[0_0_25px_rgba(139,92,246,0.2)]), keep pages upright, choose the correct language, and ensure the text is readable in the scan."
        }
    ];

    // Schemas
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
            { "@type": "ListItem", position: 2, name: "OCR", item: `${base}/ocr/` },
            { "@type": "ListItem", position: 3, name: "OCR PDF", item: canonical }
        ]
    };

    const webAppSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "TechRex — OCR PDF",
        url: canonical,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to OCR a PDF online",
        description:
            "Upload a scanned PDF, select language, run OCR, and download a searchable PDF so you can copy text and use Ctrl+F.",
        totalTime: "PT2M",
        step: [
            {
                "@type": "HowToStep",
                url: `${canonical}#step-upload`,
                name: "Upload your scanned PDF",
                text: "Upload the scanned PDF you want to make searchable."
            },
            {
                "@type": "HowToStep",
                url: `${canonical}#step-language`,
                name: "Select the document language",
                text: "Choose the correct language to improve OCR accuracy."
            },
            {
                "@type": "HowToStep",
                url: `${canonical}#step-download`,
                name: "Download a searchable PDF",
                text: "Download the OCR’d PDF and use Ctrl+F to search and copy text."
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
    };

    return (
        <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonical} />
                <meta
                    name="robots"
                    content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
                />

                {/* OpenGraph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="TechRex Free PDF Editor" />
                <meta property="og:url" content={canonical} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:alt" content="OCR PDF Online (Free) – TechRex" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:image:alt" content="OCR PDF Online (Free) – TechRex" />

                {/* JSON-LD */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>

            <SiteNav />

            {/* HERO */}
            <section className="digital-obsidian text-on-surface py-14 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            OCR PDF Online Free
                            <br />
                            <span className="text-primary-600">Make Scanned PDFs Searchable (Ctrl+F)</span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-3">
                            Turn an image-only scanned PDF into a <strong>searchable PDF</strong>. After OCR, you can search inside the document
                            with <strong>Ctrl+F</strong> (or Find on mobile) and copy text from scanned pages.
                        </p>

                        <p className="text-base text-on-surface-variant mb-6">
                            Free to use online with <strong>no signup</strong>. Designed for quick results and everyday PDF OCR tasks.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#upload"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" aria-hidden="true" />
                                Upload PDF for OCR
                            </a>

                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <ArrowRight className="h-5 w-5" aria-hidden="true" />
                                How it works
                            </a>
                        </div>

                        {/* Benefits */}
                        <div className="mt-10">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
                                What you get after OCR
                            </h2>
                            <ul className="space-y-2 text-on-surface">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2
                                            className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                        />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-on-surface-variant">
                                <span className="inline-flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4" aria-hidden="true" /> No signup
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <Sparkles className="h-4 w-4" aria-hidden="true" /> Watermark-free
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <Languages className="h-4 w-4" aria-hidden="true" /> Language selection
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Tool */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Search className="h-5 w-5 text-primary-600" aria-hidden="true" />
                                <p className="font-semibold">Upload and OCR your PDF</p>
                            </div>

                            <p className="text-sm text-on-surface-variant mb-4">
                                Upload a scanned PDF, select language, run OCR, and download a searchable PDF.
                            </p>

                            <OCRTool minimal={true} />

                            <p className="text-xs text-outline mt-3">
                                Next step after OCR:{" "}
                                <a href="/edit-pdf/" className="underline hover:text-on-surface-variant">
                                    Edit PDF
                                </a>{" "}
                                or{" "}
                                <a href="/pdf-to-word-ocr/" className="underline hover:text-on-surface-variant">
                                    convert to Word (OCR)
                                </a>
                                .
                            </p>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* SCANNED VS NORMAL (ranking lever) */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Scanned PDF vs normal PDF (why OCR is needed)</h2>
                        <p className="text-on-surface-variant mb-4">
                            A normal PDF contains real text you can select and search. A scanned PDF is usually just an image of the page
                            (like a photo inside a PDF). That’s why copy/paste and Ctrl+F don’t work.
                        </p>
                        <p className="text-on-surface-variant">
                            OCR recognizes the text in the scan and adds an invisible text layer so your PDF becomes searchable.
                            Not sure which type you have? Check:{" "}
                            <a href="/is-my-pdf-scanned/" className="text-primary-700 underline hover:text-primary-900">
                                Is my PDF scanned?
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* HOW-TO */}
                <section id="how-to" className="py-12 bg-[#091328]/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to OCR a PDF online (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            {howTo.map((s) => (
                                <li key={s.id} id={s.id}>
                                    <h3 className="font-semibold">{s.title}</h3>
                                    <p className="text-on-surface-variant mt-1">{s.body}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* USE CASES */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4">Common uses for OCR PDF</h2>
                        <p className="text-on-surface-variant mb-6">
                            OCR PDF is used when you need to search, copy, or reuse text from scans. These are common scenarios that match real user intent.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {useCases.map((c) => (
                                <div key={c.title} className="bg-[#091328]/50 border rounded-2xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <div className="flex items-center gap-2 mb-2 text-primary-700">
                                        {c.icon}
                                        <h3 className="font-semibold text-on-surface font-headline">{c.title}</h3>
                                    </div>
                                    <p className="text-on-surface-variant text-sm">{c.body}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                            <p className="text-on-surface">
                                Need OCR for a JPG/PNG instead of a PDF? Use{" "}
                                <a href="/image-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                    Image to Text
                                </a>{" "}
                                for photos and screenshots.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TROUBLESHOOTING */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Wrench className="h-5 w-5" aria-hidden="true" />
                            Troubleshooting OCR PDF
                        </h2>
                        <p className="text-on-surface-variant mb-6">
                            These quick fixes help you get cleaner OCR output and better searchable text.
                        </p>

                        <div className="space-y-4">
                            {troubleshooting.map((t) => (
                                <div key={t.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <h3 className="text-lg font-bold text-on-surface font-headline mb-2">{t.title}</h3>
                                    <p className="text-on-surface-variant">{t.body}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="/compress-scanned-pdf-online/"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-700 font-semibold hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                            >
                                <LinkIcon className="h-4 w-4" aria-hidden="true" />
                                Compress scanned PDF
                            </a>
                            <a
                                href="/make-pdf-searchable/"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-700 font-semibold hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                            >
                                <LinkIcon className="h-4 w-4" aria-hidden="true" />
                                Make PDF searchable
                            </a>
                            <a
                                href="/pdf-to-text/"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-700 font-semibold hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                            >
                                <LinkIcon className="h-4 w-4" aria-hidden="true" />
                                PDF to Text
                            </a>
                        </div>
                    </div>
                </section>

                {/* SECURITY / PRIVACY */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
                        <p className="text-on-surface-variant mb-4">
                            OCR works by processing your document to recognize text. If you’re testing, use sample PDFs or redact sensitive data.
                            Review the privacy policy for retention/deletion details.
                        </p>

                        <div className="bg-[#091328]/50 border rounded-2xl p-6">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">Privacy checklist</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-on-surface-variant">
                                        <li>Avoid uploading extremely sensitive documents.</li>
                                        <li>Use trusted networks and keep your browser updated.</li>
                                        <li>
                                            Read our{" "}
                                            <a href="/privacy/" className="text-primary-700 underline hover:text-primary-900">
                                                Privacy Policy
                                            </a>{" "}
                                            and{" "}
                                            <a href="/terms/" className="text-primary-700 underline hover:text-primary-900">
                                                Terms
                                            </a>
                                            .
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">FAQs about OCR PDF</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 p-5 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.1)] border">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <p className="mt-2 text-on-surface-variant">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related tools */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" aria-hidden="true" />
                            Related tools
                        </h2>
                        <p className="text-on-surface-variant mb-3">
                            Use these tools before or after OCR to complete your workflow:
                        </p>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/ocr/" className="underline hover:text-primary-900">OCR hub</a></li>
                            <li><a href="/image-to-text/" className="underline hover:text-primary-900">Image to Text</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF</a></li>
                            <li><a href="/pdf-to-word-ocr/" className="underline hover:text-primary-900">PDF to Word (OCR)</a></li>
                            <li><a href="/pdf-to-excel-ocr/" className="underline hover:text-primary-900">PDF to Excel (OCR)</a></li>
                            <li><a href="/edit-pdf/" className="underline hover:text-primary-900">Edit PDF</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-primary-900">Sign PDF</a></li>
                            <li><a href="/tools/" className="underline hover:text-primary-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-primary mb-2">OCR your PDF now</h2>
                        <p className="text-primary-100 mb-6">
                            Upload a scanned PDF and download a searchable PDF. Copy text and search inside your scan using Ctrl+F.
                        </p>
                        <a
                            href="#upload"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <Download className="h-5 w-5" aria-hidden="true" />
                            Upload PDF for OCR
                        </a>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
                <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="/tools/" className="hover:text-on-primary">Tools</a>
                    <a href="/privacy/" className="hover:text-on-primary">Privacy</a>
                    <a href="/terms/" className="hover:text-on-primary">Terms</a>
                    <a href="/contact/" className="hover:text-on-primary">Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default { Page: OCRPdfPage };
