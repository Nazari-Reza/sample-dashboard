# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/sample-dashboard.git
cd sample-dashboard
npm install
npm start
```

**Test credentials:** `emilys` / `emilyspass`

---

## ✨ Features

| Page               | Highlights                                                           |
| ------------------ | -------------------------------------------------------------------- |
| 🔐 **Login**       | JWT auth via DummyJSON, Axios interceptor, persistent session        |
| 👥 **Users**       | Virtualized table (`react-window`), server-side pagination & search  |
| 🎮 **Games**       | Card grid, multi-filter bar, debounced search, server-side filtering |
| 🕹️ **Game Detail** | Hero image, Metacritic badge, ratings breakdown, stores & tags       |

**MultiSelect component** (pure React, zero UI libraries): multi-choice, search, grouping, select all/none, count badge, `react-window` virtualization at 30+ items.

---

## 🛠️ Tech Stack

`React 18` · `TypeScript` · `TailwindCSS` · `React Router v6` · `Axios` · `react-window`

---

## 📁 Structure

```
src/
├── api/            # types.ts · dummyjson.ts · rawg.ts
├── context/        # AuthContext.tsx
├── hooks/          # useUsers · useGames · useGameDetail · useFilterOptions
├── components/
│   ├── layout/     # AppLayout · Sidebar · Navbar
│   ├── ui/         # GameCard · Badge · Pagination · SearchBar
│   └── guards/     # ProtectedRoute
└── pages/          # Login · Users · Products
```

---

## 📦 Install Dependencies

```bash
npm install axios react-router-dom react-window
npm install -D tailwindcss postcss autoprefixer @types/react-window
```

---

## 🗺️ Routes

| Path            | Page        | Auth   |
| --------------- | ----------- | ------ |
| `/login`        | Login       | Public |
| `/users`        | Users table | ✓      |
| `/products`     | Games grid  | ✓      |
| `/products/:id` | Game detail | ✓      |

---
