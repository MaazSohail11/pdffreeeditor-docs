// /pages/index.page.jsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  FileText,
  Edit3,
  Zap,
  CheckCircle,
  Upload,
  PenTool,
  Image as ImageIcon,
  Menu,
  X,
  ShieldCheck,
  Lock,
  Layers,
  Scissors,
  Search,
  Highlighter,
  Sparkles,
  Star,
} from "lucide-react";
import InlineDropBox from "/src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";
import {
  subscribeToPdfUsageCount,
  PDF_USAGE_BASELINE,
} from "/src/utils/pdfUsageCounter.js";
import { initScrollProtection } from "/src/utils/scrollProtection.js";

function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [liveCount, setLiveCount] = useState(PDF_USAGE_BASELINE);
  const [targetCount, setTargetCount] = useState(PDF_USAGE_BASELINE);

  // Protect against external scripts (like AdSense) disabling scroll
  useEffect(() => {
    const cleanup = initScrollProtection();
    return cleanup;
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeToPdfUsageCount((val) => setTargetCount(val));
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (targetCount === liveCount) return;
    let frame;
    const start = liveCount;
    const end = targetCount;
    const duration = 900;
    const startAt = performance.now();

    const tick = (ts) => {
      const progress = Math.min(1, (ts - startAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(start + (end - start) * eased);
      setLiveCount(next);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [targetCount, liveCount]);

  const features = [
    {
      icon: <Edit3 className="h-6 w-6" />,
      title: "Edit Text",
      description:
        "Click to edit detected text, change fonts, sizes, colors, and alignment — directly in your browser.",
      link: "/edit-pdf/",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Compress PDF",
      description:
        "Reduce PDF file size for email, portals, and upload limits — fast and simple.",
      link: "/compress-pdf/",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Sign Documents",
      description:
        "Draw, type, or upload your signature and place it anywhere. Fast, private, and simple.",
      link: "/sign-pdf/",
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: "Insert Images/Logos",
      description:
        "Add pictures, logos, or stamps to any page. Drag to resize, rotate, and layer precisely.",
      link: "/add-image-pdf/",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Merge PDFs",
      description:
        "Combine multiple PDFs in one click. Reorder pages and download instantly.",
      link: "/merge-pdf/",
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Split PDFs",
      description: "Extract pages or split into multiple files. Simple and fast.",
      link: "/split-pdf/",
    },
    {
      icon: <Highlighter className="h-6 w-6" />,
      title: "Annotate PDF",
      description:
        "Highlight text, add comments, and markup your PDF documents.",
      link: "/annotate-pdf/",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "OCR PDF",
      description:
        "Make scanned PDFs searchable. Extract text from images instantly.",
      link: "/ocr/",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "PDF Converters",
      description:
        "Convert PDF to Word, Image to PDF, and more. High fidelity conversion.",
      link: "/convertor/",
    },
  ];

  const benefits = [
    "100% free — no signup, no watermark",
    "Client-side processing — your file stays on your device",
    "Fast: instant preview and downloads",
    "Works on desktop & mobile",
    "Supports large, multi-page PDFs",
    "Clean UI with precision tools",
  ];

  // Minimal, high-intent FAQs (trust + capability + funnels to money pages)
  const faqs = [
    {
      q: "Do you upload my PDF files to your servers?",
      a: (
        <>
          No. By default, editing runs locally in your browser, so your files stay on your device.
          If a feature ever requires an upload, we clearly tell you before you start.
        </>
      ),
    },
    {
      q: "Is this PDF editor really free and watermark-free?",
      a: (
        <>
          Yes — you can edit and download without a watermark and without signing up.
        </>
      ),
    },
    {
      q: "Can I edit text inside a PDF?",
      a: (
        <>
          Yes for PDFs that contain selectable text. If your PDF is scanned (image-based), you’ll need{" "}
          <a href="/ocr/" className="text-blue-600 hover:underline">OCR</a>{" "}
          to make the text selectable/editable.
        </>
      ),
    },
    {
      q: "Can I compress a PDF to 1MB or for email upload limits?",
      a: (
        <>
          Yes — use{" "}
          <a href="/compress-pdf/" className="text-blue-600 hover:underline">Compress PDF</a>{" "}
          to reduce file size for email, portals, or forms. Results depend on images and how the PDF was created.
        </>
      ),
    },
    {
      q: "Can I split a PDF or delete/extract pages?",
      a: (
        <>
          Yes — use{" "}
          <a href="/split-pdf/" className="text-blue-600 hover:underline">Split PDF</a>{" "}
          to extract pages or separate a file into parts.
        </>
      ),
    },
    {
      q: "Can I merge multiple PDFs into one?",
      a: (
        <>
          Yes — use{" "}
          <a href="/merge-pdf/" className="text-blue-600 hover:underline">Merge PDF</a>{" "}
          to combine files and reorder pages.
        </>
      ),
    },
    {
      q: "Can I sign a PDF online (mobile too)?",
      a: (
        <>
          Yes — use{" "}
          <a href="/sign-pdf/" className="text-blue-600 hover:underline">Sign PDF</a>{" "}
          on desktop or mobile and download instantly.
        </>
      ),
    },
    {
      q: "What file types do you support?",
      a: (
        <>
          PDF is supported, and common documents/images can be converted to PDF (Word, Excel, PowerPoint, JPG/PNG) via{" "}
          <a href="/convertor/" className="text-blue-600 hover:underline">Converters</a>.
        </>
      ),
    },
  ];

  return (
    <div className="font-sans flex flex-col min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      {/* Hero: copy left, big dropzone right */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-16 lg:py-24">
        <div className="hidden md:block absolute right-4 top-4">
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur border border-blue-100 shadow-xl rounded-2xl px-4 py-3 max-w-xs">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-inner animate-pulse">
              <Zap className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-gray-500">Live activity</p>
              <p className="text-lg font-semibold text-gray-900 leading-tight">
                <span className="text-blue-700">{liveCount.toLocaleString("en-US")}</span> PDFs edited
              </p>
              <p className="text-[11px] text-gray-500">Updates as tools run</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Copy & CTAs */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
              Free PDF Editor Online
            </h1>
            <p className="brand-gradient text-lg md:text-xl font-semibold mt-2">
              No Signup • No Watermark • Private
            </p>
            <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-xl">
              Edit, merge, split, sign, compress, and convert — right in your browser.
              Private by design: your files stay on your device by default.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/editor/"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 shadow-md transition"
              >
                <FileText className="h-5 w-5" />
                <span>Edit PDF</span>
              </a>
              <a
                href="/tools/"
                className="bg-white text-blue-600 border hover:shadow px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition"
              >
                <Scissors className="h-5 w-5" />
                <span>Browse All Tools</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <Lock className="h-4 w-4" /> Client-side processing
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> No watermark
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4" /> Instant download
              </span>
            </div>
          </div>

          {/* RIGHT: Big dropzone */}
          <div>
            <InlineDropBox
              className="w-full"
              minHeight={480}
              maxWidth={720}
              label="Choose PDF to Start"
            />
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular PDF tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to edit PDFs — no accounts, no uploads by default, and no watermark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <a
                key={i}
                href={f.link}
                className="group relative bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-5px_rgba(59,130,246,0.15)] border border-gray-100 p-6 hover:-translate-y-1 transition-all duration-300 block overflow-hidden"
                aria-label={f.title}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                <div className="relative flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {f.title}
                  </h3>
                </div>
                <p className="relative text-gray-600 leading-relaxed text-sm">
                  {f.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why choose our Free PDF Editor?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We built this to remove friction: no accounts, no uploads by default, and no watermarks —
              just fast, accurate tools that run entirely in your browser.
            </p>
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow text-center">
            <Zap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Start editing in seconds
            </h3>
            <p className="text-gray-600 mb-6">
              Open a file, make changes, and download instantly — it all happens locally in your browser.
            </p>
            <a
              href="/editor/"
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow inline-flex items-center gap-2 transition"
            >
              <FileText className="h-5 w-5" />
              <span>Open PDF Editor</span>
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-to" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            How it works
          </h2>
          <ol className="grid md:grid-cols-3 gap-6 text-left">
            <li id="step-open" className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-1">1) Open the editor & upload</h3>
              <p className="text-gray-700">Open the editor and drag &amp; drop your PDF.</p>
            </li>
            <li id="step-edit" className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-1">2) Make changes</h3>
              <p className="text-gray-700">Edit text, add a signature or images, compress, merge or split pages.</p>
            </li>
            <li id="step-download" className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-1">3) Download — no watermark</h3>
              <p className="text-gray-700">Export instantly. No signup, no watermark.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ (REAL UI + high-intent content) */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 shadow-sm p-5 open:shadow-md transition"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-gray-900">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-3 text-gray-700 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center">
            Looking for a specific task? Try{" "}
            <a href="/compress-pdf/" className="text-blue-600 hover:underline">Compress PDF</a>,{" "}
            <a href="/merge-pdf/" className="text-blue-600 hover:underline">Merge PDF</a>,{" "}
            <a href="/split-pdf/" className="text-blue-600 hover:underline">Split PDF</a>,{" "}
            <a href="/sign-pdf/" className="text-blue-600 hover:underline">Sign PDF</a>,{" "}
            or{" "}
            <a href="/convertor/" className="text-blue-600 hover:underline">Converters</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-yellow-400 opacity-20 animate-pulse">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute top-20 right-20 text-blue-400 opacity-20 animate-pulse delay-75">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute bottom-10 left-1/4 text-white opacity-10 animate-pulse delay-150">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute top-1/2 right-1/4 text-purple-300 opacity-20 animate-pulse delay-300">
            <Sparkles className="w-3 h-3" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/30 blur-[100px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <p className="text-blue-200 ml-3 italic">
              "Privacy focussed free pdf editor with more than 50,000 users globally"
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 mb-6 drop-shadow-sm">
            Start Editing Your PDFs Today
          </h2>
          <p className="text-xl text-blue-200/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the power of local-only PDF editing. Secure, fast, and remarkably simple.
          </p>
          <a
            href="/editor/"
            className="group relative bg-white text-slate-900 hover:bg-blue-50 font-bold py-5 px-10 rounded-full text-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all inline-flex items-center gap-3"
          >
            <FileText className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
            <span>Edit PDF</span>
          </a>
        </div>
      </section>

      {/* Footer */}
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

export default { Page: LandingPage };
