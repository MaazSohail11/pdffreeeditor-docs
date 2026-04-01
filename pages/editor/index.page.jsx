// pages/editor/index.page.jsx
import React, { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import DocumentUploadGateway from "/src/components/DocumentUploadGateway.jsx";
import SiteNav from "/src/components/SiteNav.jsx";
import { stageFilesForEditor } from "/src/utils/editorHandoff.js";

function EditorUploadPage() {
  const [handoffError, setHandoffError] = useState("");

  const handleReady = useCallback(async (pdfFile) => {
    try {
      setHandoffError("");
      if (!pdfFile) return;
      await stageFilesForEditor([pdfFile]);
      window.location.href = "/editor/workspace/";
    } catch (err) {
      console.error("Failed to open editor workspace", err);
      setHandoffError("Could not open the editor. Please try again.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
      </Helmet>
      <SiteNav />
      <main className="max-w-6xl mx-auto px-6 py-14 grid gap-10 lg:grid-cols-5 items-start">
        <div className="space-y-4 lg:col-span-2">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
            Open the PDF editor
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
            Drop your PDF to launch the workspace
          </h1>
          <p className="text-lg text-gray-700">
            Add your file here and we'll load the full editor in the workspace. No signup, no watermark, all in your
            browser.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>- Client-side processing keeps files on your device</li>
            <li>- Edit text, add images/signatures, merge/split pages</li>
            <li>- Works on desktop and mobile</li>
          </ul>
          {handoffError ? (
            <p className="text-sm text-red-600">{handoffError}</p>
          ) : null}
        </div>

        <div className="lg:col-span-3">
          <DocumentUploadGateway
            title="Drop a PDF to open the editor"
            subtitle="Or click to choose a file. Converts DOCX/XLSX/PPTX/Images to PDF automatically."
            onPdfReady={handleReady}
          />
        </div>



      </main>
    </div>
  );
}

export default { Page: EditorUploadPage };
