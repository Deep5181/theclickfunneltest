import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: 1,
    title: "Pitch Deck",
    description:
      "Custom made, graphically designed PowerPoint presentations that help you communicate your story effectively to investors and stakeholders.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Fund Raising",
    description:
      "We assist in raising funds from Angels, VC Funds, HNIs, Banks, and NBFCs, helping your business secure the capital it needs to grow.",
    image:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Business Plan",
    description:
      "A comprehensive 25-50 page business strategy document that outlines your roadmap, goals, and plans for success.",
    image:
      "https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Startup Deals",
    description:
      "Access lucrative startup deals with top-quality service providers to help you get your business off the ground.",
    image:
      "https://plus.unsplash.com/premium_photo-1676581945288-d06d739ec99e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Teaser/ Video Pitch",
    description:
      "A powerful 1-page teaser and 1-3 minute video pitch to capture the attention of investors and clients.",
    image:
      "https://images.unsplash.com/photo-1558402955-dabff43cb9c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Experts on Demand",
    description:
      "Get access to industry experts such as fund-raising professionals, CTOs, CFOs, and CMOs, who can guide you at any stage of your business.",
    image:
      "https://images.unsplash.com/photo-1558402989-4778474384c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black pt-4">
              Types of Presentation
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: titleInView ? 1 : 0,
                y: titleInView ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-md sm:text-lg text-gray-700 mt-4 max-w-3xl"
            >
              From pitch decks to expert consultations, we provide a range of
              services tailored to help you succeed.
            </motion.p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ service, index }) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });
  return (
    <motion.div
      key={service.id}
      ref={cardRef}
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{
        opacity: cardInView ? 1 : 0,
        y: cardInView ? 0 : 30,
        filter: cardInView ? "blur(0px)" : "blur(8px)",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      ></div>

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-black mb-4">
          {service.title}
        </h3>
        <p className="text-gray-700">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default Services;
