// pages/privacy/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Shield, FileText, EyeOff, Cookie as CookieIcon } from "lucide-react";
import SiteNav from "/src/components/SiteNav.jsx";

function Privacy() {
  return (
    <div className="font-sans bg-gradient-to-br from-primary-50 via-slate-50 to-primary-50 text-on-surface font-headline min-h-screen flex flex-col">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />

      <main className="flex-1">
        {/* Hero / intro */}
        <section className="bg-[#091328]/50 backdrop-blur-xl border border-white/5/80 border-b">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-2">
              Privacy at TechRex
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-3xl">
              At TechRex Free PDF Editor (
              <a
                href="/"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                pdffreeeditor.com
              </a>
              ), your PDFs stay yours. This page explains how we handle files,
              analytics, cookies, and any data related to your use of our free
              PDF tools.
            </p>
          </div>
        </section>

        {/* At-a-glance summary */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.1)] border border-white/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-primary-600" />
                <p className="text-sm font-semibold">No account required</p>
              </div>
              <p className="text-xs text-on-surface-variant">
                Use all tools without creating an account or sharing personal
                details.
              </p>
            </div>
            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.1)] border border-white/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <p className="text-sm font-semibold">Files stay with you</p>
              </div>
              <p className="text-xs text-on-surface-variant">
                Editing and core PDF conversion run in your browser; we don&apos;t
                store your PDFs on our servers.
              </p>
            </div>
            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.1)] border border-white/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <EyeOff className="w-5 h-5 text-primary-600" />
                <p className="text-sm font-semibold">No tracking profiles</p>
              </div>
              <p className="text-xs text-on-surface-variant">
                Analytics are aggregated and used only to understand overall usage,
                not to identify you.
              </p>
            </div>
            <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.1)] border border-white/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <CookieIcon className="w-5 h-5 text-amber-600" />
                <p className="text-sm font-semibold">Minimal cookies</p>
              </div>
              <p className="text-xs text-on-surface-variant">
                Limited cookies for analytics and functionality. You can block them
                and still use the tools.
              </p>
            </div>
          </div>
        </section>

        {/* Main policy content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 space-y-6 text-sm sm:text-base">
          <p className="text-on-surface-variant">
            This Privacy Policy applies to all tools on{" "}
            <strong>pdffreeeditor.com</strong>, including but not limited to{" "}
            <a href="/edit-pdf/" className="text-primary-600 hover:underline">
              Edit PDF
            </a>
            ,{" "}
            <a href="/merge-pdf/" className="text-primary-600 hover:underline">
              Merge PDF
            </a>
            ,{" "}
            <a href="/sign-pdf/" className="text-primary-600 hover:underline">
              Sign PDF
            </a>{" "}
            and our converters (for example{" "}
            <a href="/pdf-to-word/" className="text-primary-600 hover:underline">
              PDF to Word
            </a>{" "}
            and{" "}
            <a href="/pdf-to-image/" className="text-primary-600 hover:underline">
              PDF to Image
            </a>
            ).
          </p>

          <div>
            <h2 className="text-xl font-semibold mt-4 mb-2">1. File handling</h2>
            <p className="mb-3 text-on-surface-variant">
              For most operations, file processing happens directly in your browser
              using client-side technology:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
              <li>
                Your PDFs, images, and documents are processed locally on your
                device for editing, annotating, signing, and saving as PDF.
              </li>
              <li>
                We do <span className="font-semibold">not</span> create a permanent
                copy of your files on our servers for these core editing features.
              </li>
            </ul>
            <p className="mt-3 text-on-surface-variant">
              Some optional conversions (for example exporting a PDF to other file
              types such as Word, PowerPoint, or image formats) may require
              temporary server-side processing to complete the conversion. When
              this happens:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
              <li>
                Files are transmitted over an encrypted connection (HTTPS).
              </li>
              <li>
                Files are processed only for the purpose of completing your
                requested conversion.
              </li>
              <li>
                We do not use your files to build advertising or tracking
                profiles.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">
              2. Personal data & accounts
            </h2>
            <p className="mb-3 text-on-surface-variant">
              TechRex Free PDF Editor is designed to work without user accounts:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
              <li>No sign-up or login is required to use the tools.</li>
              <li>
                We do not ask for your name, address, or payment information when
                you use the editor.
              </li>
              <li>
                The only personal data we receive is what you voluntarily choose to
                send us, for example when you contact us by email.
              </li>
            </ul>
            <p className="mt-3 text-on-surface-variant">
              If you email us, we will see your email address and any information
              you include in the message. We use this only to respond to your
              inquiry and improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">
              3. Analytics & usage data
            </h2>
            <p className="mb-3 text-on-surface-variant">
              We use privacy-conscious analytics (such as Google Analytics with
              IP anonymization) to understand how{" "}
              <strong>pdffreeeditor.com</strong> is used and to improve performance.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
              <li>
                Analytics data is aggregated and does not allow us to identify
                individual users.
              </li>
              <li>
                Typical data points include pages visited, approximate region
                (based on anonymized IP), device type, and browser type.
              </li>
              <li>
                We do <span className="font-semibold">not</span> use analytics to
                track you across other websites.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
            <p className="mb-3 text-on-surface-variant">
              Our site uses minimal cookies to keep things running smoothly:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
              <li>
                <span className="font-semibold">Functional cookies</span> may be
                used to remember basic preferences (for example, last used tool).
              </li>
              <li>
                <span className="font-semibold">Analytics cookies</span> help us
                measure visits and feature usage in an aggregated way.
              </li>
            </ul>
            <p className="mt-3 text-on-surface-variant">
              You can block or clear cookies in your browser settings at any time.
              Most features of TechRex Free PDF Editor will continue to work even
              with cookies disabled.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">
              5. Third-party services
            </h2>
            <p className="mb-3 text-on-surface-variant">
              We may use trusted third-party services for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
              <li>Analytics and performance measurement.</li>
              <li>
                Optional file conversions (for example, converting a PDF to another
                format).
              </li>
            </ul>
            <p className="mt-3 text-on-surface-variant">
              These providers are only allowed to process data on our behalf for
              the specific purpose we use them for (such as analytics or
              conversion) and under appropriate data protection safeguards.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">
              6. Data retention
            </h2>
            <p className="mb-3 text-on-surface-variant">
              Because tools work without accounts, we generally do not maintain
              ongoing profiles or histories of your activity.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
              <li>
                Files processed entirely in your browser are not stored by us.
              </li>
              <li>
                Files sent for optional conversions are kept only as long as needed
                to perform the conversion and deliver the result.
              </li>
              <li>
                Emails and support messages may be stored for a reasonable period
                to help us respond, improve features, and maintain security and
                abuse prevention.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">
              7. Your choices & rights
            </h2>
            <p className="mb-3 text-on-surface-variant">
              Depending on your location, you may have rights such as access,
              correction, or deletion of personal data we hold about you
              (typically limited to support correspondence).
            </p>
            <p className="text-on-surface-variant">
              To exercise these rights, or to ask a question about your privacy,
              email us at{" "}
              <a
                href="mailto:contact@pdffreeeditor.com"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                contact@pdffreeeditor.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:help@pdffreeeditor.com"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                help@pdffreeeditor.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">
              8. Changes to this policy
            </h2>
            <p className="text-on-surface-variant">
              We may update this Privacy Policy from time to time to reflect new
              features, legal requirements, or improvements to our services. When
              we make changes, we will update the &ldquo;Privacy Policy&rdquo;
              page on{" "}
              <a
                href="/"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                pdffreeeditor.com
              </a>
              . We encourage you to review this page periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact</h2>
            <p className="text-on-surface-variant">
              If you have any questions about this Privacy Policy or how TechRex
              Free PDF Editor handles data:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-on-surface-variant">
              <li>
                Visit our{" "}
                <a
                  href="/contact/"
                  className="text-primary-600 hover:text-primary-700 hover:underline"
                >
                  Contact page
                </a>
                .
              </li>
              <li>
                Email{" "}
                <a
                  href="mailto:contact@pdffreeeditor.com"
                  className="text-primary-600 hover:text-primary-700 hover:underline"
                >
                  contact@pdffreeeditor.com
                </a>{" "}
                for general inquiries.
              </li>
              <li>
                Email{" "}
                <a
                  href="mailto:help@pdffreeeditor.com"
                  className="text-primary-600 hover:text-primary-700 hover:underline"
                >
                  help@pdffreeeditor.com
                </a>{" "}
                for privacy or support-related questions.
              </li>
            </ul>
          </div>
        </section>

        {/* Related Tools - Auto Injected */}
        <section className="py-12 bg-[#091328]/50 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 text-on-surface font-headline">Explore more PDF tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium">
              <a href="/compress-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">📉</span>
                <span>Compress PDF</span>
              </a>
              <a href="/pdf-to-word/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">📝</span>
                <span>PDF to Word</span>
              </a>
              <a href="/merge-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">➕</span>
                <span>Merge PDF</span>
              </a>
              <a href="/split-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">✂️</span>
                <span>Split PDF</span>
              </a>
              <a href="/edit-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">✏️</span>
                <span>Edit PDF</span>
              </a>
              <a href="/sign-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">✒️</span>
                <span>Sign PDF</span>
              </a>
              <a href="/ocr-pdf/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">🔍</span>
                <span>OCR PDF</span>
              </a>
              <a href="/pdf-to-image/" className="p-4 bg-[#091328]/50 backdrop-blur-xl border border-white/5 rounded-lg border hover:border-primary-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition flex items-center gap-3">
                <span className="p-2 bg-primary-50 text-primary-600 rounded-md">🖼️</span>
                <span>PDF to Image</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default { Page: Privacy };
