import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise AI Agent Platform | Autonomous Workflow Automation',
  description: 'Deploy autonomous AI agents across your enterprise. Multi-model orchestration (GPT-4, Claude, Gemini), visual workflow builder, RAG knowledge base, 100+ connectors, audit trail, enterprise SSO.',
};

const FEATURES = [
  {
    icon: '🤖',
    title: 'Multi-Model Orchestration',
    desc: 'Route tasks intelligently across GPT-4, Claude 3, Gemini Pro, Llama 3, and Mistral in a single workflow. Model-agnostic routing lets you optimize for cost, speed, or accuracy per task type.',
  },
  {
    icon: '🎨',
    title: 'Visual Workflow Builder',
    desc: 'No-code drag-and-drop canvas for designing multi-step agent workflows. Chain tools, models, conditionals, and human approval gates visually — no Python required.',
  },
  {
    icon: '📚',
    title: 'RAG Knowledge Base Integration',
    desc: 'Connect agents to proprietary data via retrieval-augmented generation. Ingest PDFs, databases, APIs, and web pages into vector stores (Pinecone / Weaviate) with automated chunking and re-indexing.',
  },
  {
    icon: '🛠️',
    title: 'Tool & Function Calling',
    desc: 'Give agents access to 100+ pre-built connectors — Salesforce, SAP, Bloomberg, trading platforms, databases, and web APIs. Or build custom tools via our open function-calling SDK.',
  },
  {
    icon: '✅',
    title: 'Human-in-the-Loop Gates',
    desc: 'Insert approval checkpoints anywhere in an agent workflow. Route high-stakes decisions to human reviewers via Slack, email, or in-app — with full context, confidence scores, and one-click approval.',
  },
  {
    icon: '🔒',
    title: 'Audit Trail & Compliance Logging',
    desc: 'Every agent action, model call, and tool invocation is logged with full input/output capture, latency, cost, and operator identity. Immutable audit trail for SOC 2, GDPR, and financial compliance.',
  },
];

const STEPS = [
  { n: '01', title: 'Connect Your Data & Tools', desc: 'Ingest your knowledge bases, connect your enterprise systems via pre-built connectors, and configure your credentials vault — all through the no-code setup wizard.' },
  { n: '02', title: 'Design Your Agent Workflows', desc: 'Use the visual builder to chain AI models, tools, conditions, and approval gates. Start from 50+ pre-built templates or build from scratch in minutes.' },
  { n: '03', title: 'Test, Evaluate & Tune', desc: 'Run agents against test cases in sandboxed mode. Review traces, inspect outputs, adjust prompts and routing logic, and measure accuracy before deploying to production.' },
  { n: '04', title: 'Deploy, Monitor & Scale', desc: 'Deploy agents via webhook, schedule, or event trigger. Monitor performance dashboards, cost per run, error rates, and SLA compliance in real time.' },
];

const SPECS = [
  { label: 'Orchestration', value: 'LangChain + LlamaIndex + AutoGen' },
  { label: 'LLM Providers', value: 'OpenAI, Anthropic, Google, Meta (Llama)' },
  { label: 'Vector DBs', value: 'Pinecone, Weaviate, pgvector' },
  { label: 'Backend', value: 'FastAPI (Python) — async, event-driven' },
  { label: 'Frontend', value: 'React — visual builder + monitoring dashboards' },
  { label: 'Auth', value: 'Enterprise SSO — SAML 2.0, OIDC, Okta, Azure AD' },
  { label: 'Deployment', value: 'Docker / Kubernetes — cloud or on-premise' },
  { label: 'Compliance', value: 'SOC 2 Type II, GDPR, HIPAA-ready, ISO 27001' },
];

const METRICS = [
  { v: '100+', l: 'Pre-Built Connectors' },
  { v: '10x', l: 'Faster Workflow Automation' },
  { v: '50+', l: 'Agent Templates' },
  { v: '99.9%', l: 'Platform Uptime SLA' },
];

const USE_CASES = [
  { icon: '📈', title: 'Trading Signal Agents', desc: 'Autonomous agents that monitor markets, analyze news sentiment via LLM, generate signals, and route them to execution systems — with human override gates.' },
  { icon: '🔍', title: 'Compliance Monitoring', desc: 'Agents that continuously scan transactions, communications, and filings for regulatory red flags, escalate to compliance officers, and log evidence chains.' },
  { icon: '💬', title: 'AI Customer Service', desc: 'RAG-powered support agents that resolve tier-1 queries from knowledge bases, escalate complex issues with full context, and learn from resolutions.' },
  { icon: '🚨', title: 'Fraud Detection', desc: 'Real-time transaction screening agents that combine rule engines with LLM reasoning to identify novel fraud patterns and auto-file reports.' },
  { icon: '📄', title: 'Document Processing', desc: 'Agents that extract, classify, and validate structured data from contracts, invoices, KYC documents, and filings — with human review for exceptions.' },
  { icon: '📊', title: 'Research & Reporting', desc: 'Multi-step research agents that aggregate data from 10+ sources, synthesize insights, and generate structured reports and executive briefings automatically.' },
];

export default function AIAgentsProductPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] bg-[#00D4FF] opacity-[0.06] -left-40 -top-20" />
        <div className="orb w-[400px] h-[400px] bg-[#0099FF] opacity-[0.05] right-0 top-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left copy */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge badge-green">Enterprise</span>
              </div>
              <div className="section-label mb-4">Enterprise AI Agent Platform</div>
              <h1 className="h1 text-slate-900 mb-6">
                Deploy Autonomous AI
                <br /><span style={{ color: '#00D4FF' }}>Across Your Enterprise</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                A complete enterprise AI agent operating system — multi-model orchestration, visual workflow builder,
                RAG knowledge integration, 100+ connectors, and full audit trail — ready to automate your
                most complex business processes.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Use Cases</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map(m => (
                  <div key={m.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#00D4FF' }}>{m.v}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — dashboard visual */}
            <div className="hidden lg:block">
              <div className="dashboard-preview rounded-2xl relative">
                <div className="scan-line" />
                <div className="dashboard-bar">
                  <span className="db-dot bg-red-500" />
                  <span className="db-dot bg-yellow-400" />
                  <span className="db-dot bg-green-400" />
                  <span className="ml-3 text-[11px] text-slate-400">agents.yourbrand.com — Workflow Monitor</span>
                </div>
                <div className="p-5 space-y-3">
                  {/* Active agent strip */}
                  <div className="flex gap-2 overflow-hidden">
                    {[['Compliance Bot','Running','text-green-400'],['Trade Signal','Running','text-green-400'],['Doc Processor','Queued','text-yellow-400']].map(([name, status, cls]) => (
                      <div key={name} className="glass rounded-lg px-3 py-2 flex-shrink-0">
                        <p className="text-[9px] text-slate-400">Agent</p>
                        <p className="text-[12px] font-bold text-slate-900">{name}</p>
                        <p className={`text-[9px] font-semibold ${cls}`}>{status}</p>
                      </div>
                    ))}
                  </div>
                  {/* Workflow trace + model usage panel */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 glass rounded-xl p-3 h-36">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">Live Agent Trace — Compliance Bot</p>
                      <div className="space-y-1.5">
                        {[['→ Fetch transactions (DB Tool)','12ms','✓'],['→ Screen vs OFAC (API Tool)','38ms','✓'],['→ Analyze patterns (Claude 3)','410ms','✓'],['→ Human review gate','Waiting','⏳'],['→ File SAR (API Tool)','—','—']].map(([step, t, status]) => (
                          <div key={step} className="flex justify-between text-[9px]">
                            <span className="text-slate-500 truncate w-40">{step}</span>
                            <span className="text-slate-400">{t}</span>
                            <span className={status === '✓' ? 'text-green-400' : status === '⏳' ? 'text-yellow-400' : 'text-slate-400'}>{status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="glass rounded-xl p-3 h-36 flex flex-col justify-between">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">Model Usage</p>
                      <div className="space-y-1.5">
                        {[['GPT-4o',62],['Claude 3',28],['Gemini',10]].map(([m, pct]) => (
                          <div key={m as string}>
                            <div className="flex justify-between text-[9px] mb-0.5">
                              <span className="text-slate-500">{m}</span>
                              <span style={{ color: '#00D4FF' }}>{pct}%</span>
                            </div>
                            <div className="h-1 bg-slate-200 rounded-full">
                              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: '#00D4FF44' }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* KPI row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[['Runs Today','4,812'],['Avg Latency','840ms'],['Cost / Run','$0.0031']].map(([l,v]) => (
                      <div key={l} className="metric-card">
                        <p className="text-[10px] text-slate-400">{l}</p>
                        <p className="text-[13px] font-bold" style={{ color: '#00D4FF' }}>{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Platform Capabilities</div>
            <h2 className="h2 text-slate-900 mb-4">Everything to Build & Deploy <span style={{ color: '#00D4FF' }}>Enterprise AI Agents</span></h2>
            <p className="lead">One platform. Design, test, deploy, and monitor autonomous AI workflows at enterprise scale.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-[#00D4FF]/30 group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-[#00D4FF] transition-colors">{f.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Enterprise Use Cases</div>
            <h2 className="h2 text-slate-900 mb-4">Agents Built for <span style={{ color: '#00D4FF' }}>Financial Services</span></h2>
            <p className="lead">Pre-built agent templates purpose-built for trading, compliance, operations, and customer experience workflows.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map(u => (
              <div key={u.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-[#00D4FF]/25 group">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#00D4FF] transition-colors">{u.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH SPECS ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">Technical Architecture</div>
              <h2 className="h2 text-slate-900 mb-6">Built for <span style={{ color: '#00D4FF' }}>Enterprise Scale</span></h2>
              <p className="lead mb-8">Model-agnostic orchestration, enterprise SSO, immutable audit trails, and on-premise deployment options for the most security-sensitive environments.</p>
              <div className="space-y-2">
                {SPECS.map(s => (
                  <div key={s.label} className="flex items-start gap-4 p-4 glass rounded-xl border border-slate-200">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider w-32 flex-shrink-0 pt-0.5">{s.label}</span>
                    <span className="text-[13px] text-slate-500">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label mb-4">Tech Stack</div>
              <h3 className="h3 text-slate-900 mb-6">The Stack Behind the Agents</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['LangChain','LlamaIndex','AutoGen','OpenAI API','Anthropic API','Google Gemini','Pinecone','Weaviate','FastAPI','React','SAML 2.0','Kubernetes'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-slate-200">
                <p className="text-[12px] text-slate-400 uppercase tracking-wider mb-4">Platform Performance</p>
                <div className="space-y-4">
                  {[['Agent Workflow Launch','< 200ms','p99'],['Tool Call Round-Trip','< 500ms','avg'],['RAG Query Latency','< 150ms','vector search'],['Concurrent Agents','10,000+','per instance']].map(([lbl, val, ref]) => (
                    <div key={lbl}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[12px] text-slate-500">{lbl}</span>
                        <span className="text-[12px] font-bold" style={{ color: '#00D4FF' }}>{val}</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: ref === 'per instance' ? '98%' : ref === 'vector search' ? '95%' : '92%', background: 'linear-gradient(to right, #0099FF, #00D4FF)' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Deployment Process</div>
            <h2 className="h2 text-slate-900 mb-4">From Idea to <span style={{ color: '#00D4FF' }}>Autonomous Agent</span></h2>
            <p className="lead">A four-step process to go from business requirement to a production-grade AI agent workflow — often in days.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="card rounded-2xl p-6 border border-slate-200 relative group hover:border-[#00D4FF]/30">
                <div className="text-[48px] font-black text-[#0E1E34] group-hover:text-[#00D4FF]/15 transition-colors absolute top-4 right-4 leading-none">{s.n}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: '#00D4FF18', border: '1px solid #00D4FF30' }}>
                  <span className="font-bold text-sm" style={{ color: '#00D4FF' }}>{i + 1}</span>
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#00D4FF] transition-colors">{s.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY / METRICS ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Client Results</div>
              <h2 className="h2 text-slate-900 mb-6">
                Global Investment Bank
                <br /><span style={{ color: '#00D4FF' }}>Cut Compliance Review Time by 82%</span>
              </h2>
              <p className="lead mb-8">
                A tier-2 investment bank deployed 14 compliance monitoring agents on our platform, automating
                transaction screening, communications surveillance, and regulatory filing workflows — reducing
                compliance review time by 82% and cutting false-positive escalations by 67%.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  '14 autonomous compliance agents deployed in 6 weeks',
                  '82% reduction in manual compliance review time',
                  '67% fewer false-positive escalations',
                  '$2.1M annual cost savings in compliance operations',
                  '100% audit trail coverage across all agent actions',
                  'Zero regulatory findings in first annual review',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#00D4FF18' }}>
                      <Check size={11} style={{ color: '#00D4FF' }} />
                    </div>
                    <span className="text-[14px] text-slate-500">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact#consultation" className="btn btn-primary">
                Get a Demo <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[['82%','Reduction in Compliance Review Time'],['$2.1M','Annual Savings in Operations'],['14','Agents Deployed in 6 Weeks'],['67%','Fewer False-Positive Escalations'],['100%','Audit Trail Coverage'],['Zero','Regulatory Findings — Year One']].map(([v, l]) => (
                <div key={l} className="glass-lg rounded-2xl p-6 border border-slate-200 hover:border-[#00D4FF]/25 transition-colors">
                  <p className="text-2xl font-black mb-1" style={{ color: '#00D4FF' }}>{v}</p>
                  <p className="text-[13px] text-slate-500">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Integrations</div>
            <h2 className="h2 text-slate-900 mb-4">100+ <span style={{ color: '#00D4FF' }}>Pre-Built Connectors</span></h2>
            <p className="lead">Connect agents to your entire enterprise stack — CRM, ERP, trading systems, databases, and communication tools.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['Salesforce CRM','SAP ERP','Bloomberg Terminal','Refinitiv Eikon','Interactive Brokers','FIX Protocol 4.4','Slack Notifications','Microsoft Teams','ServiceNow','JIRA','PostgreSQL','Snowflake','Pinecone','Weaviate','Twilio SMS','SendGrid Email'].map(name => (
              <div key={name} className="flex items-center gap-2.5 p-3 rounded-xl glass border border-slate-200 hover:border-[#00D4FF]/25 transition-colors">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#00D4FF' }} />
                <span className="text-[13px] text-slate-500">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
