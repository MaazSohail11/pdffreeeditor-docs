// pages/image-to-text/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import OCRTool from "/src/components/tools/OCRTool.jsx";
import {
    Image as ImageIcon,
    ScanText,
    CheckCircle,
    ShieldCheck,
    Languages,
    Copy,
    Link as LinkIcon,
    FileText,
    FileImage,
    FileSpreadsheet,
    Camera,
    Monitor,
    Download,
    AlertTriangle,
} from "lucide-react";

function ImageToTextPage() {
    const supportedLanguages = ["English", "French", "Spanish", "Portuguese", "German", "Italian"];

    const benefits = [
        "Extract text from images online (OCR) — turn photos and screenshots into copyable text",
        "Fix “I can’t copy text from an image” — no retyping needed",
        "Choose the correct language to improve OCR accuracy (especially accents and lookalike characters)",
        "Works great for screenshots, phone photos, receipts, notes, and scanned page images",
        "Copy extracted text instantly and reuse it in Word, Google Docs, email, or chat",
        "No watermark on your output",
    ];

    const useCases = [
        {
            title: "Screenshot to text",
            text: "Copy text from screenshots of emails, PDFs, slides, or chat messages in seconds.",
            icon: Monitor,
        },
        {
            title: "Photo to text",
            text: "Extract text from phone photos of documents, signs, receipts, menus, and notes.",
            icon: Camera,
        },
        {
            title: "Scans to editable text",
            text: "OCR scanned pages saved as JPG/PNG so the text becomes selectable and editable.",
            icon: ScanText,
        },
    ];

    const fixes = [
        {
            title: "OCR output has weird line breaks",
            text: "Try a higher-quality image, avoid shadows, and crop to just the text region. Screenshots often work best.",
        },
        {
            title: "Accents / special characters are wrong",
            text: "Select the correct language before OCR (French/Spanish/Portuguese especially).",
        },
        {
            title: "Text is blurry or tiny",
            text: "Zoom/crop, use a clearer photo, or re-scan at higher quality. Blurry images reduce recognition accuracy.",
        },
    ];

    const faqs = [
        {
            q: "How do I convert an image to text online?",
            a: "Upload your image, choose the correct language (recommended), run OCR, then copy the extracted text. This turns a photo or screenshot into editable text.",
        },
        {
            q: "What images work best for OCR?",
            a: "Clean screenshots and high-resolution photos work best. Avoid blur, shadows, skewed angles, and tiny text.",
        },
        {
            q: "Do I need to choose a language?",
            a: "It’s optional, but selecting the right language usually improves OCR accuracy—especially for accented letters and similar-looking characters.",
        },
        {
            q: "Can this extract text from a scanned PDF?",
            a: "If you have a PDF, use OCR PDF or Make PDF Searchable. This page is best for image files like screenshots and photos.",
        },
        {
            q: "Can I download the extracted text?",
            a: "Yes—after OCR you can copy the text, or move it into Word/Docs. For full document workflows, OCR a PDF first and then convert to Word or Excel.",
        },
        {
            q: "Is my image stored?",
            a: "For sensitive documents, avoid uploading confidential data and review the Privacy policy. If you’re testing, use sample images or redact sensitive parts.",
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
                            Image to Text (OCR)
                            <br />
                            <span className="text-blue-600">
                                Extract Text from Photos &amp; Screenshots • Copy Instantly
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-3">
                            Convert image to text online with OCR. Upload a screenshot, photo, or scanned image and
                            get copyable text you can paste anywhere—no retyping.
                        </p>

                        <p className="text-base text-gray-600 mb-6">
                            Have a scanned PDF instead? Use{" "}
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
                                <ImageIcon className="h-5 w-5" />
                                Upload Image
                            </a>

                            <a
                                href="#how-to"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                            >
                                <ScanText className="h-5 w-5" />
                                How it works (3 steps)
                            </a>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                Why people use Image → Text OCR
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

                            <p className="text-xs text-gray-500 mt-3">
                                Tip: Selecting the right language usually improves OCR accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Tool */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-white border rounded-2xl shadow p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-blue-600" />
                                <p className="font-semibold">Upload an image and extract text</p>
                            </div>

                            {/* Your OCR UI (assumed to support images too) */}
                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-gray-50 border rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <Copy className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Best results (fast)</p>
                                        <p className="text-sm text-gray-600">
                                            Screenshots and clear photos give the cleanest text. If your image contains accents,
                                            choose the correct language before OCR.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <main className="flex-1">
                {/* Use cases */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Extract text from image for real-world tasks (not just demos)
                        </h2>
                        <p className="text-gray-700 mb-5">
                            People usually want “image to text” because they’re stuck: the text is trapped inside a screenshot,
                            a phone photo, or a scanned page image. OCR makes it copyable.
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
                            If your “image” is actually a PDF page screenshot and you need a searchable file, use{" "}
                            <a href="/make-pdf-searchable/" className="text-blue-700 underline hover:text-blue-900">
                                Make PDF Searchable
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* How-to */}
                <section id="how-to" className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">
                            How to convert image to text online (3 steps)
                        </h2>

                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h4 className="font-semibold">1) Upload your image (photo or screenshot)</h4>
                                <p className="text-gray-600">
                                    Upload a clear image that contains text. For best accuracy, crop to the text region and avoid shadows.
                                </p>
                            </li>

                            <li id="step-language">
                                <h4 className="font-semibold">2) Choose the correct language (recommended)</h4>
                                <p className="text-gray-600">
                                    Selecting the right language improves OCR accuracy, especially for accents and language-specific characters.
                                </p>
                            </li>

                            <li id="step-copy">
                                <h4 className="font-semibold">3) Copy your extracted text and reuse it anywhere</h4>
                                <p className="text-gray-600">
                                    Copy the text into Word/Docs/email. If you want a document file, convert your source to PDF first and OCR the PDF.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Troubleshooting (long-tail magnet) */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Fix common “OCR image” problems (fast)
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {fixes.map((f) => (
                                <div key={f.title} className="bg-gray-50 border rounded-xl p-5">
                                    <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                                    <p className="text-gray-600">{f.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Reality check (so you don’t overpromise)</h3>
                                    <p className="text-gray-700">
                                        OCR accuracy depends heavily on image quality. Screenshots usually win. Blurry, skewed, or low-contrast photos
                                        can produce errors, so always verify important text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal linking “workflow” section */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Turn image OCR into a full document workflow
                        </h2>
                        <p className="text-gray-700 mb-5">
                            Need more than just extracted text? Use these tools to convert and process your documents end-to-end:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <FileImage className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Multiple images → one PDF</h3>
                                        <p className="text-gray-600">
                                            Combine photos into a PDF using{" "}
                                            <a href="/image-to-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                Image to PDF
                                            </a>{" "}
                                            then run{" "}
                                            <a href="/ocr-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                OCR PDF
                                            </a>{" "}
                                            to make it searchable.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Extract text from scanned PDFs</h3>
                                        <p className="text-gray-600">
                                            If your source is a PDF, use{" "}
                                            <a href="/pdf-to-text/" className="text-blue-700 underline hover:text-blue-900">
                                                PDF to Text
                                            </a>{" "}
                                            or{" "}
                                            <a href="/make-pdf-searchable/" className="text-blue-700 underline hover:text-blue-900">
                                                Make PDF Searchable
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <FileSpreadsheet className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Tables/numbers → Excel</h3>
                                        <p className="text-gray-600">
                                            For scanned tables, OCR a PDF first, then use{" "}
                                            <a href="/pdf-to-excel/" className="text-blue-700 underline hover:text-blue-900">
                                                PDF to Excel
                                            </a>{" "}
                                            (or our OCR workflow page).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <Download className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Need editable Word content?</h3>
                                        <p className="text-gray-600">
                                            OCR first, then convert to DOCX using{" "}
                                            <a href="/pdf-to-word/" className="text-blue-700 underline hover:text-blue-900">
                                                PDF to Word
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">Security &amp; privacy</h2>
                        <p className="text-gray-700 mb-4">
                            OCR requires processing your image to recognize text. If you’re testing, use sample images or redact sensitive parts.
                        </p>

                        <div className="bg-gray-50 border rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Privacy checklist</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                        <li>Avoid uploading highly sensitive personal documents.</li>
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
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-white p-4 rounded-lg shadow-sm border">
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
                        <p className="text-gray-600 mb-3">
                            Use these tools to convert, OCR, and edit documents end-to-end:
                        </p>

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/ocr-pdf/" className="underline hover:text-blue-900">OCR PDF</a></li>
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-blue-900">Make PDF searchable</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-blue-900">PDF to Text</a></li>
                            <li><a href="/image-to-pdf/" className="underline hover:text-blue-900">Image to PDF</a></li>
                            <li><a href="/pdf-to-image/" className="underline hover:text-blue-900">PDF to Image</a></li>
                            <li><a href="/pdf-to-word/" className="underline hover:text-blue-900">PDF to Word</a></li>
                            <li><a href="/pdf-to-excel/" className="underline hover:text-blue-900">PDF to Excel</a></li>
                            <li><a href="/edit-pdf/" className="underline hover:text-blue-900">Edit PDF text</a></li>
                            <li><a href="/tools/" className="underline hover:text-blue-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-blue-600 text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Extract text from your image in seconds
                        </h2>
                        <p className="text-blue-100 mb-6">
                            Upload a screenshot or photo, choose language, and copy the text instantly.
                        </p>
                        <a
                            href="#upload"
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ImageIcon className="h-5 w-5" />
                            Upload Image
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

export default { Page: ImageToTextPage };
