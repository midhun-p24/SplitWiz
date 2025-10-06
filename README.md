# 🧾 SplitMate

**SplitMate** is a smart receipt-splitting web app that makes sharing expenses with friends effortless.  
Upload a receipt → the app auto-detects items, tax, and tip → assign who ordered what → and SplitMate does the math.

---

## 🚀 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui** |
| Backend | **Next.js API routes**, **Node.js**, **Prisma**, **PostgreSQL** |
| Storage | **MinIO / Amazon S3** for receipt images |
| Auth | **NextAuth.js** (Google / GitHub login) |
| AI Parsing | **Hugging Face Donut / LayoutLMv3** models for OCR & item extraction |
| Infra | **Docker Compose**, **ESLint + Prettier**, **GitHub Actions** CI |

---

## ✨ Key Features

- 📸 **Upload Receipts** — drag & drop or mobile upload  
- 🤖 **AI-powered Parsing** — automatically extracts merchant, date, items, subtotal, tax, and tip  
- 👥 **Smart Splitting** — assign people to items, split equally or by share  
- 💰 **Automatic Tax & Tip Allocation** — proportional and editable  
- 📊 **Instant Summary** — per-person totals and exportable reports  
- 🔒 **Secure Auth** — sign in with Google or GitHub  
- ☁️ **Cloud Storage** — receipts stored safely in S3/MinIO

---

## 🧑‍💻 Local Development

**Requirements:** Node 20+, pnpm, Docker Desktop

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/splitmate.git
cd splitmate

# 2. Install dependencies
pnpm install

# 3. Start Postgres via Docker
docker compose up -d

# 4. Run the dev server
pnpm dev
