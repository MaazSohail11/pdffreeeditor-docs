// pages/edit-pdf/index.page.server.jsx

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to edit PDF text online free (no signup, no watermark)",
  description:
    "Edit PDF text online free in your browser while keeping the same font, background and layout. No signup, no watermark and your files never leave your device.",
  totalTime: "PT2M",
  tool: ["Web browser", "PDF Free Editor"],
  step: [
    {
      "@type": "HowToStep",
      url: "https://pdffreeeditor.com/edit-pdf/#step-upload",
      name: "Open the editor & upload",
      text: "Open the editor, then drag and drop your PDF from your device. Processing runs locally in your browser for privacy; the file is not uploaded to a server."
    },
    {
      "@type": "HowToStep",
      url: "https://pdffreeeditor.com/edit-pdf/#step-edit",
      name: "Click text to edit or add a text box",
      text: "Click detected text to edit it directly or add a new text box. Adjust font size, weight, alignment and colour while keeping your fonts and layout wherever possible."
    },
    {
      "@type": "HowToStep",
      url: "https://pdffreeeditor.com/edit-pdf/#step-download",
      name: "Download — no watermark",
      text: "Download the updated file as a clean PDF with your edited text, no watermark, no signup and no subscription."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will the fonts and background stay the same when I edit PDF text online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The editor updates the text layer in your PDF and keeps the original fonts, background and layout wherever the file provides that information. Only the words you change are updated."
      }
    },
    {
      "@type": "Question",
      name: "Is this PDF text editor free and without signup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can edit PDF text online free with no signup, no trial, no email required and no watermark on your downloaded documents."
      }
    },
    {
      "@type": "Question",
      name: "Will my PDF be uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Editing runs entirely in your browser using client-side processing, so your PDF stays on your own device and is not stored on our servers."
      }
    },
    {
      "@type": "Question",
      name: "Why can’t I edit some text in my PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some PDFs are flattened or scanned images, which means there is no editable text layer. In those cases, you can add a new text box on top or use a PDF to Word converter for deeper editing."
      }
    },
    {
      "@type": "Question",
      name: "Can I change font and size when I edit text?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can change size, weight, alignment and colour for text you add. Existing text will try to match the PDF’s font information wherever possible so your layout still looks consistent."
      }
    },
    {
      "@type": "Question",
      name: "Does it work on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The PDF text editor works in modern mobile browsers on iOS and Android, so you can pinch-zoom, tap text to edit and download updated files on the go."
      }
    },
    {
      "@type": "Question",
      name: "Are there any limits, watermarks or subscriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are no watermarks, subscriptions or hidden trials. You can edit PDF text online free. Very large files may depend on your device’s memory and browser performance."
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
      name: "Edit PDF Text",
      item: "https://pdffreeeditor.com/edit-pdf/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PDF Free Editor — Edit PDF Text Online Free",
  url: "https://pdffreeeditor.com/edit-pdf/",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0" },
  logo: "https://pdffreeeditor.com/logo.png"
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Edit PDF Text Online Free — Same Font, No Signup, No Watermark",
  description:
    "Edit PDF text online free while keeping the same font, background and layout. This PDF text editor runs in your browser, requires no signup, adds no watermark and keeps your files on your device.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pdffreeeditor.com/edit-pdf/"
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
    "Edit PDF Text Online Free — Same Font, No Signup, No Watermark",
  description:
    "Use this PDF text editor online free to edit text in a PDF while keeping the same font, background and layout. Edit PDF text online free without signup, without watermark and with files staying on your device.",
  canonical: "https://pdffreeeditor.com/edit-pdf/",
  structuredData: [howToSchema, faqSchema, breadcrumbSchema, webAppSchema, articleSchema]
};
