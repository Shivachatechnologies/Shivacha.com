import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise Blockchain Cloud & VPS | Purpose-Built Infrastructure for Web3',
  description: 'Blockchain-optimized VPS, node-as-a-service for 20+ chains, DDoS protection, 99.99% SLA. Global PoPs in USA, UK, India, Singapore, UAE. 10Gbps connectivity for Web3 infrastructure.',
};

const FEATURES = [
  {
    icon: '⚡',
    title: 'Blockchain-Optimized VPS',
    desc: 'NVMe SSD storage with high IOPS configurations purpose-built for blockchain node I/O patterns. High-clock-speed CPUs, large RAM options, and network-optimised routing for minimal uncle/miss rates.',
  },
  {
    icon: '🔗',
    title: 'Node-as-a-Service (20+ Chains)',
    desc: 'Managed full nodes for Ethereum, Solana, BNB Chain, Polygon, Avalanche, Arbitrum, Optimism, Base, Tron, and 10+ more. Synced, maintained, and upgraded by our team — you just connect.',
  },
  {
    icon: '🛡️',
    title: 'DDoS Protection (Cloudflare Enterprise)',
    desc: 'Cloudflare Enterprise-grade DDoS mitigation with unlimited bandwidth scrubbing, BGP anycast routing, and Layer 3/4/7 protection — keeping your nodes and APIs online under attack.',
  },
  {
    icon: '✅',
    title: '99.99% Uptime SLA',
    desc: 'Financially-backed 99.99% uptime SLA with prorated credits for any downtime. Redundant power (N+1 UPS + generators), dual network uplinks, and multi-zone failover at every PoP.',
  },
  {
    icon: '🖥️',
    title: 'Bare Metal + Virtual Options',
    desc: 'Choose dedicated bare metal for maximum isolation and raw performance, or virtual instances for cost-efficiency and rapid scaling. Both available with NVMe, 10Gbps uplinks, and full root access.',
  },
  {
    icon: '🌍',
    title: 'Global PoPs (5 Regions)',
    desc: 'Data centres in USA (Ashburn, VA), UK (London), India (Mumbai), Singapore, and UAE (Dubai) — with private cross-PoP networking for low-latency multi-region deployments.',
  },
  {
    icon: '📈',
    title: 'Auto-Scaling',
    desc: 'Horizontal and vertical auto-scaling for API nodes and indexers. Scale out validator clusters during high-demand periods and scale in during off-peak to optimise cost.',
  },
  {
    icon: '🔒',
    title: 'Dedicated IPs & Private Networks',
    desc: 'Dedicated IPv4 and IPv6 addresses per instance. Private VLAN networks between your servers at zero egress cost — ideal for peer-to-peer node clusters and internal API meshes.',
  },
];

const SPECS = [
  { label: 'Storage', value: 'NVMe SSD RAID — up to 100K+ IOPS per node, 32TB raw available' },
  { label: 'CPU', value: 'AMD EPYC / Intel Xeon — dedicated cores, no noisy-neighbour impact' },
  { label: 'RAM', value: 'Up to 512GB ECC RAM per instance; large-memory plans for archive nodes' },
  { label: 'Network', value: '10Gbps uplink per server; 100Gbps backbone between PoPs' },
  { label: 'DDoS', value: 'Cloudflare Enterprise — L3/4/7 scrubbing, always-on, no cap' },
  { label: 'Uptime SLA', value: '99.99% SLA with financial credits, monitored 24/7 by our NOC' },
  { label: 'Support', value: '24/7 NOC + dedicated Slack channel for enterprise accounts' },
  { label: 'Billing', value: 'Monthly, annual (20% discount), and on-demand burst available' },
];

const METRICS = [
  { v: '20+', l: 'Chain Nodes Available' },
  { v: '5', l: 'Global Regions' },
  { v: '99.99%', l: 'Uptime SLA' },
  { v: '10Gbps', l: 'Connectivity' },
];

const COLOR = '#14B8A6';

export default function CloudProductPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] opacity-[0.07] -left-40 -top-20" style={{ background: COLOR }} />
        <div className="orb w-[350px] h-[350px] opacity-[0.04] right-0 bottom-0" style={{ background: COLOR }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge" style={{ background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}40` }}>Web3 Cloud</span>
              </div>
              <div className="section-label mb-4">Enterprise Blockchain Cloud & VPS</div>
              <h1 className="h1 text-[#F0F6FF] mb-6">
                Purpose-Built Cloud
                <br /><span style={{ color: COLOR }}>Infrastructure for Web3</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                Blockchain-optimized VPS and node-as-a-service for the most demanding Web3
                infrastructure — high-IOPS NVMe SSD, DDoS protection, 99.99% SLA, and
                global PoPs across 5 regions.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get a Quote <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="btn btn-secondary">View Plans</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map(m => (
                  <div key={m.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: COLOR }}>{m.v}</p>
                    <p className="text-[11px] text-[rgba(240,246,255,0.35)] mt-1">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard visual */}
            <div className="hidden lg:block">
              <div className="dashboard-preview rounded-2xl relative">
                <div className="scan-line" />
                <div className="dashboard-bar">
                  <span className="db-dot bg-red-500" />
                  <span className="db-dot bg-yellow-400" />
                  <span className="db-dot bg-green-400" />
                  <span className="ml-3 text-[11px] text-[rgba(240,246,255,0.35)]">cloud.shivacha.com — Node Console</span>
                </div>
                <div className="p-5 space-y-3">
                  {/* Node status list */}
                  <div className="space-y-1.5">
                    {[
                      ['Ethereum', 'Full Node', 'Synced', 'Singapore'],
                      ['Solana', 'RPC Node', 'Synced', 'USA'],
                      ['BNB Chain', 'Full Node', 'Synced', 'India'],
                      ['Polygon', 'Archive', 'Synced', 'UK'],
                    ].map(([chain, type, status, region]) => (
                      <div key={String(chain)} className="flex items-center gap-2 glass rounded-lg px-3 py-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                        <span className="text-[11px] font-semibold text-[#F0F6FF] w-24">{chain}</span>
                        <span className="text-[10px] text-[rgba(240,246,255,0.35)] flex-1">{type}</span>
                        <span className="text-[10px] text-green-400">{status}</span>
                        <span className="text-[10px] text-[rgba(240,246,255,0.35)]">{region}</span>
                      </div>
                    ))}
                  </div>
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {[['CPU Usage', '24%'],['RAM Used', '68%'],['IOPS', '42K/s']].map(([l, v]) => (
                      <div key={l} className="metric-card">
                        <p className="text-[10px] text-[rgba(240,246,255,0.35)]">{l}</p>
                        <p className="text-[13px] font-bold" style={{ color: COLOR }}>{v}</p>
                      </div>
                    ))}
                  </div>
                  {/* Uptime strip */}
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-2">90-Day Uptime</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 90 }, (_, i) => (
                        <div key={i} className="flex-1 h-4 rounded-sm" style={{ background: i % 30 === 14 ? '#EF4444' : `${COLOR}CC` }} />
                      ))}
                    </div>
                    <p className="text-[10px] font-bold mt-1" style={{ color: COLOR }}>99.97% uptime — last 90 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Infrastructure Capabilities</div>
            <h2 className="h2 text-[#F0F6FF] mb-4">Every Layer Your <span style={{ color: COLOR }}>Web3 Stack Needs</span></h2>
            <p className="lead">From bare-metal servers to fully managed node clusters — infrastructure designed around blockchain workloads.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-white/[0.06] hover:border-[#14B8A6]/30 transition-colors group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-[15px] font-bold text-[#F0F6FF] mb-2 group-hover:text-[#5EEAD4] transition-colors">{f.title}</h3>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH SPECS ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">Technical Specifications</div>
              <h2 className="h2 text-[#F0F6FF] mb-6">Hardware Built for <span style={{ color: COLOR }}>Blockchain Workloads</span></h2>
              <p className="lead mb-8">Standard VPS hardware is optimised for web workloads. Our infrastructure is tuned for the read-heavy, write-intensive I/O patterns of blockchain nodes.</p>
              <div className="space-y-2">
                {SPECS.map(s => (
                  <div key={s.label} className="flex items-start gap-4 p-4 glass rounded-xl border border-white/[0.06]">
                    <span className="text-[12px] font-bold text-[rgba(240,246,255,0.35)] uppercase tracking-wider w-24 flex-shrink-0 pt-0.5">{s.label}</span>
                    <span className="text-[13px] text-[rgba(240,246,255,0.40)]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label mb-4">Node-as-a-Service</div>
              <h3 className="h3 text-[#F0F6FF] mb-6">20+ Chains, Fully Managed</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Ethereum','Solana','BNB Chain','Polygon','Avalanche','Arbitrum','Optimism','Base','Tron','TON','Fantom','Cronos','Celo','Gnosis','Moonbeam','zkSync','StarkNet','Hedera','Aptos','Sui'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-white/[0.06]">
                <p className="text-[12px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-4">Global Data Centre Locations</p>
                <div className="space-y-3">
                  {[
                    ['🇺🇸 USA', 'Ashburn, Virginia — Equinix DC10/11'],
                    ['🇬🇧 UK', 'London — Equinix LD8 / Telehouse North'],
                    ['🇮🇳 India', 'Mumbai — Ctrl S / Nxtra Tier IV'],
                    ['🇸🇬 Singapore', 'Singapore — Equinix SG3 / Digital Realty'],
                    ['🇦🇪 UAE', 'Dubai — Khazna DC1 / du Datamena'],
                  ].map(([region, address]) => (
                    <div key={String(region)} className="flex items-start gap-3">
                      <CheckCircle size={14} style={{ color: COLOR }} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[13px] font-semibold text-[#F0F6FF]">{region}</span>
                        <span className="text-[12px] text-[rgba(240,246,255,0.35)]"> — {address}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Who Uses It</div>
            <h2 className="h2 text-[#F0F6FF] mb-4">Built for <span style={{ color: COLOR }}>Every Web3 Workload</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { icon: '🔗', title: 'Validators & Stakers', desc: 'High-uptime, low-latency bare metal for validator nodes on Ethereum, Solana, Cosmos, and more — with DDoS protection included.' },
              { icon: '📡', title: 'RPC Providers', desc: 'High-throughput RPC clusters for Web3 apps. 10Gbps uplinks, NVMe storage, and auto-scaling to handle traffic spikes without degradation.' },
              { icon: '🗃️', title: 'Indexers & Subgraphs', desc: 'Archive nodes and indexing infrastructure for The Graph, Goldsky, and custom indexers — with massive NVMe storage for blockchain history.' },
              { icon: '🏗️', title: 'DApp Infrastructure', desc: 'Dedicated infrastructure for production dApps — frontend, backend, and node — all on the same private network for minimal inter-component latency.' },
            ].map(u => (
              <div key={u.title} className="card rounded-2xl p-6 border border-white/[0.06] hover:border-[#14B8A6]/30 transition-colors">
                <div className="text-3xl mb-4">{u.icon}</div>
                <h3 className="text-[15px] font-bold text-[#F0F6FF] mb-2">{u.title}</h3>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
