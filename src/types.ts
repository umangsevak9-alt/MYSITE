export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  fullDescription: string;
  features: string[];
  techUsed: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "Websites" | "Mobile Apps" | "E-commerce" | "AI Projects" | "Branding";
  description: string;
  longDescription: string;
  imageUrl: string;
  clientName: string;
  duration: string;
  impactMetrics: string[];
  techStack: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  twitter?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: "Tech News" | "AI Updates" | "Dev Tips" | "Insights";
  summary: string;
  content: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  readTime: string;
  publishedAt: string;
  tags: string[];
}

export interface QuoteRequest {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  projectDescription: string;
  timeline: string;
  status: "Pending" | "Reviewed" | "Contacted" | "Approved";
  createdAt: string;
  adminNotes?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: "Received" | "Replied";
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribedAt: string;
}
