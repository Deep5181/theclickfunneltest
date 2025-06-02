import { motion } from "framer-motion";

const Clients = () => {
  const companies = [
    {
      name: "Wagner",
      logo: "https://cdn.wagner-group.com/assets/img/wagner-logo.png",
    },
    {
      name: "Aceleron",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEQMEylVrMpBw/company-logo_200_200/company-logo_200_200/0/1630500778364/aceleron_logo?e=2147483647&v=beta&t=q0g5d4PxuouHYlEdDGHpXB4VzV7E5INLJT3Uax-bkXM",
    },
    {
      name: "AFM Properties LLC",
      logo: "https://sdn.signalhire.co/storage/company/2939/74b1/d23d/5502/d391/7156/f772/d162.webp",
    },
    {
      name: "Honda",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
    },
    {
      name: "Pafex",
      logo: "https://pafex.in/assets/img/logo.png",
    },
    {
      name: "Parle",
      logo: "https://upload.wikimedia.org/wikipedia/en/archive/d/d5/20220309083632%21Parle_Products_logo.svg",
    },
    {
      name: "Mindtel Global",
      logo: "https://mindtelglobal.com/wp-content/uploads/2025/01/Logo.webp",
    },
    {
      name: "Majestic Home",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_lLC5vjBaYsMsG4arBpJ6TSjO8cUcXdJepYYC6xY1fXgQ=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  // Duplicate for seamless looping (3 sets for smoother transition)
  const scrollingItems = [...companies, ...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden bg-white py-6 sm:py-10">
      <motion.div
        className="text-center mb-4 sm:mb-6 px-4"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-lg sm:text-2xl font-bold text-black leading-snug">
          Trusted By Leading Entrepreneurs & Investors
        </h2>
      </motion.div>

      <div className="relative h-[120px] sm:h-[140px] flex items-center">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["-66.66%", "0%"], // Smoother loop with 3 duplicates
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 45, // Slower scroll (45 seconds)
            ease: "linear",
          }}
        >
          {scrollingItems.map(({ logo, name }, index) => (
            <div
              key={`item-${index}`}
              className="mx-4 sm:mx-6 flex flex-col items-center min-w-[95px] sm:min-w-[110px]"
            >
              <motion.div
                className="w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src={logo}
                  alt={name}
                  className="max-h-full max-w-full object-contain transition-opacity hover:opacity-80"
                  loading="lazy"
                />
              </motion.div>
              <span className="mt-2 text-xs sm:text-sm text-gray-500 font-medium">
                {name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Stronger gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white via-white to-transparent z-14" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-white via-white to-transparent z-14" />
      </div>
    </div>
  );
};

export default Clients;
