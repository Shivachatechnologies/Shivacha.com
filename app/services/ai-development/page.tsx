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

export default function AIDevelopmentPage() {
  return (
    <div className="bg-[#000008]">
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] bg-[#00D4FF] opacity-[0.06] -right-40 top-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">AI Development</div>
            <h1 className="h1 text-white mb-6">Enterprise AI & ML <br /><span className="gt-blue">Development Company</span></h1>
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
                  <p className="text-[11px] text-[#3D5470]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">AI Services</div>
            <h2 className="h2 text-white">Enterprise AI <span className="gt-blue">Capabilities</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {AI_SERVICES.map((s) => (
              <div key={s.title} className="card rounded-2xl p-5 border border-[#0E1E34] hover:border-[#00D4FF]/30 group">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-[15px] font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{s.title}</h3>
                <p className="text-[12px] text-[#7A8FA6] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-[#000008]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">AI Models & Frameworks <span className="gt-blue">We Work With</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {MODELS.map((m) => (
              <div key={m.name} className="card rounded-xl p-4 text-center border border-[#0E1E34] hover:border-[#00D4FF]/40">
                <p className="text-[13px] font-bold text-white">{m.name}</p>
                <p className="text-[11px] text-[#3D5470] mt-0.5">{m.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
