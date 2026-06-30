import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { 
  Download, 
  FileText, 
  Layers, 
  Palette, 
  Type, 
  Grid, 
  CheckCircle2, 
  Eye,
  Layout
} from 'lucide-react';

const FigmaSpecPortal: React.FC<{ onViewLive: () => void }> = ({ onViewLive }) => {
  const specRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'spec' | 'wireframes' | 'changelog'>('spec');

  const generatePDF = async () => {
    if (!specRef.current) return;
    setIsGenerating(true);

    try {
      const element = specRef.current;
      // Temporarily unhide elements or set optimal sizes for render if needed
      const canvas = await html2canvas(element, {
        scale: 2, // high quality
        useCORS: true,
        logging: false,
        backgroundColor: '#070C18',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 size width in mm
      const pageHeight = 295; // A4 size height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('SnapDel-Figma-Design-Spec.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070C18] text-white pt-24 pb-20">
      {/* Figma-like workspace UI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Figma Header Control Bar */}
        <div className="bg-[#0F1629] border border-white/5 rounded-2xl p-6 mb-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center">
              <Layers className="text-[#F97316]" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Workspace</span>
                <span className="bg-blue-500/10 text-blue-400 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Figma V2.0</span>
              </div>
              <h1 className="text-2xl font-black tracking-tight">SnapDel Design Spec & PDF Generator</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onViewLive}
              className="flex-1 lg:flex-none bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <Eye size={18} />
              View Live Website
            </button>
            <button
              onClick={generatePDF}
              disabled={isGenerating}
              className="flex-1 lg:flex-none bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#DC2626] text-white px-8 py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98] disabled:opacity-50"
            >
              <Download size={18} className={isGenerating ? 'animate-bounce' : ''} />
              {isGenerating ? 'Generating PDF...' : 'Download Design PDF'}
            </button>
          </div>
        </div>

        {/* Workspace tabs */}
        <div className="flex gap-2 border-b border-white/5 pb-4 mb-10 overflow-x-auto">
          {[
            { id: 'spec', label: 'Design Tokens & UI Kit', icon: Palette },
            { id: 'wireframes', label: 'Figma Component Blueprints', icon: Layout },
            { id: 'changelog', label: 'Detailed Design Changelog', icon: FileText },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#F97316]/10 to-orange-500/5 border border-[#F97316]/20 text-[#F97316]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Printable/Exportable Content Area */}
        <div 
          ref={specRef}
          className="bg-[#0B1120] border border-white/[0.06] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle design grid watermark */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />

          {/* Top Logo spec */}
          <div className="flex justify-between items-start border-b border-white/5 pb-8 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#F97316] flex items-center justify-center text-white font-bold">SD</div>
                <span className="font-extrabold tracking-wider text-white">SNAPDEL REDESIGN SPEC</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Figma System Version 2.0.4</p>
            </div>
            <div className="text-right text-xs text-gray-500">
              <div>PROJECT: SnapDel Canada</div>
              <div>DATE: October 2026</div>
              <div>AUTHOR: Senior UI/UX Engineer</div>
            </div>
          </div>

          {activeTab === 'spec' && (
            <div className="space-y-16">
              {/* Color System */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="text-[#F97316]" size={22} />
                  <h2 className="text-xl font-black tracking-tight">1. Semantic Color Palette Tokens</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { name: 'Brand Orange (Primary)', hex: '#F97316', desc: 'Main interactive CTA & focal elements' },
                    { name: 'Deep Slate (Navy)', hex: '#0B1120', desc: 'Canvas background for depth & hierarchy' },
                    { name: 'Card Fill (Accent)', hex: '#111827', desc: 'Standard item and content container background' },
                    { name: 'Text Dark Theme', hex: '#F3F4F6', desc: 'Main high-contrast body & titles copy' },
                  ].map((color, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                      <div className="h-24 rounded-xl mb-4" style={{ backgroundColor: color.hex }} />
                      <div className="text-sm font-bold text-white mb-1">{color.name}</div>
                      <div className="font-mono text-xs text-orange-500 mb-2">{color.hex}</div>
                      <p className="text-xs text-gray-500">{color.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Type className="text-[#F97316]" size={22} />
                  <h2 className="text-xl font-black tracking-tight">2. Responsive Typography Matrix</h2>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                  <table className="w-full text-left text-sm text-gray-400">
                    <thead className="bg-white/[0.04] text-white text-xs font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-4">Style Layer</th>
                        <th className="p-4">Font Family</th>
                        <th className="p-4">Desktop / Mobile Scale</th>
                        <th className="p-4">Weight & Tracking</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { layer: 'Display Hero Heading', font: 'Inter Sans', scale: '72px / 44px', weight: 'Black (900), -0.04em' },
                        { layer: 'Section Headings (H2)', font: 'Inter Sans', scale: '48px / 32px', weight: 'Extra Bold (800), -0.02em' },
                        { layer: 'Subtitle / Main Leads', font: 'Inter Sans', scale: '20px / 18px', weight: 'Medium (500)' },
                        { layer: 'Primary Action Buttons', font: 'Inter Sans', scale: '16px / 14px', weight: 'Bold (700)' },
                        { layer: 'Body & Description Copy', font: 'Inter Sans', scale: '15px / 14px', weight: 'Regular (400), Light (300)' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/[0.01]">
                          <td className="p-4 font-bold text-white">{row.layer}</td>
                          <td className="p-4 font-mono text-xs">{row.font}</td>
                          <td className="p-4">{row.scale}</td>
                          <td className="p-4 text-xs text-gray-500">{row.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Grid & Spacing */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Grid className="text-[#F97316]" size={22} />
                  <h2 className="text-xl font-black tracking-tight">3. Layout Grid & Border Tokens</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" /> Layout Grid
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Max width container: <span className="text-white font-semibold">1280px</span> (Max-7xl)</p>
                    <p className="text-sm text-gray-500">Columns: <span className="text-white font-semibold">12-Column system</span> with 24px gutters</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F97316]" /> Border Radius system
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Primary Cards: <span className="text-white font-semibold">24px</span> (3xl)</p>
                    <p className="text-sm text-gray-500">Buttons & Inputs: <span className="text-white font-semibold">12px</span> (xl)</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Interactive States
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Hires: Scale hover <span className="text-white font-semibold">1.05x</span></p>
                    <p className="text-sm text-gray-500">Active buttons: <span className="text-white font-semibold">0.97x click rebound</span></p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wireframes' && (
            <div className="space-y-16">
              {/* Component Blueprint wireframe mockup render */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Layout className="text-[#F97316]" size={22} />
                  <h2 className="text-xl font-black tracking-tight">Component Blueprint: Transporter Listings Card (Standard Component)</h2>
                </div>
                
                {/* SVG/CSS Blueprint representation of the Redesigned Card */}
                <div className="bg-white/[0.01] border border-dashed border-white/10 rounded-3xl p-8 max-w-lg mx-auto">
                  <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#070C18]">
                    {/* Header Spec Block */}
                    <div className="h-44 bg-gradient-to-b from-white/10 to-transparent p-4 flex flex-col justify-between relative">
                      <div className="flex justify-between items-start">
                        <span className="bg-white/10 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-lg border border-white/10">Category Badge</span>
                        <span className="bg-white/10 backdrop-blur-md text-xs font-bold px-2 py-1 rounded-lg border border-white/10">⭐ 4.9</span>
                      </div>
                      <div className="text-xs text-white/50">Image placeholder overlay gradients</div>
                    </div>
                    {/* Specs container body */}
                    <div className="p-5 border-t border-white/5 space-y-4">
                      <div>
                        <div className="h-4 w-3/4 bg-white/20 rounded-full mb-2" />
                        <div className="h-3 w-1/2 bg-white/10 rounded-full" />
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/20" />
                          <div className="space-y-1.5">
                            <div className="h-3 w-20 bg-white/20 rounded-full" />
                            <div className="h-2.5 w-12 bg-white/10 rounded-full" />
                          </div>
                        </div>
                        <div className="h-9 w-20 bg-[#F97316] rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2 text-xs text-gray-500">
                    <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" /> Border radius standard: 24px (rounded-3xl) for cards</p>
                    <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" /> Profile badge with blue verification check (dynamic svg)</p>
                  </div>
                </div>
              </div>

              {/* Wireframe Mockup 2: Header Grid Structure */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Grid className="text-[#F97316]" size={22} />
                  <h2 className="text-xl font-black tracking-tight">Section Structure: Hero Grid Assembly</h2>
                </div>
                <div className="bg-white/[0.01] border border-dashed border-white/10 rounded-3xl p-8">
                  <div className="grid md:grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-6 h-48 flex flex-col justify-between">
                      <div className="text-xs font-mono text-gray-500">Layout Block 1: Content Assembly</div>
                      <div className="space-y-3">
                        <div className="h-8 bg-white/20 rounded-xl w-3/4" />
                        <div className="h-4 bg-white/10 rounded-xl w-1/2" />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 h-48 flex flex-col justify-between">
                      <div className="text-xs font-mono text-gray-500">Layout Block 2: Quick Search Widget</div>
                      <div className="h-12 bg-[#F97316]/20 border border-[#F97316]/40 rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="space-y-16">
              {/* Detailed change log */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="text-[#F97316]" size={22} />
                  <h2 className="text-xl font-black tracking-tight">Improvement Blueprint: Design Changes Analysis</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column: Original Site Issues */}
                  <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-8">
                    <div className="flex items-center gap-2.5 mb-6 text-red-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <h3 className="font-bold text-lg">Original Site Issues Identified</h3>
                    </div>
                    <ul className="space-y-5">
                      {[
                        { title: 'High-Contrast White Layout', desc: 'Flat, high-contrast layouts can look dated and strain the eyes during long search sessions.' },
                        { title: 'Inefficient Search Experience', desc: 'The layout has separate, disjointed search fields without visual feedback or clear call-to-actions.' },
                        { title: 'Unstructured Grid Alignment', desc: 'Listing elements were not aligned horizontally or vertically, causing elements to overlapping/look uneven.' },
                        { title: 'No "How It Works" Flow', desc: 'First-time users did not have an immediate visual understanding of how they could find, book, and complete logistics.' },
                        { title: 'Missing Trust Indicators', desc: 'User ratings, verified badges, and structured reviews were completely hidden, reducing hire conversion rates.' },
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="text-red-400 font-extrabold text-sm">{`0${i+1}`}</span>
                          <div>
                            <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: New Redesign Benefits */}
                  <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-3xl p-8">
                    <div className="flex items-center gap-2.5 mb-6 text-emerald-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <h3 className="font-bold text-lg">Redesigned Figma Solution</h3>
                    </div>
                    <ul className="space-y-5">
                      {[
                        { title: 'Logistics Dark-Mode Aesthetics', desc: 'Premium deep blue color space utilizing slate/navy shadows to emphasize brand action buttons.' },
                        { title: 'Unified Dual-Input Search Bar', desc: 'Seamless location & keyword inputs inside a singular glassmorphism element with interactive search tags.' },
                        { title: 'Proportionate Flex Card layouts', desc: 'Pixel-perfect, aligned cards with unified aspect-ratios, spacing, border radiuses, and shadow layers.' },
                        { title: '4-Step Visual Flow Interface', desc: 'Clear visual journey mapping the user flow from finding to reviewing, keeping user expectation clear.' },
                        { title: 'Trust Badges & User Profiles', desc: 'User reviews, rating, and verified badges placed prominently on cards, encouraging immediate conversions.' },
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="text-emerald-400 font-extrabold text-sm">{`0${i+1}`}</span>
                          <div>
                            <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Branding Spec watermark */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-semibold">
            <div>© 2026 SnapDel Inc. All Rights Reserved.</div>
            <div className="flex items-center gap-2">
              <span>DESIGN TOKENS ENGINE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FigmaSpecPortal;
