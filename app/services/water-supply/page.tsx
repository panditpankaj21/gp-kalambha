"use client";
import Image from "next/image";
import { 
  Droplets, Waves, CheckCircle2, 
  MapPin, Clock, ShieldCheck, 
  Zap, Activity, Info, Users,
  Home, Container
} from 'lucide-react';

const WATER_STATS = [
  { label: "एकूण जलकुंभ", val: "०२ नग", icon: <Droplets />, color: "bg-blue-600" },
  { label: "नळ जोडणी", val: "१००% पूर्ण", icon: <Home />, color: "bg-emerald-600" },
  { label: "पाईपलाईन", val: "गावभर विस्तारित", icon: <Activity />, color: "bg-orange-600" },
  { label: "शुद्धता", val: "ISO मानक", icon: <ShieldCheck />, color: "bg-indigo-600" },
];

export default function WaterSupplyPage() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] pb-16 font-sans selection:bg-blue-100">
      
      {/* 1. Elite Header Banner */}
      <div className="bg-slate-950 pt-10 pb-24 px-4 text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 shadow-2xl">
               <Waves size={14} className="text-blue-400 animate-pulse" />
               <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">Jal Jeevan Mission Terminal</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter flex items-center justify-center gap-3 italic">
              ग्राम <span className="text-blue-500 uppercase">पाणी पुरवठा</span> विभाग
            </h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-2 italic">Automated Distribution • 100% Connectivity</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20 space-y-8">
        
        {/* 2. Quick Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {WATER_STATS.map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-xl border border-white group hover:border-blue-500 transition-all">
               <div className={`${stat.color} text-white p-2 rounded-lg w-fit mb-3 shadow-lg`}>{stat.icon}</div>
               <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
               <p className="text-sm md:text-base font-black text-slate-800 tracking-tight">{stat.val}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* 3. Main Infrastructure Information (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 text-blue-600"><Waves size={200} /></div>
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-1.5 bg-blue-600 rounded-full" />
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight italic">जलव्यवस्थापन व पायाभूत सुविधा</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-slate-600 font-bold leading-relaxed border-l-4 border-blue-500 pl-6 bg-blue-50/50 py-4 rounded-r-2xl italic">
                      "कलंभा गावातील प्रत्येक नागरिकाला शुद्ध आणि मुबलक पाणी मिळावे, यासाठी ग्रामपंचायतीने अत्याधुनिक पाणी पुरवठा यंत्रणा उभारली आहे."
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                            <div className="p-3 bg-white text-blue-600 rounded-xl shadow-sm"><Droplets size={20} /></div>
                            <div>
                                <h4 className="text-sm font-black text-slate-800">दुहेरी जलकुंभ प्रणाली</h4>
                                <p className="text-xs text-slate-500 font-medium mt-1">गावामध्ये पाणी साठवणुकीसाठी दोन अवाढव्य पाणी टाक्या (Water Tanks) उपलब्ध आहेत, ज्यामुळे साठवणूक क्षमता दुपटीने वाढली आहे.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                            <div className="p-3 bg-white text-orange-600 rounded-xl shadow-sm"><Activity size={20} /></div>
                            <div>
                                <h4 className="text-sm font-black text-slate-800">विस्तारित पाईपलाईन जाळे</h4>
                                <p className="text-xs text-slate-500 font-medium mt-1">संपूर्ण गावामध्ये जमिनीखालून पाईपलाईनचे जाळे पसरलेले असून, प्रत्येक गल्लीत पाण्याची सोय करण्यात आली आहे.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                            <div className="p-3 bg-white text-emerald-600 rounded-xl shadow-sm"><Home size={20} /></div>
                            <div>
                                <h4 className="text-sm font-black text-slate-800">वैयक्तिक नळ जोडणी</h4>
                                <p className="text-xs text-slate-500 font-medium mt-1">गावातील प्रत्येक घराला स्वतंत्र नळ जोडणी देण्यात आली आहे, जेणेकरून महिलांची पाण्यासाठी होणारी पायपीट थांबली आहे.</p>
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* 4. Visual Gallery (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-white p-2">
               <div className="grid grid-cols-1 gap-2">
                  <div className="relative h-64 rounded-xl overflow-hidden group">
                     <img 
                        src="/gallery/water-tank.jpg" 
                        alt="Water Tank 1" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                     <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-900 via-transparent text-white text-[10px] font-black uppercase tracking-widest">
                        मुख्य जलकुंभ परिसर
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                     <div className="relative h-40 rounded-xl overflow-hidden group">
                        <img 
                            src="/gallery/water-tank2.jpg" 
                            alt="Water Tank 2" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                     </div>
                     <div className="relative h-40 rounded-xl overflow-hidden group">
                        <img 
                            src="/gallery/water-tank3.jpg" 
                            alt="Water Tank 3" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                     </div>
                  </div>
               </div>
            </div>

            
          </div>
        </div>

      </div>
    </div>
  );
}