import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const lineGrow = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1 },
};

interface SharedHeroProps {
  title: string;
  subtitleThin: string;
  subtitleBold: string;
  image: string;
}

export const SharedHero = ({
  title,
  subtitleThin,
  subtitleBold,
  image,
}: SharedHeroProps): JSX.Element => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-[center_top] md:bg-center grayscale-[20%] brightness-[0.85] contrast-[1.1]"
          style={{ backgroundImage: "url(" + image + ")" }}
        />

        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      {/* Main Centered Typography Composition */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16 w-full max-w-[1240px] pt-16">
        
        {/* Top Ornamental Label */}
        <div className="flex flex-col items-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] sm:text-[11px] uppercase tracking-[0.3em] mb-4"
          >
            The Collection
          </motion.span>
          <motion.div
            variants={lineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-60 mb-6 sm:mb-8 origin-top"
          />
        </div>

        {/* Core Title Stack */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-white"
        >
          {/* Top Line */}
          <span className="[font-family:'Aboreto',Helvetica] font-normal text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] leading-[1.1] tracking-wide uppercase drop-shadow-md">
            {title}
          </span>
          
          {/* Bottom Line Component (Thin + Bold Cursive) */}
          <span className="mt-2 md:mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 drop-shadow-md">
            <span className="[font-family:'Aboreto',Helvetica] font-normal text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] leading-[1.1] tracking-wide uppercase text-white/90">
               {subtitleThin}
            </span>
            <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[52px] sm:text-[68px] md:text-[88px] lg:text-[110px] leading-[0.7] italic lowercase transform translate-y-2 sm:translate-y-4 pt-4 sm:pt-0">
               {subtitleBold}
            </span>
          </span>
        </motion.h1>

      </div>
      
    </section>
  );
};
