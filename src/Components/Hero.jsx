import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  DollarSign,
  Gift,
  Globe,
  Heart,
  Home,
  Truck,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../Reusable/Button";
import RotatingLabels from "./RotatingLabels.jsx";
import TextMaskAnimation from "./TextMaskAnimation";

const labels = [
  { text: "E-Commerce", color: "#1E90FF", icon: <Home size={16} /> },
  { text: "Edu-Tech", color: "#FF6347", icon: <Heart size={16} /> },
  { text: "Health-Tech", color: "#32CD32", icon: <DollarSign size={16} /> },
  { text: "Fin-Tech", color: "#FFD700", icon: <Briefcase size={16} /> },
  { text: "Logistics", color: "#228B22", icon: <Truck size={16} /> },
  { text: "Travel & Tourism", color: "#FFD700", icon: <Globe size={16} /> },
  { text: "Sports Tech", color: "#FF4500", icon: <Calendar size={16} /> },
  { text: "Non-Profit", color: "#8A2BE2", icon: <Users size={16} /> },
  { text: "Food & Beverage", color: "#FF1493", icon: <Gift size={16} /> },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % labels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center bg-black overflow-hidden px-2">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_140%)]"></div>

      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex gap-4 text-white z-10 items-center h-full pb-6">
        <div className="relative flex flex-col md:flex-row justify-center items-start w-full gap-8">
          <div className="w-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
            <TextMaskAnimation />
            <motion.p
              className="w-full text-gray-300 max-w-[70%] text-lg lg:text-2xl mt-6"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
            >
              Expertly Crafted Designs for Powerful Presentations
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <Button
                to="https://cal.com/theclickfunnel-company-lsgeoq"
                text="Start Project"
                className="w-full sm:w-fit bg-white text-black hover:bg-gray-200 hover:text-white transition-colors"
                icon={Users}
              />
            </motion.div>

            <div className="mt-6 max-w-5xl mx-auto">
              <RotatingLabels labels={labels} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
