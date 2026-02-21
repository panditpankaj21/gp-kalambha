"use client";

import Image from "next/image";
import { 
  MapPin, Phone, Mail, Clock, User, Building2, ShieldCheck, 
  Smartphone, Zap, Globe, Satellite, PhoneCall, LayoutDashboard, 
  Users, Landmark, CheckCircle2
} from "lucide-react";

const OFFICERS = [
  {
    name: "श्रीमती. करिश्मा प्रविण पंचभाई",
    role: "सरपंच",
    phone: "9284639826",
    img: "", 
    color: "from-orange-500 to-amber-600",
    glow: "shadow-orange-500/20",
    fullWidth: true
  },
  {
    name: "श्री. जानराव भिकुदेव महाजन",
    role: "उपसरपंच",
    phone: "संपर्क नाही",
    img: "", 
    color: "from-blue-600 to-indigo-700",
    glow: "shadow-blue-500/20",
    fullWidth: false
  },
  {
    name: "श्री. आशिष शेषराव रेवतकर",
    role: "ग्रामपंचायत अधिकारी",
    phone: "9923620736",
    img: "/members/gp-officer.jpg",
    color: "from-emerald-500 to-teal-700",
    glow: "shadow-emerald-500/20",
    fullWidth: false
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] pb-10 selection:bg-orange-100 font-sans">
      
      {/* 1. Integrated Header */}
      <div className="bg-slate-950 pt-10 pb-16 px-4 text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-4">
               <Zap size={14} className="text-orange-500 fill-orange-500" />
               <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.2em]">Verified Terminal</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter italic">
              संपर्क <span className="text-blue-500">माहिती</span> केंद्र
            </h2>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.3em] mt-2 italic">Citizen Assistance & Village Data Portal</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-5">
          
          {/* LEFT COLUMN: Expanded कार्यालय डेटा */}
          <div className="lg:col-span-5 flex flex-col gap-5">
             <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden h-full flex flex-col">
                <div className="bg-slate-50 border-b border-slate-100 p-5 flex items-center justify-between">
                   <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-3">
                      <LayoutDashboard size={18} className="text-blue-600" /> कार्यालय व गाव माहिती
                   </h3>
                   <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                
                <div className="p-6 space-y-5 overflow-y-auto">
                   {/* Main Contact Group */}
                   <div className="space-y-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">संपर्क तपशील</p>
                      <div className="flex items-start gap-5 bg-slate-50 p-4 rounded-xl border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                        <div className="p-2.5 bg-orange-500 text-white rounded-lg"><MapPin size={20} /></div>
                        <div>
                           <p className="text-[9px] font-black text-slate-400 uppercase mb-1">गावाचा पत्ता</p>
                           <p className="text-slate-800 text-[13px] font-black leading-snug">मु. पो. सोनोली, कलंभा, ता. काटोल, नागपूर - ४४१३०५</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5 bg-slate-50 p-4 rounded-xl border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                        <div className="p-2.5 bg-blue-600 text-white rounded-lg"><Smartphone size={20} /></div>
                        <div>
                           <p className="text-[9px] font-black text-slate-400 uppercase mb-1">हॉटलाईन</p>
                           <p className="text-slate-900 text-sm font-black tracking-widest">+91 8080984827</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5 bg-slate-50 p-4 rounded-xl border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                        <div className="p-2.5 bg-emerald-500 text-white rounded-lg"><Mail size={20} /></div>
                        <div>
                           <p className="text-[9px] font-black text-slate-400 uppercase mb-1">ई-मेल</p>
                           <p className="text-slate-800 text-sm font-black italic">gpkalambha@gmail.com</p>
                        </div>
                      </div>
                   </div>

                   {/* Village Stats Group */}
                   <div className="space-y-3 pt-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">ग्रामपंचायत प्रोफाइल</p>
                      <div className="grid grid-cols-2 gap-3">
                         <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                               <Users size={16} className="text-blue-500" />
                               <span className="text-[8px] font-black text-slate-400 uppercase">लोकसंख्या</span>
                            </div>
                            <p className="text-sm font-black text-slate-800">१,४५० (अंदाजे)</p>
                         </div>
                         <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                               <Landmark size={16} className="text-orange-500" />
                               <span className="text-[8px] font-black text-slate-400 uppercase">एकूण प्रभाग</span>
                            </div>
                            <p className="text-sm font-black text-slate-800">०३ प्रभाग</p>
                         </div>
                      </div>
                   </div>

                   {/* Legal Info */}
                   <div className="bg-slate-900 rounded-xl p-5 text-white relative overflow-hidden">
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-[10px] font-black uppercase text-blue-400 tracking-[0.2em]">Working Window</span>
                         <Clock size={18} className="text-orange-400" />
                      </div>
                      <p className="text-[15px] font-black tracking-tight">०९:४५ AM - ०६:१५ PM</p>
                      <div className="mt-3 flex items-center gap-2">
                         <CheckCircle2 size={14} className="text-emerald-500" />
                         <span className="text-[9px] font-bold text-slate-400 uppercase">सोमवार ते शनिवार कार्यान्वित</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT COLUMN: Leadership Tier & Map */}
          <div className="lg:col-span-7 flex flex-col gap-5">
             
             {/* Leadership Tiered Grid */}
             <div className="grid grid-cols-2 gap-4">
                {OFFICERS.map((off, idx) => (
                  <div key={idx} className={`bg-gradient-to-br ${off.color} rounded-2xl p-5 shadow-lg ${off.glow} transform transition-all hover:scale-[1.01] duration-300 group overflow-hidden relative border border-white/10 ${off.fullWidth ? 'col-span-2' : 'col-span-1'}`}>
                    <div className="absolute -right-4 -bottom-4 text-white opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={100} />
                    </div>
                    <div className={`flex items-center gap-5 relative z-10 text-white`}>
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white/40 overflow-hidden shrink-0 shadow-2xl bg-white/10 backdrop-blur-md">
                        {off.img ? (
                          <Image src={off.img} alt={off.name} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center opacity-40"><User size={32} /></div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-black text-white/70 uppercase tracking-widest leading-none mb-1.5">{off.role}</p>
                        <h3 className="font-black text-base md:text-xl text-white leading-tight mb-2 truncate">{off.name}</h3>
                        <a href={off.phone !== "संपर्क नाही" ? `tel:${off.phone}` : "#"} className="mt-2 flex items-center gap-2 text-[11px] font-black text-white/90 bg-black/20 w-fit px-3 py-1 rounded-lg hover:bg-white hover:text-slate-900 transition-all shadow-inner">
                          <PhoneCall size={14} /> {off.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
             </div>

             {/* Satellite Map Terminal Bottom */}
             <div className="bg-white p-1.5 rounded-2xl shadow-xl border border-slate-200 h-[350px] overflow-hidden group relative">
                <div className="absolute top-5 left-5 z-20">
                   <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3">
                      <div className="p-1 bg-blue-500 rounded animate-pulse">
                         <Globe size={14} className="text-white" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Village Interface</span>
                         <span className="text-[8px] font-bold text-blue-400 uppercase tracking-tighter mt-1">Satellite Live</span>
                      </div>
                   </div>
                </div>
                
                <div className="w-full h-full rounded-xl overflow-hidden border border-slate-100">
                  <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.718365287315!2d78.58043645!3d21.1850239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4ec45037c769f%3A0x144284892aba9f6d!2sGram%20Panchayat%20Office%2C%20Kalambha!5e1!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&maptype=satellite" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy"
                   className="contrast-[1.1] brightness-[0.8] saturate-[1.2] group-hover:brightness-100 transition-all duration-1000"
                  ></iframe>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}