// pages/privacy/index.page.server.jsx

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  name: "Privacy Policy – TechRex Free PDF Editor",
  url: "https://pdffreeeditor.com/privacy/",
  description:
    "Learn how TechRex Free PDF Editor handles your PDFs, files, cookies, and analytics. No account required and core PDF tools run directly in your browser.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechRex Free PDF Editor",
  url: "https://pdffreeeditor.com/",
  sameAs: [],
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pdffreeeditor.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: "https://pdffreeeditor.com/privacy/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you store my PDFs on your servers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core editing and many conversions run directly in your browser, so we do not store your PDFs on our servers for those features. Some optional conversions may require temporary server-side processing to complete your requested task.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an account to use TechRex Free PDF Editor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No account is required. You can use TechRex Free PDF Editor without signing up, and we do not collect personal information just to use the tools.",
      },
    },
    {
      "@type": "Question",
      name: "What analytics do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use privacy-conscious analytics, such as Google Analytics with IP anonymization, to understand overall site usage and improve performance. Data is aggregated and not used to create personal profiles.",
      },
    },
  ],
};

export const seo = {
  title: "Privacy Policy | TechRex Free PDF Editor",
  description:
    "Read the privacy policy for TechRex Free PDF Editor. Learn how your PDFs are processed, what data is stored, how cookies and analytics work, and how we protect your privacy.",
  structuredData: [privacySchema, organizationSchema, breadcrumbSchema, faqSchema],
};
