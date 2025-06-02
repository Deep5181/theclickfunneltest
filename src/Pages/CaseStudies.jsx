import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Reusable/Button.jsx";

const capabilityShowcases = [
  {
    id: 1,
    title: "Startup Pitch Deck Creation",
    description: "See how we transform complex business concepts into visually compelling narratives that captivate investors.",
    service: "Pitch Deck",
    outcome: "Investor-ready in 2 weeks",
    image: "https://i.pinimg.com/originals/ed/97/b0/ed97b0030dcc71eafaf77b70cd1b0c3c.gif"
  },
  {
    id: 2,
    title: "Funding Strategy Development",
    description: "Our systematic approach to identifying and connecting with the right funding sources for your business stage.",
    service: "Fund Raising",
    outcome: "Targeted investor matches",
    image: "https://i.pinimg.com/originals/e5/b3/49/e5b349c0aeecefbf385a8ea327491313.gif"
  },
  {
    id: 3,
    title: "Business Plan Structuring",
    description: "How we help founders articulate their vision into a comprehensive, bankable business strategy document.",
    service: "Business Plan",
    outcome: "Clear roadmap to success",
    image: "https://i.pinimg.com/originals/8b/d4/0d/8bd40db25399dca2dc5a69605f18cec3.gif"
  }
];

const CaseStudies = () => {
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
              Our Approach
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black pt-4">
              How We Deliver Results
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-md sm:text-lg text-gray-700 mt-4 max-w-3xl"
            >
              While we're building our portfolio, here's how we apply industry best practices to ensure your success
            </motion.p>
          </motion.div>
        </div>

        {/* Capability Showcases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityShowcases.map((showcase, index) => {
            const [cardRef, cardInView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
            });

            return (
              <motion.div
                key={showcase.id}
                ref={cardRef}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ 
                  opacity: cardInView ? 1 : 0, 
                  y: cardInView ? 0 : 30,
                  filter: cardInView ? "blur(0px)" : "blur(8px)"
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image Section */}
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${showcase.image})` }}></div>

                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
                      {showcase.service}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-bold text-green-600 bg-green-50 rounded-full">
                      {showcase.outcome}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{showcase.title}</h3>
                  <p className="text-gray-700 mb-4">{showcase.description}</p>
                  <div className="text-xs text-gray-500 mt-auto pt-2 border-t border-gray-100">
                    Based on industry-standard methodologies from leading providers
                  </div>
                </div>
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
          {/* <Button 
            to="https://docs.google.com/forms/d/e/1FAIpQLSfhJFAPimcXXMIBclKNzmY7BYF87KNVBbSenjB9xIbY41eU2w/viewform?usp=header"
            className="bg-black text-white hover:bg-opacity-90 transition-all"
            text="Be Our First Success Story"
          /> */}
          <p className="mt-4 text-gray-500">
            Special inaugural pricing for our founding clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;