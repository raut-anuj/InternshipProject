import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Container animation (Parent)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Yeh hai woh magic jo ek-ke-baad-ek move karega
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

// Har logo ki apni individual animation
const itemVariants = {
  hidden: { opacity: 0, x: 50, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    x: -50, 
    filter: 'blur(10px)',
    transition: { duration: 0.4 }
  }
};

const BrandSlider = () => {
  const [index, setIndex] = useState(0);
  const groups = [
    ['Deloitte', 'Tech M', 'Paper Boat', 'IIFL', 'SpiceJet'],
    ['Max Life', 'Union Bank', 'ICICI', 'Mercedes', 'John D']
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % groups.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-[150px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex gap-10" // Yahan gap adjust kar sakte hain
        >
          {groups[index].map((brand) => (
            <motion.div variants={itemVariants} key={brand} className="text-2xl font-bold text-gray-700">
              {brand}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BrandSlider;