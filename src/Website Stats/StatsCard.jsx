import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StatsCard({ title, obj, icon }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const numericValue = obj?.value ?? 0;
  const isInteger = numericValue % 1 === 0;

  const [count, setCount] = useState(0);

  const formattedValue = isInteger ? Math.round(count) : count.toFixed(2);

  const safeSuffix = obj?.suffix ? `${obj.suffix}+` : "";

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="card"
    >
      <div className="holder-content">
        <div className="value-wrapper">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={icon} className="icon" />
          </div>

          <div className="number-wrapper">
            <span className="number">
              {formattedValue}
              {safeSuffix}
            </span>
          </div>
        </div>

        <h2 className="title">{title}</h2>
      </div>
    </motion.div>
  );
}
