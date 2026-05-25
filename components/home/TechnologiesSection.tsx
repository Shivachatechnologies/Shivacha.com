'use client';

import { useState } from 'react';

const TECH_CATEGORIES = [
  {
    label: 'Blockchain',
    items: [
      { name: 'Ethereum', icon: '⟠', color: '#627EEA', desc: 'Smart contracts, DeFi, Layer 2' },
      { name: 'Solana', icon: '◎', color: '#9945FF', desc: 'High-TPS, low-cost transactions' },
      { name: 'Polygon', icon: '⬡', color: '#8247E5', desc: 'Ethereum scaling, zkEVM' },
      { name: 'Hyperledger', icon: '🔷', color: '#2196F3', desc: 'Enterprise permissioned chains' },
      { name: 'Avalanche', icon: '🔺', color: '#E84142', desc: 'Subnet architecture, dApps' },
      { name: 'TON', icon: '💎', color: '#0088CC', desc: 'Telegram-integrated blockchain' },
      { name: 'Polkadot', icon: '⬤', color: '#E6007A', desc: 'Parachain interoperability' },
      { name: 'BSC', icon: '💛', color: '#F3BA2F', desc: 'BEP-20, DeFi, high throughput' },
    ],
  },
  {
    label: 'AI & ML',
    items: [
      { name: 'OpenAI GPT', icon: '🧠', color: '#00D4AA', desc: 'LLMs, ChatGPT integration' },
      { name: 'TensorFlow', icon: '🔶', color: '#FF6F00', desc: 'ML model training & deployment' },
      { name: 'PyTorch', icon: '🔥', color: '#EE4C2C', desc: 'Research & production AI' },
      { name: 'LangChain', icon: '🔗', color: '#1C3553', desc: 'LLM application framework' },
      { name: 'Hugging Face', icon: '🤗', color: '#FFD21E', desc: 'Model hub & fine-tuning' },
      { name: 'Anthropic', icon: '🌐', color: '#0099E6', desc: 'Claude AI models' },
      { name: 'Computer Vision', icon: '👁️', color: '#34D399', desc: 'Image & video AI' },
      { name: 'AutoML', icon: '⚙️', color: '#A855F7', desc: 'Automated ML pipelines' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: '☁️', color: '#FF9900', desc: 'Enterprise cloud, EC2, Lambda' },
      { name: 'Google Cloud', icon: '🌤️', color: '#4285F4', desc: 'GKE, BigQuery, Vertex AI' },
      { name: 'Microsoft Azure', icon: '⬡', color: '#0078D4', desc: 'Azure, AD, enterprise apps' },
      { name: 'Docker', icon: '🐳', color: '#2496ED', desc: 'Containerization' },
      { name: 'Kubernetes', icon: '⚙️', color: '#326CE5', desc: 'Container orchestration' },
      { name: 'Terraform', icon: '🔧', color: '#7B42BC', desc: 'Infrastructure as code' },
      { name: 'GitHub Actions', icon: '⚡', color: '#2088FF', desc: 'CI/CD automation' },
      { name: 'Grafana', icon: '📊', color: '#F46800', desc: 'Monitoring & observability' },
    ],
  },
  {
    label: 'Frontend & Backend',
    items: [
      { name: 'Next.js', icon: '▲', color: '#FFFFFF', desc: 'React framework, App Router' },
      { name: 'React', icon: '⚛', color: '#61DAFB', desc: 'UI library, ecosystem' },
      { name: 'TypeScript', icon: '𝑇', color: '#3178C6', desc: 'Type-safe JavaScript' },
      { name: 'Node.js', icon: '🟢', color: '#68A063', desc: 'Server runtime' },
      { name: 'Python', icon: '🐍', color: '#3776AB', desc: 'AI, backend, automation' },
      { name: 'Rust', icon: '⚙️', color: '#CE422B', desc: 'Systems, Solana programs' },
      { name: 'Go', icon: '🐹', color: '#00ACD7', desc: 'High-performance services' },
      { name: 'PostgreSQL', icon: '🐘', color: '#336791', desc: 'Relational database' },
    ],
  },
];

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section bg-slate-50 relative overflow-hidden" id="technologies">
      <div className="orb w-96 h-96 bg-[#0099E6] opacity-[0.05] left-1/2 top-0" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label justify-center">Technology Stack</div>
          <h2 className="h2 text-slate-900 mb-4">
            Cutting-Edge Technology
            <br /><span className="gt-blue">Powering Every Solution</span>
          </h2>
          <p className="lead">
            We work with the most advanced and battle-tested technology stack,
            always choosing the right tool for each specific use case.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TECH_CATEGORIES.map((cat, i) => (
            <button key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl text-[14px] font-medium transition-all ${
                activeTab === i
                  ? 'bg-[#0099E6] text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
              }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {TECH_CATEGORIES[activeTab].items.map((tech) => (
            <div key={tech.name}
              className="card rounded-2xl p-5 text-center group hover:border-slate-300 cursor-default border border-slate-200">
              <div className="text-3xl mb-3">{tech.icon}</div>
              <p className="text-[14px] font-semibold text-slate-900 mb-1">{tech.name}</p>
              <p className="text-[12px] text-slate-400">{tech.desc}</p>
              <div className="w-8 h-0.5 rounded-full mx-auto mt-3 transition-all group-hover:w-14"
                style={{ background: tech.color }} />
            </div>
          ))}
        </div>

        {/* All-tech ticker */}
        <div className="border-t border-slate-200 pt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 text-center mb-5">
            200+ Technologies in our stack
          </p>
          <div className="ticker-container">
            <div className="ticker-inner gap-3 items-center">
              {[
                ...TECH_CATEGORIES.flatMap(c => c.items),
                ...TECH_CATEGORIES.flatMap(c => c.items),
              ].map((t, i) => (
                <span key={i} className="tech-pill mr-3 flex-shrink-0">
                  {t.icon} {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
