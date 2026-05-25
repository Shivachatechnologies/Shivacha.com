import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'DevOps & Cloud Infrastructure | Kubernetes, Terraform, CI/CD — Shivacha Technologies',
  description: 'Shivacha Technologies delivers enterprise DevOps & cloud infrastructure — multi-cloud architecture (AWS/GCP/Azure), Kubernetes, CI/CD pipelines, blockchain node deployment, IaC, and observability.',
};

const OFFERINGS = [
  { icon: '☁️', title: 'Multi-Cloud Architecture', desc: 'Design and implement resilient multi-cloud architectures across AWS, GCP, and Azure. Workload isolation, cost optimization, and cloud-agnostic design patterns.' },
  { icon: '⎈', title: 'Kubernetes Clusters', desc: 'Production-grade K8s clusters with autoscaling, RBAC, service mesh (Istio/Linkerd), persistent storage, and multi-region failover configurations.' },
  { icon: '🔄', title: 'CI/CD Pipelines', desc: 'End-to-end pipelines with GitHub Actions, GitLab CI, and ArgoCD. Automated testing gates, container scanning, semantic versioning, and zero-downtime deploys.' },
  { icon: '🔗', title: 'Blockchain Node Deployment', desc: 'Enterprise-grade validator and archival node deployment for Ethereum, Solana, Cosmos, and custom chains. MEV-aware configurations, slashing protection, and monitoring.' },
  { icon: '🏗️', title: 'Infrastructure as Code', desc: 'Full Terraform + Helm codebases for your entire infrastructure. Modular, versioned, and drift-detected — your infrastructure is reproducible from a git repo.' },
  { icon: '📊', title: 'Monitoring & Observability', desc: 'Prometheus metrics, Grafana dashboards, Loki log aggregation, distributed tracing (Jaeger/Tempo), and PagerDuty alerting for every layer of your stack.' },
];

const TECH = [
  { name: 'Kubernetes', cat: 'Orchestration' }, { name: 'Docker', cat: 'Containers' },
  { name: 'Terraform', cat: 'IaC' }, { name: 'Helm', cat: 'K8s Packaging' },
  { name: 'ArgoCD', cat: 'GitOps' }, { name: 'Prometheus', cat: 'Metrics' },
  { name: 'Grafana', cat: 'Dashboards' }, { name: 'GitHub Actions', cat: 'CI/CD' },
  { name: 'AWS', cat: 'Cloud' }, { name: 'GCP', cat: 'Cloud' },
  { name: 'Azure', cat: 'Cloud' }, { name: 'Istio', cat: 'Service Mesh' },
];

const USE_CASES = [
  { title: 'Blockchain Node Infrastructure', detail: 'Validator nodes, archival nodes, RPC endpoints — redundant, monitored, auto-recovering' },
  { title: 'DeFi Protocol Deployments', detail: 'Blue-green deployments, canary releases, gas-aware deployment automation' },
  { title: 'Crypto Exchange Infrastructure', detail: 'Low-latency matching engine hosting, WebSocket scaling, and 99.99% uptime SLAs' },
  { title: 'Banking Backends', detail: 'PCI-DSS compliant infrastructure, network segmentation, secrets management (Vault)' },
  { title: 'High-Frequency Trading Systems', detail: 'Co-location strategies, kernel-bypass networking, sub-millisecond p99 latency tuning' },
  { title: 'Multi-Region Disaster Recovery', detail: 'RTO < 5 min, RPO < 1 min, automated failover, chaos engineering validation' },
];

const PROCESS = [
  { step: '01', title: 'Discovery & Audit', desc: 'We inventory your current infrastructure, identify bottlenecks, security gaps, cost inefficiencies, and single points of failure.' },
  { step: '02', title: 'Architecture Design', desc: 'We produce a target-state architecture diagram, tech decisions document, migration plan, and cost projection before any work begins.' },
  { step: '03', title: 'IaC Implementation', desc: 'All infrastructure is written as Terraform modules and Helm charts, reviewed via pull requests, and applied through GitOps pipelines.' },
  { step: '04', title: 'CI/CD & Testing', desc: 'Automated pipelines with unit tests, integration tests, security scans, and staged promotion gates (dev → staging → production).' },
  { step: '05', title: 'Observability & Handoff', desc: 'Prometheus alerting rules, Grafana dashboards, runbooks, and team training — you own your infrastructure end to end.' },
];

const CHECKLIST = [
  'Multi-cloud or single-cloud architecture design (AWS / GCP / Azure)',
  'Production Kubernetes cluster with autoscaling and RBAC',
  'Full CI/CD pipeline with automated test gates and security scanning',
  'Infrastructure as Code (Terraform + Helm) with full git history',
  'GitOps delivery via ArgoCD with automated drift reconciliation',
  'Prometheus + Grafana observability stack with on-call alerting',
  'Secrets management via HashiCorp Vault or AWS Secrets Manager',
  'Network security: VPC design, private subnets, WAF, DDoS protection',
  'Disaster recovery runbooks with tested RTO/RPO targets',
  '30-day knowledge-transfer and on-call support handoff',
];

const FAQS = [
  {
    q: 'Do you work with our existing cloud provider, or do we need to migrate?',
    a: 'We meet you where you are. We can optimize and harden your existing AWS, GCP, or Azure setup, or design a net-new multi-cloud architecture. Migration is scoped separately and executed with zero downtime whenever possible.',
  },
  {
    q: 'How do you handle blockchain node uptime requirements?',
    a: 'Validator and archival nodes run in multi-AZ Kubernetes StatefulSets with dedicated persistent volumes, automatic peer discovery, and synthetic monitoring that pages on-call within 30 seconds of a missed attestation or RPC timeout.',
  },
  {
    q: 'What is your approach to Kubernetes security?',
    a: 'We enforce Pod Security Standards, OPA/Kyverno policy gates, network policies, image signing (Cosign), supply-chain verification (SLSA), and regular CIS Benchmark compliance scans. All workloads run as non-root with read-only filesystems where possible.',
  },
  {
    q: 'Can you achieve 99.99% uptime for a crypto exchange?',
    a: 'Yes — we have done it. The key ingredients are multi-region active-active topology, chaos engineering drills (we use Chaos Monkey and Litmus), sub-5-minute automated failover, and weekly game-day exercises with your ops team.',
  },
];

const STATS = [
  { v: '500+', l: 'Deployments Delivered' },
  { v: '99.99%', l: 'Uptime Achieved' },
  { v: 'AWS · GCP · Azure', l: 'Certified Cloud Platforms' },
  { v: '8+', l: 'Years DevOps Experience' },
];

export default function DevOpsPage() {
  return (
    <div className="bg-[#000008]">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[560px] h-[560px] bg-[#14B8A6] opacity-[0.05] -right-32 top-0" />
        <div className="orb w-[320px] h-[320px] bg-[#33B5E5] opacity-[0.04] left-0 bottom-0" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">DevOps & Cloud Infrastructure</div>
              <h1 className="h1 text-white mb-6">
                Cloud Infrastructure<br />
                <span className="gt-blue">Built for Zero Downtime</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We architect and operate enterprise cloud infrastructure — Kubernetes, multi-cloud,
                CI/CD, blockchain node deployment, and full observability stacks. 500+ deployments,
                99.99% uptime track record.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Infrastructure Audit <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View DevOps Projects</Link>
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

            {/* Hero visual — infrastructure status dashboard */}
            <div className="hidden lg:block">
              <div className="glass rounded-3xl p-6 border border-[#0E1E34] relative overflow-hidden">
                <p className="text-[11px] text-[#3D5470] uppercase tracking-wider mb-4">Cluster Overview — Production</p>
                <div className="space-y-2 mb-4">
                  {[
                    { label: 'K8s Nodes (3/3 healthy)', pct: 100, color: '#14B8A6' },
                    { label: 'Pod CPU Utilization', pct: 62, color: '#33B5E5' },
                    { label: 'Pod Memory Utilization', pct: 47, color: '#A78BFA' },
                    { label: 'Uptime (30-day)', pct: 99.99, color: '#34D399' },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[11px] text-[#7A8FA6]">{m.label}</span>
                        <span className="text-[11px] font-bold" style={{ color: m.color }}>{m.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[#0E1E34] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${Math.min(m.pct, 100)}%`, background: m.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { service: 'ArgoCD', status: 'Synced' },
                    { service: 'Prometheus', status: 'Active' },
                    { service: 'Vault', status: 'Unsealed' },
                  ].map((svc) => (
                    <div key={svc.service} className="p-2.5 rounded-lg bg-[#060E1C] border border-[#0E1E34] text-center">
                      <p className="text-[11px] text-white font-semibold">{svc.service}</p>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
                        <span className="text-[10px] text-[#34D399]">{svc.status}</span>
                      </div>
                    </div>
                  ))}
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
            <h2 className="h2 text-white">DevOps & Cloud <span className="gt-blue">Capabilities</span></h2>
            <p className="lead mt-4">Infrastructure that scales, self-heals, and observes itself — from blockchain nodes to banking backends.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map((s) => (
              <div key={s.title} className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#14B8A6]/30 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-[16px] font-bold text-white mb-2 group-hover:text-[#14B8A6] transition-colors">{s.title}</h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section-sm bg-[#000008]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Tools & <span className="gt-blue">Technologies</span></h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {TECH.map((t) => (
              <span key={t.name} className="tech-pill">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="text-[#3D5470]"> · {t.cat}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Use Cases</div>
            <h2 className="h2 text-white">Infrastructure We&apos;ve <span className="gt-blue">Delivered</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((u) => (
              <div key={u.title} className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#14B8A6]/30">
                <h3 className="text-[16px] font-bold text-white mb-2">{u.title}</h3>
                <p className="text-[13px] text-[#7A8FA6]">{u.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section bg-[#000008]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">How We Work</div>
            <h2 className="h2 text-white">Our DevOps <span className="gt-blue">Process</span></h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="card rounded-2xl p-5 border border-[#0E1E34] hover:border-[#14B8A6]/30">
                <div className="text-[11px] font-black text-[#14B8A6] tracking-widest mb-2">{p.step}</div>
                <h3 className="text-[14px] font-bold text-white mb-2">{p.title}</h3>
                <p className="text-[12px] text-[#7A8FA6] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Deliverables</div>
              <h2 className="h2 text-white mb-4">What&apos;s <span className="gt-blue">Included</span></h2>
              <p className="lead mb-8">Every DevOps engagement delivers a fully documented, IaC-managed infrastructure — not a black box.</p>
              <div className="grid gap-3">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#14B8A6] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-[#7A8FA6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8 border border-[#0E1E34]">
              <h3 className="h4 text-white mb-6">Start Your Infrastructure Project</h3>
              <div className="space-y-4 mb-6">
                {[
                  { label: 'Cloud Provider', value: 'AWS / GCP / Azure / Multi-cloud' },
                  { label: 'Container Platform', value: 'Kubernetes / ECS / GKE / AKS' },
                  { label: 'IaC Language', value: 'Terraform + Helm' },
                  { label: 'Timeline', value: '4–10 weeks typical' },
                ].map((f) => (
                  <div key={f.label} className="flex items-center justify-between border-b border-[#0E1E34] pb-3">
                    <span className="text-[13px] text-[#3D5470]">{f.label}</span>
                    <span className="text-[13px] font-semibold text-white">{f.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact#consultation" className="btn btn-primary w-full justify-center">
                Book Free Infrastructure Audit <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-[#000008]">
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
