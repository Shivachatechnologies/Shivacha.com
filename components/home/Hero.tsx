'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe, TrendingUp } from 'lucide-react';

const ROTATING_WORDS = [
  'Crypto Exchanges',
  'Neo Banking Systems',
  'AI Agent Platforms',
  'DeFi Protocols',
  'Forex Infrastructure',
  'Tokenization Engines',
];

const TRUST_LOGOS = ['Goldman Sachs', 'JP Morgan', 'Barclays', 'HDFC', 'Binance', 'Coinbase', 'Mastercard', 'BBVA'];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = ROTATING_WORDS[wordIdx];
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setWordIdx(i => (i + 1) % ROTATING_WORDS.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, wordIdx]);

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg" />
      {/* Soft blue glow top-right */}
      <div className="orb w-[600px] h-[600px] opacity-[0.07] -top-40 right-0" style={{ background: 'radial-gradient(circle, #0099E6, transparent 70%)' }} />

      <div className="container relative z-10">
        <div className="grid xl:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="badge badge-blue mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0099E6] animate-pulse inline-block" />
              Enterprise Infrastructure Company
            </div>

            <h1 className="h1 text-slate-900 mb-5">
              We Build
              <br />
              <span className="gt-blue">{displayed}<span className="border-r-2 border-[#0099E6] ml-0.5 animate-pulse">&nbsp;</span></span>
              <br />
              for Global Enterprises
            </h1>

            <p className="lead max-w-lg mb-8">
              Shivacha Technologies delivers enterprise-grade blockchain, AI, and fintech infrastructure — crypto exchanges, neo banks, DeFi protocols, trading systems, and AI agents used by 500+ clients in 50+ countries.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact#consultation" className="btn btn-primary">
                Book Free Consultation <ArrowRight size={15} />
              </Link>
              <Link href="/case-studies" className="btn btn-secondary">
                View Case Studies
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { v: '500+', l: 'Projects Delivered' },
                { v: '$2.4B+', l: 'Infrastructure TVL' },
                { v: '50+', l: 'Countries' },
              ].map(s => (
                <div key={s.l} className="metric-card">
                  <p className="text-xl font-black gt-blue">{s.v}</p>
                  <p className="text-[12px] text-slate-400 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Trusted by global enterprises
              </p>
              <div className="ticker-container">
                <div className="ticker-inner gap-3">
                  {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, i) => (
                    <span key={i}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[12px] text-slate-500 mr-2 flex-shrink-0">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Clean platform dashboard */}
          <div className="hidden xl:block">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-[12px] text-slate-400 font-medium">shivacha.platform — Enterprise Dashboard</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[11px] text-green-600 font-semibold">Live</span>
                </div>
              </div>

              <div className="p-6">
                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Exchange Volume', value: '$847M', change: '+5.2%', color: '#0099E6' },
                    { label: 'Active Users',    value: '1.24M', change: '+12%',  color: '#10B981' },
                    { label: 'Uptime SLA',      value: '99.97%',change: '✓ met', color: '#6644FF' },
                  ].map(k => (
                    <div key={k.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <p className="text-[11px] text-slate-400 mb-1">{k.label}</p>
                      <p className="text-[17px] font-black" style={{ color: k.color }}>{k.value}</p>
                      <p className="text-[11px] text-emerald-600 font-medium">{k.change}</p>
                    </div>
                  ))}
                </div>

                {/* Activity list */}
                <div className="space-y-2 mb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">Live Activity</p>
                  {[
                    { icon: '💸', action: 'ETH/USDT order filled',          time: '0.3s', tag: 'Exchange',  col: '#0099E6' },
                    { icon: '🏦', action: 'Neo bank KYC approved',           time: '1.1s', tag: 'Banking',   col: '#10B981' },
                    { icon: '🤖', action: 'AI agent: AML alert resolved',    time: '2.4s', tag: 'AI',        col: '#6644FF' },
                    { icon: '🪙', action: 'RWA token transfer executed',     time: '3.0s', tag: 'Token',     col: '#F59E0B' },
                  ].map(a => (
                    <div key={a.action} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-base flex-shrink-0">{a.icon}</span>
                      <span className="text-[12px] text-slate-600 flex-1 truncate">{a.action}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                        style={{ background: `${a.col}15`, color: a.col }}>
                        {a.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div>
                  <p className="text-[11px] text-slate-400 mb-2">Transaction Volume — 7 days</p>
                  <div className="flex items-end gap-1.5 h-14">
                    {[38, 60, 44, 76, 58, 92, 70].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md transition-all"
                        style={{ height: `${h}%`, background: `linear-gradient(180deg, #0099E6 0%, #00D4FF 100%)`, opacity: 0.6 + i * 0.05 }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <span key={i} className="flex-1 text-center text-[10px] text-slate-300">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap gap-6 items-center justify-center">
          {[
            { icon: <Shield size={14} />,    text: 'SOC 2 Type II Certified' },
            { icon: <Zap size={14} />,       text: '99.99% Uptime SLA' },
            { icon: <Globe size={14} />,     text: 'Global Infrastructure' },
            { icon: <TrendingUp size={14} />,text: '$2.4B+ TVL Managed' },
          ].map(pill => (
            <div key={pill.text} className="flex items-center gap-2 text-[13px] text-slate-500">
              <span className="text-[#0099E6]">{pill.icon}</span>
              {pill.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
