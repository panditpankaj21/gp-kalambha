"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const images = [
    "/gallery/panchayat-building.jpg", // 1920x1080 recommended
    "/gallery/school-garden.jpg",
    "/gallery/inside-office.jpg",
    "/gallery/open-space.jpg",
    "/gallery/open-waiting.jpg",
    "/gallery/school-gate.jpg",
    "/gallery/school-ground.jpg",
    "/gallery/water-tank.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative md:h-115 aspect-video w-full overflow-hidden group">

      {/* Image */}
      <Image
        src={images[currentIndex]}
        alt="Hero Slide"
        fill
        priority
        className="object-cotain transition-all duration-2000 ease-in-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10" />

      {/* Content */}
  

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/50 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/50 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={22} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 right-6 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === index
                ? "w-8 bg-orange-500"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}