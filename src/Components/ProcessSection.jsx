import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Reusable/Button.jsx";

const steps = [
  {
    id: 1,
    title: "Send us your content",
    description: "Share your raw content, notes, or existing slides with our team."
  },
  {
    id: 2,
    title: "Get time & cost estimates",
    description: "Receive a transparent quote and timeline for your project."
  },
  {
    id: 3,
    title: "Approve design style",
    description: "Review and approve our proposed design direction."
  },
  {
    id: 4,
    title: "Receive your WOW presentation",
    description: "Get your professionally designed slides ready for delivery."
  }
];

const DesignProcess = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative w-full flex flex-col items-center bg-white overflow-hidden px-2 py-8 sm:py-12">
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto">
        
        {/* Title Section */}
        <div className="text-left mb-8 sm:mb-12" ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{
              opacity: titleInView ? 1 : 0,
              filter: titleInView ? "blur(0px)" : "blur(8px)",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-black uppercase inline-block border border-gray-400 px-3 py-1 rounded-md">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black pt-4">
              OUR POWERPOINT DESIGN PROCESS
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-md sm:text-lg text-gray-700 mt-4 max-w-3xl"
            >
              Delivering Impact, Slide by Slide
            </motion.p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: titleInView ? 1 : 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-md sm:text-lg text-gray-700 max-w-3xl">
            Wondering how we turn around high-quality presentations so quickly? Our secret lies in a proven, streamlined process backed by expert designers at every step. From concept to final polish, we ensure your corporate presentation isn't just well-designed—it powerfully reflects your brand's voice, values, and vision.
          </p>
        </motion.div>

        {/* 4-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const [stepRef, stepInView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
            });

            return (
              <motion.div
                key={step.id}
                ref={stepRef}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ 
                  opacity: stepInView ? 1 : 0, 
                  y: stepInView ? 0 : 30,
                  filter: stepInView ? "blur(0px)" : "blur(8px)"
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white text-xl font-bold mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: titleInView ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button 
            to="https://cal.com/theclickfunnel-company-lsgeoq"
            className="bg-black text-white hover:bg-opacity-90 transition-all"
            text="Get Professional Design Services"
          />
          <p className="mt-4 text-gray-500">
            Special inaugural pricing for our founding clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcess;