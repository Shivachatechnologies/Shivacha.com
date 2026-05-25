'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const OFFICES = [
  {
    flag: '🇺🇸', country: 'United States', city: 'Silicon Valley, CA',
    address: '1234 Innovation Drive, Suite 500\nSilicon Valley, CA 94025, USA',
    phone: '+1 (415) 800-0000', email: 'usa@shivacha.com',
    hours: 'Mon–Fri 9:00 AM – 6:00 PM PST',
  },
  {
    flag: '🇮🇳', country: 'India', city: 'Gurgaon, Haryana',
    address: 'Plot 45, Sector 18, Cyber City\nGurgaon, Haryana 122015, India',
    phone: '+91 124 800 0000', email: 'india@shivacha.com',
    hours: 'Mon–Sat 9:00 AM – 7:00 PM IST',
  },
  {
    flag: '🇬🇧', country: 'United Kingdom', city: 'London',
    address: '30 St Mary Axe, 5th Floor\nLondon, EC3A 8BF, United Kingdom',
    phone: '+44 20 8000 0000', email: 'uk@shivacha.com',
    hours: 'Mon–Fri 9:00 AM – 6:00 PM GMT',
  },
];

const SERVICES = [
  'Blockchain Development', 'AI Development', 'Crypto Exchange', 'Neo Banking',
  'Forex Infrastructure', 'Tokenization', 'DeFi Development', 'NFT Development',
  'Web3 Development', 'Smart Contracts', 'Trading Bots', 'Mobile Apps',
  'Cloud & DevOps', 'Security Audit', 'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    service: '', budget: '', message: '',
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-96 h-96 bg-[#0099E6] opacity-[0.07] -left-20 top-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Contact Us</div>
            <h1 className="h1 text-slate-900 mb-6">
              Let&apos;s Build Your
              <br /><span className="gt-blue">Enterprise Infrastructure</span>
            </h1>
            <p className="lead max-w-xl">
              Ready to launch your blockchain, AI, or fintech platform? Our enterprise team
              will respond within 4 business hours with a detailed proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Offices */}
      <section className="section-sm bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="h3 text-slate-900 mb-6">Send a Project Brief</h2>
              {submitted ? (
                <div className="glass rounded-3xl p-10 border border-slate-200 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Received!</h3>
                  <p className="text-slate-500 mb-4">
                    Thank you for reaching out. Our enterprise team will contact you within 4 business hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] text-slate-500 mb-1.5">Full Name *</label>
                      <input name="name" value={form.name} onChange={handle} required
                        className="input" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-slate-500 mb-1.5">Company *</label>
                      <input name="company" value={form.company} onChange={handle} required
                        className="input" placeholder="Your Company Inc." />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] text-slate-500 mb-1.5">Work Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handle} required
                        className="input" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-slate-500 mb-1.5">Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handle}
                        className="input" placeholder="+1 234 567 8900" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] text-slate-500 mb-1.5">Country</label>
                      <input name="country" value={form.country} onChange={handle}
                        className="input" placeholder="United States" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-slate-500 mb-1.5">Service Needed *</label>
                      <select name="service" value={form.service} onChange={handle} required className="input">
                        <option value="">Select Service</option>
                        {SERVICES.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] text-slate-500 mb-1.5">Estimated Budget</label>
                    <select name="budget" value={form.budget} onChange={handle} className="input">
                      <option value="">Select Budget Range</option>
                      {['Under $25K', '$25K–$50K', '$50K–$100K', '$100K–$250K', '$250K–$500K', '$500K+', 'Ongoing Partnership'].map(b => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] text-slate-500 mb-1.5">Project Details *</label>
                    <textarea name="message" value={form.message} onChange={handle} required rows={4}
                      className="input resize-none"
                      placeholder="Describe your project, goals, timeline, and any specific requirements..." />
                  </div>
                  <button type="submit" disabled={loading} className="btn btn-primary w-full justify-center py-4 text-base">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={16} /> Send Project Brief
                      </span>
                    )}
                  </button>
                  <p className="text-[12px] text-slate-400 text-center">
                    🔒 NDA available upon request. We respond within 4 business hours.
                  </p>
                </form>
              )}
            </div>

            {/* Office info */}
            <div>
              <h2 className="h3 text-slate-900 mb-6">Global Offices</h2>
              <div className="space-y-5">
                {OFFICES.map((o) => (
                  <div key={o.country} className="card rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{o.flag}</span>
                      <div>
                        <p className="text-[16px] font-bold text-slate-900">{o.country}</p>
                        <p className="text-[13px] text-[#33B5E5]">{o.city}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-[13px] text-slate-500">
                        <MapPin size={14} className="text-[#0099E6] mt-0.5 flex-shrink-0" />
                        <span className="whitespace-pre-line">{o.address}</span>
                      </div>
                      <a href={`tel:${o.phone.replace(/\s/g,'')}`}
                        className="flex items-center gap-2 text-[13px] text-slate-500 hover:text-[#33B5E5] transition-colors">
                        <Phone size={13} className="text-[#0099E6]" />{o.phone}
                      </a>
                      <a href={`mailto:${o.email}`}
                        className="flex items-center gap-2 text-[13px] text-slate-500 hover:text-[#33B5E5] transition-colors">
                        <Mail size={13} className="text-[#0099E6]" />{o.email}
                      </a>
                      <div className="flex items-center gap-2 text-[13px] text-slate-500">
                        <Clock size={13} className="text-[#0099E6]" />{o.hours}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-6 card rounded-2xl p-5 border border-slate-200">
                <p className="text-[14px] font-semibold text-slate-900 mb-3">Follow @Shivachatech</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Twitter / X', href: 'https://twitter.com/Shivachatech', icon: '𝕏' },
                    { name: 'LinkedIn', href: 'https://linkedin.com/company/Shivachatech', icon: 'in' },
                    { name: 'Instagram', href: 'https://instagram.com/Shivachatech', icon: '📷' },
                    { name: 'YouTube', href: 'https://youtube.com/Shivachatech', icon: '▶' },
                    { name: 'Facebook', href: 'https://facebook.com/Shivachatech', icon: 'f' },
                  ].map(s => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 text-[12px] text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all">
                      <span>{s.icon}</span>{s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
