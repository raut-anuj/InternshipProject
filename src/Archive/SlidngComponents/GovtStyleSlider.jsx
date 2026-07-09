import React from 'react';

const partners = [
  "Ministry of Finance", "Digital India", "NITI Aayog", 
  "Make In India", "NIC", "ISRO", "DRDO", "SBI"
];

export default function GovtStyleSlider() {
  return (
    <div className="w-full bg-[#f8f9fa] py-12 border-y border-gray-200 font-sans">
      
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#0f2c59] border-b-2 border-[#e31b23] pb-2 inline-block">
          Our Key Partners & Institutions
        </h2>
      </div>

      <div className="w-full overflow-hidden relative max-w-7xl mx-auto px-4">
        
        {/* CSS: Ab yahan sirf animation chal raha hai, hover logic hata diya hai */}
        <style>
          {`
            .marquee-scroll {
              display: flex;
              width: max-content;
              animation: scroll 10s linear infinite;
            }
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>

        <div className="marquee-scroll gap-6 py-2">
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-300 shadow-sm rounded flex items-center justify-center min-w-[220px] h-[90px] px-6 transition-colors duration-300 hover:border-[#0f2c59] hover:shadow-md cursor-pointer"
            >
              <span className="text-gray-700 font-medium text-center uppercase text-sm tracking-wide">
                {partner}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}