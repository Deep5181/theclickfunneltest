import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const RotatingLabels = ({ labels }) => {
  const controls = useAnimation();
  // Duplicate labels once for seamless looping
  const duplicatedLabels = [...labels, ...labels];

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          x: "-50%",
          transition: {
            duration: 20,
            ease: "linear",
          },
        });
        // Instant reset (invisible to user due to identical duplicated content)
        controls.set({ x: "0%" });
      }
    };
    sequence();
  }, [controls]);

  return (
    <div className="mt-2 w-full overflow-hidden relative">
      {/* Enhanced gradient overlays with subtle pulsing */}
      <motion.div
        className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black via-black to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black via-black to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <motion.div
        className="flex whitespace-nowrap py-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          y: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.8 },
        }}
      >
        <motion.div
          className="flex"
          animate={controls}
          style={{ display: "flex" }}
        >
          {duplicatedLabels.map((label, index) => (
            <motion.div
              key={`${label.text}-${index}`}
              className="flex items-center group mx-2"
              variants={{
                hover: {
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                },
              }}
            >
              <motion.span
                className="flex items-center text-sm sm:text-base font-medium px-4 py-2 rounded-full transition-colors duration-200 relative overflow-hidden"
                style={{
                  color: label.color,
                  backgroundColor: `${label.color}15`,
                }}
                variants={{
                  hover: {
                    backgroundColor: `${label.color}30`,
                    boxShadow: `0 0 12px ${label.color}40`,
                  },
                }}
              >
                {label.icon}
                <span className="ml-2">{label.text}</span>
                {/* Subtle hover glow */}
                <motion.span
                  className="absolute inset-0 bg-white pointer-events-none"
                  initial={{ opacity: 0 }}
                  variants={{
                    hover: {
                      opacity: 0.1,
                      transition: { duration: 0.3 },
                    },
                  }}
                />
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RotatingLabels;
