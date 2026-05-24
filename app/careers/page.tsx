import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers at Shivacha Technologies | Join Our Global Team',
  description: 'Join Shivacha Technologies — work on enterprise blockchain, AI, and fintech infrastructure with 200+ engineers across USA, India, and UK.',
};

const JOBS = [
  { title: 'Senior Blockchain Engineer (Ethereum/Solidity)', dept: 'Engineering', location: 'Remote / India / USA', type: 'Full-time', level: 'Senior', salary: '$80K–$140K', href: '/careers/senior-blockchain-engineer' },
  { title: 'AI/ML Engineer — LLM & Agent Systems', dept: 'AI Research', location: 'Remote / India', type: 'Full-time', level: 'Senior', salary: '$70K–$120K', href: '/careers/ai-ml-engineer' },
  { title: 'Full-Stack Web3 Developer (Next.js + Solidity)', dept: 'Engineering', location: 'Remote', type: 'Full-time', level: 'Mid–Senior', salary: '$60K–$100K', href: '/careers/fullstack-web3' },
  { title: 'DeFi Protocol Engineer', dept: 'Engineering', location: 'Remote / USA', type: 'Full-time', level: 'Senior', salary: '$90K–$160K', href: '/careers/defi-protocol-engineer' },
  { title: 'Smart Contract Security Auditor', dept: 'Security', location: 'Remote', type: 'Full-time', level: 'Senior', salary: '$80K–$150K', href: '/careers/smart-contract-auditor' },
  { title: 'Enterprise Sales Manager — Americas', dept: 'Sales', location: 'USA (San Francisco)', type: 'Full-time', level: 'Senior', salary: '$100K–$160K + Commission', href: '/careers/sales-manager-us' },
  { title: 'Product Manager — Fintech Platforms', dept: 'Product', location: 'Gurgaon / Remote', type: 'Full-time', level: 'Senior', salary: '₹25L–₹50L', href: '/careers/pm-fintech' },
  { title: 'DevOps/Blockchain Infrastructure Engineer', dept: 'Infrastructure', location: 'Remote', type: 'Full-time', level: 'Mid–Senior', salary: '$60K–$100K', href: '/careers/devops-blockchain' },
];

const PERKS = [
  { icon: '🌍', title: 'Remote-First', desc: 'Work from anywhere. Offices in USA, India, UK for those who prefer in-person.' },
  { icon: '📈', title: 'ESOP Program', desc: 'Meaningful equity ownership for all senior team members.' },
  { icon: '🧠', title: 'Learning Budget', desc: '$2,000 annual learning budget + conference attendance fully covered.' },
  { icon: '🏥', title: 'Health Coverage', desc: 'Comprehensive health, dental, and vision insurance for you and family.' },
  { icon: '⚡', title: 'Latest Tech', desc: 'M3 MacBook Pro, premium development tools, and hardware budget.' },
  { icon: '🎯', title: 'Impact at Scale', desc: 'Your code runs infrastructure managing billions in value globally.' },
];

export default function CareersPage() {
  return (
    <div className="bg-[#000008]">
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-96 h-96 bg-[#0099E6] opacity-[0.06] -left-20 top-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Join the Team</div>
            <h1 className="h1 text-white mb-6">Build the Future of<br /><span className="gt-blue">Enterprise Infrastructure</span></h1>
            <p className="lead max-w-xl mb-8">
              Join 200+ engineers, researchers, and builders working on the most critical
              blockchain, AI, and fintech infrastructure used by enterprises worldwide.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#openings" className="btn btn-primary">View Open Roles <ArrowRight size={14} /></a>
              <a href="mailto:careers@shivacha.com" className="btn btn-secondary">careers@shivacha.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-sm bg-[#020B18] border-y border-[#0E1E34]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Why Engineers Love <span className="gt-blue">Shivacha</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {PERKS.map((p) => (
              <div key={p.title} className="card rounded-2xl p-5 border border-[#0E1E34]">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-[15px] font-bold text-white mb-1">{p.title}</h3>
                <p className="text-[13px] text-[#7A8FA6]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="section bg-[#000008]" id="openings">
        <div className="container">
          <div className="mb-10">
            <h2 className="h2 text-white mb-2">Open <span className="gt-blue">Positions</span></h2>
            <p className="text-[#7A8FA6]">{JOBS.length} openings across engineering, product, sales, and research</p>
          </div>
          <div className="space-y-4">
            {JOBS.map((job) => (
              <div key={job.href}
                className="card rounded-2xl p-5 border border-[#0E1E34] hover:border-[#1E3A5A] group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="badge badge-blue text-[11px]">{job.dept}</span>
                    <span className="badge text-[11px] bg-[#0E1E34] border-[#1E3A5A] text-[#3D5470]">{job.level}</span>
                  </div>
                  <h3 className="text-[15px] font-bold text-white group-hover:text-[#33B5E5] transition-colors mb-1">{job.title}</h3>
                  <div className="flex items-center gap-4 text-[12px] text-[#3D5470]">
                    <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{job.type}</span>
                    <span className="flex items-center gap-1"><DollarSign size={11} />{job.salary}</span>
                  </div>
                </div>
                <Link href={job.href} className="btn btn-secondary flex-shrink-0 text-sm py-2.5 px-5">
                  Apply Now <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 glass rounded-2xl p-6 border border-[#0E1E34] text-center">
            <p className="text-[15px] text-white font-medium mb-1">Don&apos;t see your role?</p>
            <p className="text-[#7A8FA6] text-[13px] mb-4">We&apos;re always looking for exceptional talent. Send us your profile.</p>
            <a href="mailto:careers@shivacha.com" className="btn btn-primary">
              Send Open Application <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
