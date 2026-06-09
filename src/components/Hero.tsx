import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Eye, Sparkles, CodeXml, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onQuoteClick: () => void;
  onPortfolioClick: () => void;
}

export default function Hero({ onQuoteClick, onPortfolioClick }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Handle Canvas Resize with ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Canvas particle logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const particleCount = Math.min(60, Math.floor(dimensions.width / 20));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw background cybergrid lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < dimensions.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimensions.height);
        ctx.stroke();
      }
      for (let y = 0; y < dimensions.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(dimensions.width, y);
        ctx.stroke();
      }

      // Draw and link particle nodes
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > dimensions.width) p.vx *= -1;
        if (p.y < 0 || p.y > dimensions.height) p.vy *= -1;

        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Check proximity
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.12;
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-slate-50 py-16 lg:py-24"
      id="hero-root-container"
    >
      {/* Background High-Tech Louping Video (Muted, Loop, Autoplay, playsinline) */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 mix-blend-multiply">
        <video
          className="h-full w-full object-cover"
          src="https://assets.mixkit.co/videos/preview/mixkit-matrix-digital-code-on-a-screen-32918-large.mp4"
          autoPlay
          muted
          loop
          playsInline
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/70 to-slate-50" />
      </div>

      {/* Dynamic JS Canvas Particle Nodes Mesh */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-1 pointer-events-none block h-full w-full"
        id="hero-digital-canvas"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - Column 1 */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tech tag */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
              <Sparkles className="h-3 w-3 text-blue-500 animate-pulse" />
              <span>NEXT GENERATION TECH INTEGRATION</span>
            </div>

            <h1 className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-[1.1]">
              Building Digital Solutions <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                for the Future
              </span>
            </h1>

            <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-slate-600 font-medium">
              We create websites, software, mobile applications, AI solutions, and digital experiences that help businesses grow.
            </p>

            {/* Micro details */}
            <div className="hidden sm:flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-1">
                <CodeXml className="h-3.5 w-3.5 text-slate-400" />
                <span>Modern Clean Code standards</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Continuous Cloud Deployments</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onQuoteClick}
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-sans text-base font-bold text-white transition-all hover:bg-blue-700 hover:scale-[1.01] shadow-lg shadow-blue-100"
                id="hero-quote-btn"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onPortfolioClick}
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-sans text-base font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
                id="hero-portfolio-btn"
              >
                <Eye className="h-4 w-4 text-slate-500" />
                <span>View Portfolio</span>
              </button>
            </div>
          </div>

          {/* Interactive UI Mockup Card Frame - Column 2 */}
          <div className="lg:col-span-12 xl:col-span-5 hidden xl:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-2xl backdrop-blur-md"
            >
              {/* Card Title Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-[10px] text-slate-400 tracking-wider">ski-dashboard.sh</span>
                </div>
                <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-500">Live Active</span>
              </div>

              {/* Code visual simulation */}
              <div className="font-mono text-xs text-slate-700 space-y-2 pb-2">
                <p className="text-blue-600 font-bold">// 1. Initialize SKI Ecosystem</p>
                <p>
                  <span className="text-pink-500">import</span> {"{"} SkiSuite {"}"} <span className="text-pink-500">from</span> <span className="text-emerald-600">"@ski/core"</span>;
                </p>
                <p>
                  <span className="text-purple-600">const</span> app = <span className="text-blue-600">new</span> <span className="text-purple-500">SkiSuite</span>({"{"}
                </p>
                <p className="pl-4">engine: <span className="text-emerald-600">"Cognitive-AI"</span>,</p>
                <p className="pl-4">realtimeSync: <span className="text-amber-600">true</span>,</p>
                <p className="pl-4">cloudScaling: <span className="text-amber-600">true</span></p>
                <p>{"});"}</p>
              </div>

              {/* Grid visual stats cards inside */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="block text-[10px] font-mono text-slate-500 tracking-wider uppercase">Active Projects</span>
                  <span className="text-xl font-bold font-sans text-slate-900 tracking-tight">140+</span>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="block text-[10px] font-mono text-slate-500 tracking-wider uppercase">Client Success</span>
                  <span className="text-xl font-bold font-sans text-slate-900 tracking-tight">99.4%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating statistics cards section for the bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-slate-200/60 pt-10">
          {[
            { metric: "140+", label: "Products Delivered" },
            { metric: "99.4%", label: "Client Satisfaction" },
            { metric: "24/7", label: "Dev & Operations Support" },
            { metric: "45+", label: "AI Classifiers Deployed" },
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight">
                {stat.metric}
              </span>
              <span className="block font-sans text-xs sm:text-sm font-semibold text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
