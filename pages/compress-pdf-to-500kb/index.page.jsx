// pages/compress-pdf-to-500kb/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    Upload,
    Gauge,
    CheckCircle2,
    ShieldCheck,
    AlertTriangle,
    FileText,
    ArrowRight,
    Link as LinkIcon
} from "lucide-react";

import SiteNav from "/src/components/SiteNav.jsx";
import CompressDropBox from "/src/components/CompressDropBox.jsx";

/**
 * Vike requirement:
 * - *.page.jsx must default-export an OBJECT (page module), not a component.
 * - The component must be exported as { Page } inside that object.
 */

function Page() {
    const base = "https://pdffreeeditor.com";
    const canonical = `${base}/compress-pdf-to-500kb/`;

    // Confirmed by you
    const metaTitle = "Compress PDF to 500KB Free Online | TechRex";
    const metaDescription =
        "Reduce a PDF to 500KB while keeping text sharp. Use Compact for best quality, or Rasterize when a portal requires the smallest file size.";

    // Optional: create this asset later; if you don't have it yet, swap back to your default OG image.
    const ogImage = `${base}/og/compress-pdf-to-500kb.png`;

    const bullets = [
        "Designed for strict 500KB upload limits (forms, job portals, scholarships).",
        "Compact mode preserves structure and keeps text sharp.",
        "Rasterize mode targets the smallest size when you must hit 500KB.",
        "Upload → compress → download. Works on mobile and desktop.",
        "Secure transfer over TLS during processing."
    ];

    const useCases = [
        {
            title: "Job / university / government portals",
            body:
                "Many portals hard-reject PDFs above 500KB. This page is built specifically for strict caps and upload errors."
        },
        {
            title: "Application forms with size limits",
            body:
                "Compress attachments to meet strict requirements without repeated failed uploads."
        },
        {
            title: "Faster uploads on slow connections",
            body:
                "Smaller PDFs upload faster and are less likely to fail on mobile data or unstable networks."
        }
    ];

    const decisionRows = [
        {
            situation: "Text-based PDF (resume, letter, exported form)",
            mode: "Compact",
            why:
                "Keeps text crisp and usually reduces size without destroying readability."
        },
        {
            situation: "Scanned PDF / photo-based pages",
            mode: "Rasterize",
            why:
                "Scans are mostly images. Rasterize + lower DPI/quality produces the biggest reductions."
        },
        {
            situation: "Still above 500KB after Compact",
            mode: "Rasterize",
            why:
                "Reduce quality/DPI gradually until you hit ~500KB (or as close as possible)."
        },
        {
            situation: "Need searchable/selectable text after compression",
            mode: "Compact (then OCR if needed)",
            why:
                "Rasterize can make pages image-based. If you rasterize, run OCR afterward to restore search/copy."
        }
    ];

    const troubleshooting = [
        {
            title: "My PDF won’t go under 500KB",
            body:
                "This usually happens with scanned PDFs, high-resolution images, or many pages. Switch to Rasterize, reduce DPI/quality step-by-step, and if needed split the document into smaller parts.",
            links: [
                { href: "/split-pdf/", text: "Split PDF" },
                { href: "/compress-scanned-pdf-online/", text: "Compress scanned PDF" }
            ]
        },
        {
            title: "The portal still rejects my upload",
            body:
                "Some portals enforce additional rules (password protection, file type quirks, or hidden limits). Remove passwords, verify the final downloaded size, and retry.",
            links: [{ href: "/compress-pdf-for-portal-upload/", text: "Compress for portal upload" }]
        },
        {
            title: "Text became blurry or hard to read",
            body:
                "Use Compact first. If Rasterize is required, reduce quality in small steps and avoid dropping DPI too aggressively.",
            links: [
                { href: "/compress-pdf-to-1mb/", text: "Prefer quality? Try 1MB" },
                { href: "/compress-pdf-without-losing-quality/", text: "Compress without losing quality" }
            ]
        },
        {
            title: "My PDF is scanned and not searchable",
            body:
                "Scanned PDFs are images, so Ctrl+F and copy/paste may not work even after compression. Run OCR after compressing to make the PDF searchable again.",
            links: [
                { href: "/ocr/", text: "OCR tool" },
                { href: "/make-pdf-searchable/", text: "Make PDF searchable" }
            ]
        }
    ];

    // Visible FAQ MUST match FAQ schema 1:1
    const faqs = [
        {
            q: "How do I compress a PDF to 500KB online?",
            a:
                "Upload your PDF, start with Compact (best readability), then download. If it’s still too large, switch to Rasterize and reduce quality/DPI gradually until you reach ~500KB."
        },
        {
            q: "Can you make a PDF exactly 500KB?",
            a:
                "Sometimes, but not always. Image-heavy scans may not reach exactly 500KB without noticeable quality loss. In that case, reduce quality/DPI gradually or split the PDF into parts."
        },
        {
            q: "What’s the difference between Compact and Rasterize?",
            a:
                "Compact optimizes the PDF while preserving structure (sharp text/vectors). Rasterize rebuilds pages as compressed images at a chosen quality/DPI for maximum reduction—best for strict limits like 500KB."
        },
        {
            q: "Why is my PDF stuck above 500KB?",
            a:
                "Usually because it contains high-resolution images/scans, many pages, or is already optimized. Try Rasterize, lower DPI/quality gradually, remove extra pages, or split the file."
        },
        {
            q: "Will Rasterize affect text selection or Ctrl+F search?",
            a:
                "Yes. Rasterize can make pages image-based, so text may no longer be selectable or searchable. If you need search afterward, run OCR after compressing."
        },
        {
            q: "Is my file uploaded during compression?",
            a:
                "Yes. Your PDF is transferred over an encrypted TLS connection for processing. Avoid uploading extremely sensitive documents and review the Privacy Policy for details."
        },
        {
            q: "What should I do if the portal still rejects my PDF?",
            a:
                "Confirm the downloaded file size, remove passwords, and consider splitting the PDF into smaller parts if multiple uploads are allowed."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
            { "@type": "ListItem", position: 2, name: "Tools", item: `${base}/tools/` },
            { "@type": "ListItem", position: 3, name: "Compress PDF", item: `${base}/compress-pdf/` },
            { "@type": "ListItem", position: 4, name: "Compress to 500KB", item: canonical }
        ]
    };

    const webAppSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "TechRex — Compress PDF to 500KB",
        url: canonical,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to compress a PDF to 500KB",
        description:
            "Upload your PDF, compress in Compact mode for best quality, and use Rasterize if you must hit a strict 500KB limit.",
        totalTime: "PT2M",
        step: [
            {
                "@type": "HowToStep",
                url: `${canonical}#step-upload`,
                name: "Upload your PDF",
                text: "Upload the PDF you need to reduce to 500KB."
            },
            {
                "@type": "HowToStep",
                url: `${canonical}#step-choose`,
                name: "Choose Compact or Rasterize",
                text:
                    "Start with Compact for readability. If still too large, switch to Rasterize and reduce quality/DPI gradually."
            },
            {
                "@type": "HowToStep",
                url: `${canonical}#step-download`,
                name: "Download and verify file size",
                text:
                    "Download the compressed PDF and confirm it is under or near 500KB before uploading."
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
                <meta property="og:image:alt" content="Compress PDF to 500KB Online Free – TechRex" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:image:alt" content="Compress PDF to 500KB Online Free – TechRex" />

                {/* JSON-LD */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>

            <SiteNav />

            {/* HERO + TOOL */}
            <section className="digital-obsidian text-on-surface py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Compress PDF to 500KB Free Online
                            <br />
                            <span className="text-primary-600">Built for strict upload limits</span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-5">
                            Need a PDF under <strong>500KB</strong> for a portal upload? Start with{" "}
                            <strong>Compact</strong> to keep text sharp, then use <strong>Rasterize</strong>{" "}
                            when you must hit the smallest file size.
                        </p>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] mb-6">
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <Gauge className="h-5 w-5 text-primary-600" />
                                What this page is best for
                            </h2>

                            <ul className="space-y-2 text-on-surface-variant">
                                {bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
                                <a
                                    href="#tool"
                                    className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                                >
                                    <Upload className="h-5 w-5" />
                                    Compress to 500KB
                                </a>

                                <a
                                    href="#how-to"
                                    className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                                >
                                    <ArrowRight className="h-5 w-5" />
                                    How it works
                                </a>

                                <a
                                    href="/compress-pdf/"
                                    className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                                >
                                    <LinkIcon className="h-5 w-5" />
                                    All compression options
                                </a>
                            </div>

                            <p className="text-sm text-on-surface-variant mt-4">
                                Prefer better readability and a less strict limit?{" "}
                                <a href="/compress-pdf-to-1mb/" className="text-primary-700 underline hover:text-primary-900">
                                    Compress to 1MB
                                </a>
                                .
                            </p>
                        </div>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <h3 className="font-bold mb-3">Jump to:</h3>
                            <ul className="grid sm:grid-cols-2 gap-2 text-primary-700">
                                <li><a className="underline hover:text-primary-900" href="#tool">Tool</a></li>
                                <li><a className="underline hover:text-primary-900" href="#how-to">How to compress to 500KB</a></li>
                                <li><a className="underline hover:text-primary-900" href="#decision">Compact vs Rasterize</a></li>
                                <li><a className="underline hover:text-primary-900" href="#troubleshoot">Troubleshooting</a></li>
                                <li><a className="underline hover:text-primary-900" href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* TOOL */}
                    <aside id="tool" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Gauge className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Compress to ~500KB</p>
                            </div>

                            <p className="text-sm text-on-surface-variant mb-4">
                                Upload your PDF and choose the mode that matches your goal:
                                <strong> Compact</strong> for readability, <strong>Rasterize</strong> for the smallest size.
                            </p>

                            {/* No ads here */}
                            <CompressDropBox variant="500kb" />

                            <div className="mt-4 bg-[#091328]/50 border rounded-xl p-4">
                                <p className="font-semibold text-on-surface font-headline mb-1">Strict limit tips</p>
                                <p className="text-sm text-on-surface-variant">
                                    If you can’t reach 500KB, try Rasterize and reduce DPI/quality gradually.
                                    For long files, split first:{" "}
                                    <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        Split PDF
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="mt-3 text-xs text-outline flex items-start gap-2">
                                <ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span>
                                    Files are transferred securely (TLS). Avoid uploading extremely sensitive documents.{" "}
                                    <a href="/privacy/" className="underline hover:text-on-surface-variant">Privacy Policy</a>.
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* HOW TO */}
                <section id="how-to" className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to compress a PDF to 500KB (3 steps)</h2>

                        <ol className="space-y-4">
                            <li id="step-upload" className="bg-[#091328]/50 border rounded-xl p-5">
                                <h3 className="font-semibold text-on-surface font-headline mb-1">1) Upload your PDF</h3>
                                <p className="text-on-surface-variant">
                                    Upload the PDF you need under 500KB. If it’s long, consider splitting it first so you compress only what you must upload.
                                </p>
                            </li>

                            <li id="step-choose" className="bg-[#091328]/50 border rounded-xl p-5">
                                <h3 className="font-semibold text-on-surface font-headline mb-1">2) Start with Compact (then use Rasterize if needed)</h3>
                                <p className="text-on-surface-variant">
                                    Compact preserves readability. If the output is still above 500KB, switch to Rasterize and reduce quality/DPI gradually until the portal accepts it.
                                </p>
                            </li>

                            <li id="step-download" className="bg-[#091328]/50 border rounded-xl p-5">
                                <h3 className="font-semibold text-on-surface font-headline mb-1">3) Download and verify the final size</h3>
                                <p className="text-on-surface-variant">
                                    Download the compressed PDF and verify the file size before uploading to your portal or form.
                                </p>
                            </li>
                        </ol>

                        {/* Strict-limit warning unique to 500KB */}
                        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-700" />
                                500KB feasibility (important)
                            </h3>
                            <p className="text-on-surface">
                                If your PDF is a <strong>scan</strong> or <strong>photo-based</strong> document, 500KB can be difficult without quality loss.
                                In that case, Rasterize is usually required, and you may need to split pages or reduce image resolution.
                            </p>
                            <p className="text-on-surface mt-3">
                                If readability is more important than a strict cap, use{" "}
                                <a href="/compress-pdf-to-1mb/" className="text-primary-700 underline hover:text-primary-900">
                                    Compress to 1MB
                                </a>{" "}
                                instead.
                            </p>
                        </div>
                    </div>
                </section>

                {/* DECISION TABLE */}
                <section id="decision" className="py-12 bg-[#091328]/50">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Compact vs Rasterize (when to use which)</h2>

                        <div className="overflow-x-auto bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <table className="min-w-full text-left">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-4 text-sm font-semibold text-on-surface-variant">Situation</th>
                                        <th className="p-4 text-sm font-semibold text-on-surface-variant">Recommended</th>
                                        <th className="p-4 text-sm font-semibold text-on-surface-variant">Why</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {decisionRows.map((r, i) => (
                                        <tr key={i} className="border-t">
                                            <td className="p-4 text-on-surface">{r.situation}</td>
                                            <td className="p-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary-50 text-primary-700">
                                                    {r.mode}
                                                </span>
                                            </td>
                                            <td className="p-4 text-on-surface-variant">{r.why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 grid md:grid-cols-3 gap-4">
                            {useCases.map((u, i) => (
                                <div key={i} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <h3 className="font-bold mb-2 flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-primary-600" />
                                        {u.title}
                                    </h3>
                                    <p className="text-on-surface-variant">{u.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TROUBLESHOOT */}
                <section id="troubleshoot" className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Troubleshooting (when you still can’t hit 500KB)</h2>

                        <div className="space-y-4">
                            {troubleshooting.map((t, i) => (
                                <div key={i} className="bg-[#091328]/50 border rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-on-surface font-headline mb-2">{t.title}</h3>
                                    <p className="text-on-surface-variant mb-3">{t.body}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {t.links.map((l, idx) => (
                                            <a
                                                key={idx}
                                                href={l.href}
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-700 font-semibold hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                                            >
                                                <LinkIcon className="h-4 w-4" />
                                                {l.text}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick answers */}
                        <div className="mt-10 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <h3 className="text-xl font-bold mb-4">Common questions (quick answers)</h3>
                            <div className="space-y-4 text-on-surface-variant">
                                <div>
                                    <h4 className="font-semibold text-on-surface font-headline">How do I reduce a PDF to 500KB?</h4>
                                    <p>
                                        Use Compact first. If it’s still too large, use Rasterize and reduce quality/DPI gradually. Scanned PDFs often require Rasterize.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-on-surface font-headline">How do I resize a PDF file to 500KB?</h4>
                                    <p>
                                        “Resize” usually means reducing image resolution and removing extra data. Rasterize rebuilds pages as compressed images to hit strict limits.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-on-surface font-headline">How do I keep quality while compressing?</h4>
                                    <p>
                                        For quality-first compression, use Compact mode and see{" "}
                                        <a href="/compress-pdf-without-losing-quality/" className="text-primary-700 underline hover:text-primary-900">
                                            compress without losing quality
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">FAQ</h2>

                        <div className="space-y-3">
                            {faqs.map((f, i) => (
                                <details key={i} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                    <summary className="cursor-pointer font-semibold text-on-surface font-headline">
                                        {f.q}
                                    </summary>
                                    <p className="mt-3 text-on-surface-variant">{f.a}</p>
                                </details>
                            ))}
                        </div>

                        <div className="mt-8 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <h3 className="text-xl font-bold mb-2">Related tools</h3>
                            <ul className="grid sm:grid-cols-2 gap-2 text-primary-700">
                                <li><a className="underline hover:text-primary-900" href="/compress-pdf/">Compress PDF (hub)</a></li>
                                <li><a className="underline hover:text-primary-900" href="/compress-pdf-to-1mb/">Compress PDF to 1MB</a></li>
                                <li><a className="underline hover:text-primary-900" href="/compress-pdf-for-portal-upload/">Compress for portal upload</a></li>
                                <li><a className="underline hover:text-primary-900" href="/compress-scanned-pdf-online/">Compress scanned PDF</a></li>
                                <li><a className="underline hover:text-primary-900" href="/split-pdf/">Split PDF</a></li>
                                <li><a className="underline hover:text-primary-900" href="/ocr/">OCR (make scans searchable)</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-on-surface-variant">
                    <p>TechRex Free PDF Editor — Compress PDF to 500KB. Free, no signup, no watermark.</p>
                </div>
            </footer>
        </div>
    );
}

export default { Page };
