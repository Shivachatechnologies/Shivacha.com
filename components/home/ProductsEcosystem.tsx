'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'exchange',
    icon: '🏦',
    name: 'Crypto Exchange Infrastructure',
    tagline: 'Launch a world-class exchange in weeks',
    desc: 'White-label centralized (CEX) and decentralized (DEX) exchange infrastructure with matching engine, liquidity management, multi-asset support, and institutional-grade security.',
    href: '/products/crypto-exchange',
    badge: 'Most Popular',
    badgeColor: '#006FEE',
    color: '#006FEE',
    features: [
      '100K+ TPS matching engine',
      'Multi-chain asset support',
      'KYC/AML compliance built-in',
      'Liquidity bridge APIs',
      'Mobile & web trading UI',
      'Cold/hot wallet management',
    ],
    metrics: [
      { label: 'TPS', value: '100K+' },
      { label: 'Pairs', value: '500+' },
      { label: 'Uptime', value: '99.99%' },
    ],
  },
  {
    id: 'neobank',
    icon: '🏛️',
    name: 'Neo Banking Platform',
    tagline: 'Full-stack digital banking OS',
    desc: 'Complete neo-banking infrastructure — virtual IBANs, multi-currency accounts, payment rails, card issuance, open banking APIs, and regulatory compliance framework.',
    href: '/products/neo-banking',
    badge: 'Enterprise',
    badgeColor: '#6644FF',
    color: '#6644FF',
    features: [
      'Virtual IBAN & accounts',
      'SWIFT & SEPA integration',
      'Multi-currency support',
      'Open Banking APIs (PSD2)',
      'Core banking integration',
      'Regulatory compliance',
    ],
    metrics: [
      { label: 'Currencies', value: '180+' },
      { label: 'Countries', value: '50+' },
      { label: 'Daily TXs', value: '1M+' },
    ],
  },
  {
    id: 'forex',
    icon: '📈',
    name: 'Forex & Trading Infrastructure',
    tagline: 'Institutional-grade FX & CFD platform',
    desc: 'Complete forex brokerage infrastructure — MT4/MT5 integration, liquidity aggregation, bridge technology, risk management, IB management, and CRM systems.',
    href: '/products/forex',
    badge: 'Institutional',
    badgeColor: '#FFB800',
    color: '#FFB800',
    features: [
      'MT4/MT5 bridge integration',
      'Liquidity provider aggregation',
      'Risk management engine',
      'IB & affiliate management',
      'Back-office CRM',
      'Regulatory reporting',
    ],
    metrics: [
      { label: 'Instruments', value: '2000+' },
      { label: 'Execution', value: '<10ms' },
      { label: 'Brokers', value: '100+' },
    ],
  },
  {
    id: 'tokenization',
    icon: '🪙',
    name: 'Tokenization Platform',
    tagline: 'Real-world asset tokenization engine',
    desc: 'Enterprise-grade RWA tokenization — real estate, commodities, equity, bonds, and any asset class. Full compliance, custody, and secondary market infrastructure.',
    href: '/products/tokenization',
    badge: 'New',
    badgeColor: '#00FF87',
    color: '#00FF87',
    features: [
      'Multi-standard token support',
      'Asset custody integration',
      'Investor portal & KYC',
      'Secondary marketplace',
      'Dividend distribution',
      'Regulatory compliance',
    ],
    metrics: [
      { label: 'Asset Types', value: '20+' },
      { label: 'Standards', value: 'ERC-3643' },
      { label: 'Jurisdictions', value: '30+' },
    ],
  },
  {
    id: 'ai-agents',
    icon: '🧠',
    name: 'AI Agent Platform',
    tagline: 'Autonomous enterprise AI workflows',
    desc: 'Deploy intelligent AI agents for trading, compliance, customer service, risk assessment, fraud detection, and business process automation across your enterprise.',
    href: '/products/ai-agents',
    badge: 'AI-Powered',
    badgeColor: '#338EF7',
    color: '#338EF7',
    features: [
      'Multi-model AI orchestration',
      'Autonomous workflow engine',
      'Real-time data processing',
      'Enterprise API integration',
      'Audit trail & compliance',
      'Custom model fine-tuning',
    ],
    metrics: [
      { label: 'Models', value: '15+' },
      { label: 'Accuracy', value: '98.5%' },
      { label: 'Latency', value: '<100ms' },
    ],
  },
  {
    id: 'trading-bots',
    icon: '🤖',
    name: 'Trading Bot Ecosystem',
    tagline: 'Algorithmic trading infrastructure',
    desc: 'End-to-end algorithmic trading platform — strategy builder, backtesting engine, live deployment, risk controls, and performance analytics for crypto and forex markets.',
    href: '/products/trading-bots',
    badge: null,
    badgeColor: '',
    color: '#EF4444',
    features: [
      'Visual strategy builder',
      'Historical backtesting',
      'Live deployment engine',
      'Risk & position sizing',
      'Multi-exchange support',
      'Performance dashboard',
    ],
    metrics: [
      { label: 'Strategies', value: '50+' },
      { label: 'Exchanges', value: '30+' },
      { label: 'Win Rate', value: 'Tracked' },
    ],
  },
];

export default function ProductsEcosystem() {
  const [active, setActive] = useState('exchange');
  const product = PRODUCTS.find(p => p.id === active) || PRODUCTS[0];

  return (
    <section className="section bg-white relative overflow-hidden" id="products">
      <div className="orb w-[500px] h-[500px] bg-[#006FEE] opacity-[0.05] right-0 top-0" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="section-label">Platform Ecosystem</div>
          <h2 className="h2 text-slate-900 mb-4">
            Ready-to-Deploy Enterprise
            <br /><span className="gt-blue">Infrastructure Products</span>
          </h2>
          <p className="lead">
            Not just development services — we deliver pre-built, battle-tested infrastructure
            platforms ready to launch your digital business in weeks, not months.
          </p>
        </div>

        {/* Product selector tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PRODUCTS.map((p) => (
            <button key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                active === p.id
                  ? 'text-slate-900 border'
                  : 'text-slate-500 bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300'
              }`}
              style={active === p.id ? { background: `${p.color}12`, borderColor: `${p.color}40`, color: p.color } : {}}>
              <span>{p.icon}</span>
              {p.name.split(' ')[0]} {p.name.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Product detail panel */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — info */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">{product.icon}</div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="h4 text-slate-900">{product.name}</h3>
                  {product.badge && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full font-bold"
                      style={{ background: `${product.badgeColor}20`, color: product.badgeColor, border: `1px solid ${product.badgeColor}40` }}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-[#338EF7] font-medium text-[15px]">{product.tagline}</p>
              </div>
            </div>

            <p className="lead mb-6">{product.desc}</p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${product.color}20` }}>
                    <Check size={11} style={{ color: product.color }} />
                  </div>
                  <span className="text-[13px] text-slate-500">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link href={product.href} className="btn btn-primary">
                Explore Product <ArrowRight size={14} />
              </Link>
              <Link href="/contact#demo" className="btn btn-secondary">
                Request Demo
              </Link>
            </div>
          </div>

          {/* Right — dashboard preview */}
          <div className="dashboard-preview">
            <div className="dashboard-bar">
              <div className="db-dot bg-red-400/60" />
              <div className="db-dot bg-yellow-400/60" />
              <div className="db-dot bg-green-400/60" />
              <span className="text-[12px] text-slate-400 ml-2">{product.name} — Admin Panel</span>
            </div>
            <div className="p-5">
              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {product.metrics.map((m) => (
                  <div key={m.label} className="metric-card">
                    <p className="text-[11px] text-slate-400 mb-1">{m.label}</p>
                    <p className="text-lg font-black" style={{ color: product.color }}>{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Simulated chart */}
              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[12px] text-slate-400">Performance Overview</span>
                  <span className="badge badge-green text-[10px]">+18.4% MoM</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[30,55,40,70,60,85,50,90,75,95,80,100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm"
                      style={{ height: `${h}%`, background: `linear-gradient(180deg, ${product.color} 0%, ${product.color}40 100%)`, opacity: 0.6 + i * 0.03 }} />
                  ))}
                </div>
              </div>

              {/* Feature pills inside dashboard */}
              <div className="flex flex-wrap gap-2">
                {product.features.slice(0, 3).map((f) => (
                  <span key={f} className="tech-pill text-[11px]">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All products grid — quick access */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <p className="text-[15px] font-semibold text-slate-900">Full Product Catalog</p>
            <Link href="/products" className="text-[13px] text-[#338EF7] hover:text-slate-900 transition-colors flex items-center gap-1">
              View all products <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {PRODUCTS.map((p) => (
              <Link key={p.id} href={p.href}
                className="product-card p-4 text-center group"
                onClick={() => setActive(p.id)}>
                <div className="product-card-glow" style={{ background: `radial-gradient(ellipse at 50% -20%, ${p.color}15 0%, transparent 70%)` }} />
                <div className="text-3xl mb-2">{p.icon}</div>
                <p className="text-[12px] font-medium text-slate-500 group-hover:text-slate-900 transition-colors leading-tight">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
