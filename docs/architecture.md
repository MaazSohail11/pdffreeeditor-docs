# Architecture Overview

> This document gives a high-level view of how PDF Free Editor processes documents. It is written for transparency and trust — no proprietary secrets are disclosed.

---

## Design Philosophy

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

## Processing Pipeline

### 1. Open & Validate

- The user selects or drags-and-drops a file.
- The browser validates file type (PDF, images) and basic size limits.
- **No file is sent anywhere** — everything stays on your device.

### 2. Process

All processing runs **entirely in the browser** using JavaScript libraries:

| Feature | Where it runs | Libraries used |
|---------|--------------|----------------|
| **Edit PDF** (text, draw, highlight, annotate) | 100% browser | pdfjs-dist, Fabric.js, pdf-lib |
| **Sign PDF** (draw / type / upload signature) | 100% browser | Fabric.js, pdf-lib |
| **Compress PDF** (Compact & Rasterize modes) | 100% browser | pdf-lib, OffscreenCanvas |
| **OCR PDF** (text recognition on scanned pages) | 100% browser | Built-in recognition engine, pdf-lib |
| **Merge / Split PDF** | 100% browser | pdf-lib |

### 3. Download

- The final PDF (or other output) is assembled in the browser.
- A download trigger saves the file directly to the user's device.
- For the editor, an IndexedDB handoff passes the blob to a dedicated export page so the editing canvas stays intact.

## Stateless Approach

- **No user accounts** are required.
- **No session state** is stored anywhere outside your browser.
- Browser-local storage (IndexedDB, sessionStorage) is used only for transient handoff between the editor and export pages.

## Error Handling

- Client-side errors (corrupt PDF, unsupported format) are caught and surfaced in the UI with actionable messages.
- Processing errors fall back gracefully with retry or user notification.

---

*For tool links and workflow guides, see the [README](../README.md).*
