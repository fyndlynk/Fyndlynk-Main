/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqSection({ items, title = "Common Queries", subtitle = "Faq" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section className="py-32 px-6 bg-brand-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-brand-ink" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-muted">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-brand-ink transition-colors leading-none">{title}</h2>
        </motion.div>

        <div className="space-y-px bg-brand-border border border-brand-border">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.05 }}
              className="bg-brand-bg transition-colors"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 px-8 flex items-center justify-between text-left group hover:bg-brand-surface transition-colors"
              >
                <span className="text-sm md:text-lg font-black uppercase italic tracking-tight text-brand-ink transition-colors">
                  {item.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus size={20} className="text-brand-ink" />
                  ) : (
                    <Plus size={20} className="text-brand-muted group-hover:text-brand-ink transition-colors" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-brand-muted text-sm md:text-base leading-relaxed font-medium transition-colors">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
