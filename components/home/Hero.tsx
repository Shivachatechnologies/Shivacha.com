'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const ROTATING_WORDS = [
  'Blockchain Infrastructure',
  'AI-Powered Ecosystems',
  'Fintech Platforms',
  'Forex Infrastructure',
  'Neo Banking Systems',
  'Trading Technology',
];

const FLOATING_CARDS = [
  { icon: '💰', label: 'Total Value Locked', value: '$2.4B+', trend: '+12.4%', color: '#00D4FF' },
  { icon: '⚡', label: 'TPS Throughput', value: '100K+', trend: 'Peak capacity', color: '#00FF87' },
  { icon: '🌍', label: 'Active Deployments', value: '500+', trend: 'Globally', color: '#FFB800' },
  { icon: '🔐', label: 'Security Score', value: '99.9%', trend: 'Audit passed', color: '#6644FF' },
];

const TRUST_LOGOS = ['Goldman Sachs', 'JP Morgan', 'Barclays', 'HDFC', 'BBVA', 'Binance', 'Coinbase', 'Mastercard'];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [videoOpen, setVideoOpen] = useState(false);
  const particleRef = useRef<HTMLCanvasElement>(null);

  /* Typing animation */
  useEffect(() => {
    const word = ROTATING_WORDS[wordIdx];
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, wordIdx]);

  /* Particle canvas */
  useEffect(() => {
    const canvas = particleRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; opacity: number }> = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,102,255,${p.opacity})`;
        ctx.fill();
      });
      /* Draw connecting lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,102,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#000008]">
      {/* Particle canvas */}
      <canvas ref={particleRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glow orbs */}
      <div className="orb w-[700px] h-[700px] bg-[#0066FF] opacity-[0.06] -top-60 -left-40" />
      <div className="orb w-[600px] h-[600px] bg-[#00D4FF] opacity-[0.04] top-1/2 -right-60" />
      <div className="orb w-[500px] h-[500px] bg-[#6644FF] opacity-[0.04] bottom-0 left-1/3" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#000008] to-transparent" />

      <div className="container relative z-10 py-20">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-6 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="badge badge-blue mb-6">
              <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse" />
              Enterprise Infrastructure Company
            </div>

            {/* Headline */}
            <h1 className="h1 text-white mb-4">
              Building Enterprise
              <br />
              <span className="gt-blue">Financial &amp; AI</span>
              <br />
              Infrastructure
            </h1>

            {/* Subheadline with typewriter */}
            <div className="text-xl text-[#7A8FA6] mb-3 h-8 flex items-center gap-2">
              <span>We power</span>
              <span className="text-[#60A5FA] font-semibold min-w-[260px]">
                {displayed}
                <span className="border-r-2 border-[#60A5FA] ml-0.5 animate-pulse">&nbsp;</span>
              </span>
            </div>

            <p className="lead max-w-lg mb-8">
              Shivacha Technologies delivers scalable blockchain, AI, fintech, forex, trading,
              and cloud infrastructure ecosystems powering modern digital businesses across 50+ countries.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: '500+', l: 'Projects' },
                { v: '$2.4B+', l: 'TVL Managed' },
                { v: '50+', l: 'Countries' },
              ].map((s) => (
                <div key={s.l} className="metric-card">
                  <p className="text-xl font-black gt-blue">{s.v}</p>
                  <p className="text-[12px] text-[#3D5470] mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/products" className="btn btn-primary">
                Explore Ecosystem <ArrowRight size={16} />
              </Link>
              <button onClick={() => setVideoOpen(true)}
                className="btn btn-secondary group">
                <div className="w-7 h-7 rounded-full bg-[#0066FF] flex items-center justify-center">
                  <Play size={12} fill="white" className="ml-0.5" />
                </div>
                Watch Demo
              </button>
              <Link href="/contact#consultation" className="btn btn-ghost">
                Book Consultation
              </Link>
            </div>

            {/* Trust indicators */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#3D5470] mb-3">
                Trusted by global enterprises
              </p>
              <div className="ticker-container">
                <div className="ticker-inner gap-6 items-center">
                  {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, i) => (
                    <span key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#060E1C] border border-[#0E1E34] text-[12px] text-[#3D5470] mr-3 flex-shrink-0">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Enterprise dashboard visual */}
          <div className="hidden xl:flex items-center justify-center relative">
            {/* Main dashboard card */}
            <div className="relative w-full max-w-[480px]">
              {/* Rotating ring */}
              <div className="absolute -inset-8 rounded-full border border-[#0E1E34] animate-spin-slow" />
              <div className="absolute -inset-16 rounded-full border border-[#060E1C] animate-spin-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

              {/* Main card */}
              <div className="glass-lg rounded-3xl p-6 border border-[#0E1E34] relative overflow-hidden">
                <div className="scan-line" />

                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[12px] text-[#3D5470] uppercase tracking-wider">Infrastructure Dashboard</p>
                    <p className="text-white font-bold text-lg mt-0.5">Shivacha Enterprise</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[12px] text-green-400">Live</span>
                  </div>
                </div>

                {/* Metric rows */}
                <div className="space-y-3 mb-5">
                  {[
                    { label: 'Exchange Volume 24h', value: '$847M', change: '+5.2%', pos: true },
                    { label: 'Active Users', value: '1.2M', change: '+12.8%', pos: true },
                    { label: 'Smart Contracts', value: '45,210', change: '+3.1%', pos: true },
                    { label: 'API Uptime', value: '99.97%', change: 'SLA met', pos: true },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-2.5 border-b border-[#0E1E34]">
                      <span className="text-[13px] text-[#3D5470]">{row.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-semibold text-white">{row.value}</span>
                        <span className={`text-[11px] px-1.5 py-0.5 rounded ${row.pos ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                          {row.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini chart bars */}
                <div>
                  <p className="text-[11px] text-[#3D5470] mb-2">Transaction Volume (7d)</p>
                  <div className="flex items-end gap-1 h-12">
                    {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm transition-all"
                        style={{ height: `${h}%`, background: `linear-gradient(180deg, #0066FF ${100 - h}%, #00D4FF 100%)`, opacity: 0.7 + (i * 0.04) }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating metric cards */}
              {FLOATING_CARDS.map((card, i) => {
                const positions = [
                  '-top-6 -left-10',
                  '-top-6 -right-10',
                  '-bottom-6 -left-10',
                  '-bottom-6 -right-10',
                ];
                const delays = ['0s', '1.5s', '3s', '4.5s'];
                return (
                  <div key={card.label}
                    className={`absolute ${positions[i]} glass rounded-2xl p-3 w-36 animate-float border border-[#0E1E34]`}
                    style={{ animationDelay: delays[i], animationDuration: `${5 + i}s` }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">{card.icon}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    </div>
                    <p className="text-[10px] text-[#3D5470] leading-tight mb-0.5">{card.label}</p>
                    <p className="text-base font-black" style={{ color: card.color }}>{card.value}</p>
                    <p className="text-[10px] text-green-400 flex items-center gap-0.5">
                      <TrendingUp size={9} /> {card.trend}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom feature pills */}
        <div className="flex flex-wrap gap-3 mt-14 pt-10 border-t border-[#0E1E34]">
          {[
            { icon: <Shield size={14} />, text: 'SOC 2 Type II Certified' },
            { icon: <Zap size={14} />, text: '99.99% Uptime SLA' },
            { icon: <Globe size={14} />, text: 'Global Infrastructure' },
            { icon: <TrendingUp size={14} />, text: '$2.4B+ TVL Managed' },
          ].map((pill) => (
            <div key={pill.text}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#060E1C] border border-[#0E1E34] text-[13px] text-[#7A8FA6]">
              <span className="text-[#60A5FA]">{pill.icon}</span>
              {pill.text}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3D5470] text-[11px] tracking-wider uppercase">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#0066FF] opacity-60" />
        <span>Scroll</span>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}>
          <div className="bg-[#020B18] rounded-3xl border border-[#0E1E34] p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Shivacha Technologies Overview</h3>
              <button onClick={() => setVideoOpen(false)} className="text-[#3D5470] hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="bg-[#000008] rounded-2xl aspect-video flex items-center justify-center border border-[#0E1E34]">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-[#3D5470]">Demo video coming soon</p>
                <p className="text-[12px] text-[#3D5470] mt-1">Contact us for a live demo</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function X({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
