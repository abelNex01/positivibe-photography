import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export const HomeFeaturedMoment = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32 flex flex-col items-center overflow-hidden">
      <div className="max-w-[1240px] w-full px-6 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Left Content: Editorial Copy */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <motion.span
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[12px] tracking-[0.2em] uppercase block mb-4"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[40px] md:text-[56px] leading-[1.1] tracking-wide uppercase"
            >
              Emotion in <br />
              <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[58px] sm:text-[78px] md:text-[100px] leading-[0.7] italic lowercase transform translate-y-3 inline-block">
                every frame
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Inter',Helvetica] font-light text-[#555555] text-[16px] md:text-[18px] leading-relaxed max-w-[480px]"
          >
            We believe photography is more than just a snapshot. It's about
            capturing the quiet whispers, the loud laughter, and the unspoken
            connections that define your most precious moments.
          </motion.p>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6"
          >
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#111111] text-[14px] tracking-wide">
              Timeless. Authentic. Yours.
            </span>
          </motion.div>
        </div>

        {/* Right Content: Artistic Image Frame */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative w-full group"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
            <img
              src="/src/assets/philosophy.webp"
              alt="Featured Moment"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant Border Overlay */}
            <div className="absolute inset-8 border border-white/20 pointer-events-none" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#f9f9f9] -z-10 hidden md:block" />
          <div className="absolute top-1/2 -right-4 w-px h-32 bg-[#D4AF37] hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
};
