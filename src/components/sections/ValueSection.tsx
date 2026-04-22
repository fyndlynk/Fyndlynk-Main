/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function ValueSection() {
  return (
    <section className="py-32 px-6 bg-brand-surface border-y border-brand-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-32 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-16 leading-[0.8] text-brand-ink transition-colors">SCALE<br /><span className="text-brand-muted opacity-30">RESILIENCE</span><br />SPEED</h2>
            <div className="space-y-12">
              {[
                { title: 'Result Driven', desc: 'Metric-focused engineering for high-impact growth.' },
                { title: 'Clean Logic', desc: 'Logic-first architecture built for maintainability.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-8">
                  <div className="w-10 h-[1px] bg-brand-ink mt-3 shrink-0 transition-colors" />
                  <div>
                    <h4 className="font-black uppercase text-xl mb-3 text-brand-ink transition-colors">{item.title}</h4>
                    <p className="text-brand-muted text-sm font-medium leading-relaxed transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="border border-brand-border p-16 bg-brand-bg transition-colors"
          >
            <h3 className="text-3xl font-black uppercase mb-12 text-brand-ink italic transition-colors">Objectives</h3>
            <div className="space-y-6">
              {[
                'Process Automation',
                'Internal Tool Efficiency',
                'Predictive Intelligence',
                'Rapid Product Launch'
              ].map((item) => (
                <div key={item} className="flex items-center gap-6 p-6 border-b border-brand-border last:border-0 hover:bg-brand-surface transition-colors">
                  <div className="w-1.5 h-1.5 bg-brand-ink transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest text-brand-muted transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
