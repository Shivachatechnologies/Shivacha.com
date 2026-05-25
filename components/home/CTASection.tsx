import Link from 'next/link';
import { ArrowRight, Calendar, MessageSquare, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#05080F] py-24">
      {/* Background gradient accents */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,111,238,0.12) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 dot-bg opacity-[0.3]" />

      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.05] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006FEE] animate-pulse" />
            <span className="text-[12px] font-semibold text-slate-400 tracking-wide">Ready to Build</span>
          </div>

          <h2 className="h2 text-white mb-6">
            Build Enterprise-Grade<br />
            <span className="gt-blue">Digital Infrastructure</span>
          </h2>
          <p className="lead text-slate-400 max-w-xl mx-auto mb-10">
            Join 500+ global enterprises that trust Shivacha Technologies to build their most critical 
            blockchain, AI, and fintech infrastructure. Schedule a free consultation — no commitment required.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-14">
            <Link href="/contact#consultation" className="btn btn-primary text-[15px] py-3 px-7">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/products/crypto-exchange"
              className="flex items-center gap-2 text-[15px] font-semibold text-slate-300 border border-white/10 hover:border-white/20 hover:text-white rounded-xl py-3 px-7 transition-all">
              Explore Products
            </Link>
          </div>

          {/* Contact options */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <Calendar size={18} />,
                iconBg: 'rgba(0,111,238,0.15)',
                iconColor: '#338EF7',
                title: 'Schedule a Call',
                desc: 'Book a 30-min discovery call with our enterprise architects',
                cta: 'Schedule Now',
                href: '/contact#schedule',
                ctaColor: '#338EF7',
              },
              {
                icon: <MessageSquare size={18} />,
                iconBg: 'rgba(139,92,246,0.15)',
                iconColor: '#A78BFA',
                title: 'Send a Brief',
                desc: 'Share your project brief and get a detailed proposal within 24h',
                cta: 'Send Brief',
                href: '/contact',
                ctaColor: '#A78BFA',
              },
              {
                icon: <Phone size={18} />,
                iconBg: 'rgba(16,185,129,0.15)',
                iconColor: '#34D399',
                title: 'Speak Directly',
                desc: 'Call our enterprise team in USA, India, or UK — 24/7 available',
                cta: '+1 800 800 0000',
                href: 'tel:+18008000000',
                ctaColor: '#34D399',
              },
            ].map(card => (
              <div key={card.title}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all text-left">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: card.iconBg, color: card.iconColor }}>
                  {card.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>
                <a href={card.href} className="flex items-center gap-1.5 text-[13px] font-semibold hover:gap-2.5 transition-all"
                  style={{ color: card.ctaColor }}>
                  {card.cta} <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Office strip */}
        <div className="border-t border-white/[0.07] pt-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { flag: '🇺🇸', country: 'United States', address: '1234 Innovation Drive, Suite 500\nSilicon Valley, CA 94025', phone: '+1 (415) 800-0000', email: 'usa@shivacha.com' },
              { flag: '🇮🇳', country: 'India',          address: 'Plot 45, Sector 18, Cyber City\nGurgaon, Haryana 122015',   phone: '+91 124 800 0000',  email: 'india@shivacha.com' },
              { flag: '🇬🇧', country: 'United Kingdom', address: '30 St Mary Axe, 5th Floor\nLondon, EC3A 8BF',              phone: '+44 20 8000 0000',  email: 'uk@shivacha.com' },
            ].map(o => (
              <div key={o.country} className="text-left bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{o.flag}</span>
                  <span className="text-[14px] font-semibold text-white/80">{o.country}</span>
                </div>
                <p className="text-[12.5px] text-slate-600 whitespace-pre-line mb-2 leading-relaxed">{o.address}</p>
                <a href={`tel:${o.phone.replace(/[\s()]/g,'')}`} className="text-[12.5px] text-slate-500 hover:text-slate-300 transition-colors block">{o.phone}</a>
                <a href={`mailto:${o.email}`} className="text-[12.5px] text-slate-500 hover:text-slate-300 transition-colors block">{o.email}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
