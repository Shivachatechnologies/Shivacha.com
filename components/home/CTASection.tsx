'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, MessageSquare, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section bg-[#020B18] relative overflow-hidden border-t border-[#0E1E34]">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg-sm opacity-40" />
      <div className="orb w-[600px] h-[600px] bg-[#0066FF] opacity-[0.08] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />

      <div className="container relative z-10 text-center">
        {/* Main CTA block */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="section-label justify-center mb-6">Start Building</div>
          <h2 className="h1 text-white mb-6">
            Ready to Build Your
            <br />
            <span className="shimmer-text">Enterprise Infrastructure?</span>
          </h2>
          <p className="lead max-w-2xl mx-auto mb-10">
            Join 500+ global enterprises that have trusted Shivacha Technologies to build
            their most critical blockchain, AI, and fintech infrastructure. Schedule a
            free consultation today — no commitment required.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/contact#consultation" className="btn btn-primary text-base px-8 py-4">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <Link href="/products" className="btn btn-secondary text-base px-8 py-4">
              Explore Products
            </Link>
            <Link href="/portfolio" className="btn btn-ghost text-base px-8 py-4">
              View Portfolio
            </Link>
          </div>

          {/* 3 contact options */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-6 border border-[#0E1E34] hover:border-[#1E3A5A] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mx-auto mb-4">
                <Calendar size={20} className="text-[#60A5FA]" />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">Schedule a Call</h3>
              <p className="text-[13px] text-[#3D5470] mb-4">Book a 30-min discovery call with our enterprise team</p>
              <Link href="/contact#schedule" className="text-[13px] text-[#60A5FA] font-medium flex items-center gap-1 justify-center hover:gap-2 transition-all">
                Schedule Now <ArrowRight size={13} />
              </Link>
            </div>

            <div className="glass rounded-2xl p-6 border border-[#0E1E34] hover:border-[#1E3A5A] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#6644FF]/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={20} className="text-[#A78BFA]" />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">Send a Brief</h3>
              <p className="text-[13px] text-[#3D5470] mb-4">Share your project brief and get a detailed proposal in 24h</p>
              <Link href="/contact" className="text-[13px] text-[#A78BFA] font-medium flex items-center gap-1 justify-center hover:gap-2 transition-all">
                Send Brief <ArrowRight size={13} />
              </Link>
            </div>

            <div className="glass rounded-2xl p-6 border border-[#0E1E34] hover:border-[#1E3A5A] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#00FF87]/10 flex items-center justify-center mx-auto mb-4">
                <Phone size={20} className="text-[#34D399]" />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">Speak Directly</h3>
              <p className="text-[13px] text-[#3D5470] mb-4">Call our enterprise team in USA, India, or UK — available 24/7</p>
              <a href="tel:+18008000000" className="text-[13px] text-[#34D399] font-medium flex items-center gap-1 justify-center hover:gap-2 transition-all">
                +1 800 800 0000 <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Office addresses */}
        <div className="divider mb-10" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { flag: '🇺🇸', country: 'United States', address: '1234 Innovation Drive, Suite 500\nSilicon Valley, CA 94025', phone: '+1 (415) 800-0000', email: 'usa@shivacha.com' },
            { flag: '🇮🇳', country: 'India', address: 'Plot 45, Sector 18, Cyber City\nGurgaon, Haryana 122015', phone: '+91 124 800 0000', email: 'india@shivacha.com' },
            { flag: '🇬🇧', country: 'United Kingdom', address: '30 St Mary Axe, 5th Floor\nLondon, EC3A 8BF', phone: '+44 20 8000 0000', email: 'uk@shivacha.com' },
          ].map((o) => (
            <div key={o.country} className="text-left glass rounded-2xl p-5 border border-[#0E1E34]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{o.flag}</span>
                <span className="text-[15px] font-bold text-white">{o.country}</span>
              </div>
              <p className="text-[13px] text-[#3D5470] whitespace-pre-line mb-2">{o.address}</p>
              <a href={`tel:${o.phone.replace(/\s/g,'')}`} className="text-[13px] text-[#60A5FA] hover:text-white transition-colors block">{o.phone}</a>
              <a href={`mailto:${o.email}`} className="text-[13px] text-[#3D5470] hover:text-[#60A5FA] transition-colors block">{o.email}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
