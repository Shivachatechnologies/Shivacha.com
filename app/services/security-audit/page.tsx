import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Security Audits & Penetration Testing | Smart Contract Audits — Shivacha Technologies',
  description: 'Shivacha Technologies — leading smart contract security audit and penetration testing firm. Manual + automated audits, $4B+ value secured, zero post-audit exploits. CISSP, CEH, OSCP certified.',
};

const OFFERINGS = [
  { icon: '🔍', title: 'Smart Contract Security Audits', desc: 'Manual line-by-line review combined with Slither, MythX, and Echidna fuzzing. We identify reentrancy, flash loan, oracle manipulation, and access control vulnerabilities.' },
  { icon: '💥', title: 'Penetration Testing', desc: 'Black-box and grey-box penetration testing for web apps, APIs, mobile apps, and network infrastructure. OWASP Top 10, business logic flaws, and chained exploits.' },
  { icon: '🗺️', title: 'Threat Modeling', desc: 'STRIDE and PASTA threat modeling workshops. We map your attack surface, prioritize threat actors, and produce a mitigation backlog before a line of code is reviewed.' },
  { icon: '📋', title: 'Compliance Reviews', desc: 'Gap analysis and evidence collection for SOC 2 Type II, ISO 27001, and PCI-DSS. We prepare you for certification audits and produce a full compliance roadmap.' },
  { icon: '🏆', title: 'Bug Bounty Program Setup', desc: 'End-to-end bug bounty program design — scope definition, severity matrix, payout tiers, triage SLAs, and integration with Immunefi, HackerOne, or a private program.' },
  { icon: '🛡️', title: 'Ongoing Security Monitoring', desc: 'Continuous on-chain monitoring for your deployed contracts (forta-compatible detectors), runtime application self-protection (RASP), and SIEM integration.' },
];

const TOOLS = [
  { name: 'Slither', cat: 'Static Analysis' }, { name: 'MythX', cat: 'Symbolic Exec' },
  { name: 'Echidna', cat: 'Fuzzing' }, { name: 'Foundry Fuzz', cat: 'Property Testing' },
  { name: 'Certora', cat: 'Formal Verification' }, { name: 'Burp Suite Pro', cat: 'Web App Testing' },
  { name: 'OWASP ZAP', cat: 'DAST' }, { name: 'Nessus', cat: 'Vulnerability Scan' },
  { name: 'Semgrep', cat: 'SAST' }, { name: 'Trivy', cat: 'Container Scanning' },
  { name: 'Metasploit', cat: 'Exploitation' }, { name: 'Nuclei', cat: 'Template Scanning' },
];

const CERTS = [
  { name: 'ISO 27001', desc: 'Information Security Management' },
  { name: 'SOC 2', desc: 'Trust Services Criteria' },
  { name: 'CISSP', desc: 'Certified Information Systems Security Professional' },
  { name: 'CEH', desc: 'Certified Ethical Hacker' },
  { name: 'OSCP', desc: 'Offensive Security Certified Professional' },
];

const USE_CASES = [
  { title: 'Pre-Launch Smart Contract Audits', detail: 'Full audit before mainnet deployment — ERC-20, ERC-721, ERC-1155, custom protocols' },
  { title: 'DeFi Protocol Security', detail: 'AMM, lending, yield, bridge, and derivative protocol deep-dive audits' },
  { title: 'Exchange Security', detail: 'Centralized exchange infrastructure pentests — hot wallet, cold storage, admin APIs' },
  { title: 'Banking App Pentesting', detail: 'Core banking APIs, mobile app security, open banking (PSD2), and OAuth flows' },
  { title: 'API Security', detail: 'REST and GraphQL API security — BOLA, injection, auth bypasses, rate limiting' },
  { title: 'Compliance Audits', detail: 'SOC 2, ISO 27001, PCI-DSS readiness assessment and evidence-pack preparation' },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Scope definition, threat actor profiling, and collection of documentation, ABIs, source code, and architecture diagrams.' },
  { step: '02', title: 'Analysis', desc: 'Automated scanning with Slither, MythX, and Echidna followed by manual review of every function, modifier, and state transition.' },
  { step: '03', title: 'Testing', desc: 'Exploit development for confirmed findings. We write proof-of-concept code that demonstrates real impact — no theoretical-only findings.' },
  { step: '04', title: 'Reporting', desc: 'Detailed report: executive summary, per-finding risk ratings (Critical/High/Medium/Low/Info), PoC code, and remediation guidance.' },
  { step: '05', title: 'Remediation', desc: 'One free re-audit of all resolved findings. We verify fixes, update the report, and issue a final public certificate of audit.' },
];

const CHECKLIST = [
  'Manual code review by minimum 2 senior security researchers',
  'Automated analysis: Slither, MythX, Echidna, Semgrep',
  'Proof-of-concept exploit code for every Critical/High finding',
  'Business logic and economic attack analysis (flash loans, MEV)',
  'Access control and privilege escalation review',
  'Detailed per-finding remediation guidance with code examples',
  'Free re-audit of all resolved findings included',
  'Public audit certificate and badge for your documentation',
  'Executive summary suitable for investors and board review',
  '90-day post-audit support for security questions',
];

const FAQS = [
  {
    q: 'How long does a smart contract audit take?',
    a: 'A standard DeFi protocol audit (2,000–5,000 lines of Solidity) typically takes 10–14 business days. Complex multi-contract systems with cross-chain bridges or custom AMM math may take 3–4 weeks. We provide a precise timeline estimate after reviewing your scope.',
  },
  {
    q: 'What is the difference between automated and manual auditing?',
    a: 'Automated tools (Slither, MythX, Echidna) find known vulnerability patterns quickly and are included in every engagement. Manual review by senior researchers catches business logic flaws, economic attacks, and protocol-specific vulnerabilities that no automated tool can detect — this is where the most critical findings come from.',
  },
  {
    q: 'Do you audit protocols on chains other than Ethereum?',
    a: 'Yes. We audit Solidity contracts on any EVM-compatible chain (Arbitrum, Optimism, Polygon, Avalanche, BNB Chain, Base) and Rust-based programs on Solana. For non-EVM chains, contact us with your specific chain and we will confirm toolchain availability.',
  },
  {
    q: 'Can you help after a security incident has already occurred?',
    a: 'Yes — incident response is a separate service we offer. This includes on-chain forensics, fund recovery coordination, attacker address tracing, post-mortem analysis, and hardened remediation to prevent recurrence. Contact us immediately for priority SLA.',
  },
];

const STATS = [
  { v: '300+', l: 'Security Audits Completed' },
  { v: '$4B+', l: 'Total Value Secured' },
  { v: 'Zero', l: 'Post-Audit Exploits' },
  { v: 'CISSP + CEH', l: 'Certified Team' },
];

export default function SecurityAuditPage() {
  return (
    <div className="bg-[#000008]">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[560px] h-[560px] bg-[#34D399] opacity-[0.04] -right-32 top-0" />
        <div className="orb w-[320px] h-[320px] bg-[#33B5E5] opacity-[0.04] left-0 bottom-0" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Security Audits & Pen Testing</div>
              <h1 className="h1 text-white mb-6">
                Smart Contract Audits &<br />
                <span className="gt-blue">Security That Holds</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We have secured over $4 billion in protocol value with zero post-audit exploits.
                Manual smart contract audits, penetration testing, threat modeling, and compliance
                reviews — delivered by a CISSP + CEH certified team.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Security Audit <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Audit Reports</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map((s) => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black gt-blue">{s.v}</p>
                    <p className="text-[11px] text-[#3D5470] leading-tight mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual — security findings dashboard */}
            <div className="hidden lg:block">
              <div className="glass rounded-3xl p-6 border border-[#0E1E34] relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[11px] text-[#3D5470] uppercase tracking-wider">Audit Report — Protocol XYZ</p>
                  <span className="badge badge-green text-[10px]">Final</span>
                </div>
                <div className="space-y-2 mb-5">
                  {[
                    { severity: 'Critical', count: 0, color: '#EF4444' },
                    { severity: 'High', count: 1, color: '#F97316' },
                    { severity: 'Medium', count: 3, color: '#FFB800' },
                    { severity: 'Low', count: 5, color: '#34D399' },
                    { severity: 'Informational', count: 8, color: '#7A8FA6' },
                  ].map((row) => (
                    <div key={row.severity} className="flex items-center gap-3 p-2.5 rounded-lg bg-[#060E1C] border border-[#0E1E34]">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: row.color }} />
                      <span className="text-[12px] text-[#7A8FA6] flex-1">{row.severity}</span>
                      <span className="text-[12px] font-bold" style={{ color: row.color }}>{row.count} {row.count === 1 ? 'finding' : 'findings'}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-xl bg-[#0A1F0A] border border-[#1A3A1A] flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#34D399] flex-shrink-0" />
                  <span className="text-[12px] text-[#34D399] font-semibold">All findings remediated — Certificate issued</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Services</div>
            <h2 className="h2 text-white">Security <span className="gt-blue">Capabilities</span></h2>
            <p className="lead mt-4">From pre-launch smart contract audits to ongoing threat monitoring — complete security coverage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map((s) => (
              <div key={s.title} className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#34D399]/30 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-[16px] font-bold text-white mb-2 group-hover:text-[#34D399] transition-colors">{s.title}</h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="section-sm bg-[#000008]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Security Tools & <span className="gt-blue">Frameworks</span></h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {TOOLS.map((t) => (
              <span key={t.name} className="tech-pill">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="text-[#3D5470]"> · {t.cat}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-label justify-center">Credentials</div>
            <h2 className="h3 text-white">Team <span className="gt-blue">Certifications</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {CERTS.map((c) => (
              <div key={c.name} className="card rounded-2xl p-5 text-center border border-[#0E1E34] hover:border-[#34D399]/30">
                <div className="w-10 h-10 rounded-xl bg-[#34D399]/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={18} className="text-[#34D399]" />
                </div>
                <p className="text-[14px] font-bold text-white mb-1">{c.name}</p>
                <p className="text-[11px] text-[#3D5470] leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="section bg-[#000008]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Use Cases</div>
            <h2 className="h2 text-white">Security Engagements <span className="gt-blue">We Deliver</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((u) => (
              <div key={u.title} className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#34D399]/30">
                <h3 className="text-[16px] font-bold text-white mb-2">{u.title}</h3>
                <p className="text-[13px] text-[#7A8FA6]">{u.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Methodology</div>
            <h2 className="h2 text-white">Our Audit <span className="gt-blue">Process</span></h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="card rounded-2xl p-5 border border-[#0E1E34] hover:border-[#34D399]/30">
                <div className="text-[11px] font-black text-[#34D399] tracking-widest mb-2">{p.step}</div>
                <h3 className="text-[14px] font-bold text-white mb-2">{p.title}</h3>
                <p className="text-[12px] text-[#7A8FA6] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section bg-[#000008]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Deliverables</div>
              <h2 className="h2 text-white mb-4">What&apos;s <span className="gt-blue">Included</span></h2>
              <p className="lead mb-8">Every security engagement delivers a comprehensive report — not a list of tool outputs.</p>
              <div className="grid gap-3">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#34D399] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-[#7A8FA6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8 border border-[#0E1E34]">
              <h3 className="h4 text-white mb-6">Request a Security Audit</h3>
              <div className="space-y-4 mb-6">
                {[
                  { label: 'Audit Type', value: 'Smart Contract / Pentest / Compliance' },
                  { label: 'Deliverable', value: 'Full Report + Certificate' },
                  { label: 'Re-audit', value: 'Free for all resolved findings' },
                  { label: 'Timeline', value: '10–21 business days typical' },
                ].map((f) => (
                  <div key={f.label} className="flex items-center justify-between border-b border-[#0E1E34] pb-3">
                    <span className="text-[13px] text-[#3D5470]">{f.label}</span>
                    <span className="text-[13px] font-semibold text-white">{f.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact#consultation" className="btn btn-primary w-full justify-center">
                Request Audit Proposal <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-[#020B18]">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="section-label justify-center">FAQ</div>
            <h2 className="h2 text-white">Common <span className="gt-blue">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card rounded-2xl p-6 border border-[#0E1E34]">
                <h3 className="text-[15px] font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
