// pages/blog/index.page.server.jsx
const published = new Date().toISOString().slice(0, 10);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "PDF Starter Guide: Edit, Merge, Split, Sign, and Add Images (Free, No Signup)",
  description:
    "A beginner-friendly PDF starter guide: learn how to edit text, add images, sign, merge, and split PDFs online for free using TechRex.",
  datePublished: published,
  dateModified: published,
  author: { "@type": "Organization", name: "TechRex" },
  publisher: {
    "@type": "Organization",
    name: "TechRex Free PDF Editor",
    logo: { "@type": "ImageObject", url: "https://pdffreeeditor.com/logo.png" },
  },
  mainEntityOfPage: "https://pdffreeeditor.com/blog/",
  url: "https://pdffreeeditor.com/blog/",
  image: "https://pdffreeeditor.com/logo.png",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pdffreeeditor.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://pdffreeeditor.com/blog/" },
  ],
};

export const seo = {
  title: "PDF Starter Guide: Edit, Merge, Split, Sign, Add Images | TechRex Blog",
  description:
    "Learn the basics of working with PDFs: edit text, add images, sign, merge, and split - all free and private in your browser.",
  structuredData: [articleSchema, breadcrumbSchema],};



