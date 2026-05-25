'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Check } from 'lucide-react';

const CLIENTS = ['Goldman Sachs', 'JP Morgan', 'Barclays', 'HDFC Bank', 'Binance', 'Coinbase', 'Mastercard', 'BBVA', 'DBS Bank', 'Standard Chartered'];

const METRICS = [
  { value: '500+',  label: 'Projects Delivered' },
  { value: '$2.4B+',label: 'Infrastructure TVL' },
  { value: '50+',   label: 'Countries' },
  { value: '99.99%',label: 'Uptime SLA' },
];

const TRUST_PILLS = [
  { icon: <Shield size={13} />, text: 'SOC 2 Type II' },
  { icon: <Zap size={13} />,    text: '99.99% Uptime' },
  { icon: <Globe size={13} />,  text: 'ISO 27001' },
  { icon: <TrendingUp size={13} />, text: 'GDPR Compliant' },
];

const ACTIVITY = [
  { icon: '💱', text: 'ETH/USDT order executed',      tag: 'Exchange', color: '#006FEE', t: '0.3s' },
  { icon: '🏦', text: 'Neo bank KYC approved',         tag: 'Banking',  color: '#10B981', t: '1.1s' },
  { icon: '🤖', text: 'AI agent: AML alert resolved',  tag: 'AI',       color: '#8B5CF6', t: '2.4s' },
  { icon: '🪙', text: 'RWA token transfer settled',    tag: 'Token',    color: '#F59E0B', t: '3.0s' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-bg opacity-60" />
      {/* Top-right gradient wash */}
      <div className="absolute -top-60 right-0 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(0,111,238,0.06) 0%, transparent 65%)' }} />
      {/* Bottom-left */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 65%)' }} />

      <div className="container relative z-10">
        <div className="grid xl:grid-cols-[1fr_520px] gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="max-w-xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006FEE] animate-pulse" />
              <span className="text-[12px] font-semibold text-[#006FEE] tracking-wide">Enterprise Infrastructure Company</span>
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
              <Link href="/contact#consultation" className="btn btn-primary text-[15px] py-3 px-6">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/case-studies" className="btn btn-secondary text-[15px] py-3 px-6">
                View Case Studies
              </Link>
            </div>

            {/* Metrics row */}
            <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b border-slate-100">
              {METRICS.map(m => (
                <div key={m.label}>
                  <div className="text-[22px] font-black text-slate-900 tracking-tight">{m.value}</div>
                  <div className="text-[12px] text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Trust */}
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Trusted by global enterprises</p>
              <div className="ticker-container">
                <div className="ticker-inner gap-2">
                  {[...CLIENTS, ...CLIENTS].map((c, i) => (
                    <span key={i}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[12px] font-medium text-slate-500 flex-shrink-0 mr-2">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Platform preview ── */}
          <div className="hidden xl:block">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">

              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-white border border-slate-200 rounded-md px-3 py-1 flex items-center gap-2 w-full max-w-[240px] mx-auto">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="text-[11px] text-slate-400 font-medium truncate">platform.shivacha.com — Live</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                {/* KPI grid */}
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  {[
                    { label: 'Volume 24h',   value: '$847M',   delta: '+5.2%', color: '#006FEE' },
                    { label: 'Active Users', value: '1.24M',   delta: '+12%',  color: '#10B981' },
                    { label: 'Uptime SLA',   value: '99.97%',  delta: '✓ met', color: '#8B5CF6' },
                  ].map(k => (
                    <div key={k.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <p className="text-[10.5px] text-slate-400 mb-1">{k.label}</p>
                      <p className="text-[17px] font-black tracking-tight" style={{ color: k.color }}>{k.value}</p>
                      <p className="text-[10.5px] font-semibold text-emerald-500 mt-0.5">{k.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Live activity */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Activity</span>
                    <span className="flex gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {ACTIVITY.map(a => (
                      <div key={a.text} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[15px] flex-shrink-0">{a.icon}</span>
                        <span className="text-[12px] text-slate-600 flex-1 truncate">{a.text}</span>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                            style={{ background: `${a.color}14`, color: a.color }}>
                            {a.tag}
                          </span>
                          <span className="text-[10px] text-slate-300">{a.t}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sparkline bar chart */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10.5px] text-slate-400">Transaction Volume — 7d</span>
                    <span className="text-[10.5px] font-semibold text-emerald-500">↑ 18.4%</span>
                  </div>
                  <div className="flex items-end gap-1 h-[44px]">
                    {[38, 55, 44, 70, 58, 88, 72].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md"
                        style={{ height: `${h}%`, background: `linear-gradient(180deg, #006FEE 0%, #338EF7 100%)`, opacity: 0.55 + i * 0.06 }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {['M','T','W','T','F','S','S'].map((d, i) => (
                      <span key={i} className="flex-1 text-center text-[9px] text-slate-300">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating trust pills below panel */}
            <div className="flex gap-2 flex-wrap mt-4 justify-center">
              {TRUST_PILLS.map(p => (
                <div key={p.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[12px] font-medium text-slate-500">
                  <span className="text-[#006FEE]">{p.icon}</span>
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
