import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const lineGrow = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1 },
};

export const ContactPhilosophy = (): JSX.Element => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 md:py-32 lg:py-40 px-6 sm:px-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37] blur-[150px] rounded-full mix-blend-overlay" />
      </div>

      <div className="max-w-[1000px] w-full flex flex-col items-center text-center z-10">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-12"
        >
          THE CONVERSATION
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-aboreto font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.3] text-white mb-16 max-w-[900px]"
        >
          Every profound visual narrative begins with a single <br className="hidden md:block" />
          <span className="font-bastliga text-[#D4AF37] text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] lowercase italic mx-2 inline-block translate-y-2 md:translate-y-4 leading-[0.5]">
            connection
          </span>
        </motion.h2>

        <motion.div
          variants={lineGrow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-[1px] h-24 bg-gradient-to-b from-[#D4AF37]/80 to-transparent mb-16 origin-top"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-extralight text-white/80 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-auto"
        >
          We believe that every extraordinary project starts with a shared vision. 
          Reach out to discuss your upcoming commission, and let us help you 
          architect a legacy that will be cherished for generations. 
          We'd love to hear your story.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex items-center gap-4"
        >
          <span className="font-aboreto uppercase tracking-[0.3em] text-white/40 text-xs">
            Let's Collaborate
          </span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="font-aboreto uppercase tracking-[0.3em] text-white/40 text-xs">
            Global Inquiry
          </span>
        </motion.div>
      </div>
    </section>
  );
};
