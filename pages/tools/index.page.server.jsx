// pages/tools/index.page.server.jsx

const baseUrl = "https://pdffreeeditor.com";

const toolItems = [
  { name: "Edit PDF (Text)", url: `${baseUrl}/edit-pdf/` },
  { name: "Add Image to PDF", url: `${baseUrl}/add-image-pdf/` },
  { name: "Annotate & Highlight PDF", url: `${baseUrl}/annotate-pdf/` },
  { name: "Merge PDF", url: `${baseUrl}/merge-pdf/` },
  { name: "Split PDF", url: `${baseUrl}/split-pdf/` },
  { name: "Sign PDF", url: `${baseUrl}/sign-pdf/` },
  { name: "Compress PDF", url: `${baseUrl}/compress-pdf/` },
  { name: "Word to PDF", url: `${baseUrl}/word-to-pdf/` },
  { name: "PPTX to PDF", url: `${baseUrl}/pptx-to-pdf/` },
  { name: "Excel/CSV to PDF", url: `${baseUrl}/excel-to-pdf/` },
  { name: "Image to PDF", url: `${baseUrl}/image-to-pdf/` },
  { name: "HTML to PDF", url: `${baseUrl}/html-to-pdf/` },
  { name: "PDF to Word", url: `${baseUrl}/pdf-to-word/` },
  { name: "PDF to PPTX", url: `${baseUrl}/pdf-to-pptx/` },
  { name: "PDF to Excel/CSV", url: `${baseUrl}/pdf-to-excel/` },
  { name: "PDF to Image", url: `${baseUrl}/pdf-to-image/` },
  { name: "PDF to HTML", url: `${baseUrl}/pdf-to-html/` },
  { name: "Open PDF Editor", url: `${baseUrl}/editor/` },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free online PDF tools by TechRex",
  itemListElement: toolItems.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: tool.url,
    name: tool.name,
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free PDF Tools - Online Editor, Converter, Merger & Signer",
  url: `${baseUrl}/tools/`,
  description:
    "Browse all free online PDF tools from TechRex: edit text, add images, annotate, merge, split, sign, compress, and convert PDF to Word, Excel, PowerPoint, images, and HTML.",
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "TechRex Free PDF Editor",
    url: baseUrl,
  },
};

export const seo = {
  title:
    "Free PDF Tools - Edit, Annotate, Merge, Split, Sign & Convert Online",
  description:
    "All free PDF tools in one place: edit PDF text, add images, annotate, merge, split, sign, compress, and convert PDF to Word, Excel, PowerPoint, images, and HTML. 100% free, no signup, no watermark.",
  structuredData: [webPageSchema, itemListSchema],
};
