import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Metaverse Development Company | 3D Virtual Worlds & Web3 Integration',
  description: 'Shivacha Technologies builds immersive metaverse platforms — 3D virtual worlds (Unity/Unreal), avatar systems, in-world economies, virtual real estate, and VR/AR integration. 25+ metaverse projects, 2M+ users.',
};

const OFFERINGS = [
  { icon: '🌍', title: '3D Virtual World Development', desc: 'Full 3D persistent virtual environments built in Unity or Unreal Engine 5 — with real-time multiplayer, physics, spatial audio, and cross-platform delivery (browser + native + VR headset).' },
  { icon: '🧑‍🚀', title: 'Avatar System & Customisation', desc: 'Generative avatar creation, NFT-backed avatar ownership, wearable item systems, cross-metaverse avatar portability (Ready Player Me, VRM), and avatar marketplace smart contracts.' },
  { icon: '💰', title: 'In-World Economy & NFTs', desc: 'Native metaverse tokens (ERC-20), in-world item NFTs (ERC-1155), virtual land ownership contracts, crafting and economy balance systems, and integrated DEX/swap interfaces.' },
  { icon: '🏘️', title: 'Virtual Real Estate', desc: 'Procedurally generated land parcel systems, ERC-721 land NFTs, zoning/building permissions, sub-leasing contracts, and a map-based land registry with ownership indexing.' },
  { icon: '🥽', title: 'VR & AR Integration', desc: 'WebXR-based browser VR, Meta Quest / PCVR native builds, AR overlays for physical-digital hybrid experiences, and spatial web anchors for AR content placement.' },
  { icon: '🖥️', title: 'Cross-Platform Deployment', desc: 'Single codebase delivery across browser (WebGL/WebXR), iOS, Android, Windows, and VR headsets (Quest, Valve Index). Cloud streaming for high-fidelity scenes on low-end devices.' },
];

const TECH = [
  { name: 'Unity 6', tag: 'Game Engine' },
  { name: 'Unreal Engine 5', tag: 'AAA Graphics' },
  { name: 'WebGL / WebXR', tag: 'Browser 3D/VR' },
  { name: 'Three.js / R3F', tag: 'Web 3D' },
  { name: 'Babylon.js', tag: 'Web 3D Engine' },
  { name: 'Photon / Mirror', tag: 'Multiplayer' },
  { name: 'Agora / Vivox', tag: 'Voice & Video' },
  { name: 'Ready Player Me', tag: 'Avatar SDK' },
  { name: 'Decentraland SDK', tag: 'Metaverse Standard' },
  { name: 'Spatial SDK', tag: 'Social Metaverse' },
  { name: 'Voxels / Somnium', tag: 'Virtual Worlds' },
  { name: 'Chainlink VRF', tag: 'Random Loot' },
];

const USE_CASES = [
  'Gaming Metaverse Worlds', 'Virtual Offices & Workspaces', 'Events & Concert Platforms',
  'Virtual Product Showrooms', 'Education & Training Sims', 'Social VR Spaces',
  'Virtual Fashion Week', 'Brand Activation Experiences', 'NFT Art Galleries',
  'Virtual Real Estate Markets', 'Sports & eSports Arenas', 'Digital Twin Environments',
];

const FAQS = [
  {
    q: 'What is the difference between Unity and Unreal Engine for metaverse development?',
    a: 'Unity is preferred for browser-based (WebGL) and mobile metaverses, rapid prototyping, and projects that need broad platform reach at lower hardware requirements. Unreal Engine 5 (with Nanite and Lumen) is chosen for graphically stunning, AAA-quality environments on PC and console. For most metaverse products we recommend Unity for the broadest user accessibility, and offer Unreal for premium flagship experiences. We are certified in both.',
  },
  {
    q: 'How do you integrate blockchain (NFTs, tokens) into a 3D virtual world?',
    a: 'We build a Web3 bridge layer — a backend service that connects the Unity/Unreal game client to wallet providers and smart contracts. Users connect their wallet in the browser launcher, and the game client fetches their owned NFTs (avatars, land, items) via an NFT indexer API. In-world transactions (buying items, trading land) are routed through a lightweight wallet modal without breaking the game experience. All asset metadata and images are stored on IPFS/Arweave.',
  },
  {
    q: 'Can users access your metaverse on a regular browser without VR hardware?',
    a: 'Yes — this is our default delivery target. We build metaverses that run in the browser via WebGL (and optionally WebXR for VR mode), meaning any user with a laptop or phone can access the world immediately without a download. VR headset support is layered on top. For graphically intensive scenes that cannot run in a browser, we offer cloud game streaming (Parsec/AWS GameLift Streams) to deliver high-fidelity experiences on any device.',
  },
  {
    q: 'How do you handle multiplayer and concurrent user scale in a metaverse?',
    a: 'We use a room-based server architecture (Photon Fusion or Netcode for GameObjects in Unity, custom servers for Unreal) with region-based sharding to distribute concurrent users across multiple server instances. For a social metaverse targeting 10,000+ concurrent users per zone, we implement zone streaming and level-of-detail (LOD) systems so only nearby avatars are rendered at full fidelity. Load testing is part of every pre-launch milestone.',
  },
];

const COMPARISON = [
  { feature: 'Rendering Engine', shivacha: 'Unity 6 + Unreal 5 certified', typical: 'Unity basic only' },
  { feature: 'Browser Delivery', shivacha: 'WebGL + WebXR + cloud stream', typical: 'Downloadable only' },
  { feature: 'Blockchain Layer', shivacha: 'NFT items, tokens, land contracts', typical: 'No Web3 layer' },
  { feature: 'Multiplayer Scale', shivacha: 'Sharded rooms, 10K+ concurrent', typical: '<100 users' },
  { feature: 'Avatar System', shivacha: 'NFT-backed + RPM + VRM', typical: 'Static presets' },
  { feature: 'VR Support', shivacha: 'WebXR + Quest + PCVR', typical: 'Not supported' },
];

export default function MetaverseDevelopmentPage() {
  return (
    <div className="bg-[#000008]">
      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] opacity-[0.07] -left-40 top-0" style={{ background: '#A855F7' }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Metaverse Development</div>
              <h1 className="h1 text-white mb-6">
                Metaverse Platform
                <br /><span style={{ color: '#A855F7' }}>Development Company</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We build immersive virtual worlds that blend 3D gaming engines with Web3 economies.
                25+ metaverse platforms shipped, 2M+ users across worlds we have built.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Metaverse Projects</Link>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { v: '25+', l: 'Metaverse Projects' },
                  { v: '2M+', l: 'Users Built For' },
                  { v: '8+', l: 'Years' },
                  { v: '✓ ✓', l: 'Unity & Unreal Certified' },
                ].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#A855F7' }}>{s.v}</p>
                    <p className="text-[11px] text-[#3D5470]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual — metaverse platform stack */}
            <div className="hidden lg:block">
              <div className="glass rounded-3xl p-7 border border-[#0E1E34] relative overflow-hidden">
                <div className="scan-line" />
                <p className="text-[12px] text-[#3D5470] uppercase tracking-wider mb-4">Metaverse Platform Architecture</p>
                <div className="space-y-3">
                  {[
                    { layer: 'Rendering Layer', sub: 'Unity 6 / Unreal 5 — WebGL + Native', badge: 'ENGINE' },
                    { layer: 'Multiplayer Networking', sub: 'Photon Fusion — sharded rooms', badge: 'NETWORK' },
                    { layer: 'Avatar & Identity', sub: 'NFT avatars, Ready Player Me SDK', badge: 'AVATAR' },
                    { layer: 'In-World Economy', sub: 'ERC-20 tokens + ERC-1155 items', badge: 'WEB3' },
                    { layer: 'Virtual Land Registry', sub: 'ERC-721 land NFTs + map indexer', badge: 'LAND' },
                    { layer: 'VR / AR Layer', sub: 'WebXR browser + Quest native', badge: 'XR' },
                  ].map(({ layer, sub, badge }) => (
                    <div key={layer} className="flex items-center gap-3 p-3 rounded-xl bg-[#060E1C] border border-[#0E1E34]">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                        style={{ background: '#A855F722', color: '#A855F7' }}>{badge}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-white">{layer}</p>
                        <p className="text-[10px] text-[#3D5470] truncate">{sub}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">What We Build</div>
            <h2 className="h2 text-white">Metaverse <span style={{ color: '#A855F7' }}>Development Services</span></h2>
            <p className="lead mt-4">Every component of a production metaverse — from 3D world to on-chain economy — engineered and integrated by one team.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#1E3A5A] group">
                <div className="text-4xl mb-4">{o.icon}</div>
                <h3 className="text-[16px] font-bold text-white mb-2">{o.title}</h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section bg-[#000008]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Metaverse <span style={{ color: '#A855F7' }}>Tech Stack</span></h2>
            <p className="text-[#7A8FA6] mt-2 max-w-lg mx-auto text-[14px]">Certified in the leading game engines plus every Web3 integration layer.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TECH.map((t) => (
              <div key={t.name} className="card rounded-xl p-3 border border-[#0E1E34] hover:border-[#A855F7]/40 text-center">
                <p className="text-[13px] font-bold text-white mb-1">{t.name}</p>
                <span className="badge badge-blue text-[10px]">{t.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-[#020B18]">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Shivacha vs <span style={{ color: '#A855F7' }}>Typical Metaverse Studio</span></h2>
          </div>
          <div className="card rounded-2xl border border-[#0E1E34] overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-[#0E1E34]">
                  <th className="text-left p-4 text-[#3D5470] font-semibold">Feature</th>
                  <th className="p-4 text-center font-bold" style={{ color: '#A855F7' }}>Shivacha</th>
                  <th className="p-4 text-center text-[#3D5470] font-semibold">Typical Studio</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#060E1C]' : ''}>
                    <td className="p-4 text-[#7A8FA6]">{row.feature}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#A855F7' }}>{row.shivacha}</td>
                    <td className="p-4 text-center text-[#3D5470]">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-[#000008]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Metaverse <span style={{ color: '#A855F7' }}>Use Cases</span> We've Shipped</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {USE_CASES.map((uc) => (
              <div key={uc} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060E1C] border border-[#0E1E34]">
                <CheckCircle size={14} style={{ color: '#A855F7' }} className="flex-shrink-0" />
                <span className="text-[13px] text-[#7A8FA6]">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#020B18]">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Frequently Asked <span style={{ color: '#A855F7' }}>Questions</span></h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card rounded-2xl p-6 border border-[#0E1E34]">
                <h4 className="text-[15px] font-bold text-white mb-3">{faq.q}</h4>
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
