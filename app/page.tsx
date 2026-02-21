"use client";
import { useState, useEffect } from 'react';
import { 
  Users, Map as MapIcon, Sprout, Building2, 
  MessageSquare, Send, CheckCircle, Activity,
  CloudSun, Lightbulb, Landmark, TreePine,
  ShieldCheck, Globe, ArrowRight, Zap, Navigation, Mail
} from 'lucide-react';
import Hero from './components/Hero';
import NotificationTicker from './components/NotificationTicker';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // सिम्युलेटेड लोडिंग इफेक्ट
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Skeleton UI Component
  const Skeleton = ({ className }: { className: string }) => (
    <div className={`animate-pulse bg-slate-200 rounded-2xl ${className}`} />
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] selection:bg-orange-100 font-sans">
      <main className="grow">
        <Hero />
        <NotificationTicker />
        
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
          
          {/* 1. Village Introduction & Stats Dashboard */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {isLoading ? (
                <div className="space-y-6">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-12 w-3/4" />
                  <Skeleton className="h-24 w-full" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-8 bg-blue-600 rounded-full" />
                      <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em]">Identity</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 italic tracking-tighter leading-tight">
                      ग्रामपंचायत <span className="text-orange-500">परिचय</span>
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed font-bold italic border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/50 rounded-r-2xl shadow-sm">
                      नागपूर जिल्ह्यातील काटोल तालुक्यातील कळंभा हे एक महत्त्वाचे आणि प्रगतशील गाव आहे. संत्र्यांच्या उत्पादनासाठी प्रसिद्ध असलेल्या या पट्ट्यात वसलेले आमचे गाव, कृषी संस्कृती आणि सामाजिक सलोख्यासाठी ओळखले जाते.
                    </p>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                      गावाचे स्थान भौगोलिकदृष्ट्या अत्यंत सोयीचे असून, ते काटोल शहरापासून १७ किमी तर नागपूर जिल्हा मुख्यालयापासून ६९ किमी अंतरावर आहे. गावातील जनजीवन मुख्यत्वे शेतीवर आधारित असून, ग्रामपंचायतीच्या माध्यमातून गावात नागरी सुविधा उपलब्ध करून देण्यावर भर दिला जात आहे.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-500 transition-all">
                        <Landmark size={20} className="text-blue-600 mb-3" />
                        <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">प्रशासकीय विभाग</p>
                        <p className="text-xs font-black text-slate-800">काटोल तालुका, नागपूर विभाग (विदर्भ)</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group hover:border-orange-500 transition-all">
                        <Navigation size={20} className="text-orange-600 mb-3" />
                        <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">दळणवळण</p>
                        <p className="text-xs font-black text-slate-800">नरखेड, पांढुर्णा आणि वरूड शहरांशी उत्तम संपर्क</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group hover:border-emerald-500 transition-all">
                        <Mail size={20} className="text-emerald-600 mb-3" />
                        <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">पिनकोड व संपर्क</p>
                        <p className="text-xs font-black text-slate-800">४४१३०५ (टपाल कार्यालय: पारडसिंगा)</p>
                    </div>
                  </div>
                </>
              )}

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {isLoading ? (
                  Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
                ) : (
                  [
                    { icon: <Users size={18}/>, label: "लोकसंख्या", val: "१,५८५", color: "bg-blue-950 text-white" },
                    { icon: <MapIcon size={18}/>, label: "क्षेत्रफळ (हे.आर)", val: "३९५.५६", color: "bg-white text-slate-800" },
                    { icon: <Building2 size={18}/>, label: "एकूण मालमत्ता", val: "५४९", color: "bg-white text-slate-800" },
                    { icon: <Sprout size={18}/>, label: "मुख्य पिके", val: "कापूस, संत्री", color: "bg-orange-600 text-white" },
                  ].map((stat, i) => (
                    <div key={i} className={`${stat.color} p-5 rounded-2xl shadow-lg border border-slate-100 transition-transform hover:-translate-y-1`}>
                      <div className="opacity-60 mb-2">{stat.icon}</div>
                      <p className="text-[8px] uppercase font-black tracking-widest opacity-70 mb-0.5">{stat.label}</p>
                      <p className="text-sm md:text-base font-black leading-none">{stat.val}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Demographic Ratio Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-center relative overflow-hidden h-full">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                </div>
              ) : (
                <>
                  <div className="absolute -bottom-4 -right-4 text-slate-50 opacity-10 rotate-12">
                    <Activity size={120} />
                  </div>
                  <h3 className="text-sm font-black text-slate-800 mb-6 flex items-center gap-2">
                    <Activity size={16} className="text-blue-600" /> जनगणना तपशील (२०११)
                  </h3>
                  <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                      <span className="font-bold text-blue-900 text-xs uppercase tracking-tighter">पुरूष</span>
                      <span className="font-black text-blue-900 text-lg">८३६</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-pink-50/50 rounded-xl border border-pink-100">
                      <span className="font-bold text-pink-900 text-xs uppercase tracking-tighter">स्त्री</span>
                      <span className="font-black text-pink-900 text-lg">७४९</span>
                    </div>
                  </div>
                </>
              )}
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
              <div className="lg:col-span-8 h-[400px] relative">
                {isLoading ? (
                  <Skeleton className="h-full w-full" />
                ) : (
                  <div className="h-full bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6051.991697412335!2d78.56692192330965!3d21.36433136706595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd456b312b09ddd%3A0xcdbe3eb1cd5e496e!2sKalambha%2C%20Maharashtra%2C%20India!5e1!3m2!1sen!2sus!4v1771667950124!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      className="contrast-[1.1] brightness-[0.8] saturate-[1.2] group-hover:brightness-100 transition-all duration-1000"
                      ></iframe>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2 border border-slate-100">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[9px] font-black uppercase text-slate-700">Live Village Map</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                {isLoading ? (
                  <>
                    <Skeleton className="h-40 w-full" />
                    <Skeleton className="h-full w-full" />
                  </>
                ) : (
                  <>
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
                      <CloudSun className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform" size={100} />
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-0.5">गावातील वातावरण</p>
                      <h3 className="text-2xl font-black mb-4 tracking-tighter italic">प्रसन्न कलंभा</h3>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs bg-white/10 w-fit px-3 py-1 rounded-lg">
                          <TreePine size={14} className="text-emerald-400" /> हिरवळ: १००%
                        </div>
                        <div className="flex items-center gap-2 text-xs bg-white/10 w-fit px-3 py-1 rounded-lg">
                          <Landmark size={14} className="text-orange-300" /> शांतता: उत्तम
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex-grow">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Globe size={16} /></div>
                        <h4 className="font-black text-slate-800 text-xs uppercase tracking-tight">शेजारील गावे</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["गोंडीदिग्रस", "येनवा", "मासली", "राजणी", "मोहखेडी"].map((village, idx) => (
                          <span key={idx} className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg text-[10px] font-black text-slate-600 uppercase tracking-tighter italic shadow-sm hover:border-emerald-500 transition-colors">
                            {village}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
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
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] italic">तुमची तक्रार किंवा<br /><span className="text-orange-500">सूचना</span> नोंदवा</h2>
              <p className="text-slate-400 font-bold text-sm md:text-base italic leading-relaxed max-w-sm">
                "आपल्या समस्या सोडवणे हेच आमचे कर्तव्य आहे. गावाच्या विकास प्रक्रियेत आपले योगदान द्या."
              </p>
              <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-blue-400 border-t border-white/5 pt-6">
                <div className="flex items-center gap-1.5"><CheckCircle size={14}/> जलद प्रतिसाद</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={14}/> पारदर्शक कारभार</div>
              </div>
            </div>

            <form className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl space-y-4 relative z-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[8px] font-black text-slate-500 uppercase ml-2 tracking-widest">पूर्ण नाव</label>
                  <input type="text" placeholder="राहुल पवार" className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-xs focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] font-black text-slate-500 uppercase ml-2 tracking-widest">मोबाईल नंबर</label>
                  <input type="tel" placeholder="+91" className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-xs focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[8px] font-black text-slate-500 uppercase ml-2 tracking-widest">तक्रारीचा विभाग</label>
                <select className="w-full bg-slate-950 border border-white/10 p-3 rounded-xl text-xs focus:outline-none focus:border-orange-500 transition-colors text-slate-400 appearance-none">
                  <option>पाणी पुरवठा</option>
                  <option>रस्ते व वीज</option>
                  <option>स्वच्छता</option>
                  <option>इतर</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[8px] font-black text-slate-500 uppercase ml-2 tracking-widest">तुमचा संदेश</label>
                <textarea rows={3} placeholder="येथे लिहा..." className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-xs focus:outline-none focus:border-orange-500 transition-colors"></textarea>
              </div>
              <button className="w-full bg-orange-600 hover:bg-white hover:text-orange-600 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95 text-xs uppercase tracking-[0.2em]">
                <Send size={16} /> तक्रार पाठवा
              </button>
            </form>
          </section>

        </div>
      </main>
    </div>
  );
}