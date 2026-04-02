import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/tools/', label: 'Tools' },
    { href: '/compress-pdf/', label: 'Compress' },
    { href: '/split-pdf/', label: 'Split' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl shadow-[0_0_20px_rgba(139,92,246,0.2)] flex justify-between items-center px-6 md:px-12 py-6 max-w-full font-body border-b border-white/5">
        <a href="/" className="text-xl font-bold tracking-tighter text-slate-100 font-headline hover:opacity-80 transition-opacity">
          PDF Free Editor
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link.href} className="text-on-surface-variant font-headline font-bold hover:text-primary transition-colors duration-300" href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="/editor/" className="bg-gradient-to-br from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-bold primary-glow transition-all active:scale-95 duration-200 shadow-xl shadow-primary/20">
            Open Editor
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-[88px] left-0 w-full bg-background border-b border-white/5 py-4 px-6 md:hidden z-40 flex flex-col gap-4 shadow-2xl">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-on-surface text-lg font-bold">
              {link.label}
            </a>
          ))}
          <a href="/editor/" className="w-full text-center bg-gradient-to-br from-primary to-primary-dim text-on-primary px-8 py-4 rounded-full font-bold mt-2">
            Open Editor
          </a>
        </div>
      )}
    </>
  );
}
