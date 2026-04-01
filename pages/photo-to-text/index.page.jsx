// pages/photo-to-text/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Camera,
    ScanText,
    CheckCircle,
    ShieldCheck,
    Copy,
    Link as LinkIcon,
    Languages,
    AlertTriangle,
    Sun,
    Focus,
    Crop,
    FileText,
    FileImage,
    Layers,
    ArrowRight,
} from "lucide-react";

function PhotoToTextPage() {
    const supportedLanguages = ["English", "French", "Spanish", "Portuguese", "German", "Italian"];

    const benefits = [
        "Convert photo to text online using OCR (scan photo text and copy it instantly)",
        "Works best with phone camera photos of documents, notes, receipts, signs, books, and forms",
        "Choose a language for better accuracy (especially accents + language-specific characters)",
        "Copy extracted text into Word, Google Docs, email, or chat—no retyping",
        "Great for students, business, admin work, and quick translation drafts",
        "No watermark on output",
    ];

    const useCases = [
        {
            title: "Notes & study pages",
            text: "Scan handwritten-like notes or printed worksheets and turn them into editable text (accuracy varies by handwriting).",
            icon: Layers,
        },
        {
            title: "Receipts, bills, and invoices",
            text: "Extract key lines from a photo of a receipt/bill for expense tracking and quick reuse.",
            icon: FileText,
        },
        {
            title: "Signs, menus, labels",
            text: "Copy text from a photo of a sign/menu/label—useful when you need the wording or want to translate it.",
            icon: Camera,
        },
    ];

    const photoTips = [
        {
            title: "Good lighting (avoid shadows)",
            text: "Use bright, even light. Shadows and glare reduce OCR accuracy—move the page or your angle to remove reflections.",
            icon: Sun,
        },
        {
            title: "Focus + keep the phone steady",
            text: "Tap to focus on the text. Hold steady (or rest your elbows). Blurry letters are the #1 reason OCR fails.",
            icon: Focus,
        },
        {
            title: "Crop tight to the text area",
            text: "Crop extra background. Less noise = better recognition and cleaner formatting.",
            icon: Crop,
        },
    ];

    const fixes = [
        {
            title: "OCR output has wrong characters (0/O, 1/I, accents missing)",
            text: "Select the correct language before running OCR and retake the photo with sharper focus and better light.",
        },
        {
            title: "Lines break weirdly / spacing looks messy",
            text: "Crop tighter to a single text block. Mixed layouts (tables + columns) often produce messy line breaks.",
        },
        {
            title: "It won’t pick up faint text",
            text: "Increase contrast: retake in better light, avoid glare, and move closer so text is larger in the photo.",
        },
    ];

    const faqs = [
        {
            q: "How do I convert a photo to text online?",
            a: "Upload a clear photo, choose the correct language (recommended), run OCR, then copy the extracted text. This turns a phone camera photo into editable text.",
        },
        {
            q: "Do I need to select a language?",
            a: "It’s optional, but selecting the correct language usually improves OCR accuracy—especially for accented letters and language-specific characters.",
        },
        {
            q: "What kind of photos work best for OCR?",
            a: "Sharp, well-lit photos where the text is large and straight. Avoid blur, shadows, glare, extreme angles, and tiny text.",
        },
        {
            q: "Does this work for handwriting?",
            a: "Sometimes. OCR is best on printed text. Neat handwriting can work, but results vary. Always proofread important text.",
        },
        {
            q: "I have a scanned PDF, not a photo—what should I use?",
            a: "Use OCR PDF or Make PDF Searchable for PDFs. This page is optimized for photos and images from a camera.",
        },
        {
            q: "My PDF is too long—what should I do?",
            a: "If there’s a page limit, use Split PDF to keep only the pages you need, then run OCR on those pages.",
        },
    ];

    return (
        <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
            <SiteNav />

            {/* Hero */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-14 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Photo to Text (OCR)
                            <br />
                            <span className="text-blue-600">
                                Scan Photo Text from Your Phone • Copy Instantly
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-3">
                            Turn a phone photo into editable text. Upload a clear picture of a document, note,
                            receipt, or sign and extract the text using OCR—no retyping.
                        </p>

                        <p className="text-base text-gray-600 mb-6">
                            For screenshots use{" "}
                            <a href="/png-to-text/" className="text-blue-700 underline hover:text-blue-900">
                                PNG to Text
                            </a>{" "}
                            (best for screenshots). For PDFs use{" "}
                            <a href="/ocr-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                OCR PDF
                            </a>{" "}
                            or{" "}
                            <a href="/make-pdf-searchable/" className="text-blue-700 underline hover:text-blue-900">
                                Make PDF Searchable
                            </a>
                            .
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <a
                                href="#upload"
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
                            >
                                <Camera className="h-5 w-5" />
                                Upload Photo
                            </a>

                            <a
                                href="#how-to"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                            >
                                <ScanText className="h-5 w-5" />
                                How it works (3 steps)
                            </a>
                        </div>

                        {/* Benefits */}
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                Why people use Photo → Text OCR
                            </h2>

                            <ul className="space-y-2 text-gray-700">
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
                                        className="text-xs font-semibold px-3 py-1 rounded-full bg-white border text-gray-700"
                                    >
                                        {l}
                                    </span>
                                ))}
                            </div>

                            <p className="text-xs text-gray-500 mt-3 flex items-center gap-2 justify-center lg:justify-start">
                                <Languages className="h-4 w-4" />
                                Tip: selecting the correct language usually improves OCR accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Tool */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-white border rounded-2xl shadow p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-blue-600" />
                                <p className="font-semibold">Upload a photo and extract text</p>
                            </div>

                            <OCRTool minimal={true} />

                            {/* Quick tips */}
                            <div className="mt-4 bg-gray-50 border rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <Copy className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Fastest way to get clean text</p>
                                        <p className="text-sm text-gray-600">
                                            Use good light, keep the camera steady, and crop to the text area. Then choose the correct language.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-xs text-gray-500">
                                If your PDF has a page limit, split it first using{" "}
                                <a href="/split-pdf/" className="underline hover:text-gray-700">
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
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Common reasons people scan photo text</h2>
                        <p className="text-gray-700 mb-5">
                            “Photo to text” searches usually mean: you can see the text, but you can’t copy it. OCR fixes that.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {useCases.map((u) => (
                                <div key={u.title} className="bg-gray-50 border rounded-xl p-5">
                                    <div className="flex items-start gap-3">
                                        <u.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">{u.title}</h3>
                                            <p className="text-gray-600">{u.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-700 mt-6">
                            Need a searchable document (not just copied text)? Convert photos to PDF using{" "}
                            <a href="/image-to-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                Image to PDF
                            </a>{" "}
                            then run{" "}
                            <a href="/ocr-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                OCR PDF
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* How-to */}
                <section id="how-to" className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to scan photo text (3 steps)</h2>

                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h4 className="font-semibold">1) Upload your photo</h4>
                                <p className="text-gray-600">
                                    Upload a clear photo from your phone camera. If possible, crop to the text area first.
                                </p>
                            </li>

                            <li id="step-language">
                                <h4 className="font-semibold">2) Select the correct language (recommended)</h4>
                                <p className="text-gray-600">
                                    Choosing the right language improves OCR accuracy—especially for accents and special characters.
                                </p>
                            </li>

                            <li id="step-copy">
                                <h4 className="font-semibold">3) Run OCR and copy the extracted text</h4>
                                <p className="text-gray-600">
                                    Copy the result into Word/Docs/email. For PDFs, use{" "}
                                    <a href="/pdf-to-text/" className="text-blue-700 underline hover:text-blue-900">
                                        PDF to Text
                                    </a>{" "}
                                    or{" "}
                                    <a href="/make-pdf-searchable/" className="text-blue-700 underline hover:text-blue-900">
                                        Make PDF Searchable
                                    </a>
                                    .
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Photo quality tips (ranking + conversion section) */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Get better OCR from phone photos (quick tips)</h2>
                        <p className="text-gray-700 mb-5">
                            OCR accuracy depends heavily on your photo quality. These 3 fixes solve most “photo to text” failures.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {photoTips.map((t) => (
                                <div key={t.title} className="bg-gray-50 border rounded-xl p-5">
                                    <div className="flex items-start gap-3">
                                        <t.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">{t.title}</h3>
                                            <p className="text-gray-600">{t.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Reality check (no hype)</h3>
                                    <p className="text-gray-700">
                                        Printed text in a sharp photo usually OCRs well. Handwriting and blurry images may produce errors—always proofread important text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Troubleshooting */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Fix common “scan photo text” problems</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {fixes.map((f) => (
                                <div key={f.title} className="bg-white border rounded-xl p-5">
                                    <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                                    <p className="text-gray-600">{f.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Internal linking */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Turn photo OCR into a full workflow</h2>
                        <p className="text-gray-700 mb-5">
                            If you’re doing more than copying text, these tools help you convert, OCR, and reuse content:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 border rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <FileImage className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Photo(s) → PDF</h3>
                                        <p className="text-gray-600">
                                            Convert phone photos into a PDF using{" "}
                                            <a href="/image-to-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                Image to PDF
                                            </a>{" "}
                                            then make it searchable with{" "}
                                            <a href="/make-pdf-searchable/" className="text-blue-700 underline hover:text-blue-900">
                                                Make PDF Searchable
                                            </a>
                                            .
                                        </p>
                                        <a
                                            href="/image-to-pdf/"
                                            className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-blue-700 hover:text-blue-900"
                                        >
                                            Convert images to PDF <ArrowRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Need text from a PDF?</h3>
                                        <p className="text-gray-600">
                                            Use{" "}
                                            <a href="/pdf-to-text/" className="text-blue-700 underline hover:text-blue-900">
                                                PDF to Text
                                            </a>{" "}
                                            or{" "}
                                            <a href="/ocr-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                OCR PDF
                                            </a>
                                            .
                                        </p>
                                        <a
                                            href="/pdf-to-text/"
                                            className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-blue-700 hover:text-blue-900"
                                        >
                                            Extract text from PDF <ArrowRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <ScanText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">All images (JPG/PNG)</h3>
                                        <p className="text-gray-600">
                                            Use{" "}
                                            <a href="/image-to-text/" className="text-blue-700 underline hover:text-blue-900">
                                                Image to Text
                                            </a>{" "}
                                            for universal image OCR, plus{" "}
                                            <a href="/jpg-to-text/" className="text-blue-700 underline hover:text-blue-900">
                                                JPG to Text
                                            </a>{" "}
                                            and{" "}
                                            <a href="/png-to-text/" className="text-blue-700 underline hover:text-blue-900">
                                                PNG to Text
                                            </a>{" "}
                                            for format-specific pages.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <Layers className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Page limit? Keep only what matters</h3>
                                        <p className="text-gray-600">
                                            If your document is long, use{" "}
                                            <a href="/split-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                Split PDF
                                            </a>{" "}
                                            to extract only the pages you need, then run OCR on those pages.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
                        <p className="text-gray-700 mb-4">
                            OCR requires processing the image to recognize text. If you’re testing, use sample photos or redact sensitive parts.
                        </p>

                        <div className="bg-white border rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Privacy checklist</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                        <li>Avoid uploading highly sensitive documents.</li>
                                        <li>Use trusted networks and keep your browser updated.</li>
                                        <li>
                                            Read{" "}
                                            <a href="/privacy/" className="text-blue-700 underline hover:text-blue-900">
                                                Privacy
                                            </a>{" "}
                                            and{" "}
                                            <a href="/terms/" className="text-blue-700 underline hover:text-blue-900">
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
                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm border">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <p className="mt-2 text-gray-700">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related tools */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Related tools
                        </h2>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/image-to-text/" className="underline hover:text-blue-900">Image to Text</a></li>
                            <li><a href="/jpg-to-text/" className="underline hover:text-blue-900">JPG to Text</a></li>
                            <li><a href="/png-to-text/" className="underline hover:text-blue-900">PNG to Text</a></li>
                            <li><a href="/ocr-pdf/" className="underline hover:text-blue-900">OCR PDF</a></li>
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-blue-900">Make PDF searchable</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-blue-900">PDF to Text</a></li>
                            <li><a href="/image-to-pdf/" className="underline hover:text-blue-900">Image to PDF</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split PDF</a></li>
                            <li><a href="/tools/" className="underline hover:text-blue-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-blue-600 text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-2">Scan photo text now</h2>
                        <p className="text-blue-100 mb-6">
                            Upload a photo, choose language, run OCR, and copy the text instantly.
                        </p>
                        <a
                            href="#upload"
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <Camera className="h-5 w-5" />
                            Upload Photo
                        </a>
                    </div>
                </section>
            

        {/* SMART LINKING MAP */}
        <section className="py-12 bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                 <div className="grid md:grid-cols-2 gap-8">
                    {/* SIBLINGS */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Related Tools</h3>
                        <ul className="space-y-2">
                            
                            <li>
                                <a href="/ocr-german/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    OCR German
                                </a>
                            </li>
                            <li>
                                <a href="/ocr-spanish/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    OCR Spanish
                                </a>
                            </li>
                            <li>
                                <a href="/image-to-text/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    Image to Text
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* NEXT STEPS */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Next Steps</h3>
                        <ul className="space-y-2">
                            
                            <li>
                                <a href="/pdf-to-word-ocr/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                    <span className="font-semibold text-gray-700 group-hover:text-blue-700">Convert to Word</span>
                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </li>
                            <li>
                                <a href="/edit-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                    <span className="font-semibold text-gray-700 group-hover:text-blue-700">Edit Text</span>
                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                 </div>
                 
                 {/* PARENT */}
                 <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                    <a href="/ocr/" className="text-sm font-semibold text-gray-500 hover:text-blue-600 uppercase tracking-wide">
                        View OCR Home
                    </a>
                 </div>
            </div>
        </section>
    
</main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
                <p>© {new Date().getFullYear()} PDF Free Editor by TechRex. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="/tools/" className="hover:text-white">Tools</a>
                    <a href="/privacy/" className="hover:text-white">Privacy</a>
                    <a href="/terms/" className="hover:text-white">Terms</a>
                    <a href="/contact/" className="hover:text-white">Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default { Page: PhotoToTextPage };
