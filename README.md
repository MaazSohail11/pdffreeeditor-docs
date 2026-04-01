# PDF Free Editor — Documentation & Workflows

> **This is a documentation-only repository.** It contains workflow guides, architectural notes, and security/privacy information for [pdffreeeditor.com](https://pdffreeeditor.com). No application source code is stored here.

---

## 🔧 Tools

| Tool | Description |
|------|-------------|
| [Compress PDF online](https://pdffreeeditor.com/compress-pdf/) | Reduce PDF file size for email, portals, and storage |
| [Sign PDF online](https://pdffreeeditor.com/sign-pdf/) | Add an electronic signature — draw, type, or upload |
| [OCR PDF online](https://pdffreeeditor.com/ocr-pdf/) | Turn scanned PDFs into searchable, copy-able documents |

### Supporting tools

- [Compress PDF to 1 MB](https://pdffreeeditor.com/compress-pdf-to-1mb/) — strict portal & form limits
- [Compress PDF for email](https://pdffreeeditor.com/compress-pdf-for-email/) — Gmail / Outlook attachment limits
- [Sign PDF privately](https://pdffreeeditor.com/sign-pdf-document-private/) — best practices for sensitive docs
- [Make PDF searchable](https://pdffreeeditor.com/make-pdf-searchable/) — can't copy or Ctrl+F? Start here

---

## 🚀 Start Here

New to the tools? Pick a workflow guide:

| Workflow | What it covers |
|----------|---------------|
| [Compress PDF](docs/workflows/compress-pdf.md) | When to compress, digital vs scanned PDFs, step-by-step |
| [Compress to 1 MB](docs/workflows/compress-to-1mb.md) | Hit strict upload limits without losing readability |
| [Compress for email](docs/workflows/compress-for-email.md) | Gmail, Outlook, and messaging-app limits |
| [Sign PDF](docs/workflows/sign-pdf.md) | 60-second signing workflow + common mistakes |
| [Sign privately](docs/workflows/sign-private.md) | Privacy recommendations for sensitive documents |
| [OCR PDF](docs/workflows/ocr-pdf.md) | What OCR is, when to use it, accuracy tips |
| [Make PDF searchable](docs/workflows/make-pdf-searchable.md) | Fix "can't search" / "can't copy" issues |

### Compress PDF — Workflow Guide

> Reduce PDF file size for email, portals, WhatsApp, and everyday sharing.

---

#### When to Compress a PDF

- **Email limits** — Gmail caps attachments at 25 MB; Outlook at 20 MB.
- **Portal / form uploads** — Government and university portals often require files under 1–2 MB.
- **WhatsApp / messaging** — Smaller PDFs send faster and don't hit mobile data limits.
- **Storage** — Archiving hundreds of PDFs? Even 50% savings per file adds up.

#### Digital PDF vs Scanned PDF

Understanding the difference helps you pick the right compression mode:

| Type | What it is | Compression behavior |
|------|-----------|---------------------|
| **Digital PDF** | Created from Word, PowerPoint, or "Save as PDF." Contains real text and vector graphics. | Compact mode works great — text stays sharp, images are optimized. |
| **Scanned PDF** | Created by scanning paper. Each page is a full-resolution image. | Often much larger. Rasterize mode may be needed for aggressive reduction. |

#### How to Compress a PDF (Step by Step)

1. **Open the compressor** — go to [Compress PDF online](https://pdffreeeditor.com/compress-pdf/).
2. **Upload your PDF** — drag and drop or click to browse.
3. **Choose a mode:**
   - **Compact (Smart)** — keeps text and vectors sharp, optimizes images. Best for most files.
   - **Rasterize (Flatten)** — converts each page to a JPEG image. Maximum size reduction, but text becomes non-selectable.
4. **Download** — the compressed PDF downloads automatically. No watermark, no signup.

#### Troubleshooting

##### Quality looks worse after compression

- Try **Compact mode** instead of Rasterize — it preserves text sharpness.
- If Rasterize is necessary, increase the quality/DPI setting slightly.

##### File is still too big

- Switch from Compact to **Rasterize** for more aggressive reduction.
- Lower the quality setting further (a small decrease often shaves off significant size).
- For strict limits, see [Compress PDF to 1 MB](compress-to-1mb.md).

##### Portal still rejects the file

- Double-check the portal's **exact limit** (some measure MB differently).
- Try compressing a second time with slightly lower quality.
- If the PDF is a scan, consider removing unnecessary pages first.

#### Related Pages

- [Compress PDF to 1 MB](https://pdffreeeditor.com/compress-pdf-to-1mb/) — strict upload limits
- [Compress PDF for email](https://pdffreeeditor.com/compress-pdf-for-email/) — Gmail / Outlook tips
- [Compress PDF for WhatsApp](https://pdffreeeditor.com/compress-pdf-for-whatsapp/) — mobile sharing

---

### Compress PDF to 1 MB — Workflow Guide

> Hit strict upload limits without losing readability.

---

#### Why the 1 MB Limit Happens

Many online portals, government forms, university applications, and job boards enforce a **maximum file size** of 1 MB (or 2 MB). This is common for:

- Passport/ID document uploads
- Scholarship and visa applications
- Insurance claim submissions
- HR onboarding forms

Scanned PDFs are the usual culprit — a single scanned page can be 2–5 MB because each page is a high-resolution image.

#### Steps to Compress a PDF to ~1 MB

1. **Open** [Compress PDF to 1 MB](https://pdffreeeditor.com/compress-pdf-to-1mb/).
2. **Upload** your PDF.
3. **Start with Compact mode** — it may reach 1 MB while keeping text sharp.
4. **If still too large**, switch to **Rasterize** mode:
   - Rasterize converts each page to a JPEG image at a controlled quality/DPI.
   - Lower the quality slider gradually until the output is ≤ 1 MB.
5. **Download** and verify the file size.

#### What If It Becomes Blurry?

- **Don't over-compress.** If the text is unreadable, increase quality slightly — even going from 0.3 → 0.5 quality makes a big visual difference while still achieving significant reduction.
- **Reduce page count** first if possible (remove blank or unnecessary pages).
- **Use Compact mode** for text-heavy documents — it keeps fonts and vectors crisp.

#### Best Practices

- ✅ **Try Compact first**, then Rasterize only if needed.
- ✅ **Remove unnecessary pages** before compressing (blank pages, cover pages you don't need).
- ✅ **Check the result** — open the compressed PDF and verify text is still readable.
- ✅ **Keep the original** — always save a backup before compressing for strict limits.
- ⚠️ **Don't compress twice** with Rasterize — each pass degrades quality further.

#### Related Pages

- [Compress PDF online](https://pdffreeeditor.com/compress-pdf/) — general compression with more mode options

---

### Compress PDF for Email — Workflow Guide

> Shrink PDFs to fit Gmail, Outlook, and messaging-app attachment limits.

---

#### Common Email Attachment Limits

| Service | Max attachment size |
|---------|-------------------|
| **Gmail** | 25 MB |
| **Outlook / Microsoft 365** | 20 MB |
| **Yahoo Mail** | 25 MB |
| **iCloud Mail** | 20 MB |
| **WhatsApp** | ~100 MB (but slow on mobile data) |

If your PDF is larger than the limit, the email provider will block the attachment. Compressing solves this.

#### How to Compress a PDF for Email

1. **Open** [Compress PDF for email](https://pdffreeeditor.com/compress-pdf-for-email/).
2. **Upload** your PDF.
3. **Use Compact mode** — this keeps text and layout intact while reducing images and metadata. Most office documents shrink 30–60%.
4. **Check the output size.** If it's still over the email limit:
   - Switch to **Rasterize** mode for more aggressive reduction.
   - Lower the quality setting gradually.
5. **Download** and attach to your email.

#### Tips

- **Scanned PDFs** (image-heavy) compress much more than text-only PDFs.
- **Remove unnecessary pages** before compressing — fewer pages = smaller file.
- **For very strict limits** (< 2 MB), see [Compress PDF to 1 MB](compress-to-1mb.md).
- **After signing**, if the file grew, compress it before emailing — signing adds image data.

#### Related Pages

- [Compress PDF online](https://pdffreeeditor.com/compress-pdf/) — general compression guide
- [Compress PDF to 1 MB](https://pdffreeeditor.com/compress-pdf-to-1mb/) — strict portal limits

---

### Sign PDF — Workflow Guide

> Add an electronic signature in about 60 seconds. No signup, no watermark.

---

#### Why Signing PDFs Is Normal in 2026

Electronic signatures are how most contracts, forms, and approvals get signed today. Whether it's an NDA, a rental agreement, or a school permission form — the expectation is that you sign digitally and email it back.

You don't need expensive software for this. A browser-based tool handles 95% of everyday signing needs.

#### 60-Second Signing Workflow

1. **Open** [Sign PDF online](https://pdffreeeditor.com/sign-pdf/).
2. **Upload** your PDF.
3. **Create your signature** — three options:
   - ✍️ **Draw** with your mouse or finger (touch works great on phones).
   - ⌨️ **Type** your name in a signature-style font.
   - 📤 **Upload** a PNG/JPG image of your handwritten signature.
4. **Place it** — drag the signature to the right spot on the page. Resize and reposition as needed.
5. **Download** — export the signed PDF. No watermark, no signup.

#### Signature Placement Tips

- **Contracts / agreements** — signature usually goes on the last page, above the printed name line.
- **Forms** — look for the "Signature" or "Sign here" field, often at the bottom.
- **Multiple signatures** — you can place a different signature on each page if multiple signature blocks are required.
- **Initials** — for pages requiring initials, create a small signature with just your initials.

#### Common Mistakes to Avoid

| Mistake | Why it's a problem | Better approach |
|---------|-------------------|----------------|
| Taking a screenshot of the signed PDF | Low resolution, large file, messy formatting | Use the built-in export/download button |
| Printing → signing by hand → scanning | Creates a huge scan, loses text searchability | Sign directly in the browser |
| Using a tiny signature image | Looks blurry when placed on the page | Use a higher-resolution image (PNG recommended) |
| Forgetting to check all pages | Some forms require a signature on every page | Scroll through all pages before downloading |

#### FAQ

**Is this an electronic signature or a digital signature?**
This tool creates an **electronic signature** (a visual signature placed on the PDF). A digital signature is certificate-based and cryptographic — it's a different workflow typically required by regulated industries.

**Can I sign on my phone?**
Yes. The signing tool works in Safari (iPhone) and Chrome (Android). Use your finger to draw a signature on the touchscreen.

**Does my file get uploaded?**
No. Signing runs 100% in your browser. Your PDF stays on your device.

**Can I remove the signature later?**
Once exported, the signature is embedded in the PDF. Keep the unsigned original if you may need to re-sign or make changes.

#### Related Pages

- [Sign PDF privately](https://pdffreeeditor.com/sign-pdf-document-private/) — best practices for sensitive documents

---

### Sign PDF Privately — Best Practices

> How to keep your signature and sensitive documents private when signing online.

---

#### What Counts as a Sensitive Document?

Not every PDF needs extra precautions, but some do:

- **Legal contracts** — NDAs, service agreements, employment contracts
- **Financial documents** — tax returns, bank statements, loan applications
- **Medical forms** — patient consent, insurance claims
- **Government IDs** — passport copies, visa applications
- **Personal agreements** — rental leases, divorce paperwork

If your document contains personal identifiable information (PII), financial data, or health records, treat it as sensitive.

#### How to Keep Signing Private

##### 1. Use a tool that processes locally

PDF Free Editor's signing feature runs **entirely in your browser**. Your file is not uploaded to any server. This is the safest approach for sensitive documents — the file never leaves your device.

→ [Sign PDF privately](https://pdffreeeditor.com/sign-pdf-document-private/)

##### 2. Avoid public or shared devices

- Don't sign sensitive documents on a library computer, shared workstation, or a friend's phone.
- If you must use a shared device, use an incognito/private browser window and close it when done.

##### 3. Don't email public links to signed documents

- If you need to share a signed document, attach it directly to the email rather than uploading it to a file-sharing service with a public link.
- If you use a cloud drive (Google Drive, OneDrive), make sure the link is set to "restricted" or "only people with access."

##### 4. Secure your signature image

- If you uploaded a PNG/JPG of your handwritten signature, don't leave it in your Downloads folder or on a shared drive.
- Delete temporary copies after signing.

##### 5. Verify before sending

- Open the exported PDF and check that the signature is placed correctly.
- Make sure you haven't accidentally left any drafts or previous versions attached.

#### Recommendations Summary

| Do | Don't |
|----|-------|
| ✅ Use a browser-based tool that works locally | ❌ Upload sensitive docs to random "free" services |
| ✅ Use your own device on a trusted network | ❌ Sign on public Wi-Fi without HTTPS |
| ✅ Use incognito mode on shared devices | ❌ Leave signed docs in shared folders |
| ✅ Delete temporary signature images after use | ❌ Reuse public devices for sensitive signing |
| ✅ Double-check the signed PDF before sending | ❌ Email documents with public file-sharing links |

#### Disclaimer

This page provides general best-practice recommendations for everyday users. It is **not** legal advice. If your organization has specific compliance requirements (HIPAA, GDPR, eIDAS, etc.), consult your compliance team or legal advisor for guidance on approved signing workflows.

#### Related Pages

- [Sign PDF online](https://pdffreeeditor.com/sign-pdf/) — the main signing tool

---

### OCR PDF — Workflow Guide

> Turn a scanned PDF into a searchable document so you can copy text and use Ctrl+F.

---

#### What Is OCR?

**OCR** stands for **Optical Character Recognition**. It's a process that looks at images of text (like a scanned page) and converts them into actual, machine-readable text.

After OCR, a scanned PDF gains an invisible text layer. This means:

- ✅ **Ctrl+F (Find)** works — you can search inside the document.
- ✅ **Copy/paste** works — you can select and copy text from scanned pages.
- ✅ The **visual appearance stays the same** — the original scan is preserved as the background.

#### When to Use OCR

| Scenario | Do you need OCR? |
|----------|-----------------|
| PDF created from Word / PowerPoint / "Save as PDF" | ❌ No — text is already real |
| Scanned paper document (flatbed scanner, phone scan) | ✅ Yes |
| Photo of a document | ✅ Yes |
| Can't select text or Ctrl+F finds nothing | ✅ Yes — it's likely a scan |
| Not sure if your PDF is scanned | Check: [Is my PDF scanned?](https://pdffreeeditor.com/is-my-pdf-scanned/) |

#### Step-by-Step OCR Workflow

1. **Open** [OCR PDF online](https://pdffreeeditor.com/ocr-pdf/).
2. **Upload** your scanned PDF.
3. **Select the document language** — choosing the correct language (English, French, German, Spanish, etc.) significantly improves accuracy.
4. **Run OCR** — the tool recognizes text on each page and builds a searchable text layer.
5. **Download** the searchable PDF — Ctrl+F now works, and you can copy text.

#### Accuracy Tips

- **Use clear, high-resolution scans.** Blurry images, shadows, and low DPI reduce accuracy.
- **Keep pages straight.** Skewed or rotated pages confuse the recognition engine.
- **Choose the right language.** Even if you're OCR-ing an English document, selecting the correct language helps with edge cases (accented characters, ligatures).
- **One language per run.** If your document mixes languages, select the dominant language for the best overall result.

#### Troubleshooting

##### OCR text is inaccurate

- Re-scan the document at a higher resolution (300 DPI recommended).
- Make sure the page is flat and well-lit.
- Verify you selected the correct language.

##### Some pages work, others don't

- Mixed quality within a single PDF is common. Re-scan the problematic pages.

##### File is too large after OCR

- The text layer adds minimal size. If the scan itself is large, compress it after OCR: use [Compress PDF online](https://pdffreeeditor.com/compress-pdf/).

##### I need a Word/Excel file from a scanned PDF

- Run OCR first (to make text recognizable), then convert: PDF to Word or PDF to Excel.

#### Related Pages

- [Make PDF searchable](https://pdffreeeditor.com/make-pdf-searchable/) — focused on the "can't search / can't copy" problem
- [Is my PDF scanned?](https://pdffreeeditor.com/is-my-pdf-scanned/) — quick check

---

### Make PDF Searchable — Workflow Guide

> Fix "can't search text in PDF" and "can't copy text from PDF" problems.

---

#### Why You Can't Search or Copy Text

If you open a PDF and **Ctrl+F** finds nothing, or you **can't select/copy** any text, the PDF is almost certainly a **scan** (image-only).

A scanned PDF is just a picture of each page wrapped inside a PDF file. It looks like text, but to your computer it's just an image — there's no actual text data to search or copy.

**The fix:** Run OCR to add an invisible text layer on top of the scan.

#### Steps: OCR → Searchable PDF

1. **Open** [Make PDF searchable](https://pdffreeeditor.com/make-pdf-searchable/).
2. **Upload** your PDF.
3. **Select the language** of the document (this improves accuracy).
4. **Run OCR** — the tool recognizes text and creates a searchable layer.
5. **Download** the searchable PDF.

After downloading, open the PDF and try **Ctrl+F** — it should now find your search terms. You can also select and copy text.

#### FAQ

**Will OCR change how my PDF looks?**
No. The original scan is preserved as the background. OCR adds an invisible text layer on top — visually, nothing changes.

**Does this work for photos of documents?**
Yes. If you took a photo of a document and saved it as a PDF, OCR can recognize the text.

**What if only some pages are searchable?**
Some PDFs are "mixed" — a few pages have real text while others are scans. OCR will add text layers to the scanned pages without affecting the already-searchable ones.

**Can I edit the text after OCR?**
OCR makes text searchable and copyable. Full text editing depends on the PDF structure and the editor you use. After OCR, try the [Edit PDF](https://pdffreeeditor.com/edit-pdf/) tool.

**My PDF is searchable but I still can't copy text properly.**
Some PDFs use fonts or encoding that make copy/paste unreliable even with real text. OCR won't help in this case — the text is already there but the encoding is problematic.

#### Related Pages

- [OCR PDF online](https://pdffreeeditor.com/ocr-pdf/) — full OCR workflow with accuracy tips and troubleshooting
- [Can't search text in PDF?](https://pdffreeeditor.com/cant-search-text-in-pdf/) — troubleshooting guide
- [Can't copy text from PDF?](https://pdffreeeditor.com/cant-copy-text-from-pdf/) — troubleshooting guide

---

## 🏗️ Architecture & Privacy

- [Architecture overview](docs/architecture.md) — high-level system design (browser-first, stateless)
- [Security & privacy](docs/security-privacy.md) — file handling, retention, deletion, HTTPS
- [Performance](docs/performance.md) — what affects speed, known limits, quality vs compression
- [FAQ](docs/faq.md) — common questions across all tools
- [Roadmap](docs/roadmap.md) — planned improvements and future features
- [Processing contracts (illustrative)](docs/api-contracts.md) — conceptual request/response examples

### Architecture Overview

> This document gives a high-level view of how PDF Free Editor processes documents. It is written for transparency and trust — no proprietary secrets are disclosed.

---

#### Design Philosophy

PDF Free Editor follows a **browser-first, stateless** architecture. The primary goal is to keep user files on the user's device — **nothing is uploaded to any server**.

```
┌────────────┐      ┌──────────────────────────────────────────┐
│  User's    │      │            Browser (client-side)          │
│  Device    │─────►│                                          │
│            │      │  ┌──────────┐  ┌─────────┐  ┌────────┐  │
│ (PDF file) │      │  │  Open /  │  │ Process │  │Download│  │
│            │◄─────│  │ Validate │─►│ (edit,  │─►│ result │  │
│            │      │  └──────────┘  │ sign,   │  └────────┘  │
│            │      │                │ compress│               │
│            │      │                │ OCR)    │               │
│            │      │                └─────────┘               │
│            │      └──────────────────────────────────────────┘
└────────────┘
```

#### Processing Pipeline

##### 1. Open & Validate

- The user selects or drags-and-drops a file.
- The browser validates file type (PDF, images) and basic size limits.
- **No file is sent anywhere** — everything stays on your device.

##### 2. Process

All processing runs **entirely in the browser** using JavaScript libraries:

| Feature | Where it runs | Libraries used |
|---------|--------------|----------------|
| **Edit PDF** (text, draw, highlight, annotate) | 100% browser | pdfjs-dist, Fabric.js, pdf-lib |
| **Sign PDF** (draw / type / upload signature) | 100% browser | Fabric.js, pdf-lib |
| **Compress PDF** (Compact & Rasterize modes) | 100% browser | pdf-lib, OffscreenCanvas |
| **OCR PDF** (text recognition on scanned pages) | 100% browser | Built-in recognition engine, pdf-lib |
| **Merge / Split PDF** | 100% browser | pdf-lib |

##### 3. Download

- The final PDF (or other output) is assembled in the browser.
- A download trigger saves the file directly to the user's device.
- For the editor, an IndexedDB handoff passes the blob to a dedicated export page so the editing canvas stays intact.

#### Stateless Approach

- **No user accounts** are required.
- **No session state** is stored anywhere outside your browser.
- Browser-local storage (IndexedDB, sessionStorage) is used only for transient handoff between the editor and export pages.

#### Error Handling

- Client-side errors (corrupt PDF, unsupported format) are caught and surfaced in the UI with actionable messages.
- Processing errors fall back gracefully with retry or user notification.

---

### Security & Privacy

> A plain-language summary of how PDF Free Editor handles your files and data. This is **not** legal advice — see the full [Privacy Policy](https://pdffreeeditor.com/privacy/) on the website for the official document.

---

#### The Short Version

- **Your files never leave your device.** All processing happens in your browser.
- **Nothing is uploaded to any server.** Your PDFs stay on your machine from start to finish.
- **No account, no tracking profile** — you don't need to sign up to use any tool.

---

#### File Handling

| Feature | Where your file is processed | Leaves your device? |
|---------|------------------------------|---------------------|
| Edit PDF, annotate, draw, highlight | Your browser | ❌ No |
| Sign PDF (draw / type / upload signature) | Your browser | ❌ No |
| Compress PDF (Compact & Rasterize) | Your browser | ❌ No |
| OCR PDF (text recognition) | Your browser | ❌ No |
| Merge / Split PDF | Your browser | ❌ No |

**Every feature runs 100% client-side.** Your file is processed using JavaScript libraries running in your browser. No file data is transmitted over the network.

#### File Retention & Deletion

- **No files are ever stored on any server.** There is nothing to retain or delete on our side.
- Browser-local storage (IndexedDB) is used only for a brief handoff between the editor and the export/download page, then cleared automatically.

#### Logging Policy

- We do **not** log file contents, file names, or document text.
- Analytics are aggregated (page views, tool usage counts) and are not used to build individual tracking profiles.

#### What We Don't Do

- ❌ **Upload your files** to any server.
- ❌ **Sell your files** to third parties.
- ❌ **Index or search** your file contents.
- ❌ **Build advertising profiles** from your documents.
- ❌ **Require an account** — no name, email, or payment info is collected during tool use.

#### HTTPS Everywhere

All traffic to and from [pdffreeeditor.com](https://pdffreeeditor.com) is served over HTTPS with TLS encryption.

#### Responsible Disclosure

If you discover a security issue, please report it responsibly:

- **Email:** [contact@pdffreeeditor.com](mailto:contact@pdffreeeditor.com)
- **Contact page:** [https://pdffreeeditor.com/contact/](https://pdffreeeditor.com/contact/)

See [SECURITY.md](../SECURITY.md) for response expectations and safe-harbor details.

---

For the full privacy policy, visit: [https://pdffreeeditor.com/privacy/](https://pdffreeeditor.com/privacy/)

---

### Performance

> What affects processing time, known limits, and tips for getting the best results from PDF Free Editor.

---

#### What Affects Processing Time

Because all features run **entirely in your browser**, performance depends on your device and the document itself:

| Factor | Impact |
|--------|--------|
| **File size** | Larger files take longer to parse and render. A 50 MB scan-heavy PDF will be slower than a 500 KB text memo. |
| **Page count** | More pages = more rendering work, especially for compression and OCR. |
| **Image density** | Scanned PDFs (each page is a full-resolution image) are heavier to process than digital/text PDFs. |
| **Device hardware** | A modern laptop processes faster than an older phone. Chrome/Edge tend to be the fastest browsers for canvas-heavy work. |
| **Browser memory** | Large files need more RAM. Close unused tabs to free memory when processing very large PDFs. |

#### Tips for Best Results

1. **Start with Compact mode** when compressing — it preserves text and vector graphics while optimizing images.
2. **Only use Rasterize** (flatten) when you need to hit a very strict size target and accept that text becomes images.
3. **Choose the correct OCR language** — this significantly improves accuracy, especially for accented characters.
4. **Use clear, high-resolution scans** for OCR — blurry or skewed pages reduce recognition quality.
5. **Close unused browser tabs** to free memory when processing very large PDFs.

#### Known Limits

| Limit | Detail |
|-------|--------|
| **Max file size (editing)** | Large files may hit browser memory limits (varies by device). If the browser becomes unresponsive, try a smaller file or close other tabs to free memory. |
| **Large documents (OCR)** | OCR works best in smaller batches for large documents. For very long PDFs, consider splitting first, OCR-ing each part, then merging. |
| **Browser timeouts** | Very large documents may take several minutes. If the browser tab becomes unresponsive, try a smaller file or fewer pages. |

#### Quality vs Compression

PDF compression is always a trade-off:

| Mode | Quality | File size reduction | When to use |
|------|---------|---------------------|-------------|
| **Compact** (Smart) | ★★★★★ High — text and vectors stay sharp | Moderate (30–60% typical) | Everyday use: email, sharing, archiving |
| **Rasterize** (Flatten) | ★★★ Good — text becomes images | Aggressive (60–90% possible) | Strict portal limits (portal says "max 1 MB") |

**Rule of thumb:** Try Compact first. Only use Rasterize if Compact doesn't reach your target size.

For the dedicated compression guide and more tips, see: [Compress PDF without losing quality](https://pdffreeeditor.com/compress-pdf-without-losing-quality/)

---

### Frequently Asked Questions

> Common questions across all PDF Free Editor tools.

---

#### General

**What is PDF Free Editor?**
A free, browser-based set of PDF tools by TechRex. Edit, sign, compress, OCR, merge, split, and convert PDFs — all without creating an account.

**Do I need to install anything?**
No. Everything runs in your browser (Chrome, Safari, Edge, Firefox). No desktop software, no mobile app required.

**Is it really free?**
Yes. Core tools are free with no watermarks, no trial limits, and no signup.

**Does this work on my phone?**
Yes. All tools work on modern mobile browsers (iPhone Safari, Android Chrome) as well as desktop.

---

#### Privacy & Security

**Are my files uploaded to any server?**
**No.** All processing happens entirely in your browser. Your files never leave your device.

**Do you store my PDFs?**
No. Files are processed locally in the browser and are never sent anywhere. There is nothing to store on our side.

**Do I need an account?**
No. PDF Free Editor works without any signup, login, or personal information.

---

#### Compression

**What's the difference between Compact and Rasterize?**
**Compact** keeps the original PDF structure (text, fonts, vectors) and optimizes images. **Rasterize** converts each page to a JPEG image for maximum size reduction, but text becomes non-selectable.

**Can I compress a PDF to exactly 1 MB?**
You can get close by using Rasterize mode and adjusting quality. There's no single magic button, but iterating on quality settings will get you within the limit. See the [Compress to 1 MB workflow](workflows/compress-to-1mb.md).

**Will compression make my PDF blurry?**
Compact mode preserves high quality for most documents. Rasterize mode trades some visual quality for smaller file size — use it only when necessary.

---

#### Signing

**What kind of signature does this add?**
An **electronic signature** — a visual signature placed on the PDF. This is not a certificate-based digital signature (which is a different, cryptographic workflow).

**Can I sign multiple pages?**
Yes. You can place a signature on any page, and add multiple signatures across the document.

**Does signing upload my file?**
No. Signing runs 100% in the browser. Your file never leaves your device.

---

#### OCR

**What is OCR?**
OCR (Optical Character Recognition) converts scanned, image-based PDFs into searchable text. After OCR, you can use Ctrl+F and copy text from the document.

**Why can't I copy text from my PDF?**
Your PDF is likely a scan (image-only). Run OCR to add a text layer that enables copying and searching.

**How do I improve OCR accuracy?**
Use clear, high-resolution scans. Choose the correct language. Keep pages straight and well-lit.

---

*For tool-specific guides, see the [workflow docs](workflows/).*

---

### Roadmap

> Planned improvements and future features for PDF Free Editor. This is a living document and timelines are approximate.

---

#### Near-term

- [ ] **Batch compression** — compress multiple PDFs at once with a single download.
- [ ] **Improved OCR accuracy** — evaluate additional recognition engines and language packs.
- [ ] **Dark mode** — system-aware dark theme for the editor and landing pages.
- [ ] **Offline PWA support** — full offline editing via service worker caching.

#### Mid-term

- [ ] **Signature library** — save and reuse multiple signatures within the browser (localStorage).
- [ ] **Page thumbnails** — visual page navigator sidebar for long documents.
- [ ] **PDF/A compliance** — export option targeting archival PDF/A format.
- [ ] **Collaboration annotations** — exportable comment/annotation layers for review workflows.

#### Long-term

- [ ] **On-device OCR improvements** — enhanced text recognition with broader language support.
- [ ] **Digital signatures (certificate-based)** — support for cryptographic signing with user-provided certificates.
- [ ] **Desktop app** — Electron/Tauri wrapper for native performance and file-system integration.

---

#### Completed

- [x] Core PDF editor with text editing, drawing, highlighting, and annotation
- [x] Electronic signature (draw, type, or upload a signature image)
- [x] PDF compression (Compact + Rasterize modes)
- [x] Multi-language OCR support (English, French, Spanish, German, Italian, Portuguese — availability depends on selected language packs)
- [x] Merge and split PDF tools
- [x] Mobile-responsive UI across all tools

---

*Have a feature request? Open an issue or reach out at [contact@pdffreeeditor.com](mailto:contact@pdffreeeditor.com).*

---

### Processing Contracts (Illustrative)

> ⚠️ **These examples are illustrative only.** They describe the *conceptual* shape of how each tool processes files internally in the browser. They are provided for transparency, not as a developer integration reference.

---

#### Purpose

This document exists to give a sense of how the system handles files. All processing happens **entirely in the browser** using JavaScript libraries — no data is sent to any external service.

---

#### Compression (Conceptual)

Compression runs **entirely in the browser** using `pdf-lib` and `OffscreenCanvas`. The conceptual flow looks like:

##### Input

```json
{
  "operation": "compress",
  "mode": "compact",
  "fileBytes": "<Uint8Array — PDF binary>",
  "targetSizeBytes": 1048576
}
```

##### Output

```json
{
  "status": "success",
  "stats": {
    "originalSize": 5242880,
    "newSize": 987654,
    "compressedImages": 12,
    "totalImages": 15
  },
  "bytes": "<Uint8Array — compressed PDF binary>"
}
```

##### Error

```json
{
  "status": "error",
  "code": "STRUCTURE_TOO_LARGE",
  "message": "Cannot compress to 1 MB. Text and structure alone take 1.2 MB."
}
```

---

#### OCR (Conceptual)

OCR runs in the browser — text recognition and PDF assembly both happen locally.

##### Input

```json
{
  "operation": "ocr",
  "language": "en",
  "pageImage": "<ImageBitmap — rendered page>"
}
```

##### Output

```json
{
  "status": "success",
  "words": [
    {
      "text": "Invoice",
      "boundingBox": {
        "topLeft": { "x": 100, "y": 50 },
        "topRight": { "x": 250, "y": 50 },
        "bottomRight": { "x": 250, "y": 80 },
        "bottomLeft": { "x": 100, "y": 80 }
      },
      "confidence": 0.98
    }
  ]
}
```

The recognized words are positioned as invisible text in the output PDF using `pdf-lib`, entirely in the browser.

---

#### Signing (Conceptual)

Signing runs entirely in the browser using Fabric.js for canvas placement and pdf-lib for PDF embedding.

##### Input

```json
{
  "operation": "sign",
  "signatureType": "draw",
  "signatureImage": "<PNG blob — drawn signature>",
  "placement": {
    "page": 3,
    "x": 150,
    "y": 600,
    "width": 200,
    "height": 60
  }
}
```

##### Output

```json
{
  "status": "success",
  "bytes": "<Uint8Array — signed PDF binary>",
  "stats": {
    "originalSize": 204800,
    "newSize": 225280,
    "signaturesPlaced": 1
  }
}
```

---

*These examples are for illustration purposes only. Internal implementations may differ.*

---

## 📂 Repository Structure

```
pdffreeeditor-docs/
├── README.md              ← you are here
├── LICENSE                ← MIT
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
│
├── docs/
│   ├── architecture.md
│   ├── security-privacy.md
│   ├── performance.md
│   ├── faq.md
│   ├── roadmap.md
│   ├── api-contracts.md
│   └── workflows/
│       ├── compress-pdf.md
│       ├── compress-to-1mb.md
│       ├── compress-for-email.md
│       ├── sign-pdf.md
│       ├── sign-private.md
│       ├── ocr-pdf.md
│       └── make-pdf-searchable.md
│
├── samples/
│   ├── README.md
│   ├── sample-contract-placeholder.txt
│   ├── sample-scanned-placeholder.txt
│   └── expected-output/
│       ├── compress-example.txt
│       ├── ocr-example.txt
│       └── signed-pdf-example.txt
│
└── assets/
    ├── README.md
    ├── images/
    │   ├── compress-hero.png
    │   ├── sign-hero.png
    │   └── ocr-hero.png
    └── diagrams/
        └── system-overview.png
```

---

## ⚠️ Disclaimer

**PDF Free Editor** is an independent project by [TechRex](https://pdffreeeditor.com). It is **not** affiliated with, endorsed by, or connected to Adobe, Adobe Acrobat, or any other commercial PDF software vendor. All trademarks belong to their respective owners.

---

## 📄 License

This documentation is released under the [MIT License](LICENSE).
