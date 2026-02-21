"use client";
import { 
  Phone, Mail, MapPin, Facebook, 
  Twitter, Instagram, Youtube, ExternalLink 
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const abhiyanImages = [
    { src: "/logos/digital-india.png", alt: "Digital India" },
    { src: "/logos/ladli.png", alt: "Ladli Bahna" },
    { src: "/logos/beti-bacho.png", alt: "Beti Bacho" },
    { src: "/logos/panchayatiraj.jpg", alt: "Panchayati Raj" },
    { src: "/logos/vasundhara.jpg", alt: "Vasundhara" },
    { src: "/logos/swachh-bharat.png", alt: "Swachh Bharat" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} fill="currentColor" strokeWidth={0} />, href: "#", color: "text-[#1877F2]" },
    { icon: <Twitter size={20} fill="currentColor" strokeWidth={0} />, href: "#", color: "text-[#1DA1F2]" },
    { icon: <Instagram size={20} />, href: "#", color: "text-[#E4405F]" },
    // YouTube icon fix: using stroke and fill for that "Perfect" look
    { icon: <Youtube size={22} strokeWidth={1.5} />, href: "#", color: "text-[#FF0000] hover:fill-[#FF0000]" },
  ];

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-9 pb-2">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800/50">
          
          {/* About GP */}
          <div className="space-y-5">
            <h3 className="text-white font-black text-2xl italic tracking-tighter">
              ग्रामपंचायत <span className="text-orange-500">कलंभा</span>
            </h3>
            <p className="text-sm leading-relaxed font-medium text-slate-400">
              सोनोली, ता. काटोल, जिल्हा- नागपूर ४४१३०५. <br/>
              डिजिटल ग्रामपंचायत अभियानांतर्गत विकसित अधिकृत संकेतस्थळ.
            </p>
            <div className="flex gap-5 pt-2 items-center">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className={`${social.color} transition-all hover:scale-125 hover:brightness-125`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest border-l-4 border-orange-500 pl-3">महत्वाच्या लिंक्स</h3>
            <ul className="space-y-3 text-[15px] font-bold">
              <li><Link href="/services" className="hover:text-orange-400 flex items-center gap-2 transition-colors"><ExternalLink size={14} className="text-blue-400"/> नागरिक सेवा</Link></li>
              <li><Link href="/schemes" className="hover:text-orange-400 flex items-center gap-2 transition-colors"><ExternalLink size={14} className="text-blue-400"/> शासकीय योजना</Link></li>
              <li><Link href="/members" className="hover:text-orange-400 flex items-center gap-2 transition-colors"><ExternalLink size={14} className="text-blue-400"/> पदाधिकारी</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 flex items-center gap-2 transition-colors"><ExternalLink size={14} className="text-blue-400"/> तक्रार निवारण</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest border-l-4 border-orange-500 pl-3">संपर्क (Contact)</h3>
            <div className="space-y-4 text-[15px] font-medium">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 shrink-0 mt-0.5"/> 
                <span className="text-slate-300">ग्रामपंचायत भवन, सोनोली</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-500 shrink-0"/> 
                <span className="text-slate-300 truncate">gpkalambha@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 font-bold">
                <Phone size={18} className="text-emerald-500 shrink-0"/> 
                <span className="text-slate-200">+91 8080984827</span>
              </div>
            </div>
          </div>

          {/* Shaskiya Abhiyan Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest border-l-4 border-orange-500 pl-3">शासकीय अभियान</h3>
            <div className="grid grid-cols-3 gap-2">
              {abhiyanImages.map((img, i) => (
                <div key={i} className="bg-white p-1 rounded-md flex items-center justify-center h-14 w-full shadow-sm hover:scale-105 transition-transform">
                  <img 
                    src={img.src} 
                    alt={img.alt}  
                    className=" w-auto h-full object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Detailed Developer Credits */}
        <div className=" border-t border-slate-700 flex justify-center items-center pt-2">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-600 order-2 md:order-1">
            © २०२६ ग्रामपंचायत कलंभा. सर्व हक्क राखीव.
          </div>
        </div>

      </div>
    </footer>
  );
}