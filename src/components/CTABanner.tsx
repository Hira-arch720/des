import React from 'react';
import { ArrowRight, Truck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const CTABanner: React.FC = () => {
  return (
    <section className="relative py-8 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/images/cta-bg.jpg"
              alt="Logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/95 via-[#EA580C]/90 to-[#DC2626]/85" />
          </div>

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 py-16 sm:py-20 px-8 sm:px-16 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Ready to start earning?
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Sign up as a transporter, list your vehicle, and start receiving job requests
                from customers in your area — and around the world.
              </p>

              <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-white/90">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Truck size={16} />
                  </div>
                  <span className="text-sm font-medium">Free to join</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Users size={16} />
                  </div>
                  <span className="text-sm font-medium">1,900+ already earning</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#F97316] px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all shadow-2xl shadow-black/20 active:scale-[0.97] flex items-center gap-2">
                Sign Up Now
                <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
