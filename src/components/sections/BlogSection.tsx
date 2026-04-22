/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-32 px-6 border-y border-brand-border bg-brand-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-brand-ink mb-6 uppercase italic transition-colors">Insights</h2>
          <div className="w-20 h-1 bg-brand-ink transition-colors" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-brand-border">
          {[
            {
              title: "The Zero-Trust Agent Architecture",
              category: "Engineering",
              date: "22.04.26",
              colSpan: "md:col-span-7",
            },
            {
              title: "Data Obsolescence in AI",
              category: "Research",
              date: "18.04.26",
              colSpan: "md:col-span-5",
            },
            {
              title: "Rapid Scale Protocols",
              category: "Ops",
              date: "12.04.26",
              colSpan: "md:col-span-5",
            },
            {
              title: "Resilient UI Standards",
              category: "Design",
              date: "05.04.26",
              colSpan: "md:col-span-7",
            }
          ].map((post, idx) => (
            <motion.div 
              key={post.title}
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className={`${post.colSpan} bg-brand-bg p-12 hover:bg-brand-surface transition-colors group cursor-pointer`}
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">// {post.category}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">{post.date}</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black uppercase mb-8 text-brand-ink transition-colors group-hover:italic">{post.title}</h3>
              <div className="flex items-center gap-2 text-brand-ink opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Read Full Protocol</span>
                <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
