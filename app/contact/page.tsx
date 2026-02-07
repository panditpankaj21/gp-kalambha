"use client";
import { 
  MapPin, Phone, Mail, Clock, 
  UserCheck, ShieldCheck, ChevronRight,
  MessageSquare, PhoneCall, ExternalLink,
  User2
} from 'lucide-react';

const CONTACT_OFFICERS = [
  {
    name: "श्रीमती. करिश्मा प्रविण पंचभाई",
    role: "सरपंच",
    phone: "9284639826",
    color: "orange",
    image: "" // Add your image path here later
  },
  {
    name: "श्री. आशिष शेषराव रेवतकर",
    role: "ग्रामपंचायत अधिकारी",
    phone: "9923620736",
    color: "blue",
    image: "/members/gp-officer.jpg" // Add your image path here later
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100">
      
      {/* Header Section */}
      <div className="relative bg-slate-950 pt-16 pb-32 px-4 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full mb-4">
            <ShieldCheck size={14} className="text-orange-500" />
            <span className="text-orange-500 font-bold text-[9px] uppercase tracking-[0.2em]">Communication Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-2">
            आमच्याशी <span className="text-orange-500">संपर्क</span> साधा
          </h1>
          <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest italic">GP Kalambha Official Directory</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-16 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Side: Office Details Card */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden h-fit">
            <div className="p-6 md:p-10 border-b border-slate-50 bg-slate-50/50">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
                <div className="p-2 bg-blue-900 text-white rounded-xl">
                  <MapPin size={18} />
                </div>
                मुख्य कार्यालय माहिती
              </h2>
            </div>
            
            <div className="p-6 md:p-10 space-y-6">
                {/* Address Row */}
                <div className="flex gap-4 group">
                  <div className="p-3 h-fit bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-orange-50">
                     <MapPin size={18} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">पत्ता (Address)</p>
                    <p className="text-sm font-bold text-slate-800 leading-relaxed">
                      ग्रामपंचायत कार्यालय कलंभा, सोनोली,<br />
                      ता. काटोल, जिल्हा नागपूर ४४१३०५
                    </p>
                  </div>
                </div>

                {/* Main Phone Row */}
                <div className="flex gap-4 group">
                  <div className="p-3 h-fit bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-blue-50">
                     <PhoneCall size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">मुख्य फोन नंबर</p>
                    <p className="text-base font-black text-slate-900 leading-none">८०८०९८४८२७</p>
                  </div>
                </div>

                {/* Email Row */}
                <div className="flex gap-4 group">
                  <div className="p-3 h-fit bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-emerald-50">
                     <Mail size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">ई-मेल (आधिकारिक)</p>
                    <p className="text-sm font-bold text-slate-700">gpkalambha@gmail.com</p>
                  </div>
                </div>

              {/* Working Hours Badge */}
              <div className="mt-8 p-4 bg-blue-900 rounded-2xl text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-orange-400" />
                  <div className=''>
                    <p className="text-[8px] font-black uppercase text-blue-300">कार्यालयीन वेळ</p>
                    <p className="text-xs font-bold">सकाळी ०९:४५ ते संध्याकाळी ०६:१५</p>
                  </div>
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Side: Key Officers Section */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-2 flex items-center gap-2 px-4">
              <UserCheck size={14} className="text-orange-600" /> मुख्य अधिकारी
            </h3>
            
            {CONTACT_OFFICERS.map((officer, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 hover:border-blue-600 transition-all duration-500 group relative">
                <div className="flex items-center gap-4 mb-5">
                  {/* Photo Placeholder */}
                  <div className={`w-16 h-16 rounded-full shrink-0 overflow-hidden border-2 shadow-sm flex items-center justify-center ${officer.color === 'orange' ? 'bg-orange-50 border-orange-100 text-orange-400' : 'bg-blue-50 border-blue-100 text-blue-400'}`}>
                    {officer.image ? (
                      <img src={officer.image} alt={officer.name} className="w-full h-full object-cover" />
                    ) : (
                      <User2 size={32} className="opacity-50 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{officer.role}</p>
                    <h4 className="text-base font-black text-slate-900 leading-tight">{officer.name}</h4>
                  </div>
                </div>
                
                <a 
                  href={`tel:${officer.phone}`}
                  className="flex items-center justify-between w-full p-3 bg-slate-900 text-white rounded-xl font-black text-xs hover:bg-orange-600 transition-all active:scale-95 shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-orange-400" />
                    <span className="tracking-tight">{officer.phone}</span>
                  </div>
                  <div className="bg-white/10 p-1 rounded-md">
                    <ChevronRight size={14} />
                  </div>
                </a>
              </div>
            ))}

            {/* Support Card */}
            <div className="bg-slate-900 rounded-[2rem] p-6 text-white relative overflow-hidden border-b-4 border-orange-500 shadow-2xl">
               <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10 animate-pulse"></div>
               <MessageSquare size={24} className="mb-3 text-orange-500" />
               <h4 className="text-lg font-black mb-1">मदत हवी आहे?</h4>
               <p className="text-[11px] font-medium text-slate-400 leading-relaxed mb-4 italic italic">काही अडचण असल्यास कार्यालयाशी संपर्क साधा.</p>
               <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
                  तक्रार नोंदवा <ExternalLink size={12} />
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}