# ⚡ Priyanshu Shekhar — 3D Interactive Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-priyanshushekhar1319.github.io%2Fportfolio-00E5FF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://priyanshushekhar1319.github.io/portfolio/)
[![Careerthon Live](https://img.shields.io/badge/Flagship%20SaaS-carrerthon.in-10B981?style=for-the-badge&logo=vercel&logoColor=white)](https://carrerthon.in/)
[![LeetCode Knight](https://img.shields.io/badge/LeetCode%20Knight-1950%20Rating%20(Top%203.6%25)-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/)
[![Walmart SparkPlug](https://img.shields.io/badge/Walmart%20SparkPlug-Top%201%25%20Finalist-0071CE?style=for-the-badge&logo=walmart&logoColor=white)](https://walmart.com)
[![Codeforces](https://img.shields.io/badge/Codeforces-1595%20Specialist-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white)](https://codeforces.com/)

> **Welcome to the official 3D interactive portfolio of Priyanshu Shekhar** — Full-Stack Engineer, AI/ML Developer, and Systems Architect. Built with an ultra-responsive 360° volumetric turntable canvas, Apple-grade spring physics, dark cyber-minimalist aesthetics, and real-time live transmission dispatch.

---

## 🌐 Quick Links & Live Deployments

| Resource | Link | Description |
| :--- | :--- | :--- |
| 🚀 **Live Interactive Portfolio** | **[priyanshushekhar1319.github.io/portfolio](https://priyanshushekhar1319.github.io/portfolio/)** | Worldwide CDN-hosted GitHub Pages deployment |
| 💼 **Careerthon (Flagship SaaS)** | **[carrerthon.in](https://carrerthon.in/)** | Production AI Resume & Profile Intelligence Platform |
| 💻 **GitHub Profile** | **[github.com/priyanshushekhar1319](https://github.com/priyanshushekhar1319)** | Open-source repositories & engineering projects |
| ✉️ **Direct Email** | `priyanshushekhar616@gmail.com` | Primary professional inbox |
| 💬 **WhatsApp Express Channel** | **[+91 9142774437](https://wa.me/919142774437)** | Fast recruiter & client inquiries |

---

## 📸 Portfolio Preview & Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│  Priyanshu.   [Home] [About] [Expertise] [Projects] [Honors] [Contact] │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   HI, I'M PRIYANSHU                 // TURNING IDEAS INTO REALITY      │
│   CREATIVE                        Available for hire. Building fast,   │
│   DEVELOPER                       responsive web apps.                 │
│                                                                        │
│                      ┌──────────────────────┐                          │
│                      │    360° VOLUMETRIC   │                          │
│                      │   TURNTABLE AVATAR   │                          │
│                      │   (Smooth Drag 60FPS)│                          │
│                      └──────────────────────┘                          │
│                                                                        │
│   ↔ DRAG TO ROTATE 360°                 [View My Work]  [Contact Me]   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🌟 Key Technical Features

### 1. 🔄 360° Volumetric Turntable Canvas Engine
- **Ultra-Lightweight Preloaded WebP Array**: 60 high-definition, transparent WebP frames preloaded directly into memory with zero network delay during rotation.
- **Sub-Millisecond 2D Blit**: Canvas blitting using `ctx.drawImage` triggered via `requestAnimationFrame` with interpolation.
- **Natural Spring Damping**: Custom drag physics (`targetIndex` with `0.12` spring damping factor) calibrated at 750px of horizontal drag per complete 360° turn for buttery-smooth interaction.
- **Decoupled Scroll**: Hero viewport is strictly decoupled from document scroll, enabling users to rotate the avatar freely without hijacking page navigation.

### 2. 🎨 Studio Minimalist Lighting & Rim Glow
- Luminous soft-white diffuse radial spotlight centered behind the avatar (`rgba(255, 255, 255, 0.58)` diffuse core falling off to deep obsidian `#09090D`).
- Subtle rim lighting halo highlights silhouette boundaries naturally without harsh pixel edges or fog artifacts.

### 3. 🍱 Bento Grid System Profile
- Modular glassmorphism bento cards featuring live status badges (`OPEN TO OPPORTUNITIES 2026`).
- Deep architecture summaries covering Full-Stack, React/Node concurrency, High Scalability (50K+ users, 99.95% SLA), and Data Analytics (2.5M+ records, complex CTEs).

### 4. ♾️ Continuous Skill Marquee & Core Execution Root Map
- Hardware-accelerated CSS infinite marquee showcasing Generative AI, LLMs, Golang, Spring Boot, React, PostgreSQL, Redis, Docker, and Kubernetes.
- 4 Core Execution Roots:
  - **ROOT 01**: Frontend Development (React & Tailwind)
  - **ROOT 02**: Backend Development (Node.js & Databases)
  - **ROOT 03**: AI & Machine Learning (Generative AI & LLMs)
  - **ROOT 04**: Cloud & Deployment (Docker & CI/CD)

### 5. ⚡ Live Dispatch Node & Real-Time JSON Stream
- **Interactive JSON Preview**: Form inputs dynamically synchronize in real time to a live syntax-highlighted `payload_preview.json` code block (`sender`, `email`, `message`, TLS v1.3 indicator).
- **Direct Mail Pipeline**: Seamless asynchronous submission powered by FormSubmit with encrypted direct inbox delivery to `priyanshushekhar616@gmail.com`.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | HTML5, Modern Vanilla JavaScript (ES6+), Canvas 2D API |
| **Styling & Design** | Tailwind CSS (JIT CDN), Custom CSS3 Tokens, Glassmorphism, Micro-animations |
| **Typography & Icons** | Plus Jakarta Sans, Syne, JetBrains Mono, Lucide Icons |
| **Backend & Microservices** | Java Spring Boot, Node.js, Express, RESTful APIs, JWT Auth, RBAC |
| **Database & Caching** | PostgreSQL, Redis In-Memory Caching, SQL CTEs |
| **AI / ML & Analytics** | Generative AI, LLMs, Prompt Engineering, ATS Scoring Engine, Python ETL, Power BI DAX |
| **DevOps & Hosting** | Docker, Git, GitHub Actions, GitHub Pages Global CDN (HTTP/2, TLS v1.3) |

---

## 🚀 Featured Engineering Projects

### 1. [Careerthon — AI Resume & Profile Intelligence SaaS](https://carrerthon.in/)
* **Live Platform**: [https://carrerthon.in/](https://carrerthon.in/)
* **Role**: Lead Architect & Full-Stack Developer
* **Impact**:
  - Scaled multi-tenant AI resume intelligence platform serving **50,000+ active professionals**.
  - Implemented multi-criteria weighted scoring engine analyzing resumes across **18+ ATS dimensions**.
  - Optimized document extraction pipeline achieving **<200ms parsing latency** with **99.4% text fidelity**.
  - Sustained **99.95% SLA uptime** backed by Redis caching and resilient Spring Boot microservices.
* **Stack**: Java Spring Boot, React.js, PostgreSQL, Redis, Docker, CI/CD.

### 2. Customer Intelligence & Churn Platform (Sasken Technologies)
* **Role**: Software Engineering Intern
* **Impact**:
  - Engineered secure RESTful microservices with JWT-based RBAC and Redis caching layer, dropping P95 latency by **65% (420ms → 145ms)**.
  - Built automated batch ETL pipelines querying **2.5M+ records** across distributed data sources.
  - Integrated statistical churn prediction model delivering **82% predictive accuracy**.
  - Reduced critical MIS turnaround time from 2 hours to **under 15 minutes**.
* **Stack**: React.js, Spring Boot, PostgreSQL, Power BI, Python ETL.

---

## 🏆 Algorithmic Mastery & Competitive Highlights

* ⚔️ **LeetCode Knight — 1950 Rating**
  * Top **3.6% globally** among millions of competitive programmers.
  * Solved **1000+ Data Structures & Algorithms problems**.
  * Secured Global Contest Ranks **489** & **499** in LeetCode Weekly Contests.
* ⚡ **Walmart SparkPlug — Top 1% Finalist**
  * Ranked in the **Top 1%** nationwide out of **19,700+ competing engineering teams**.
* 🎯 **Codeforces Specialist — 1595 Max Rating**
  * Global Rank **190** in Round 1093 (Div. 2) among **42,000+ coders worldwide**.
* 🥇 **Techno-Thon 2.0 — 2nd Place Winner**
  * Outperformed **180+ teams nationwide** in high-intensity 24-hour product hackathon.

---

## 📂 Repository File Structure

```text
portfolio/
├── .gitignore                    # Excludes raw video captures and build scratch files
├── README.md                     # Comprehensive repository documentation
├── index.html                    # Semantic HTML5 single-page application & layout
├── style.css                     # Custom design tokens, glassmorphism, lighting glows
├── script.js                     # 3D canvas turntable engine, spring physics, dynamic JSON
├── perfect_white_front.png       # Front-facing studio portrait
├── perfect_white_left.png        # Left profile studio portrait
├── perfect_white_back.png        # Back profile studio portrait
├── perfect_white_right.png       # Right profile studio portrait
├── priyanshu_seamless_front.png  # Seamless bento grid profile photograph
└── frames_transparent/           # 60 optimized WebP frames for 360° turntable (f_000.webp -> f_059.webp)
```

---

## 💻 Local Development Setup

To run and test the portfolio locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/priyanshushekhar1319/portfolio.git
cd portfolio
```

### 2. Run a local development server
Because canvas blitting and WebP asset loading rely on standard HTTP fetch/Image mechanisms, serve the folder through any local web server:

**Using Python 3:**
```bash
python -m http.server 5500
```

**Using Node.js (`serve`):**
```bash
npx serve -l 5500 .
```

**Using VS Code:**
- Install the **Live Server** extension.
- Right-click `index.html` and select **"Open with Live Server"**.

### 3. Open in your browser
Navigate to:
```text
http://localhost:5500/
```

---

## 🚢 Deployment (GitHub Pages)

This project is deployed to GitHub Pages directly from the `master` branch:

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio features"
   git push origin master
   ```
2. In GitHub repository settings:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: `master`, Folder: `/ (root)`, and click **Save**.
3. Live within seconds at:
   ```text
   https://priyanshushekhar1319.github.io/portfolio/
   ```

---

## 📬 Contact & Connect

* **Full Name**: Priyanshu Shekhar
* **Email**: [priyanshushekhar616@gmail.com](mailto:priyanshushekhar616@gmail.com)
* **Phone / WhatsApp**: [+91 9142774437](https://wa.me/919142774437)
* **Portfolio**: [https://priyanshushekhar1319.github.io/portfolio/](https://priyanshushekhar1319.github.io/portfolio/)
* **GitHub**: [github.com/priyanshushekhar1319](https://github.com/priyanshushekhar1319)

---

<div align="center">
  <sub>Designed & engineered with precision by <b>Priyanshu Shekhar</b> © 2026. All rights reserved.</sub>
</div>
