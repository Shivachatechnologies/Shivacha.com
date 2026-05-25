import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'AI Development Company | Enterprise AI & ML Solutions',
  description: 'Shivacha Technologies — leading enterprise AI development company. Custom LLMs, AI agents, computer vision, NLP, predictive analytics, and intelligent automation for enterprises.',
};

const AI_SERVICES = [
  { icon: '🧠', title: 'Custom LLM Development', desc: 'Fine-tune and deploy proprietary large language models on your data. GPT-4, Claude, Llama, Mistral — custom model training and RLHF.' },
  { icon: '🤖', title: 'AI Agent Systems', desc: 'Autonomous multi-agent orchestration systems for trading, compliance, customer service, and complex enterprise workflows.' },
  { icon: '👁️', title: 'Computer Vision', desc: 'Image classification, object detection, facial recognition, quality inspection, document OCR, and video analysis systems.' },
  { icon: '💬', title: 'NLP & Conversational AI', desc: 'Enterprise chatbots, document intelligence, sentiment analysis, multilingual NLP, and intent classification systems.' },
  { icon: '📊', title: 'Predictive Analytics', desc: 'Time-series forecasting, demand prediction, risk scoring, churn prediction, and data-driven decision-making platforms.' },
  { icon: '⚙️', title: 'AI-Powered Automation', desc: 'Intelligent process automation, document processing, data extraction, workflow orchestration, and RPA solutions.' },
  { icon: '🔍', title: 'Recommendation Systems', desc: 'Personalized recommendation engines for e-commerce, trading signals, content platforms, and enterprise applications.' },
  { icon: '🛡️', title: 'AI Fraud Detection', desc: 'Real-time transaction monitoring, anomaly detection, AML screening, and intelligent risk assessment systems.' },
];

const MODELS = [
  { name: 'GPT-4 / o1', org: 'OpenAI' }, { name: 'Claude 3.5 / 4', org: 'Anthropic' },
  { name: 'Gemini Pro', org: 'Google' }, { name: 'Llama 3', org: 'Meta' },
  { name: 'Mistral', org: 'Mistral AI' }, { name: 'TensorFlow', org: 'Google' },
  { name: 'PyTorch', org: 'Meta' }, { name: 'Hugging Face', org: 'HuggingFace' },
  { name: 'LangChain', org: 'LangChain' }, { name: 'LlamaIndex', org: 'LlamaIndex' },
  { name: 'AutoGen', org: 'Microsoft' }, { name: 'CrewAI', org: 'CrewAI' },
];

const PROCESS = [
  { step: '01', title: 'Discovery & Data Audit', desc: 'We assess your data assets, define KPIs, and design the AI architecture — LLM, agent system, or ML pipeline — that best fits your use case.' },
  { step: '02', title: 'Data Engineering', desc: 'Data collection, cleaning, feature engineering, vector embedding, and RAG pipeline construction. We handle structured, unstructured, and real-time data.' },
  { step: '03', title: 'Model Training & Fine-Tuning', desc: 'We fine-tune or build models on your proprietary data using RLHF, LoRA, or full training depending on requirements. Benchmarking vs. baseline at each stage.' },
  { step: '04', title: 'Evaluation & Red-Teaming', desc: 'Rigorous evaluation using domain-specific metrics, adversarial testing, hallucination benchmarking, and bias detection before any production deployment.' },
  { step: '05', title: 'MLOps & Deployment', desc: 'Production deployment to your cloud or on-premise, with CI/CD for model updates, monitoring, drift detection, and automated retraining pipelines.' },
  { step: '06', title: 'Ongoing Optimization', desc: 'Continuous model performance monitoring, A/B testing, feedback loops, and incremental fine-tuning as your data evolves.' },
];

const FAQS = [
  {
    q: 'Do you build AI on top of existing LLMs or train custom models?',
    a: 'Both. We build enterprise applications on top of GPT-4, Claude, Gemini, and Llama via RAG, fine-tuning, and prompt engineering when that is sufficient. For proprietary data or highly specialized domains, we train custom models using your data — starting from a base model (Llama, Mistral) and applying LoRA or full fine-tuning. We recommend the approach that gives the best performance-to-cost ratio for your use case.',
  },
  {
    q: 'How do you ensure AI outputs are accurate and not hallucinating?',
    a: 'We apply a layered approach: RAG (retrieval-augmented generation) to ground outputs in your verified data, confidence scoring to flag uncertain responses, chain-of-thought prompting to improve reasoning, and comprehensive evaluation benchmarks before launch. For high-stakes use cases (financial analysis, medical), we implement human-in-the-loop verification workflows.',
  },
  {
    q: 'Can AI agents automate our business workflows end-to-end?',
    a: 'Yes. We build multi-agent systems using LangChain, AutoGen, and CrewAI where each agent handles a specific task — data retrieval, analysis, decision-making, execution. We design these with appropriate guardrails: approval workflows for high-stakes actions, audit trails for all agent decisions, and graceful degradation when confidence is low. Typical use cases include trading signal generation, compliance review, customer onboarding, and document processing.',
  },
  {
    q: 'Do you integrate AI into existing enterprise systems?',
    a: 'Absolutely. We specialize in integrating AI capabilities into existing ERP, CRM, trading platforms, and custom internal tools via API layers and microservices. We do not require you to replace your existing stack — we extend it with AI capabilities through secure APIs and webhooks.',
  },
];

const USE_CASES = [
  { icon: '💹', title: 'AI Trading Signals', desc: 'ML-powered trading signal generation across 15+ exchanges with backtesting and live deployment.' },
  { icon: '🔍', title: 'AML & Fraud Detection', desc: 'Real-time transaction monitoring with graph neural networks and anomaly detection models.' },
  { icon: '📄', title: 'Document Intelligence', desc: 'Automated contract analysis, KYC document extraction, and regulatory filing summarization.' },
  { icon: '🤖', title: 'Compliance Automation', desc: 'AI agents that monitor regulatory changes, flag compliance issues, and generate audit reports.' },
];

export default function AIDevelopmentPage() {
  return (
    <div className="bg-white">
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] bg-[#00D4FF] opacity-[0.06] -right-40 top-0" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">AI Development</div>
              <h1 className="h1 text-[#F0F6FF] mb-6">Enterprise AI & ML <br /><span className="gt-blue">Development Company</span></h1>
              <p className="lead max-w-xl mb-8">
                We build production-grade AI systems — custom LLMs, autonomous agents, computer vision,
                predictive analytics, and intelligent automation. Not experiments, but enterprise systems
                that scale.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">Get Free Consultation <ArrowRight size={14} /></Link>
                <Link href="/portfolio" className="btn btn-secondary">View AI Projects</Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[{ v: '50+', l: 'AI Projects' }, { v: '15+', l: 'AI Models Used' }, { v: '98.5%', l: 'Accuracy Rate' }].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black gt-blue">{s.v}</p>
                    <p className="text-[11px] text-[rgba(240,246,255,0.35)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI pipeline visual */}
            <div className="hidden lg:block">
              <div className="glass-lg rounded-3xl p-7 border border-white/[0.06] relative overflow-hidden">
                <div className="scan-line" />
                <p className="text-[12px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-4">AI Agent Execution Trace</p>
                <div className="space-y-2.5">
                  {[
                    { agent: 'Data Retrieval Agent', action: 'Fetching Q4 financial filings...', status: 'done', time: '0.4s' },
                    { agent: 'Analysis Agent', action: 'Running sentiment + anomaly detection', status: 'done', time: '1.2s' },
                    { agent: 'Risk Agent', action: 'Evaluating counterparty exposure', status: 'active', time: '...' },
                    { agent: 'Report Agent', action: 'Generating compliance summary', status: 'pending', time: '—' },
                    { agent: 'Approval Agent', action: 'Awaiting human review gate', status: 'pending', time: '—' },
                  ].map(({ agent, action, status, time }) => (
                    <div key={agent} className="flex items-start gap-3 p-3 rounded-xl bg-[#0C1428] border border-white/[0.06]">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${status === 'done' ? 'bg-green-400' : status === 'active' ? 'bg-[#00D4FF] animate-pulse' : 'bg-[#1E3A5A]'}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[12px] font-semibold text-[#F0F6FF] truncate">{agent}</span>
                          <span className="text-[11px] text-[rgba(240,246,255,0.35)] flex-shrink-0">{time}</span>
                        </div>
                        <span className="text-[11px] text-[rgba(240,246,255,0.35)]">{action}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-xl border border-[#00D4FF]/20 bg-[#00D4FF]/06 flex items-center justify-between">
                  <span className="text-[12px] text-[#00D4FF]">Pipeline: AML Compliance Review</span>
                  <span className="text-[11px] text-[rgba(240,246,255,0.35)]">3/5 steps complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">AI Services</div>
            <h2 className="h2 text-[#F0F6FF]">Enterprise AI <span className="gt-blue">Capabilities</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {AI_SERVICES.map((s) => (
              <div key={s.title} className="card rounded-2xl p-5 border border-white/[0.06] hover:border-[#00D4FF]/30 group">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-[15px] font-bold text-[#F0F6FF] mb-2 group-hover:text-[#00D4FF] transition-colors">{s.title}</h3>
                <p className="text-[12px] text-[rgba(240,246,255,0.40)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">AI in <span className="gt-blue">Financial Services</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="card rounded-2xl p-5 border border-white/[0.06] hover:border-[#00D4FF]/30">
                <div className="text-3xl mb-3">{uc.icon}</div>
                <h3 className="text-[14px] font-bold text-[#F0F6FF] mb-2">{uc.title}</h3>
                <p className="text-[12px] text-[rgba(240,246,255,0.40)] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">How We Work</div>
            <h2 className="h2 text-[#F0F6FF]">Our AI Development <span className="gt-blue">Process</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="card rounded-2xl p-6 border border-white/[0.06] hover:border-[#00D4FF]/30 group relative overflow-hidden">
                <div className="absolute top-4 right-5 text-[56px] font-black text-[#00D4FF]/05 leading-none select-none">{p.step}</div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/12 border border-[#00D4FF]/20 flex items-center justify-center text-[13px] font-black text-[#00D4FF] mb-4">{p.step}</div>
                  <h3 className="text-[15px] font-bold text-[#F0F6FF] mb-2 group-hover:text-[#00D4FF] transition-colors">{p.title}</h3>
                  <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">AI Models & Frameworks <span className="gt-blue">We Work With</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {MODELS.map((m) => (
              <div key={m.name} className="card rounded-xl p-4 text-center border border-white/[0.06] hover:border-[#00D4FF]/40">
                <p className="text-[13px] font-bold text-[#F0F6FF]">{m.name}</p>
                <p className="text-[11px] text-[rgba(240,246,255,0.35)] mt-0.5">{m.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#0C1428]">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">Frequently Asked <span className="gt-blue">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card rounded-2xl p-6 border border-white/[0.06]">
                <h4 className="text-[15px] font-bold text-[#F0F6FF] mb-3">{faq.q}</h4>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
