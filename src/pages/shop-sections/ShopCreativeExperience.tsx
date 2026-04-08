import { motion } from "framer-motion";
import gallery52 from "../../assets/gallery/52.webp";
import gallery40 from "../../assets/gallery/40.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const ShopCreativeExperience = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fcfcfc] py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Left Side: Visual Storytelling */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Primary Large Image */}
            <motion.div
              className="relative z-10 aspect-[4/5] w-[85%] overflow-hidden shadow-2xl"
              variants={fadeUp}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={gallery52}
                alt="Fine Art Detail"
                className="w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform [transition-duration:2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              className="absolute -bottom-12 -right-4 md:-right-12 z-20 aspect-square w-[50%] overflow-hidden shadow-2xl border-[12px] border-white"
              variants={fadeUp}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={gallery40}
                alt="Archival Materials"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-[#D4AF37]/20 rounded-full" />
          </motion.div>

          {/* Right Side: Narrative Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase mb-8 block">
                The Artisanal Path
              </span>

              <h2 className="[font-family:'Aboreto',Helvetica] text-[#111111] text-[38px] md:text-[56px] leading-[1.1] uppercase mb-10">
                Beyond the <br />
                <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[60px] md:text-[90px] lowercase transform translate-y-3 inline-block italic">
                  Digital Veil
                </span>
              </h2>

              <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[17px] leading-relaxed mb-12 max-w-lg">
                In an era of fleeting screens, we believe in the gravity of the
                tangible. Our studio transforms your most intimate chapters into
                museum-grade heirlooms, curated with a deep respect for light,
                texture, and time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full border-t border-[#eeeeee] pt-12">
                <div>
                  <h4 className="[font-family:'Inter',Helvetica] font-bold text-[#111111] text-[10px] tracking-[0.2em] uppercase mb-4">
                    01. Curated Selection
                  </h4>
                  <p className="[font-family:'Inter',Helvetica] font-light text-[#888888] text-[13px] leading-relaxed">
                    We guide you through the process of selecting imagery that
                    speaks to your soul.
                  </p>
                </div>
                <div>
                  <h4 className="[font-family:'Inter',Helvetica] font-bold text-[#111111] text-[10px] tracking-[0.2em] uppercase mb-4">
                    02. Bespoke Finishing
                  </h4>
                  <p className="[font-family:'Inter',Helvetica] font-light text-[#888888] text-[13px] leading-relaxed">
                    Custom-matted prints and hand-bound Italian linen albums,
                    crafted for longevity.
                  </p>
                </div>
                <div>
                  <h4 className="[font-family:'Inter',Helvetica] font-bold text-[#111111] text-[10px] tracking-[0.2em] uppercase mb-4">
                    03. Archival Soul
                  </h4>
                  <p className="[font-family:'Inter',Helvetica] font-light text-[#888888] text-[13px] leading-relaxed">
                    Museum-quality materials ensuring your legacy remains
                    vibrant for generations.
                  </p>
                </div>
                <div>
                  <h4 className="[font-family:'Inter',Helvetica] font-bold text-[#111111] text-[10px] tracking-[0.2em] uppercase mb-4">
                    04. Private Inquiry
                  </h4>
                  <p className="[font-family:'Inter',Helvetica] font-light text-[#888888] text-[13px] leading-relaxed">
                    Personalized attention for every piece, from first glance to
                    final placement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
