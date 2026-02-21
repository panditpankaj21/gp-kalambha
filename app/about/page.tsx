"use client";
import { 
  Info, Users, Map as MapIcon, GraduationCap, 
  Bus, Navigation, 
  Globe, Landmark, BarChart3, HelpCircle,
  Home, ShieldCheck, Zap, ChevronRight
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] pb-16 font-sans selection:bg-blue-100">
      
      {/* 1. Elite Header Banner */}
      <div className="bg-slate-950 pt-10 pb-24 px-4 text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 shadow-2xl">
               <Info size={14} className="text-blue-400" />
               <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">Village Profile v2.0</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter flex items-center justify-center gap-3 italic">
              आमच्या <span className="text-blue-500 uppercase">गावाबद्दल</span> माहिती
            </h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-2 italic">Comprehensive Geographic & Demographic Analysis</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20 space-y-8">
        
        {/* 2. Quick Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Landmark />, label: "तालुका / जिल्हा", val: "काटोल / नागपूर", color: "from-blue-600 to-indigo-700" },
            { icon: <MapIcon />, label: "क्षेत्रफळ (हेक्टर)", val: "४८१.७१", color: "from-emerald-500 to-teal-600" },
            { icon: <Users />, label: "एकूण लोकसंख्या", val: "१,२३८", color: "from-orange-500 to-amber-600" },
            { icon: <Home />, label: "एकूण कुटुंबे", val: "३०८", color: "from-rose-500 to-pink-600" },
          ].map((stat, i) => (
            <div key={i} className={`bg-gradient-to-br ${stat.color} p-5 rounded-2xl shadow-xl text-white group hover:scale-[1.03] transition-all`}>
               <div className="bg-white/20 p-2 rounded-lg w-fit mb-3">{stat.icon}</div>
               <p className="text-[8px] font-black uppercase tracking-widest opacity-80 mb-1">{stat.label}</p>
               <p className="text-sm md:text-base font-black tracking-tight">{stat.val}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* 3. Detailed Introduction (Left Column) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5"><Globe size={200} /></div>
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-1.5 bg-blue-600 rounded-full" />
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight italic">भौगोलिक व राजकीय परिचय</h3>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed border-l-4 border-slate-100 pl-6 italic">
                    कलंभा हे महाराष्ट्र राज्यातील नागपूर जिल्ह्यातील काटोल तालुक्यातील एक महत्त्वाचे गाव आहे. हे काटोल तहसील मुख्यालयापासून १५ किमी आणि नागपूर जिल्हा मुख्यालयापासून ७३ किमी अंतरावर वसलेले आहे. कलंभा गाव स्वतः एक **ग्रामपंचायत** म्हणून कार्य करते.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1">विधानसभा क्षेत्र</p>
                        <p className="text-sm font-black text-slate-800">काटोल विधानसभा</p>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="text-[9px] font-black text-orange-600 uppercase tracking-widest mb-1">लोकसभा क्षेत्र</p>
                        <p className="text-sm font-black text-slate-800">रामटेक लोकसभा</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* 4. Demographic Data (Table Style) */}
            <div className="bg-white rounded-2xl shadow-xl border border-white overflow-hidden">
               <div className="bg-slate-900 p-5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <BarChart3 size={20} className="text-blue-400" />
                    <h3 className="text-sm font-black uppercase tracking-widest">लोकसंख्या तपशील (जनगणना २०११)</h3>
                  </div>
                  <Zap size={16} className="text-orange-500 animate-pulse" />
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">
                        <th className="p-5 italic">तपशील</th>
                        <th className="p-5">एकूण</th>
                        <th className="p-5">पुरुष</th>
                        <th className="p-5">स्त्री</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 font-bold text-sm">
                      <tr className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors">
                        <td className="p-5">एकूण लोकसंख्या</td>
                        <td className="p-5 font-black text-slate-900">१,२३८</td>
                        <td className="p-5">६६२</td>
                        <td className="p-5">५७६</td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors">
                        <td className="p-5">मुले (०-६ वर्षे)</td>
                        <td className="p-5 font-black text-slate-900">९७</td>
                        <td className="p-5">५४</td>
                        <td className="p-5">४३</td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors text-orange-600">
                        <td className="p-5">अनुसूचित जाती (SC)</td>
                        <td className="p-5 font-black">४६०</td>
                        <td className="p-5">२४०</td>
                        <td className="p-5">२२०</td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors text-emerald-600">
                        <td className="p-5">अनुसूचित जमाती (ST)</td>
                        <td className="p-5 font-black">९८</td>
                        <td className="p-5">५६</td>
                        <td className="p-5">४२</td>
                      </tr>
                      <tr className="bg-blue-50/50">
                        <td className="p-5">साक्षर लोकसंख्या</td>
                        <td className="p-5 font-black text-blue-700">९४४</td>
                        <td className="p-5 text-blue-700">५३६</td>
                        <td className="p-5 text-blue-700">४०८</td>
                      </tr>
                    </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* 5. Connectivity & Sidebar (Right Column) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Connectivity Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-white p-6 space-y-6">
               <div className="flex items-center gap-3 mb-2">
                  <Navigation size={20} className="text-blue-600" />
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">वाहतूक व संपर्क</h3>
               </div>
               
               <div className="space-y-3">
                  {[
                    { icon: <Bus size={16}/>, label: "सार्वजनिक बस सेवा", status: "उपलब्ध", color: "emerald" },
                    // { icon: <Train size={16}/>, label: "रेल्वे स्टेशन", status: "उपलब्ध", color: "emerald" },
                    { icon: <Navigation size={16}/>, label: "खाजगी बस (१०+ किमी)", status: "उपलब्ध", color: "orange" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                       <div className="flex items-center gap-3">
                          <span className="text-slate-400">{item.icon}</span>
                          <span className="text-[11px] font-black text-slate-700">{item.label}</span>
                       </div>
                       <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase border border-${item.color}-200 bg-${item.color}-50 text-${item.color}-600`}>
                          {item.status}
                       </span>
                    </div>
                  ))}
               </div>

               <div className="bg-slate-900 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 opacity-10"><Zap size={80} /></div>
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">प्रवासाचा वेळ व अंतर</p>
                  <div className="space-y-4">
                     <div className="flex justify-between items-end border-l-2 border-orange-500 pl-3">
                        <div>
                           <p className="text-[8px] font-bold text-slate-400 uppercase">काटोल पासून</p>
                           <p className="text-sm font-black">१५ किमी</p>
                        </div>
                        <p className="text-[10px] font-black text-orange-400">३०-६० मिनिटे</p>
                     </div>
                     <div className="flex justify-between items-end border-l-2 border-blue-500 pl-3">
                        <div>
                           <p className="text-[8px] font-bold text-slate-400 uppercase">नागपूर पासून</p>
                           <p className="text-sm font-black">७३ किमी</p>
                        </div>
                        <p className="text-[10px] font-black text-blue-400">~२.१ तास</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Villages List */}
            <div className="bg-white rounded-2xl shadow-xl border border-white p-6">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-800 mb-5 flex items-center gap-2">
                  <Globe size={18} className="text-emerald-500" /> ग्रामपंचायत गावे
               </h3>
               <div className="space-y-2">
                  {["कलंभा", "मोह्खेडी"].map((v, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 group hover:bg-emerald-50 transition-colors">
                       <span className="text-xs font-black text-emerald-800">{v}</span>
                       <ChevronRight size={14} className="text-emerald-300 group-hover:translate-x-1 transition-transform" />
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>

        {/* 6. FAQ / Facts Section */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-white">
           <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-orange-100 rounded-2xl text-orange-600 shadow-orange-100 shadow-lg"><HelpCircle size={24} /></div>
              <h3 className="text-2xl font-black text-slate-800 italic tracking-tight">महत्त्वाचे प्रश्न (FAQs)</h3>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
              {[
                { q: "कलंभा गावाचा पिनकोड काय आहे?", a: "गावाचा पिनकोड ४४१३०५ असा आहे." },
                { q: "गावात एकूण किती कुटुंबे राहतात?", a: "२०११ च्या जनगणनेनुसार गावात ३०८ कुटुंबे वास्तव्यास आहेत." },
                { q: "गावाचा साक्षरता दर किती आहे?", a: "गावाचा एकूण साक्षरता दर ७६.२५% आहे (पुरुष: ८०.९७%, स्त्री: ७०.८३%)." },
                { q: "जवळचे शहर कोणते आहे?", a: "काटोल हे सर्वात जवळचे शहर असून ते १५ किमी अंतरावर आहे." },
              ].map((faq, i) => (
                <div key={i} className="space-y-2 border-l-4 border-slate-100 pl-6 group hover:border-blue-500 transition-all">
                   <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">प्रश्न {i+1}</p>
                   <p className="text-sm font-black text-slate-800">{faq.q}</p>
                   <p className="text-xs font-bold text-slate-500 italic">उत्तर: {faq.a}</p>
                </div>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
}