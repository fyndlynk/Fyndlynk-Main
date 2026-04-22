/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import ValueSection from '../components/sections/ValueSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="bg-brand-bg transition-colors duration-300">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ValueSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
