# Web IDE with AI Assistant

A modern in-browser developer workspace built with **Next.js**, **TypeScript**, **WebContainers**, and an integrated **AI coding assistant**.

This project combines:
- a **full-featured code playground**
- a **Monaco editor-based IDE**
- **live WebContainer preview**
- an **AI chat assistant** for code review, debugging, optimization, and more

---

## 🚀 Project Overview

`web-ide` is designed to bring the developer experience directly into the browser. It makes it easy to prototype, test, and improve code without leaving the tab.

Key capabilities:
- interactive code editing
- live sandboxed preview using `@webcontainer/api`
- AI-powered guidance through `/api/chat`
- file attachment support for richer context
- syntax-highlighted code blocks, smart suggestions, and runnable code actions

---

## 🎯 Why This Project Matters

This project is built to solve real pain points for developers, teams, and educators:

- **Speed up troubleshooting** by instantly explaining code and suggesting fixes
- **Reduce context switching** by keeping AI assistance inside the editor
- **Enable safer experimentation** using browser-hosted WebContainers
- **Support learning and onboarding** with live feedback and guided code review
- **Improve developer productivity** by pairing code editing with smart assistant actions

---

## 🔥 Industry Use Cases

This project is impactful for:

- **Developer tooling startups** that want an embedded AI-driven workspace
- **Learning platforms** offering interactive coding labs with guided help
- **Technical interviews** and workshops needing live sandboxed coding
- **Internal dev tools** for QA, code review, and prototyping
- **Remote engineering teams** who need shareable, browser-first environments

---

## ✨ Core Features

### AI Assistant

- `AIChatSidePanel` supports:
  - chat
  - code review
  - bug fixes
  - performance optimization
- contextual prompts use:
  - active file name
  - language
  - cursor position
  - attached files

### Smart Suggestions

- generates code suggestions based on:
  - active file content
  - attached code files
  - detected TODO / FIXME comments
- supports:
  - copy
  - insert into active file
  - run code for JS/Python/Bash

### File Attachments

- drag-and-drop file upload
- paste code detection
- automatic language detection
- preview and remove attachments

### WebContainer Playground

- live sandbox environment with:
  - file system sync
  - terminal integration
  - preview of running apps
- powered by `@webcontainer/api`

### Modern UI

- styled with `Tailwind CSS`
- reusable UI components from `components/ui`
- responsive drag/drop and sidebar panels

---

## 🧩 Architecture

### Frontend

- `app/playground/[id]/page.tsx`
  - main playground page
  - integrates editor, file explorer, AI toggle, WebContainer preview
- `modules/playground/...`
  - editor config
  - AI suggestions
  - file explorer
- `modules/ai-chat/components/ai-chat-sidebarpanel.tsx`
  - AI chat panel with attachments, message filtering, settings, export

### Backend

- `app/api/chat/route.ts`
  - receives chat requests
  - forwards prompts to local AI generation service
  - returns AI responses to UI

### WebContainers

- `modules/webcontainers/hooks/useWebContainer.ts`
  - initializes WebContainer
  - writes files into sandbox
  - tears down sessions
- `modules/webcontainers/components/webcontainer-preview.tsx`
  - mounts workspace
  - shows live output

---

## 🛠️ Tech Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Monaco Editor`
- `WebContainers`
- `Next Auth` / `Prisma`
- `React Markdown`
- `Lucide React`
- `Zustand`
- local AI backend via a generation service

---

## 📦 Installation

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

---

## ⚙️ Local AI Requirements

The `/api/chat` route currently forwards requests to:

```txt
http://localhost:11434/api/generate
```

That means a local AI generation service is expected to run during development. This is where the chat assistant gets its responses.

---

## 💡 Real Use Cases

- Ask the assistant to `"Review my React component for performance"` and get improvement suggestions.
- Drop in a `.ts` or `.py` file and request `"Fix TypeScript compilation errors"`.
- Use the live preview to validate changes before exporting code.
- Attach multiple files and receive context-aware AI suggestions.
- Export chat history for audits or documentation.

---

## 🧪 Why It’s Impactful

This project is more than a code editor:
- it blends **editor + terminal + AI**
- it creates a **single workspace** for coding, reviewing, and testing
- it supports **modern developer workflows** in the browser
- it reduces time spent switching between tools

---

## 📝 Recommended Improvements

If you want to extend it further:
- add real code insertion into Monaco editor state
- implement persistent chat history
- connect AI backend to a hosted LLM service
- add multi-file search and refactor support
- support additional languages and runtime environments

---

## 👥 Who Should Use This

- frontend and full-stack engineers
- technical mentors and instructors
- product teams building IDE experiences
- companies building internal developer portals
- anyone wanting a browser-first AI coding workspace

---

## 📌 Summary

`web-ide` is a high-impact developer workspace for modern teams. It uniquely combines:
- browser-hosted sandboxed coding,
- intelligent AI assistance,
- file attachment context,
- and a polished UI.

It's a strong foundation for productivity tooling, learning environments, and AI-assisted engineering workflows.
