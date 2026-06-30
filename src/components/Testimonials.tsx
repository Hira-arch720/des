import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Carlos Mendez',
    role: 'Small Business Owner',
    location: 'Mexico City, MX',
    text: 'SnapDel helped me find a reliable freight partner for my e-commerce shipments. The search filters are incredibly specific — I found exactly what I needed in minutes.',
    rating: 5,
    avatar: 1,
  },
  {
    name: 'Priya Sharma',
    role: 'Furniture Store Owner',
    location: 'Mumbai, India',
    text: "We use SnapDel every week for furniture deliveries. The transporter profiles with verified reviews give our customers total confidence. It's changed our business completely.",
    rating: 5,
    avatar: 2,
  },
  {
    name: 'Marcus Thompson',
    role: 'Independent Mover',
    location: 'Atlanta, US',
    text: 'As a transporter, SnapDel gives me a steady stream of local and long-distance moving jobs. The platform is simple and the customers are great. Highly recommend.',
    rating: 5,
    avatar: 3,
  },
  {
    name: 'Aisha Okonkwo',
    role: 'Logistics Coordinator',
    location: 'Lagos, Nigeria',
    text: "Finding reliable couriers in Lagos used to be a nightmare. SnapDel's marketplace completely changed that. I can now compare, message, and book all in one place.",
    rating: 5,
    avatar: 4,
  },
  {
    name: 'Thomas Mueller',
    role: 'Crane Operator',
    location: 'Frankfurt, DE',
    text: "I listed my crane services on SnapDel and within a week I had three new clients. The exposure to international customers is something I couldn't get anywhere else.",
    rating: 5,
    avatar: 5,
  },
  {
    name: 'Emily Zhang',
    role: 'Event Planner',
    location: 'Vancouver, CA',
    text: "We needed a flatbed truck for event setup on short notice. SnapDel's search made it easy to find a local provider with availability. Will definitely use again.",
    rating: 4,
    avatar: 6,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-28 bg-[#0F1629] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F97316]/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Loved by transporters &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">
              customers
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            See what our community has to say about their experience on SnapDel.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={j < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-700'}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed flex-1 text-[15px] mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] overflow-hidden">
                  <img
                    src={`https://i.pravatar.cc/80?u=snap${t.avatar}`}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
