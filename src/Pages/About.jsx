import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Reusable/Button.jsx";

const About = () => {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative w-full flex flex-col items-center bg-white overflow-hidden px-2 py-8 sm:py-12">
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

        {/* Image - Left Side */}
        <motion.div
          className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] min-h-[300px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: headingInView ? 1 : 0, x: headingInView ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1642957323739-5632d8a2ff3d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Click Funnel About"
            className="object-cover rounded-lg w-full h-full"
          />
        </motion.div>

        {/* Text Content - Right Side */}
        <div className="lg:w-1/2">
          <div className="text-left mb-2">
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{
                opacity: headingInView ? 1 : 0,
                filter: headingInView ? "blur(0px)" : "blur(8px)",
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-sm font-semibold text-black uppercase inline-block border border-gray-400 px-3 py-1 rounded-md">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black pt-4">
                Elevating Your Pitch, Perfecting Your Story
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-md sm:text-lg text-gray-700 mt-2"
            >
              The Click Funnel transforms startup ideas and business strategies into stunning visual
              pitch decks that drive investor interest and secure deals. We're not just designers—we're
              storytellers, strategists, and presentation experts.
            </motion.p>
          </div>

          <div ref={missionRef}>
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{
                opacity: missionInView ? 1 : 0,
                filter: missionInView ? "blur(0px)" : "blur(8px)",
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-3xl sm:text-4xl font-semibold text-black mt-4">
                Our Purpose
              </h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: missionInView ? 1 : 0, y: missionInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-md sm:text-lg text-gray-700 mt-2"
              >
                We’re here to make your ideas irresistible and your message unforgettable.
                Whether you're pitching investors, partners, or clients—Click Funnel ensures your story sticks.
              </motion.p>
            </motion.div>

            <Button
              to="https://cal.com/theclickfunnel-company-lsgeoq"
              className="bg-black text-white hover:text-white transition-all w-full md:w-auto mt-6"
              text="Let’s Talk"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
