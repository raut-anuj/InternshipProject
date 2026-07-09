import { motion, animate } from "../utils/framerMotion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "./reactquery.css";

const Card = ({ title, obj, suffix = null }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [count, setCount] = useState(0);

  const numericValue = obj?.value || 0;
  const isInteger = numericValue % 1 === 0;

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    const controls = animate(0, numericValue, {
      duration: 3,
      ease: "easeOut",
      onUpdate(value) {
        setCount(value);
      },
    });

    return () => controls.stop();
  }, [inView, numericValue]);

  const formattedValue = isInteger
    ? Math.round(count)
    : count.toFixed(2);

  return (
    <motion.div ref={ref} className="stats-card">
      <div className="stats-number-wrapper">
        <span className="stats-number">
          {formattedValue}
          {suffix ?? obj?.suffix}+
        </span>
      </div>

      <h2 className="stats-title">
        {title}
      </h2>
    </motion.div>
  );
};

export default Card;