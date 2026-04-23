/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function BlogSection() {
  const posts = [
    {
      title: "The Zero-Trust Agent Architecture",
      slug: "zero-trust-agent-architecture",
      description: "Exploring secure, autonomous frameworks for mission-critical AI deployments in enterprise environments. We examine the intersection of identity-based security and agentic autonomy.",
    },
    {
      title: "Data Obsolescence in AI",
      slug: "data-obsolescence-in-ai",
      description: "How to maintain high-signal data pipelines in a rapidly evolving synthetic intelligence landscape. Learn strategies for pruning low-value data and prioritizing real-time telemetry.",
    },
    {
      title: "Rapid Scale Protocols",
      slug: "rapid-scale-protocols",
      description: "Systematic engineering approaches to scaling SaaS infrastructure from zero to millions of requests. A deep dive into micro-frontend isolation and serverless compute orchestration.",
    }
  ];

  return (
    <section id="blog" className="py-32 px-6 border-y border-brand-border bg-brand-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-24 flex items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-brand-ink mb-6 uppercase italic transition-colors">Latest Insights</h2>
            <div className="w-20 h-1 bg-brand-ink transition-colors" />
          </div>
          <Newspaper className="text-brand-muted opacity-20 hidden md:block" size={80} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border overflow-hidden">
          {posts.map((post, idx) => (
            <motion.div 
              key={post.title}
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-bg p-12 hover:bg-brand-surface transition-colors group h-full flex flex-col justify-between"
            >
              <div className="mb-12">
                <h3 className="text-2xl font-black uppercase mb-6 text-brand-ink transition-colors group-hover:italic leading-tight">
                  {post.title}
                </h3>
                <p className="text-brand-muted text-sm font-medium leading-relaxed mb-10 transition-colors">
                  {post.description}
                </p>
              </div>
              
              <Link 
                to={`/blog/${post.slug}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink group-hover:gap-5 transition-all"
              >
                Read More
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
