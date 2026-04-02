import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";
import { posts, getPostBySlug } from "/src/blog/posts.js";
const POST = getPostBySlug("edit-pdf-online-guide");

function PostLayout({ post }) {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-on-surface font-headline">
        <Helmet>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
        </Helmet>
        <div className="text-center space-y-4 px-6">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <p className="text-on-surface-variant">The blog post you're looking for doesn't exist.</p>
          <a href="/blog/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary font-semibold hover:scale-105 active:scale-95 transition-all">
            Back to Blog
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#091328]/50 backdrop-blur-xl border border-white/5 text-on-surface font-headline">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />
      <header className={`${post.hero} text-on-primary`}>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-on-primary/80">
            <span>{new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</span>
            <span aria-hidden="true" className="opacity-75">
              |
            </span>
            <span>{post.readTime}</span>
          </div>
          <p className="text-lg mt-4 max-w-3xl text-on-primary/90">{post.excerpt}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        {post.sections.map((sec, idx) => (
          <section key={idx} className="space-y-2">
            <h2 className="text-2xl font-bold">{sec.heading}</h2>
            <p className="text-on-surface-variant leading-relaxed">{sec.body}</p>
            {sec.link && (
              <a
                href={sec.link.href}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
              >
                {sec.link.label}
              </a>
            )}
          </section>
        ))}

        <div className="mt-8">
          <a
            href={post.cta.href}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none text-on-primary font-semibold hover:scale-105 active:scale-95 transition-all"
          >
            {post.cta.label}
          </a>
        </div>

        <div className="pt-8 border-t">
          <h3 className="text-lg font-semibold mb-3">More reads</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((p) => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block rounded-2xl border p-4 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition"
                >
                  <div className="text-sm text-on-surface-variant mb-1">
                    {new Date(p.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                  </div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-on-surface-variant mt-1">{p.excerpt}</div>
                </a>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default { Page: () => <PostLayout post={POST} /> };
