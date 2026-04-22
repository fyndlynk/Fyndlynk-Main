/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Terminal, BarChart3, Code2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 border-y border-brand-border bg-brand-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-brand-ink mb-6 uppercase italic transition-colors">Expertise</h2>
          <div className="w-20 h-1 bg-brand-ink transition-colors" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-brand-border">
          {/* Service 1 - Large Bento */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-8 bg-brand-bg p-12 flex flex-col justify-between hover:bg-brand-surface transition-colors duration-300"
          >
            <div>
              <Terminal className="text-brand-muted mb-16 transition-colors" size={32} />
              <h3 className="text-4xl font-black uppercase mb-8 text-brand-ink transition-colors">AI Agents</h3>
              <p className="text-brand-muted leading-relaxed max-w-lg mb-12 font-medium transition-colors">
                Autonomous agents engineered to automate complex workflows and facilitate mission-critical decision making.
              </p>
            </div>
            <div className="flex flex-wrap gap-10">
              {['Automation', 'Intelligence', 'Governance'].map((item) => (
                <div key={item} className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-ink transition-colors">
                  // {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service 2 - Small Bento */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-brand-bg p-12 border-l border-brand-border hover:bg-brand-surface transition-colors duration-300"
          >
            <BarChart3 className="text-brand-muted mb-16 transition-colors" size={32} />
            <h3 className="text-2xl font-black uppercase mb-6 text-brand-ink text-balance transition-colors">Data Analytics</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-10 font-medium transition-colors">
              Deep-tier data pipelines and predictive modeling for real-time operational clarity.
            </p>
            <div className="w-12 h-1 bg-brand-border" />
          </motion.div>

          {/* Service 3 - Bottom Bento */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 bg-brand-bg p-12 border-t border-brand-border flex flex-col md:flex-row gap-16 md:items-center hover:bg-brand-surface transition-colors duration-300"
          >
            <div className="flex-1">
              <Code2 className="text-brand-muted mb-8 transition-colors" size={32} />
              <h3 className="text-4xl font-black uppercase mb-4 text-brand-ink transition-colors">Software Development</h3>
              <p className="text-brand-muted leading-relaxed max-w-xl font-medium transition-colors">
                Architecting scalable SaaS platforms and resilient web infrastructures using a monochrome design philosophy and ultra-modern tech stacks.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 text-brand-ink">
              {['Arch', 'SaaS', 'API', 'Infra'].map(item => (
                <div key={item} className="p-5 border border-brand-border text-[10px] font-black uppercase tracking-widest flex items-center justify-center hover:bg-brand-surface transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
