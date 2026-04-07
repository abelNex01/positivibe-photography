import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Partnership = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 sm:px-12 flex flex-col items-center justify-center border-y border-[#f0f0f0]">
      <div className="max-w-[800px] w-full flex flex-col items-center text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase mb-8 block"
        >
          OUR CREATIVE PARTNERS
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-aboreto font-normal text-[#111] text-[32px] sm:text-[42px] leading-tight tracking-[0.05em] uppercase mb-8"
        >
          Cinematic videography
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-light text-[#666] text-[15px] sm:text-[16px] leading-[1.8] max-w-[600px] mb-12"
        >
          For our clients seeking the same level of editorial excellence in
          motion storytelling, we are proud to exclusively partner with{" "}
          <strong>Brana Films Production</strong>.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="https://www.branafilms.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-b border-[#111]/20 hover:border-[#D4AF37] pb-2 transition-all duration-300"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#111] text-[12px] tracking-[0.2em] uppercase">
              Visit Brana Films Production
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
