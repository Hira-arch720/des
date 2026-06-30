import React from 'react';
import { Search, UserCheck, Handshake, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Search,
    title: 'Search & Discover',
    desc: 'Browse transporters by location, vehicle type, or service category. Filter results to find the perfect match for your needs.',
    color: 'from-blue-500 to-blue-600',
    num: '01',
  },
  {
    icon: UserCheck,
    title: 'Review Profiles',
    desc: 'Check ratings, reviews, vehicle photos, and verified credentials before making your choice. Compare multiple providers.',
    color: 'from-[#F97316] to-[#EA580C]',
    num: '02',
  },
  {
    icon: Handshake,
    title: 'Hire & Communicate',
    desc: 'Message transporters directly, confirm details, agree on pricing, and book your service — all within the platform.',
    color: 'from-emerald-500 to-emerald-600',
    num: '03',
  },
  {
    icon: Star,
    title: 'Complete & Review',
    desc: 'Once the job is done, rate your experience and help the community make better choices. Secure escrow payments coming soon.',
    color: 'from-purple-500 to-purple-600',
    num: '04',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-28 bg-[#0B1120] relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F97316]/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          >
            HOW IT WORKS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Simple. Fast.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">
              Reliable.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Get from search to booked in minutes. No hidden fees, no guesswork — just the right transporter for your job.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[70px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 h-full">
                {/* Num */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors">
                  {step.num}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <step.icon className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-[15px]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
