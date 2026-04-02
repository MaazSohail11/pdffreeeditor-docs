// pages/screenshot-to-text/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Monitor,
    ScanText,
    CheckCircle,
    Copy,
    Crop,
    Languages,
    ShieldCheck,
    AlertTriangle,
    Bug,
    MessageSquare,
    Code2,
    FileText,
    Link as LinkIcon,
    ArrowRight,
} from "lucide-react";

function ScreenshotToTextPage() {
    const supportedLanguages = ["English", "French", "Spanish", "Portuguese", "German", "Italian"];

    const benefits = [
        "Extract text from a screenshot online (OCR) — copy text you can’t select",
        "Perfect for error messages, chats, PDFs, slides, dashboards, and code snippets",
        "Crop to the exact area you need for cleaner OCR and fewer line-break issues",
        "Choose the correct language to improve OCR accuracy (especially accents)",
        "Copy extracted text instantly into tickets, emails, docs, or search",
        "Free and fast (no watermark on output)",
    ];

    const useCases = [
        {
            title: "Copy error messages & logs",
            text: "Turn a screenshot of an error message into real text for support tickets, GitHub issues, and search.",
            icon: Bug,
        },
        {
            title: "Chats, emails, and messages",
            text: "Extract text from WhatsApp/Telegram/Slack/email screenshots when copy is disabled or messy.",
            icon: MessageSquare,
        },
        {
            title: "Code snippets from screenshots",
            text: "Grab code from a screenshot and paste it into your editor (then quickly fix formatting).",
            icon: Code2,
        },
    ];

    const tips = [
        {
            title: "Crop tight to the text",
            text: "Crop out icons, sidebars, and extra UI. Less noise = better OCR.",
            icon: Crop,
        },
        {
            title: "Use high-resolution screenshots",
            text: "Zoom in before taking the screenshot (especially on mobile). Tiny text = OCR mistakes.",
            icon: Monitor,
        },
        {
            title: "Pick the right language",
            text: "Selecting the correct language typically improves OCR accuracy, especially for accented characters.",
            icon: Languages,
        },
    ];

    const fixes = [
        {
            title: "OCR output has wrong characters (0/O, 1/I, accents missing)",
            text: "Retake the screenshot at higher zoom and select the correct language before OCR.",
        },
        {
            title: "The text breaks into weird lines",
            text: "Crop to a single text block. Mixed layouts (tables + multiple columns) often cause messy line breaks.",
        },
        {
            title: "Dark mode screenshot OCR looks worse",
            text: "If possible, switch to light mode or increase zoom. Low-contrast UI can reduce accuracy.",
        },
    ];

    const faqs = [
        {
            q: "How do I extract text from a screenshot?",
            a: "Upload the screenshot, crop to the text area, choose the correct language (recommended), run OCR, then copy the extracted text.",
        },
        {
            q: "Is screenshot-to-text the same as PNG to text?",
            a: "Most screenshots are PNG, so yes. This page is optimized for screenshot intent. If you specifically have a PNG file, you can also use PNG to Text.",
        },
        {
            q: "Does it work on iPhone and Android screenshots?",
            a: "Yes. Upload the screenshot image and run OCR. For best results, use a sharp screenshot and crop to the text.",
        },
        {
            q: "Why not just use iPhone Live Text / Windows Snipping Tool?",
            a: "Those are great when available. This tool is useful when built-in options aren’t accessible, you want a consistent web workflow, or you need language selection and a simple copy flow in one place.",
        },
        {
            q: "I actually have the PDF—should I screenshot it?",
            a: "Usually no. If you have the PDF file, use OCR PDF or Make PDF Searchable for cleaner results.",
        },
        {
            q: "What if my PDF is too long (page limit)?",
            a: "Use Split PDF to keep only the pages you need, then run OCR on the smaller PDF.",
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
                            Screenshot to Text (OCR)
                            <br />
                            <span className="text-primary-600">Extract Text from Screenshot Images • Copy Instantly</span>
                        </h1>

                        <p className="text-lg text-on-surface-variant mb-3">
                            Turn a screenshot into real, copyable text. Upload a screenshot of an error message, chat, PDF,
                            slide, or website and extract the text with OCR — no retyping.
                        </p>

                        <p className="text-base text-on-surface-variant mb-6">
                            Most screenshots are PNG. If you specifically have a PNG file, use{" "}
                            <a href="/png-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                PNG to Text
                            </a>
                            . For all images use{" "}
                            <a href="/image-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                Image to Text
                            </a>
                            . If you have the original PDF, use{" "}
                            <a href="/ocr-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                OCR PDF
                            </a>{" "}
                            or{" "}
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
                                <ScanText className="h-5 w-5" />
                                Upload Screenshot
                            </a>

                            <a
                                href="#how-to"
                                className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            >
                                <Copy className="h-5 w-5" />
                                How it works (3 steps)
                            </a>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                Why this “extract text from screenshot” tool works
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

                    {/* TOOL */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-primary-600" />
                                <p className="font-semibold">Upload your screenshot and extract text</p>
                            </div>

                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-[#091328]/50 border rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <Crop className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-on-surface font-headline mb-1">Best results in 10 seconds</p>
                                        <p className="text-sm text-on-surface-variant">
                                            Crop to the text region + select the correct language. If the text is tiny, zoom in and take a higher-resolution screenshot.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-xs text-outline">
                                If you have a long PDF and there’s a page cap, use{" "}
                                <a href="/split-pdf/" className="underline hover:text-on-surface-variant">
                                    Split PDF
                                </a>{" "}
                                to keep only the pages you need.
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* USE CASES */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Popular screenshot → text use cases</h2>
                        <p className="text-on-surface-variant mb-5">
                            People usually screenshot text when copy is blocked, broken, or too slow. OCR turns that screenshot back into editable text.
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
                            If your screenshot came from a PDF and you have the actual PDF file, OCR the PDF directly for cleaner output:
                            {" "}
                            <a href="/ocr-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                OCR PDF
                            </a>{" "}
                            or{" "}
                            <a href="/make-pdf-searchable/" className="text-primary-700 underline hover:text-primary-900">
                                Make PDF Searchable
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* HOW-TO */}
                <section id="how-to" className="py-12 bg-[#091328]/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to extract text from a screenshot (3 steps)</h2>

                        <ol className="space-y-6 list-decimal ml-6 text-on-surface-variant">
                            <li id="step-upload">
                                <h4 className="font-semibold">1) Upload your screenshot</h4>
                                <p className="text-on-surface-variant">
                                    Upload a screenshot image that contains text (error message, chat, slide, website, etc.).
                                </p>
                            </li>

                            <li id="step-crop">
                                <h4 className="font-semibold">2) Crop to the text area</h4>
                                <p className="text-on-surface-variant">
                                    Crop out sidebars and icons so OCR focuses only on the words you need.
                                </p>
                            </li>

                            <li id="step-language">
                                <h4 className="font-semibold">3) Select language, run OCR, and copy the text</h4>
                                <p className="text-on-surface-variant">
                                    Choose the correct language (recommended), run OCR, then copy/paste the extracted text anywhere.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* TIPS */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Get better screenshot OCR accuracy (quick wins)</h2>
                        <p className="text-on-surface-variant mb-5">
                            Screenshot OCR usually fails for one reason: the text is too small or the screenshot includes too much UI. Fix that first.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {tips.map((t) => (
                                <div key={t.title} className="bg-[#091328]/50 border rounded-xl p-5">
                                    <div className="flex items-start gap-3">
                                        <t.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-on-surface font-headline mb-2">{t.title}</h3>
                                            <p className="text-on-surface-variant">{t.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">No hype: OCR depends on image quality</h3>
                                    <p className="text-on-surface-variant">
                                        If your screenshot is blurry, low-resolution, or super low-contrast, expect OCR mistakes. For important text, always proofread.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TROUBLESHOOTING */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Fix common “copy text from screenshot” problems</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {fixes.map((f) => (
                                <div key={f.title} className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-5">
                                    <h3 className="font-semibold text-on-surface font-headline mb-2">{f.title}</h3>
                                    <p className="text-on-surface-variant">{f.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DEVICE ALTERNATIVES (authority section) */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Built-in ways to copy text from screenshots (and when to use OCR)</h2>
                        <p className="text-on-surface-variant mb-5">
                            Some devices can extract text directly. This is useful context and also helps users who search “copy text from screenshot iPhone/Windows”.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-[#091328]/50 border rounded-xl p-6">
                                <h3 className="font-semibold text-on-surface font-headline mb-2">iPhone / iPad</h3>
                                <p className="text-on-surface-variant">
                                    Apple’s Live Text can copy text from photos/screenshots when available. If it fails or you want a web workflow, use OCR here.
                                </p>
                            </div>

                            <div className="bg-[#091328]/50 border rounded-xl p-6">
                                <h3 className="font-semibold text-on-surface font-headline mb-2">Windows 11</h3>
                                <p className="text-on-surface-variant">
                                    Snipping Tool has “Text actions” for text extraction in some versions. If you need a consistent web tool, use OCR here.
                                </p>
                            </div>

                            <div className="bg-[#091328]/50 border rounded-xl p-6">
                                <h3 className="font-semibold text-on-surface font-headline mb-2">Android / Chrome</h3>
                                <p className="text-on-surface-variant">
                                    Google Lens can copy text from images/screenshots. OCR here helps when you want a quick upload + language selection flow.
                                </p>
                            </div>
                        </div>

                        <p className="text-on-surface-variant mt-4 text-sm">
                            If you have the original document (PDF/image), OCR the source file instead of screenshotting for better results.
                        </p>
                    </div>
                </section>

                {/* INTERNAL LINKS */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Related OCR workflows</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <h3 className="font-semibold mb-2">PNG screenshots → text</h3>
                                <p className="text-on-surface-variant">
                                    Most screenshots are PNG. Try{" "}
                                    <a href="/png-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                        PNG to Text
                                    </a>{" "}
                                    for a format-focused page.
                                </p>
                                <a
                                    href="/png-to-text/"
                                    className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-primary-700 hover:text-primary-900"
                                >
                                    Open PNG to Text <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>

                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <h3 className="font-semibold mb-2">Have the PDF? OCR the PDF instead</h3>
                                <p className="text-on-surface-variant">
                                    For cleaner output use{" "}
                                    <a href="/ocr-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        OCR PDF
                                    </a>{" "}
                                    or{" "}
                                    <a href="/make-pdf-searchable/" className="text-primary-700 underline hover:text-primary-900">
                                        Make PDF Searchable
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <h3 className="font-semibold mb-2">Need just a few pages (page cap)</h3>
                                <p className="text-on-surface-variant">
                                    If your PDF is long, use{" "}
                                    <a href="/split-pdf/" className="text-primary-700 underline hover:text-primary-900">
                                        Split PDF
                                    </a>{" "}
                                    first, then OCR the smaller file.
                                </p>
                            </div>

                            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                <h3 className="font-semibold mb-2">All images (JPG/PNG)</h3>
                                <p className="text-on-surface-variant">
                                    Use{" "}
                                    <a href="/image-to-text/" className="text-primary-700 underline hover:text-primary-900">
                                        Image to Text
                                    </a>{" "}
                                    for universal image OCR.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRIVACY */}
                <section className="py-12 bg-[#091328]/50 backdrop-blur-xl border border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
                        <p className="text-on-surface-variant mb-4">
                            OCR requires processing images to recognize text. If you’re testing, use sample screenshots or redact sensitive parts.
                        </p>

                        <div className="bg-[#091328]/50 border rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-on-surface font-headline mb-1">Privacy checklist</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-on-surface-variant">
                                        <li>Avoid uploading highly sensitive screenshots when possible.</li>
                                        <li>Crop to only the region you need.</li>
                                        <li>
                                            Review{" "}
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

                {/* RELATED TOOLS LIST */}
                <section className="py-12 bg-[#091328]/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related tools
                        </h2>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-primary-700">
                            <li><a href="/png-to-text/" className="underline hover:text-primary-900">PNG to Text</a></li>
                            <li><a href="/jpg-to-text/" className="underline hover:text-primary-900">JPG to Text</a></li>
                            <li><a href="/image-to-text/" className="underline hover:text-primary-900">Image to Text</a></li>
                            <li><a href="/ocr-pdf/" className="underline hover:text-primary-900">OCR PDF</a></li>
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-primary-900">Make PDF searchable</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-primary-900">PDF to Text</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-primary-900">Split PDF</a></li>
                            <li><a href="/tools/" className="underline hover:text-primary-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-on-primary mb-2">Extract text from a screenshot now</h2>
                        <p className="text-primary-100 mb-6">
                            Upload a screenshot, crop to the text, choose language, run OCR, and copy instantly.
                        </p>
                        <a
                            href="#upload"
                            className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-primary-600 px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ScanText className="h-5 w-5" />
                            Upload Screenshot
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

export default { Page: ScreenshotToTextPage };
