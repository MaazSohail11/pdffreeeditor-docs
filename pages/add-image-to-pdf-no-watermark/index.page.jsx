// pages/add-image-to-pdf-no-watermark/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
    Image as ImageIcon,
    FileText,
    Upload,
    CheckCircle2,
    Lock,
    Link as LinkIcon,
} from "lucide-react";
import InlineDropBox from "/src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";

function AddImageToPdfNoWatermark() {
    const trustBullets = [
        "Add image to PDF — no watermark, no signup",
        "Insert logos, photos, stamps, screenshots, signatures",
        "Resize, rotate, position precisely inside the editor",
        "Runs locally in your browser by default (privacy-first)",
    ];

    const useCases = [
        {
            title: "Add a logo to invoices, proposals, and letterheads",
            body: "Insert your company logo on the header/footer so documents look official and consistent.",
        },
        {
            title: "Attach supporting images to forms",
            body: "Many portals accept one PDF — insert a photo/screenshot into the PDF instead of sending separate files.",
        },
        {
            title: "Add stamps (PAID / APPROVED / DRAFT)",
            body: "Place a stamp image on pages for internal workflows without changing the original layout.",
        },
        {
            title: "Insert ID photos, receipts, or screenshots into a single PDF",
            body: "Bundle everything into one clean file that’s easy to upload or email.",
        },
    ];

    const proTips = [
        {
            title: "Use PNG for clean logos",
            body: "PNG keeps edges sharp (and supports transparency if your editor preserves it). JPG is better for photos.",
        },
        {
            title: "Keep file sizes reasonable",
            body: "Huge images can inflate your PDF. If you’re uploading to a portal/email, compress after inserting images.",
        },
        {
            title: "Place images precisely",
            body: "Zoom in to align logos on headers. Use small rotations for scanned documents that are slightly tilted.",
        },
    ];

    // Visible FAQ (must match server schema)
    const faqs = [
        {
            q: "How do I add an image to a PDF online without a watermark?",
            a: "Upload your PDF, choose the image tool in the editor, insert your image (logo/photo), place it on the page, then download — no signup and no watermark.",
        },
        {
            q: "Can I insert a logo into a PDF?",
            a: "Yes. Insert your logo image and position it on the header, footer, or anywhere on the page.",
        },
        {
            q: "Do you upload my PDF to your servers?",
            a: "By default, editing runs in your browser so your PDF stays on your device. If any feature ever needs an upload, you’ll see it clearly before starting.",
        },
        {
            q: "Can I resize and rotate the image?",
            a: "Yes. After inserting, you can resize and rotate for a perfect fit.",
        },
        {
            q: "What image formats work best?",
            a: "PNG is great for logos and stamps. JPG is best for photos. If you need transparency, use a PNG.",
        },
        {
            q: "My PDF got bigger after adding an image — what should I do?",
            a: "That’s normal. After inserting images, run Compress PDF to reduce file size for email or portal limits.",
        },
    ];

    return (
        <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900">
      <Helmet>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
</Helmet>
            <SiteNav />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Add Image to PDF Online
                            <br />
                            <span className="text-blue-600">No watermark • no signup</span>
                        </h1>

                        <p className="text-lg text-gray-700 mb-3">
                            Insert a logo, photo, stamp, or screenshot into any PDF — directly in your browser.
                            Perfect for invoices, applications, and official documents.
                        </p>

                        <p className="text-base text-gray-700 mb-8">
                            Built for trust: <strong>no signup</strong>, <strong>no watermark</strong>,
                            and your file stays on your device by default.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                            <a
                                href="#start"
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-blue-700"
                            >
                                <Upload className="h-5 w-5" />
                                <span>Start — Add Image to PDF</span>
                            </a>

                            <a
                                href="#how-to"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border shadow-sm hover:shadow-md"
                            >
                                <FileText className="h-5 w-5" />
                                <span>How it works (3 steps)</span>
                            </a>
                        </div>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                            {trustBullets.map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span>{t}</span>
                                </li>
                            ))}
                            <li className="flex items-center gap-2">
                                <Lock className="h-4 w-4 text-gray-600" />
                                <span>Privacy-first editing</span>
                            </li>
                        </ul>
                    </div>

                    <div id="start" className="w-full">
                        <InlineDropBox
                            className="w-full"
                            minHeight={480}
                            maxWidth={720}
                            label="Choose PDF to Insert an Image"
                        />
                        <p className="text-xs text-gray-500 mt-3 flex items-center gap-2 justify-center lg:justify-start">
                            <Lock className="h-4 w-4" />
                            Your PDF stays on your device by default.
                        </p>
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* Use cases */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-4">Common reasons to insert images into PDFs</h2>
                        <p className="text-gray-700 mb-6">
                            People search this when they need one clean PDF for upload, email, or client delivery — and they need it fast.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {useCases.map((u) => (
                                <div key={u.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                    <h3 className="font-semibold mb-2">{u.title}</h3>
                                    <p className="text-gray-700 text-sm">{u.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pro tips */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-4">
                        {proTips.map((t) => (
                            <div key={t.title} className="bg-white rounded-xl border border-gray-200 p-5">
                                <h3 className="font-semibold mb-2">{t.title}</h3>
                                <p className="text-gray-700 text-sm">{t.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How to */}
                <section id="how-to" className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">How to add an image to a PDF (3 steps)</h2>
                        <ol className="space-y-6 list-decimal ml-6 text-gray-700">
                            <li id="step-upload">
                                <h3 className="font-semibold">1) Upload your PDF</h3>
                                <p className="text-gray-700">
                                    Upload your file in the box above. The editor opens with your PDF ready.
                                </p>
                            </li>
                            <li id="step-insert">
                                <h3 className="font-semibold">2) Insert the image</h3>
                                <p className="text-gray-700">
                                    Choose the image tool, upload your logo/photo, then place it on the page.
                                    Resize, rotate, and position it precisely.
                                </p>
                            </li>
                            <li id="step-download">
                                <h3 className="font-semibold">3) Download the updated PDF</h3>
                                <p className="text-gray-700">
                                    Export instantly. Your file downloads clean with no watermark.
                                    If you need a smaller file size, compress afterward.
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-6">Add Image to PDF — FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((item, i) => (
                                <details key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                    <p className="mt-2 text-gray-700">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related tools */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" />
                            Next steps people usually do
                        </h2>
                        <p className="text-gray-700 mb-3">
                            After inserting images, these are the most common follow-ups:
                        </p>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-blue-700">
                            <li><a href="/compress-pdf/" className="underline hover:text-blue-900">Compress PDF for email/portals</a></li>
                            <li><a href="/draw-on-pdf-online/" className="underline hover:text-blue-900">Draw on PDF</a></li>
                            <li><a href="/highlight-text-in-pdf-free/" className="underline hover:text-blue-900">Highlight text in PDF</a></li>
                            <li><a href="/sign-pdf/" className="underline hover:text-blue-900">Sign PDF</a></li>
                            <li><a href="/merge-pdf/" className="underline hover:text-blue-900">Merge PDFs</a></li>
                            <li><a href="/split-pdf/" className="underline hover:text-blue-900">Split PDF pages</a></li>
                        </ul>
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
                                <a href="/excel-to-pdf/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    Excel to PDF
                                </a>
                            </li>
                            <li>
                                <a href="/pptx-to-pdf/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    PPTX to PDF
                                </a>
                            </li>
                            <li>
                                <a href="/html-to-pdf/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    HTML to PDF
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* NEXT STEPS */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Next Steps</h3>
                        <ul className="space-y-2">
                            
                            <li>
                                <a href="/compress-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                    <span className="font-semibold text-gray-700 group-hover:text-blue-700">Compress PDF</span>
                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </li>
                            <li>
                                <a href="/merge-pdf/" className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">
                                    <span className="font-semibold text-gray-700 group-hover:text-blue-700">Merge PDF</span>
                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                 </div>
                 
                 {/* PARENT */}
                 <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                    <a href="/convertor/" className="text-sm font-semibold text-gray-500 hover:text-blue-600 uppercase tracking-wide">
                        View Converter Home
                    </a>
                 </div>
            </div>
        </section>
    
</main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
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

export default { Page: AddImageToPdfNoWatermark };
