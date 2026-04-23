/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border py-24 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-xs">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="w-5 h-5 bg-brand-ink flex items-center justify-center transition-colors">
              <span className="text-brand-bg font-black text-[10px] transition-colors">F</span>
            </div>
            <span className="text-sm font-black tracking-[0.3em] text-brand-ink transition-colors">FYNDLYNK</span>
          </Link>
          <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted leading-relaxed transition-colors">
            Engineering. Resilience. Speed.<br />The next generation of AI-driven architecture.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          {[
            {
              title: 'Source',
              links: [
                { n: 'Index', p: '/' },
                { n: 'Identity', p: '/#about' },
                { n: 'Systems', p: '/#services' },
              ]
            },
            {
              title: 'Solutions',
              links: [
                { n: 'Low Code', p: '/low-code' },
                { n: 'AI Agents', p: '/' },
                { n: 'Data Ops', p: '/' },
              ]
            },
            {
              title: 'Terminal',
              links: [
                { n: 'Email', p: 'mailto:hello@fyndlynk.com' },
                { n: 'LinkedIn', p: '#' },
                { n: 'X / Twitter', p: '#' },
              ]
            }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink mb-8 transition-colors">{col.title}</h4>
              <ul className="space-y-4 text-[10px] uppercase font-black tracking-widest text-brand-muted">
                {col.links.map((link) => (
                  <li key={link.n}>
                    {link.p.startsWith('mailto') ? (
                      <a href={link.p} className="hover:text-brand-ink transition-colors">{link.n}</a>
                    ) : (
                      <Link to={link.p} className="hover:text-brand-ink transition-colors">{link.n}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between gap-6 text-[9px] uppercase tracking-[0.4em] text-brand-muted font-black transition-colors">
        <p>© 2026 FYNDLYNK. PROTOCOL REGISTERED.</p>
        <div className="flex gap-12">
          <span className="hover:text-brand-ink cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-brand-ink cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </footer>
  );
}
