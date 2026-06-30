import { motion, animate } from "../utils/framerMotion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "./reactquery2.css";
 
const CardData = ({ title, obj, suffix = null }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const numericValue = obj?.value || 0;
  const isInteger = numericValue % 1 === 0;

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    const controls = animate(0, numericValue, {
      duration: 3,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(latest);
      },
    });

    return () => controls.stop();
  }, [inView, numericValue]);

  const formattedValue = isInteger
    ? Math.round(count)
    : count.toFixed(2);

  const safeSuffix = suffix ?? obj?.suffix ?? "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="holder-card"
    >
      <div className="holder-number-wrapper">
        <span className="holder-number">
          {formattedValue}
          {safeSuffix}+
        </span>
      </div>

      <h2 className="holder-title">
        {title}
      </h2>
    </motion.div>
  );
};

export default CardData;