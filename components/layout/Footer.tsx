import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/common/SocialIcons';
import ShivachaLogo from '@/components/common/ShivachaLogo';

const PRODUCTS = [
  { name: 'Crypto Exchange',      href: '/products/crypto-exchange' },
  { name: 'Neo Banking Platform', href: '/products/neo-banking' },
  { name: 'Crypto Debit Card',    href: '/products/crypto-card' },
  { name: 'Tokenization Engine',  href: '/products/tokenization' },
  { name: 'Trading Bot Ecosystem',href: '/products/trading-bots' },
  { name: 'Forex Infrastructure', href: '/products/forex' },
  { name: 'AI Agent Platform',    href: '/products/ai-agents' },
  { name: 'Enterprise Wallet',    href: '/products/wallet' },
  { name: 'Broker CRM',          href: '/products/broker-crm' },
  { name: 'Cloud & VPS',         href: '/products/cloud' },
];

const SERVICES = [
  { name: 'Blockchain Dev',    href: '/services/blockchain-development' },
  { name: 'AI & ML Dev',       href: '/services/ai-development' },
  { name: 'Smart Contracts',   href: '/services/smart-contracts' },
  { name: 'DeFi Development',  href: '/services/defi-development' },
  { name: 'NFT Development',   href: '/services/nft-development' },
  { name: 'Web3 Development',  href: '/services/web3-development' },
  { name: 'Mobile App Dev',    href: '/services/mobile-apps' },
  { name: 'DevOps & Cloud',    href: '/services/devops' },
  { name: 'Security Audits',   href: '/services/security-audit' },
  { name: 'Metaverse Dev',     href: '/services/metaverse' },
];

const COMPANY = [
  { name: 'About Us',      href: '/about' },
  { name: 'Case Studies',  href: '/case-studies' },
  { name: 'Industries',    href: '/industries' },
  { name: 'Blog & Insights',href: '/blog' },
  { name: 'Careers',       href: '/careers' },
  { name: 'Partner Program',href: '/partners' },
  { name: 'Press & Media', href: '/press' },
  { name: 'Privacy Policy',href: '/privacy' },
  { name: 'Terms of Service',href: '/terms' },
];

const SOCIAL = [
  { Icon: TwitterIcon,   href: 'https://twitter.com/Shivachatech',          label: 'Twitter' },
  { Icon: LinkedinIcon,  href: 'https://linkedin.com/company/Shivachatech', label: 'LinkedIn' },
  { Icon: FacebookIcon,  href: 'https://facebook.com/Shivachatech',          label: 'Facebook' },
  { Icon: InstagramIcon, href: 'https://instagram.com/Shivachatech',         label: 'Instagram' },
  { Icon: YoutubeIcon,   href: 'https://youtube.com/Shivachatech',           label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#05080F] text-slate-400">

      {/* Newsletter CTA strip */}
      <div className="border-b border-white/[0.06]">
        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Stay Ahead of the Curve</h3>
              <p className="text-[14px] text-slate-500">Enterprise blockchain, AI & fintech insights. Weekly digest, zero spam.</p>
            </div>
            <form className="flex gap-2.5 w-full md:w-auto" action="/api/newsletter">
              <input
                type="email"
                placeholder="you@company.com"
                className="bg-white/[0.06] border border-white/10 text-white placeholder:text-slate-600 px-4 py-2.5 rounded-xl text-[14px] outline-none focus:border-[#3B82F6] transition-colors md:w-64"
              />
              <button type="submit" className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[13.5px] font-semibold px-4 py-2.5 rounded-xl transition-colors flex-shrink-0">
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main links grid */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-4">
              <ShivachaLogo size="md" variant="full" href="/" dark />
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-6">
              Global enterprise infrastructure company building blockchain, AI, fintech, and cloud ecosystems for the digital economy.
            </p>
            <div className="flex gap-2 mb-6">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['ISO 27001', 'SOC 2', 'GDPR'].map(c => (
                <span key={c} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-500">
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-5">Products</h4>
            <ul className="space-y-2.5">
              {PRODUCTS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-slate-500 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-5">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-slate-500 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-5">Company</h4>
            <ul className="space-y-2.5">
              {COMPANY.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-slate-500 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-5">Global Offices</h4>
            <div className="space-y-5">
              {[
                { flag: '🇺🇸', country: 'USA',   address: 'Silicon Valley, CA 94025',  phone: '+1 (415) 800-0000', email: 'usa@shivacha.com' },
                { flag: '🇮🇳', country: 'India', address: 'Cyber City, Gurgaon 122015', phone: '+91 124 800 0000',  email: 'india@shivacha.com' },
                { flag: '🇬🇧', country: 'UK',    address: '30 St Mary Axe, London',    phone: '+44 20 8000 0000',  email: 'uk@shivacha.com' },
              ].map(o => (
                <div key={o.country}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span>{o.flag}</span>
                    <span className="text-[13px] font-semibold text-white/80">{o.country}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[11.5px] text-slate-600 mb-1">
                    <MapPin size={10} className="mt-0.5 flex-shrink-0" />{o.address}
                  </div>
                  <a href={`tel:${o.phone.replace(/[\s()]/g,'')}`}
                    className="flex items-center gap-1.5 text-[11.5px] text-slate-500 hover:text-white transition-colors mb-0.5">
                    <Phone size={10} />{o.phone}
                  </a>
                  <a href={`mailto:${o.email}`}
                    className="flex items-center gap-1.5 text-[11.5px] text-slate-500 hover:text-white transition-colors">
                    <Mail size={10} />{o.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-600">
            © {new Date().getFullYear()} Shivacha Technologies Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-[12px] text-slate-600">
            {[
              ['Privacy Policy', '/privacy'],
              ['Terms of Service', '/terms'],
              ['Cookie Policy', '/privacy'],
              ['Sitemap', '/'],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-slate-300 transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
