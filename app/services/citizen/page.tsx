"use client";
import { useState } from 'react';
import { 
  FileText, Clock, CreditCard, Phone, 
  ChevronRight, Download, CheckCircle2,
  ShieldCheck, MapPin, ArrowUpRight
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
    time: "७ दिवस",
    officer: "GP Officer",
    phone: "9923620736"
  },
  {
    id: 2,
    name: "मृत्यू नोंदणी दाखला",
    en: "Death Certificate",
    purpose: "मृत्यूची अधिकृत नोंदणी करण्यासाठी",
    process: ["हॉस्पिटलकडून प्रमाणपत्र घेणे", "कार्यालयात अर्ज करणे", "७ दिवसांत वितरण"],
    docs: ["मृत्यू प्रमाणपत्र", "आधार कार्ड"],
    fee: "20",
    time: "७ दिवस",
    officer: "GP Officer",
    phone: "9923620736"
  },
  {
    id: 3,
    name: "विवाह नोंदणी दाखला",
    en: "Marriage Certificate",
    purpose: "विवाहाची अधिकृत नोंदणी",
    process: ["कार्यालयात अर्ज सादर करणे", "कागदपत्र पडताळणी", "७ दिवसांत वितरण"],
    docs: ["अर्ज, आधार, प्रतिज्ञापत्र", "फोटो, पत्रिका, ३ साक्षीदार"],
    fee: "20",
    time: "७ दिवस",
    officer: "GP Officer",
    phone: "9923620736"
  },
  {
    id: 4,
    name: "BPL दाखला",
    en: "BPL Certificate",
    purpose: "BPL प्रवर्गातील पुरावा",
    process: ["कार्यालयात अर्ज सादर करणे", "७ दिवसांत वितरण"],
    docs: ["आधार कार्ड"],
    fee: "20",
    time: "७ दिवस",
    officer: "GP Officer",
    phone: "9923620736"
  },
  {
    id: 5,
    name: "येणे बाकी दाखला",
    en: "No Dues Certificate",
    purpose: "थकित कर नसल्याचे प्रमाणपत्र",
    process: ["कार्यालयात अर्ज करणे", "५ दिवसांत वितरण"],
    docs: ["आधार कार्ड", "घरकर पावती"],
    fee: "20",
    time: "५ दिवस",
    officer: "GP Officer",
    phone: "9923620736"
  },
  {
    id: 6,
    name: "नमुना ८ उतारा",
    en: "Form 8 Extract",
    purpose: "मालमत्ता कर आकारणी नोंद",
    process: ["कार्यालयात अर्ज करणे", "५ दिवसांत उतारा"],
    docs: ["आधार कार्ड", "घरकर पावती"],
    fee: "20",
    time: "५ दिवस",
    officer: "GP Officer",
    phone: "7038579757"
  },
  {
    id: 7,
    name: "निराधार दाखला",
    en: "Destitute Certificate",
    purpose: "निराधार प्रवर्गासाठी प्रमाणपत्र",
    process: ["कार्यालयात अर्ज करणे", "२० दिवसांत वितरण"],
    docs: ["आधार कार्ड, टी.सी."],
    fee: "20",
    time: "२० दिवस",
    officer: "GP Officer",
    phone: "9923620736"
  }
];

export default function Services() {
  const [selected, setSelected] = useState(SERVICES[0]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header Section (Kept Large as requested) */}
      <div className="relative bg-slate-950 pt-16 pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full mb-4">
            <ShieldCheck size={14} className="text-orange-500" />
            <span className="text-orange-500 font-bold text-[9px] uppercase tracking-[0.2em]">Official Citizen Portal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter mb-2">
            नागरिक <span className="text-orange-500">सेवा</span> केंद्र
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            ग्रामपंचायत कलंभा, जिल्हा नागपूर
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-16 pb-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-4">
          
          {/* Sidebar Navigation: Tighter Spacing */}
          <div className="lg:w-1/4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto pb-2 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x sticky lg:top-24 h-fit">
            {SERVICES.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`shrink-0 w-[65vw] sm:w-[40vw] lg:w-full snap-center text-left p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                  selected.id === item.id 
                  ? "bg-white border-blue-600 shadow-lg shadow-blue-900/10" 
                  : "bg-white/80 backdrop-blur-md border-transparent hover:border-slate-200"
                }`}
              >
                {selected.id === item.id && <div className="absolute left-0 top-0 h-full w-1 bg-blue-600"></div>}
                <div>
                  <h3 className={`font-black text-xs md:text-sm tracking-tight ${selected.id === item.id ? "text-blue-900" : "text-slate-700"}`}>
                    {item.name}
                  </h3>
                  <span className={`text-[8px] font-bold uppercase tracking-widest mt-0.5 block ${selected.id === item.id ? "text-orange-500" : "text-slate-400"}`}>
                    {item.en}
                  </span>
                </div>
                <ArrowUpRight size={14} className={`transition-all duration-300 ${selected.id === item.id ? "text-blue-600 translate-x-0.5" : "text-slate-300 opacity-20"}`} />
              </button>
            ))}
          </div>

          {/* Main Card Content: Optimized Fonts & Padding */}
          <div className="lg:w-3/4 bg-gray-300 rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            
            {/* Service Header: Tighter */}
            <div className="p-5 md:p-8 border-b border-slate-50 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <div className="h-1 w-4 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-600 font-black text-[9px] uppercase tracking-widest leading-none">Record Info</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">{selected.name}</h2>
                <p className="text-slate-500 font-bold text-[13px] md:text-sm italic border-l-2 border-orange-500 pl-3 mt-1">
                  {selected.purpose}
                </p>
              </div>
              <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-wider shadow-md active:scale-95 transition-all shrink-0">
                <Download size={14} /> डाऊनलोड अर्ज
              </button>
            </div>

            <div className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              
              {/* Process Section: Tightened */}
              <div className="space-y-6">
                <h4 className="flex items-center gap-2 text-blue-900 font-black text-[10px] uppercase tracking-[0.1em]">
                  <div className="p-1.5 bg-blue-900 text-white rounded shadow-md"><CheckCircle2 size={14}/></div> 
                  कार्यपद्धती
                </h4>
                <div className="space-y-6 relative ml-3 border-l-2 border-slate-100 pl-6 py-1">
                  {selected.process.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600 shadow-sm" />
                      <p className="text-slate-600 font-bold text-xs leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements Card: Reduced Spacing */}
              <div className="bg-slate-900 rounded-xl p-5 md:p-6 text-white relative overflow-hidden border-b-4 border-orange-600">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                <h4 className="flex items-center gap-2 text-orange-500 font-black text-[10px] uppercase tracking-[0.1em] mb-4">
                  <FileText size={16}/> आवश्यक दस्तऐवज
                </h4>
                <ul className="space-y-3">
                  {selected.docs.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 font-bold italic text-[11px] leading-snug">
                      <span className="text-orange-500 mt-1 flex-shrink-0">→</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Contact Bar: Dense Grid */}
            <div className="px-5 md:px-8 pb-8 grid grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-md"><CreditCard size={18}/></div>
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-0.5">Fee</p>
                  <p className="text-xs font-black text-slate-900 leading-none">₹ {selected.fee}</p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-md"><Clock size={18}/></div>
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-0.5">Time</p>
                  <p className="text-xs font-black text-slate-900 leading-none">{selected.time}</p>
                </div>
              </div>

              <a 
                href={`tel:${selected.phone}`}
                className="col-span-2 lg:col-span-1 p-3 bg-blue-900 text-white rounded-lg flex items-center justify-between hover:bg-slate-800 transition-all active:scale-95 shadow-md"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 bg-white/10 text-orange-400 rounded-md animate-pulse"><Phone size={18}/></div>
                  <div className="truncate">
                    <p className="text-[8px] font-black text-blue-300 uppercase leading-none mb-0.5 italic">{selected.officer}</p>
                    <p className="text-[13px] font-black leading-none">{selected.phone}</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-white/30 shrink-0" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}