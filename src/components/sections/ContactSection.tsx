/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import ContactForm from '../ui/ContactForm';
import { MapPin, Mail, Globe } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-brand-border bg-brand-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 uppercase italic leading-none transition-colors text-brand-ink">Contact</h2>
            <p className="text-base md:text-lg font-bold uppercase tracking-widest mb-16 text-brand-muted transition-colors">
              Operational excellence starts here. Deploy your mission parameters through our encrypted terminal.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-ink mt-1" size={20} />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-2">Network Hub</p>
                  <p className="text-xl font-black uppercase italic text-brand-ink">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-ink mt-1" size={20} />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-2">Digital Uplink</p>
                  <p className="text-xl font-black uppercase italic text-brand-ink">hello@fyndlynk.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="text-brand-ink mt-1" size={20} />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-2">Availability</p>
                  <p className="text-xl font-black uppercase italic text-brand-ink transition-colors">Global // 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="p-10 border border-brand-border bg-brand-surface transition-all"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
