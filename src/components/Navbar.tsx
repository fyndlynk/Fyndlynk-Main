/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { NavLink, Link } from 'react-router-dom';
import { SquareMenu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!isDark) {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Blog', path: '/#blog' },
    { name: 'Contact', path: '/#contact' },
    { name: 'PowerApps', path: '/powerapps' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-brand-ink flex items-center justify-center transition-colors">
            <span className="text-brand-bg font-black text-xs transition-colors">F</span>
          </div>
          <span className="text-sm font-black tracking-[0.2em] text-brand-ink transition-colors">FYNDLYNK</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-brand-ink ${
                  isActive && link.path === '/powerapps' ? 'text-brand-ink' : 'text-brand-muted'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 flex items-center justify-center border border-brand-border hover:border-brand-ink transition-colors text-brand-ink"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <Link
            to="/#contact"
            className="px-6 py-2 bg-brand-ink text-brand-bg text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-80 transition-all flex items-center gap-2 group"
          >
            Connect
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 flex items-center justify-center border border-brand-border text-brand-ink"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button className="text-brand-ink" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <SquareMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-bg border-b border-brand-border px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-bold uppercase tracking-widest text-brand-muted hover:text-brand-ink"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
