"use client";
import { 
  Users, Map as MapIcon, Sprout, Building2, 
  MessageSquare, Send, CheckCircle, Activity,
  CloudSun, Lightbulb, Landmark, TreePine,
  ShieldCheck, Globe, ArrowRight, Zap
} from 'lucide-react';
import Hero from './components/Hero';
import NotificationTicker from './components/NotificationTicker';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] selection:bg-orange-100">
      <main className="grow">
        <Hero />
        <NotificationTicker />
        
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
          
          {/* 1. Village Introduction & Stats Dashboard */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-8 bg-blue-600 rounded-full" />
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em]">Identity</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic leading-tight">ग्रामपंचायत <span className="text-orange-500">परिचय</span></h2>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium italic border-l-4 border-slate-200 pl-5">
                  "ग्रामपंचायत ही स्थानिक स्वराज्य संस्था आहे जिला राज्य शासनाकडून देण्यात आलेल्या अधिकारांवर गावाच्या पातळीवर स्थानिक विकास व सार्वजनिक सेवा राबविण्याची जबाबदारी असते. हे संस्थात्मक स्वरूप पाणीपुरवठा, सार्वजनिक आरोग्य आणि शिक्षणासाठी महत्त्वाचे आहे."
                </p>
              </div>
              
              {/* Stats Grid: High Density */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                {[
                  { icon: <Users size={18}/>, label: "लोकसंख्या", val: "१,५८५", color: "bg-blue-900 text-white" },
                  { icon: <MapIcon size={18}/>, label: "क्षेत्रफळ (हे.आर)", val: "३९५.५६", color: "bg-white text-slate-800" },
                  { icon: <Building2 size={18}/>, label: "एकूण मालमत्ता", val: "५४९", color: "bg-white text-slate-800" },
                  { icon: <Sprout size={18}/>, label: "मुख्य पिके", val: "कापूस, मोसंबी", color: "bg-orange-500 text-white" },
                ].map((stat, i) => (
                  <div key={i} className={`${stat.color} p-5 rounded-[1.5rem] shadow-lg border border-slate-100 transition-transform hover:-translate-y-1`}>
                    <div className="opacity-60 mb-2">{stat.icon}</div>
                    <p className="text-[8px] uppercase font-black tracking-widest opacity-70 mb-0.5">{stat.label}</p>
                    <p className="text-sm md:text-base font-black leading-none">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Demographic Ratio Card */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm flex flex-col justify-center relative overflow-hidden">
               <div className="absolute -bottom-4 -right-4 text-slate-50 opacity-10 rotate-12">
                  <Activity size={120} />
               </div>
              <h3 className="text-sm font-black text-slate-800 mb-6 flex items-center gap-2">
                <Activity size={16} className="text-blue-600" /> जनगणना तपशील (२०११)
              </h3>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <span className="font-bold text-blue-900 text-xs uppercase tracking-tighter">पुरूष</span>
                  <span className="font-black text-blue-900">८३६</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-pink-50/50 rounded-xl border border-pink-100">
                  <span className="font-bold text-pink-900 text-xs uppercase tracking-tighter">स्त्री</span>
                  <span className="font-black text-pink-900">७४९</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Map & Village Insights Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-1 bg-blue-600 rounded-full" />
                <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">गाव दर्शन व स्थान</h2>
              </div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Regional Mapping Hub</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Interactive Map */}
              <div className="lg:col-span-8 h-[400px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.694601446704!2d78.5833441!3d21.1852579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4f007f59d57a3%3A0xc6657962483842c0!2sKalambha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2 border border-slate-100">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                   <span className="text-[9px] font-black uppercase text-slate-700">Live Village Map</span>
                </div>
              </div>

              {/* Informational Sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                {/* Visual Vibe Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden group">
                  <CloudSun className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform" size={100} />
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-0.5">गावातील वातावरण</p>
                  <h3 className="text-2xl font-black mb-4 tracking-tighter">प्रसन्न कलंभा</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs bg-white/10 w-fit px-3 py-1 rounded-lg">
                      <TreePine size={14} className="text-emerald-400" /> हिरवळ: १००%
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-white/10 w-fit px-3 py-1 rounded-lg">
                      <Landmark size={14} className="text-orange-300" /> शांतता: उत्तम
                    </div>
                  </div>
                </div>

                {/* Did You Know List */}
                <div className="bg-white border border-slate-100 rounded-[2rem] p-5 shadow-sm flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Lightbulb size={16} /></div>
                    <h4 className="font-black text-slate-800 text-xs">माहित आहे का? (Facts)</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-[11px] text-slate-500 font-bold leading-relaxed border-l-2 border-orange-500 pl-3 italic">
                      कलंभा गाव हे मोसंबी आणि कापूस उत्पादनासाठी तालुक्यात प्रसिद्ध आहे.
                    </li>
                    <li className="text-[11px] text-slate-500 font-bold leading-relaxed border-l-2 border-blue-500 pl-3 italic">
                      गावातील हवामान वर्षभर शेतीसाठी अतिशय पोषक असते.
                    </li>
                    <li className="text-[11px] text-slate-500 font-bold leading-relaxed border-l-2 border-emerald-500 pl-3 italic">
                      एकजूट आणि सामाजिक सलोखा ही आमच्या गावाची खरी ओळख आहे.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Executive Complaint Portal */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-slate-900 rounded-2xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl w-fit">
                <MessageSquare size={32} className="text-orange-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]">तुमची तक्रार किंवा<br /><span className="text-orange-500">सूचना</span> नोंदवा</h2>
              <p className="text-slate-400 font-bold text-sm md:text-base italic leading-relaxed max-w-sm">
                "आपल्या समस्या सोडवणे हेच आमचे कर्तव्य आहे. गावाच्या विकास प्रक्रियेत आपले योगदान द्या."
              </p>
              <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-blue-400 border-t border-white/5 pt-6">
                <div className="flex items-center gap-1.5"><CheckCircle size={14}/> जलद प्रतिसाद</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={14}/> पारदर्शक कारभार</div>
              </div>
            </div>

            {/* Complaint Form Card */}
            <form className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl space-y-4 relative z-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[8px] font-black text-slate-500 uppercase ml-2">पूर्ण नाव</label>
                  <input type="text" placeholder="राहुल पवार" className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-xs focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] font-black text-slate-500 uppercase ml-2">मोबाईल नंबर</label>
                  <input type="tel" placeholder="+91" className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-xs focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[8px] font-black text-slate-500 uppercase ml-2">तक्रारीचा विभाग</label>
                <select className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-xs focus:outline-none focus:border-orange-500 transition-colors text-slate-400 appearance-none">
                  <option className="bg-slate-900">पाणी पुरवठा</option>
                  <option className="bg-slate-900">रस्ते व वीज</option>
                  <option className="bg-slate-900">स्वच्छता</option>
                  <option className="bg-slate-900">इतर</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[8px] font-black text-slate-500 uppercase ml-2">तुमचा संदेश</label>
                <textarea rows={3} placeholder="येथे लिहा..." className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-xs focus:outline-none focus:border-orange-500 transition-colors"></textarea>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest">
                <Send size={16} /> तक्रार पाठवा
              </button>
            </form>
          </section>

        </div>
      </main>
    </div>
  );
}