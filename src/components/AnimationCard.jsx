import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function AnimationCard({ number, title, suffix = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Video ki tarah scroll up/down karne par fir se animate hoga
    threshold: 0.3,
  });

  // Framer motion ka motion value jo animation track karega
  const count = useMotionValue(0);
  
  // Isko round figure (integer) mein convert karne ke liye
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      // Yeh exact 1.5 seconds mein 0 se lekar aapke target number tak smooth animate karega
      const controls = animate(count, number, {
        duration: 1.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    } else {
      // Screen se bahar jaane par wapas 0 par reset
      count.set(0);
    }
  }, [inView, number, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      className="w-64 h-40 border rounded-xl flex flex-col justify-center items-center shadow-lg bg-white p-4"
    >
    
      <p className="text-gray-600 text-lg mt-2 font-medium text-center">{title}</p>
    </motion.div>
  );
}

export default AnimationCard;