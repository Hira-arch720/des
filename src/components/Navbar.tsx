import React, { useState, useEffect } from 'react';
import { Menu, X, Truck, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Find Transporters', href: '#transporters' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'FAQs', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] p-2.5 rounded-xl shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#0B1120] animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tight">
                SNAP<span className="text-[#F97316]">DEL</span>
              </span>
              <div className="text-[9px] text-gray-500 tracking-[0.3em] uppercase -mt-0.5 font-medium">
                Transport Marketplace
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
              Log In
            </a>
            <button className="group relative bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-6 py-2.5 rounded-xl font-bold text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]">
              <span className="relative z-10 flex items-center gap-1.5">
                Become a Transporter
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#EA580C] to-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1120]/98 backdrop-blur-2xl overflow-hidden border-b border-white/5"
          >
            <div className="px-6 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-4 text-base font-medium text-gray-300 hover:text-white border-b border-white/5 transition-colors"
                >
                  {link.label}
                  <ChevronRight size={16} className="text-gray-600" />
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                <button className="w-full py-3.5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/5 transition-colors">
                  Log In
                </button>
                <button className="w-full py-3.5 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-xl text-white font-bold shadow-lg shadow-orange-500/20">
                  Become a Transporter
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
