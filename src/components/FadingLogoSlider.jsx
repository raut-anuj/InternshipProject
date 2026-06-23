import React, { useState, useEffect } from "react";

export default function FadingLogoSlider() {
  const items = [
    "Paper Boat", 
    "IIFL Finance",
    "SpiceJet", 
    "Tata Play", 
    "Max Life", 
    "Union Bank",
    "Company 7",
    "Company 8"
  ];
  const [idx, setIdx] = useState(0);

  // Auto-scroll logic: har 3 second mein move karega
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev >= items.length - 5 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
      <div className="flex items-center justify-center gap-6 w-full max-w-5xl px-4">
        
        {/* Left Arrow */}
        <button
          onClick={() => setIdx((p) => Math.max(0, p - 1))}
          className="z-20 h-12 w-12 shrink-0 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition active:scale-95"
        >
          <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Masked Container: Edge fading ke liye */}
        <div 
          className="overflow-hidden w-[1000px]"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        >
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${idx * 200}px)` }}
          >
            {items.map((name, i) => (
              <div key={i} className="w-[200px] shrink-0` flex items-center justify-center h-32">
                {/* Clean Box: Halke grey text ke sath taaki sliding movement dikhe */}
                <div className="w-40 h-20 flex items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm text-gray-400 font-medium transition-all duration-500">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => setIdx((p) => (p >= items.length - 5 ? 0 : p + 1))}
          className="z-20 h-12 w-12 shrink-0 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition active:scale-95"
        >
          <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}