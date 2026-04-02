// pages/blog/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import SiteNav from "/src/components/SiteNav.jsx";
import { posts } from "/src/blog/posts.js";

function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#091328]/50 text-on-surface font-headline">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      <header className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-600 to-purple-600 text-on-primary">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 bg-[#091328]/50 backdrop-blur-xl border border-white/5/10 px-3 py-1 rounded-full text-sm">
              <BookOpen className="h-4 w-4" /> PDF Tips, Workflows, and Guides
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              PDF Playbook: Faster edits, smaller files, cleaner signatures.
            </h1>
            <p className="text-lg text-on-primary/85">
              Curated how-tos for editing, annotating, compressing, merging, and signing PDFs — all client-side, no signups.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-[#091328]/50 backdrop-blur-xl border border-white/5/20 -z-10" />
            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
              <h2 className="text-xl font-semibold mb-3">What’s inside</h2>
              <ul className="space-y-2 text-on-primary/90 text-sm">
                <li>• Edit and annotate without breaking layouts</li>
                <li>• Shrink PDFs without wrecking image quality</li>
                <li>• Sign securely with zero uploads</li>
                <li>• Merge and split smarter for cleaner docs</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-2xl border shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]-xl transition overflow-hidden flex flex-col"
              rel="bookmark"
            >
              <div className={`${post.hero} h-32`} />
              <div className="p-6 flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {post.readTime}
                  </span>
                  <span>{new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</span>
                </div>
                <h2 className="text-lg font-semibold group-hover:text-primary-600 transition">
                  {post.title}
                </h2>
                <p className="text-sm text-on-surface-variant flex-1">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 text-[11px] text-on-surface-variant">
                  {post.tags.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                      <Tag className="h-3 w-3" /> {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-3 flex items-center justify-between text-sm font-semibold text-primary-600 border-t">
                Read article <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default { Page: BlogIndex };
