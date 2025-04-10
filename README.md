# 💡 Code Snippets App

A sleek and minimal **code snippets manager** built with **Next.js App Router**, **Prisma**, and **SQLite**. Easily create, edit, and delete code snippets with caching support for fast and efficient rendering.

---

## 🚀 Features

- 📝 Add, edit, and delete code snippets
- 🔍 View individual snippets by ID
- ⚡ Fast performance with caching strategies (SSG, ISR)
- 🧠 Supports `generateStaticParams` and on-demand caching
- 📦 Lightweight SQLite database using Prisma ORM
- 🧼 Clean and responsive UI with modern design

---

## 🛠️ Tech Stack

- [Next.js 13+ App Router](https://nextjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Tailwind CSS](https://tailwindcss.com/) *(or your styling of choice)*
- [TypeScript](https://www.typescriptlang.org/) *(if used)*

---

## 🗃️ Prisma Schema

Your database is managed via Prisma and SQLite.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Snippet {
  id    Int    @id @default(autoincrement())
  title String
  code  String
}
