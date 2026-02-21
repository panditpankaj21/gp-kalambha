"use client";
import { 
  Landmark, Target, UserCheck, 
  ClipboardEdit, UserCircle, Phone, 
  ShieldCheck, Home, Briefcase, Zap,
  CheckCircle2, Info, FileText
} from 'lucide-react';

const SCHEMES = [
  {
    id: 1,
    name: "प्रधानमंत्री आवास योजना",
    en: "PMAY",
    shortDesc: "गरीब व लघुउत्पन्न कुटुंबांना गृहनिर्माणासाठी अनुदान.",
    objective: "सर्व पात्र कुटुंबांना सुरक्षित आणि हक्काचे घर उपलब्ध करून देणे हे या योजनेचे मुख्य उद्दिष्ट आहे.",
    eligibility: "गरीबी रेषेखालील (BPL) कुटुंबे, अल्प उत्पन्न गट (LIG) आणि ज्यांच्याकडे स्वतःचे पक्के घर नाही असे नागरिक.",
    process: "ग्रामपंचायत कार्यालयात विहित नमुन्यात अर्ज सादर करणे, कागदपत्रांची पडताळणी आणि त्यानंतर मंजुरी मिळणे.",
    docs: ["आधार कार्ड", "रेशन कार्ड", "बँक पासबुक", "जागेचा पुरावा"],
    contactPerson: "श्री. आशिष रेवतकर",
    phone: "9923620736",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000",
    color: "from-orange-500 to-amber-600",
    glow: "shadow-orange-500/10",
    icon: <Home size={20} />
  },
  {
    id: 2,
    name: "मनरेगा (MGNREGA)",
    en: "Job Guarantee",
    shortDesc: "ग्रामीण भागातील बेरोजगारांना १०० दिवसांचा रोजगार.",
    objective: "ग्रामीण भागातील अकुशल कामगारांना रोजगाराची हमी देऊन ग्रामीण पायाभूत सुविधांचे सक्षमीकरण करणे.",
    eligibility: "गावातील सर्व प्रौढ नागरिक (१८ वर्षांवरील) जे अकुशल शारीरिक श्रम करण्यास इच्छुक आहेत.",
    process: "ग्रामपंचायतीकडे जॉब कार्डसाठी नोंदणी करणे आणि कामाची मागणी असलेला अर्ज सादर करणे.",
    docs: ["आधार कार्ड", "बँक पासबुक", "पासपोर्ट फोटो"],
    contactPerson: "श्री. उत्तम रामपुरे",
    phone: "8975544792",
    img: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?q=80&w=1000",
    color: "from-blue-600 to-indigo-700",
    glow: "shadow-blue-500/10",
    icon: <Briefcase size={20} />
  }
];

export default function SchemesPage() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] pb-12 selection:bg-orange-100 font-sans">
      
      {/* 1. Integrated Compact Header */}
      <div className="bg-slate-950 pt-8 pb-16 px-4 text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#c2410c_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full mb-3 shadow-2xl">
               <Zap size={12} className="text-orange-500 fill-orange-500" />
               <span className="text-orange-500 font-black text-[8px] uppercase tracking-[0.2em]">Government Schemes</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter flex items-center justify-center gap-2 italic">
              शासकीय <span className="text-orange-500">जनहित</span> योजना
            </h2>
            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em] mt-1 italic">Direct Benefit Transfer • GP Kalambha</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20 space-y-8">
        {SCHEMES.map((scheme) => (
          <div key={scheme.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-white group transition-all duration-300">
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Side: Photo Panel (Sticky on Desktop) */}
              <div className="lg:w-80 relative overflow-hidden shrink-0 h-64 lg:h-auto">
                <img 
                  src={scheme.img} 
                  alt={scheme.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${scheme.color} opacity-75 mix-blend-multiply`}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl w-fit border border-white/30 shadow-2xl">
                        {scheme.icon}
                    </div>
                    <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-80 bg-black/20 px-2 py-0.5 rounded mb-2 inline-block border border-white/10">{scheme.en}</span>
                        <h3 className="text-2xl font-black leading-tight italic drop-shadow-lg">{scheme.name}</h3>
                    </div>
                </div>
              </div>

              {/* Right Side: Information Terminal */}
              <div className="flex-1 p-6 md:p-8 bg-[#F8FAFC]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Detailed Content (Left inner column) */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-[10px] font-black text-slate-800 uppercase tracking-widest mb-3">
                        <Target size={14} className="text-orange-500" /> १. योजनेचे उद्दिष्ट
                      </h4>
                      <p className="text-[11px] font-bold text-slate-600 leading-relaxed pl-4 border-l-2 border-orange-500 italic bg-white p-3 rounded-r-xl shadow-sm">
                        "{scheme.objective}"
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-[10px] font-black text-blue-900 uppercase tracking-widest mb-3">
                        <UserCheck size={14} className="text-blue-600" /> २. पात्रता निकष
                      </h4>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
                        <p className="text-[11px] font-black text-slate-700 leading-relaxed">{scheme.eligibility}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-[10px] font-black text-emerald-900 uppercase tracking-widest mb-3">
                        <FileText size={14} className="text-emerald-600" /> ३. आवश्यक कागदपत्रे
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {scheme.docs.map((doc, idx) => (
                            <span key={idx} className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 rounded-lg text-[10px] font-black flex items-center gap-2 shadow-sm transition-all hover:-translate-y-0.5">
                                <CheckCircle2 size={12} /> {doc}
                            </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Process & Contact (Right inner column) */}
                  <div className="md:col-span-5 space-y-6">
                    <div className="bg-slate-900 p-5 rounded-2xl text-white shadow-2xl relative overflow-hidden group/card border-b-4 border-blue-600">
                       <div className="absolute right-0 top-0 opacity-10 -mr-6 -mt-6">
                          <ClipboardEdit size={120} />
                       </div>
                       <h4 className="flex items-center gap-2 text-[10px] font-black text-orange-400 uppercase tracking-widest mb-4">
                        <ClipboardEdit size={16} /> ४. अर्ज प्रक्रिया
                      </h4>
                      <p className="text-[11px] font-bold text-slate-300 leading-relaxed relative z-10 italic">
                        {scheme.process}
                      </p>
                    </div>

                    {/* Elite Contact Card */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xl relative overflow-hidden group-hover:border-blue-200 transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 border border-slate-200 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-inner">
                                <UserCircle size={28} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-[7px] font-black text-slate-400 uppercase tracking-tighter">प्रशासकीय संपर्क</p>
                                <p className="text-[13px] font-black text-slate-800 truncate">{scheme.contactPerson}</p>
                            </div>
                            <a 
                                href={`tel:${scheme.phone}`}
                                className="bg-slate-950 text-white p-2.5 rounded-xl hover:bg-orange-500 transition-all shadow-lg active:scale-90 group-hover:shadow-orange-500/20 flex items-center justify-center"
                                title="Call Now"
                            >
                                <Phone size={16} className="text-orange-400" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
                        <Info size={14} className="text-blue-600 animate-pulse" />
                        <span className="text-[9px] font-black text-blue-800 uppercase tracking-tighter">सविस्तर माहितीसाठी कार्यालयात भेट द्या</span>
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