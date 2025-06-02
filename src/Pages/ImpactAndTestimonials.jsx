import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "120+", label: "Active Clients" },
  { value: "50+", label: "Team Members" },
  { value: "500+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
];

const testimonials = [
  {
    quote:
      "Their pitch deck helped us secure $2M in seed funding. The storytelling and design were impeccable.",
    author: "Rahul Sharma",
    company: "EduTech Startup",
    rating: 5,
  },
  {
    quote:
      "The business plan they created was instrumental in getting bank approval for our expansion lo an.",
    author: "Priya Patel",
    company: "HealthTech Company",
    rating: 5,
  },
  {
    quote:
      "Exceptional service! They understood our vision and translated it into a compelling investor presentation.",
    author: "Arjun Mehta",
    company: "FinTech Founder",
    rating: 5,
  },
  {
    quote:
      "Excellent Services. They are very friendly, patient and helpful in helping us find what we were looking for. Thanks!!",
    company: "BootsRad",
    rating: 5,
  },
  {
    quote:
      "I had a great experience with them. Team is very friendly and highly professional.",
    author: "Navnit Kumar",
    rating: 5,
  },
  {
    quote: "Excellent support and quick development by team theclickfunnel.",
    author: "Ravindra Raul",
    rating: 5,
  },
];

const ImpactAndTestimonials = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative w-full flex flex-col items-center bg-gray-50 overflow-hidden px-2 py-16 sm:py-20">
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto">
        {/* Impact Section */}
        <div className="mb-16" ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{
              opacity: titleInView ? 1 : 0,
              filter: titleInView ? "blur(0px)" : "blur(8px)",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <span className="text-sm font-semibold text-black uppercase inline-block border border-gray-400 px-3 py-1 rounded-md mb-4">
              Our Impact So Far
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
              Making a Difference for Our Clients
            </h2>
          </motion.div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{
                  opacity: statsInView ? 1 : 0,
                  y: statsInView ? 0 : 30,
                  filter: statsInView ? "blur(0px)" : "blur(8px)",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="bg-white p-6 rounded-lg shadow-md text-left"
              >
                <p className="text-4xl font-bold text-black mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div ref={testimonialsRef}>
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{
              opacity: testimonialsInView ? 1 : 0,
              filter: testimonialsInView ? "blur(0px)" : "blur(8px)",
            }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12"
          >
            <span className="text-sm font-semibold text-black uppercase inline-block border border-gray-400 px-3 py-1 rounded-md mb-4">
              Client Voices
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              What Clients Say About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Check out the glowing reviews from our clients who have trusted us
              to craft their brand stories and digital marketing strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{
                  opacity: testimonialsInView ? 1 : 0,
                  y: testimonialsInView ? 0 : 30,
                  filter: testimonialsInView ? "blur(0px)" : "blur(8px)",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className="bg-white p-8 rounded-xl shadow-lg text-left"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  {testimonial.author && (
                    <p className="font-semibold text-black">
                      {testimonial.author}
                    </p>
                  )}
                  {testimonial.company && (
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAndTestimonials;
