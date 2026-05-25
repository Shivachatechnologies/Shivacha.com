const STACKS = [
  { category: 'Blockchain',      color: '#006FEE',  techs: ['Ethereum','Solana','Polygon','Hyperledger','Avalanche','TON','Polkadot','BSC','Aptos','Sui'] },
  { category: 'AI & ML',         color: '#8B5CF6',  techs: ['GPT-4 / o1','Claude 3.5','Gemini Pro','Llama 3','TensorFlow','PyTorch','LangChain','AutoGen','CrewAI','HuggingFace'] },
  { category: 'Cloud & DevOps',  color: '#10B981',  techs: ['AWS','Google Cloud','Azure','Docker','Kubernetes','Terraform','GitHub Actions','Grafana','Prometheus','Vault'] },
  { category: 'Backend',         color: '#F59E0B',  techs: ['Node.js','Python','Go','Rust','PostgreSQL','Redis','Kafka','gRPC','GraphQL','TypeScript'] },
  { category: 'Frontend',        color: '#EC4899',  techs: ['Next.js','React','TypeScript','Tailwind','ethers.js','wagmi','viem','Storybook','Cypress','Playwright'] },
];

export default function TechnologiesSection() {
  return (
    <section className="section bg-white" id="technologies">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="overline mb-3">Technology Stack</p>
          <h2 className="h2">
            50+ Technologies.<br />
            <span className="gt-blue">Always the Right Tool.</span>
          </h2>
          <p className="lead mt-4">We pick the technology that best fits your use case — not the one we're most comfortable with.</p>
        </div>

        <div className="space-y-5">
          {STACKS.map((stack) => (
            <div key={stack.category} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              {/* Category label */}
              <div className="flex-shrink-0 w-36">
                <span className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: stack.color }}>{stack.category}</span>
              </div>
              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {stack.techs.map(t => (
                  <span key={t}
                    className="text-[12px] font-medium px-3 py-1.5 rounded-xl border transition-all hover:-translate-y-0.5 cursor-default"
                    style={{ borderColor: `${stack.color}25`, background: `${stack.color}07`, color: '#3D4A5C' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-5">200+ technologies in our stack</p>
          <div className="ticker-container">
            <div className="ticker-inner gap-2">
              {[...STACKS.flatMap(s => s.techs), ...STACKS.flatMap(s => s.techs)].map((t, i) => (
                <span key={i} className="tech-pill mr-2 flex-shrink-0 text-[12px]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
