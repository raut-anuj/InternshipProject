import React from 'react';
import { motion } from 'framer-motion';

const row1Brands = ["Deloitte", "Tech Mahindra", "Paper Boat", "IIFL", "SpiceJet", "Deloitte", "Tech Mahindra"];
const row2Brands = ["Max Life", "Union Bank", "ICICI", "Mercedes-Benz", "Tata Play", "Max Life", "Union Bank"];

// Ek chota reusable component ek single row ke liye
const MarqueeRow = ({ items, reverse = false, speed = 25 }) => {
  return (
    <div className="flex w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-20 items-center w-max px-10"
        // Agar reverse true hai, toh right se left jayega, warna left se right
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((brand, index) => (
          <div
            key={index}
            // Advanced Hover Effects: Grayscale to Color, Opacity change, and Scale up
            className="text-3xl font-extrabold text-gray-800 whitespace-nowrap cursor-pointer 
                       opacity-40 grayscale hover:opacity-100 hover:grayscale-0 
                       hover:scale-110 transition-all duration-400 ease-out"
          >
            {brand}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function AdvancedDualSlider() {
  return (
    <div className="w-full py-20 bg-[#fafafa] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Premium Header */}
      <div className="text-center mb-12">
        <h3 className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold mb-3">
          Trusted by Industry Leaders
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Main Container with Edge Masking */}
      <div 
        className="w-full max-w-6xl mx-auto flex flex-col gap-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        {/* Row 1 - Moves Left */}
        <MarqueeRow items={row1Brands} speed={10} />
        
        {/* Row 2 - Moves Right (reverse={true}) aur thodi fast hai */}
        <MarqueeRow items={row2Brands} reverse={true} speed={15} />
      </div>

    </div>
  );
}