"use client";
import { 
  School, MapPin, Phone, Clock, Zap, Droplets, Monitor, 
  ChevronRight, GraduationCap, Users2, Star, ShieldCheck,
  TrendingUp, Award, CheckCircle2, PhoneCall
} from 'lucide-react';

const FACILITIES = [
  {
    id: 1,
    type: "Primary Education",
    name: "झेड.पी. प्रा.शाळा कलंभा",
    desc: "A center of excellence providing modern digital learning and basic amenities.",
    stats: { boys: 23, girls: 15, total: 38, staff: 3 },
    amenities: ["पिण्याचे स्वच्छ पाणी", "इलेक्ट्रिक सुविधा", "कॉम्पुटर सुविधा"],
    address: "कलंभा, ता. काटोल, नागपूर - ४४१३०५",
    contactPerson: "श्रीमती. एस.बी. केने",
    phone: "9970414950",
    timing: "10:30 AM - 05:00 PM",
    gradient: "from-blue-600 via-indigo-600 to-blue-800",
    glow: "shadow-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    id: 2,
    type: "Primary Education",
    name: "झेड.पी. प्रा.शाळा मोह्खेडी",
    desc: "Quality education hub focused on holistic rural child development.",
    stats: { boys: 1, girls: 3, total: 4, staff: 1 },
    amenities: ["पिण्याचे स्वच्छ पाणी", "इलेक्ट्रिक सुविधा", "कॉम्पुटर सुविधा"],
    address: "मोह्खेडी, ता. काटोल, नागपूर - ४४१३०५",
    contactPerson: "श्री. आर. डी. डेहनकर",
    phone: "9763404289",
    timing: "10:30 AM - 05:00 PM",
    gradient: "from-emerald-600 via-teal-600 to-emerald-800",
    glow: "shadow-emerald-500/10",
    iconColor: "text-emerald-500"
  }
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] pb-12 selection:bg-blue-100 font-sans">
      
      {/* 1. Integrated Header (Compact matches Contact/Members) */}
      <div className="bg-slate-950 pt-8 pb-16 px-4 text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-3">
               <Zap size={12} className="text-blue-500 fill-blue-500" />
               <span className="text-blue-500 font-black text-[8px] uppercase tracking-[0.2em]">Village Infrastructure</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter italic flex items-center justify-center gap-2">
              सुविधा व <span className="text-blue-500">पायाभूत</span> सोयी
            </h2>
            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em] mt-1">GP Kalambha Resource Directory</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20 space-y-8">
        {FACILITIES.map((facility) => (
          <div key={facility.id} className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-white group transition-all duration-300 ${facility.glow}`}>
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Column: Stats Panel (Tuned Width) */}
              <div className={`lg:w-80 bg-gradient-to-br ${facility.gradient} p-8 text-white relative flex flex-col justify-between overflow-hidden shrink-0`}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24" />
                
                <div className="relative z-10">
                  <div className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl w-fit mb-5 border border-white/20">
                    <School size={24} className="drop-shadow-lg" />
                  </div>
                  <h2 className="text-2xl font-black leading-tight italic tracking-tighter mb-6">{facility.name}</h2>
                  
                  <div className="space-y-3">
                    <div className="bg-black/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-inner text-center">
                        <span className="text-[9px] font-black uppercase text-white/50 tracking-widest block mb-2">पट नोंदणी (Enrollment)</span>
                        <div className="flex items-end justify-center gap-3">
                            <span className="text-3xl font-black tracking-tighter">{facility.stats.total}</span>
                            <div className="flex flex-col text-[8px] font-black text-left opacity-80 border-l border-white/20 pl-2">
                                <span>M: {facility.stats.boys}</span>
                                <span>F: {facility.stats.girls}</span>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 w-fit">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-black uppercase tracking-widest">Institution Online</span>
                </div>
              </div>

              {/* Right Column: Content Terminal (Optimized Padding) */}
              <div className="flex-1 p-8 lg:p-10 relative bg-[#F8FAFC]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Features Column */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h3 className="flex items-center gap-2 text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4">
                        <Star size={14} className="text-orange-500 fill-orange-500" /> उपलब्ध पायाभूत सुविधा
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {facility.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-slate-100 group-hover:border-blue-100 transition-all">
                            <div className="flex items-center gap-3">
                                <div className={`p-1.5 rounded-lg bg-slate-50 ${facility.iconColor}`}>
                                    {amenity.includes("पाणी") && <Droplets size={14} />}
                                    {amenity.includes("इलेक्ट्रिक") && <Zap size={14} />}
                                    {amenity.includes("कॉम्पुटर") && <Monitor size={14} />}
                                </div>
                                <span className="text-xs font-black text-slate-700">{amenity}</span>
                            </div>
                            <CheckCircle2 size={14} className="text-emerald-500 opacity-50" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] font-medium text-slate-500 italic leading-relaxed border-l-2 border-slate-200 pl-4">
                        "{facility.desc}"
                    </p>
                  </div>

                  {/* Logistics Column */}
                  <div className="md:col-span-5 space-y-5">
                    <div className="grid gap-3">
                       <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100">
                          <MapPin size={16} className="text-orange-500 shrink-0" />
                          <p className="text-[11px] font-black text-slate-700 leading-tight">{facility.address}</p>
                       </div>
                       <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100">
                          <Clock size={16} className="text-blue-500 shrink-0" />
                          <p className="text-[11px] font-black text-slate-700 tracking-tighter uppercase">{facility.timing}</p>
                       </div>
                    </div>

                    {/* Executive Contact Button Style */}
                    <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden group/card">
                        <div className="absolute right-0 bottom-0 opacity-5 -rotate-12 translate-x-4 translate-y-4">
                            <GraduationCap size={80} />
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                                <Users2 size={20} className="text-orange-400" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[7px] font-black text-blue-400 uppercase tracking-widest">प्रशासकीय प्रमुख</p>
                                <p className="text-xs font-black truncate">{facility.contactPerson}</p>
                            </div>
                        </div>
                        <a href={`tel:${facility.phone}`} className="flex items-center justify-between bg-white text-slate-900 px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-md active:scale-95">
                            <div className="flex items-center gap-2">
                                <PhoneCall size={12} />
                                {facility.phone}
                            </div>
                            <ChevronRight size={12} />
                        </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}