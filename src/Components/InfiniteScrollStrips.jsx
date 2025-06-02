import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import {  ArrowBigRightDashIcon } from "lucide-react";

const InfiniteScrollStrip = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05,
    });

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["5%", "-100%"]);

  const messages = [
    "Pitch Decks That Win Investors.",
    "Strategic Storytelling for Startups.",
    "Custom Business Plans That Work.",
    "Teaser Videos That Spark Interest.",
    "On-Demand Experts for Every Stage.",
    "Click Funnel—Where Startups Scale Smart.",
  ];

  return (
    <div 
      className="w-full bg-black py-10 overflow-hidden"
      ref={containerRef}
    >
      <motion.div 
        className="flex items-center whitespace-nowrap"
        ref={scrollRef}
        style={{ x: xTransform }}
      >
        {[...messages, ...messages].map((message, index) => (
          <div 
            key={`${index}-${message.substring(0, 5)}`} 
            className="flex items-center mx-8"
          >
            <span className="text-3xl md:text-4xl font-bold text-white">
              {message}
            </span>
            <ArrowBigRightDashIcon className="ml-16 text-white w-8 h-8 flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollStrip;
