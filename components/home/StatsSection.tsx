'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';

const METRICS = [
  { value: 500,  suffix: '+',  label: 'Projects Delivered',     sub: 'Across all verticals',        icon: '🚀', color: '#0099E6' },
  { value: 200,  suffix: '+',  label: 'Enterprise Engineers',   sub: 'Blockchain, AI & DevOps',     icon: '👨‍💻', color: '#00D4FF' },
  { value: 50,   suffix: '+',  label: 'Countries Served',       sub: 'Global delivery footprint',   icon: '🌍', color: '#00FF87' },
  { value: 2400, suffix: 'M+', label: 'USD Value Managed',      sub: 'Infrastructure TVL',          icon: '💰', color: '#FFB800' },
  { value: 99,   suffix: '.9%',label: 'Platform Uptime',        sub: 'Enterprise SLA guarantee',    icon: '⚡', color: '#6644FF' },
  { value: 8,    suffix: '+',  label: 'Years of Innovation',    sub: 'Leading since 2016',          icon: '🏆', color: '#EF4444' },
];

function AnimatedNumber({ end, suffix, color }: { end: number; suffix: string; color: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let frame: number;
        const start = performance.now();
        const dur = 2200;
        const run = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          setN(Math.round(eased * end));
          if (t < 1) frame = requestAnimationFrame(run);
        };
        frame = requestAnimationFrame(run);
        return () => cancelAnimationFrame(frame);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-3xl xl:text-4xl font-black tracking-tight" style={{ color }}>
      {n.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="section-sm bg-[#020B18] border-y border-[#0E1E34] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0099E6]/3 via-transparent to-[#00D4FF]/3" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label justify-center">
            Infrastructure at Scale
          </div>
          <h2 className="h3 text-white">
            Numbers That Define Our <span className="gt-blue">Global Impact</span>
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {METRICS.map((m) => (
            <div key={m.label}
              className="card rounded-2xl p-5 text-center group border border-[#0E1E34] hover:border-[#1E3A5A]">
              <div className="text-3xl mb-3">{m.icon}</div>
              <AnimatedNumber end={m.value} suffix={m.suffix} color={m.color} />
              <div className="text-[13px] font-semibold text-white mt-1 mb-1">{m.label}</div>
              <div className="text-[11px] text-[#3D5470]">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Bottom bar — uptime / certifications */}
        <div className="mt-10 glass rounded-2xl p-5 border border-[#0E1E34] flex flex-wrap items-center justify-center gap-8">
          {[
            { label: 'ISO 27001 Certified', icon: '🔐' },
            { label: 'SOC 2 Type II', icon: '✅' },
            { label: 'GDPR Compliant', icon: '🛡️' },
            { label: 'CMMI Level 3', icon: '🏅' },
            { label: '24/7 Enterprise Support', icon: '📞' },
            { label: 'NDA-Protected Development', icon: '🤝' },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-2 text-[13px] text-[#7A8FA6]">
              <span>{c.icon}</span>
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
