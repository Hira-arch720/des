import React from 'react';
import { Star, MapPin, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ListingItem {
  name: string;
  location: string;
  price: string;
  unit: string;
  category: string;
  user: string;
  image: string;
  rating: string;
  reviews: number;
  verified: boolean;
}

const transporters: ListingItem[] = [
  {
    name: 'Mizell Courier Services',
    location: 'United States',
    price: '20',
    unit: '/hr',
    category: 'Delivery & Courier',
    user: 'Michael Mizell',
    image: 'https://images.pexels.com/photos/6169177/pexels-photo-6169177.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    rating: '4.9',
    reviews: 24,
    verified: true,
  },
  {
    name: 'Express Freight Pro',
    location: 'Toronto, Canada',
    price: '150',
    unit: '/trip',
    category: 'Road Freight',
    user: 'David Chen',
    image: 'https://images.pexels.com/photos/31310062/pexels-photo-31310062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    rating: '4.8',
    reviews: 42,
    verified: true,
  },
  {
    name: 'Heavy Haulage Ltd',
    location: 'London, UK',
    price: '300',
    unit: '/job',
    category: 'Specialist Transport',
    user: 'Sarah Jenkins',
    image: 'https://images.pexels.com/photos/12418932/pexels-photo-12418932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    rating: '5.0',
    reviews: 18,
    verified: true,
  },
  {
    name: 'Pacific Moving Co',
    location: 'Sydney, AU',
    price: '85',
    unit: '/hr',
    category: 'Moving Services',
    user: 'James O\'Brien',
    image: 'https://images.pexels.com/photos/7464643/pexels-photo-7464643.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    rating: '4.7',
    reviews: 56,
    verified: false,
  },
];

const vehicles: ListingItem[] = [
  {
    name: 'Ford F350 Super Duty',
    location: 'California, US',
    price: 'Contact',
    unit: '',
    category: 'Pickup Truck',
    user: 'Stephen Weikert',
    image: 'https://images.pexels.com/photos/15379824/pexels-photo-15379824.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    rating: '4.9',
    reviews: 12,
    verified: true,
  },
  {
    name: 'Mercedes Sprinter Van',
    location: 'Berlin, Germany',
    price: '85',
    unit: '/day',
    category: 'Cargo Van',
    user: 'Hans Weber',
    image: 'https://images.pexels.com/photos/7363099/pexels-photo-7363099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    rating: '4.6',
    reviews: 31,
    verified: true,
  },
  {
    name: 'Kenworth W900 Semi',
    location: 'Texas, US',
    price: '500',
    unit: '/job',
    category: 'Semi Truck',
    user: 'Robert Davis',
    image: 'https://images.pexels.com/photos/14521061/pexels-photo-14521061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    rating: '4.8',
    reviews: 8,
    verified: false,
  },
  {
    name: 'Flatbed Recovery Truck',
    location: 'Dubai, UAE',
    price: '120',
    unit: '/trip',
    category: 'Tow Truck',
    user: 'Ahmed Al-Rashid',
    image: 'https://images.pexels.com/photos/11808227/pexels-photo-11808227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    rating: '4.9',
    reviews: 45,
    verified: true,
  },
];

const ListingCard: React.FC<{ item: ListingItem; index: number }> = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-500"
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute top-3 left-3">
        <span className="bg-black/40 backdrop-blur-xl text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10">
          {item.category}
        </span>
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-xl text-white text-xs font-bold px-2.5 py-1.5 rounded-lg border border-white/10">
        <Star size={12} className="text-yellow-400 fill-yellow-400" />
        {item.rating}
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-white/80 text-sm">
          <MapPin size={13} />
          {item.location}
        </div>
        <div className="text-white font-bold text-lg">
          {item.price !== 'Contact' ? `$${item.price}` : item.price}
          <span className="text-xs text-white/60 font-normal">{item.unit}</span>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">
        {item.name}
      </h3>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 overflow-hidden ring-2 ring-white/10">
            <img
              src={`https://i.pravatar.cc/80?u=${item.user}`}
              alt={item.user}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-white flex items-center gap-1.5">
              {item.user}
              {item.verified && (
                <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <div className="text-xs text-gray-500">{item.reviews} reviews</div>
          </div>
        </div>

        <button className="bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-2 rounded-lg text-sm font-bold transition-all active:scale-95 flex items-center gap-1">
          Hire
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  </motion.div>
);

interface ListingSectionProps {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  items: ListingItem[];
}

const ListingSection: React.FC<ListingSectionProps> = ({ id, badge, title, subtitle, items }) => (
  <section id={id} className="py-24 bg-[#0B1120] relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#F97316] font-bold text-sm tracking-widest uppercase mb-3"
          >
            {badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 mt-2"
          >
            {subtitle}
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-[#F97316] font-bold hover:gap-3 transition-all whitespace-nowrap group"
        >
          View All Listings
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <ListingCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export const TransporterListings: React.FC = () => (
  <ListingSection
    id="transporters"
    badge="1,900+ Transporters for hire"
    title="Find Transporters For Hire"
    subtitle="Browse verified transporters across the globe"
    items={transporters}
  />
);

export const VehicleListings: React.FC = () => (
  <ListingSection
    id="vehicles"
    badge="1,500+ Vehicles for hire"
    title="Find Vehicles For Hire"
    subtitle="From pickup trucks to semi-trailers"
    items={vehicles}
  />
);
