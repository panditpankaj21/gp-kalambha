"use client";
import { useState } from 'react';
import { 
  School, Users, UserCheck, MapPin, 
  Phone, Clock, Zap, Droplets, Monitor, 
  ShieldAlert, ChevronRight, GraduationCap
} from 'lucide-react';

const FACILITIES = [
  {
    id: 1,
    type: "शाळा",
    name: "झेड.पी. प्रा.शाळा कलंभा",
    desc: "पिण्याचे स्वच्छ पाणी, इलेक्ट्रिक सुविधा, कॉम्पुटर सुविधा उपलब्ध.",
    stats: { boys: 23, girls: 15, total: 38, staff: 3 },
    amenities: ["पिण्याचे स्वच्छ पाणी", "इलेक्ट्रिक सुविधा", "कॉम्पुटर सुविधा"],
    address: "जिल्हा परिषद प्रा.शाळा कलंभा, ता. काटोल, जि. नागपूर",
    contactPerson: "श्रीमती. एस.बी. केने",
    phone: "9970414950",
    timing: "10.30 AM ते 5.00 PM",
    emergency: "",
    theme: "blue"
  },
  {
    id: 2,
    type: "शाळा",
    name: "झेड.पी. प्रा.शाळा मोह्खेडी",
    desc: "पिण्याचे स्वच्छ पाणी, इलेक्ट्रिक सुविधा, कॉम्पुटर सुविधा उपलब्ध.",
    stats: { boys: 1, girls: 3, total: 4, staff: 1 },
    amenities: ["पिण्याचे स्वच्छ पाणी", "इलेक्ट्रिक सुविधा", "कॉम्पुटर सुविधा"],
    address: "जिल्हा परिषद प्रा.शाळा मोह्खेडी, ता. काटोल, जि. नागपूर",
    contactPerson: "श्री. आर. डी. डेहनकर",
    phone: "9763404289",
    timing: "10.30 AM ते 5.00 PM",
    emergency: "",
    theme: "indigo"
  }
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100">
      
      {/* Header Section */}
      <div className="relative bg-slate-950 pt-16 pb-32 px-4 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
            <Zap size={14} className="text-blue-400" />
            <span className="text-blue-400 font-bold text-[9px] uppercase tracking-[0.2em]">Village Infrastructure</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-2">
            सुविधा व <span className="text-blue-500">पायाभूत</span> सोयी
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Facilities - Health, Education & Others</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-16 pb-20 relative z-20">
        <div className="grid grid-cols-1 gap-8">
          {FACILITIES.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Section: Stats Dashboard */}
                <div className="lg:w-1/3 bg-slate-900 p-8 text-white relative overflow-hidden flex flex-col justify-between border-r border-slate-800">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16"></div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/20">
                        <School size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">प्रकार: {item.type}</p>
                        <h2 className="text-xl font-black leading-tight">{item.name}</h2>
                      </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                        <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">मुले</p>
                        <p className="text-xl font-black">{item.stats.boys}</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                        <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">मुली</p>
                        <p className="text-xl font-black">{item.stats.girls}</p>
                      </div>
                      <div className="bg-blue-600/20 p-4 rounded-2xl border border-blue-500/30 text-center">
                        <p className="text-[9px] font-bold text-blue-300 uppercase mb-1">एकूण विद्यार्थी</p>
                        <p className="text-xl font-black text-blue-400">{item.stats.total}</p>
                      </div>
                      <div className="bg-orange-500/10 p-4 rounded-2xl border border-orange-500/20 text-center text-orange-400">
                        <p className="text-[9px] font-bold uppercase mb-1">शिक्षक</p>
                        <p className="text-xl font-black">{item.stats.staff}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 font-medium italic border-l-2 border-blue-600 pl-4 leading-relaxed">
                    "{item.desc}"
                  </p>
                </div>

                {/* Right Section: Details & Contact */}
                <div className="lg:w-2/3 bg-gray-50 p-8 lg:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Available Amenities */}
                    <div>
                      <h4 className="text-[10px] font-black text-blue-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <GraduationCap size={16} className="text-orange-500"/> उपलब्ध सेवा / सुविधा
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 italic">
                             {amenity.includes("पाणी") && <Droplets size={14} className="text-blue-500" />}
                             {amenity.includes("इलेक्ट्रिक") && <Zap size={14} className="text-orange-500" />}
                             {amenity.includes("कॉम्पुटर") && <Monitor size={14} className="text-indigo-500" />}
                             {amenity}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Address & Logistics */}
                    <div className="space-y-6">
                       <div className="flex gap-4 items-start">
                          <div className="p-2 bg-slate-100 rounded-lg text-slate-400"><MapPin size={18}/></div>
                          <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase">पत्ता (Address)</p>
                            <p className="text-xs font-bold text-slate-700 leading-relaxed">{item.address}</p>
                          </div>
                       </div>
                       <div className="flex gap-4 items-start">
                          <div className="p-2 bg-slate-100 rounded-lg text-slate-400"><Clock size={18}/></div>
                          <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase">वेळ (Timing)</p>
                            <p className="text-xs font-black text-slate-900">{item.timing}</p>
                          </div>
                       </div>
                    </div>

                    {/* Contact Person Card */}
                    <div className="md:col-span-2 mt-4">
                      <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-900 shadow-sm border border-slate-100">
                             <UserCheck size={24} />
                          </div>
                          <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase">संपर्क व्यक्ति</p>
                            <p className="text-base font-black text-slate-900">{item.contactPerson}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                           {item.emergency && (
                             <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl border border-red-100 animate-pulse">
                               <ShieldAlert size={16} />
                               <span className="text-[10px] font-black uppercase">Emergency: {item.emergency}</span>
                             </div>
                           )}
                           <a 
                             href={`tel:${item.phone}`} 
                             className="flex items-center gap-3 bg-blue-900 text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl active:scale-95"
                           >
                             <Phone size={18} className="text-orange-400" />
                             {item.phone}
                           </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}