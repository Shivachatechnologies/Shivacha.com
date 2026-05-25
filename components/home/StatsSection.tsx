'use client';

import { useEffect, useRef, useState } from 'react';

const METRICS = [
  { value: 500,  suffix: '+',   label: 'Projects Delivered',   sub: 'Across all verticals',       color: '#006FEE' },
  { value: 200,  suffix: '+',   label: 'Expert Engineers',      sub: 'Blockchain, AI & DevOps',    color: '#10B981' },
  { value: 50,   suffix: '+',   label: 'Countries Served',      sub: 'Global delivery footprint',  color: '#8B5CF6' },
  { value: 2400, suffix: 'M+',  label: 'USD Infrastructure TVL',sub: 'Managed across platforms',   color: '#F59E0B' },
  { value: 9999, suffix: '%',   label: 'Platform Uptime',       sub: '99.99% enterprise SLA',      color: '#06B6D4' },
  { value: 8,    suffix: '+',   label: 'Years of Innovation',   sub: 'Leading since 2016',         color: '#EF4444' },
];

function Counter({ end, suffix, color }: { end: number; suffix: string; color: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let frame: number;
        const t0 = performance.now(), dur = 2000;
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const ease = p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p+2, 3)/2;
          setN(Math.round(ease * (end === 9999 ? 9999 : end)));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  const display = end === 9999 ? '99.99' : n.toLocaleString();
  return (
    <div ref={ref} className="text-3xl xl:text-4xl font-black tracking-tight" style={{ color }}>
      {display}{suffix === '%' ? '%' : suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="section-sm bg-slate-50 border-y border-slate-200">
      <div className="container">
        <div className="text-center mb-12">
          <p className="overline mb-3">Infrastructure at Scale</p>
          <h2 className="h3 text-slate-900">Numbers That Define Our <span className="gt-blue">Global Impact</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {METRICS.map(m => (
            <div key={m.label} className="card rounded-2xl p-5 text-center border border-slate-200 hover:border-slate-300">
              <Counter end={m.value} suffix={m.suffix} color={m.color} />
              <div className="text-[13px] font-semibold text-slate-800 mt-1 mb-1 leading-snug">{m.label}</div>
              <div className="text-[11px] text-slate-400">{m.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-200">
          {[
            { label: 'ISO 27001 Certified', icon: '🔐' },
            { label: 'SOC 2 Type II',       icon: '✅' },
            { label: 'GDPR Compliant',      icon: '🛡️' },
            { label: 'CMMI Level 3',        icon: '🏅' },
            { label: '24/7 Support',        icon: '📞' },
            { label: 'NDA-Protected',       icon: '🤝' },
          ].map(c => (
            <div key={c.label} className="flex items-center gap-2 text-[12.5px] text-slate-500">
              <span>{c.icon}</span>{c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
