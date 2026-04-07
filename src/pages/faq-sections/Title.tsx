import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const FaqTitle = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-[#fcfcfc] overflow-hidden">
      <div className="text-center flex flex-col items-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block"
        >
          Knowledge Base
        </motion.span>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[40px] sm:text-[54px] md:text-[72px] lg:text-[90px] leading-[1.1] tracking-wide uppercase"
        >
          Your <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[58px] sm:text-[78px] md:text-[100px] lg:text-[130px] leading-[0.7] italic lowercase mx-2 transform translate-y-3 inline-block">Questions</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 w-full max-w-[600px] px-4 [font-family:'Inter',Helvetica] font-light text-[#666666] text-[15px] sm:text-[16px] text-center leading-relaxed"
        >
          Everything you need to know about our process, bookings, and the fine art editorial experience we provide for your special day.
        </motion.p>
      </div>
    </section>
  );
};
