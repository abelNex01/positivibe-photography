import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const lineGrow = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1 },
};

export const HomeIntro = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center items-center py-20 sm:py-32 px-6 sm:px-12 bg-white">
      <div className="max-w-[1000px] w-full flex flex-col items-center text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] sm:text-[12px] tracking-[0.2em] uppercase mb-6 block"
        >
          Welcome to Positivibe
        </motion.span>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[32px] sm:text-[48px] md:text-[64px] leading-[1.2] tracking-wide uppercase"
        >
          Capturing life's <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[48px] sm:text-[72px] md:text-[90px] leading-[0.7] italic lowercase mx-2 transform translate-y-3 inline-block">beautiful</span> chaos.
        </motion.h2>
        <motion.div
          variants={lineGrow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-[1px] h-16 sm:h-24 bg-gradient-to-b from-[#D4AF37]/80 to-transparent my-10 origin-top"
        />
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-light text-[#555555] text-[15px] sm:text-[17px] leading-[2] max-w-[700px]"
        >
          We believe that the most profound moments are often the quietest. Our approach to photography is rooted in documenting genuine emotion, crafting cinematic narratives that you and your loved ones will cherish for generations.
        </motion.p>
      </div>
    </section>
  );
};