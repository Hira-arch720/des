import React from 'react';
import { Globe, ShieldCheck, Clock, Truck, Zap, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Globe,
    title: 'Global Coverage',
    desc: 'Access verified transporters across 190+ countries. From local couriers to international freight.',
    gradient: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    borderColor: 'group-hover:border-blue-500/30',
  },
  {
    icon: ShieldCheck,
    title: 'Escrow Payments',
    desc: 'Secure payment protection coming soon. Funds held safely until the job is completed to your satisfaction.',
    gradient: 'from-[#F97316]/20 to-[#F97316]/5',
    iconColor: 'text-[#F97316]',
    borderColor: 'group-hover:border-[#F97316]/30',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    desc: 'Our dedicated team is always available. Get help with bookings, disputes, or any platform questions.',
    gradient: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
    borderColor: 'group-hover:border-purple-500/30',
  },
  {
    icon: Truck,
    title: 'Verified Providers',
    desc: 'Every transporter goes through verification. View ratings, reviews, and credentials before hiring.',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-400',
    borderColor: 'group-hover:border-emerald-500/30',
  },
  {
    icon: Zap,
    title: 'Instant Messaging',
    desc: 'Communicate directly with transporters. Discuss details, get quotes, and confirm bookings in real-time.',
    gradient: 'from-yellow-500/20 to-yellow-600/5',
    iconColor: 'text-yellow-400',
    borderColor: 'group-hover:border-yellow-500/30',
  },
  {
    icon: CreditCard,
    title: 'Free to List',
    desc: 'No subscription fees for transporters. List your vehicles, services, and gigs completely free.',
    gradient: 'from-rose-500/20 to-rose-600/5',
    iconColor: 'text-rose-400',
    borderColor: 'group-hover:border-rose-500/30',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-28 bg-[#0F1629] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316]/[0.03] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] px-4 py-1.5 rounded-full text-sm font-bold mb-6"
            >
              <Globe size={14} />
              GLOBAL NETWORK
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              The world's most{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">
                diverse
              </span>{' '}
              transport marketplace
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 mb-10 leading-relaxed"
            >
              From a motorcycle courier in Lagos to a crane operator in Kazakhstan — SnapDel
              connects every kind of transport provider with customers who need them. No
              middlemen, no markups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all active:scale-[0.97] flex items-center justify-center gap-2">
                Join as Transporter
                <span className="text-lg">→</span>
              </button>
              <button className="text-white px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all">
                Learn More
              </button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-10 pt-8 border-t border-white/5"
            >
              <div>
                <div className="text-3xl font-black text-white">150+</div>
                <div className="text-sm text-gray-500 mt-1">Countries Covered</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">1,900+</div>
                <div className="text-sm text-gray-500 mt-1">Active Transporters</div>
              </div>
            </motion.div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`group bg-white/[0.02] border border-white/[0.06] ${f.borderColor} rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-500 cursor-default`}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4`}
                >
                  <f.icon className={f.iconColor} size={20} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
