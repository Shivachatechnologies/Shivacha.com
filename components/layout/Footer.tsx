import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/common/SocialIcons';

const PRODUCTS_LINKS = [
  { name: 'Crypto Exchange', href: '/products/crypto-exchange' },
  { name: 'Neo Banking Platform', href: '/products/neo-banking' },
  { name: 'Crypto Debit Card', href: '/products/crypto-card' },
  { name: 'Tokenization Platform', href: '/products/tokenization' },
  { name: 'Trading Bot Ecosystem', href: '/products/trading-bots' },
  { name: 'Forex Infrastructure', href: '/products/forex' },
  { name: 'AI Agent Platform', href: '/products/ai-agents' },
  { name: 'Enterprise Wallet', href: '/products/wallet' },
  { name: 'Broker CRM', href: '/products/broker-crm' },
  { name: 'Cloud & VPS', href: '/products/cloud' },
];

const SERVICES_LINKS = [
  { name: 'Blockchain Development', href: '/services/blockchain-development' },
  { name: 'AI & ML Development', href: '/services/ai-development' },
  { name: 'Smart Contract Dev', href: '/services/smart-contracts' },
  { name: 'DeFi Development', href: '/services/defi-development' },
  { name: 'NFT Development', href: '/services/nft-development' },
  { name: 'Web3 Development', href: '/services/web3-development' },
  { name: 'Metaverse Dev', href: '/services/metaverse' },
  { name: 'Mobile App Dev', href: '/services/mobile-apps' },
  { name: 'DevOps & Cloud', href: '/services/devops' },
  { name: 'Security Audits', href: '/services/security-audit' },
];

const COMPANY_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Industries', href: '/industries' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Blog & Insights', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partner Program', href: '/partners' },
  { name: 'Press & Media', href: '/press' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

const OFFICES = [
  { flag: '🇺🇸', country: 'USA', address: 'Silicon Valley, CA 94025', phone: '+1 (415) 800-0000', email: 'usa@shivacha.com' },
  { flag: '🇮🇳', country: 'India', address: 'Cyber City, Gurgaon 122015', phone: '+91 124 800 0000', email: 'india@shivacha.com' },
  { flag: '🇬🇧', country: 'UK', address: '30 St Mary Axe, London', phone: '+44 20 8000 0000', email: 'uk@shivacha.com' },
];

const SOCIAL = [
  { Icon: TwitterIcon,   href: 'https://twitter.com/Shivachatech',           label: 'Twitter'   },
  { Icon: LinkedinIcon,  href: 'https://linkedin.com/company/Shivachatech',  label: 'LinkedIn'  },
  { Icon: FacebookIcon,  href: 'https://facebook.com/Shivachatech',           label: 'Facebook'  },
  { Icon: InstagramIcon, href: 'https://instagram.com/Shivachatech',          label: 'Instagram' },
  { Icon: YoutubeIcon,   href: 'https://youtube.com/Shivachatech',            label: 'YouTube'   },
];

export default function Footer() {
  return (
    <footer className="bg-[#020B18] border-t border-[#0E1E34]">
      {/* Newsletter */}
      <div className="border-b border-[#0E1E34]">
        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Stay Ahead of the Curve</h3>
              <p className="text-[#3D5470] text-[14px]">Enterprise blockchain, AI & fintech insights — weekly digest, no spam.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input type="email" placeholder="enterprise@company.com" className="input md:w-72" />
              <button className="btn btn-primary flex-shrink-0 py-3">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-900/40">
                S
              </div>
              <div>
                <p className="text-white font-bold text-[19px] leading-none">Shivacha</p>
                <p className="text-[10px] text-[#3D5470] tracking-[0.15em] uppercase mt-0.5">Technologies</p>
              </div>
            </Link>
            <p className="text-[13px] text-[#3D5470] leading-relaxed mb-5">
              Global enterprise infrastructure company delivering blockchain, AI, fintech, forex, and cloud ecosystems for the digital economy.
            </p>
            {/* Social */}
            <div className="flex gap-2 mb-6">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl bg-[#060E1C] border border-[#0E1E34] flex items-center justify-center text-[#3D5470] hover:text-[#60A5FA] hover:border-[#0066FF]/40 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {['ISO 27001', 'SOC 2', 'GDPR'].map((c) => (
                <span key={c} className="text-[11px] px-2 py-1 rounded-lg bg-[#060E1C] border border-[#0E1E34] text-[#3D5470]">
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-[14px] mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[#0066FF]" />Products
            </h4>
            <ul className="space-y-2.5">
              {PRODUCTS_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-[#3D5470] hover:text-[#60A5FA] transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-[14px] mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[#6644FF]" />Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-[#3D5470] hover:text-[#A78BFA] transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-[14px] mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[#00D4FF]" />Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-[#3D5470] hover:text-[#60A5FA] transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h4 className="text-white font-semibold text-[14px] mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[#00FF87]" />Global Offices
            </h4>
            <div className="space-y-5">
              {OFFICES.map((o) => (
                <div key={o.country}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-lg">{o.flag}</span>
                    <span className="text-[13px] font-semibold text-white">{o.country}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[12px] text-[#3D5470] mb-1">
                    <MapPin size={11} className="mt-0.5 flex-shrink-0" />{o.address}
                  </div>
                  <a href={`tel:${o.phone.replace(/\s/g,'')}`} className="flex items-center gap-1.5 text-[12px] text-[#3D5470] hover:text-[#60A5FA] transition-colors mb-0.5">
                    <Phone size={10} />{o.phone}
                  </a>
                  <a href={`mailto:${o.email}`} className="flex items-center gap-1.5 text-[12px] text-[#3D5470] hover:text-[#60A5FA] transition-colors">
                    <Mail size={10} />{o.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0E1E34]">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#3D5470]">
            © {new Date().getFullYear()} Shivacha Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[12px] text-[#3D5470]">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((l) => (
              <Link key={l} href={`/${l.toLowerCase().replace(/ /g,'-')}`}
                className="hover:text-[#60A5FA] transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
