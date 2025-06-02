import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setIsVisible(window.innerWidth > 768); // Hide cursor on mobile
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("resize", handleResize);

    handleResize(); // Check screen size on load

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isVisible) return null; // Hide cursor on mobile

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: position.x, y: position.y }}
      transition={{ ease: "linear", duration: 0.1 }}
    />
  );
};

export default CustomCursor;
