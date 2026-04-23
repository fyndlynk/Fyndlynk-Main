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
import FaqSection from '../components/sections/FaqSection';

const homeFaqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in automating high-complexity environments across finance, legal, logistics, and technology sectors. Our focus is on enterprises that require robust, secure, and scalable digital infrastructure."
  },
  {
    question: "How long does a typical implementation take?",
    answer: "Depending on the complexity, pilot projects often deploy in 4–8 weeks. Full-scale enterprise transformations typically span 3–6 months, following our Plan to Production agile methodology."
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Yes. Every deployment includes a comprehensive documentation package and a dedicated post-launch support period. We also offer ongoing maintenance and optimization protocols to ensure system resilience."
  },
  {
    question: "Can you integrate with our existing legacy systems?",
    answer: "Absolutely. We excel at bridging the gap between legacy infrastructure and modern cloud architecture using custom APIs, middleware, and secure data connectors."
  }
];

export default function HomePage() {
  return (
    <div className="bg-brand-bg transition-colors duration-300">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ValueSection />
      <BlogSection />
      <FaqSection items={homeFaqs} />
      <ContactSection />
    </div>
  );
}
