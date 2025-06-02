import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll
import {
  Users,
  X,
  Menu,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logo.png"; // Ensure this logo matches Click Funnel branding
import Button from "../Reusable/Button";

const navLinks = [
  { id: "portfolio", name: "Portfolio" },
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "industries", name: "Industries Served" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll event listener to detect active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Check which section is in view
      const sections = navLinks.map((link) => document.getElementById(link.id));
      let currentSection = "home";

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop - 100; // Adjust based on navbar height
          const sectionBottom = sectionTop + section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] z-50 
      transition-all duration-300 rounded-2xl shadow-lg 
      ${isScrolled ? "bg-white/90 backdrop-blur-lg" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 relative">
          {/* Logo */}
          <a href="/" className="z-50">
            <img
              src={logo}
              alt="Click Funnel Logo" // Updated alt text
              className="h-8 md:h-10 transition-all duration-300 hover:opacity-80"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  duration={600} // Smooth scroll duration
                  spy={true}
                  offset={-80} // Adjust based on navbar height
                  className={`px-2 py-1 font-medium transition-colors duration-300 text-sm lg:text-base  ${
                    activeSection === link.id
                      ? "text-black font-semibold border-b-2 border-black" // Active section styling
                      : "text-gray-800 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button - Right */}
          <div className="hidden md:block">
            <Button
              to="https://docs.google.com/forms/d/e/1FAIpQLSfhJFAPimcXXMIBclKNzmY7BYF87KNVBbSenjB9xIbY41eU2w/viewform?usp=header"
              target="_blank"
              className="bg-black cursor-pointer text-white"
              text="Get In Touch"
              icon={Users}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 z-50"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X size={24} className="text-gray-800 stroke-2" />
            ) : (
              <Menu size={24} className="text-gray-800 stroke-2" />
            )}
          </button>

          {/* Mobile Navigation - Full width dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="absolute left-[-5%] right-[-5%] top-full w-[110%] bg-white shadow-xl z-40 mt-4 rounded-2xl overflow-hidden md:hidden"
              >
                <div className="flex flex-col p-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      to={link.id}
                      smooth={true}
                      duration={600}
                      spy={true}
                      offset={-80}
                      className={`py-3 px-4 rounded-lg transition-colors duration-300 font-medium text-center  ${
                        activeSection === link.id
                          ? "bg-gray-100 text-black font-semibold "
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)} // Close menu on click
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Button
                    to="https://cal.com/theclickfunnel-company-lsgeoq"
                    text="Get In Touch"
                    className="bg-black text-white"
                    icon={Users}
                  />

                  {/* Social Media Links */}
                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href="https://www.facebook.com/people/The-click-funnel/100063771295305/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/theclickfunnel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/theclickfunnel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
