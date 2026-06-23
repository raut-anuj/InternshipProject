import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

const brands = ['deloitte', 'techmahindra', 'paperboat', 'C.Dot', 'Delhi'];

export default function FadingLogoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % brands.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white py-16 flex flex-col items-center justify-center overflow-hidden">
      <h3 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-2">BRANDS</h3>
  
      <div className="relative w-full max-w-[400px] h-[100px] flex items-center justify-center border-b border-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={brands[index]}
            initial={{ opacity: 0, x: 100, filter: 'blur(15px)' }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              filter: 'blur(0px)',
              transition: { type: 'spring', stiffness: 80, damping: 20, duration: 0.8 }
            }}
            exit={{ 
              opacity: 0, 
              x: -100, 
              filter: 'blur(12px)',
              transition: { duration: 0.6, ease: 'easeInOut' }
            }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            {/* Yahan hum sirf name pass kar rahe hain */}
            <BrandLogo name={brands[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}