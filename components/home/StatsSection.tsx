'use client';
import { useEffect, useRef, useState } from 'react';

const METRICS = [
  { value: 500,  suffix: '+',  label: 'Projects Delivered',    color: '#3B82F6' },
  { value: 200,  suffix: '+',  label: 'Expert Engineers',      color: '#8B5CF6' },
  { value: 50,   suffix: '+',  label: 'Countries Served',      color: '#10B981' },
  { value: 2.4,  suffix: 'B+', label: 'USD Infrastructure TVL',color: '#F59E0B' },
  { value: 9999, suffix: null, label: 'Platform Uptime SLA',   color: '#06B6D4' },
  { value: 8,    suffix: '+',  label: 'Years of Innovation',   color: '#EC4899' },
];

function Counter({ end, suffix, color }: { end: number; suffix: string|null; color: string }) {
  const [n, setN] = useState(0);
  const ref  = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const dur = 2000, t0 = performance.now();
        let f: number;
        const tick = (t: number) => {
          const p    = Math.min((t - t0) / dur, 1);
          const ease = p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p+2,3)/2;
          setN(Math.round(ease * end));
          if (p < 1) f = requestAnimationFrame(tick);
        };
        f = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(f);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  const display = end === 9999 ? '99.99%' : end < 10 ? `$${n}${suffix}` : `${n.toLocaleString()}${suffix || ''}`;
  return (
    <div ref={ref} className="text-[2.4rem] font-black tracking-tight leading-none" style={{ color }}>
      {display}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="section-sm" style={{ background: '#060B18' }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
          {METRICS.map((m) => (
            <div key={m.label} className="p-7 flex flex-col gap-2" style={{ background: '#060B18' }}>
              <Counter end={m.value} suffix={m.suffix} color={m.color} />
              <p className="text-[12px] text-[rgba(240,246,255,0.35)] leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
