import React, { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Menu,
  X,
  FileText,
  Edit3,
  Layers,
  SplitSquareVertical,
  PenTool,
  Image as ImageIcon,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SiteNav from "/src/components/SiteNav.jsx";

export function Page() {
  const tools = [
    {
      key: "edit",
      title: "Edit PDF (Text)",
      description: "Edit text in your PDF - change fonts, sizes, colors, and alignment.",
      path: "/edit-pdf/",
      icon: <Edit3 className="h-8 w-8" />,
      tags: ["edit pdf", "edit text"],
      category: "Edit & Sign",
    },
    {
      key: "add-image",
      title: "Add Image",
      description: "Insert pictures or logos. Drag to resize/rotate.",
      path: "/add-image-pdf/",
      icon: <ImageIcon className="h-8 w-8" />,
      tags: ["add image", "insert logo"],
      category: "Edit & Sign",
    },
    {
      key: "annotate",
      title: "Annotate",
      description: "Highlight, underline, and add notes or callouts.",
      path: "/annotate-pdf/",
      icon: <PenTool className="h-8 w-8" />,
      tags: ["highlight", "annotate pdf"],
      category: "Edit & Sign",
    },
    {
      key: "sign",
      title: "Sign PDF",
      description: "Draw, type, upload a signature and place it anywhere.",
      path: "/sign-pdf/",
      icon: <PenTool className="h-8 w-8" />,
      tags: ["sign pdf", "esign"],
      category: "Edit & Sign",
    },
    {
      key: "merge",
      title: "Merge PDF",
      description: "Combine multiple PDFs into one seamless document.",
      path: "/merge-pdf/",
      icon: <Layers className="h-8 w-8" />,
      tags: ["merge pdf", "combine"],
      category: "Organize PDF",
    },
    {
      key: "split",
      title: "Split PDF",
      description: "Extract pages or divide files into separate parts.",
      path: "/split-pdf/",
      icon: <SplitSquareVertical className="h-8 w-8" />,
      tags: ["split pdf", "extract pages"],
      category: "Organize PDF",
    },
    {
      key: "compress",
      title: "Compress PDF",
      description: "Reduce file size without losing visual quality.",
      path: "/compress-pdf/",
      icon: <Zap className="h-8 w-8" />,
      tags: ["compress pdf", "reduce size"],
      category: "Optimize PDF",
    },
    {
      key: "ocr",
      title: "OCR Searchable",
      description: "Make scanned PDFs searchable and selectable.",
      path: "/ocr/",
      icon: <Search className="h-8 w-8" />,
      tags: ["ocr", "searchable pdf"],
      category: "Optimize PDF",
    },
    {
      key: "word-to-pdf",
      title: "Word to PDF",
      description: "Convert DOCX files with precision.",
      path: "/word-to-pdf/",
      icon: <FileText className="h-8 w-8" />,
      tags: ["word to pdf", "docx to pdf"],
      category: "Convert to PDF",
    },
    {
      key: "excel-to-pdf",
      title: "Excel to PDF",
      description: "Format spreadsheets for sharing.",
      path: "/excel-to-pdf/",
      icon: <Layers className="h-8 w-8" />,
      tags: ["excel to pdf", "xlsx to pdf"],
      category: "Convert to PDF",
    },
    {
      key: "image-to-pdf",
      title: "Image to PDF",
      description: "Combine JPG/PNG into a single PDF.",
      path: "/image-to-pdf/",
      icon: <ImageIcon className="h-8 w-8" />,
      tags: ["image to pdf", "jpg to pdf"],
      category: "Convert to PDF",
    },
    {
      key: "html-to-pdf",
      title: "HTML to PDF",
      description: "Turn webpages or HTML snippets into neat PDFs.",
      path: "/html-to-pdf/",
      icon: <FileText className="h-8 w-8" />,
      tags: ["html to pdf", "webpage to pdf"],
      category: "Convert to PDF",
    },
    {
      key: "pdf-to-word",
      title: "PDF to Word",
      description: "Convert PDF to editable DOCX.",
      path: "/pdf-to-word/",
      icon: <FileText className="h-8 w-8" />,
      tags: ["pdf to word"],
      category: "Convert From PDF",
    },
    {
      key: "pdf-to-image",
      title: "PDF to Image",
      description: "Export PDF pages as JPG or PNG images.",
      path: "/pdf-to-image/",
      icon: <ImageIcon className="h-8 w-8" />,
      tags: ["pdf to jpg", "pdf to image"],
      category: "Convert From PDF",
    },
    {
      key: "pdf-to-excel",
      title: "PDF to Excel",
      description: "Extract tables from PDF into Excel for analysis.",
      path: "/pdf-to-excel/",
      icon: <Layers className="h-8 w-8" />,
      tags: ["pdf to excel"],
      category: "Convert From PDF",
    }
  ];

  const initialQ =
    (typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("q") : "") || "";
  const [query, setQuery] = useState(initialQ);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPop = () => {
      const current = new URLSearchParams(window.location.search).get("q") || "";
      setQuery(current);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const onSearchChange = (val) => {
    setQuery(val);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (val) url.searchParams.set("q", val);
      else url.searchParams.delete("q");
      window.history.replaceState(null, "", url.toString());
    }
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return tools;
    const q = query.toLowerCase();
    return tools.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        (t.tags || []).some((tag) => tag.toLowerCase().includes(q))
    );
  }, [query, tools]);

  const categoriesOrder = ["Organize PDF", "Optimize PDF", "Edit & Sign", "Convert to PDF", "Convert From PDF"];

  const categories = useMemo(() => {
    const map = new Map();
    for (const t of filtered) {
      if (!map.has(t.category)) map.set(t.category, []);
      map.get(t.category).push(t);
    }
    
    // Sort based on categoriesOrder array 
    return Array.from(map.entries()).sort((a, b) => {
       const indexA = categoriesOrder.indexOf(a[0]);
       const indexB = categoriesOrder.indexOf(b[0]);
       return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
    });
  }, [filtered]);

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary min-h-screen digital-obsidian flex flex-col">
      <Helmet>
        <title>Lumina PDF | All PDF Tools</title>
      </Helmet>
      
      <SiteNav />

      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary via-white to-primary-container bg-clip-text text-transparent">
            All PDF Tools
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-medium mb-12">
            Choose a tool below to transform, secure, or modify your document.
          </p>

          {/* Search bar inside Hero */}
          <div className="max-w-2xl mx-auto relative rounded-2xl bg-surface-container-high/40 p-1 shadow-[0_0_30px_rgba(139,92,246,0.1)] border border-white/5 backdrop-blur-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-stitch h-5 w-5" />
              <input
                type="search"
                value={query}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-background/50 border-none text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary outline-none text-lg transition-all"
                placeholder="Search tools (edit text, merge, convert...)"
                aria-label="Search tools"
              />
            </div>
          </div>
        </header>

        <div className="space-y-20">
          {categories.map(([cat, items]) => (
            <section key={cat}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-headline text-slate-100">{cat}</h2>
                <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((t) => (
                  <a
                    key={t.key}
                    href={t.path}
                    className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 cursor-pointer no-underline border border-transparent hover:border-l-primary border-l-2"
                  >
                    <div className="text-primary drop-shadow-[0_0_8px_rgba(186,158,255,0.4)]">
                      {t.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-on-surface mb-1 font-headline">{t.title}</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{t.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}

          {!categories.length && (
            <div className="text-center py-20 text-on-surface-variant">
              No tools match "{query}". Try searching for specific tools like "edit", "merge", or "compress".
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#000000] w-full mt-auto py-12 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 mx-auto max-w-7xl border-t border-outline-variant/10">
        <div className="mb-6 md:mb-0">
          <div className="text-lg font-bold text-slate-100 font-headline mb-2">PDF Free Editor</div>
          <p className="text-slate-500 text-sm font-body">© 2024 PDF Free Editor. All rights reserved.</p>
        </div>
        <div className="flex gap-8 items-center text-sm font-body">
          <a className="text-slate-500 hover:text-slate-100 transition-all" href="/privacy/">Privacy</a>
          <a className="text-slate-500 hover:text-slate-100 transition-all" href="/terms/">Terms</a>
          <a className="text-slate-500 hover:text-slate-100 transition-all" href="/contact/">Contact</a>
        </div>
      </footer>
    </div>
  );
}

// Preserve existing component interface if any routing configuration depends on it implicitly. Assuming defaults.
