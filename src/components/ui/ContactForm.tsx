/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-ink p-12 text-brand-bg text-center">
        <h3 className="text-2xl font-black uppercase italic mb-4">Message Logged</h3>
        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-8">Protocol initiated. We will respond shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-[10px] font-black uppercase tracking-[0.3em] border-b border-brand-bg hover:opacity-70 transition-opacity"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500">Full Name</label>
          <input
            required
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full bg-brand-bg border border-brand-border p-4 text-brand-ink text-sm outline-none focus:border-brand-ink transition-colors placeholder:text-neutral-800"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500">Email Address</label>
          <input
            required
            type="email"
            id="email"
            placeholder="john@protocol.io"
            className="w-full bg-brand-bg border border-brand-border p-4 text-brand-ink text-sm outline-none focus:border-brand-ink transition-colors placeholder:text-neutral-800"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500">Execution Subject</label>
        <select
          id="subject"
          className="w-full bg-brand-bg border border-brand-border p-4 text-brand-ink text-sm outline-none focus:border-brand-ink transition-colors appearance-none"
        >
          <option>AI Automation Strategy</option>
          <option>Custom Software Core</option>
          <option>Data Infrastructure</option>
          <option>Corporate Inquiry</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500">Transmission</label>
        <textarea
          required
          id="message"
          rows={4}
          placeholder="Describe your system requirements..."
          className="w-full bg-brand-bg border border-brand-border p-4 text-brand-ink text-sm outline-none focus:border-brand-ink transition-colors resize-none placeholder:text-neutral-800"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sharp-btn-primary flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === 'submitting' ? 'Logging Message...' : (
          <>
            Initialize Transmission
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}
