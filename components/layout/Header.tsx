'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from '@/components/common/SocialIcons';
import ShivachaLogo from '@/components/common/ShivachaLogo';

/* ── Navigation Data ── */
const products = [
  { icon: '🏦', name: 'Crypto Exchange', desc: 'CEX & DEX infrastructure', href: '/products/crypto-exchange', badge: 'Popular' },
  { icon: '🏛️', name: 'Neo Banking Platform', desc: 'Digital banking ecosystem', href: '/products/neo-banking' },
  { icon: '💳', name: 'Crypto Debit Card', desc: 'Card issuance infrastructure', href: '/products/crypto-card' },
  { icon: '🪙', name: 'Tokenization Platform', desc: 'Asset tokenization engine', href: '/products/tokenization', badge: 'New' },
  { icon: '🤖', name: 'Trading Bot Ecosystem', desc: 'Algorithmic trading systems', href: '/products/trading-bots' },
  { icon: '📈', name: 'Forex Infrastructure', desc: 'FX & CFD trading platforms', href: '/products/forex' },
  { icon: '🧠', name: 'AI Agent Platform', desc: 'Autonomous AI workflows', href: '/products/ai-agents', badge: 'New' },
  { icon: '👛', name: 'Enterprise Wallet', desc: 'Multi-chain wallet systems', href: '/products/wallet' },
  { icon: '📊', name: 'Broker CRM', desc: 'Trading relationship mgmt', href: '/products/broker-crm' },
  { icon: '☁️', name: 'Cloud & VPS', desc: 'Enterprise cloud infra', href: '/products/cloud' },
];

const services = [
  { icon: '⛓️', name: 'Blockchain Development', href: '/services/blockchain-development' },
  { icon: '🤖', name: 'AI & ML Development', href: '/services/ai-development' },
  { icon: '📋', name: 'Smart Contracts', href: '/services/smart-contracts' },
  { icon: '💱', name: 'DeFi Development', href: '/services/defi-development' },
  { icon: '🎨', name: 'NFT Development', href: '/services/nft-development' },
  { icon: '🌐', name: 'Web3 Development', href: '/services/web3-development' },
  { icon: '🌌', name: 'Metaverse Development', href: '/services/metaverse' },
  { icon: '📱', name: 'Mobile App Dev', href: '/services/mobile-apps' },
  { icon: '⚙️', name: 'DevOps & Cloud', href: '/services/devops' },
  { icon: '🔐', name: 'Security Audits', href: '/services/security-audit' },
];

const industries = [
  { name: 'Banking & Finance', href: '/industries/banking' },
  { name: 'Forex & Trading', href: '/industries/forex' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Real Estate', href: '/industries/real-estate' },
  { name: 'Supply Chain', href: '/industries/supply-chain' },
  { name: 'Gaming & Metaverse', href: '/industries/gaming' },
  { name: 'Government & Public', href: '/industries/government' },
  { name: 'Insurance & Insurtech', href: '/industries/insurance' },
  { name: 'Retail & E-commerce', href: '/industries/retail' },
  { name: 'Education & EdTech', href: '/industries/education' },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);
  const [activeDesktop, setActiveDesktop] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrolled = scrollY > 40;

  const openMenu = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDesktop(name);
  };
  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveDesktop(null), 120);
  };
  const stayOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#020B18] border-b border-[#0E1E34] py-2">
        <div className="container flex items-center justify-between text-[12px] text-[#3D5470]">
          <div className="flex items-center gap-6">
            <a href="tel:+18008000000" className="flex items-center gap-1.5 hover:text-[#33B5E5] transition-colors">
              <Phone size={11} />+1 800 800 0000
            </a>
            <a href="mailto:enterprise@shivacha.com" className="flex items-center gap-1.5 hover:text-[#33B5E5] transition-colors">
              <Mail size={11} />enterprise@shivacha.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span>🇺🇸 USA · 🇮🇳 India · 🇬🇧 UK</span>
            <span className="text-[#0E1E34]">|</span>
            <div className="flex items-center gap-3">
              {[
                { I: TwitterIcon,   h: 'https://twitter.com/Shivachatech'           },
                { I: LinkedinIcon,  h: 'https://linkedin.com/company/Shivachatech'  },
                { I: FacebookIcon,  h: 'https://facebook.com/Shivachatech'           },
                { I: InstagramIcon, h: 'https://instagram.com/Shivachatech'          },
              ].map(({ I, h }) => (
                <a key={h} href={h} target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#33B5E5] transition-colors">
                  <I size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000008]/95 backdrop-blur-2xl border-b border-[#0E1E34] shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <ShivachaLogo size="md" variant="full" href="/" />

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center">
              <NavLink href="/" label="Home" />

              {/* Products mega menu */}
              <div className="relative"
                onMouseEnter={() => openMenu('products')}
                onMouseLeave={closeMenu}>
                <button className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium rounded-lg transition-colors ${activeDesktop === 'products' ? 'text-white bg-white/5' : 'text-[#7A8FA6] hover:text-white hover:bg-white/5'}`}>
                  Products <ChevronDown size={13} className={`transition-transform duration-200 ${activeDesktop === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {activeDesktop === 'products' && (
                  <MegaDropdown onMouseEnter={stayOpen} onMouseLeave={closeMenu}>
                    <div className="w-[680px] p-6">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#33B5E5]">Platform Products</p>
                        <Link href="/products" className="text-[12px] text-[#3D5470] hover:text-[#33B5E5] transition-colors flex items-center gap-1">
                          View all <ArrowRight size={11} />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {products.map((p) => (
                          <Link key={p.href} href={p.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#060E1C] transition-colors group/item">
                            <span className="text-xl flex-shrink-0">{p.icon}</span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[13px] font-semibold text-white group-hover/item:text-[#33B5E5] transition-colors truncate">{p.name}</span>
                                {p.badge && (
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0 ${p.badge === 'New' ? 'bg-green-500/15 text-green-400' : 'bg-blue-500/15 text-blue-400'}`}>
                                    {p.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[12px] text-[#3D5470] mt-0.5 truncate">{p.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </MegaDropdown>
                )}
              </div>

              {/* Services mega menu */}
              <div className="relative"
                onMouseEnter={() => openMenu('services')}
                onMouseLeave={closeMenu}>
                <button className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium rounded-lg transition-colors ${activeDesktop === 'services' ? 'text-white bg-white/5' : 'text-[#7A8FA6] hover:text-white hover:bg-white/5'}`}>
                  Services <ChevronDown size={13} className={`transition-transform duration-200 ${activeDesktop === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDesktop === 'services' && (
                  <MegaDropdown onMouseEnter={stayOpen} onMouseLeave={closeMenu}>
                    <div className="w-[400px] p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#33B5E5] mb-3">Development Services</p>
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((s) => (
                          <Link key={s.href} href={s.href}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#060E1C] transition-colors group/item">
                            <span className="text-base">{s.icon}</span>
                            <span className="text-[13px] text-[#7A8FA6] group-hover/item:text-white transition-colors">{s.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </MegaDropdown>
                )}
              </div>

              {/* Industries dropdown */}
              <div className="relative"
                onMouseEnter={() => openMenu('industries')}
                onMouseLeave={closeMenu}>
                <button className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium rounded-lg transition-colors ${activeDesktop === 'industries' ? 'text-white bg-white/5' : 'text-[#7A8FA6] hover:text-white hover:bg-white/5'}`}>
                  Industries <ChevronDown size={13} className={`transition-transform duration-200 ${activeDesktop === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {activeDesktop === 'industries' && (
                  <MegaDropdown onMouseEnter={stayOpen} onMouseLeave={closeMenu}>
                    <div className="w-56 p-3">
                      {industries.map((i) => (
                        <Link key={i.href} href={i.href}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#060E1C] transition-colors group/item">
                          <div className="w-1 h-1 rounded-full bg-[#0099E6] group-hover/item:bg-[#00D4FF] transition-colors" />
                          <span className="text-[13px] text-[#7A8FA6] group-hover/item:text-white transition-colors">{i.name}</span>
                        </Link>
                      ))}
                    </div>
                  </MegaDropdown>
                )}
              </div>

              <NavLink href="/case-studies" label="Case Studies" />
              <NavLink href="/about" label="About" />
              <NavLink href="/blog" label="Blog" />
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden xl:flex items-center gap-3">
              <Link href="/contact" className="btn btn-ghost text-sm py-2.5 px-5">Contact</Link>
              <Link href="/contact#consultation" className="btn btn-primary text-sm py-2.5 px-5">
                Book Consultation <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-10 h-10 rounded-xl border border-[#0E1E34] flex items-center justify-center text-white hover:bg-[#060E1C] transition-colors">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-[#020B18] border-t border-[#0E1E34] max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-2">
              {[
                { label: 'Home', href: '/', items: null },
                { label: 'Products', href: '/products', items: products.map(p => ({ name: p.name, href: p.href })) },
                { label: 'Services', href: '/services', items: services.map(s => ({ name: s.name, href: s.href })) },
                { label: 'Industries', href: '/industries', items: industries },
                { label: 'Case Studies', href: '/case-studies', items: null },
                { label: 'About', href: '/about', items: null },
                { label: 'Blog', href: '/blog', items: null },
                { label: 'Careers', href: '/careers', items: null },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between py-3 border-b border-[#0E1E34]">
                    <Link href={item.href} className="text-white font-medium text-[15px]" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                    {item.items && (
                      <button onClick={() => setActiveMobile(activeMobile === item.label ? null : item.label)}
                        className="text-[#3D5470] hover:text-white transition-colors p-1">
                        <ChevronDown size={16} className={`transition-transform ${activeMobile === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.items && activeMobile === item.label && (
                    <div className="pl-4 py-1">
                      {item.items.map((sub) => (
                        <Link key={sub.href} href={sub.href}
                          className="block py-2.5 text-[14px] text-[#3D5470] hover:text-[#33B5E5] transition-colors border-b border-[#0E1E34]/50 last:border-0"
                          onClick={() => setMobileOpen(false)}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 space-y-3">
              <Link href="/contact" className="btn btn-ghost w-full justify-center" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
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
    <Link href={href}
      className="px-4 py-2 text-[14px] font-medium text-[#7A8FA6] hover:text-white hover:bg-white/5 rounded-lg transition-all">
      {label}
    </Link>
  );
}

function MegaDropdown({ children, onMouseEnter, onMouseLeave }: {
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="bg-[#020B18] border border-[#0E1E34] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
        style={{ boxShadow: '0 25px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,153,230,0.08)' }}>
        {children}
      </div>
    </div>
  );
}
