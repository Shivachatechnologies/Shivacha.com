'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe, TrendingUp } from 'lucide-react';

const CLIENTS = ['Goldman Sachs', 'JP Morgan', 'Barclays', 'HDFC Bank', 'Binance', 'Coinbase', 'Mastercard', 'BBVA', 'DBS Bank', 'Standard Chartered'];

const METRICS = [
  { value: '500+',   label: 'Projects Delivered' },
  { value: '$2.4B+', label: 'Infrastructure TVL' },
  { value: '50+',    label: 'Countries' },
  { value: '99.99%', label: 'Uptime SLA' },
];

const TRUST_PILLS = [
  { icon: <Shield size={12} />,      text: 'SOC 2 Type II' },
  { icon: <Zap size={12} />,         text: '99.99% Uptime' },
  { icon: <Globe size={12} />,       text: 'ISO 27001' },
  { icon: <TrendingUp size={12} />,  text: 'GDPR Compliant' },
];

const ACTIVITY = [
  { dot: '#3B82F6', text: 'ETH/USDT order executed — 0.3s',     tag: 'Exchange', color: '#3B82F6' },
  { dot: '#10B981', text: 'Neo bank KYC approved',               tag: 'Banking',  color: '#10B981' },
  { dot: '#8B5CF6', text: 'AI agent: AML alert resolved',        tag: 'AI',       color: '#8B5CF6' },
  { dot: '#F59E0B', text: 'RWA token transfer settled',          tag: 'Token',    color: '#F59E0B' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24" style={{ background: '#060B18' }}>

      {/* Background gradient mesh */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 60%)' }} />
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)' }} />

      <div className="container relative z-10">
        <div className="grid xl:grid-cols-[1fr_520px] gap-16 items-center">

          {/* LEFT */}
          <div className="max-w-xl">
            {/* Label pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="text-[12px] font-semibold text-[#60A5FA] tracking-wide">Enterprise Infrastructure Company</span>
            </div>

            {/* Headline */}
            <h1 className="h1 mb-6">
              The Infrastructure<br />
              Platform for<br />
              <span className="gt-blue">Digital Finance</span>
            </h1>

            <p className="lead mb-10 max-w-[460px]">
              Shivacha builds enterprise-grade blockchain, AI, and fintech infrastructure —
              crypto exchanges, neo banks, DeFi protocols, trading systems, and AI agents
              trusted by 500+ clients across 50+ countries.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/contact#consultation" className="btn btn-primary text-[15px] py-3 px-7">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/case-studies" className="btn btn-secondary text-[15px] py-3 px-7">
                View Case Studies
              </Link>
            </div>

            {/* Metrics row */}
            <div className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-white/[0.06]">
              {METRICS.map(m => (
                <div key={m.label}>
                  <div className="text-[24px] font-black text-white tracking-tight leading-none">{m.value}</div>
                  <div className="text-[12px] text-[rgba(240,246,255,0.40)] mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Client ticker */}
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(240,246,255,0.30)]">Trusted by global enterprises</p>
              <div className="ticker-container">
                <div className="ticker-inner gap-2">
                  {[...CLIENTS, ...CLIENTS].map((c, i) => (
                    <span key={i}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[12px] font-medium text-[rgba(240,246,255,0.45)] flex-shrink-0 mr-2">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Dark platform panel */}
          <div className="hidden xl:block">
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden"
              style={{ background: '#0C1428', boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)' }}>

              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]" style={{ background: '#111D35' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="border border-white/[0.08] rounded-md px-3 py-1 flex items-center gap-2 w-full max-w-[240px] mx-auto"
                    style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span className="text-[11px] text-[rgba(240,246,255,0.35)] font-medium truncate">platform.shivacha.com — Live</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                {/* KPI grid */}
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  {[
                    { label: 'Volume 24h',   value: '$847M',  delta: '+5.2%', color: '#3B82F6' },
                    { label: 'Active Users', value: '1.24M',  delta: '+12%',  color: '#10B981' },
                    { label: 'Uptime SLA',   value: '99.97%', delta: '✓ met', color: '#8B5CF6' },
                  ].map(k => (
                    <div key={k.label} className="rounded-xl p-3 border border-white/[0.06]"
                      style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <p className="text-[10.5px] text-[rgba(240,246,255,0.35)] mb-1">{k.label}</p>
                      <p className="text-[17px] font-black tracking-tight" style={{ color: k.color }}>{k.value}</p>
                      <p className="text-[10.5px] font-semibold text-emerald-400 mt-0.5">{k.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Live activity */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[rgba(240,246,255,0.30)]">Live Activity</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div className="space-y-1.5">
                    {ACTIVITY.map(a => (
                      <div key={a.text} className="flex items-center gap-2.5 p-2.5 rounded-xl border border-white/[0.05]"
                        style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a.dot }} />
                        <span className="text-[12px] text-[rgba(240,246,255,0.55)] flex-1 truncate">{a.text}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                          style={{ background: `${a.color}16`, color: a.color }}>
                          {a.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sparkline */}
                <div className="rounded-xl p-3 border border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10.5px] text-[rgba(240,246,255,0.35)]">Transaction Volume — 7d</span>
                    <span className="text-[10.5px] font-semibold text-emerald-400">↑ 18.4%</span>
                  </div>
                  <div className="flex items-end gap-1 h-[44px]">
                    {[38, 55, 44, 70, 58, 88, 72].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t"
                        style={{ height: `${h}%`, background: `linear-gradient(180deg,#3B82F6 0%,#1D4ED8 100%)`, opacity: 0.4 + i * 0.08 }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {['M','T','W','T','F','S','S'].map((d, i) => (
                      <span key={i} className="flex-1 text-center text-[9px] text-[rgba(240,246,255,0.25)]">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust pills */}
            <div className="flex gap-2 flex-wrap mt-4 justify-center">
              {TRUST_PILLS.map(p => (
                <div key={p.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-[12px] font-medium text-[rgba(240,246,255,0.45)]">
                  <span className="text-[#60A5FA]">{p.icon}</span>
                  {p.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
