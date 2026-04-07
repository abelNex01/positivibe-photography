import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const HomeBrandDivider = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col items-center py-24 md:py-32 bg-[#ffffff] border-t border-[#f0f0f0]">
      <div className="text-center flex flex-col items-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block"
        >
          Behind the Lens
        </motion.span>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[32px] sm:text-[54px] md:text-[72px] lg:text-[90px] leading-[1.1] tracking-wide uppercase"
        >
          The <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[48px] sm:text-[78px] md:text-[100px] lg:text-[130px] leading-[0.7] italic lowercase mx-2 transform translate-y-3 inline-block">Positivibe</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 w-full max-w-[600px] px-4 [font-family:'Inter',Helvetica] font-light text-[#666666] text-[15px] sm:text-[16px] text-center leading-relaxed"
        >
          Capturing unforgettable moments across Canada with an authentic, editorial, and timeless touch.
        </motion.p>
      </div>
    </div>
  );
};
