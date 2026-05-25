'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight, Zap } from 'lucide-react';
import ShivachaLogo from '@/components/common/ShivachaLogo';

const PRODUCTS = [
  { name: 'Crypto Exchange',      desc: 'CEX & DEX — 100K+ TPS engine',         href: '/products/crypto-exchange',  badge: 'Popular', accent: '#3B82F6' },
  { name: 'Neo Banking',          desc: 'Full-stack digital banking OS',         href: '/products/neo-banking',                        accent: '#8B5CF6' },
  { name: 'Crypto Debit Card',    desc: 'Card issuance & BIN sponsorship',       href: '/products/crypto-card',                        accent: '#0EA5E9' },
  { name: 'Tokenization',         desc: 'RWA & security token engine',           href: '/products/tokenization',     badge: 'New',     accent: '#10B981' },
  { name: 'Trading Bots',         desc: 'Algo trading — 30+ exchanges',          href: '/products/trading-bots',                       accent: '#EF4444' },
  { name: 'Forex Infrastructure', desc: 'MT4/MT5 bridge & liquidity stack',      href: '/products/forex',                              accent: '#F59E0B' },
  { name: 'AI Agent Platform',    desc: 'Autonomous enterprise AI workflows',    href: '/products/ai-agents',        badge: 'New',     accent: '#06B6D4' },
  { name: 'Enterprise Wallet',    desc: 'MPC custody — 50+ blockchains',         href: '/products/wallet',                             accent: '#6366F1' },
  { name: 'Broker CRM',           desc: 'IB tree, commissions & KYC',            href: '/products/broker-crm',                        accent: '#EC4899' },
  { name: 'Cloud & VPS',          desc: 'Bare-metal for financial workloads',    href: '/products/cloud',                              accent: '#14B8A6' },
];

const SERVICES = [
  { name: 'Blockchain Development', href: '/services/blockchain-development' },
  { name: 'AI & ML Development',    href: '/services/ai-development' },
  { name: 'Smart Contracts',        href: '/services/smart-contracts' },
  { name: 'DeFi Development',       href: '/services/defi-development' },
  { name: 'NFT Development',        href: '/services/nft-development' },
  { name: 'Web3 Development',       href: '/services/web3-development' },
  { name: 'Mobile App Dev',         href: '/services/mobile-apps' },
  { name: 'DevOps & Cloud',         href: '/services/devops' },
  { name: 'Security Audits',        href: '/services/security-audit' },
  { name: 'Metaverse Dev',          href: '/services/metaverse' },
];

const COMPANY = [
  { name: 'About Us',        href: '/about' },
  { name: 'Case Studies',    href: '/case-studies' },
  { name: 'Blog',            href: '/blog' },
  { name: 'Careers',         href: '/careers' },
  { name: 'Press & Media',   href: '/press' },
  { name: 'Partners',        href: '/partners' },
];

export default function Header() {
  const [scrolled,       setScrolled]     = useState(false);
  const [mobileOpen,     setMobileOpen]   = useState(false);
  const [activeMobile,   setActiveMobile] = useState<string|null>(null);
  const [activeMenu,     setActiveMenu]   = useState<string|null>(null);
  const [announceClosed, setAnnounceClosed] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const openMenu  = (n: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveMenu(n); };
  const closeMenu = () => { closeTimer.current = setTimeout(() => setActiveMenu(null), 150); };
  const stayOpen  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };

  return (
    <div className="sticky top-0 z-50">

      {/* Announcement bar */}
      {!announceClosed && (
        <div className="relative flex items-center justify-center gap-2 px-4 py-2 text-[12.5px] font-medium text-center"
          style={{ background: 'linear-gradient(90deg,#1D3A6E,#1E3FAD,#1D3A6E)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse flex-shrink-0" />
          <span className="text-white/80">New: AI Agent Platform 2.0 — autonomous compliance &amp; trading workflows.</span>
          <Link href="/products/ai-agents" className="text-[#60A5FA] font-semibold hover:text-white transition-colors ml-1">
            Learn more →
          </Link>
          <button onClick={() => setAnnounceClosed(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors">
            <X size={13} />
          </button>
        </div>
      )}

      {/* Main nav */}
      <header className={`transition-all duration-300 ${
        scrolled
          ? 'bg-[#060B18]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_1px_0_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-[#060B18]/80 backdrop-blur-xl border-b border-white/[0.05]'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-[62px]">

            <ShivachaLogo size="md" variant="full" href="/" dark />

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center">
              <NavDrop label="Products" open={activeMenu === 'products'}
                onEnter={() => openMenu('products')} onLeave={closeMenu}>
                <Panel onEnter={stayOpen} onLeave={closeMenu} className="w-[740px] -translate-x-[55%]">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4 px-1">
                      <span className="text-[10px] font-bold tracking-widest text-[rgba(240,246,255,0.30)] uppercase">Platform Products</span>
                      <Link href="/products/crypto-exchange" className="text-[12px] text-[#60A5FA] hover:text-[#93C5FD] font-semibold flex items-center gap-1 transition-colors">
                        View all <ArrowRight size={11} />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-0.5">
                      {PRODUCTS.map(p => (
                        <Link key={p.href} href={p.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] group transition-colors">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5"
                            style={{ background: `${p.accent}18` }}>
                            <div className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
                          </div>
                          <div className="min-w-0 pt-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[13px] font-semibold text-[rgba(240,246,255,0.85)] group-hover:text-white transition-colors">{p.name}</span>
                              {p.badge && (
                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${p.badge === 'New' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-blue-500/15 text-[#60A5FA]'}`}>
                                  {p.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11.5px] text-[rgba(240,246,255,0.35)] leading-snug mt-0.5">{p.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Panel>
              </NavDrop>

              <NavDrop label="Services" open={activeMenu === 'services'}
                onEnter={() => openMenu('services')} onLeave={closeMenu}>
                <Panel onEnter={stayOpen} onLeave={closeMenu} className="w-60">
                  <div className="p-2">
                    <p className="text-[10px] font-bold tracking-widest text-[rgba(240,246,255,0.30)] uppercase px-3 py-2">Services</p>
                    {SERVICES.map(s => (
                      <Link key={s.href} href={s.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.05] group transition-colors">
                        <span className="text-[13px] text-[rgba(240,246,255,0.60)] group-hover:text-white transition-colors">{s.name}</span>
                        <ArrowRight size={11} className="text-white/20 group-hover:text-[#60A5FA] flex-shrink-0 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </Panel>
              </NavDrop>

              <NavDrop label="Company" open={activeMenu === 'company'}
                onEnter={() => openMenu('company')} onLeave={closeMenu}>
                <Panel onEnter={stayOpen} onLeave={closeMenu} className="w-48">
                  <div className="p-2">
                    <p className="text-[10px] font-bold tracking-widest text-[rgba(240,246,255,0.30)] uppercase px-3 py-2">Company</p>
                    {COMPANY.map(c => (
                      <Link key={c.href} href={c.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.05] group transition-colors">
                        <span className="text-[13px] text-[rgba(240,246,255,0.60)] group-hover:text-white transition-colors">{c.name}</span>
                        <ArrowRight size={11} className="text-white/20 group-hover:text-[#60A5FA] flex-shrink-0 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </Panel>
              </NavDrop>

              <NavLink href="/case-studies" label="Case Studies" />
              <NavLink href="/blog"         label="Blog" />
            </nav>

            <div className="hidden xl:flex items-center gap-1.5">
              <Link href="/contact" className="px-4 py-2 text-[13.5px] font-medium text-[rgba(240,246,255,0.50)] hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors">
                Contact
              </Link>
              <Link href="/contact#consultation" className="btn btn-primary text-[13.5px] py-2 px-5">
                Book a Call
              </Link>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[rgba(240,246,255,0.60)] hover:bg-white/[0.06] transition-colors">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-white/[0.06] bg-[#060B18] max-h-[85vh] overflow-y-auto">
            <div className="container py-3 divide-y divide-white/[0.05]">
              {[
                { label: 'Products',     href: '/products/crypto-exchange', items: PRODUCTS.map(p => ({ name: p.name, href: p.href })) },
                { label: 'Services',     href: '/services',                 items: SERVICES },
                { label: 'Company',      href: '/about',                    items: COMPANY },
                { label: 'Case Studies', href: '/case-studies',             items: null },
                { label: 'Blog',         href: '/blog',                     items: null },
              ].map(item => (
                <div key={item.label} className="py-1">
                  <div className="flex items-center justify-between py-2.5">
                    <Link href={item.href} className="text-[15px] font-medium text-[rgba(240,246,255,0.80)]"
                      onClick={() => { if (!item.items) setMobileOpen(false); }}>
                      {item.label}
                    </Link>
                    {item.items && (
                      <button onClick={() => setActiveMobile(activeMobile === item.label ? null : item.label)}
                        className="p-1 text-[rgba(240,246,255,0.35)]">
                        <ChevronDown size={15} className={`transition-transform ${activeMobile === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.items && activeMobile === item.label && (
                    <div className="pb-2 pl-2 space-y-0">
                      {item.items.map(sub => (
                        <Link key={sub.href} href={sub.href}
                          className="block py-2 text-[13.5px] text-[rgba(240,246,255,0.40)] hover:text-[#60A5FA] border-b border-white/[0.04] last:border-0 transition-colors"
                          onClick={() => setMobileOpen(false)}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="container pb-5 pt-3 flex flex-col gap-2">
              <Link href="/contact" className="btn btn-secondary w-full justify-center" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link href="/contact#consultation" className="btn btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                Book a Call <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

function NavDrop({ label, open, children, onEnter, onLeave }: {
  label: string; open: boolean; children: React.ReactNode; onEnter: () => void; onLeave: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button className={`flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-all ${
        open ? 'text-white bg-white/[0.07]' : 'text-[rgba(240,246,255,0.55)] hover:text-white hover:bg-white/[0.05]'
      }`}>
        {label}
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180 text-white' : 'text-white/30'}`} />
      </button>
      {open && children}
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="px-3.5 py-2 text-[13.5px] font-medium text-[rgba(240,246,255,0.55)] hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
      {label}
    </Link>
  );
}

function Panel({ children, onEnter, onLeave, className }: {
  children: React.ReactNode; onEnter: () => void; onLeave: () => void; className?: string;
}) {
  return (
    <div className={`absolute top-full pt-2 z-50 ${className}`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="bg-[#0C1428] border border-white/[0.08] rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.3)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
