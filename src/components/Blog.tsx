import { useState } from "react";
import { Search, User2, Calendar, Clock, X, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { blogPostsData } from "../data";
import { BlogPost } from "../types";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeReadingPost, setActiveReadingPost] = useState<BlogPost | null>(null);

  const categories = ["All", "Tech News", "AI Updates", "Dev Tips", "Insights"];

  // Filter logic
  const filteredAndSearchedPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50/50 py-16 sm:py-24" id="blog-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
            <span>SKI KNOWLEDGE HUB</span>
          </div>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Software, AI, & Technical Insights
          </h2>
          <p className="font-sans text-base text-slate-600 font-medium">
            Stay informed with the latest software development strategies and enterprise machine learning optimization frameworks published by our senior developers.
          </p>
        </div>

        {/* Search and Navigation Rails */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-250 pb-6">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all focus:outline-none ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
                id={`blog-category-btn-${cat.toLowerCase().replace(" ", "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search container */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search articles & tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4 font-sans text-xs font-medium text-slate-800 placeholder-slate-400 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
              id="blog-search-input"
            />
          </div>
        </div>

        {/* Dynamic Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredAndSearchedPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveReadingPost(post)}
              className="group overflow-hidden rounded-2xl border border-slate-150 bg-white shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              id={`blog-article-card-${post.id}`}
            >
              <div className="space-y-4">
                {/* Visual Banner */}
                <div className="relative aspect-video overflow-hidden bg-slate-50 shrink-0">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-blue-600 px-2.5 py-1 font-mono text-[9px] font-bold text-white uppercase tracking-widest shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Body Details */}
                <div className="px-5 space-y-2">
                  <div className="flex items-center gap-3 font-mono text-[9px] font-semibold text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-sans text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-semibold line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Author & Footer Block */}
              <div className="p-5 pt-4 mt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    className="h-7 w-7 rounded-lg object-cover bg-slate-100 border border-slate-150"
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="block font-sans text-[10px] font-bold text-slate-800 leading-none">
                      {post.author.name}
                    </span>
                    <span className="block font-sans text-[9px] text-slate-400 leading-none mt-0.5">
                      {post.author.role}
                    </span>
                  </div>
                </div>

                <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-blue-600 group-hover:text-blue-700">
                  <span>READ ARTICLE</span>
                  <BookOpen className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredAndSearchedPosts.length === 0 && (
          <div className="text-center py-16 border rounded-2xl bg-white max-w-sm ml-auto mr-auto mt-10 space-y-2">
            <Search className="h-10 w-10 text-slate-300 mx-auto" />
            <h4 className="font-bold font-sans text-slate-700">No Articles Found</h4>
            <p className="text-xs text-slate-400">No search results matched your search keywords.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 font-mono text-xs font-bold text-blue-600 hover:underline"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Reading Article Modal Panel */}
        {activeReadingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/45 backdrop-blur-sm animate-fade-in">
            <div
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-150 flex flex-col max-h-[90vh] animate-slide-up"
              id={`reading-modal-${activeReadingPost.id}`}
            >
              {/* Header Visual Image Cover */}
              <div className="relative aspect-video sm:h-56 sm:aspect-auto overflow-hidden bg-slate-50 shrink-0">
                <img
                  className="h-full w-full object-cover"
                  src={activeReadingPost.imageUrl}
                  alt={activeReadingPost.title}
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setActiveReadingPost(null)}
                  className="absolute top-4 right-4 rounded-full bg-slate-900/85 p-2 text-white hover:bg-slate-950 transition-colors focus:outline-none"
                  id="close-blog-modal"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
                <div className="absolute top-4 left-4 rounded-lg bg-blue-600 px-3 py-1 font-mono text-[10px] font-bold text-white tracking-widest shadow">
                  {activeReadingPost.category}
                </div>
              </div>

              {/* Scrollable fully-formatted textual content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[10px] font-bold text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {activeReadingPost.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {activeReadingPost.readTime}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl font-extrabold text-slate-950 leading-snug mt-1.5">
                    {activeReadingPost.title}
                  </h3>
                </div>

                {/* Author Block */}
                <div className="flex items-center gap-3 border-y border-slate-100 py-3 shrink-0">
                  <img
                    className="h-10 w-10 rounded-xl object-cover bg-slate-100 border"
                    src={activeReadingPost.author.avatarUrl}
                    alt={activeReadingPost.author.name}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="block font-sans text-xs font-extrabold text-slate-900">
                      Published By: {activeReadingPost.author.name}
                    </span>
                    <span className="block font-sans text-[10px] text-slate-400 font-semibold">
                      {activeReadingPost.author.role} @ SKI Platform Teams
                    </span>
                  </div>
                </div>

                {/* Article Prose content block with pre-coded structures */}
                <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
                  {activeReadingPost.content.split("\n\n").map((para, i) => {
                    const cleanPara = para.trim();
                    if (!cleanPara) return null;

                    // Bullet points check
                    if (cleanPara.startsWith("* ")) {
                      return (
                        <ul key={i} className="list-disc pl-5 font-sans text-xs sm:text-sm text-slate-650 font-medium space-y-1">
                          {cleanPara.split("\n").map((li, idx) => (
                            <li key={idx} className="font-sans text-xs sm:text-sm">{li.replace("* ", "")}</li>
                          ))}
                        </ul>
                      );
                    }

                    // Deep Headers check
                    if (cleanPara.startsWith("### ")) {
                      return (
                        <h4 key={i} className="font-sans text-base font-extrabold text-slate-950 pt-2 pb-1">
                          {cleanPara.replace("### ", "")}
                        </h4>
                      );
                    }

                    // Bold code block check
                    if (cleanPara.startsWith("**") && cleanPara.endsWith("**")) {
                      return (
                        <p key={i} className="font-semibold text-slate-800 italic text-xs sm:text-sm">
                          {cleanPara.replace(/\*\*/g, "")}
                        </p>
                      );
                    }

                    // Default rendering as solid high-craft text
                    return (
                      <p key={i} className="font-sans text-xs sm:text-sm leading-relaxed font-semibold text-slate-755">
                        {cleanPara}
                      </p>
                    );
                  })}
                </div>

                {/* Tags Bubbles */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                  {activeReadingPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-105 border border-slate-200/50 px-2 py-0.5 font-mono text-[10px] text-slate-600 font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Footer Nav */}
              <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-end shrink-0">
                <button
                  onClick={() => setActiveReadingPost(null)}
                  className="rounded-xl bg-white border border-slate-200 px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 text-xs shadow-3xs"
                >
                  Exit Read Pane
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
