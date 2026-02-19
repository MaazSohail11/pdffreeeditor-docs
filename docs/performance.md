# Performance

> What affects processing time, known limits, and tips for getting the best results from PDF Free Editor.

---

## What Affects Processing Time

Because all features run **entirely in your browser**, performance depends on your device and the document itself:

| Factor | Impact |
|--------|--------|
| **File size** | Larger files take longer to parse and render. A 50 MB scan-heavy PDF will be slower than a 500 KB text memo. |
| **Page count** | More pages = more rendering work, especially for compression and OCR. |
| **Image density** | Scanned PDFs (each page is a full-resolution image) are heavier to process than digital/text PDFs. |
| **Device hardware** | A modern laptop processes faster than an older phone. Chrome/Edge tend to be the fastest browsers for canvas-heavy work. |
| **Browser memory** | Large files need more RAM. Close unused tabs to free memory when processing very large PDFs. |

## Tips for Best Results

1. **Start with Compact mode** when compressing — it preserves text and vector graphics while optimizing images.
2. **Only use Rasterize** (flatten) when you need to hit a very strict size target and accept that text becomes images.
3. **Choose the correct OCR language** — this significantly improves accuracy, especially for accented characters.
4. **Use clear, high-resolution scans** for OCR — blurry or skewed pages reduce recognition quality.
5. **Close unused browser tabs** to free memory when processing very large PDFs.

## Known Limits

| Limit | Detail |
|-------|--------|
| **Max file size (editing)** | Large files may hit browser memory limits (varies by device). If the browser becomes unresponsive, try a smaller file or close other tabs to free memory. |
| **Large documents (OCR)** | OCR works best in smaller batches for large documents. For very long PDFs, consider splitting first, OCR-ing each part, then merging. |
| **Browser timeouts** | Very large documents may take several minutes. If the browser tab becomes unresponsive, try a smaller file or fewer pages. |

## Quality vs Compression

PDF compression is always a trade-off:

| Mode | Quality | File size reduction | When to use |
|------|---------|---------------------|-------------|
| **Compact** (Smart) | ★★★★★ High — text and vectors stay sharp | Moderate (30–60% typical) | Everyday use: email, sharing, archiving |
| **Rasterize** (Flatten) | ★★★ Good — text becomes images | Aggressive (60–90% possible) | Strict portal limits (portal says "max 1 MB") |

**Rule of thumb:** Try Compact first. Only use Rasterize if Compact doesn't reach your target size.

For the dedicated compression guide and more tips, see: [Compress PDF without losing quality](https://pdffreeeditor.com/compress-pdf-without-losing-quality/)

---

*For tool links and workflow guides, see the [README](../README.md).*
