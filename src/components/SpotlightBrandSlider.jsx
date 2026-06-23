import React from 'react';

const partners = [
  "Ministry of Finance", "Digital India", "NITI Aayog", 
  "Make In India", "NIC", "ISRO", "DRDO", "SBI",
  "LIC", "Indian Railways", "GST Council", "UIDAI"
];

export default function GovtDirectoryGrid() {
  return (
    <div className="w-full bg-white py-16 border-t-4 border-[#eaeaeb]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2c59] mb-4">
            Our Stakeholders & Partners
          </h2>
          <div className="w-20 h-1 bg-[#e31b23] mx-auto rounded-full"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-200 p-4 flex flex-col items-center justify-center text-center hover:bg-[#0f2c59] hover:text-white transition-all duration-300 group cursor-default"
            >
              {/* Dummy Icon Placeholder - Yahan aap logo image daal sakte hain */}
              <div className="w-12 h-12 bg-gray-200 rounded-full mb-3 group-hover:bg-white/20 transition-colors"></div>
              
              <span className="text-xs font-semibold uppercase tracking-tight text-gray-700 group-hover:text-white">
                {partner}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}