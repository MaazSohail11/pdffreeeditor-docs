# Processing Contracts (Illustrative)

> ⚠️ **These examples are illustrative only.** They describe the *conceptual* shape of how each tool processes files internally in the browser. They are provided for transparency, not as a developer integration reference.

---

## Purpose

This document exists to give a sense of how the system handles files. All processing happens **entirely in the browser** using JavaScript libraries — no data is sent to any external service.

---

## Compression (Conceptual)

Compression runs **entirely in the browser** using `pdf-lib` and `OffscreenCanvas`. The conceptual flow looks like:

### Input

```json
{
  "operation": "compress",
  "mode": "compact",
  "fileBytes": "<Uint8Array — PDF binary>",
  "targetSizeBytes": 1048576
}
```

### Output

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

### Error

```json
{
  "status": "error",
  "code": "STRUCTURE_TOO_LARGE",
  "message": "Cannot compress to 1 MB. Text and structure alone take 1.2 MB."
}
```

---

## OCR (Conceptual)

OCR runs in the browser — text recognition and PDF assembly both happen locally.

### Input

```json
{
  "operation": "ocr",
  "language": "en",
  "pageImage": "<ImageBitmap — rendered page>"
}
```

### Output

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

## Signing (Conceptual)

Signing runs entirely in the browser using Fabric.js for canvas placement and pdf-lib for PDF embedding.

### Input

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

### Output

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
