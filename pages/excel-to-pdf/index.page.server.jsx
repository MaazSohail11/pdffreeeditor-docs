// pages/excel-to-pdf/index.page.server.jsx
const base = "https://pdffreeeditor.com";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${base}/excel-to-pdf/#howto`,
  name: "Convert Excel or CSV to PDF Online (Free)",
  description:
    "Upload an Excel spreadsheet (XLS/XLSX) or CSV file and convert it to PDF online for free. No signup, no watermark, and instant download.",
  totalTime: "PT1M",
  tool: ["Web browser", "TechRex Free PDF Editor"],
  step: [
    {
      "@type": "HowToStep",
      name: "Upload Excel/CSV file",
      text: "Open the Excel/CSV to PDF converter, then drag and drop your XLS, XLSX, or CSV file.",
      url: `${base}/excel-to-pdf/#step-upload`
    },
    {
      "@type": "HowToStep",
      name: "Review tables and page breaks",
      text: "Check column widths, orientation, and page breaks so your tables fit nicely on each PDF page.",
      url: `${base}/excel-to-pdf/#step-review`
    },
    {
      "@type": "HowToStep",
      name: "Export and download PDF",
      text: "Click Convert & Download to export your spreadsheet to PDF. The file downloads instantly with no watermark.",
      url: `${base}/excel-to-pdf/#step-download`
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Excel/CSV to PDF converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. The Excel and CSV to PDF converter is 100% free with no signup, no trial, and no watermark on your exported tables or reports."
      }
    },
    {
      "@type": "Question",
      name: "Which formats can I convert to PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You can upload Excel spreadsheets in XLS or XLSX format as well as CSV files. All of these can be converted to standard PDF files."
      }
    },
    {
      "@type": "Question",
      name: "Will my sheet layout and page breaks be preserved in the PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The converter aims to preserve your table layout, headers, and page breaks as closely as possible. For best results, review column widths and print area before exporting and check the PDF preview."
      }
    },
    {
      "@type": "Question",
      name: "Is it safe to convert spreadsheets with sensitive data?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Where possible, conversion runs locally in your browser so files stay on your device. For any required network processing, files are sent over encrypted TLS connections and are not stored permanently."
      }
    },
    {
      "@type": "Question",
      name: "Does the Excel/CSV to PDF converter work on Mac, Windows, and mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can use the converter on Windows, macOS, Linux, iOS, and Android with modern browsers like Chrome, Safari, Edge, or Firefox."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "Excel/CSV to PDF", item: `${base}/excel-to-pdf/` }
  ]
};

const webappSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${base}/excel-to-pdf/#app`,
  name: "Excel & CSV to PDF Converter — TechRex Free PDF Editor",
  url: `${base}/excel-to-pdf/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Online Excel and CSV to PDF converter. Turn XLS, XLSX, and CSV spreadsheets into clean, shareable PDFs for free with no signup and no watermark.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

export const seo = {
  // Target head terms: "Excel to PDF converter", "XLSX to PDF", "CSV to PDF online"
  title: "Excel/CSV to PDF Converter — Free XLSX to PDF Online (No Signup)",
  description:
    "Convert Excel spreadsheets (XLS/XLSX) and CSV files to PDF online for free. No signup, no watermark, and instant download. Perfect for reports, invoices, and data tables.",
  canonical: `${base}/excel-to-pdf/`,
  robots: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  og: {
    type: "website",
    url: `${base}/excel-to-pdf/`,
    title: "Excel/CSV to PDF Converter — Free Online",
    description:
      "Turn Excel and CSV files into clean, shareable PDFs. 100% free, private, and watermark-free.",
    image: `${base}/fpe-og-1200x630.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Excel to PDF Converter — XLSX & CSV to PDF",
    description:
      "Upload a spreadsheet and download a PDF in seconds. No account, no watermark.",
    image: `${base}/fpe-og-1200x630.png`
  },
  hreflang: [
    { lang: "en", url: `${base}/excel-to-pdf/` },
    { lang: "x-default", url: `${base}/excel-to-pdf/` }
  ],
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webappSchema]
};
