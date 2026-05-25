'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import ShivachaLogo from '@/components/common/ShivachaLogo';

const PRODUCTS = [
  { icon: '⇄',  name: 'Crypto Exchange',      desc: 'CEX & DEX platform infrastructure',    href: '/products/crypto-exchange',  badge: 'Popular' },
  { icon: '🏛',  name: 'Neo Banking',          desc: 'Full-stack digital banking OS',        href: '/products/neo-banking' },
  { icon: '₿',  name: 'Crypto Debit Card',    desc: 'Card issuance & BIN sponsorship',      href: '/products/crypto-card' },
  { icon: '◈',  name: 'Tokenization',         desc: 'RWA & security token engine',          href: '/products/tokenization',     badge: 'New' },
  { icon: '⚡',  name: 'Trading Bots',         desc: 'Algorithmic trading ecosystem',        href: '/products/trading-bots' },
  { icon: '📊',  name: 'Forex Infrastructure', desc: 'MT4/MT5 bridge & liquidity stack',     href: '/products/forex' },
  { icon: '◉',  name: 'AI Agent Platform',    desc: 'Autonomous enterprise AI workflows',   href: '/products/ai-agents',        badge: 'New' },
  { icon: '◻',  name: 'Enterprise Wallet',    desc: 'Multi-chain custody & key management', href: '/products/wallet' },
  { icon: '▦',  name: 'Broker CRM',           desc: 'Trading relationship management',      href: '/products/broker-crm' },
  { icon: '☁',  name: 'Cloud & VPS',          desc: 'Dedicated enterprise cloud infra',     href: '/products/cloud' },
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
  { name: 'About Us',      href: '/about' },
  { name: 'Case Studies',  href: '/case-studies' },
  { name: 'Blog',          href: '/blog' },
  { name: 'Careers',       href: '/careers' },
  { name: 'Press & Media', href: '/press' },
  { name: 'Partners',      href: '/partners' },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeMobile, setActiveMobile] = useState<string|null>(null);
  const [activeMenu,   setActiveMenu]   = useState<string|null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const openMenu  = (n: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveMenu(n); };
  const closeMenu = () => { closeTimer.current = setTimeout(() => setActiveMenu(null), 150); };
  const stayOpen  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
        : 'bg-white/90 backdrop-blur-xl border-b border-slate-100'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-[64px]">

          <ShivachaLogo size="md" variant="full" href="/" />

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center">

            <NavDropdown label="Products" open={activeMenu === 'products'}
              onEnter={() => openMenu('products')} onLeave={closeMenu}>
              <DropPanel onEnter={stayOpen} onLeave={closeMenu} className="w-[700px] left-1/2 -translate-x-[55%]">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Platform Products</span>
                    <Link href="/products/crypto-exchange" className="flex items-center gap-1 text-[12px] text-[#006FEE] hover:underline font-medium">
                      View all <ArrowUpRight size={11} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-0.5">
                    {PRODUCTS.map(p => (
                      <Link key={p.href} href={p.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-colors">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 text-[15px] flex-shrink-0 group-hover:bg-blue-50 transition-colors">{p.icon}</span>
                        <div className="min-w-0 pt-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#006FEE] transition-colors">{p.name}</span>
                            {p.badge && (
                              <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${p.badge === 'New' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-[#006FEE]'}`}>
                                {p.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11.5px] text-slate-400 leading-snug mt-0.5">{p.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </DropPanel>
            </NavDropdown>

            <NavDropdown label="Services" open={activeMenu === 'services'}
              onEnter={() => openMenu('services')} onLeave={closeMenu}>
              <DropPanel onEnter={stayOpen} onLeave={closeMenu} className="w-60">
                <div className="p-2.5">
                  <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase px-3 py-2">Services</p>
                  {SERVICES.map(s => (
                    <Link key={s.href} href={s.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 group transition-colors">
                      <span className="text-[13px] text-slate-700 group-hover:text-slate-900">{s.name}</span>
                      <ArrowRight size={11} className="text-slate-300 group-hover:text-[#006FEE] transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </DropPanel>
            </NavDropdown>

            <NavDropdown label="Company" open={activeMenu === 'company'}
              onEnter={() => openMenu('company')} onLeave={closeMenu}>
              <DropPanel onEnter={stayOpen} onLeave={closeMenu} className="w-48">
                <div className="p-2.5">
                  <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase px-3 py-2">Company</p>
                  {COMPANY.map(c => (
                    <Link key={c.href} href={c.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 group transition-colors">
                      <span className="text-[13px] text-slate-700 group-hover:text-slate-900">{c.name}</span>
                      <ArrowRight size={11} className="text-slate-300 group-hover:text-[#006FEE] transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </DropPanel>
            </NavDropdown>

            <NavLink href="/case-studies" label="Case Studies" />
            <NavLink href="/blog"         label="Blog" />
          </nav>

          <div className="hidden xl:flex items-center gap-1.5">
            <Link href="/contact" className="px-4 py-2 text-[13.5px] font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">
              Contact
            </Link>
            <Link href="/contact#consultation" className="btn btn-primary text-[13.5px] py-2 px-5">
              Book a Call
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white max-h-[85vh] overflow-y-auto">
          <div className="container py-3 divide-y divide-slate-100">
            {[
              { label: 'Products',     href: '/products/crypto-exchange', items: PRODUCTS.map(p => ({ name: p.name, href: p.href })) },
              { label: 'Services',     href: '/services',                 items: SERVICES },
              { label: 'Company',      href: '/about',                    items: COMPANY },
              { label: 'Case Studies', href: '/case-studies',             items: null },
              { label: 'Blog',         href: '/blog',                     items: null },
            ].map(item => (
              <div key={item.label} className="py-1">
                <div className="flex items-center justify-between py-2.5">
                  <Link href={item.href} className="text-[15px] font-medium text-slate-800"
                    onClick={() => { if (!item.items) setMobileOpen(false); }}>
                    {item.label}
                  </Link>
                  {item.items && (
                    <button onClick={() => setActiveMobile(activeMobile === item.label ? null : item.label)} className="p-1 text-slate-400">
                      <ChevronDown size={15} className={`transition-transform ${activeMobile === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {item.items && activeMobile === item.label && (
                  <div className="pb-2 pl-2 space-y-0">
                    {item.items.map(sub => (
                      <Link key={sub.href} href={sub.href}
                        className="block py-2 text-[13.5px] text-slate-500 hover:text-[#006FEE] transition-colors border-b border-slate-50 last:border-0"
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
  );
}

function NavDropdown({ label, open, children, onEnter, onLeave }: {
  label: string; open: boolean; children: React.ReactNode; onEnter: () => void; onLeave: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button className={`flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-all ${
        open ? 'text-[#006FEE] bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
      }`}>
        {label}
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180 text-[#006FEE]' : 'text-slate-400'}`} />
      </button>
      {open && children}
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="px-3.5 py-2 text-[13.5px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
      {label}
    </Link>
  );
}

function DropPanel({ children, onEnter, onLeave, className }: {
  children: React.ReactNode; onEnter: () => void; onLeave: () => void; className?: string;
}) {
  return (
    <div className={`absolute top-full pt-2.5 z-50 ${className}`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.1)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
