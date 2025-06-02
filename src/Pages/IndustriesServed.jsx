import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  ShoppingCart, MonitorPlay, HeartPulse, Landmark,
  Truck, Plane, Trophy, HandHeart,
  Newspaper, Utensils, Home, Users,
  Shirt, ShoppingBag, Sprout, Briefcase
} from "lucide-react";

const industries = [
  {
    name: "E-Commerce",
    examples: "Online marketplaces, price comparison, online grocery, B2B platforms",
    icon: <ShoppingCart className="w-8 h-8 text-black" />
  },
  {
    name: "Edu-Tech",
    examples: "E-learning, coaching, admission consulting, skill development",
    icon: <MonitorPlay className="w-8 h-8 text-black" />
  },
  {
    name: "Health-Tech & Fitness",
    examples: "Telemedicine, online pharmacy, online diagnostics, fitness apps",
    icon: <HeartPulse className="w-8 h-8 text-black" />
  },
  {
    name: "Fin-Tech & NBFC",
    examples: "NBFC, payday loan, insure tech, blockchain, payment solutions",
    icon: <Landmark className="w-8 h-8 text-black" />
  },
  {
    name: "Logistics & Hyper Local",
    examples: "Food/cab aggregators, home maintenance, electric vehicles",
    icon: <Truck className="w-8 h-8 text-black" />
  },
  {
    name: "Travel & Tourism",
    examples: "OTA, destination management, MICE, medical tourism",
    icon: <Plane className="w-8 h-8 text-black" />
  },
  {
    name: "Sports Tech",
    examples: "Fantasy sports, gaming, casinos, sports tech, gym, diet consultation",
    icon: <Trophy className="w-8 h-8 text-black" />
  },
  {
    name: "Non-Profit",
    examples: "Non-profit organization grants, crowdfunding platforms",
    icon: <HandHeart className="w-8 h-8 text-black" />
  },
  {
    name: "Media/Social Network",
    examples: "Social networks, newspapers, content syndication",
    icon: <Newspaper className="w-8 h-8 text-black" />
  },
  {
    name: "Food & Beverage/QSRs",
    examples: "Casual dining, QSR chains, cloud kitchens, table booking",
    icon: <Utensils className="w-8 h-8 text-black" />
  },
  {
    name: "Real Estate/Construction",
    examples: "Real estate portals, construction marketplaces, construction companies",
    icon: <Home className="w-8 h-8 text-black" />
  },
  {
    name: "Coworking/Coliving",
    examples: "Co-working spaces, co-living, student housing, senior living",
    icon: <Users className="w-8 h-8 text-black" />
  },
  {
    name: "Beauty & Fashion",
    examples: "Online apparel portals, T-shirt brands, men's wear, accessories, gifting",
    icon: <Shirt className="w-8 h-8 text-black" />
  },
  {
    name: "Consumer Products & FMCG",
    examples: "Motorcycle brands, consumer durables, food products",
    icon: <ShoppingBag className="w-8 h-8 text-black" />
  },
  {
    name: "Agri Tech",
    examples: "Farm-to-fork integration, organic products, farm inputs",
    icon: <Sprout className="w-8 h-8 text-black" />
  },
  {
    name: "Recruitment & HR Tech",
    examples: "Recruitment portals, blue-collar job portals, freelancing platforms",
    icon: <Briefcase className="w-8 h-8 text-black" />
  }
];

const IndustriesServed = () => {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative w-full flex flex-col items-center bg-white overflow-hidden px-2 py-16 sm:py-20">
      <div className="relative w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto">
        
        {/* Title Section */}
        <div className="text-left mb-12" ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{
              opacity: titleInView ? 1 : 0,
              filter: titleInView ? "blur(0px)" : "blur(8px)",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-black uppercase inline-block border border-gray-400 px-3 py-1 rounded-md mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Industries We Have Served
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              We've worked with diverse industries, bringing tailored digital marketing and design solutions to help them achieve success.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ 
                opacity: gridInView ? 1 : 0, 
                y: gridInView ? 0 : 30,
                filter: gridInView ? "blur(0px)" : "blur(8px)"
              }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut" 
              }}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex flex-col">
                <div className="mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.examples}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;