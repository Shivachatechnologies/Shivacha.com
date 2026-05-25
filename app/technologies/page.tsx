import type { Metadata } from 'next';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Technology Stack | Shivacha Technologies',
  description: 'Comprehensive technology stack — blockchain protocols, AI frameworks, cloud infrastructure, and development tools used by Shivacha Technologies.',
};

const STACKS = [
  {
    category: 'Blockchain Protocols', icon: '⛓️', color: '#006FEE',
    items: [
      { name: 'Ethereum', desc: 'EVM, Solidity, Layer 2 solutions, zkEVM' },
      { name: 'Solana', desc: 'Rust programs, SPL tokens, high-TPS dApps' },
      { name: 'Polygon', desc: 'PoS chain, zkEVM, CDK chains' },
      { name: 'Hyperledger Fabric', desc: 'Enterprise permissioned blockchain' },
      { name: 'Hyperledger Besu', desc: 'EVM-compatible enterprise chain' },
      { name: 'Avalanche', desc: 'Subnets, EVM compatibility' },
      { name: 'Polkadot', desc: 'Parachain, Substrate framework' },
      { name: 'Cosmos', desc: 'IBC protocol, Tendermint' },
      { name: 'BNB Smart Chain', desc: 'BEP-20, high TPS, DeFi' },
      { name: 'TON', desc: 'Telegram ecosystem, FunC' },
      { name: 'Near Protocol', desc: 'Sharding, Aurora EVM' },
      { name: 'Arbitrum', desc: 'Optimistic rollup, Nitro' },
    ],
  },
  {
    category: 'AI & Machine Learning', icon: '🧠', color: '#00D4FF',
    items: [
      { name: 'OpenAI GPT-4 / o1', desc: 'LLM applications, fine-tuning' },
      { name: 'Anthropic Claude', desc: 'Enterprise AI, Claude API' },
      { name: 'Google Gemini', desc: 'Multimodal AI, Vertex AI' },
      { name: 'Meta Llama 3', desc: 'Open-source LLM, fine-tuning' },
      { name: 'TensorFlow', desc: 'ML training, deployment, TFX' },
      { name: 'PyTorch', desc: 'Research, computer vision, NLP' },
      { name: 'LangChain', desc: 'LLM apps, agent frameworks' },
      { name: 'LlamaIndex', desc: 'RAG systems, knowledge bases' },
      { name: 'Hugging Face', desc: 'Model hub, transformers' },
      { name: 'AutoGen / CrewAI', desc: 'Multi-agent orchestration' },
      { name: 'FAISS / Pinecone', desc: 'Vector databases, embeddings' },
      { name: 'MLflow', desc: 'ML experiment tracking, MLOps' },
    ],
  },
  {
    category: 'Cloud & Infrastructure', icon: '☁️', color: '#00FF87',
    items: [
      { name: 'Amazon Web Services', desc: 'EC2, Lambda, EKS, RDS, S3' },
      { name: 'Google Cloud Platform', desc: 'GKE, BigQuery, Vertex AI' },
      { name: 'Microsoft Azure', desc: 'AKS, Azure AD, Cosmos DB' },
      { name: 'Docker', desc: 'Container runtime, multi-stage builds' },
      { name: 'Kubernetes', desc: 'Container orchestration, Helm' },
      { name: 'Terraform', desc: 'Infrastructure as code, IaC' },
      { name: 'GitHub Actions', desc: 'CI/CD automation, workflows' },
      { name: 'ArgoCD', desc: 'GitOps, K8s deployments' },
      { name: 'Prometheus / Grafana', desc: 'Monitoring, alerting, dashboards' },
      { name: 'Elastic Stack', desc: 'Logging, search, analytics' },
      { name: 'Vault by HashiCorp', desc: 'Secret management, PKI' },
      { name: 'Cloudflare', desc: 'DDoS, CDN, Workers' },
    ],
  },
  {
    category: 'Frontend & Mobile', icon: '💻', color: '#6644FF',
    items: [
      { name: 'Next.js 15', desc: 'App Router, RSC, full-stack' },
      { name: 'React', desc: 'Component library, ecosystem' },
      { name: 'TypeScript', desc: 'Type-safe development' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS' },
      { name: 'Framer Motion', desc: 'Animations, transitions' },
      { name: 'React Native', desc: 'Cross-platform mobile' },
      { name: 'Flutter', desc: 'iOS & Android, Dart' },
      { name: 'Three.js / WebGL', desc: '3D visualization, metaverse' },
      { name: 'wagmi / ethers.js', desc: 'Web3 wallet connections' },
      { name: 'Solana Web3.js', desc: 'Solana dApp integration' },
      { name: 'GraphQL', desc: 'API layer, subscriptions' },
      { name: 'The Graph', desc: 'Blockchain data indexing' },
    ],
  },
  {
    category: 'Backend & Databases', icon: '⚙️', color: '#FFB800',
    items: [
      { name: 'Node.js', desc: 'Server runtime, npm ecosystem' },
      { name: 'Python', desc: 'AI/ML, FastAPI, Django' },
      { name: 'Rust', desc: 'Systems, Solana programs' },
      { name: 'Go', desc: 'High-performance microservices' },
      { name: 'PostgreSQL', desc: 'ACID transactions, JSON' },
      { name: 'MongoDB', desc: 'Document DB, Atlas' },
      { name: 'Redis', desc: 'Caching, pub/sub, queues' },
      { name: 'Apache Kafka', desc: 'Event streaming, real-time' },
      { name: 'Elasticsearch', desc: 'Full-text search' },
      { name: 'IPFS / Filecoin', desc: 'Decentralized storage' },
      { name: 'TimescaleDB', desc: 'Time-series data, trading' },
      { name: 'ClickHouse', desc: 'Analytics, OLAP queries' },
    ],
  },
  {
    category: 'Security & Compliance', icon: '🔐', color: '#EF4444',
    items: [
      { name: 'Slither / MythX', desc: 'Smart contract static analysis' },
      { name: 'Foundry / Hardhat', desc: 'Smart contract testing' },
      { name: 'OpenZeppelin', desc: 'Secure contract libraries' },
      { name: 'Certora', desc: 'Formal verification' },
      { name: 'Burp Suite', desc: 'Web app penetration testing' },
      { name: 'AWS Security Hub', desc: 'Cloud security posture' },
      { name: 'Snyk', desc: 'Dependency vulnerability scanning' },
      { name: 'SonarQube', desc: 'Code quality, security SAST' },
      { name: 'Chainalysis', desc: 'Blockchain AML, compliance' },
      { name: 'Auth0 / Okta', desc: 'Identity, SSO, MFA' },
      { name: 'AWS WAF', desc: 'Web application firewall' },
      { name: 'Vault', desc: 'Secrets management' },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <div className="bg-white">
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-96 h-96 bg-[#006FEE] opacity-[0.06] -left-20 top-0" />
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="section-label justify-center mb-4">Technology Stack</div>
            <h1 className="h1 text-slate-900 mb-6">Our Enterprise <br /><span className="gt-blue">Technology Stack</span></h1>
            <p className="lead max-w-2xl mx-auto">200+ technologies across blockchain, AI, cloud, frontend, backend, and security — always choosing the right tool for each specific use case.</p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container space-y-12">
          {STACKS.map((stack) => (
            <div key={stack.category} id={stack.category.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{stack.icon}</span>
                <h2 className="text-[20px] font-bold text-slate-900">{stack.category}</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {stack.items.map((item) => (
                  <div key={item.name}
                    className="card rounded-xl p-4 border border-slate-200 hover:border-slate-300 group cursor-default">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: stack.color }} />
                      <p className="text-[14px] font-semibold text-slate-900 group-hover:text-[#338EF7] transition-colors">{item.name}</p>
                    </div>
                    <p className="text-[12px] text-slate-400 pl-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
