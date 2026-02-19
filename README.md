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

---

## 🏗️ Architecture & Privacy

- [Architecture overview](docs/architecture.md) — high-level system design (browser-first, stateless)
- [Security & privacy](docs/security-privacy.md) — file handling, retention, deletion, HTTPS
- [Performance](docs/performance.md) — what affects speed, known limits, quality vs compression
- [FAQ](docs/faq.md) — common questions across all tools
- [Roadmap](docs/roadmap.md) — planned improvements and future features
- [Processing contracts (illustrative)](docs/api-contracts.md) — conceptual request/response examples

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
