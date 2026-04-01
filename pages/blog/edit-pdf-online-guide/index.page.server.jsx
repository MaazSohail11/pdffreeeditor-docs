import { getPostBySlug } from "/src/blog/posts.js";

export async function prerender() {
  return [{ url: "/blog/edit-pdf-online-guide/" }];
}

const post = getPostBySlug("edit-pdf-online-guide");

export const seo = post
  ? {
      title: post.title,
      description: post.excerpt,
    }
  : {
      title: "Article not found",
      description: "This blog post could not be located.",
    };
