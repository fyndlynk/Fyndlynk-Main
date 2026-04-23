/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function BlogDetailPage() {
  const { slug } = useParams();

  return (
    <div className="pt-32 pb-32 bg-brand-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...fadeInUp} className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted hover:text-brand-ink transition-colors">
            <ArrowLeft size={12} />
            Back to Index
          </Link>
        </motion.div>

        <motion.article {...fadeInUp} transition={{ delay: 0.1 }}>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 border border-brand-border text-brand-muted">Engineering</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">April 23, 2026</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-brand-ink mb-12 uppercase italic leading-[0.9] transition-colors">
            {slug?.split('-').join(' ') || 'The Zero-Trust Agent Architecture'}
          </h1>

          <div className="flex items-center justify-between py-8 border-y border-brand-border mb-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-border rounded-full flex items-center justify-center">
                 <span className="text-xs font-black">FC</span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase">Fyndlynk Core</p>
                <p className="text-[9px] text-brand-muted uppercase">Protocol Lead</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Share2 size={16} className="text-brand-muted hover:text-brand-ink cursor-pointer transition-colors" />
              <Bookmark size={16} className="text-brand-muted hover:text-brand-ink cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-brand-muted font-medium leading-relaxed mb-10 transition-colors">
              In this protocol briefing, we dissect the architectural requirements for autonomous agent collectives operating under a strict zero-trust identity framework.
            </p>
            <div className="aspect-video bg-brand-surface border border-brand-border mb-16 flex items-center justify-center italic text-brand-muted opacity-30">
              [Visual Protocol Reference: Neural Mesh Isolation]
            </div>
            <h2 className="text-2xl font-black uppercase text-brand-ink mb-6 transition-colors">01. Identity Persistence</h2>
            <p className="text-brand-muted leading-relaxed mb-10 font-medium transition-colors">
              Every synthetic transaction must be cryptographically signed by the originating agent identity. We move beyond simple API keys toward rotating short-lived certificates embedded within the agent's neural runtime. This ensures that even in the event of a cluster breach, individual agent identities remain isolated.
            </p>
            <h2 className="text-2xl font-black uppercase text-brand-ink mb-6 transition-colors">02. Contextual Guardrails</h2>
            <p className="text-brand-muted leading-relaxed mb-10 font-medium transition-colors">
              Logic-first architecture requires that agents operate only within predefined semantic bounds. Our latest research into 'Contextual Envelopes' allows us to define valid operational ranges for model inference output, effectively preventing prompt injection from escalating into system-wide execution.
            </p>
            <blockquote className="border-l-4 border-brand-ink pl-8 my-16 italic text-2xl font-light text-brand-ink transition-colors">
              "The goal isn't just to build intelligence, but to build intelligence that can be trusted with mission-critical state."
            </blockquote>
            <p className="text-brand-muted leading-relaxed mb-10 font-medium transition-colors">
              Closing out the protocol, we find that the future of agentic workflows isn't just about agent-to-agent communication, but about the deterministic verification of those communications at every node.
            </p>
          </div>
        </motion.article>

        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="mt-32 pt-16 border-t border-brand-border">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-muted mb-12">Related Protocol Briefings</h4>
          <div className="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border">
            <div className="bg-brand-bg p-10 hover:bg-brand-surface transition-colors cursor-pointer group">
               <p className="text-[9px] font-black uppercase tracking-widest text-neutral-500 mb-4">Up Next</p>
               <h5 className="text-xl font-black uppercase italic text-brand-ink group-hover:underline decoraion-2">Data Obsolescence in AI</h5>
            </div>
            <div className="bg-brand-bg p-10 hover:bg-brand-surface transition-colors cursor-pointer group">
               <p className="text-[9px] font-black uppercase tracking-widest text-neutral-500 mb-4">Previous</p>
               <h5 className="text-xl font-black uppercase italic text-brand-ink group-hover:underline decoraion-2">Resilient UI Standards</h5>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
