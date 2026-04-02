import React from "react";
import { Helmet } from "react-helmet";
import {
    FileText,
    Gauge,
    Upload,
    CheckCircle2,
    Link as LinkIcon,
    ShieldCheck,
    Lock,
    Mail,
    FileUp,
    Smartphone,
    Image as ImageIcon,
    ArrowRight,
    AlertTriangle
} from "lucide-react";

import CompressDropBox from "../../src/components/CompressDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

/**
 * Vike:
 * - *.page.jsx must default-export an object with { Page }.
 * - We export Page as CompressPdfTo1MbPage inside the object below.
 */

function CompressPdfTo1MbPage() {
    const base = "https://pdffreeeditor.com";
    const canonical = `${base}/compress-pdf-to-1mb/`;

    // Distinct positioning vs 500KB:
    // 1MB page = "best balance" / readability-first default.
    const metaTitle = "Compress PDF to 1MB Online (Best Quality Balance) | TechRex";
    const metaDescription =
        "Compress a PDF to under 1MB for uploads and email while keeping text readable. Start with Compact for best quality; use Rasterize only if you need a smaller file.";

    // If you don’t have this yet, you can temporarily set it to your site-wide OG image.
    const ogImage = `${base}/og/compress-pdf-to-1mb.png`;

    const benefits = [
        "Best balance: reduce PDF size to ~1MB without ruining readability",
        "Ideal for uploads, email attachments, LMS and client documents",
        "Compact mode preserves selectable/searchable text when possible",
        "Rasterize is available only when you must push smaller than Compact can",
        "Works on iPhone, Android, Mac & Windows"
    ];

    // Quality-first workflow: distinct from 500KB which is strict-limit-first.
    const workflow = [
        {
            title: "Step 1 — Compact first (recommended)",
            body: (
                <>
                    Start with <strong>Compact</strong> to keep text sharp and preserve the PDF structure.
                    For most documents, this is the fastest path to get under 1MB without visible damage.
                </>
            )
        },
        {
            title: "Step 2 — If still above 1MB, adjust gradually",
            body: (
                <>
                    If you still need a smaller file, use <strong>Rasterize</strong> and reduce{" "}
                    <strong>Quality/DPI</strong> in small steps. This is best for image-heavy PDFs and scans.
                </>
            )
        },
        {
            title: "Step 3 — Verify size + keep it usable",
            body: (
                <>
                    Download the output and check file size before uploading. If readability matters, avoid overly aggressive DPI drops.
                    If you need Ctrl+F/search after Rasterize, run OCR afterward.
                </>
            )
        }
    ];

    const useCases = [
        {
            icon: <FileUp className="h-5 w-5" aria-hidden="true" />,
            title: "Uploads that commonly cap around 1MB",
            body:
                "Many portals, LMS systems, and forms accept up to ~1MB. This page is designed to help you meet the limit while keeping your PDF readable."
        },
        {
            icon: <Mail className="h-5 w-5" aria-hidden="true" />,
            title: "Email attachments",
            body:
                "Compressing to under 1MB makes attachments faster to send and less likely to fail on slow connections."
        },
        {
            icon: <Smartphone className="h-5 w-5" aria-hidden="true" />,
            title: "Mobile sharing and viewing",
            body:
                "Smaller PDFs open faster on phones and are easier to download, especially if the document contains images."
        },
        {
            icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
            title: "Storage and performance",
            body:
                "Reducing PDF size keeps archives lighter and improves load performance for documents you share repeatedly."
        }
    ];

    // Distinct “what fits in ~1MB” block (unique vs 500KB page)
    const typicalFits = [
        {
            icon: <FileText className="h-5 w-5" aria-hidden="true" />,
            title: "Text-heavy PDFs",
            body: "Resumes, letters, exported forms, and invoices often compress cleanly under 1MB with Compact."
        },
        {
            icon: <ImageIcon className="h-5 w-5" aria-hidden="true" />,
            title: "Mixed text + images",
            body: "Reports with a few charts/images usually reach ~1MB with Compact; Rasterize only if you need extra reduction."
        },
        {
            icon: <AlertTriangle className="h-5 w-5" aria-hidden="true" />,
            title: "Scanned PDFs",
            body: "Scans are image-heavy. You may need Rasterize and gradual DPI/quality tuning to reach under 1MB."
        }
    ];

    // Visible FAQ MUST match schema 1:1
    const faqs = [
        {
            q: "How do I compress a PDF to under 1MB?",
            a:
                "Upload your PDF and start with Compact (best quality). If the result is still above 1MB, switch to Rasterize and reduce quality/DPI gradually until the file is under 1MB."
        },
        {
            q: "Can you compress a PDF to exactly 1MB?",
            a:
                "Often you can get under 1MB, but exact sizes aren’t always possible because PDFs vary. Image-heavy scans may need Rasterize with lower DPI/quality, and some PDFs are already optimized so they won’t shrink much."
        },
        {
            q: "What’s the difference between Compact and Rasterize?",
            a:
                "Compact preserves PDF structure (sharp text/vectors) while optimizing images and extra data. Rasterize converts pages to images at your chosen quality/DPI for stronger reduction, but it can reduce text select/search."
        },
        {
            q: "Will my text stay selectable and searchable (Ctrl+F)?",
            a:
                "With Compact, text often remains selectable/searchable. Rasterize may turn pages into images, which can remove text selection/search. If you rasterize and need search, run OCR afterward."
        },
        {
            q: "Why is my PDF not going under 1MB?",
            a:
                "Usually because it contains high-resolution images/scans, many pages, or it’s already compressed. Try Rasterize, lower DPI/quality gradually, remove unnecessary pages, or split the PDF if the portal allows multiple uploads."
        },
        {
            q: "Should I use 1MB or 500KB?",
            a:
                "Use 1MB when you want the best balance of readability and size. Use 500KB only when a portal has a strict 500KB limit and you must push the file smaller."
        },
        {
            q: "Is my PDF uploaded to your servers?",
            a:
                "Your PDF is transferred over an encrypted TLS connection to our compression backend and Adobe PDF Services for processing. As with any online service, avoid uploading extremely sensitive documents."
        },
        {
            q: "Does it work on iPhone and Android?",
            a:
                "Yes. Open this page in Safari (iOS) or Chrome (Android) to compress PDFs without installing an app."
        }
    ];

    // JSON-LD
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
            { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
            { "@type": "ListItem", position: 3, name: "Compress PDF", item: `${base}/compress-pdf/` },
            { "@type": "ListItem", position: 4, name: "Compress to 1MB", item: canonical }
        ]
    };

    const webAppSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "TechRex — Compress PDF to 1MB",
        url: canonical,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to compress a PDF to under 1MB",
        description:
            "Upload your PDF, start with Compact for best quality, and use Rasterize only if you need additional size reduction to get under 1MB.",
        totalTime: "PT2M",
        step: [
            {
                "@type": "HowToStep",
                url: `${canonical}#step-upload`,
                name: "Upload your PDF",
                text: "Upload the PDF you want to reduce to under 1MB."
            },
            {
                "@type": "HowToStep",
                url: `${canonical}#step-choose`,
                name: "Use Compact first (recommended)",
                text: "Start with Compact for best readability. If still above 1MB, use Rasterize and reduce quality/DPI gradually."
            },
            {
                "@type": "HowToStep",
                url: `${canonical}#step-download`,
                name: "Download and verify the size",
                text: "Download the compressed PDF and confirm it is under 1MB before uploading or emailing."
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
                <meta property="og:image:alt" content="Compress PDF to 1MB Online – TechRex" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:image:alt" content="Compress PDF to 1MB Online – TechRex" />

                {/* JSON-LD */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>

            <SiteNav />

            {/* HERO */}
            <section className="digital-obsidian text-on-surface py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Compress PDF to 1MB Online
                            <br />
                            <span className="text-primary-600">Best balance of quality and size</span>
                        </h1>

                        {/* Answer-first for SEO + users */}
                        <p className="text-lg text-on-surface-variant mb-3">
                            Need to <strong>reduce PDF size to under 1MB</strong> without destroying readability?
                            Start with <strong>Compact</strong> for best quality, then use <strong>Rasterize</strong>{" "}
                            only if you still need a smaller file.
                        </p>

                        <p className="text-base text-on-surface-variant mb-8">
                            This page is the quality-first default. If you have a strict portal cap at 500KB, use{" "}
                            <a href="/compress-pdf-to-500kb/" className="text-primary-700 underline hover:text-primary-900">
                                Compress to 500KB
                            </a>
                            .
                        </p>

                        <div className="flex flex-col gap-3 md:items-start items-center">
                            <a
                                href="#compress"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <Upload className="h-5 w-5" aria-hidden="true" />
                                <span>Start — Compress to 1MB</span>
                            </a>

                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <ArrowRight className="h-5 w-5" aria-hidden="true" />
                                <span>How it works (3 steps)</span>
                            </a>
                        </div>

                        {/* Trust bullets */}
                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-on-surface-variant">
                            {benefits.map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-on-surface-variant">
                            <span className="inline-flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4" /> Watermark-free
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Lock className="h-4 w-4" /> TLS encrypted transfer
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Gauge className="h-4 w-4" /> Compact for quality
                            </span>
                        </div>
                    </div>

                    {/* Desktop dropzone */}
                    <aside className="hidden md:block" id="compress" aria-label="Compress PDF dropzone">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Gauge className="h-5 w-5 text-primary-600" aria-hidden="true" />
                                <p className="font-semibold">Compress to ~1MB</p>
                            </div>

                            <p className="text-sm text-on-surface-variant mb-4">
                                Quality-first workflow: <strong>Compact</strong> first. Use <strong>Rasterize</strong> only if you still
                                need a smaller file size.
                            </p>

                            <CompressDropBox />

                            <div className="mt-3 text-xs text-outline">
                                Tip: If your PDF is scanned/photo-based, you may need Rasterize sooner.
                                If you must hit 500KB, use{" "}
                                <a href="/compress-pdf-to-500kb/" className="underline hover:text-on-surface-variant">
                                    the 500KB page
                                </a>
                                .
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* QUALITY-FIRST WORKFLOW */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">Fastest way to get a PDF under 1MB (without ruining quality)</h2>
                        <p className="text-on-surface-variant mb-6">
                            There is no universal “1MB button” because PDFs vary. This workflow keeps the file usable and readable.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {workflow.map((item) => (
                                <div key={item.title} className="bg-[#091328]/50 rounded-2xl border p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-on-surface-variant text-sm">{item.body}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <div className="font-semibold mb-2">If it’s still not under 1MB:</div>
                            <ul className="list-disc ml-6 text-sm text-on-surface-variant space-y-1">
                                <li>Remove unnecessary pages and compress again.</li>
                                <li>Split the PDF into parts under 1MB if your portal allows multiple files.</li>
                                <li>If it’s scanned/photo-based, lower DPI/quality gradually in Rasterize.</li>
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <a
                                    href="/split-pdf/"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-700 font-semibold hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                                >
                                    <LinkIcon className="h-4 w-4" />
                                    Split PDF
                                </a>
                                <a
                                    href="/compress-scanned-pdf-online/"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-700 font-semibold hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                                >
                                    <LinkIcon className="h-4 w-4" />
                                    Compress scanned PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT FITS IN ~1MB (unique block) */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4">What typically fits under 1MB?</h2>
                        <p className="text-on-surface-variant mb-6">
                            1MB is a common limit because it usually keeps documents readable. Your outcome depends on page count and image density.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {typicalFits.map((x) => (
                                <div key={x.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl border p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <div className="flex items-center gap-2 mb-2 text-primary-700">
                                        {x.icon}
                                        <h3 className="font-semibold text-on-surface font-headline">{x.title}</h3>
                                    </div>
                                    <p className="text-on-surface-variant text-sm">{x.body}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                            <p className="text-on-surface">
                                If your upload fails at 1MB, and the portal explicitly requires <strong>500KB</strong>, use the strict-limit page:{" "}
                                <a href="/compress-pdf-to-500kb/" className="text-primary-700 underline hover:text-primary-900">
                                    Compress PDF to 500KB
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </section>

                {/* USE CASES */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4">Why people compress PDFs to 1MB</h2>
                        <p className="text-on-surface-variant mb-6">
                            “Compress PDF to 1MB” is usually a practical constraint: uploads, email, or mobile sharing.
                            This page is optimized for the quality-first version of that intent.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {useCases.map((c) => (
                                <div key={c.title} className="bg-[#091328]/50 rounded-2xl border p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-primary-700">{c.icon}</span>
                                        <h3 className="font-semibold">{c.title}</h3>
                                    </div>
                                    <p className="text-on-surface-variant text-sm">{c.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW-TO anchors for schema */}
                <section id="how-to" className="py-12 bg-[#091328]/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to compress a PDF to under 1MB (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p className="text-on-surface-variant">
                                    Upload the PDF you want to reduce. The file is transferred over an encrypted TLS connection for processing.
                                </p>
                            </li>
                            <li id="step-choose">
                                <h3 className="font-semibold">2) Use Compact first (recommended)</h3>
                                <p className="text-on-surface-variant">
                                    Start with <strong>Compact</strong> to keep text crisp. If you still need smaller output, switch to{" "}
                                    <strong>Rasterize</strong> and reduce quality/DPI gradually.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download and upload/email</h3>
                                <p className="text-on-surface-variant">
                                    Download the compressed PDF and verify the file size before uploading. If the portal requires 500KB, switch targets.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Mobile dropzone */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5 md:hidden" id="compress-inline" aria-label="Compress PDF dropzone (mobile)">
                    <div className="max-w-4xl mx-auto px-6">
                        <div id="compress" className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <CompressDropBox />
                            <div className="mt-3 text-xs text-outline">
                                Compact first for quality. Use Rasterize only if you still need a smaller file.
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Compress PDF to 1MB — FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-[#091328]/50 p-5 rounded-2xl border border-white/5">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <p className="mt-2 text-on-surface-variant">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED LINKS (cleaned: no retired size pages) */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related compression tools
                        </h2>
                        <p className="text-on-surface-variant mb-4">
                            Use the right page for your constraint. For strict limits use 500KB; for general compression use the hub.
                        </p>

                        <div className="mb-8 grid md:grid-cols-3 gap-4 text-sm bg-primary-50 p-4 rounded-2xl border border-primary-100">
                            <a href="/compress-pdf-for-email/" className="flex flex-col gap-1 hover:bg-[#091328]/50 backdrop-blur-xl border border-white/5 p-3 rounded-xl transition">
                                <span className="font-bold text-primary-800">Email attachment too big?</span>
                                <span className="text-primary-600 underline">Compress for email</span>
                            </a>
                            <a href="/compress-pdf-for-portal-upload/" className="flex flex-col gap-1 hover:bg-[#091328]/50 backdrop-blur-xl border border-white/5 p-3 rounded-xl transition">
                                <span className="font-bold text-primary-800">Portal upload failing?</span>
                                <span className="text-primary-600 underline">Compress for portal upload</span>
                            </a>
                            <a href="/compress-scanned-pdf-online/" className="flex flex-col gap-1 hover:bg-[#091328]/50 backdrop-blur-xl border border-white/5 p-3 rounded-xl transition">
                                <span className="font-bold text-primary-800">Scanned document?</span>
                                <span className="text-primary-600 underline">Compress scanned PDF</span>
                            </a>
                        </div>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF (hub)</a></li>
                            <li><a href="/compress-pdf-to-500kb/" className="underline hover:text-primary-900">Compress PDF to 500KB (strict)</a></li>
                            <li><a href="/compress-pdf-without-losing-quality/" className="underline hover:text-primary-900">Compress without losing quality</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF</a></li>
                            <li><a href="/ocr/" className="underline hover:text-primary-900">OCR (make scans searchable)</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-primary-900">Sign PDF after compressing</a></li>
                        </ul>
                    </div>
                </section>

                {/* NEXT STEPS (kept, but de-duplicated) */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Related tools</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="/compress-pdf/"
                                            className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Compress PDF (All options)
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/compress-pdf-to-500kb/"
                                            className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Compress to 500KB (strict limit)
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/compress-pdf-for-email/"
                                            className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Compress for email
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Next steps</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="/merge-pdf/"
                                            className="group flex items-center justify-between p-3 rounded-2xl border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition"
                                        >
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Merge PDF</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/sign-pdf/"
                                            className="group flex items-center justify-between p-3 rounded-2xl border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition"
                                        >
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Sign PDF</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/edit-pdf/"
                                            className="group flex items-center justify-between p-3 rounded-2xl border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition"
                                        >
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Edit PDF</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                            <a
                                href="/compress-pdf/"
                                className="text-sm font-semibold text-outline hover:text-primary-600 uppercase tracking-wide"
                            >
                                View all compressors
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
                <p>© {new Date().getFullYear()} Free PDF Editor by TechRex. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="/privacy/" className="hover:text-on-primary">Privacy</a>
                    <a href="/terms/" className="hover:text-on-primary">Terms</a>
                    <a href="/contact/" className="hover:text-on-primary">Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default { Page: CompressPdfTo1MbPage };
