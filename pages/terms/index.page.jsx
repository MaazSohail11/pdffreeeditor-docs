// pages/terms/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";
import SiteNav from "/src/components/SiteNav.jsx";

function Terms() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="mb-4">
          These terms govern your use of TechRex Free PDF Editor (pdffreeeditor.com). By using the
          site, you agree to these terms.
        </p>
        <p className="mb-4">
          Use our tools responsibly. Do not upload or process content that you do not have the right
          to use. The editor runs in your browser and does not upload files to our servers by default.
        </p>
        <p className="mb-4">
          We provide the tools “as is” without warranties. We are not liable for any damages or data
          loss. You are responsible for backups and verifying outputs meet your requirements.
        </p>
        <p>
          For questions, see our <a href="/privacy/" className="text-blue-600 underline">Privacy Policy</a> or
          <a href="/contact/" className="text-blue-600 underline"> Contact</a> page.
        </p>

        {/* Related Tools - Auto Injected */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Explore more PDF tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium">
              <a href="/compress-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">📉</span>
                <span>Compress PDF</span>
              </a>
              <a href="/pdf-to-word/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">📝</span>
                <span>PDF to Word</span>
              </a>
              <a href="/merge-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">➕</span>
                <span>Merge PDF</span>
              </a>
              <a href="/split-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">✂️</span>
                <span>Split PDF</span>
              </a>
              <a href="/edit-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">✏️</span>
                <span>Edit PDF</span>
              </a>
              <a href="/sign-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">✒️</span>
                <span>Sign PDF</span>
              </a>
              <a href="/ocr-pdf/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">🔍</span>
                <span>OCR PDF</span>
              </a>
              <a href="/pdf-to-image/" className="p-4 bg-white rounded-lg border hover:border-blue-400 hover:shadow-sm transition flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-md">🖼️</span>
                <span>PDF to Image</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default { Page: Terms };
