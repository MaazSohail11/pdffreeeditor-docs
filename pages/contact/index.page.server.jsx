// pages/contact/index.page.server.jsx

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact TechRex Free PDF Editor",
  description:
    "Contact TechRex Free PDF Editor for support, feedback, partnerships, and general questions about our free online PDF tools.",
  url: "https://pdffreeeditor.com/contact/",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechRex Free PDF Editor",
  url: "https://pdffreeeditor.com/",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "help@pdffreeeditor.com",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@pdffreeeditor.com",
      availableLanguage: ["en"],
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pdffreeeditor.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://pdffreeeditor.com/contact/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I contact TechRex Free PDF Editor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For general questions, email contact@pdffreeeditor.com. For technical issues or bug reports, email help@pdffreeeditor.com.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to get help with a PDF problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email help@pdffreeeditor.com with a short description of the issue, the tool you used, your browser and device, and any relevant screenshots or sample files.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I learn more about privacy and how my files are handled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can review our Privacy Policy and Terms of Use on pdffreeeditor.com for details on how files and personal data are handled.",
      },
    },
  ],
};

export const seo = {
  title: "Contact TechRex Free PDF Editor — Support & General Inquiries",
  description:
    "Contact TechRex Free PDF Editor for support, bug reports, feedback, and general questions about our free online PDF tools. Email contact@pdffreeeditor.com or help@pdffreeeditor.com.",
  structuredData: [contactSchema, organizationSchema, breadcrumbSchema, faqSchema],
};
