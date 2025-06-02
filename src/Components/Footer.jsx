import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/whitelogo.png"; 
import Button from "../Reusable/Button";
import { Link } from "react-scroll";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-black text-white py-12 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="max-w-8xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Click Funnel Logo" 
                className="h-12 mr-2"
              />
            </div>
            <p className="text-gray-400">
              Crafting powerful presentations that convert and captivate investors.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, name: 'facebook', url: 'https://www.facebook.com/people/The-click-funnel/100063771295305/#' },
                { icon: <Instagram size={20} />, name: 'instagram', url: 'https://www.instagram.com/theclickfunnel/' },
                { icon: <Linkedin size={20} />, name: 'linkedin', url: 'https://www.linkedin.com/company/theclickfunnel/' },
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { id: "about", name: "About" },
                { id: "services", name: "Services" },
                { id: "casestudies", name: "Case Studies" },
                { id: "industries", name: "Industries" }
              ].map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                >
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer w-full text-left block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {[
                { id: "services", name: 'Pitch Deck Design' },
                { id: "services", name: 'Fund Raising' },
                { id: "services", name: 'Business Plans' },
                { id: "services", name: 'Investor Decks' }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer w-full text-left block"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SoundCloud Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Our Vibes</h4>
            <iframe 
              width="100%" 
              height="166" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="rounded-lg"
              title="SoundCloud Player"
            ></iframe>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 my-8"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center text-gray-500 text-sm"
        >
          <p>© 2025 <a 
                className="text-white hover:text-gray-300 transition-colors" 
                href="https://exsovert.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Exsovert
              </a>. All rights reserved.</p>
    
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;