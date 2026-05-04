<div align="center">

<img src="https://img.shields.io/badge/SunCart-Summer%20Essentials-orange?style=for-the-badge&logo=shopify&logoColor=white" alt="SunCart" />

# ☀️ SunCart — Summer Essentials Store

**Your one-stop destination for summer must-haves.**  
Dive into a world of curated products, blazing deals and a seamless shopping experience — all under one sunny roof.

</div>

---

## 🌴 Overview

**SunCart** is a fully-featured, production-grade e-commerce web application built for summer lifestyle shopping. From skincare to sports gear, footwear to electronics, SunCart brings together **10+ curated categories** and top-tier brands like Nike, Apple, Adidas and Samsung — all wrapped in a fast, animated and responsive UI.

Whether you're browsing flash sales with live countdown timers, discovering summer wellness tips or checking out in under 30 seconds — SunCart delivers a premium shopping experience from end to end.

---

## 🔗 Live Links

| Name | Link |
|---|---|
| 🌐 **Live App** | [a8-suncart-pi.vercel.app](https://a8-suncart-pi.vercel.app/) |
| 🖥️ **Client Repo (Next.js)** | [github.com/nihalxofficial/suncart-client](https://github.com/nihalxofficial/A8-SunCart) |
| 🗄️ **JSON Server Repo** | [github.com/nihalxofficial/suncart-server](https://github.com/nihalxofficial/SunCart-Server) |
| ☁️ **API Server (Render)** | [suncart-server.onrender.com](https://suncart-server.onrender.com/) |

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 🔥 **Flash Sales** | Live countdown timers with dynamic deal banners |
| 🔐 **Authentication** | Email/password + Social Login (Google etc.) |
| 👤 **User Management** | Update profile, delete account |
| 🗂️ **Category Browsing** | 10+ categories: Clothing, Skincare, Electronics and more |
| 🏷️ **Top Brands** | Nike, Apple, Adidas, Samsung — with brand-specific pages |
| 🌐 **Remote Images** | Next.js optimized remote image delivery |
| 🔒 **Protected Routes** | Middleware-based proxy route protection |
| 🎨 **Rich Animations** | Animate.css + Lottie React micro-interactions |
| 📱 **Responsive Design** | Fully mobile-first layout |
| 🔍 **SEO Ready** | Dynamic metadata per page |

---

## 🛠️ Tech Stack

### 🎨 Frontend

| Technology | Purpose |
|---|---|
| **Next.js** | React framework with App Router, SSR & SSG |
| **Tailwind CSS** | Utility-first styling & Responsive design |
| **HeroUI** | Accessible, elegant UI component library |
| **Lucide React** | Clean, consistent icon set |
| **React Icons** | Extended icon library |
| **Gravity UI Icons** | Additional icon variety |
| **Google Fonts** | Custom web typography |
| **Lottie React** | Smooth JSON-based vector animations |
| **Swiper** | Touch-friendly product carousels & sliders |
| **Marquee** | Scrolling brand/promo announcement strips |
| **React Countdown** | Live flash sale countdown timers |
| **React Toast** | Elegant toast notification system |

### 🔧 Backend & Database

| Technology | Purpose |
|---|---|
| **MongoDB** | Primary NoSQL database |
| **MongoDB Atlas** | Cloud-hosted managed database |
| **MongoDB Adapter** | Auth integration with MongoDB |
| **Better Auth** | Modern authentication framework |
| **JSON Server** | Lightweight REST API for dev/mock data |
| **Render** | Server-side API deployment |

### ☁️ Deployment

| Platform | Role |
|---|---|
| **Vercel** | Client-side (Next.js frontend) hosting |
| **Render** | Server-side (API/backend) hosting |

---

## 🗂️ Project Topics & Concepts

```
✅ Remote Image Optimization      — Next.js Image with external domains
✅ Filter By Category             — Dynamic URL-based category filtering
✅ Authentication                 — Secure session-based auth with Better Auth
✅ Social Login                   — OAuth provider integration (Google, etc.)
✅ Metadata                       — SEO-friendly dynamic page metadata
✅ Protected Routes (Proxy)       — Middleware-level access control
✅ Update User                    — Edit profile information
✅ Delete User                    — Account deletion support
✅ Google Font                    — Custom font loading via Next.js font API
```

---

## 🗃️ Product Categories

SunCart features **10+ summer-curated categories**:

> 👜 Accessories &nbsp;|&nbsp; 👟 Footwear &nbsp;|&nbsp; 📱 Electronics &nbsp;|&nbsp; 🧴 Essentials &nbsp;|&nbsp; 🌿 Skincare  
> ⚽ Sports &nbsp;|&nbsp; 🏕️ Outdoor &nbsp;|&nbsp; 👗 Clothing &nbsp;|&nbsp; 🏠 Appliances &nbsp;|&nbsp; 🥤 Beverages &nbsp;|&nbsp; 🎒 Bags

---

## 🏷️ Featured Brands

| Brand | Category | Offer |
|---|---|---|
| 🏃 **Nike** | Sports & Footwear | Up to 50% OFF |
| 🍎 **Apple** | Electronics | Special Deals |
| ⚡ **Adidas** | Sports & Fashion | Buy 1 Get 1 |
| 📺 **Samsung** | Electronics | Exchange Bonus |

---

## 🔐 Authentication Flow

SunCart uses **Better Auth** — a modern authentication library — integrated with **MongoDB Atlas** via the MongoDB Adapter.

- 📧 Email & Password login  
- 🌐 Social Login (OAuth — Google and more)  
- 🔒 Session-based secure authentication  
- 🛡️ Middleware-protected routes using Next.js Proxy  
- 👤 Update user profile  
- 🗑️ Delete user account  

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB Atlas account
- Vercel account (for deployment)
- Render account (for API server)

### Installation

```bash
# Clone the repository
git clone https://github.com/nihalxofficial/A8-SunCart
cd suncart

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
# MongoDB
MONGODB_URI=your_mongodb_atlas_uri

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# OAuth (Google)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# API Server (JSON Server on Render)
NEXT_PUBLIC_API_URL=your_render_api_url
```

### Run Locally

```bash
# Start Next.js development server
npm run dev

# Start JSON Server (in a separate terminal)
npx json-server --watch db.json --port 5000
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🌞

---

## 🎨 UI Highlights

- **Hero Carousel** — Auto-playing Swiper banners with Summer Sale, Flash Sale, Express Checkout & Secure Payment slides  
- **Flash Sale Timer** — Real-time countdown built with React Countdown  
- **Brand Marquee** — Infinite scrolling brand strip  
- **Lottie Animations** — Lightweight vector animations for loading & empty states  
- **HeroUI Components** — Consistent, accessible design system  

---

## 🌞 Summer Care Section

A unique wellness-focused section on the homepage offering **6 summer health tips** — hydration, sun protection, skincare, cool showers, diet and sleep — with interactive progress indicators and pro tips. A delightful touch that adds value beyond just shopping.

---

## 📦 Deployment Architecture

```
User Browser
     │
     ▼
┌──────────────┐         ┌─────────────────┐
│   Vercel     │◄───────►│   Render        │
│  (Next.js)   │  HTTP   │  (JSON Server)  │
│  Frontend    │         │  REST API       │
└──────┬───────┘         └─────────────────┘
       │
       ▼
┌──────────────┐
│ MongoDB Atlas│
│  (Database)  │
└──────────────┘
```

---

## 🗄️ JSON Server — Mock API Repo

SunCart's product data, categories and mock listings are powered by **JSON Server** — a zero-config REST API that runs on a simple `db.json` file. It's deployed on **Render** to serve the Next.js frontend in production.

### 📦 Repository

> 🔗 **[github.com/nihalxofficial/suncart-json-server](https://github.com/nihalxofficial/SunCart-Server)**  

### What it provides

| Endpoint | Description |
|---|---|
| `GET /products` | All products |
| `GET /categories` | All categories |

### Run JSON Server locally

```bash
# Clone the JSON Server repo
git clone https://github.com/nihalxofficial/SunCart-Server
cd suncart-server

# Install dependencies
npm install

# Start the server (default port 5000)
npm run server

# Or run directly
npx json-server --watch db.json --port 5000
```

> The server will be live at `http://localhost:5000`

### Deploy on Render

1. Push your JSON Server repo to GitHub  
2. Go to [render.com](https://render.com) → **New Web Service**  
3. Connect your GitHub repo  
4. Set **Start Command** to: `npx json-server --watch db.json --port 5000`  
5. Set **Port** to `5000`  
6. Deploy — Render gives you a public URL to use as `NEXT_PUBLIC_API_URL`

---

## 🙌 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

1. Fork the repository  
2. Create your feature branch: `git checkout -b feature/amazing-feature`  
3. Commit your changes: `git commit -m 'Add amazing feature'`  
4. Push to the branch: `git push origin feature/amazing-feature`  
5. Open a Pull Request  

---

<div align="center">

Made with ☀️ and passion — **SunCart** | Bringing summer to your doorstep.

</div>