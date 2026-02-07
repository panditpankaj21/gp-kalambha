"use client";
import { useState } from 'react';
import { Menu, X, ChevronDown, Globe, ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  const changeFontSize = (size: string) => {
    const html = document.documentElement;
    if (size === 'plus') html.style.fontSize = '18px';
    else if (size === 'minus') html.style.fontSize = '14px';
    else html.style.fontSize = '16px';
  };

  const menuCategories = [
    {
      title: "प्रशासन",
      links: [
        { name: "ग्रामपंचायत माहिती", desc: "History & Overview", href: "#" },
        { name: "पदाधिकारी व सदस्य", desc: "Elected Representatives", href: "/members" },
        { name: "ग्रामपंचायत कर्मचारी", desc: "Staff Details", href: "#" },
        { name: "संपर्क", desc: "Office Location", href: "/contact" },
      ]
    },
    {
      title: "सेवा",
      links: [
        { name: "नागरिक सेवा", desc: "Citizen Services", href: "/services/citizen" },
        { name: "दाखले व प्रमाणपत्र", desc: "Certificates", href: "/services/certificates" },
        { name: "आरोग्य व शिक्षण", desc: "Health & Education", href: "/services/health-education" },
        { name: "पाणी पुरवठा", desc: "Water Supply", href: "/services/water-supply" },
      ]
    },
    {
      title: "विकास व वित्त",
      links: [
        { name: "कामांची माहिती", desc: "Development Works", href: "#" },
        { name: "आर्थिक माहिती", desc: "Financial Reports", href: "#" },
        { name: "कर आकारणी", desc: "Tax Assessment", href: "#" },
        { name: "निविदा", desc: "Tenders", href: "#" },
        { name: "शासकीय योजना", desc: "Government Schemes", href: "/schemes" },
      ]
    },
    {
      title: "दस्तऐवज",
      links: [
        { name: "महत्वाच्या सूचना", desc: "Public Notices", href: "#" },
        { name: "माहिती अधिकार", desc: "RTI Details", href: "#" },
        { name: "गॅलरी", desc: "Event Photos", href: "#" },
        { name: "अहवाल", desc: "Annual Reports", href: "#" },
      ]
    }
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-slate-900 py-1.5 text-white text-[10px] md:text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-4 font-bold uppercase tracking-wider">
            <span>भारत सरकार</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span>महाराष्ट्र शासन</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-white/20 pr-4">
              <button onClick={() => changeFontSize('plus')} className="hover:text-orange-400 font-black px-1">A+</button>
              <button onClick={() => changeFontSize('reset')} className="hover:text-orange-400 font-black px-1 border-x border-white/10">A</button>
              <button onClick={() => changeFontSize('minus')} className="hover:text-orange-400 font-black px-1">A-</button>
            </div>
            <div className="flex items-center gap-1 font-bold">
              <Globe size={12} className="text-orange-400" />
              <span>मराठी</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo & Address */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logos/panchayat.jpg" 
              alt="Logo" className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform" 
            />
            <div>
              <h1 className="text-blue-900 font-black text-lg md:text-2xl leading-none">ग्रामपंचायत कलंभा</h1>
              <div className="flex items-center gap-1 text-slate-500 mt-1">
                {/* <MapPin size={10} className="text-orange-600" /> */}
                <p className="text-[9px] md:text-[11px] text-orange-600 font-bold uppercase tracking-tight italic">
                   स्वच्छ, सुंदर आणि समृद्ध गाव
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            <Link href="/" className="px-5 py-2 text-blue-900 font-bold hover:text-orange-600 h-full flex items-center transition-all">
              मुख्यपृष्ठ
            </Link>
            
            {menuCategories.map((cat, idx) => {
              // Check if it's the last item to prevent overflow
              const isLast = idx === menuCategories.length - 1;
              
              return (
                <div key={idx} className="relative group h-full flex items-center">
                  <button className="flex items-center gap-1 px-5 py-2 text-slate-700 font-bold group-hover:text-blue-900 group-hover:bg-slate-50 h-full transition-all">
                    {cat.title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {/* Dropdown Menu - Conditional alignment */}
                  <div className={`absolute top-full ${isLast ? 'right-0' : 'left-0'} w-[280px] bg-white shadow-2xl border-x border-b border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-b-xl overflow-hidden pt-2`}>
                    <div className="h-1 w-full" />
                    {cat.links.map((link, lIdx) => (
                      <Link 
                        key={lIdx} 
                        href={link.href} 
                        className="group/item flex flex-col px-6 py-4 hover:bg-blue-50 border-b border-slate-50 last:border-0 transition-colors"
                      >
                        <span className="text-sm font-bold text-slate-800 group-hover/item:text-blue-900">{link.name}</span>
                        <span className="text-[10px] text-slate-400 group-hover/item:text-blue-400 uppercase tracking-wider">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-blue-900 bg-blue-50 rounded-lg">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-2xl overflow-y-auto max-h-[85vh]">
          <div className="p-4 space-y-3">
            <Link href="/" className="block p-4 font-bold text-blue-900 bg-blue-50 rounded-xl border border-blue-100">मुख्यपृष्ठ</Link>
            {menuCategories.map((cat, idx) => (
              <div key={idx} className="rounded-xl border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => setActiveMobileMenu(activeMobileMenu === cat.title ? null : cat.title)}
                  className={`w-full flex justify-between items-center p-4 font-bold transition-colors ${activeMobileMenu === cat.title ? 'bg-orange-500 text-white' : 'bg-white text-slate-800'}`}
                >
                  {cat.title} <ChevronDown size={18} className={`${activeMobileMenu === cat.title ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {activeMobileMenu === cat.title && (
                  <div className="bg-white divide-y divide-slate-50">
                    {cat.links.map((link, lIdx) => (
                      <Link key={lIdx} href={link.href} className="flex flex-col p-4 pl-8">
                         <span className="text-sm font-bold text-slate-700">{link.name}</span>
                         <span className="text-[10px] text-slate-400">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}