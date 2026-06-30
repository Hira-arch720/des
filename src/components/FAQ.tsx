import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What is SnapDel?',
    a: 'SnapDel is a global transportation marketplace that connects customers with transporters offering vehicle-based services. Transporters can list any vehicle type — car, van, truck, boat, crane, ATV, motorcycle, trailer, or equipment — and get hired by individuals or businesses.',
  },
  {
    q: 'How does SnapDel work?',
    a: 'Search by category (e.g., Moving) and location to see relevant listings. Compare profiles, reviews, vehicle types, and pricing, then message transporters directly to confirm details and book your service.',
  },
  {
    q: 'Does SnapDel charge commissions or fees?',
    a: 'Currently, SnapDel is free to use for both customers and transporters. We do not charge commissions on jobs. Future premium features may be introduced.',
  },
  {
    q: 'What is the escrow payment system?',
    a: 'Coming soon — secure escrow payments will be held until job completion, then released to the transporter. Right now, you pay the transporter directly after agreeing on terms.',
  },
  {
    q: 'How are transporters verified?',
    a: 'Transporters provide details and vehicle info during onboarding. Check ratings, reviews, and profile completeness to make informed choices before booking.',
  },
  {
    q: 'Is SnapDel responsible for job performance or outcomes?',
    a: 'No. SnapDel is a marketplace and not a party to the job. We don\'t oversee performance and assume no liability for damages, delays, losses, or non-performance. Resolve issues directly with your chosen transporter.',
  },
  {
    q: 'Can I message transporters before hiring?',
    a: 'Yes — our in-platform messaging is rolling out so you can communicate, ask for quotes, and align expectations without leaving SnapDel.',
  },
];

const FAQItem: React.FC<{ faq: typeof faqs[0]; index: number; isOpen: boolean; toggle: () => void }> = ({
  faq,
  index,
  isOpen,
  toggle,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06 }}
    className={`bg-white/[0.02] border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-[#F97316]/30 bg-white/[0.04]' : 'border-white/[0.06] hover:border-white/[0.1]'
    }`}
  >
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between p-6 text-left"
    >
      <span className="text-base sm:text-lg font-bold text-white pr-4">{faq.q}</span>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-[#F97316] rotate-180' : 'bg-white/5'
        }`}
      >
        <ChevronDown size={18} className={isOpen ? 'text-white' : 'text-gray-400'} />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 text-gray-400 leading-relaxed text-[15px]">
            {faq.a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F97316]/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          >
            <HelpCircle size={14} />
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Everything you need to know about SnapDel.
          </motion.p>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all active:scale-[0.97]">
            Read All FAQs →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
