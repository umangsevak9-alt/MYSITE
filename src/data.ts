import { Service, Project, TeamMember, BlogPost } from "./types";

export const servicesData: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    iconName: "Globe",
    description: "High-performance, responsive, and SEO-optimized web systems tailored for business. Built using modern modular frameworks.",
    fullDescription: "In today's digital era, your website is your digital storefront. We design and program bespoke, lightning-fast web architectures prioritizing semantic speed, extreme responsive performance across physical screen orientations, and optimized organic search visibility. From corporate hubs to heavy SaaS app platforms, we engineer websites that turn visits into real business relationships.",
    features: [
      "Custom React & Next.js architectures",
      "Dynamic Headless CMS integrations",
      "Responsive layout optimized for Mobile up to 4K displays",
      "Enterprise SEO metadata structuring",
      "Optimized Core Web Vitals & Load times under 1.2s"
    ],
    techUsed: ["React", "Next.js", "TailwindCSS", "Node.js", "TypeScript"]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    iconName: "Smartphone",
    description: "Multi-platform iOS and Android applications offering smooth, fluid interface gestures and native-level execution.",
    fullDescription: "Engage your customers with high-utility mobile apps that leverage device capabilities perfectly. We build robust hybrid-platform mobile products with Flutter and React Native that share a clean core business engine while maintaining flawless Native-feeling UI/UX transitions, offline synchronization, and rapid secure payment connections.",
    features: [
      "Cross-platform iOS & Android development",
      "Real-time background sync & offline utilities",
      "Native device integration (Biometrics, GPS, Camera)",
      "App Store & Google Play distribution management",
      "Push messaging engines and in-app analytics"
    ],
    techUsed: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    iconName: "Sparkles",
    description: "Intelligent cognitive integrations, LLM pipelines, autonomous agents, and prediction models built for workflow automation.",
    fullDescription: "Incorporate intelligent intelligence directly into your daily enterprise processes. We leverage leading models (including Gemini Pro, custom fine-tunes, and embeddings) to configure robust, secure corporate chat engines, text summaries, predictive classification systems, and autonomous pipeline tasks that reduce administrative overhead.",
    features: [
      "Generative AI & LLM integration (Gemini / OpenAI)",
      "Structured Retrieval-Augmented Generation (RAG)",
      "Document processing & parsing automation",
      "Business analytics forecasting models",
      "Custom neural classification pipelines"
    ],
    techUsed: ["Python", "Gemini API", "PyTorch", "Hugging Face", "LangChain"]
  },
  {
    id: "software-dev",
    title: "Software Development",
    iconName: "CodeXml",
    description: "Robust custom software systems, microservices backends, API gateways, and specialized scalable enterprise workflows.",
    fullDescription: "Off-the-shelf software compromises on your business's unique workflows. Our team plans and deploys custom server software, relational schemas, secure gateways, and background processing systems designed to execute your complex transactions flawlessly at any traffic level.",
    features: [
      "Custom backend API clusters & gateways",
      "High-throughput concurrency queues",
      "Robust automation and cron architectures",
      "Legacy system refactoring and migration",
      "Rigorous unit testing & security validation"
    ],
    techUsed: ["Node.js", "Go", "TypeScript", "PostgreSQL", "Docker"]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    iconName: "PenTool",
    description: "Stunning user experience blueprints, high-fidelity prototypes, interactive flows, and cohesive brand design systems.",
    fullDescription: "Beautiful interfaces bring user clarity. We start by mapping comprehensive user behavior journeys and constructing interactive wireframes, iterating rapidly into pixel-perfect Figma prototypes. We deliver comprehensive asset libraries, design tokens, and CSS parameters to accelerate software engineering.",
    features: [
      "Comprehensive User Journey Mapping (UX)",
      "High-fidelity interactive visual layouts (UI)",
      "Custom vector iconography & illustration systems",
      "Cohesive brand Guidelines & Design Token specs",
      "Accessibility & WCAG compliance review"
    ],
    techUsed: ["Figma", "Adobe CC", "TailwindCSS", "Framer Motion"]
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    iconName: "ShoppingBag",
    description: "High-volume commerce platforms, unified checkout funnels, inventory syncs, and multi-currency billing architectures.",
    fullDescription: "Turn digital shopping into a frictionless pleasure. We program tailored digital checkout funnels, customized Shopify Headless systems, subscription modules, and dynamic inventory synchronization dashboards that connect to ERP configurations with strong fraud-protection protocols.",
    features: [
      "Headless Shopify & custom storefront development",
      "Integrated Stripe, PayPal & Apple Pay structures",
      "Smart dynamic recommendations engine",
      "Omnichannel inventory & ERP synchronizations",
      "Tailored loyalty and discount calculation matrices"
    ],
    techUsed: ["Next.js", "Shopify API", "Stripe", "GraphQL", "TailwindCSS"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    iconName: "Megaphone",
    description: "Data-driven organic SEO amplification, technical conversion rate optimization, and precise ROI-centric media strategies.",
    fullDescription: "Make sure your technology achieves the market awareness it deserves. We develop systematic, multi-channel search optimization plans, technical site improvements, automated content pipelines, and conversion analysis dashboards to maximize acquisition value.",
    features: [
      "Advanced site architecture SEO & ranking audits",
      "High-converting landing page optimization",
      "Automated growth tracking & attribution",
      "Multi-channel growth funnel modeling",
      "Automated email marketing drip-sequences"
    ],
    techUsed: ["Google Analytics", "SEMrush", "Hotjar", "Mailchimp", "Zapier"]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    iconName: "Cloud",
    description: "Secure, auto-scaling cloud architectures, continuous deployment pipelines, and zero-downtime serverless hosting.",
    fullDescription: "Say goodbye to hardware management and expensive over-provisioning. We architect auto-scaling cloud clusters, solid terraform infrastructures, continuous delivery actions (CI/CD), and serverless database structures that handle millions of requests while minimizing server bills.",
    features: [
      "Multi-region auto-scaling setups (AWS, GCP)",
      "Secure VPC, IAM, and TLS certificate setup",
      "Continuous Delivery pipelines (GitHub Actions)",
      "Docker container clusters & orchestration",
      "Active logs monitoring & automated alerts"
    ],
    techUsed: ["AWS", "Google Cloud", "Docker", "Terraform", "GitHub Actions"]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Aura Smart Logistics Platform",
    category: "AI Projects",
    description: "Dynamic route optimization and predictive fleet allocation backend utilizing Gemini AI mapping models.",
    longDescription: "Aura Logistics managed millions of supply deliveries over multiple continents. We engineered a smart logistical interface using custom spatial clustering and predictive weather inputs. By feeding traffic data frames through lightweight prediction layers, the software recalculates optimized schedules, saving hundreds of fleet hours.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    clientName: "Aura Global Logistics",
    duration: "4 Months",
    impactMetrics: [
      "22% reduction in delivery fuel expenses",
      "94.3% on-time dispatch rate",
      "Autonomous scheduling of 800+ trucks"
    ],
    techStack: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Google Maps API"]
  },
  {
    id: "proj-2",
    title: "Vertex Wealth - Mobile Trading Suite",
    category: "Mobile Apps",
    description: "A secure, biometric-enabled stock trading and portfolio asset tracker for high-net-worth investors.",
    longDescription: "Vertex Wealth needed a bulletproof, elegant mobile app that updates stock indices in under 80 milliseconds. We implemented a robust micro-websocket framework in Flutter paired with strict biochemical device security to establish a modern, light-themed luxury visual aesthetic with beautiful SVG area charts.",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    clientName: "Vertex Wealth Management",
    duration: "5 Months",
    impactMetrics: [
      "4.9 App Store user feedback rating",
      "Securely coordinates $1.2B in investor portfolios",
      "Real-time quote latency under 60ms"
    ],
    techStack: ["Flutter", "Dart", "Node.js", "Redis", "WebSockets"]
  },
  {
    id: "proj-3",
    title: "Lumina Organic - Headless Storefront",
    category: "E-commerce",
    description: "Ultra-fast headless shopping interface utilizing React Server Components and global Stripe validation.",
    longDescription: "Lumina Organic's standard monolithic store was sluggish beneath peak traffic. We migrated their entire inventory into a headless GraphQL layer, coding an insanely fast Next.js front-end. Pages load in under 400ms, and complete mobile checkout can be completed in two clicks using saved credit profiles.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    clientName: "Lumina Organic Brands",
    duration: "3 Months",
    impactMetrics: [
      "+38% boost in e-commerce purchase conversion rates",
      "Average digital page response timeline of 320ms",
      "Frictionless Stripe-unified Checkout"
    ],
    techStack: ["Next.js", "React CSS", "GraphQL", "Shopify Storefront", "Stripe API"]
  },
  {
    id: "proj-4",
    title: "Apex Cloud Enterprise Portal",
    category: "Websites",
    description: "An administrative cloud dashboard representing telemetry structures, team logs, and cloud billing monitors.",
    longDescription: "Apex Cloud provides container clustering for startups. We crafted their multi-user client portal, including rich visual canvas maps, active credit calculations, and responsive, interactive server charts powered by D3.js and Tailwind, styled with a brilliant, minimal, neo-brutalist theme.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    clientName: "Apex Cloud Systems",
    duration: "6 Months",
    impactMetrics: [
      "Seamless control dashboard for 50k active machines",
      "Reduced navigation friction by 45%",
      "WCAG 2.1 Double-A standard accessibility score"
    ],
    techStack: ["React", "TypeScript", "D3.js", "TailwindCSS", "AWS SDK"]
  },
  {
    id: "proj-5",
    title: "Vivid Financial - Modern Branding",
    category: "Branding",
    description: "Cohesive visual identity, vector guidelines, digital templates, and design system for a major neo-bank.",
    longDescription: "Vivid wanted to break away from the cold, intimidating colors of traditional retail banking. We designed a welcoming, warm, future-forward brand system using deep charcoal gray, radiant cyan, and soft slate base colors. The design identity was compiled into a living React Web UI component sandbox.",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    clientName: "Vivid Banking Corp",
    duration: "2 Months",
    impactMetrics: [
      "100% unified multi-branch design elements",
      "Ready-to-use digital Figma template libraries",
      "Consolidated 4 bank brands into a sleek modern visual"
    ],
    techStack: ["Figma", "Branding Design", "React components", "CSS variables"]
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Lin",
    role: "Chief Executive Officer & Founder",
    bio: "Former Principal Architect at Google Core Platforms. Over 15 years engineering high-concurrency cloud technologies and machine learning architectures.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    linkedin: "https://linkedin.com/in/sarah-lin",
    twitter: "https://twitter.com/sarahlinkey"
  },
  {
    name: "Marcus Vance",
    role: "Director of Mobile & Web Engineering",
    bio: "Core contributor to major open-source web frameworks. Dedicated to micro-second load speeds, clean modular React architectures, and stellar UI.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
    linkedin: "https://linkedin.com/in/marcus-vance",
    twitter: "https://twitter.com/vancedev"
  },
  {
    name: "Aria Petrov",
    role: "Head of AI Design & Research",
    bio: "M.S. in Machine Learning from Stanford. Expert in training high-performance vector databases, customized fine-tunes, and LLM automation pipelines.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
    linkedin: "https://linkedin.com/in/aria-petrov",
    twitter: "https://twitter.com/ariaintell"
  },
  {
    name: "Devon Shaw",
    role: "Principal Product Designer (UI/UX)",
    bio: "Over 8 years crafting digital products used by millions. Champion of user-first psychology, accessibility (WCAG), and responsive ergonomics.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    linkedin: "https://linkedin.com/in/devon-shaw"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "Leveraging Large Language Models for Enterprise Document Workflows",
    category: "AI Updates",
    summary: "How organizations are utilizing custom embeddings, vector indices, and RAG architectures to automate administrative PDF searching, summarization, and data extraction.",
    content: `Historically, cataloging corporate files meant tedious, manual labor. Emerging Large Language Model (LLM) pipelines are shifting this landscape rapidly.

In this guide, we explore the step-by-step architecture of **Retrieval-Augmented Generation (RAG)** systems:

### 1. Document ingestion and text chunking
By splitting heavy PDFs into small semantic segments (such as 500-character blocks with 50-character overlap), we ensure target relevance.

### 2. High-performance vector embeddings
These text chunks are converted to multi-dimensional vectors using modern embedding models, then organized into highly scalable databases like Pinecone or pgvector.

### 3. Contextual Query Matching
When a human asks a question, the server vectorizes their query, retrieves the mathematically closest paragraphs from the database, and feeds them to the LLM.

The results are astounding: enterprises report **up to 85% reductions** in auditing search delays and total compliance verification costs. Ready to implement AI within your team? Request a consultation through our Quote Form today.`,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Sarah Lin",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80",
      role: "CEO & Founder"
    },
    readTime: "5 Min Read",
    publishedAt: "June 04, 2026",
    tags: ["Artificial Intelligence", "Enterprise", "Workflow Automation", "RAG"]
  },
  {
    id: "blog-2",
    title: "Mastering Core Web Vitals in 2026: Designing for Instant Interaction",
    category: "Dev Tips",
    summary: "Explore standard web rendering techniques to keep your Largest Contentful Paint (LCP) under 1.2s, eliminate layout shifts, and boost SEO organically.",
    content: `Web page loading speed is not just an indicator of system engineering; it is a primary conversion pipeline metric. Studies confirm that pages taking longer than 2.0 seconds to fully render suffer double the bounce rate of sub-second websites.

Let's examine how to optimize the three pillars of Google Core Web Vitals:

### A. Largest Contentful Paint (LCP)
Aim to render your hero section elements in under 1.2 seconds. This is accomplished via:
* **Severe Asset Compression:** Convert imagery into Next-gen formats (WebP/AVIF) and serve through content delivery edges (CDNs).
* **Defer Non-essential JS:** Use async scripts so blocking trackers do not delay structural layout drawing.

### B. Interaction to Next Paint (INP)
This metrics measures visual responsiveness. Maintain sub-40ms feedback loops by:
* Moving long recalculations to background Web Workers.
* Serving instant visual button toggles BEFORE async API requests return responses.

### C. Cumulative Layout Shift (CLS)
Prevent layout jumps by always defining exact height and width attributes on HTML media frames. This reserves exact container space so visual boxes remain firmly locked.`,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Marcus Vance",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80",
      role: "Head of Web Platforms"
    },
    readTime: "4 Min Read",
    publishedAt: "May 28, 2026",
    tags: ["Web Performance", "Next.JS", "SEO Optimization", "CSS"]
  },
  {
    id: "blog-3",
    title: "Why Startups Should Choose Hybrid Flutter Engines for Mobile Assets",
    category: "Insights",
    summary: "Save capital without sacrificing high-fidelity gesture flow. Why Flutter represents a powerful unified mobile solution for rapid early-stage scaling.",
    content: `When building an early stage venture, budget and dispatch speed are competitive metrics. Programming separate Native iOS (Swift) and Android (Kotlin) app trees duplicates developers, development timelines, and QA debugging workloads.

Here is why cross-compiled **Flutter** remains our recommendation for startup mobile clients:

### 1. Singular, Consolidated Source Tree
Engineers write a single Dart logic tree. All subsequent feature updates, network client APIs, and data validations deploy simultaneously to both stores, reducing active development costs.

### 2. High-Fidelity Custom Render Engine
Unlike hybrid applications that run slow web views, Flutter writes canvas graphics directly via Skia / Impeller. This ensures heavy scroll gestures, charts, and slide modals maintain a flawless 60fps frame layout.

### 3. Immediate Hot-Reload Iteration
Design feedback occurs in seconds, allowing you to fine-tune visual margins instantly during meetings, significantly cutting timeline cycles.`,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Aria Petrov",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
      role: "AI & Innovation Lead"
    },
    readTime: "6 Min Read",
    publishedAt: "May 15, 2026",
    tags: ["Mobile Development", "Flutter", "Startup Growth", "App Store"]
  }
];

export const testimonialsData = [
  {
    quote: "SKI Technologies did an exceptional job building our digital inventory dashboard. From the initial layout mockups down to background task loading speed, their engineering team was incredibly competent.",
    author: "Richard Holloway",
    role: "VP of Digital Innovation at Aura Logistics",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    quote: "Integrating a predictive AI classifier onto our legal compliance reviews was completed in half of the anticipated time. Their knowledge of security pipelines and clean REST servers is unparalleled.",
    author: "Melissa Drake",
    role: "General Counsel, Vertex Wealth",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    quote: "The brand design system, interactive Figma guides, and custom React server pages completely transformed how our neo-bank looks to heavy institutional investors. Highly recommended!",
    author: "Julian Thorne",
    role: "Co-Founder, Vivid Bank",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  }
];
