import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[activeIndex];

  return (
    <div className="bg-slate-50/40 py-16 sm:py-20 border-y border-slate-100" id="testimonials-section">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
            VERIFIED CLIENT REVIEWS
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900">
            Trusted by Commercial Enterprises
          </h2>
        </div>

        {/* Testimonial Active Display Module */}
        <div className="relative rounded-2xl border border-slate-150 bg-white p-6 sm:p-10 shadow-sm flex flex-col justify-between">
          <div className="absolute top-6 right-6 text-slate-100 font-mono text-[110px] font-bold leading-none select-none pointer-events-none transform translate-x-3 -translate-y-6">
            <Quote className="h-20 w-20 opacity-20 text-slate-200 fill-current" />
          </div>

          <div className="space-y-6 relative z-10">
            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote body */}
            <blockquote className="font-sans text-base sm:text-lg text-slate-700 italic leading-relaxed font-semibold">
              "{current.quote}"
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
              <img
                className="h-10 w-10 rounded-full object-cover border border-slate-100"
                src={current.imageUrl}
                alt={current.author}
                referrerPolicy="no-referrer"
              />
              <div>
                <cite className="block font-sans text-xs font-extrabold text-slate-900 not-italic">
                  {current.author}
                </cite>
                <span className="block font-sans text-[10px] text-slate-400 font-bold">
                  {current.role}
                </span>
              </div>
            </div>
          </div>

          {/* Stepper control buttons */}
          <div className="flex items-center justify-end gap-2 pt-6 mt-6 border-t border-slate-50 relative z-10">
            <button
              onClick={prevReview}
              className="rounded-xl border border-slate-205 p-2 text-slate-600 bg-white hover:bg-slate-50 transition focus:outline-none"
              title="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="font-mono text-xs text-slate-400 font-semibold px-2">
              0{activeIndex + 1} / 0{testimonialsData.length}
            </div>
            <button
              onClick={nextReview}
              className="rounded-xl border border-slate-205 p-2 text-slate-600 bg-white hover:bg-slate-50 transition focus:outline-none"
              title="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
