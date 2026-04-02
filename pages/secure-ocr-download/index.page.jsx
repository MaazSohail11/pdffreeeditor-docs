import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Download, AlertTriangle, ArrowLeft, ShieldCheck, Lock, CheckCircle2, Clock } from "lucide-react";
import SiteNav from "/src/components/SiteNav.jsx";
import { loadBlob } from "/src/utils/blobStorage.js";
import { incrementPdfExportCount } from "/src/utils/pdfUsageCounter.js";

// Helper to download blob
const triggerDownload = (blob, name) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
};

function SecureDownloadPage() {
    const [fileData, setFileData] = useState(null);
    const [error, setError] = useState("");
    const [downloading, setDownloading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { }
    }, []);

    useEffect(() => {
        // Load from IDB
        loadBlob()
            .then((data) => {
                if (data && data.blob) {
                    setFileData(data);
                    // Start progress animation
                    let progress = 0;
                    const interval = setInterval(() => {
                        progress += 1.4; // 100 / 7 seconds ≈ 14.3% per second, check every 100ms
                        if (progress >= 100) {
                            setLoadingProgress(100);
                            setIsReady(true);
                            clearInterval(interval);
                        } else {
                            setLoadingProgress(Math.floor(progress));
                        }
                    }, 100);

                    return () => clearInterval(interval);
                } else {
                    setError("No file found in secure storage. The link may have expired or the file was deleted.");
                }
            })
            .catch(() => setError("Failed to retrieve file from storage."));
    }, []);

    const handleDownload = async () => {
        const name = fileData?.filename || fileData?.name || "document.pdf";
        if (fileData?.blob) {
            setDownloading(true);
            setTimeout(async () => {
                // Count export
                try { await incrementPdfExportCount(); } catch { }

                triggerDownload(fileData.blob, name);
                setDownloading(false);
            }, 300);
        }
    };

    return (
        <div className="font-sans flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-on-surface font-headline">
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2161679270376605" crossOrigin="anonymous" />
            </Helmet>
            <SiteNav />

            <div className="flex-1 flex flex-col items-center justify-center p-6 py-16">
                <div className="max-w-2xl w-full">
                    {error ? (
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5-2 border-amber-200 rounded-3xl shadow-[0_0_25px_rgba(139,92,246,0.2)]-2xl p-10 text-center space-y-6">
                            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.2)]">
                                <AlertTriangle className="w-10 h-10" />
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-3xl font-extrabold text-on-surface font-headline">Download Link Expired</h2>
                                <p className="text-lg text-on-surface-variant leading-relaxed max-w-md mx-auto">
                                    {error}
                                </p>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="/ocr-pdf/"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-on-primary font-bold px-8 py-4 rounded-full shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]-xl transition-all transform hover:scale-105"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to OCR Tool
                                </a>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <div className="flex flex-wrap justify-center gap-4 text-sm text-outline">
                                    <span className="flex items-center gap-1.5">
                                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                        Secure Processing
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Lock className="w-4 h-4 text-emerald-600" />
                                        Private Storage
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-[#091328]/50 backdrop-blur-xl border border-white/5-2 border-emerald-200 rounded-3xl shadow-[0_0_25px_rgba(139,92,246,0.2)]-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-center text-on-primary">
                                <div className="mx-auto w-24 h-24 bg-[#091328]/50 backdrop-blur-xl border border-white/5/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 animate-pulse shadow-[0_0_25px_rgba(139,92,246,0.2)]">
                                    <Download className="w-12 h-12" />
                                </div>
                                <h1 className="text-4xl font-extrabold mb-2">
                                    Your File is Ready!
                                </h1>
                                <p className="text-emerald-50 text-lg">
                                    Secure OCR processing complete
                                </p>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-white/5 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-outline uppercase tracking-wide font-semibold mb-1">Ready to Download</p>
                                            <p className="text-xl font-bold text-on-surface font-headline break-all">
                                                {fileData?.filename || fileData?.name || "document.pdf"}
                                            </p>
                                            {fileData?.blob && (
                                                <p className="text-sm text-outline mt-1">
                                                    Size: {(fileData.blob.size / 1024 / 1024).toFixed(2)} MB
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {!isReady ? (
                                    <div className="space-y-4">
                                        <div className="digital-obsidian text-on-surface border-2 border-primary-200 rounded-2xl p-6">
                                            <div className="flex items-center justify-center gap-3 mb-4">
                                                <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                                                <p className="text-lg font-semibold text-on-surface">Preparing your secure download...</p>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm font-medium text-on-surface-variant">
                                                    <span>Processing</span>
                                                    <span>{loadingProgress}%</span>
                                                </div>
                                                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 transition-all duration-300 ease-out rounded-full"
                                                        style={{ width: `${loadingProgress}%` }}
                                                    />
                                                </div>
                                                <p className="text-xs text-outline text-center mt-2">
                                                    Verifying file integrity and preparing secure download link...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={handleDownload}
                                        disabled={downloading}
                                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-emerald-400 disabled:to-teal-400 text-on-primary rounded-2xl font-bold text-xl py-5 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]-xl transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 disabled:cursor-not-allowed"
                                    >
                                        <Download className={`w-7 h-7 ${downloading ? 'animate-bounce' : ''}`} />
                                        {downloading ? "Downloading..." : "Download File Now"}
                                    </button>
                                )}

                                <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-4">
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                        <div className="text-sm">
                                            <p className="font-semibold text-primary-900 mb-1">Secure Link Policy</p>
                                            <p className="text-primary-700">
                                                This download link expires when you leave this page. Your file is stored privately in your browser for security.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/5">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="space-y-1">
                                            <div className="mx-auto w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                                                <ShieldCheck className="w-5 h-5" />
                                            </div>
                                            <p className="text-xs font-semibold text-on-surface-variant">Secure</p>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="mx-auto w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                                                <Lock className="w-5 h-5" />
                                            </div>
                                            <p className="text-xs font-semibold text-on-surface-variant">Private</p>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="mx-auto w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <p className="text-xs font-semibold text-on-surface-variant">No Watermark</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <ins
                                        className="adsbygoogle"
                                        style={{ display: "block" }}
                                        data-ad-client="ca-pub-2161679270376605"
                                        data-ad-slot="1750750617"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default { Page: SecureDownloadPage };
