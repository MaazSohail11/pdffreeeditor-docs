import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Upload,
  Edit3,
  Image as ImageIcon,
  Layers,
  Scissors,
  Zap,
  PenTool,
  Search,
  ShieldCheck,
  Download,
  Award
} from "lucide-react";
import InlineDropBox from "/src/components/InlineDropBox.jsx";
import SiteNav from "/src/components/SiteNav.jsx";
import {
  subscribeToPdfUsageCount,
  PDF_USAGE_BASELINE,
} from "/src/utils/pdfUsageCounter.js";
import { initScrollProtection } from "/src/utils/scrollProtection.js";

export function Page() {
  const [liveCount, setLiveCount] = useState(PDF_USAGE_BASELINE);
  const [targetCount, setTargetCount] = useState(PDF_USAGE_BASELINE);

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

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-dim selection:text-on-primary min-h-screen">
      <Helmet>
        <title>PDF Free Editor - Professional Online Document Workspace</title>
        <meta
          name="description"
          content="Edit text, add images, annotate, merge, split, sign, and convert PDF to Word... 100% free, no signup, no watermark."
        />
      </Helmet>

      {/* Top Navbar */}
      <SiteNav />

      <main className="pt-32 pb-24 space-y-32">
        
        {/* --- Hero Section --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-surface-container-highest/50 ghost-border text-primary-stitch text-sm font-semibold mb-8 animate-fade-in-up">
            Uncompromisingly Professional & 100% Free
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 leading-[1.1] animate-fade-in-up animate-delay-100">
            <span className="text-gradient">All Free PDF Tools</span><br />
            <span className="text-on-surface">in One Online Editor</span>
          </h1>
          
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed animate-fade-in-up animate-delay-200">
            Edit text, add images, annotate, merge, split, sign, and convert PDF to Word... 100% free, no signup, no watermark. Over <span className="font-mono text-primary-stitch font-bold">{liveCount.toLocaleString()}</span> files processed safely.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 animate-fade-in-up animate-delay-300">
            <a href="/editor/" className="w-full md:w-auto bg-gradient-to-br from-primary-stitch to-primary-dim text-on-primary px-10 py-5 rounded-full font-bold text-lg primary-glow flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
              <Upload className="h-6 w-6" />
              Choose a File to Start
            </a>
            <a href="/tools/" className="w-full md:w-auto glass-panel ghost-border px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2">
              View All Features
            </a>
          </div>

          {/* Interactive Droploader */}
          <div className="mt-20 relative max-w-4xl mx-auto animate-fade-in-up animate-delay-300">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-primary-dim/10 blur-[120px] rounded-full -z-10"></div>
            <div className="glass-panel ghost-border p-4 rounded-[2rem] shadow-2xl relative">
               <InlineDropBox />
            </div>
          </div>
        </section>

        {/* --- Tool Bento Grid --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6">Master Your Documents</h2>
              <p className="text-on-surface-variant text-lg">Every utility you need to transform, secure, and manage your PDF workflow in a single workspace.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-outline-variant/50 mx-12 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Edit Card Large */}
            <a href="/edit-pdf/" className="lg:col-span-2 glass-panel ghost-border p-8 rounded-[2rem] hover:bg-surface-container-highest transition-all duration-300 group cursor-pointer relative overflow-hidden block">
              <div className="absolute -top-8 -right-8 p-16 bg-primary-stitch/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Edit3 className="h-10 w-10 text-primary-stitch mb-6" />
              <h3 className="font-headline text-2xl mb-4 text-on-surface group-hover:text-primary-stitch transition-colors">Edit PDF Content</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">Directly modify text, update images, and adjust layouts within your PDF document with desktop-class precision.</p>
              <div className="flex items-center text-primary-stitch font-bold gap-2 group-hover:gap-4 transition-all">
                Launch Editor <span>&rarr;</span>
              </div>
            </a>

            <a href="/add-image-pdf/" className="glass-panel ghost-border p-8 rounded-[2rem] hover:bg-surface-container-highest transition-all duration-300 group cursor-pointer block">
              <ImageIcon className="h-10 w-10 text-primary-stitch mb-4" />
              <h3 className="font-headline text-xl mb-3 text-on-surface">Add Images</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Place, resize and optimize visuals instantly.</p>
            </a>

            <a href="/merge-pdf/" className="glass-panel ghost-border p-8 rounded-[2rem] hover:bg-surface-container-highest transition-all duration-300 group cursor-pointer block">
              <Layers className="h-10 w-10 text-primary-stitch mb-4" />
              <h3 className="font-headline text-xl mb-3 text-on-surface">Merge PDF</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Combine multiple files into one seamless document.</p>
            </a>

            <a href="/split-pdf/" className="glass-panel ghost-border p-8 rounded-[2rem] hover:bg-surface-container-highest transition-all duration-300 group cursor-pointer block">
              <Scissors className="h-10 w-10 text-primary-stitch mb-4" />
              <h3 className="font-headline text-xl mb-3 text-on-surface">Split PDF</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Extract pages or divide files into separate parts.</p>
            </a>

            <a href="/compress-pdf/" className="glass-panel ghost-border p-8 rounded-[2rem] hover:bg-surface-container-highest transition-all duration-300 group cursor-pointer block">
              <Zap className="h-10 w-10 text-primary-stitch mb-4" />
              <h3 className="font-headline text-xl mb-3 text-on-surface">Compress</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Reduce file size without losing visual quality.</p>
            </a>

            {/* Sign Card Large */}
            <a href="/sign-pdf/" className="lg:col-span-2 glass-panel ghost-border p-8 rounded-[2rem] hover:bg-surface-container-highest transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row sm:items-center gap-8 block">
              <div className="bg-surface-container-low p-6 rounded-2xl ghost-border shrink-0">
                <PenTool className="h-14 w-14 text-primary-stitch" />
              </div>
              <div>
                <h3 className="font-headline text-2xl mb-3 text-on-surface">Digital Signature</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">Sign documents legally and securely. Create your signature or upload an image of your physical one.</p>
                <div className="flex gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-500/20">Secure</span>
                  <span className="text-xs font-bold uppercase tracking-widest bg-primary-stitch/10 text-primary-stitch px-4 py-1.5 rounded-full border border-primary-stitch/20">Fast</span>
                </div>
              </div>
            </a>

            <a href="/ocr-pdf/" className="glass-panel ghost-border p-8 rounded-[2rem] hover:bg-surface-container-highest transition-all duration-300 group cursor-pointer block">
              <Search className="h-10 w-10 text-primary-stitch mb-4" />
              <h3 className="font-headline text-xl mb-3 text-on-surface">OCR Search</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Make scanned PDFs searchable and selectable.</p>
            </a>

          </div>
        </section>

        {/* --- Trust & Features Bar --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="glass-panel rounded-[2rem] py-12 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-12 ghost-border">
            
            <div className="flex items-center gap-6 group w-full md:w-auto">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary-stitch ghost-border group-hover:bg-primary-stitch group-hover:text-on-primary transition-all duration-300 shadow-lg">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <div className="font-headline text-xl text-on-surface mb-1">No Watermark</div>
                <p className="text-on-surface-variant text-sm">Clean exports every single time</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group w-full md:w-auto">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary-stitch ghost-border group-hover:bg-primary-stitch group-hover:text-on-primary transition-all duration-300 shadow-lg">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <div className="font-headline text-xl text-on-surface mb-1">Client-Side Engine</div>
                <p className="text-on-surface-variant text-sm">Your files never leave your device</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group w-full md:w-auto">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary-stitch ghost-border group-hover:bg-primary-stitch group-hover:text-on-primary transition-all duration-300 shadow-lg">
                <Download className="h-8 w-8" />
              </div>
              <div>
                <div className="font-headline text-xl text-on-surface mb-1">Instant Download</div>
                <p className="text-on-surface-variant text-sm">Zero waiting time after processing</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest w-full py-16 border-t border-white/5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 mx-auto max-w-7xl">
          <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
            <div className="text-xl font-bold text-slate-100 font-headline">
              PDF Free Editor
            </div>
            <div className="text-sm text-slate-500 opacity-80">
              © 2024 PDF Free Editor. All rights reserved.
            </div>
          </div>
          <div className="flex gap-12">
            <a className="text-sm text-slate-500 hover:text-primary-stitch transition-all" href="#">Privacy</a>
            <a className="text-sm text-slate-500 hover:text-primary-stitch transition-all" href="#">Terms</a>
            <a className="text-sm text-slate-500 hover:text-primary-stitch transition-all" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
