'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { TwitterIcon, LinkedinIcon } from '@/components/common/SocialIcons';
import ShivachaLogo from '@/components/common/ShivachaLogo';

const products = [
  { icon: '🏦', name: 'Crypto Exchange',      desc: 'CEX & DEX platform',         href: '/products/crypto-exchange',  badge: 'Popular' },
  { icon: '🏛️', name: 'Neo Banking',          desc: 'Digital banking OS',          href: '/products/neo-banking' },
  { icon: '💳', name: 'Crypto Debit Card',    desc: 'Card issuance infrastructure', href: '/products/crypto-card' },
  { icon: '🪙', name: 'Tokenization Platform',desc: 'Asset tokenization engine',   href: '/products/tokenization',    badge: 'New' },
  { icon: '🤖', name: 'Trading Bots',         desc: 'Algorithmic trading',         href: '/products/trading-bots' },
  { icon: '📈', name: 'Forex Infrastructure', desc: 'FX & CFD brokerage stack',    href: '/products/forex' },
  { icon: '🧠', name: 'AI Agent Platform',    desc: 'Autonomous AI workflows',     href: '/products/ai-agents',       badge: 'New' },
  { icon: '👛', name: 'Enterprise Wallet',    desc: 'Multi-chain wallet systems',  href: '/products/wallet' },
  { icon: '📊', name: 'Broker CRM',           desc: 'Trading relationship mgmt',   href: '/products/broker-crm' },
  { icon: '☁️', name: 'Cloud & VPS',          desc: 'Enterprise cloud infra',      href: '/products/cloud' },
];

const services = [
  { icon: '⛓️', name: 'Blockchain Development', href: '/services/blockchain-development' },
  { icon: '🤖', name: 'AI & ML Development',    href: '/services/ai-development' },
  { icon: '📋', name: 'Smart Contracts',         href: '/services/smart-contracts' },
  { icon: '💱', name: 'DeFi Development',        href: '/services/defi-development' },
  { icon: '🎨', name: 'NFT Development',         href: '/services/nft-development' },
  { icon: '🌐', name: 'Web3 Development',        href: '/services/web3-development' },
  { icon: '📱', name: 'Mobile App Dev',          href: '/services/mobile-apps' },
  { icon: '⚙️', name: 'DevOps & Cloud',          href: '/services/devops' },
  { icon: '🔐', name: 'Security Audits',         href: '/services/security-audit' },
  { icon: '🌌', name: 'Metaverse Dev',           href: '/services/metaverse' },
];

const industries = [
  { name: 'Banking & Finance',   href: '/industries/banking' },
  { name: 'Forex & Trading',     href: '/industries/forex' },
  { name: 'Healthcare',          href: '/industries/healthcare' },
  { name: 'Real Estate',         href: '/industries/real-estate' },
  { name: 'Gaming & Metaverse',  href: '/industries/gaming' },
  { name: 'Government & Public', href: '/industries/government' },
];

export default function Header() {
  const [scrollY, setScrollY]         = useState(0);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeMobile, setActiveMobile] = useState<string|null>(null);
  const [activeDesktop, setActiveDesktop] = useState<string|null>(null);
  const timeoutRef = useRef<NodeJS.Timeout|null>(null);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const open  = (n: string) => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setActiveDesktop(n); };
  const close = () => { timeoutRef.current = setTimeout(() => setActiveDesktop(null), 120); };
  const stay  = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };

  const scrolled = scrollY > 20;

  return (
    <>
      {/* Thin top info bar */}
      <div className="hidden md:block bg-slate-900 py-2">
        <div className="container flex items-center justify-between text-[12px] text-slate-400">
          <div className="flex items-center gap-6">
            <a href="tel:+18008000000" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <Phone size={11} /> +1 800 800 0000
            </a>
            <a href="mailto:enterprise@shivacha.com" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <Mail size={11} /> enterprise@shivacha.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-slate-500">🇺🇸 USA · 🇮🇳 India · 🇬🇧 UK</span>
            <div className="flex items-center gap-2">
              {[
                { I: TwitterIcon,  h: 'https://twitter.com/Shivachatech'          },
                { I: LinkedinIcon, h: 'https://linkedin.com/company/Shivachatech' },
              ].map(({ I, h }) => (
                <a key={h} href={h} target="_blank" rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors"><I size={13} /></a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200' : 'bg-white border-b border-slate-200'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <ShivachaLogo size="md" variant="full" href="/" />

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              <NavLink href="/" label="Home" />

              {/* Products */}
              <div className="relative" onMouseEnter={() => open('products')} onMouseLeave={close}>
                <button className={`flex items-center gap-1 px-3 py-2 text-[14px] font-medium rounded-lg transition-colors ${
                  activeDesktop === 'products' ? 'text-[#0099E6] bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}>
                  Products <ChevronDown size={13} className={`transition-transform ${activeDesktop === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {activeDesktop === 'products' && (
                  <Dropdown onMouseEnter={stay} onMouseLeave={close} width="w-[660px]">
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#0099E6]">Platform Products</p>
                        <Link href="/products/crypto-exchange" className="text-[12px] text-slate-400 hover:text-[#0099E6] flex items-center gap-1">
                          All products <ArrowRight size={11} />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {products.map(p => (
                          <Link key={p.href} href={p.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 group/i transition-colors">
                            <span className="text-lg flex-shrink-0">{p.icon}</span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[13px] font-semibold text-slate-800 group-hover/i:text-[#0099E6] transition-colors">{p.name}</span>
                                {p.badge && (
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${p.badge === 'New' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                                    {p.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[12px] text-slate-400 truncate">{p.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Dropdown>
                )}
              </div>

              {/* Services */}
              <div className="relative" onMouseEnter={() => open('services')} onMouseLeave={close}>
                <button className={`flex items-center gap-1 px-3 py-2 text-[14px] font-medium rounded-lg transition-colors ${
                  activeDesktop === 'services' ? 'text-[#0099E6] bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}>
                  Services <ChevronDown size={13} className={`transition-transform ${activeDesktop === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDesktop === 'services' && (
                  <Dropdown onMouseEnter={stay} onMouseLeave={close} width="w-[380px]">
                    <div className="p-4">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#0099E6] mb-3 px-2">Dev Services</p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {services.map(s => (
                          <Link key={s.href} href={s.href}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-50 group/i transition-colors">
                            <span className="text-base">{s.icon}</span>
                            <span className="text-[13px] text-slate-600 group-hover/i:text-slate-900 transition-colors">{s.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Dropdown>
                )}
              </div>

              {/* Industries */}
              <div className="relative" onMouseEnter={() => open('industries')} onMouseLeave={close}>
                <button className={`flex items-center gap-1 px-3 py-2 text-[14px] font-medium rounded-lg transition-colors ${
                  activeDesktop === 'industries' ? 'text-[#0099E6] bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}>
                  Industries <ChevronDown size={13} className={`transition-transform ${activeDesktop === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {activeDesktop === 'industries' && (
                  <Dropdown onMouseEnter={stay} onMouseLeave={close} width="w-52">
                    <div className="p-3">
                      {industries.map(i => (
                        <Link key={i.href} href={i.href}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50 group/i transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0099E6] flex-shrink-0" />
                          <span className="text-[13px] text-slate-600 group-hover/i:text-slate-900 transition-colors">{i.name}</span>
                        </Link>
                      ))}
                    </div>
                  </Dropdown>
                )}
              </div>

              <NavLink href="/case-studies" label="Case Studies" />
              <NavLink href="/about"        label="About" />
              <NavLink href="/blog"         label="Blog" />
            </nav>

            {/* CTAs */}
            <div className="hidden xl:flex items-center gap-2">
              <Link href="/contact" className="btn btn-ghost text-sm py-2 px-4">Contact</Link>
              <Link href="/contact#consultation" className="btn btn-primary text-sm py-2 px-5">
                Book Consultation <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 max-h-[80vh] overflow-y-auto">
            <div className="container py-2">
              {[
                { label: 'Home',        href: '/',           items: null },
                { label: 'Products',    href: '/products/crypto-exchange', items: products.map(p => ({ name: p.name, href: p.href })) },
                { label: 'Services',    href: '/services',   items: services.map(s => ({ name: s.name, href: s.href })) },
                { label: 'Industries',  href: '/industries', items: industries },
                { label: 'Case Studies',href: '/case-studies', items: null },
                { label: 'About',       href: '/about',      items: null },
                { label: 'Blog',        href: '/blog',       items: null },
                { label: 'Careers',     href: '/careers',    items: null },
              ].map(item => (
                <div key={item.label}>
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <Link href={item.href} className="text-slate-800 font-medium text-[15px]" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                    {item.items && (
                      <button onClick={() => setActiveMobile(activeMobile === item.label ? null : item.label)}
                        className="text-slate-400 p-1">
                        <ChevronDown size={16} className={`transition-transform ${activeMobile === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.items && activeMobile === item.label && (
                    <div className="pl-4 py-1">
                      {item.items.map(sub => (
                        <Link key={sub.href} href={sub.href}
                          className="block py-2.5 text-[14px] text-slate-500 hover:text-[#0099E6] transition-colors border-b border-slate-100 last:border-0"
                          onClick={() => setMobileOpen(false)}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="container pb-4 pt-2 flex flex-col gap-2">
              <Link href="/contact" className="btn btn-ghost w-full justify-center" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link href="/contact#consultation" className="btn btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                Book Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="px-3 py-2 text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all">
      {label}
    </Link>
  );
}

function Dropdown({ children, onMouseEnter, onMouseLeave, width }: {
  children: React.ReactNode; onMouseEnter?: () => void; onMouseLeave?: () => void; width: string;
}) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={`${width} bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/80 overflow-hidden`}>
        {children}
      </div>
    </div>
  );
}
