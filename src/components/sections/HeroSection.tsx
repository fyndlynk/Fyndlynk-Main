/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 relative overflow-hidden">
      {/* Modern Minimal Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-brand-border)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none transition-colors" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <div className="w-1.5 h-1.5 bg-brand-ink animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 transition-colors">System.Initialize // Operational</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-[120px] font-black tracking-[-0.04em] leading-[0.85] mb-12 text-brand-ink transition-colors">
            BUILD SMARTER<br />
            <span className="text-brand-muted opacity-20">MOVE FASTER.</span>
          </h1>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-xl mb-16 font-medium transition-colors">
            A high-end engineering partner for AI-driven workflows, intelligent data systems, and scalable software products.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto sharp-btn-primary group">
              <span className="flex items-center justify-center gap-3">
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="w-full sm:w-auto sharp-btn-secondary">
              View Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
