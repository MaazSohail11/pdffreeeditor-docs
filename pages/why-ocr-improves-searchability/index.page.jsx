// pages/why-ocr-improves-searchability/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Search,
    Layers,
    ScanText,
    Copy,
    CheckCircle,
    AlertTriangle,
    ArrowRight,
    FileText,
    Link as LinkIcon,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

function WhyOCRImprovesSearchability() {
    const quickAnswer = [
        "OCR turns a scanned (image-only) PDF into a searchable PDF by adding an invisible text layer under the page images.",
        "That text layer is what enables Ctrl+F, text selection, copy/paste, and better accessibility.",
        "If your file is page-capped, split it first and OCR only the pages you need.",
    ];

    const symptoms = [
        "Ctrl+F finds nothing even though the word is visible",
        "You can’t select a single word (the page behaves like a picture)",
        "Copy/paste gives blank output or gibberish",
        "Screen readers can’t read the document properly",
    ];

    const tableRows = [
        {
            left: "Scanned PDF (image-only)",
            mid: "Looks normal, but it’s just images",
            right: "Search/copy usually fails",
        },
        {
            left: "Text PDF (native)",
            mid: "Contains real selectable text",
            right: "Search/copy works",
        },
        {
            left: "OCR PDF (image + text layer)",
            mid: "Original scan + invisible text layer (sandwich)",
            right: "Search/copy works much better",
        },
    ];

    const howItWorks = [
        {
            id: "step-1",
            title: "1) Detect text in page images",
            text:
                "OCR analyzes the pixels of each scanned page and identifies characters and words.",
        },
        {
            id: "step-2",
            title: "2) Create a hidden searchable text layer",
            text:
                "The recognized words are placed behind the scanned image. The PDF looks the same, but the text becomes searchable/selectable.",
        },
        {
            id: "step-3",
            title: "3) Save as a searchable PDF",
            text:
                "You download a PDF that behaves like a normal document: Ctrl+F works, copy/paste works, and users can extract text.",
        },
    ];

    const bestNext = [
        {
            title: "Make scanned PDF searchable",
            desc: "Add an invisible text layer so Ctrl+F and copy work.",
            href: "/make-pdf-searchable/",
            icon: ScanText,
        },
        {
            title: "OCR PDF (general tool)",
            desc: "Run OCR and download results (good for quick conversion).",
            href: "/ocr-pdf/",
            icon: Layers,
        },
        {
            title: "Extract text only (no PDF output needed)",
            desc: "If you just need the words, extract them fast.",
            href: "/pdf-to-text/",
            icon: FileText,
        },
    ];

    const faqs = [
        {
            q: "What is OCR in a PDF?",
            a: "OCR (Optical Character Recognition) reads text inside scanned images and converts it into real, machine-readable text. In PDFs, OCR typically adds an invisible text layer under the scanned page images so the file becomes searchable and selectable.",
        },
        {
            q: "Does OCR change how my PDF looks?",
            a: "Usually no. Most OCR workflows keep the scanned page image as-is and place searchable text behind it (often called a “sandwich” PDF).",
        },
        {
            q: "Why does OCR make Ctrl+F work?",
            a: "Ctrl+F can only search real text. A scanned PDF often contains only image data, so there’s nothing to search until OCR creates a text layer.",
        },
        {
            q: "Is OCR the same as converting PDF to Word?",
            a: "Not exactly. OCR is the recognition step. Converting to Word uses OCR results to create an editable Word file. If you need editing, use Scanned PDF to Word (OCR).",
        },
        {
            q: "My PDF is long and there’s a page limit. What should I do?",
            a: "Split the PDF into smaller parts (keep only the pages you need), then run OCR on that smaller file.",
        },
    ];

    return (
        <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>
            <SiteNav />

            {/* HERO */}
            <section className="digital-obsidian text-on-surface py-14 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Why OCR Improves PDF Searchability
                            <br />
                            <span className="text-primary-600">Add a text layer so Ctrl+F works</span>
                        </h1>

                        {/* Snippet-ready definition */}
                        <p className="text-lg text-on-surface-variant mb-4">
                            <strong>OCR in a PDF</strong> means adding a{" "}
                            <strong>searchable text layer</strong> underneath scanned page
                            images. Your PDF looks the same, but becomes{" "}
                            <strong>searchable, selectable, and easier to copy from</strong>.
                        </p>

                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] mb-6">
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-primary-600" />
                                TL;DR (the real answer)
                            </h2>
                            <ul className="space-y-2 text-on-surface-variant">
                                {quickAnswer.map((t, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="/make-pdf-searchable/"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ScanText className="h-5 w-5" />
                                Make PDF searchable
                            </a>

                            <a
                                href="#how"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <Search className="h-5 w-5" />
                                How OCR works in PDFs
                            </a>
                        </div>

                        <p className="text-sm text-on-surface-variant mt-5">
                            Related:{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/is-my-pdf-scanned/">
                                Is my PDF scanned?
                            </a>{" "}
                            •{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/cant-search-text-in-pdf/">
                                Ctrl+F doesn’t work in PDF
                            </a>{" "}
                            •{" "}
                            <a className="text-primary-700 underline hover:text-primary-900" href="/searchable-vs-non-searchable-pdf/">
                                Searchable vs non-searchable PDF
                            </a>
                            .
                        </p>
                    </div>

                    {/* TOOL EMBED (conversion boost) */}
                    <aside className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Try OCR now</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-[#091328]/50 border rounded-xl p-4">
                                <p className="font-semibold text-on-surface font-headline mb-1">Page cap or long file?</p>
                                <p className="text-sm text-on-surface-variant">
                                    Split first, OCR only what you need:{" "}
                                    <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        Split PDF
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="mt-3 text-xs text-outline">
                                OCR requires uploading the file for processing. Review{" "}
                                <a href="/privacy/" className="underline hover:text-on-surface-variant">
                                    Privacy Policy
                                </a>
                                .
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* SYMPTOMS */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Signs your PDF needs OCR</h2>
                        <p className="text-on-surface-variant mb-6">
                            These problems happen when your “text” is actually just an image.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3 text-on-surface-variant">
                            {symptoms.map((s) => (
                                <li key={s} className="flex items-start gap-3 bg-[#091328]/50 border rounded-xl p-4">
                                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* TABLE */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4">Scanned vs searchable vs OCR PDF (what changes)</h2>
                        <div className="overflow-x-auto bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <table className="min-w-full text-left">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-4 font-semibold">Type</th>
                                        <th className="p-4 font-semibold">What it contains</th>
                                        <th className="p-4 font-semibold">Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows.map((r) => (
                                        <tr key={r.left} className="border-t">
                                            <td className="p-4 font-semibold">{r.left}</td>
                                            <td className="p-4 text-on-surface-variant">{r.mid}</td>
                                            <td className="p-4 text-on-surface-variant">{r.right}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-sm text-on-surface-variant mt-4">
                            OCR PDFs often keep the original scanned image and add an invisible text layer underneath (“sandwich PDF”).
                        </p>
                    </div>
                </section>

                {/* HOW */}
                <section id="how" className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How OCR works in PDFs (simple explanation)</h2>

                        <ol className="space-y-4">
                            {howItWorks.map((s) => (
                                <li key={s.id} id={s.id} className="bg-[#091328]/50 border rounded-xl p-5">
                                    <div className="flex items-start gap-3">
                                        <Layers className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-1">{s.title}</h3>
                                            <p className="text-on-surface-variant">{s.text}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-6 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-primary-600" />
                                What OCR improves (fast checklist)
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 text-on-surface-variant">
                                {[
                                    "Ctrl+F / Find works across pages",
                                    "Text selection becomes possible",
                                    "Copy/paste becomes usable",
                                    "Better accessibility for screen readers",
                                    "Faster document review (search names, numbers, clauses)",
                                ].map((x) => (
                                    <li key={x} className="flex items-start gap-3 bg-[#091328]/50 border rounded-xl p-4">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{x}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* NEXT */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Pick the best next step</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {bestNext.map((b) => (
                                <a
                                    key={b.href}
                                    href={b.href}
                                    className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition"
                                >
                                    <div className="flex items-start gap-3">
                                        <b.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-1">{b.title}</h3>
                                            <p className="text-on-surface-variant mb-3">{b.desc}</p>
                                            <span className="text-primary-700 font-semibold inline-flex items-center gap-2">
                                                Open <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-6 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                <Copy className="h-5 w-5 text-primary-600" />
                                Want editing (not just search)?
                            </h3>
                            <p className="text-on-surface-variant">
                                OCR is the recognition step. For editable output, use:{" "}
                                <a href="/pdf-to-word-ocr/" className="text-primary-700 underline hover:text-primary-900">
                                    Scanned PDF to Word (OCR)
                                </a>{" "}
                                or{" "}
                                <a href="/pdf-to-excel-ocr/" className="text-primary-700 underline hover:text-primary-900">
                                    Scanned PDF to Excel (OCR)
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-[#091328]/50 p-4 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.1)] border">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <p className="mt-2 text-on-surface-variant">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related pages
                        </h2>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-primary-900">Make PDF searchable</a></li>
                            <li><a href="/ocr-pdf/" className="underline hover:text-primary-900">OCR PDF</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-primary-900">PDF to Text</a></li>
                            <li><a href="/is-my-pdf-scanned/" className="underline hover:text-primary-900">Is my PDF scanned?</a></li>
                            <li><a href="/cant-search-text-in-pdf/" className="underline hover:text-primary-900">Ctrl+F doesn’t work in PDF</a></li>
                            <li><a href="/searchable-vs-non-searchable-pdf/" className="underline hover:text-primary-900">Searchable vs non-searchable PDF</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF</a></li>
                            <li><a href="/compress-pdf/" className="underline hover:text-primary-900">Compress PDF</a></li>
                            <li><a href="/tools/" className="underline hover:text-primary-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-primary mb-2">
                            Turn scanned PDFs into searchable PDFs
                        </h2>
                        <p className="text-primary-100 mb-6">
                            Add a text layer so searching and copying works — fast.
                        </p>
                        <a
                            href="/make-pdf-searchable/"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ScanText className="h-5 w-5" />
                            Make PDF searchable
                        </a>
                    </div>
                </section>


                {/* SMART LINKING MAP */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* SIBLINGS */}
                            <div>
                                <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Related Tools</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/ocr-german/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            OCR German
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ocr-spanish/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            OCR Spanish
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/image-to-text/" className="text-primary-600 hover:text-primary-800 hover:underline flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none rounded-full"></span>
                                            Image to Text
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* NEXT STEPS */}
                            <div>
                                <h3 className="text-lg font-bold text-on-surface font-headline mb-3">Next Steps</h3>
                                <ul className="space-y-2">

                                    <li>
                                        <a href="/pdf-to-word-ocr/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Convert to Word</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/edit-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-primary-200 hover:bg-primary-50 transition">
                                            <span className="font-semibold text-on-surface-variant group-hover:text-primary-700">Edit Text</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PARENT */}
                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                            <a href="/ocr/" className="text-sm font-semibold text-outline hover:text-primary-600 uppercase tracking-wide">
                                View OCR Home
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
                <p>© {new Date().getFullYear()} PDF Free Editor by TechRex. All rights reserved.</p>
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

export default { Page: WhyOCRImprovesSearchability };
