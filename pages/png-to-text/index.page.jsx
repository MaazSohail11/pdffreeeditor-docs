// pages/png-to-text/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Image as ImageIcon,
    ScanText,
    CheckCircle,
    ShieldCheck,
    Copy,
    Link as LinkIcon,
    Monitor,
    FileImage,
    FileText,
    Languages,
    AlertTriangle,
    Download,
    Layers,
} from "lucide-react";

function PngToTextPage() {
    const supportedLanguages = ["English", "French", "Spanish", "Portuguese", "German", "Italian"];

    const benefits = [
        "Convert PNG to text online (OCR) — extract copyable text from PNG images instantly",
        "Best for screenshots: copy text from PNG screenshots (error messages, chats, PDFs, slides)",
        "Choose the correct language to improve OCR accuracy (accents + similar-looking characters)",
        "Works for UI screenshots, scanned page images, diagrams with labels, and PNG receipts",
        "Copy extracted text instantly and reuse it in Word, Google Docs, email, or chat",
        "No watermark on output",
    ];

    const useCases = [
        {
            title: "Screenshot PNG → text",
            text: "Most screenshots save as PNG. Extract text from error messages, emails, chat screenshots, PDFs, and slides.",
            icon: Monitor,
        },
        {
            title: "Diagrams + labels",
            text: "Pull labels from charts and diagrams saved as PNG (common in documentation and slide exports).",
            icon: Layers,
        },
        {
            title: "Scans exported as PNG",
            text: "OCR scanned pages saved as PNG so the text becomes selectable and reusable.",
            icon: ScanText,
        },
    ];

    const fixes = [
        {
            title: "OCR misses characters in my PNG screenshot",
            text: "Zoom in before taking the screenshot, crop to the text region, and avoid downscaled images.",
        },
        {
            title: "Accents / language characters are wrong",
            text: "Select the correct language before OCR (French/Spanish/Portuguese especially).",
        },
        {
            title: "Output is broken into weird lines",
            text: "Screenshots of text blocks work best. Crop tight to the paragraph and avoid mixed layouts (tables + columns) if possible.",
        },
    ];

    const faqs = [
        {
            q: "How do I convert PNG to text online?",
            a: "Upload your PNG image, select the correct language (recommended), run OCR, then copy the extracted text. This converts a PNG screenshot or image into editable text.",
        },
        {
            q: "Why is PNG great for screenshots?",
            a: "PNG is commonly used for screenshots because it preserves sharp text edges. That usually makes OCR cleaner than heavily compressed images.",
        },
        {
            q: "Do I need to choose a language for PNG OCR?",
            a: "It’s optional, but selecting the correct language usually improves OCR accuracy—especially for accented letters and language-specific characters.",
        },
        {
            q: "Can I OCR a scanned PDF instead of PNG?",
            a: "Yes—use OCR PDF or Make PDF Searchable for PDFs. This page is optimized for PNG images and screenshots.",
        },
        {
            q: "Can I convert multiple pages at once?",
            a: "If you have a multi-page PDF, use Split PDF to keep only the pages you need, then run OCR. For multiple images, combine them into a PDF first if you want one searchable file.",
        },
        {
            q: "Can I download the extracted text?",
            a: "After OCR, you can copy and paste text anywhere. For document workflows, OCR a PDF and then convert to Word/Excel if needed.",
        },
    ];

    return (
        <div className="font-sans font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
            <SiteNav />

            {/* Hero */}
            <section className="digital-obsidian text-on-surface py-14 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            PNG to Text (OCR)
                            <br />
                            <span className="text-primary-600">
                                Extract Text from PNG Screenshots • Copy Instantly
                            </span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-3">
                            Convert PNG to text online with OCR. Upload a PNG screenshot or image and get copyable text in seconds—no retyping.
                        </p>

                        <p className="text-base text-on-surface-variant mb-6">
                            Not a PNG? Use{" "}
                            <a href="/image-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                Image to Text
                            </a>{" "}
                            (all images) or{" "}
                            <a href="/jpg-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                JPG to Text
                            </a>
                            . For PDFs, use{" "}
                            <a href="/ocr-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                OCR PDF
                            </a>{" "}
                            /{" "}
                            <a href="/make-pdf-searchable/" className="text-primary-700 underline hover:text-primary-900">
                                Make PDF Searchable
                            </a>
                            .
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#upload"
                                className="bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all"
                            >
                                <ImageIcon className="h-5 w-5" />
                                Upload PNG
                            </a>

                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <ScanText className="h-5 w-5" />
                                How it works (3 steps)
                            </a>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                Why people use PNG → Text OCR
                            </h2>

                            <ul className="space-y-2 text-on-surface-variant">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                                {supportedLanguages.map((l) => (
                                    <span
                                        key={l}
                                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-on-surface-variant"
                                    >
                                        {l}
                                    </span>
                                ))}
                            </div>

                            <p className="text-xs text-outline mt-3 flex items-center gap-2 justify-center lg:justify-start">
                                <Languages className="h-4 w-4" />
                                Tip: selecting the correct language usually improves OCR accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Tool */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Upload a PNG and extract text</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-[#091328]/50 border rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <Copy className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-on-surface font-headline mb-1">Best results (screenshots win)</p>
                                        <p className="text-sm text-on-surface-variant">
                                            PNG screenshots often OCR better than blurry photos. Crop to text and choose the correct language for accents.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-xs text-outline">
                                Have a multi-page PDF and you only need a few pages? Split it first using{" "}
                                <a href="/split-pdf/" className="underline hover:text-on-surface-variant">
                                    Split PDF
                                </a>
                                .
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* Use cases */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Extract text from PNG screenshots (the most common use case)
                        </h2>
                        <p className="text-on-surface-variant mb-5">
                            PNG is the default screenshot format on many devices. OCR helps when the text is visible
                            but not selectable or copyable.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {useCases.map((u) => (
                                <div key={u.title} className="bg-[#091328]/50 border rounded-xl p-5">
                                    <div className="flex items-start gap-3">
                                        <u.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-2">{u.title}</h3>
                                            <p className="text-on-surface-variant">{u.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-on-surface-variant mt-6">
                            If you want a searchable document (not just copied text), convert images to PDF using{" "}
                            <a href="/image-to-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                Image to PDF
                            </a>{" "}
                            then run{" "}
                            <a href="/ocr-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                OCR PDF
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* How-to */}
                <section id="how-to" className="py-12 bg-[#091328]/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">
                            How to convert PNG to text online (3 steps)
                        </h2>

                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-upload">
                                <h4 className="font-semibold">1) Upload your PNG image</h4>
                                <p className="text-on-surface-variant">
                                    Upload a PNG screenshot or image that contains text. Crop tight to the text region for best results.
                                </p>
                            </li>

                            <li id="step-language">
                                <h4 className="font-semibold">2) Select the correct language (recommended)</h4>
                                <p className="text-on-surface-variant">
                                    Selecting the right language improves OCR accuracy—especially for accents and language-specific characters.
                                </p>
                            </li>

                            <li id="step-copy">
                                <h4 className="font-semibold">3) Run OCR, then copy/paste the extracted text</h4>
                                <p className="text-on-surface-variant">
                                    Copy the text into Word/Docs/email. If your source is a PDF screenshot and you want a searchable PDF, use{" "}
                                    <a href="/make-pdf-searchable/" className="text-primary-700 underline hover:text-primary-900">
                                        Make PDF Searchable
                                    </a>
                                    .
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Troubleshooting */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Fix common PNG OCR problems (quick wins)
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {fixes.map((f) => (
                                <div key={f.title} className="bg-[#091328]/50 border rounded-xl p-5">
                                    <h3 className="font-semibold text-on-surface font-headline mb-2">{f.title}</h3>
                                    <p className="text-on-surface-variant">{f.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">No fluff — accuracy depends on the image</h3>
                                    <p className="text-on-surface-variant">
                                        Screenshots usually OCR best. If your PNG is blurry, downscaled, or low-contrast, expect OCR errors—verify important text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal linking */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Turn PNG OCR into a full workflow
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <div className="flex items-start gap-3">
                                    <FileImage className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Many PNGs → one PDF</h3>
                                        <p className="text-on-surface-variant">
                                            Combine images into a PDF using{" "}
                                            <a href="/image-to-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                                Image to PDF
                                            </a>{" "}
                                            then OCR using{" "}
                                            <a href="/ocr-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                                OCR PDF
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <div className="flex items-start gap-3">
                                    <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Need text from a PDF?</h3>
                                        <p className="text-on-surface-variant">
                                            Use{" "}
                                            <a href="/pdf-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                                PDF to Text
                                            </a>{" "}
                                            or{" "}
                                            <a href="/make-pdf-searchable/" className="text-primary-700 underline hover:text-primary-900">
                                                Make PDF Searchable
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <div className="flex items-start gap-3">
                                    <Download className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Want editable documents?</h3>
                                        <p className="text-on-surface-variant">
                                            OCR first, then convert using{" "}
                                            <a href="/pdf-to-word/" className="text-primary-700 underline hover:text-primary-900">
                                                PDF to Word
                                            </a>{" "}
                                            or{" "}
                                            <a href="/pdf-to-excel/" className="text-primary-700 underline hover:text-primary-900">
                                                PDF to Excel
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <div className="flex items-start gap-3">
                                    <ImageIcon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">All image formats</h3>
                                        <p className="text-on-surface-variant">
                                            Use{" "}
                                            <a href="/image-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                                Image to Text
                                            </a>{" "}
                                            for JPG/PNG and other images.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
                        <p className="text-on-surface-variant mb-4">
                            OCR requires processing the image to recognize text. If you’re testing, use sample screenshots or redact sensitive parts.
                        </p>

                        <div className="bg-[#091328]/50 border rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">Privacy checklist</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-on-surface-variant">
                                        <li>Avoid uploading highly sensitive images.</li>
                                        <li>Use trusted networks and keep your browser updated.</li>
                                        <li>
                                            Read{" "}
                                            <a href="/privacy/" className="text-primary-700 underline hover:text-primary-900">
                                                Privacy
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
                        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 p-4 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.1)] border">
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
                            <LinkIcon className="h-5 w-5" />
                            Related tools
                        </h2>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/image-to-text/" className="underline hover:text-primary-900">Image to Text</a></li>
                            <li><a href="/jpg-to-text/" className="underline hover:text-primary-900">JPG to Text</a></li>
                            <li><a href="/ocr-pdf/" className="underline hover:text-primary-900">OCR PDF</a></li>
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-primary-900">Make PDF searchable</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-primary-900">PDF to Text</a></li>
                            <li><a href="/image-to-pdf/" className="underline hover:text-primary-900">Image to PDF</a></li>
                            <li><a href="/pdf-to-image/" className="underline hover:text-primary-900">PDF to Image</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF</a></li>
                            <li><a href="/tools/" className="underline hover:text-primary-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-primary mb-2">
                            Convert PNG to text now
                        </h2>
                        <p className="text-primary-100 mb-6">
                            Upload a PNG screenshot, choose language, run OCR, and copy the text instantly.
                        </p>
                        <a
                            href="#upload"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ImageIcon className="h-5 w-5" />
                            Upload PNG
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

export default { Page: PngToTextPage };
