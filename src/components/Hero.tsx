import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const tags = ['Truck Hire', 'Moving Services', 'Tow Truck', 'Crane Rental', 'Junk Removal', 'Courier'];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0B1120]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Highway"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/70 to-[#0B1120]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-transparent to-[#0B1120]/60" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-96 h-96 bg-[#F97316]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-blue-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[200px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] px-5 py-2.5 rounded-full text-sm text-gray-300 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
              </span>
              The World's Transportation Marketplace
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.08] mb-8 tracking-tight"
          >
            Find Transporters{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FBBF24]">
                Worldwide
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                  stroke="url(#grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="grad">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            <span className="text-gray-400 text-[0.65em]">Or Get Hired as One</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Search trucks, movers, tow trucks, cranes, freight & transport services globally.
            Join as a transporter and receive job requests instantly.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/[0.07] backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-2 shadow-2xl shadow-black/30">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center px-5 bg-white/[0.05] rounded-xl">
                  <Search className="text-[#F97316] mr-3 flex-shrink-0" size={20} />
                  <input
                    type="text"
                    placeholder="What do you need transported?"
                    className="w-full py-4 bg-transparent outline-none text-white placeholder-gray-500 text-base"
                  />
                </div>
                <div className="flex-1 flex items-center px-5 bg-white/[0.05] rounded-xl">
                  <MapPin className="text-[#F97316] mr-3 flex-shrink-0" size={20} />
                  <input
                    type="text"
                    placeholder="City, country, or zip code"
                    className="w-full py-4 bg-transparent outline-none text-white placeholder-gray-500 text-base"
                  />
                </div>
                <button className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-[0.97] whitespace-nowrap">
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="text-gray-600 text-sm mr-1 py-1">Popular:</span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="text-sm text-gray-500 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] px-4 py-1.5 rounded-full transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { val: '190+', label: 'Countries Covered', icon: '🌍' },
            { val: '1,900+', label: 'Active Transporters', icon: '🚛' },
            { val: '300+', label: 'Vehicle Types', icon: '🔧' },
            { val: '1,500+', label: 'Vehicles Listed', icon: '📦' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all group"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">
                {stat.val}
              </div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
        <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
