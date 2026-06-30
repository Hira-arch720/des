import React from 'react';
import { ChevronRight, Truck, Package, Wrench, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    icon: Truck,
    title: 'Freight & Cargo',
    items: ['Air Freight Cargo', 'Sea Freight Shipping', 'Rail Freight', 'Road Freight', 'Project Cargo', 'All Freight & Cargo'],
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: Wrench,
    title: 'Construction & Industrial',
    items: ['Plant & Machinery', 'Construction Materials', 'Crane Hire & Rigging', 'Demolition Waste', 'Site Logistics', 'All Construction'],
    color: 'from-[#F97316]/20 to-[#F97316]/5',
    iconColor: 'text-[#F97316]',
  },
  {
    icon: Home,
    title: 'Moving & Home',
    items: ['Local Moving', 'Long Distance Moving', 'Furniture Delivery', 'Junk Removal', 'Appliance Moving', 'All Home Services'],
    color: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Package,
    title: 'Specialist Services',
    items: ['Temperature Controlled', 'Hazardous Materials', 'Oversized Loads', 'Medical Transport', 'Pet Transport', 'All Specialist'],
    color: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
  },
];

const vehicleTypes = [
  { label: 'Cargo van', count: '245' },
  { label: 'Pickup truck', count: '189' },
  { label: 'Box truck', count: '156' },
  { label: 'Flatbed', count: '98' },
  { label: 'Semi trailer', count: '134' },
  { label: 'Tow truck', count: '67' },
  { label: 'Crane', count: '45' },
  { label: 'Motorcycle', count: '78' },
  { label: 'Refrigerated truck', count: '34' },
  { label: 'Dump truck', count: '56' },
];

const Categories: React.FC = () => {
  return (
    <section className="py-28 bg-[#0F1629] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Browse Transport{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Explore our categories and find the exact transport service you need.
          </motion.p>
        </div>

        {/* Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5`}
              >
                <cat.icon className={cat.iconColor} size={22} />
              </div>

              <h3 className="text-lg font-bold text-white mb-5">{cat.title}</h3>

              <ul className="space-y-2.5">
                {cat.items.map((item, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2 group/link"
                    >
                      <ChevronRight
                        size={13}
                        className="text-[#F97316]/50 group-hover/link:text-[#F97316] transition-colors"
                      />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Vehicle Types Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Browse by Vehicle Type</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {vehicleTypes.map((v, i) => (
              <button
                key={i}
                className="bg-white/[0.03] border border-white/[0.06] hover:border-[#F97316]/30 hover:bg-[#F97316]/5 text-gray-400 hover:text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
              >
                {v.label}
                <span className="text-gray-600 ml-2 text-xs">({v.count})</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
