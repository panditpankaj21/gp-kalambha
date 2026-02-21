"use client";
import { useState } from 'react';
import { 
  FileText, Clock, CreditCard, Phone, 
  Download, CheckCircle2, ShieldCheck, 
  ArrowUpRight, Zap, Fingerprint, 
  Users2, Landmark, Activity, Cpu
} from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    name: "जन्म नोंदणी",
    en: "Birth Registration",
    purpose: "गावातील नवजात बाळाचा जन्म नोंदवण्यासाठी",
    process: ["हॉस्पिटलकडून प्रमाणपत्र घेणे", "कार्यालयात अर्ज करणे", "७ दिवसांत वितरण"],
    docs: ["जन्म प्रमाणपत्र", "पालकांचे आधार कार्ड"],
    fee: "20",
    time: "०७ दिवस",
    phone: "9923620736",
    color: "from-blue-500 to-indigo-600",
    icon: <Fingerprint size={18} />
  },
  {
    id: 2,
    name: "मृत्यू नोंदणी",
    en: "Death Certificate",
    purpose: "मृत्यूची अधिकृत नोंदणी करण्यासाठी",
    process: ["हॉस्पिटल प्रमाणपत्र", "कार्यालयात अर्ज", "७ दिवसांत वितरण"],
    docs: ["मृत्यू प्रमाणपत्र", "आधार कार्ड"],
    fee: "20",
    time: "०७ दिवस",
    phone: "9923620736",
    color: "from-slate-600 to-slate-800",
    icon: <FileText size={18} />
  },
  {
    id: 3,
    name: "विवाह नोंदणी",
    en: "Marriage Certificate",
    purpose: "विवाहाची अधिकृत नोंदणी",
    process: ["अर्ज सादर करणे", "कागदपत्र पडताळणी", "७ दिवसांत वितरण"],
    docs: ["आधार कार्ड", "फोटो व साक्षीदार"],
    fee: "20",
    time: "०७ दिवस",
    phone: "9923620736",
    color: "from-rose-500 to-pink-600",
    icon: <Users2 size={18} />
  },
  {
    id: 6,
    name: "नमुना ८ उतारा",
    en: "Form 8 Extract",
    purpose: "मालमत्ता कर आकारणी नोंद",
    process: ["कार्यालयात अर्ज करणे", "५ दिवसांत उतारा"],
    docs: ["घरकर पावती", "आधार कार्ड"],
    fee: "20",
    time: "०५ दिवस",
    phone: "7038579757",
    color: "from-amber-500 to-orange-600",
    icon: <Landmark size={18} />
  }
];

export default function Services() {
  const [selected, setSelected] = useState(SERVICES[0]);

  return (
    <div className="min-h-screen bg-gray-300 pb-10 text-slate-300 font-sans">
      
      {/* 1. Integrated Elite Header */}
      <div className="bg-slate-950 pt-8 pb-16 px-4 text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full mb-3">
               <Zap size={12} className="text-orange-500 fill-orange-500" />
               <span className="text-orange-500 font-black text-[8px] uppercase tracking-[0.2em]">Verified Terminal</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter flex items-center justify-center gap-2">
              नागरिक <span className="text-blue-500 uppercase">Gateway</span>
            </h2>
            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em] mt-1 italic">Gram Panchayat Kalambha Administration</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-4">
          
          {/* 2. Sidebar Navigation */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x sticky lg:top-24 h-fit">
            {SERVICES.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`shrink-0 w-[70vw] sm:w-[40vw] lg:w-full snap-center text-left p-3.5 rounded-xl border transition-all duration-500 flex items-center justify-between group relative overflow-hidden ${
                  selected.id === item.id 
                  ? "bg-blue-600 border-blue-400 shadow-[0_0_25px_rgba(37,99,235,0.4)] translate-x-1" 
                  : "bg-slate-900 border-white/5 hover:border-white/10 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 relative z-10">
                   <div className={`p-2 rounded-lg transition-all ${selected.id === item.id ? "bg-white text-blue-600 shadow-md" : "bg-slate-800 text-slate-500 group-hover:text-blue-400"}`}>
                      {item.icon}
                   </div>
                   <div>
                     <h3 className={`font-black text-xs md:text-sm tracking-tight ${selected.id === item.id ? "text-white" : "text-slate-300"}`}>
                       {item.name}
                     </h3>
                     <span className={`text-[7px] font-black uppercase tracking-widest mt-0.5 block ${selected.id === item.id ? "text-blue-100" : "text-slate-500"}`}>
                       {item.en}
                     </span>
                   </div>
                </div>
                <ArrowUpRight size={14} className={`transition-all ${selected.id === item.id ? "text-white opacity-100" : "text-slate-700 opacity-20 group-hover:opacity-100"}`} />
              </button>
            ))}
          </div>

          {/* 3. Main Content Terminal */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-slate-900 rounded-2xl shadow-2xl border border-white/5 overflow-hidden">
               
               {/* Service Banner */}
               <div className={`bg-gradient-to-r ${selected.color} p-6 md:p-8 text-white relative`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-4">
                     <div>
                        <div className="flex items-center gap-2 mb-3">
                           <ShieldCheck size={14} className="text-white/80" />
                           <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-70">Official Protocol</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black tracking-tighter italic leading-none">{selected.name}</h2>
                        <p className="text-[11px] md:text-xs font-bold mt-3 opacity-80 border-l-2 border-white/30 pl-4 italic">
                           "{selected.purpose}"
                        </p>
                     </div>
                     <button className="bg-white text-slate-900 px-5 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-orange-500 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2">
                        <Download size={14} /> Download Form
                     </button>
                  </div>
               </div>

               {/* Process & Requirements Grid */}
               <div className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/50">
                  
                  {/* Step Logic */}
                  <div className="space-y-5">
                     <h4 className="flex items-center gap-2 text-blue-400 font-black text-[9px] uppercase tracking-widest mb-2">
                        <Cpu size={14}/> कार्यपद्धती (Step Logic)
                     </h4>
                     <div className="space-y-6 relative ml-2 border-l border-slate-800 pl-6 py-1">
                        {selected.process.map((step, idx) => (
                           <div key={idx} className="relative group">
                              <div className="absolute -left-[29px] top-0.5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-all" />
                              <p className="text-slate-300 font-black text-[11px] leading-tight group-hover:text-white transition-colors">{step}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Requirements Card */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-white/5 shadow-inner">
                     <h4 className="flex items-center gap-2 text-orange-500 font-black text-[9px] uppercase tracking-widest mb-5">
                        <FileText size={16}/> आवश्यक कागदपत्रे
                     </h4>
                     <ul className="space-y-4">
                        {selected.docs.map((doc, idx) => (
                           <li key={idx} className="flex items-center gap-3 text-slate-400 font-bold italic text-[11px]">
                              <div className="w-1 h-1 bg-orange-500 rounded-full" />
                              {doc}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Stats & Contact Bar */}
               <div className="bg-slate-950/80 p-3 grid grid-cols-2 md:grid-cols-3 gap-2 border-t border-white/5">
                  <div className="bg-slate-900 p-3 rounded-lg border border-white/5 flex items-center gap-3">
                     <CreditCard size={16} className="text-orange-500" />
                     <div>
                        <p className="text-[6px] font-black text-slate-500 uppercase leading-none mb-1">शुल्क</p>
                        <p className="text-xs font-black text-white">₹ {selected.fee}</p>
                     </div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-white/5 flex items-center gap-3">
                     <Clock size={16} className="text-blue-500" />
                     <div>
                        <p className="text-[6px] font-black text-slate-500 uppercase leading-none mb-1">कालावधी</p>
                        <p className="text-xs font-black text-white">{selected.time}</p>
                     </div>
                  </div>
                  <a 
                    href={`tel:${selected.phone}`}
                    className="col-span-2 md:col-span-1 bg-orange-600 hover:bg-white hover:text-slate-900 p-3 rounded-lg flex items-center justify-between transition-all active:scale-95 group/btn shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                       <div className="p-1.5 bg-white/10 rounded text-white group-hover/btn:bg-orange-600 transition-colors"><Phone size={14}/></div>
                       <p className="text-[11px] font-black tracking-widest tabular-nums">{selected.phone}</p>
                    </div>
                    <ArrowUpRight size={14} className="opacity-40" />
                  </a>
               </div>
            </div>

            <div className="flex justify-between px-2 opacity-20">
               <span className="text-[6px] font-black uppercase tracking-[0.5em]">Terminal Sec-Alpha</span>
               <span className="text-[6px] font-black uppercase tracking-[0.5em]">GP Kalambha</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}