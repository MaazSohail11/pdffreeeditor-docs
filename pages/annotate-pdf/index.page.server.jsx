// pages/annotate-pdf/index.page.server.jsx

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to annotate a PDF online free",
    description:
      "Annotate PDF online free in your browser. Highlight text, draw markup and add notes without signup, watermark or uploading your file to a server.",
    totalTime: "PT2M",
    tool: ["Web browser", "PDF Free Editor — Annotate PDF"],
    step: [
      {
        "@type": "HowToStep",
        url: "https://pdffreeeditor.com/annotate-pdf/#step-upload",
        name: "Upload your PDF",
        text: "Open the PDF annotator and upload your document from your device. The PDF is opened directly in your browser and is not uploaded to a server."
      },
      {
        "@type": "HowToStep",
        url: "https://pdffreeeditor.com/annotate-pdf/#step-annotate",
        name: "Highlight text and add notes",
        text: "Use the highlighter, drawing and note tools to mark important sections, underline or circle areas and drop sticky note comments anywhere on the page."
      },
      {
        "@type": "HowToStep",
        url: "https://pdffreeeditor.com/annotate-pdf/#step-download",
        name: "Export the annotated PDF",
        text: "When you finish annotating, export and download a new PDF that contains your highlights and notes with no watermark and no signup required."
      }
    ]
  };
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this PDF annotator free and without signup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can annotate PDF online free without signup, account creation, trial or subscription. Simply open the tool, upload your file, add annotations and download the result."
        }
      },
      {
        "@type": "Question",
        name: "Will my PDF be uploaded to your server when I annotate it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The PDF annotator runs entirely in your browser and processes the file on your device using client-side code. Your document is not stored on our servers by default."
        }
      },
      {
        "@type": "Question",
        name: "Can I just highlight text in a PDF online with this tool?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The tool includes a highlighter so you can mark important text in your PDF, as well as drawing and comment tools for more detailed annotations."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between annotating and editing a PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Annotating adds layers on top of your PDF such as highlights, drawings and notes. Editing changes the base text or layout. This page is for annotation; use the Edit PDF Text tool if you want to change the actual words."
        }
      },
      {
        "@type": "Question",
        name: "Does the annotated PDF contain a watermark?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Exported files contain your annotations but do not include any watermarks or branding from PDF Free Editor."
        }
      },
      {
        "@type": "Question",
        name: "Can I annotate PDFs on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can open the Annotate PDF tool in a modern browser on iOS or Android, zoom into areas you want to highlight and tap to add notes or markup."
        }
      }
    ]
  };
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pdffreeeditor.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://pdffreeeditor.com/tools/"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Annotate PDF Online",
        item: "https://pdffreeeditor.com/annotate-pdf/"
      }
    ]
  };
  
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PDF Free Editor — Annotate PDF Online",
    url: "https://pdffreeeditor.com/annotate-pdf/",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
    logo: "https://pdffreeeditor.com/logo.png"
  };
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Annotate PDF Online Free — Highlight & Add Notes (No Signup, No Watermark)",
    description:
      "Annotate PDF online free in your browser. Highlight text, draw markup and add sticky notes to your documents without signup, without watermark and without uploading your files to a server.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pdffreeeditor.com/annotate-pdf/"
    },
    author: {
      "@type": "Organization",
      name: "TechRex"
    },
    publisher: {
      "@type": "Organization",
      name: "TechRex",
      logo: {
        "@type": "ImageObject",
        url: "https://pdffreeeditor.com/logo.png"
      }
    }
  };
  
  export const seo = {
    title:
      "Annotate PDF Online Free — Highlight & Add Notes (No Signup, No Watermark)",
    description:
      "Use this lightweight PDF annotator to highlight PDF text online, draw markup and add notes in your browser. Annotate PDF online free with no signup, no watermark and files staying on your device.",
    canonical: "https://pdffreeeditor.com/annotate-pdf/",
    structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema]
  };
  