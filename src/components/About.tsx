import { ShieldCheck, Heart, Users, Target, Rocket, Mail } from "lucide-react";

interface AboutProps {
  onQuoteClick: () => void;
}

export default function About({ onQuoteClick }: AboutProps) {
  return (
    <div className="bg-white py-16 sm:py-24" id="about-us-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
            <span>ABOUT OUR ECOSYSTEM</span>
          </div>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            We Architect Future-Proof Digital Infrastructures
          </h2>
          <p className="font-sans text-base text-slate-600 font-medium">
            SKI Technologies began as a core group of server engineers and product designers in Silicon Valley. Today, we deliver enterprise-ready web, mobile, and machine learning pipelines globally.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-sans text-xl font-bold text-slate-900">Our Strategic Mission</h3>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              To empower commercial enterprises and visionaries with elite, scalable, and beautifully programmed digital assets. We replace operational fragmentation with clean, maintainable code architectures and automated intelligence logic.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="font-sans text-xl font-bold text-slate-900">Our Global Vision</h3>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              To be the premier engineering partner for global software products. We aim to establish standard frameworks where predictive AI, real-time database interfaces, and intuitive UX converge seamlessly on the open web.
            </p>
          </div>
        </div>

        {/* Core Value Pillars - Why Choose Us */}
        <div className="mt-20">
          <h3 className="font-sans text-2xl font-bold text-center text-slate-900">
            Why Forward-Thinking Partners Choose SKI
          </h3>
          <p className="text-center font-sans text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            We focus on technical excellence and deep mutual trust rather than rapid, low-quality software output.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
                bg: "bg-emerald-50",
                title: "Absolute Code Quality",
                desc: "We write clean, strictly typed, and thoroughly scrutinized modular React/TS and Go servers.",
              },
              {
                icon: <Users className="h-5 w-5 text-blue-600" />,
                bg: "bg-blue-50",
                title: "Senior Product Architects",
                desc: "Your project is completely led and compiled by seasoned engineers with FAANG and high-scale backgrounds.",
              },
              {
                icon: <Rocket className="h-5 w-5 text-indigo-600" />,
                bg: "bg-indigo-50",
                title: "Extreme Speed Mechanics",
                desc: "We optimize server cold-starts, client asset bundle sizes, and visual layouts for instantly snappy load speeds.",
              },
              {
                icon: <Heart className="h-5 w-5 text-rose-600" />,
                bg: "bg-rose-50",
                title: "Radical Transparency",
                desc: "Get real-time source repository visibility, detailed weekly progress, and clear project estimation reports.",
              },
            ].map((pillar, i) => (
              <div key={i} className="rounded-xl border border-slate-100 p-5 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${pillar.bg}`}>
                  {pillar.icon}
                </div>
                <h4 className="font-sans text-base font-bold text-slate-900">{pillar.title}</h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner inside About Page */}
        <div className="mt-24 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 font-mono text-[80px] font-bold text-white leading-none tracking-tighter select-none pointer-events-none transform -translate-y-5">
            SKI ENGINE
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h4 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Accelerate Your Technical Roadmaps?
            </h4>
            <p className="font-sans text-sm text-blue-100">
              Submit your project specifications today. Our senior engineering coordinators will detail a thorough operational proposal containing accurate pricing and milestones.
            </p>
            <div className="pt-2">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg shadow-blue-900/20 hover:bg-blue-50 hover:shadow-xl focus:outline-none"
                id="about-quote-cta-btn"
              >
                <span>Initiate Quote Estimate</span>
                <Rocket className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
