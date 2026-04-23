/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Smartphone, Zap, Database, ArrowUpRight, LayoutGrid, Layers } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function PowerAppsPage() {
  return (
    <div className="pt-20 bg-brand-bg transition-colors duration-300">
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="w-1.5 h-1.5 bg-brand-muted" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Resource.Expansion // PowerPlatform</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.85] mb-12 text-brand-ink italic transition-colors">
              BUSINESS APPS.<br />
              <span className="text-brand-muted opacity-20">STARK SCALE.</span>
            </h1>
            <p className="text-base text-brand-muted leading-relaxed mb-16 max-w-xl font-medium transition-colors">
              We architect custom internal tools and automate business processes using the Microsoft Power Platform. No fluff, just resilient infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-32 px-6 border-y border-brand-border bg-brand-surface transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-px bg-brand-border">
            <motion.div {...fadeInUp} className="md:col-span-12 bg-brand-bg p-12 flex flex-col md:flex-row gap-16 items-center transition-colors">
              <div className="flex-1">
                <h2 className="text-4xl font-black uppercase mb-8 text-brand-ink italic transition-colors">Automate</h2>
                <p className="text-brand-muted leading-relaxed font-medium transition-colors">
                  De-provision legacy spreadsheet dependencies. We create bespoke applications tailored to your specific workflows that integrate directly with your existing Microsoft tenant.
                </p>
              </div>
              <div className="flex-1 w-full bg-brand-surface aspect-video flex items-center justify-center transition-colors">
                 <LayoutGrid size={48} className="text-brand-muted opacity-20 transition-colors" />
              </div>
            </motion.div>

            {[
              { icon: Smartphone, title: 'Mobile Ops', desc: 'Secure field service and reporting tools accessible globally.' },
              { icon: Zap, title: 'Protocol Flows', desc: 'Neural data entry protocols via Power Automate triggers.' },
              { icon: Database, title: 'Data Lake', desc: 'Bridge SharePoint, Dataverse, and Azure SQL seamlessly.' },
            ].map((item, idx) => (
              <motion.div 
                key={item.title} 
                {...fadeInUp} 
                transition={{ delay: idx * 0.1 }}
                className="md:col-span-4 bg-brand-bg p-12 hover:bg-brand-surface transition-colors"
              >
                <item.icon size={28} className="text-brand-muted mb-8 transition-colors" />
                <h4 className="text-xl font-black uppercase mb-4 text-brand-ink transition-colors">{item.title}</h4>
                <p className="text-sm text-brand-muted leading-relaxed font-medium transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-brand-bg transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-32">
            <motion.div {...fadeInUp} className="flex-1">
              <h3 className="text-4xl font-black uppercase mb-10 text-brand-ink italic transition-colors">Deployment</h3>
              <p className="text-brand-muted leading-relaxed mb-12 font-medium transition-colors">
                Our approach to PowerApps is focused on high-speed delivery without sacrificing security or scalability. We guide you through the entire lifecycle—from environment setup to user adoption.
              </p>
              <div className="space-y-6">
                 {['Governance Protocol', 'System UX', 'Connector Strategy'].map(li => (
                   <div key={li} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-ink transition-colors">
                     <div className="w-1 h-1 bg-brand-ink transition-colors" />
                     {li}
                   </div>
                 ))}
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex-1 bg-brand-surface p-16 border border-brand-border transition-colors">
               <h4 className="text-2xl font-black uppercase mb-12 text-brand-ink italic transition-colors">// Outcomes</h4>
               <div className="space-y-10">
                  {[
                    { l: 'Efficiency', v: '90% Data Task Reduction' },
                    { l: 'Visibility', v: 'Real-time Telemetry' },
                    { l: 'Control', v: 'Unified Governance' }
                  ].map(item => (
                    <div key={item.l}>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted mb-2 block transition-colors">{item.l}</span>
                      <p className="text-brand-ink text-xl font-black uppercase italic tracking-tight transition-colors">{item.v}</p>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-brand-border bg-brand-bg transition-colors">
        <div className="max-w-7xl mx-auto text-center">
           <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-16 text-brand-ink text-balance leading-none transition-colors">MODERNIZE<br /><span className="text-brand-muted opacity-20">NOW</span></h2>
              <button className="px-20 py-6 bg-brand-ink text-brand-bg font-black uppercase tracking-[0.3em] text-sm hover:scale-105 active:scale-95 transition-all outline-none">
                Start Protocol
              </button>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
