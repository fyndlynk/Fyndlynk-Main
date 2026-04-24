/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Zap, 
  BarChart3, 
  Layers, 
  Bot, 
  Plug, 
  Headphones, 
  ArrowUpRight,
  ChevronRight,
  Database,
  Smartphone,
  ShieldCheck,
  Timer,
  TrendingUp,
  Layout,
  ExternalLink
} from 'lucide-react';
import { useEffect } from 'react';
import ContactForm from '../components/ui/ContactForm';
import FaqSection from '../components/sections/FaqSection';

const lowCodeFaqs = [
  {
    question: "Is Power Apps secure for enterprise data?",
    answer: "Yes. Power Apps is built on Microsoft's enterprise-grade cloud security. It uses Dataverse for robust security models, role-based access control (RBAC), and complies with global standards including SOC, HIPAA, and GDPR."
  },
  {
    question: "Do I need separate licenses for Power Apps?",
    answer: "Many Microsoft 365 and Dynamics 365 plans include Power Apps capabilities. For complex enterprise apps, standalone licensing might be required. We help you optimize your license strategy to keep costs efficient."
  },
  {
    question: "Can Power Apps work offline?",
    answer: "Yes, Power Apps supports offline data synchronization. We can design apps that allow field workers to capture data without connectivity and sync automatically once they're back online."
  },
  {
    question: "How does this differ from traditional custom development?",
    answer: "Low-code development is typically 50-70% faster. It uses visual drag-and-drop tools and pre-built connectors while still allowing for custom code extensions (Pro-Code) where necessary, providing the best of both worlds."
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function PowerAppsPage() {
  useEffect(() => {
    document.title = "Custom Power Apps Solutions for Dynamics 365 – Fyndlynk";
  }, []);

  return (
    <div className="bg-brand-bg transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-brand-border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <img src="input_file_0.png" alt="Power Platform" className="w-8 h-8" referrerPolicy="no-referrer" />
              <div className="h-4 w-px bg-brand-border" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-muted">Solution // Modern Low-Code</span>
            </div>
            <h1 className="text-5xl md:text-[100px] font-black tracking-[-0.04em] leading-[0.85] mb-12 text-brand-ink transition-colors uppercase italic">
              Accelerate Your Business with <br />
              <span className="text-brand-muted opacity-30">Custom Power Apps.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted leading-relaxed mb-16 max-w-2xl font-medium transition-colors">
              We design and build tailored Power Apps and Power Automate solutions that streamline Dynamics 365 processes, automate tasks, and deliver actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="#contact" className="w-full sm:w-auto sharp-btn-primary group text-center">
                <span className="flex items-center justify-center gap-3 px-8">
                  Get Started
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
              <a href="#use-cases" className="w-full sm:w-auto sharp-btn-secondary text-center px-8">
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition (Overview) */}
      <section className="py-32 px-6 border-y border-brand-border bg-brand-surface transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-black uppercase mb-10 text-brand-ink italic transition-colors">Low-Code Intelligence</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-12 font-medium transition-colors">
                Our team specializes in extending Microsoft Dynamics 365 through high-impact Power Apps and Power Automate solutions. We replace manual, error-prone processes with <strong className="text-brand-ink">intelligent, low-code applications</strong> that connect seamlessly to your data and scale as you grow. By leveraging Dataverse and hundreds of connectors, our solutions integrate Dynamics 365, Office 365, Azure, and third-party systems into one unified platform.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Timer, title: 'Save Time', desc: 'Automate tasks saving 250+ hours/year per user.' },
                { icon: Zap, title: 'Speed Up', desc: 'Development time ~50% faster than traditional code.' },
                { icon: ShieldCheck, title: 'Reduce Errors', desc: 'Eliminate manual entry with automated flows.' },
                { icon: TrendingUp, title: 'Fast ROI', desc: 'Investment typically paid back in ~6 months.' },
                { icon: Layers, title: 'Scale', desc: 'Start with one pilot, scale across your org.' },
                { icon: Database, title: 'Unified Data', desc: 'Dataverse as a secure, shared source of truth.' },
              ].map((benefit, idx) => (
                <motion.div 
                  key={benefit.title}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 border border-brand-border bg-brand-bg transition-colors"
                >
                  <benefit.icon size={20} className="mb-4 text-brand-ink" />
                  <h4 className="font-black uppercase text-xs mb-2 text-brand-ink tracking-widest">{benefit.title}</h4>
                  <p className="text-[10px] text-brand-muted font-bold leading-tight uppercase opacity-70">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="services" className="py-32 px-6 bg-brand-bg transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-brand-ink mb-6 uppercase italic transition-colors text-balance leading-none">Core Capabilities</h2>
            <div className="w-24 h-2 bg-brand-ink" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border">
            {[
              {
                icon: Layout,
                logoUrl: "input_file_2.png",
                title: 'Power Apps',
                items: ['Custom Canvas Apps', 'Model-Driven Design', 'Mobile-Ready UX', 'Copilot Assistance']
              },
              {
                icon: Zap,
                logoUrl: "input_file_3.png",
                title: 'Automation',
                items: ['300+ Connectors', 'Approval Flows', 'Real-time Triggers', 'Enterprise RPA']
              },
              {
                icon: BarChart3,
                logoUrl: "input_file_4.png",
                title: 'Analytics',
                items: ['Power BI Dashboards', 'AI Builder Models', 'Predictive Insights', 'Data Pipelines'],
                hasCopilot: true
              },
              {
                icon: Plug,
                logoUrl: "input_file_6.png",
                title: 'Integrations',
                items: ['Dynamics 365 Native', 'Microsoft 365 Core', 'Azure Extensions', 'Custom REST APIs']
              }
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-bg p-12 hover:bg-brand-surface transition-colors h-full flex flex-col"
              >
                <div className="mb-8 flex items-center justify-between">
                  {service.logoUrl ? (
                    <div className="flex items-center gap-4">
                      <img 
                        src={service.logoUrl} 
                        alt={service.title} 
                        className="w-10 h-10 transition-all duration-500 hover:scale-110" 
                        referrerPolicy="no-referrer" 
                      />
                      {service.hasCopilot && (
                        <div className="flex items-center gap-2 px-2 py-0.5 border border-brand-ink/10 bg-brand-surface rounded-full">
                          <img src="input_file_1.png" alt="Copilot" className="w-4 h-4" referrerPolicy="no-referrer" />
                          <span className="text-[7px] font-black uppercase tracking-widest text-brand-muted">Copilot</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <service.icon size={32} className="text-brand-muted" />
                  )}
                </div>
                <h3 className="text-2xl font-black uppercase mb-8 text-brand-ink italic">{service.title}</h3>
                <ul className="space-y-4 mb-8">
                  {service.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-muted">
                      <ChevronRight size={12} className="text-brand-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* architecture diagram */}
      <section className="py-32 px-6 bg-brand-surface border-y border-brand-border transition-colors">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-brand-ink mb-6 uppercase transition-colors">Unified Architecture</h2>
              <p className="text-brand-muted font-medium mb-16 text-balance max-w-2xl mx-auto">
                Our solutions sit atop Microsoft Dataverse (common data layer). User-facing Power Apps read/write data to Dataverse, while Power Automate flows handle backend processes and system integrations.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="p-8 md:p-16 border border-brand-border bg-brand-bg rounded-none transition-colors overflow-x-auto"
            >
              {/* Mermaid Diagram as SVG */}
              <svg width="100%" height="auto" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[700px]">
                {/* Connection Labels BG */}
                <rect x="170" y="85" width="60" height="12" rx="4" className="fill-brand-bg" />
                <rect x="170" y="285" width="60" height="12" rx="4" className="fill-brand-bg" />
                <rect x="360" y="185" width="80" height="12" rx="4" className="fill-brand-bg" />
                <rect x="580" y="145" width="50" height="12" rx="4" className="fill-brand-bg" />
                <rect x="580" y="245" width="50" height="12" rx="4" className="fill-brand-bg" />
                <rect x="580" y="345" width="60" height="12" rx="4" className="fill-brand-bg" />

                {/* Connections */}
                <path d="M150 100 H250" stroke="var(--color-brand-border)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M150 300 H250" stroke="var(--color-brand-border)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M350 200 H450" stroke="var(--color-brand-ink)" strokeWidth="2" />
                <path d="M550 160 H650" stroke="var(--color-brand-border)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M550 260 H650" stroke="var(--color-brand-border)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M510 210 V360 H650" stroke="var(--color-brand-border)" strokeWidth="1" markerEnd="url(#arrow)" />
                
                {/* Connection Text Labels */}
                <text x="200" y="93" textAnchor="middle" fill="var(--color-brand-muted)" fontSize="8" className="uppercase font-bold tracking-widest">I/O</text>
                <text x="200" y="293" textAnchor="middle" fill="var(--color-brand-muted)" fontSize="8" className="uppercase font-bold tracking-widest">I/O</text>
                <text x="400" y="193" textAnchor="middle" fill="var(--color-brand-ink)" fontSize="8" className="uppercase font-bold tracking-widest">Triggers</text>
                <text x="605" y="153" textAnchor="middle" fill="var(--color-brand-muted)" fontSize="8" className="uppercase font-bold tracking-widest">Uplink</text>
                <text x="605" y="253" textAnchor="middle" fill="var(--color-brand-muted)" fontSize="8" className="uppercase font-bold tracking-widest">Uplink</text>
                <text x="610" y="353" textAnchor="middle" fill="var(--color-brand-muted)" fontSize="8" className="uppercase font-bold tracking-widest">Telemetry</text>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-brand-muted)" />
                  </marker>
                </defs>

                {/* Subgraph User Apps */}
                <rect x="20" y="50" width="160" height="340" stroke="var(--color-brand-border)" strokeWidth="0.5" className="fill-brand-surface opacity-10" />
                <text x="30" y="40" fill="var(--color-brand-muted)" fontSize="10" className="uppercase font-black tracking-widest">User Apps</text>
                
                <rect x="40" y="80" width="120" height="40" className="fill-brand-bg stroke-brand-border" />
                <text x="100" y="105" textAnchor="middle" fill="var(--color-brand-ink)" fontSize="10" className="uppercase font-black italic">Canvas App</text>
                
                <rect x="40" y="280" width="120" height="40" className="fill-brand-bg stroke-brand-border" />
                <text x="100" y="305" textAnchor="middle" fill="var(--color-brand-ink)" fontSize="10" className="uppercase font-black italic">Model-Driven</text>

                {/* Dataverse Center */}
                <rect x="250" y="180" width="100" height="40" className="fill-brand-ink" />
                <text x="300" y="205" textAnchor="middle" fill="var(--color-brand-bg)" fontSize="10" className="uppercase font-black italic">Dataverse</text>

                {/* Workflows */}
                <rect x="450" y="150" width="120" height="100" stroke="var(--color-brand-border)" strokeWidth="0.5" className="fill-brand-surface opacity-10" />
                <text x="460" y="140" fill="var(--color-brand-muted)" fontSize="10" className="uppercase font-black tracking-widest">Workflows</text>
                
                <rect x="460" y="180" width="100" height="40" className="fill-brand-bg stroke-brand-border" />
                <text x="510" y="205" textAnchor="middle" fill="var(--color-brand-ink)" fontSize="10" className="uppercase font-black italic">Flows</text>

                {/* External/Output */}
                <rect x="640" y="100" width="140" height="300" stroke="var(--color-brand-border)" strokeWidth="0.5" className="fill-brand-surface opacity-10" />
                <text x="650" y="90" fill="var(--color-brand-muted)" fontSize="10" className="uppercase font-black tracking-widest">Extensions</text>

                <rect x="650" y="140" width="120" height="40" className="fill-brand-bg stroke-brand-border" />
                <text x="710" y="165" textAnchor="middle" fill="var(--color-brand-muted)" fontSize="9" className="uppercase font-black">Office 365</text>
                
                <rect x="650" y="240" width="120" height="40" className="fill-brand-bg stroke-brand-border" />
                <text x="710" y="265" textAnchor="middle" fill="var(--color-brand-muted)" fontSize="9" className="uppercase font-black">Azure Cloud</text>

                <rect x="650" y="340" width="120" height="40" className="fill-brand-bg stroke-brand-border" />
                <text x="710" y="365" textAnchor="middle" fill="var(--color-brand-muted)" fontSize="9" className="uppercase font-black">Power BI</text>
              </svg>
            </motion.div>
        </div>
      </section>

      {/* Case Studies / Use Cases */}
      <section id="use-cases" className="py-32 px-6 bg-brand-bg transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24 text-center">
            <h2 className="text-4xl md:text-7xl font-black tracking-tight text-brand-ink mb-6 uppercase italic transition-colors leading-[0.9]">Operational <br /><span className="text-brand-muted opacity-30">Validation</span></h2>
          </motion.div>

          <div className="space-y-32">
            {[
              {
                title: "Automated Invoice Processing",
                desc: "100,000+ invoices/month from 100+ vendors in 300+ formats. We built an automated pipeline using AI Builder and Power Apps.",
                result: "96% extraction accuracy and 70%+ reduction in manual costs.",
                color: "bg-neutral-900",
                icon: Zap
              },
              {
                title: "Employee Onboarding Automation",
                desc: "A global firm of 6,000 employees struggled with slow IT setup. We implemented 'Launchpad', a Dataverse-backed automation suite.",
                result: "Instant tool access for new hires and significant IT resource recovery.",
                color: "bg-neutral-800",
                icon: Smartphone
              },
              {
                title: "Healthcare Scheduling & Billing",
                desc: "Replaced paper-based scheduling with Power Apps portals and Copilot agents for 800,000+ patient appointments.",
                result: "Scale-ready clinic infrastructure with zero paper overhead.",
                color: "bg-neutral-700",
                icon: ShieldCheck
              }
            ].map((study, idx) => (
              <motion.div 
                key={study.title}
                {...fadeInUp}
                className={`grid lg:grid-cols-12 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`lg:col-span-7 aspect-video ${study.color} border border-brand-border flex items-center justify-center relative overflow-hidden group`}>
                   <div className="absolute inset-0 bg-brand-ink opacity-0 group-hover:opacity-10 transition-opacity" />
                   <study.icon size={80} className="text-white opacity-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="lg:col-span-5">
                   <h3 className="text-2xl md:text-4xl font-black uppercase mb-8 text-brand-ink italic leading-tight transition-colors">{study.title}</h3>
                   <p className="text-brand-muted text-lg mb-8 font-medium leading-relaxed transition-colors">{study.desc}</p>
                   <div className="p-8 border border-brand-border bg-brand-surface">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted mb-4 transition-colors">Outcome</p>
                      <p className="text-xl font-bold uppercase tracking-tight text-brand-ink italic transition-colors">{study.result}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-brand-surface border-y border-brand-border transition-colors">
        <div className="max-w-7xl mx-auto">
           <motion.div {...fadeInUp} className="mb-24 text-center">
             <h2 className="text-4xl md:text-7xl font-black tracking-tight text-brand-ink mb-6 uppercase underline decoration-brand-border underline-offset-8 transition-colors">Plan to Production</h2>
           </motion.div>
           
           <div className="grid md:grid-cols-5 gap-8">
             {[
               { n: '01', t: 'Discover', d: 'Stakeholder workshops and pain point mapping.' },
               { n: '02', t: 'Design', d: 'Architecture definition and Dataverse schema design.' },
               { n: '03', t: 'Build', d: 'Agile sprints with continuous user feedback.' },
               { n: '04', t: 'Deploy', d: 'Environment setup, training, and smooth launch.' },
               { n: '05', t: 'Optimize', d: 'Monitoring and iterative feature expansion.' }
             ].map((step, idx) => (
               <motion.div 
                key={step.t} 
                {...fadeInUp} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-brand-border bg-brand-bg transition-colors"
               >
                 <span className="text-4xl font-black text-brand-muted opacity-20 transition-colors">{step.n}</span>
                 <h4 className="text-xl font-black uppercase my-6 text-brand-ink italic">{step.t}</h4>
                 <p className="text-[10px] uppercase font-black tracking-widest text-brand-muted leading-relaxed">{step.d}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Platform Ecosystem */}
      <section className="py-24 px-6 border-b border-brand-border transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-all duration-700">
            {[
              { name: 'Power Apps', url: 'input_file_2.png' },
              { name: 'Power Automate', url: 'input_file_3.png' },
              { name: 'Power BI', url: 'input_file_4.png' },
              { name: 'Power Pages', url: 'input_file_5.png' },
              { name: 'Dataverse', url: 'input_file_6.png' },
              { name: 'Dynamics 365', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Microsoft_Dynamics_365.svg' },
              { name: 'Teams', url: 'input_file_7.png' },
              { name: 'SharePoint', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_SharePoint_logo.svg' },
              { name: 'Azure', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' }
            ].map((logo) => (
              <img key={logo.name} src={logo.url} alt={logo.name} title={logo.name} className="h-6 md:h-8 w-auto transition-all hover:scale-125" referrerPolicy="no-referrer" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection items={lowCodeFaqs} title="Solution FAQs" subtitle="Protocol" />

      {/* CTA / Contact */}
      <section id="contact" className="py-32 px-6 bg-brand-surface border-t border-brand-border transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 uppercase italic leading-none transition-colors text-brand-ink italic">Ready to<br /><span className="text-brand-muted opacity-30">Transform?</span></h2>
              <p className="text-xl font-medium text-brand-muted leading-relaxed mb-16 transition-colors">
                Whether you need to streamline workflows in Dynamics 365, build a custom business app, or automate complex processes, our Power Apps solutions can accelerate your outcomes. 
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 border border-brand-border flex items-center justify-center">
                      <Timer className="text-brand-ink" size={20} />
                   </div>
                   <p className="text-xs font-black uppercase tracking-widest text-brand-muted italic transition-colors">Pilot Deployment in Weeks</p>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 border border-brand-border flex items-center justify-center">
                      <ShieldCheck className="text-brand-ink" size={20} />
                   </div>
                   <p className="text-xs font-black uppercase tracking-widest text-brand-muted italic transition-colors">Enterprise Security Protocols</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               {...fadeInUp}
               transition={{ delay: 0.2 }}
               className="p-12 border border-brand-border bg-brand-bg transition-colors"
            >
               <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer minimal info snippet if needed, but App uses a layout */}
    </div>
  );
}
