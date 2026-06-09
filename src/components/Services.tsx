import { useState } from "react";
import {
  Globe,
  Smartphone,
  Sparkles,
  CodeXml,
  PenTool,
  ShoppingBag,
  Megaphone,
  Cloud,
  ChevronRight,
  X,
  FileCheck2,
  Cpu
} from "lucide-react";
import { servicesData } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onQuoteClick: (serviceType: string) => void;
}

export default function Services({ onQuoteClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Helper to map string icon-names to Lucide React functional components
  const renderIcon = (iconName: string, className = "h-6 w-6") => {
    switch (iconName) {
      case "Globe":
        return <Globe className={className} />;
      case "Smartphone":
        return <Smartphone className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "CodeXml":
        return <CodeXml className={className} />;
      case "PenTool":
        return <PenTool className={className} />;
      case "ShoppingBag":
        return <ShoppingBag className={className} />;
      case "Megaphone":
        return <Megaphone className={className} />;
      case "Cloud":
        return <Cloud className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  return (
    <div className="bg-slate-50/50 py-16 sm:py-24" id="services-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
            <span>OUR STRUCTURAL SERVICE OFFERINGS</span>
          </div>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Sovereign Technology Modules Designed to Scale
          </h2>
          <p className="font-sans text-base text-slate-600 font-medium">
            Explore our specialized development branches. We maintain small, highly focused team matrices to design, program, and maintain your custom setups.
          </p>
        </div>

        {/* Services Grid (Bento Style & Hover highlights) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {servicesData.map((service) => {
            const isCurrentlySelected = selectedService?.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
                className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer ${
                  isCurrentlySelected
                    ? "border-blue-500 ring-2 ring-blue-100 ring-offset-2 scale-[1.01]"
                    : "border-slate-150 hover:border-slate-300 hover:-translate-y-0.5"
                }`}
                id={`service-card-${service.id}`}
              >
                <div className="space-y-4">
                  {/* Icon Emblem */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                    isCurrentlySelected
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                  }`}>
                    {renderIcon(service.iconName)}
                  </div>

                  {/* Copy */}
                  <div className="space-y-1">
                    <h3 className="font-sans text-base font-bold text-slate-950 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-50 text-xs font-mono font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>INSPECT BLUEPRINT</span>
                  <ChevronRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Focus Drawer / Expanding Detail Board */}
        {selectedService && (
          <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/20 p-6 sm:p-8 relative overflow-hidden animate-fade-in">
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
            
            {/* Close Trigger */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 focus:outline-none bg-white rounded-lg p-1.5 shadow-sm border border-slate-100"
              id="close-service-drawer"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Info Column 1 */}
              <div className="space-y-5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 font-mono text-[10px] font-bold text-blue-800">
                  <span>ACTIVE BLUEPRINT ANALYSIS</span>
                </div>
                
                <h3 className="font-sans text-2xl font-extrabold text-slate-950">
                  {selectedService.title} Spec Overview
                </h3>
                
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                {/* Tech Stack Bubbles */}
                <div className="space-y-2">
                  <span className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-400">
                    Engineered Core Technology Stack:
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedService.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-slate-100 border border-slate-200/60 px-2.5 py-1 font-mono text-xs text-slate-700 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specifications checklist column 2 */}
              <div className="flex flex-col justify-between bg-white border border-slate-150 rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="space-y-4">
                  <span className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-400">
                    Target Execution Scope Items:
                  </span>
                  <div className="space-y-2.5">
                    {selectedService.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-slate-700">
                        <FileCheck2 className="h-4.5 w-4.5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="font-sans text-xs font-semibold leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onQuoteClick(selectedService.title)}
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-blue-600 py-3 px-5 text-center font-sans text-xs font-bold text-white transition-all hover:bg-blue-700 hover:scale-[1.01]"
                    id={`service-drawer-quote-btn-[${selectedService.id}]`}
                  >
                    <span>Request {selectedService.title} Quote</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex w-full sm:w-auto items-center justify-center py-3 px-4 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 text-xs font-bold"
                  >
                    Close Specs
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
