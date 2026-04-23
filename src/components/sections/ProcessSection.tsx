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

export default function ProcessSection() {
  return (
    <section id="about" className="py-32 px-6 bg-brand-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-32 text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tight text-brand-ink mb-8 uppercase italic underline decoration-brand-border underline-offset-8 text-balance transition-colors">The Protocol</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-px bg-brand-border">
          {[
            { title: 'Analyze', desc: 'Identify core workflow constraints.' },
            { title: 'Architect', desc: 'Define system scaling parameters.' },
            { title: 'Execute', desc: 'Neural build and deployment cycles.' },
            { title: 'Optimize', desc: 'Continuous telemetry and iteration.' },
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-bg p-12 hover:bg-brand-surface transition-all group"
            >
              <h4 className="text-xl font-black uppercase mb-6 text-brand-ink transition-colors">{item.title}</h4>
              <p className="text-sm text-brand-muted font-medium leading-relaxed transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
