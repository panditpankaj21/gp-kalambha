"use client";
import { useState } from 'react';
import { 
  FileText, Clock, CreditCard, Phone, 
  Download, CheckCircle2, ShieldCheck, 
  ArrowUpRight, Zap, Fingerprint, 
  Users2, Landmark, Activity, Cpu, ChevronRight
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
    color: "from-blue-600 to-indigo-600",
    lightColor: "bg-blue-50 text-blue-600",
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
    lightColor: "bg-slate-100 text-slate-600",
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
    lightColor: "bg-rose-50 text-rose-600",
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
    lightColor: "bg-amber-50 text-amber-600",
    icon: <Landmark size={18} />
  }
];

export default function Services() {
  const [selected, setSelected] = useState(SERVICES[0]);

  return (
    <div className="min-h-screen bg-[#F1F5F9] pb-10 text-slate-800 font-sans selection:bg-blue-100">
      
      {/* 1. Integrated Elite Header (Matches other pages) */}
      <div className="bg-slate-950 pt-8 pb-20 px-4 text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full mb-3">
               <Zap size={12} className="text-orange-500 fill-orange-500" />
               <span className="text-orange-500 font-black text-[8px] uppercase tracking-[0.2em]">Official Portal</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter flex items-center justify-center gap-2">
              नागरिक <span className="text-blue-500 uppercase italic">Services</span>
            </h2>
            <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.3em] mt-1">Gram Panchayat Kalambha Administration</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-5">
          
          {/* 2. Sidebar Navigation (Light Version) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x sticky lg:top-24 h-fit">
            {SERVICES.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`shrink-0 w-[70vw] sm:w-[40vw] lg:w-full snap-center text-left p-4 rounded-2xl border-2 transition-all duration-500 flex items-center justify-between group relative overflow-hidden ${
                  selected.id === item.id 
                  ? "bg-white border-blue-600 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.2)] translate-x-1" 
                  : "bg-white/60 backdrop-blur-md border-white hover:border-blue-200 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                   <div className={`p-2.5 rounded-xl transition-all ${selected.id === item.id ? "bg-blue-600 text-white shadow-lg" : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"}`}>
                      {item.icon}
                   </div>
                   <div>
                     <h3 className={`font-black text-xs md:text-sm tracking-tight ${selected.id === item.id ? "text-blue-900" : "text-slate-600"}`}>
                       {item.name}
                     </h3>
                     <span className={`text-[7px] font-black uppercase tracking-widest mt-1 block ${selected.id === item.id ? "text-blue-500" : "text-slate-400"}`}>
                       {item.en}
                     </span>
                   </div>
                </div>
                <ChevronRight size={16} className={`transition-all ${selected.id === item.id ? "text-blue-600 opacity-100 translate-x-1" : "text-slate-200 opacity-0"}`} />
              </button>
            ))}
          </div>

          {/* 3. Main Content Terminal (Bright & Colorful) */}
          <div className="lg:col-span-8 space-y-5">
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-white overflow-hidden">
               
               {/* Service Banner */}
               <div className={`bg-gradient-to-r ${selected.color} p-6 md:p-10 text-white relative`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-6">
                     <div>
                        <div className="flex items-center gap-2 mb-3 bg-black/10 w-fit px-3 py-1 rounded-full border border-white/10">
                           <ShieldCheck size={12} className="text-white" />
                           <span className="text-[8px] font-black uppercase tracking-[0.3em]">Verified Service</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic leading-none">{selected.name}</h2>
                        <p className="text-[12px] md:text-sm font-bold mt-4 opacity-90 border-l-2 border-white/40 pl-5 italic max-w-xl">
                           "{selected.purpose}"
                        </p>
                     </div>
                     <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-slate-900 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-3 shrink-0">
                        <Download size={16} /> अर्ज डाऊनलोड
                     </button>
                  </div>
               </div>

               {/* Process & Requirements Grid */}
               <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
                  
                  {/* Step Logic */}
                  <div className="space-y-6">
                     <h4 className="flex items-center gap-3 text-slate-800 font-black text-[10px] uppercase tracking-widest mb-2">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-100"><Cpu size={16}/></div> 
                        कार्यपद्धती (Step Logic)
                     </h4>
                     <div className="space-y-8 relative ml-4 border-l-2 border-slate-100 pl-8 py-2">
                        {selected.process.map((step, idx) => (
                           <div key={idx} className="relative group">
                              <div className="absolute -left-[41px] top-0.5 w-5 h-5 rounded-full bg-white border-4 border-blue-600 shadow-md group-hover:scale-110 transition-all" />
                              <p className="text-slate-600 font-black text-[13px] leading-tight group-hover:text-blue-600 transition-colors">{step}</p>
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter block mt-1">Stage {idx + 1}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Requirements Card */}
                  <div className="space-y-6">
                    <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 shadow-inner">
                      <h4 className="flex items-center gap-3 text-orange-600 font-black text-[10px] uppercase tracking-widest mb-6">
                          <FileText size={18}/> आवश्यक कागदपत्रे
                      </h4>
                      <ul className="space-y-4">
                          {selected.docs.map((doc, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-slate-500 font-bold italic text-[12px]">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                                {doc}
                            </li>
                          ))}
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-center gap-3">
                        <Activity size={16} className="text-blue-600 animate-pulse" />
                        <p className="text-[10px] font-black text-blue-700 uppercase tracking-tighter">प्रक्रिया जलद होण्यासाठी सर्व मूळ कागदपत्रे सोबत ठेवा.</p>
                    </div>
                  </div>
               </div>

               {/* Stats & Contact Bar (Bright Version) */}
               <div className="bg-slate-50 p-4 grid grid-cols-2 md:grid-cols-3 gap-3 border-t border-slate-100">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm hover:border-orange-200 transition-colors">
                     <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><CreditCard size={18} /></div>
                     <div>
                        <p className="text-[7px] font-black text-slate-400 uppercase leading-none mb-1">सरकारी शुल्क</p>
                        <p className="text-sm font-black text-slate-800">₹ {selected.fee}</p>
                     </div>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm hover:border-blue-200 transition-colors">
                     <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Clock size={18} /></div>
                     <div>
                        <p className="text-[7px] font-black text-slate-400 uppercase leading-none mb-1">अपेक्षित वेळ</p>
                        <p className="text-sm font-black text-slate-800">{selected.time}</p>
                     </div>
                  </div>
                  <a 
                    href={`tel:${selected.phone}`}
                    className="col-span-2 md:col-span-1 bg-slate-900 text-white p-3.5 rounded-xl flex items-center justify-between hover:bg-blue-600 transition-all active:scale-95 shadow-xl group/btn"
                  >
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-white/10 rounded-lg text-orange-400 group-hover/btn:bg-white group-hover/btn:text-blue-600 transition-colors"><Phone size={18}/></div>
                       <p className="text-[12px] font-black tracking-widest tabular-nums">{selected.phone}</p>
                    </div>
                    <ArrowUpRight size={16} className="opacity-30 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5" />
                  </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}