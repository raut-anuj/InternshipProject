import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Card = ({ title, obj, suffix = null }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  
  const numericValue = obj.value;
  const isInteger = numericValue % 1 === 0;
  
  const count = useMotionValue(isInteger ? 0 : 0.00);

  const animatedDisplay = useTransform(count, (latest) => {
    const formattedValue = isInteger ? Math.round(latest) : latest.toFixed(2);
    const safeSuffix = suffix ? suffix : obj.suffix;
    return `${formattedValue}${safeSuffix}+`; 
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericValue, {
        duration: 1.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    } else {
      count.set(isInteger ? 0 : 0.00);
    }
  }, [inView, numericValue, count, isInteger]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="rounded-xl border p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
    >
      <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
        {title}
      </h2>
      
    <div className="flex flex-row items-baseline">
      <span className="text-5xl font-semibold text-black">
        <motion.span>{animatedDisplay}</motion.span>
      </span>
    </div>


    </motion.div>
  );
};

export default Card;