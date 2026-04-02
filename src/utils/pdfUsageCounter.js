export const PDF_USAGE_BASELINE = 50000;
export function subscribeToPdfUsageCount(cb) {
  cb(PDF_USAGE_BASELINE + 123);
  return () => {};
}
export function incrementPdfUsageCount() {}
export function incrementPdfExportCount() {}
