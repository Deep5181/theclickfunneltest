import { AnimatePresence } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

const phrases = [
  "Get the perfect pitch",
  "Make every slide count",
  "Presentations that win",
  "Turn ideas into impact",
];

const colors = [
  "text-purple-400",
  "text-yellow-400",
  "text-blue-400",
  "text-red-400",
  "text-green-400",
  "text-orange-400",
];

export default function TextMaskAnimation() {
  const bodyRef = useRef(null);
  const [index, setIndex] = useState(0);
  const isInView = useInView(bodyRef, { once: true, margin: "0%" });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= phrases.length - 1) return 0;
        return state + 1;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  return (
    <div ref={bodyRef} className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          className={cn(
            "cursor-pointer tracking-tight text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-none",
            colors[index]
          )}
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {phrases[index]}
        </motion.div>
      </AnimatePresence>
      <p className="cursor-pointer tracking-tight text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-none text-white">
        with TheClickFunnel
      </p>
    </div>
  );
}
