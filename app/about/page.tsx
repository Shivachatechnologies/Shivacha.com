import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About Shivacha Technologies | Enterprise Blockchain & AI Infrastructure Company',
  description: 'Learn about Shivacha Technologies — a global enterprise infrastructure company with offices in USA, India, and UK, delivering blockchain, AI, and fintech solutions since 2016.',
};

const TEAM = [
  { name: 'Rajat Sharma', role: 'CEO & Co-Founder', img: 'RS', bio: 'IIT Delhi alumni. 15+ years in fintech and enterprise software. Former Director at Goldman Sachs Technology.', linkedin: '#' },
  { name: 'Ananya Singh', role: 'CTO & Co-Founder', img: 'AS', bio: 'PhD Computer Science, MIT. 12+ years in blockchain protocol design and AI research. Ex-Ethereum Foundation contributor.', linkedin: '#' },
  { name: 'Michael Torres', role: 'President, Americas', img: 'MT', bio: '20 years in enterprise sales and technology partnerships. Former VP at IBM and Accenture Digital.', linkedin: '#' },
  { name: 'James Wright', role: 'MD, United Kingdom', img: 'JW', bio: '18 years in financial technology and digital banking. Former CTO at a FTSE-100 financial services firm.', linkedin: '#' },
  { name: 'Priya Mehta', role: 'Head of AI Research', img: 'PM', bio: 'ML PhD, Stanford. Former Google Brain researcher. Specializes in LLMs, reinforcement learning, and autonomous agents.', linkedin: '#' },
  { name: 'Kevin Liu', role: 'Head of Security', img: 'KL', bio: 'CISSP, CEH certified. Ex-NSA security researcher. Led smart contract audits for $4B+ DeFi protocols.', linkedin: '#' },
];

const MILESTONES = [
  { year: '2016', title: 'Founded', desc: 'Shivacha Technologies established in Gurgaon, India with a focus on enterprise blockchain development.' },
  { year: '2018', title: 'Global Expansion', desc: 'Opened offices in London, UK and Silicon Valley, USA. Team scaled to 50+ engineers.' },
  { year: '2019', title: '$500M Milestone', desc: 'Reached $500M in total value managed across client platforms. ISO 27001 certified.' },
  { year: '2021', title: 'DeFi Leadership', desc: 'Delivered 50+ DeFi protocols and NFT platforms. Recognized as Top Blockchain Company by Clutch.' },
  { year: '2022', title: 'AI Division Launch', desc: 'Launched dedicated AI & ML division. First enterprise AI agent platform deployed for a Tier-1 bank.' },
  { year: '2023', title: 'Infrastructure Products', desc: 'Launched pre-built platform products: Neo Banking, Forex Infrastructure, Tokenization Platform.' },
  { year: '2024', title: 'Billion-Dollar Impact', desc: 'Reached $2.4B+ in infrastructure under management. 500+ projects. 50+ countries.' },
  { year: '2025', title: 'Next Frontier', desc: 'Expanding into RWA, Central Bank Digital Currencies (CBDCs), and institutional AI ecosystems.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] bg-[#006FEE] opacity-[0.07] -left-40 top-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">About Shivacha</div>
            <h1 className="h1 text-slate-900 mb-6">
              Building the Infrastructure
              <br /><span className="gt-blue">of the Digital Economy</span>
            </h1>
            <p className="lead max-w-2xl mb-8">
              Shivacha Technologies is not a software agency. We are a global enterprise
              infrastructure company that builds, owns, and operates the critical technology
              platforms powering the next generation of digital businesses.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact#consultation" className="btn btn-primary">
                Partner with Us <ArrowRight size={14} />
              </Link>
              <Link href="/portfolio" className="btn btn-secondary">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-sm bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card rounded-3xl p-8 border border-slate-200">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-500 leading-relaxed">
                To democratize access to institutional-grade financial and technology infrastructure —
                enabling enterprises, startups, brokers, and institutions in every country to
                build, launch, and scale digital businesses with the same infrastructure
                previously available only to the world&apos;s largest corporations.
              </p>
            </div>
            <div className="card rounded-3xl p-8 border border-slate-200">
              <div className="text-4xl mb-4">🔭</div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-500 leading-relaxed">
                To become the definitive global infrastructure layer for the digital economy —
                where every blockchain, AI, fintech, and trading platform built on Shivacha
                infrastructure operates at the highest standards of security, scalability,
                and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { v: '8+', l: 'Years Operating', i: '🏆' },
              { v: '200+', l: 'Expert Engineers', i: '👨‍💻' },
              { v: '500+', l: 'Projects Delivered', i: '🚀' },
              { v: '50+', l: 'Countries Served', i: '🌍' },
            ].map(s => (
              <div key={s.l} className="card rounded-2xl p-6 text-center border border-slate-200">
                <div className="text-3xl mb-3">{s.i}</div>
                <div className="text-3xl font-black gt-blue mb-1">{s.v}</div>
                <div className="text-[13px] text-slate-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Our Journey</div>
            <h2 className="h2 text-slate-900">8 Years of <span className="gt-blue">Innovation</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`timeline-item mb-8 ${i === MILESTONES.length - 1 ? 'pb-0 last' : ''}`}>
                <div className="timeline-dot" />
                <div className="card rounded-2xl p-5 border border-slate-200 ml-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="badge badge-blue text-[11px]">{m.year}</span>
                    <h3 className="text-[15px] font-bold text-slate-900">{m.title}</h3>
                  </div>
                  <p className="text-[13px] text-slate-500">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Leadership</div>
            <h2 className="h2 text-slate-900">The Team Behind <span className="gt-blue">Shivacha</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="card rounded-2xl p-6 border border-slate-200 hover:border-slate-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#006FEE] to-[#00D4FF] flex items-center justify-center text-2xl font-black text-slate-900 mb-4">
                  {member.img}
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-0.5">{member.name}</h3>
                <p className="text-[13px] text-[#338EF7] mb-3">{member.role}</p>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{member.bio}</p>
                <a href={member.linkedin} className="text-[12px] text-slate-400 hover:text-[#338EF7] transition-colors">
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
