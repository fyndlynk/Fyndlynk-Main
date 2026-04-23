/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { SquareStack, BarChartHorizontal, CodeSquare, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const services = [
  {
    icon: SquareStack,
    title: 'AI Agents',
    description: 'Autonomous agents engineered to automate complex workflows and facilitate mission-critical decision making.',
    details: ['Neural Automation', 'Synthetic Intelligence', 'Model Governance', 'Agentic Workflows'],
  },
  {
    icon: BarChartHorizontal,
    title: 'Data Analytics',
    description: 'Deep-tier data pipelines and predictive modeling for real-time operational clarity.',
    details: ['ETL Protocols', 'Predictive Modeling', 'Telemetry Design', 'Cloud Data Lakes'],
  },
  {
    icon: CodeSquare,
    title: 'Software Development',
    description: 'Architecting scalable SaaS platforms and resilient web infrastructures using a monochrome design philosophy and ultra-modern tech stacks.',
    details: ['Micro-frontend Architecture', 'API Mesh Implementation', 'Infrastructure as Code', 'Serverless Compute'],
  }
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-32 px-6 border-y border-brand-border bg-brand-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-brand-ink mb-6 uppercase italic transition-colors">Expertise</h2>
          <div className="w-20 h-1 bg-brand-ink transition-colors" />
        </motion.div>

        <div className="divide-y divide-brand-border border-y border-brand-border">
          {services.map((service, idx) => (
            <div key={service.title} className="bg-brand-bg transition-colors overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 md:p-12 text-left hover:bg-brand-surface transition-colors group"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <service.icon className={`text-brand-muted transition-colors ${openIndex === idx ? 'text-brand-ink' : ''}`} size={32} />
                  <h3 className="text-2xl md:text-5xl font-black uppercase text-brand-ink transition-colors group-hover:italic">{service.title}</h3>
                </div>
                <div>
                  {openIndex === idx ? <Minus className="text-brand-ink" /> : <Plus className="text-brand-ink" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 md:px-12 pb-12 md:pb-20 ml-0 md:ml-24">
                      <div className="grid md:grid-cols-2 gap-12 items-start">
                        <p className="text-brand-muted text-lg md:text-xl leading-relaxed font-medium transition-colors">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {service.details.map((detail) => (
                            <div key={detail} className="p-4 border border-brand-border text-[10px] font-black uppercase tracking-widest text-brand-ink hover:bg-brand-surface transition-colors flex items-center justify-center text-center">
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
