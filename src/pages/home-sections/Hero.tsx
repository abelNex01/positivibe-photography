import { useState, useEffect } from "react";
import { useReservation } from "@/context/ReservationContext";
import { motion, AnimatePresence } from "framer-motion";

// Import hero images
import hero2 from "../../assets/hero/hero2.webp";
import hero3 from "../../assets/hero/hero3.webp";
import hero4 from "../../assets/hero/hero4.webp";

const heroImages = [hero2, hero3, hero4];

const heroContent = [
  {
    title: "Capture Every",
    highlight: "Moment",
    subtitle:
      "Timeless storytelling through a lens of elegance and authenticity. Dedicated to your memories.",
  },
  {
    title: "Artistic",
    highlight: "Vision",
    subtitle:
      "Redefining wedding photography with a focus on editorial style and cinematic beauty. Your story, masterfully told.",
  },
  {
    title: "Timeless",
    highlight: "Elegance",
    subtitle:
      "Experience the pinnacle of luxury photography. We capture the essence of your love in its most beautiful light.",
  },
];

export const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openModal } = useReservation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5-second interval
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full h-screen min-h-[550px] sm:min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Background Slideshow with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity [transition-duration:1500ms] ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Wedding moment ${index + 1}`}
              className="w-full h-full object-cover transition-transform [transition-duration:10000ms] scale-110 grayscale-[20%] brightness-[0.85] contrast-[1.1]"
              style={{
                transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
              }}
              fetchPriority="high"
              loading="eager"
            />
          </div>
        ))}
        {/* Professional cinematic dark linear gradient overlay for maximum text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-[5]" />
      </div>

      {/* Center hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 pt-20">
        <div className="flex flex-col items-center text-center max-w-[900px] translate-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
                exit: {
                  opacity: 0,
                  transition: { staggerChildren: 0.1, staggerDirection: -1 },
                },
              }}
              className="flex flex-col items-center"
            >
              <motion.h1
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -40 },
                }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="font-aboreto font-normal text-white text-[44px] sm:text-[60px] md:text-[82px] lg:text-[96px] leading-[1] tracking-wide uppercase drop-shadow-2xl mb-6"
              >
                {heroContent[currentSlide].title} <br />
                <span className="font-bastliga text-[#D4AF37] text-[65px] sm:text-[90px] md:text-[120px] lg:text-[145px] leading-[0.7] transform translate-y-4 inline-block normal-case">
                  {heroContent[currentSlide].highlight}
                </span>
              </motion.h1>

              <motion.p
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -30 },
                }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="[font-family:'Inter',Helvetica] font-light text-white text-sm md:text-base lg:text-sm leading-relaxed mb-10 max-w-[600px] mx-auto drop-shadow-md"
              >
                {heroContent[currentSlide].subtitle}
              </motion.p>

              {/* Dynamic Action Button */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <button
                  onClick={openModal}
                  className="px-14 py-5 bg-[#D4AF37] text-[#111] text-[12px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-none shadow-2xl"
                >
                  Book A Session Now
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider indicator bars */}
      <div className="absolute left-4 sm:left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 sm:gap-3 z-20">
        {heroImages.map((_, i) => (
          <div
            key={i}
            className={`w-[3px] rounded-full transition-all duration-700 ${
              i === currentSlide ? "h-16 bg-white" : "h-8 bg-[#9b9b9b]"
            }`}
          />
        ))}
      </div>
    </header>
  );
};

export default HomeHero;
