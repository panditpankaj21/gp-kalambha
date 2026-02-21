"use client";
import { 
  Bell, 
  Calendar, 
  Search, 
  Zap, 
  Inbox, 
  ShieldCheck, 
  ArrowRight,
  Info,
  Clock,
  Volume2
} from 'lucide-react';

export default function NoticesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16 selection:bg-blue-100 font-sans">
      
      {/* 1. Header: Matches Elite Dashboard Style */}
      <div className="bg-slate-950 pt-10 pb-24 px-4 text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 shadow-2xl">
               <Volume2 size={14} className="text-blue-400 animate-bounce" />
               <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">Communication Hub Active</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter flex items-center justify-center gap-3 italic">
              जाहीर <span className="text-blue-500 uppercase">सूचना</span> केंद्र
            </h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-2 italic text-center">Official Announcements • Gram Panchayat Kalambha</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        
        {/* 2. Utility Bar: Search & Filter (Static for now) */}
        <div className="bg-white p-2 rounded-2xl shadow-xl border border-white flex items-center gap-2 mb-8">
           <div className="p-3 bg-slate-50 rounded-xl text-slate-400"><Search size={18} /></div>
           <input 
             disabled 
             type="text" 
             placeholder="सूचना शोधण्यासाठी येथे टाईप करा..." 
             className="bg-transparent border-none text-xs font-bold text-slate-400 w-full focus:ring-0 cursor-not-allowed"
           />
           <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-[9px] font-black text-slate-400 uppercase tracking-widest border border-slate-100 italic">
              All Records
           </div>
        </div>

        {/* 3. Main Content: Empty State / Placeholder */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-white p-10 md:p-20 relative overflow-hidden">
           
           {/* Decorative Elements */}
           <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-blue-600 rotate-12">
              <Bell size={300} />
           </div>

           <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              
              {/* Animated Icon Container */}
              <div className="relative">
                 <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                 <div className="relative bg-white p-8 rounded-[2rem] border-2 border-slate-50 shadow-inner">
                    <Inbox size={48} className="text-blue-600 opacity-20" />
                 </div>
                 <div className="absolute -top-2 -right-2 bg-orange-500 text-white p-2 rounded-xl shadow-lg border-2 border-white">
                    <Clock size={16} />
                 </div>
              </div>

              {/* Text Info */}
              <div className="space-y-3">
                 <h3 className="text-2xl md:text-3xl font-black text-slate-800 italic tracking-tight">सध्या कोणतीही सूचना नाही</h3>
                 <p className="text-sm text-slate-400 font-bold max-w-sm mx-auto leading-relaxed uppercase tracking-tighter italic">
                   भविष्यातील सर्व जाहीर प्रकटन, सरकारी आदेश आणि ग्रामपंचायतीच्या नवीन सूचना येथे वेळोवेळी प्रकाशित केल्या जातील.
                 </p>
              </div>

              {/* Mock Placeholder (How a notice will look) */}
              <div className="w-full max-w-md bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-100 p-6 opacity-40">
                 <div className="flex items-center justify-between mb-4">
                    <div className="h-4 w-24 bg-slate-200 rounded-full" />
                    <div className="h-4 w-16 bg-slate-200 rounded-full" />
                 </div>
                 <div className="space-y-2">
                    <div className="h-2.5 w-full bg-slate-200 rounded-full" />
                    <div className="h-2.5 w-2/3 bg-slate-200 rounded-full" />
                 </div>
                 <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between">
                    <div className="h-4 w-20 bg-slate-200 rounded-full" />
                    <div className="h-4 w-4 bg-slate-200 rounded-full" />
                 </div>
              </div>

              <div className="flex items-center gap-4 text-emerald-600 font-black text-[10px] uppercase tracking-[0.2em] bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100">
                 <ShieldCheck size={14} /> सुरक्षित व अधिकृत माध्यम
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}