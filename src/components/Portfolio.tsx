import { useState } from "react";
import { Filter, Calendar, FolderGit, TrendingUp, X, CheckCircle, ExternalLink } from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ["All", "Websites", "Mobile Apps", "E-commerce", "AI Projects", "Branding"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white py-16 sm:py-24" id="portfolio-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
            <span>OUR VERIFIED CASE HISTORY</span>
          </div>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Commercial Software Assets Delivered Worldwide
          </h2>
          <p className="font-sans text-base text-slate-600 font-medium">
            Review the architecture, metrics, and business optimizations driving our completed operational software deployments.
          </p>
        </div>

        {/* Filter Navigation Rails */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all focus:outline-none ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-100 ring-offset-1"
                  : "bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100 hover:text-slate-900"
              }`}
              id={`portfolio-filter-btn-${cat.toLowerCase().replace(" ", "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectModal(project)}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
              id={`portfolio-card-${project.id}`}
            >
              {/* Media Block */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 rounded-lg bg-white/95 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] font-bold text-blue-700 uppercase tracking-widest shadow-sm">
                  {project.category}
                </div>
              </div>

              {/* Text Block */}
              <div className="p-5 space-y-3">
                <span className="block font-sans text-[11px] font-bold text-slate-400 capitalize">
                  CLIENT: {project.clientName}
                </span>
                <h3 className="font-sans text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                  {project.description}
                </p>

                {/* Inline Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded bg-slate-50 border border-slate-100 px-2 py-0.5 font-mono text-[9px] text-slate-500">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="rounded bg-blue-50 border border-blue-100 px-2 py-0.5 font-mono text-[9px] text-blue-600 font-bold">
                      +{project.techStack.length - 3} MORE
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border rounded-2xl bg-slate-50 ml-auto mr-auto max-w-sm mt-10 space-y-2">
            <FolderGit className="h-10 w-10 text-slate-300 mx-auto" />
            <h4 className="font-bold font-sans text-slate-700">No Projects Found</h4>
            <p className="text-xs text-slate-400">We are currently updating our assets under this category.</p>
          </div>
        )}

        {/* Detailed Case Study Overlay Modal Frame */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
            <div
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] animate-slide-up"
              id={`portfolio-modal-${activeProjectModal.id}`}
            >
              {/* Media Cover */}
              <div className="relative aspect-video sm:h-64 sm:aspect-auto overflow-hidden bg-slate-100 shrink-0">
                <img
                  className="h-full w-full object-cover"
                  src={activeProjectModal.imageUrl}
                  alt={activeProjectModal.title}
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="absolute top-4 right-4 rounded-full bg-slate-900/75 p-2 text-white hover:bg-slate-900 transition-colors focus:outline-none"
                  id="close-portfolio-modal"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
                <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1 font-mono text-[10px] font-bold text-blue-700 uppercase tracking-widest shadow">
                  {activeProjectModal.category}
                </div>
              </div>

              {/* Scrollable details area */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <span className="font-mono text-[10px] font-bold text-blue-600 tracking-wider block uppercase">
                    Detailed Case Analysis
                  </span>
                  <h3 className="font-sans text-2xl font-extrabold text-slate-950 mt-1">
                    {activeProjectModal.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-slate-100 py-4 font-sans text-xs">
                  <div>
                    <span className="block text-slate-400 font-medium">Customer Brand</span>
                    <span className="font-bold text-slate-800">{activeProjectModal.clientName}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-medium">Delivery Speed</span>
                    <span className="font-bold text-slate-800 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {activeProjectModal.duration}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="block text-slate-400 font-medium">Integration Status</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5" /> Direct Production
                    </span>
                  </div>
                </div>

                {/* Substantive long analysis copy */}
                <div className="space-y-2">
                  <h4 className="font-sans text-sm font-bold text-slate-900">Project Overview & Objectives</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    {activeProjectModal.longDescription}
                  </p>
                </div>

                {/* KPI Metrics */}
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-5 space-y-3">
                  <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    Verified Commercial KPIs Achieved:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeProjectModal.impactMetrics.map((met, i) => (
                      <div key={i} className="bg-white border rounded-lg p-3 shadow-2xs">
                        <span className="font-mono text-xs font-bold text-indigo-600 block">0{i + 1}. ACHIEVEMENT</span>
                        <span className="font-sans text-xs font-semibold text-slate-700 leading-normal block pt-1">{met}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Tech Pills */}
                <div className="space-y-2">
                  <span className="font-sans text-[11px] font-bold text-slate-400 block uppercase tracking-wide">
                    Comprehensive Engineering Stack utilized:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProjectModal.techStack.map((tech) => (
                      <span key={tech} className="rounded-lg bg-indigo-50 border border-indigo-100/60 px-2.5 py-1 font-mono text-xs text-indigo-700 font-semibold uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-end shrink-0 gap-3">
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 text-xs shadow-2xs"
                >
                  Close Case History
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
