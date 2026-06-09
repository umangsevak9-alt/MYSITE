# 🏔️ SKI Technologies - Premium Professional Portal

An enterprise-ready, premium technology portal for **SKI Technologies**, featuring a high-fidelity design, responsive interface, tailored service blueprints, a dynamic project scope estimator with regional-specific pricing (INR), a local administrative dashboard, and responsive interactive modules.

---

## 🎨 Visual Identity & Brand Design
- **Modern Minimalist Logo:** Custom-designed vector logo featuring a modern dual-peak ski design with negative space and gradient accents.
- **Dynamic Accent Typography:** Pristine layout pairing displaying custom responsive designs, balanced negative space, and modern cursor feedback.
- **Responsive Navigation:** Clean sticky navigation headers & responsive components optimized perfectly for desktop and mobile viewport bounds.

---

## 🚀 Key Features

### 💻 Tech Portal Modules
- **Interactive Home (Hero):** Beautiful animated entrance introducing the SKI Technologies mission statement with streamlined CTA directions.
- **Dynamic Project Cost Estimator (Quote Tool):**
  - Instant estimates on development timescales, hour requirements, and resource allocation.
  - Tailored to regional local metrics with local estimated cost margins (e.g., **₹20,000 - ₹25,000 INR** base for web solutions).
  - Syncs and links automatically to submission flows.
- **Administrative Portal:**
  - Secure offline credential gating (Configured for custom secure keys).
  - Complete review deck of incoming simulated quote submissions.
  - Status management controls allowing administrators to approve, review, or archive active project proposals.
- **Portfolio & Client Reviews:** Showcasing mock case studies and premium client testimonials.
- **Interactive Blog & Contact Desk:** Readily accessible contact routing with seamless lead capture forms.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4 Utility Classes
- **Interface Icons:** Lucide React
- **Animations:** Motion (Framer Motion)
- **Type Safety:** Full TypeScript static compilation

---

## ⚙️ Getting Started Locally

Follow these quick steps to set up, run, and compile the SKI Technologies portal on your local development build system.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### 1. Hook up the Repository
Clone your exported or imported GitHub repository and enter its root directory:
```bash
git clone <your-repository-url>
cd <repository-name>
```

### 2. Install Project Dependencies
Run `npm` to retrieve and configure all necessary packages:
```bash
npm install
```

### 3. Run Development Server
Boot up the fast Vite HMR development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser of choice.

### 4. Build for Production
To compile and bundle a production-ready optimized static build into the `/dist` directory:
```bash
npm run build
```

### 5. Code Validation & Linting
Validate codebase type integrity and check for any syntax or static errors:
```bash
npm run lint
```

---

## 📁 Directory Layout
```tree
├── src/
│   ├── components/            # Interactive modular views & UI layouts
│   │   ├── About.tsx          # Team profile and company outline
│   │   ├── AdminLogin.tsx     # Secured login panel for administrators
│   │   ├── AdminPanel.tsx     # Submission management logs and controls
│   │   ├── QuoteForm.tsx      # Multi-metric dynamic budget & scope estimator
│   │   ├── Navbar.tsx         # Responsive sticky header with modern branding
│   │   ├── Footer.tsx         # Structured footer layout
│   │   └── ...
│   ├── App.tsx                # Context router, state controller, and core page views
│   ├── data.ts                # Mock database, case studies, and services specifications
│   ├── types.ts               # Shared TypeScript schemas, enums, & contract interfaces
│   ├── main.tsx               # Applet bootstrap entry point
│   └── index.css              # Global styles featuring Tailwind CSS directives
├── vite.config.ts             # Custom Vite build & server configuration
├── tsconfig.json              # TypeScript compilation attributes
└── package.json               # Manifest dependencies & run scripts
```

---

## 🔐 Administrative Access
Access to the local proposals deck can be authenticated on the Admin view using your custom private keys:
- **Username:** `umangsevak`
- **Password:** `Umang0822@`
