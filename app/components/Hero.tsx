"use client";
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=2000",
    "https://images.unsplash.com/photo-1517089152318-42ec560349c0?q=80&w=2000",
    "https://images.unsplash.com/photo-1464202351453-fa1b1484f0c2?q=80&w=2000",
    "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2000",
    "https://images.unsplash.com/photo-1517089531940-6d0046180556?q=80&w=2000"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const timer = setInterval(() => { nextSlide(); }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[400px] w-full bg-slate-900 overflow-hidden group">
      {/* Dynamic Background Image */}
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-100"
      />
      
      {/* Bottom Blur Overlay - Strengthened slightly for text contrast */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10" />

      {/* Content Container - Bottom Left, Subtle Black Transparent Background */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-end text-white">
        <div className="max-w-lg p-5 rounded-lg bg-black/25 backdrop-blur-[2px] animate-fade-in-up">
          <span className="bg-orange-600 text-[10px] text-white px-2 py-0.5 font-bold uppercase tracking-widest rounded-sm mb-2 inline-block">
            नवीन अपडेट
          </span>
          <h2 className="text-xl md:text-2xl font-bold mb-1 text-white">
            ग्रामपंचायत कलंभा मध्ये आपले स्वागत आहे
          </h2>
          <p className="text-xs md:text-sm text-slate-100 font-light opacity-90 leading-relaxed">
            Official portal of Gram Panchayat Kalambha, Katol, Nagpur. 
            Access digital services and government schemes directly.
          </p>
        </div>
      </div>

      {/* Navigation Buttons - More Minimalist */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/10 hover:bg-black/30 p-2 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/10 hover:bg-black/30 p-2 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-6 z-30 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 transition-all rounded-full ${
              currentIndex === index ? "w-6 bg-orange-500" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}