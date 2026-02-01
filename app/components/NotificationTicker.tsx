"use client";
import { Bell } from 'lucide-react';

export default function NotificationTicker() {
  const notices = [
    "नमुना ८ कर आकारणी यादी प्रसिद्ध करण्यात आली आहे.",
    "नवीन घरकुल योजना अर्ज भरण्यास सुरुवात - शेवटची तारीख १५ मार्च २०२६.",
    "ग्रामसभा बैठक दिनांक १० फेब्रुवारी २०२६ रोजी सकाळी १०:०० वाजता आयोजित."
  ];

  return (
    <div className="bg-blue-900 border-y border-blue-800 flex items-center overflow-hidden">
      {/* Label - Fixed on the left */}
      <div className="bg-orange-600 text-white px-4 py-2 z-10 flex items-center gap-2 shadow-lg min-w-fit">
        <Bell size={16} className="animate-bounce" />
        <span className="font-bold text-xs md:text-sm whitespace-nowrap">महत्वाच्या सूचना:</span>
      </div>

      {/* Ticker Container */}
      <div className="relative flex-grow flex items-center h-10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] cursor-pointer">
          {/* Mapping notices twice to ensure seamless looping */}
          {[...notices, ...notices].map((notice, index) => (
            <span key={index} className="text-white text-xs md:text-sm mx-10 font-medium">
              • {notice}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}