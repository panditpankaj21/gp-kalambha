"use client";
import { 
  UserCircle2, Phone, Mail, Award, 
  PhoneCall, UserRound, UserRoundSearch, ShieldCheck, 
  LayoutGrid, Users, Zap, CheckCircle2
} from 'lucide-react';

const LEADERS = [
  {
    name: "श्रीमती. करिश्मा प्रविण पंचभाई",
    role: "सरपंच",
    phone: "9284639826",
    email: "gpkalambha@gmail.com",
    image: "", 
    color: "from-orange-500 to-amber-600",
    glow: "shadow-orange-500/20"
  },
  {
    name: "श्री. जानराव भिकुदेव महाजन",
    role: "उपसरपंच",
    phone: "",
    email: "gpkalambha@gmail.com",
    image: "", 
    color: "from-blue-600 to-indigo-700",
    glow: "shadow-blue-500/20"
  },
  {
    name: "श्री. आशिष शेषराव रेवतकर",
    role: "ग्राम पंचायत अधिकारी",
    phone: "9923620736",
    email: "gpkalambha@gmail.com",
    image: "/members/gp-officer.jpg", 
    color: "from-emerald-600 to-teal-700",
    glow: "shadow-emerald-500/20"
  }
];

const MEMBERS = [
  { name: "श्री. लोमस भिकुदेव गातार", role: "सदस्य", phone: "9921345368", gender: "male" },
  { name: "श्री. विठ्ठल गुलाब पंचभाई", role: "सदस्य", phone: "-", gender: "male" },
  { name: "श्री. बळवंता भांजी नारनवरे", role: "सदस्य", phone: "7620523878", gender: "male" },
  { name: "श्रीमती. अस्मिता शुद्धोधन रक्षित", role: "सदस्या", phone: "-", gender: "female" },
  { name: "श्रीमती. प्रमिला गोपाल मचला", role: "सदस्या", phone: "-", gender: "female" },
  { name: "श्रीमती. शालू हरिचंद्र टेकाम", role: "सदस्या", phone: "-", gender: "female" },
  { name: "श्रीमती. गुंफा शरद गातार", role: "सदस्या", phone: "9689141857", gender: "female" },
  { name: "श्रीमती. वर्षा जिवन वाहने", role: "सदस्या", phone: "-", gender: "female" },
];

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] pb-10 selection:bg-blue-200">
      
      {/* 1. Header: Sleek & Integrated */}
      <div className="bg-slate-950 pt-10 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full mb-3">
               <Zap size={12} className="text-orange-500 fill-orange-500" />
               <span className="text-orange-500 font-black text-[8px] uppercase tracking-[0.2em]">Verified Governance</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter flex items-center justify-center gap-2">
              पंचायत <span className="text-blue-500">नेतृत्व</span> सूची
            </h2>
            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em] mt-1">Gram Panchayat Kalambha Administration</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-20">
        
        {/* 2. Leaders: Dynamic Cards with Border Glows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {LEADERS.map((leader, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${leader.color} rounded-[2.5rem] p-5 shadow-2xl ${leader.glow} transform transition-all hover:-translate-y-2 duration-500 group overflow-hidden relative border border-white/20`}>
               <div className="absolute -right-4 -bottom-4 text-white opacity-10 rotate-12 group-hover:scale-125 transition-transform duration-700">
                  <ShieldCheck size={120} />
               </div>
               
               <div className="flex flex-col items-center text-center relative z-10 text-white">
                {/* Image Wrap with Pulsing Border */}
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md overflow-hidden border-2 border-white/50 mb-4 shadow-2xl flex items-center justify-center group-hover:border-white transition-all">
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-40"><UserCircle2 size={50} /></div>
                  )}
                </div>
                
                <h3 className="font-black text-[15px] leading-tight drop-shadow-lg mb-1">{leader.name}</h3>
                <span className="text-[8px] font-black uppercase tracking-widest bg-black/20 px-2 py-0.5 rounded-md border border-white/10 mb-4">{leader.role}</span>
                
                <div className="flex gap-2.5 w-full">
                    {leader.phone && (
                      <a href={`tel:${leader.phone}`} className="flex-1 p-2 bg-white/20 hover:bg-white hover:text-slate-900 rounded-xl transition-all shadow-md active:scale-90 flex justify-center items-center gap-2 font-black text-[9px] uppercase tracking-wider">
                        <PhoneCall size={12} /> Call
                      </a>
                    )}
                    <a href={`mailto:${leader.email}`} className="p-2.5 bg-white/20 hover:bg-white hover:text-slate-900 rounded-xl transition-all shadow-md active:scale-90">
                      <Mail size={14} />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Members Table: Colorful & Dense */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] border border-white overflow-hidden">
          <div className="bg-slate-50/80 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
                  <LayoutGrid size={14} />
               </div>
               <h3 className="font-black text-slate-800 text-[11px] uppercase tracking-widest">कार्यकारिणी सभासद</h3>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border shadow-sm">
                <CheckCircle2 size={10} className="text-emerald-500" />
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">Active Members</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="hidden sm:table-cell px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">प्रोफाइल</th>
                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">नाम निर्देशन</th>
                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">कार्यभार</th>
                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">संपर्क दुवा</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/50">
                {MEMBERS.map((member, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50 transition-all duration-300">
                    <td className="hidden sm:table-cell px-6 py-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border-2 border-white ${member.gender === 'female' ? 'bg-pink-100 text-pink-500' : 'bg-blue-100 text-blue-500'}`}>
                        {member.gender === 'female' ? <UserRoundSearch size={18} /> : <UserRound size={18} />}
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <p className="font-black text-slate-800 text-[12px] leading-tight group-hover:text-blue-600 transition-colors">{member.name}</p>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">Verified Council Member</p>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <span className={`text-[9px] font-black px-3 py-1 rounded-lg border-b-2 shadow-sm ${member.role === 'उपसरपंच' ? 'bg-orange-50 border-orange-200 text-orange-600' : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <span className="text-[10px] font-black text-slate-400 tabular-nums hidden md:inline">{member.phone}</span>
                        {member.phone !== "-" ? (
                          <a href={`tel:${member.phone}`} className="p-2 bg-slate-900 text-white rounded-xl hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-200">
                            <PhoneCall size={12} />
                          </a>
                        ) : (
                          <div className="p-2 bg-slate-100 text-slate-300 rounded-xl italic text-[8px] font-black px-3">PROTECTED</div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}