import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function AnimationCard({ number, title, suffix = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: false,   
    threshold: 0.3,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;

    if (inView) {
      let start = 0;
      const end = Number(number);

      const duration = 1200;
      const stepTime = Math.max(Math.floor(duration / end), 10);

      timer = setInterval(() => {
        start += 1;
        setCount(start);

        if (start >= end) clearInterval(timer);
      }, stepTime);
    } else {
      // 🔥 reset when out of view
      setCount(0);
    }

    return () => clearInterval(timer);
  }, [inView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      className="w-64 h-40 border rounded-xl flex flex-col justify-center items-center shadow-lg"
    >
      <h1 className="text-5xl font-bold">
        {count}
        {suffix}
      </h1>

      <p className="text-xl mt-2">{title}</p>
    </motion.div>
  );
}

export default AnimationCard;