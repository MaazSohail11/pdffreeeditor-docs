// pages/jpg-to-text/index.page.jsx
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
    Camera,
    Monitor,
    FileText,
    FileImage,
    Languages,
    AlertTriangle,
    Download,
} from "lucide-react";

function JpgToTextPage() {
    const supportedLanguages = ["English", "French", "Spanish", "Portuguese", "German", "Italian"];

    const benefits = [
        "Convert JPG to text online (OCR) — turn a JPG/JPEG image into copyable text",
        "Copy text from a JPG photo or screenshot without retyping",
        "Choose the correct language to improve OCR accuracy (accents + similar-looking letters)",
        "Works for receipts, notes, signs, documents, screenshots, and photos taken on phones",
        "Fast: extract the text and paste it into Word, Docs, email, or chat",
        "No watermark on output",
    ];

    const useCases = [
        {
            title: "Screenshot JPG → text",
            text: "Extract text from JPG screenshots of PDFs, slides, emails, chats, or websites.",
            icon: Monitor,
        },
        {
            title: "Phone photo (JPEG) → text",
            text: "Turn camera photos of paper documents, menus, signs, and notes into editable text.",
            icon: Camera,
        },
        {
            title: "Scanned page saved as JPG",
            text: "OCR scanned pages exported as JPG so the text becomes selectable and reusable.",
            icon: ScanText,
        },
    ];

    const fixes = [
        {
            title: "My JPG OCR output is messy (line breaks / missing spaces)",
            text: "Crop to the text area, use a sharper image, and avoid shadows. Screenshots usually produce the cleanest text.",
        },
        {
            title: "Accents or special characters look wrong",
            text: "Select the correct language before OCR (French/Spanish/Portuguese especially).",
        },
        {
            title: "Text is small / blurry in the photo",
            text: "Retake the photo with better light, zoom in, or use a higher-resolution scan. Blurry text reduces OCR accuracy.",
        },
    ];

    const faqs = [
        {
            q: "How do I convert JPG to text online?",
            a: "Upload your JPG/JPEG image, select the correct language (recommended), run OCR, then copy the extracted text. This converts a JPG photo or screenshot into editable text.",
        },
        {
            q: "Does this work for JPEG files too?",
            a: "Yes. JPG and JPEG are the same image format in practice. You can OCR both.",
        },
        {
            q: "What kind of JPG images work best for OCR?",
            a: "Screenshots and sharp photos with good lighting work best. Avoid blur, heavy compression artifacts, skewed angles, and tiny text.",
        },
        {
            q: "Do I need to choose a language?",
            a: "It’s optional, but selecting the correct language usually improves OCR accuracy—especially for accented letters and language-specific characters.",
        },
        {
            q: "Can I extract text from a scanned PDF instead of a JPG?",
            a: "Yes—use OCR PDF or Make PDF Searchable for PDFs. This page is specifically optimized for JPG/JPEG images.",
        },
        {
            q: "Can I download the extracted text?",
            a: "After OCR, you can copy the text anywhere. For full-document workflows, convert images to PDF first, then OCR the PDF and export to Word/Excel if needed.",
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
                            JPG to Text (OCR)
                            <br />
                            <span className="text-blue-600">
                                Extract Text from JPG/JPEG Images • Copy Instantly
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-3">
                            Convert JPG to text online with OCR. Upload a JPG/JPEG photo or screenshot and get
                            copyable text in seconds—no manual typing.
                        </p>

                        <p className="text-base text-gray-600 mb-6">
                            Need OCR for PDFs? Use{" "}
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
                                Upload JPG
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
                                Why people use JPG → Text OCR
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
                                Tip: pick the correct language for better OCR accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Tool */}
                    <aside id="upload" className="lg:sticky lg:top-6">
                        <div className="bg-white border rounded-2xl shadow p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <ScanText className="h-5 w-5 text-blue-600" />
                                <p className="font-semibold">Upload a JPG/JPEG and extract text</p>
                            </div>

                            {/* Your OCR UI (must support image uploads) */}
                            <OCRTool minimal={true} />

                            <div className="mt-4 bg-gray-50 border rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <Copy className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Best results in 10 seconds</p>
                                        <p className="text-sm text-gray-600">
                                            Use a clean screenshot or a sharp, well-lit photo. Crop to the text area and choose the correct language.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-xs text-gray-500">
                                Not a JPG? Use{" "}
                                <a href="/image-to-text/" className="underline hover:text-gray-700">
                                    Image to Text
                                </a>{" "}
                                for PNG + other image types.
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
                            Extract text from JPG images for real tasks
                        </h2>
                        <p className="text-gray-700 mb-5">
                            Most people search “JPG to text” because the text is trapped inside an image.
                            OCR turns it into copyable text you can edit and reuse.
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
                            Need the result inside a document file? Convert images to PDF using{" "}
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
                        <h2 className="text-2xl font-bold mb-6">
                            How to convert JPG to text online (3 steps)
                        </h2>

                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h4 className="font-semibold">1) Upload your JPG/JPEG image</h4>
                                <p className="text-gray-600">
                                    Upload a clear JPG (or JPEG). For best accuracy, crop to the text region and avoid heavy compression.
                                </p>
                            </li>

                            <li id="step-language">
                                <h4 className="font-semibold">2) Select the correct language (recommended)</h4>
                                <p className="text-gray-600">
                                    Selecting the right language improves OCR accuracy—especially for accents and language-specific characters.
                                </p>
                            </li>

                            <li id="step-copy">
                                <h4 className="font-semibold">3) Run OCR, then copy/paste the extracted text</h4>
                                <p className="text-gray-600">
                                    Copy the result into Word/Docs/email. If you need a searchable PDF instead, use{" "}
                                    <a href="/make-pdf-searchable/" className="text-blue-700 underline hover:text-blue-900">
                                        Make PDF Searchable
                                    </a>
                                    .
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Troubleshooting */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Fix common JPG OCR problems (quick wins)
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
                                    <h3 className="font-semibold text-gray-900 mb-1">No hype — accuracy depends on the image</h3>
                                    <p className="text-gray-700">
                                        Screenshots usually produce the best results. Blurry or low-contrast photos may contain OCR errors,
                                        so verify important text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal linking */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-3">
                            Turn JPG OCR into a full workflow
                        </h2>
                        <p className="text-gray-700 mb-5">
                            If you’re doing more than just copying text, these tools help you convert, OCR, and reuse content:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <FileImage className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Many JPGs → one PDF</h3>
                                        <p className="text-gray-600">
                                            Combine images into a PDF using{" "}
                                            <a href="/image-to-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                Image to PDF
                                            </a>{" "}
                                            then run{" "}
                                            <a href="/ocr-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                OCR PDF
                                            </a>{" "}
                                            for a searchable document.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl p-6 shadow-sm">
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
                                    <Download className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Want to edit the extracted text?</h3>
                                        <p className="text-gray-600">
                                            If you have a PDF, you can edit it using{" "}
                                            <a href="/edit-pdf/" className="text-blue-700 underline hover:text-blue-900">
                                                Edit PDF
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <ImageIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Other image formats</h3>
                                        <p className="text-gray-600">
                                            Use{" "}
                                            <a href="/image-to-text/" className="text-blue-700 underline hover:text-blue-900">
                                                Image to Text
                                            </a>{" "}
                                            for PNG and other image uploads.
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

                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/image-to-text/" className="underline hover:text-blue-900">Image to Text</a></li>
                            <li><a href="/ocr-pdf/" className="underline hover:text-blue-900">OCR PDF</a></li>
                            <li><a href="/make-pdf-searchable/" className="underline hover:text-blue-900">Make PDF searchable</a></li>
                            <li><a href="/pdf-to-text/" className="underline hover:text-blue-900">PDF to Text</a></li>
                            <li><a href="/image-to-pdf/" className="underline hover:text-blue-900">Image to PDF</a></li>
                            <li><a href="/pdf-to-image/" className="underline hover:text-blue-900">PDF to Image</a></li>
                            <li><a href="/pdf-to-word/" className="underline hover:text-blue-900">PDF to Word</a></li>
                            <li><a href="/pdf-to-excel/" className="underline hover:text-blue-900">PDF to Excel</a></li>
                            <li><a href="/tools/" className="underline hover:text-blue-900">All tools</a></li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-blue-600 text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Convert JPG to text now
                        </h2>
                        <p className="text-blue-100 mb-6">
                            Upload a JPG/JPEG, choose language, run OCR, and copy the text instantly.
                        </p>
                        <a
                            href="#upload"
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 inline-flex items-center gap-2"
                        >
                            <ImageIcon className="h-5 w-5" />
                            Upload JPG
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

export default { Page: JpgToTextPage };
