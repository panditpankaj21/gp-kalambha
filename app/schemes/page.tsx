"use client";
import { useState } from 'react';
import { 
  Landmark, Target, UserCheck, 
  ClipboardEdit, UserCircle, Phone, 
  ChevronRight, Info, ShieldCheck,
  Home, Briefcase
} from 'lucide-react';

const SCHEMES = [
  {
    id: 1,
    name: "प्रधानमंत्री आवास योजना (PMAY)",
    shortDesc: "गरीब व लघुउत्पन्न गटातील कुटुंबांना गृहनिर्माणासाठी अनुदान.",
    objective: "सर्व पात्र कुटुंबांना सुरक्षित व परवडणारे घर उपलब्ध करून देणे.",
    eligibility: "गरीबी रेषेखालील (BPL) व लहान उत्पन्न गट (LIG) कुटुंबे.",
    process: "ग्रामपंचायत कार्यालयातून अर्ज करा किंवा ऑनलाईन पोर्टलवरून अर्ज करा.",
    contactPerson: "श्री. आशिष शेषराव रेवतकर (GP Officer)",
    phone: "9923620736",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000", // Placeholder for pmay.jpg
    icon: <Home className="text-orange-600" size={24} />
  },
  {
    id: 2,
    name: "मनरेगा (MGNREGA)",
    shortDesc: "ग्रामीण भागातील बेरोजगारांना १०० दिवसांचा रोजगार.",
    objective: "ग्रामीण नागरिकांना रोजगार उपलब्ध करून देणे व पायाभूत सुविधा उभारणी.",
    eligibility: "गावातील सर्व प्रौढ नागरिक (१८ वर्षांवरील).",
    process: "ग्रामपंचायत कार्यालयातून मजुरीसाठी मागणी अर्ज सादर करा.",
    contactPerson: "श्री. उत्तम रामपुरे",
    phone: "8975544792",
    img: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?q=80&w=1000", // Placeholder for mgnrega.jpg
    icon: <Briefcase className="text-blue-600" size={24} />
  }
];

export default function SchemesPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-orange-100">
      
      {/* Header Section */}
      <div className="relative bg-slate-950 pt-20 pb-40 px-4 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_50%,#c2410c_0,transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1 rounded-full mb-6">
            <ShieldCheck size={16} className="text-orange-500" />
            <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.2em]">Government Schemes</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-4 leading-tight">
            शासकीय <span className="text-orange-500">जनहित</span> योजना
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-widest max-w-2xl mx-auto">
            Gram Panchayat Kalambha: Empowering Citizens through Direct Benefits
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24 pb-20 relative z-20">
        <div className="grid grid-cols-1 gap-12">
          {SCHEMES.map((scheme) => (
            <div key={scheme.id} className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row group hover:border-orange-200 transition-all duration-500">
              
              {/* Visual Side */}
              <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={scheme.img} 
                  alt={scheme.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 lg:hidden"></div>
                <div className="absolute bottom-6 left-6 text-white lg:hidden">
                   <h2 className="text-2xl font-black">{scheme.name}</h2>
                </div>
                
                {/* Desktop Overlay Icon */}
                <div className="hidden lg:flex absolute inset-0 bg-orange-600/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
                   <div className="bg-white p-6 rounded-full shadow-2xl text-orange-600">
                      {scheme.icon}
                   </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-3/5 p-8 md:p-12 space-y-10">
                <div className="hidden lg:block">
                  <span className="text-orange-600 font-black text-[10px] uppercase tracking-widest border-b-2 border-orange-500 pb-1">Scheme Profile</span>
                  <h2 className="text-3xl font-black text-slate-900 mt-4 leading-tight">{scheme.name}</h2>
                  <p className="text-slate-500 font-bold text-lg mt-2 italic">"{scheme.shortDesc}"</p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-blue-900 font-black text-[10px] uppercase tracking-widest">
                      <Target size={16} className="text-orange-500" /> उद्देश (Objective)
                    </h4>
                    <p className="text-sm text-slate-600 font-bold leading-relaxed">{scheme.objective}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-blue-900 font-black text-[10px] uppercase tracking-widest">
                      <UserCheck size={16} className="text-orange-500" /> पात्रता (Eligibility)
                    </h4>
                    <p className="text-sm text-slate-600 font-bold leading-relaxed">{scheme.eligibility}</p>
                  </div>
                  
                  <div className="md:col-span-2 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="flex items-center gap-2 text-blue-900 font-black text-[10px] uppercase tracking-widest mb-3">
                      <ClipboardEdit size={16} className="text-blue-600" /> अर्ज प्रक्रिया (Application)
                    </h4>
                    <p className="text-sm text-slate-700 font-bold leading-relaxed">{scheme.process}</p>
                  </div>
                </div>

                {/* Contact Footer Card */}
                <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shadow-sm">
                      <UserCircle size={28} />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase leading-none">संपर्क व्यक्ती</p>
                      <p className="text-sm font-black text-slate-800 mt-1">{scheme.contactPerson}</p>
                    </div>
                  </div>

                  <a 
                    href={`tel:${scheme.phone}`}
                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-slate-900 transition-all shadow-xl active:scale-95"
                  >
                    <Phone size={18} className="text-orange-400" />
                    संपर्क: {scheme.phone}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}