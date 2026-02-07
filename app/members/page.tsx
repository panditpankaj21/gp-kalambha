"use client";
import { 
  UserCircle2, Phone, Mail, ShieldCheck, 
  Users, Award, PhoneCall, UserRound, UserRoundSearch,
  ArrowUpRight
} from 'lucide-react';

const LEADERS = [
  {
    name: "श्रीमती. करिश्मा प्रविण पंचभाई",
    role: "सरपंच",
    phone: "9284639826",
    email: "gpkalambha@gmail.com",
    bio: "गावाचा सर्वांगीण विकास आणि नियोजनाची मुख्य जबाबदारी.",
    image: "", // Add path when ready
    rank: "पहिले नागरिक"
  },
  {
    name: "श्री. जानराव भिकुदेव महाजन",
    role: "उपसरपंच",
    phone: "",
    email: "gpkalambha@gmail.com",
    bio: "सरपंचांच्या गैरहजेरीत प्रशासकीय कामकाजात सहकार्य करणे.",
    image: "", // Add path when ready
    rank: "लोकप्रतिनिधी"
  },
  {
    name: "श्री. आशिष शेषराव रेवतकर",
    role: "ग्राम पंचायत अधिकारी (सचिव)",
    phone: "9923620736",
    email: "gpkalambha@gmail.com",
    bio: "सर्व प्रशासकीय व आर्थिक व्यवहार सांभाळणे आणि योजना अंमलबजावणी करणे.",
    image: "/members/gp-officer.jpg", // Image path integrated
    rank: "प्रशासकीय प्रमुख"
  }
];

const MEMBERS = [
  { name: "श्री. लोमस भिकुदेव गातार", role: "सदस्य", phone: "9921345368", gender: "male" },
  { name: "श्री. विठ्ठल गुलाब पंचभाई", role: "सदस्य", phone: "", gender: "male" },
  { name: "श्री. बळवंता भांजी नारनवरे", role: "सदस्य", phone: "7620523878", gender: "male" },
  { name: "श्रीमती. अस्मिता शुद्धोधन रक्षित", role: "सदस्या", phone: "", gender: "female" },
  { name: "श्रीमती. प्रमिला गोपाल मचला", role: "सदस्या", phone: "", gender: "female" },
  { name: "श्रीमती. शालू हरिचंद्र टेकाम", role: "सदस्या", phone: "", gender: "female" },
  { name: "श्रीमती. गुंफा शरद गातार", role: "सदस्या", phone: "9689141857", gender: "female" },
  { name: "श्रीमती. वर्षा जिवन वाहने", role: "सदस्या", phone: "", gender: "female" },
];

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100">
      
      {/* Premium Header Section */}
      <div className="relative bg-slate-950 pt-16 pb-44 px-4 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full mb-6">
            <ShieldCheck size={14} className="text-orange-500" />
            <span className="text-orange-500 font-bold text-[9px] uppercase tracking-[0.2em]">Village Leadership</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-4 leading-tight">
            पदाधिकारी व <span className="text-orange-500">लोकप्रतिनिधी</span>
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Gram Panchayat Kalambha Team</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        
        {/* Top 3 Leaders Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {LEADERS.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 flex flex-col items-center text-center group hover:border-blue-600 transition-all duration-500">
              
              {/* Image Logic: Shows Photo if path exists, otherwise Icon */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-50 overflow-hidden shrink-0 border-4 border-white shadow-xl relative mb-6">
                 {leader.image ? (
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                 ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-200 bg-slate-50">
                      <UserCircle2 size={100} />
                    </div>
                 )}
              </div>
              
              <span className="bg-blue-50 text-blue-700 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3 italic">
                {leader.rank}
              </span>
              <h2 className="text-xl font-black text-slate-900 mb-1">{leader.name}</h2>
              <p className="text-orange-600 font-bold text-sm mb-4">{leader.role}</p>
              <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 px-4 italic leading-tight">
                "{leader.bio}"
              </p>
              
              <div className="flex gap-3 mt-auto pt-4 border-t border-slate-50 w-full justify-center">
                {leader.phone && (
                  <a 
                    href={`tel:${leader.phone}`} 
                    className="p-3 bg-slate-900 text-white rounded-2xl hover:bg-blue-600 transition-all shadow-lg active:scale-90"
                    title="Call Now"
                  >
                    <Phone size={18} />
                  </a>
                )}
                <a 
                  href={`mailto:${leader.email}`} 
                  className="p-3 bg-slate-100 text-slate-600 rounded-2xl hover:bg-orange-500 hover:text-white transition-all"
                  title="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Members Grid Section */}
        <div className="bg-white rounded-[3rem] p-6 md:p-12 shadow-xl border border-slate-100">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-6">
            <div className="h-8 w-1.5 bg-orange-500 rounded-full" />
            <div className="flex flex-col">
               <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight leading-none">पंचायत सदस्य मंडळ</h3>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Elected Village Council</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MEMBERS.map((member, idx) => (
              <div key={idx} className="p-5 rounded-[2rem] bg-slate-50 border border-transparent hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl shadow-sm transition-colors ${member.gender === 'female' ? 'bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white' : 'bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'}`}>
                    {member.gender === 'female' ? <UserRoundSearch size={22} /> : <UserRound size={22} />}
                  </div>
                  <Award size={16} className="text-slate-200 group-hover:text-orange-400 transition-colors" />
                </div>
                
                <h4 className="font-black text-slate-800 text-sm leading-tight mb-1 group-hover:text-blue-900 transition-colors">
                  {member.name}
                </h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                  {member.role}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/40">
                  <span className="text-[10px] font-black text-slate-500 tracking-tighter">
                    {member.phone ? member.phone : "संपर्क नाही"}
                  </span>
                  {member.phone && (
                    <a 
                      href={`tel:${member.phone}`} 
                      className="text-blue-600 hover:text-orange-600 transition-colors active:scale-90"
                    >
                      <PhoneCall size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}