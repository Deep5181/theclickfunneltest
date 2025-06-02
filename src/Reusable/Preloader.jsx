import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, FileText, BarChart2, User, TrendingUp, Target } from "lucide-react";

const icons = [Laptop, FileText, BarChart2, User, TrendingUp, Target];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length); // Loop through icons
    }, 500); // Change icon every 500ms

    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500); // Start fade-out animation at 2.5s

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 3000); // Preloader disappears at 3s

    return () => {
      clearInterval(iconInterval);
      clearTimeout(fadeOutTimer);
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (!isLoading) return null;

  const CurrentIcon = icons[index];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} // Smooth fade-out
        >
          {/* Rotating Icon */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentIcon className="text-white w-20 h-20 sm:w-28 sm:h-28" />
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="mt-10 h-[2px] bg-white/20 w-1/4 max-w-[200px] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2.5, // Same duration as preloader
              ease: "easeInOut",
            }}
          />

          {/* Large Text "The Click Funnel" */}
          <motion.h1
            className="hidden md:flex absolute text-white uppercase font-bold leading-none tracking-tight"
            style={{
              fontSize: "11.6vw", // Adjusted for mobile
              bottom: "0%", // Visible on mobile
              left: "0%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
            }}
            initial={{ y: "0%" }}
            animate={{ y: isFadingOut ? "100%" : "0%" }} // Moves down on fade-out
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            The Click Funnel
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
