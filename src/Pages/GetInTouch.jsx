import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Reusable/Button.jsx";

const GetInTouch = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-black py-16"
      id="contact"  // Added for navbar navigation
    >
      <div className="w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: inView ? 0 : 20, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center"
        >
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left max-w-2xl lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-sm font-semibold text-black uppercase inline-block leading-none border border-gray-400 px-3 py-1 rounded-md mb-4">
                Ready to Elevate Your Pitch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                <span className="block">Investor-Ready Presentations</span>
                <span className="block">Crafted for Your Success</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let our expert team transform your business story into a compelling pitch that attracts investors and accelerates growth.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                to="https://cal.com/theclickfunnel-company-lsgeoq"
                className="bg-black text-white hover:bg-black transition-all"
                text="Get Started Now"
              />
              <Button
                to="https://theclickfunnel.com/"  // Linking to services section
                className="border border-black text-black bg-transparent hover:bg-black hover:text-white transition-all"
                text="The Click Funnel"
              />
            </motion.div>
          </div>

          {/* Right Side - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full lg:w-[50%] mt-8 lg:mt-0 lg:ml-auto flex justify-end"
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional pitch deck presentation"
              className="w-full h-100 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;