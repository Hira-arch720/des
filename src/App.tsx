import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import { TransporterListings, VehicleListings } from './components/Listings';
import CTABanner from './components/CTABanner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Categories from './components/Categories';
import Footer from './components/Footer';
import FigmaSpecPortal from './components/FigmaSpecPortal';
import { Layers, Eye, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'website' | 'figma'>('website');

  return (
    <div className="min-h-screen bg-[#070C18] font-sans text-gray-100 selection:bg-[#F97316] selection:text-white antialiased">
      
      {/* Sticky Workspace Selector Control Bar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-3 shadow-2xl">
        <div className="flex items-center gap-1.5 px-2">
          <Sparkles className="text-orange-500 animate-pulse" size={14} />
          <span className="text-[10px] uppercase tracking-wider font-extrabold text-gray-400">Workspace Mode:</span>
        </div>
        <div className="h-4 w-px bg-white/10" />
        <button
          onClick={() => setViewMode('website')}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            viewMode === 'website'
              ? 'bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white shadow-lg shadow-orange-500/10'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Eye size={12} />
          Live Redesign
        </button>
        <button
          onClick={() => setViewMode('figma')}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            viewMode === 'figma'
              ? 'bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white shadow-lg shadow-orange-500/10'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Layers size={12} />
          Figma & PDF Spec
        </button>
      </div>

      {viewMode === 'website' ? (
        <>
          <Navbar />
          <Hero />
          <HowItWorks />
          <Features />
          <TransporterListings />
          <CTABanner />
          <VehicleListings />
          <Testimonials />
          <Categories />
          <FAQ />
          <Footer />
        </>
      ) : (
        <FigmaSpecPortal onViewLive={() => setViewMode('website')} />
      )}
    </div>
  );
};

export default App;
