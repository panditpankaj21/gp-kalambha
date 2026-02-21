"use client";
import { useState } from 'react';
import Image from "next/image";
import { 
  Maximize2, X, Camera, 
  LayoutGrid, ChevronRight, 
  ExternalLink, Info, Image as ImageIcon
} from 'lucide-react';

const CATEGORIES = ["सर्व", "प्रशासन", "शिक्षण", "पायाभूत सुविधा", "धार्मिक", "इतर"];

const IMAGES = [
  // प्रशासन (Administration)
  { src: "/gallery/panchayat-building.jpg", title: "ग्रामपंचायत मुख्य इमारत", cat: "प्रशासन" },
  { src: "/gallery/inside-office.jpg", title: "कार्यालय अंतर्गत कक्ष १", cat: "प्रशासन" },
  { src: "/gallery/inside-office2.jpg", title: "कार्यालय अंतर्गत कक्ष २", cat: "प्रशासन" },
  { src: "/gallery/sachiv-office.jpg", title: "सचिव कार्यालय", cat: "प्रशासन" },
  { src: "/gallery/shilla-lekh.jpg", title: "ऐतिहासिक शिलालेख", cat: "प्रशासन" },
  { src: "/gallery/gp-moto.jpg", title: "ग्रामपंचायत ब्रीदवाक्य", cat: "प्रशासन" },
  
  // शिक्षण (Education)
  { src: "/gallery/school-gate.jpg", title: "शाळा मुख्य प्रवेशद्वार", cat: "शिक्षण" },
  { src: "/gallery/school-ground.jpg", title: "शाळा क्रीडांगण १", cat: "शिक्षण" },
  { src: "/gallery/school-ground2.jpg", title: "शाळा क्रीडांगण २", cat: "शिक्षण" },
  { src: "/gallery/school-ground3.jpg", title: "शाळा क्रीडांगण ३", cat: "शिक्षण" },
  { src: "/gallery/school-garden.jpg", title: "शाळा बगीचा", cat: "शिक्षण" },
  { src: "/gallery/school-building-wall.jpg", title: "शाळा इमारत भिंत", cat: "शिक्षण" },
  { src: "/gallery/aaganbadi.jpg", title: "अंगणवाडी केंद्र", cat: "शिक्षण" },

  // पायाभूत सुविधा (Infrastructure)
  { src: "/gallery/village-entry.jpg", title: "ग्राम प्रवेशद्वार", cat: "पायाभूत सुविधा" },
  { src: "/gallery/gp-highway.jpg", title: "हायवे व्ह्यू रोड", cat: "पायाभूत सुविधा" },
  { src: "/gallery/water-tank.jpg", title: "मुख्य पाणी पुरवठा टाकी", cat: "पायाभूत सुविधा" },
  { src: "/gallery/water-tank2.jpg", title: "जलकुंभ दृश्य २", cat: "पायाभूत सुविधा" },
  { src: "/gallery/water-tank3.jpg", title: "जलकुंभ दृश्य ३", cat: "पायाभूत सुविधा" },
  { src: "/gallery/paras-bagh.jpg", title: "पारस बाग प्रकल्प", cat: "पायाभूत सुविधा" },
  { src: "/gallery/open-space.jpg", title: "मोकळी जागा विकास", cat: "पायाभूत सुविधा" },
  { src: "/gallery/open-waiting.jpg", title: "प्रतीक्षा कक्ष (Open)", cat: "पायाभूत सुविधा" },
  { src: "/gallery/railway-station.jpg", title: "रेलवे स्टेशन", cat: "पायाभूत सुविधा" },

  // धार्मिक (Religious)
  { src: "/gallery/budh-bihar.jpg", title: "बुद्ध विहार", cat: "धार्मिक" },
  { src: "/gallery/budh-bihar2.jpg", title: "बुद्ध विहार परिसर", cat: "धार्मिक" },
  { src: "/gallery/hanuman-mandir.jpg", title: "हनुमान मंदिर", cat: "धार्मिक" },
  { src: "/gallery/ravidas-mandir.jpg", title: "रविदास मंदिर", cat: "धार्मिक" },

  // इतर (Banners/General)
  { src: "/gallery/banner.jpg", title: "गाव बॅनर १", cat: "इतर" },
  { src: "/gallery/banner2.jpg", title: "गाव बॅनर २", cat: "इतर" },
  { src: "/gallery/banner4.jpg", title: "गाव बॅनर ३", cat: "इतर" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("सर्व");
  const [selectedImg, setSelectedImg] = useState<{src: string, title: string} | null>(null);

  const filteredImages = filter === "सर्व" 
    ? IMAGES 
    : IMAGES.filter(img => img.cat === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 selection:bg-blue-600 selection:text-white">
      
      {/* 1. Header: Matches Elite Style */}
      <div className="bg-slate-950 pt-10 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 shadow-2xl">
               <Camera size={14} className="text-blue-400" />
               <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">Village Digital Archive</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter flex items-center justify-center gap-3 italic">
              छायाचित्र <span className="text-blue-500 uppercase">गॅलरी</span>
            </h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-2 italic">A Visual Journey Through Kalambha's Excellence</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        
        {/* 2. Sleek Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                ? "bg-slate-900 text-white border-blue-500 shadow-xl shadow-blue-900/20 translate-y-[-2px]" 
                : "bg-white text-slate-500 border-slate-200 hover:border-blue-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Masonry-style Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImg(img)}
              className="break-inside-avoid group bg-white p-2 rounded-2xl shadow-md border border-white hover:border-blue-500 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="relative rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                   <div className="flex items-center justify-between items-end">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest mb-1">{img.cat}</p>
                         <h3 className="text-white text-xs font-black uppercase tracking-tight">{img.title}</h3>
                      </div>
                      <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md border border-white/20">
                         <Maximize2 size={16} className="text-white" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. No Images Found */}
        {filteredImages.length === 0 && (
           <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
              <ImageIcon size={48} className="mx-auto text-slate-300 mb-4 animate-pulse" />
              <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.2em]">या विभागामध्ये फोटो उपलब्ध नाहीत</p>
           </div>
        )}
      </div>

      {/* 5. Advanced Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-all bg-white/5 p-3 rounded-full border border-white/10 hover:rotate-90"
          >
            <X size={24} />
          </button>
          
          <div className="relative w-full max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img 
              src={selectedImg.src} 
              alt={selectedImg.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
            />
            
            <div className="mt-8 text-center space-y-2">
               {/* <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">{selectedImg.cat}</span> */}
               <h2 className="text-white text-xl md:text-2xl font-black italic tracking-tighter">{selectedImg.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}