import { motion } from "framer-motion";

import img1 from "../../assets/gallery/1.webp";
import img2 from "../../assets/gallery/62.webp";
import img3 from "../../assets/gallery/40.webp";
import img4 from "../../assets/gallery/33.webp";

const selectedImages = [img1, img2, img3, img4];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const FeaturedEditorials = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-24 md:py-32 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-[1400px] px-6 lg:px-12 flex justify-between items-end mb-16 md:mb-24">
        <div className="flex flex-col gap-4">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] md:text-[12px] tracking-[0.4em] uppercase"
          >
            The Gallery
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-aboreto font-normal text-[#111111] text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-wide uppercase"
          >
            Featured <br className="hidden md:block" />{" "}
            <span className="font-bastliga text-[#D4AF37] text-[60px] md:text-[80px] leading-[0.7] transform translate-y-3 inline-block normal-case">
              Editorials
            </span>
          </motion.h2>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-black/20" />
          <p className="[font-family:'Inter',Helvetica] font-light text-[#555] text-sm max-w-[250px] leading-relaxed">
            A curated selection of our most prestigious work, defining modern
            luxury.
          </p>
        </motion.div>
      </div>

      {/* Editorial Grid */}
      <div className="w-full max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Large Portrait Image */}
        <div
          className="lg:col-span-1 lg:row-span-2 relative group overflow-hidden bg-[#f0f0f0] animate-in fade-in zoom-in-[0.95] duration-1000"
          style={{ animationFillMode: "both" }}
        >
          <img
            src={selectedImages[0] || ""}
            alt="Editorial Portrait"
            loading="lazy"
            decoding="async"
            className="w-full h-full min-h-[500px] lg:min-h-[800px] object-cover transition-transform [transition-duration:2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-1 z-10 pointer-events-none">
            <span className="text-white font-aboreto tracking-[0.3em] uppercase text-xs drop-shadow-md">
              Vogue Inspired
            </span>
            <h4 className="text-white font-aboreto uppercase text-xl drop-shadow-md">
              The Muse
            </h4>
          </div>
        </div>

        {/* Top Landscape */}
        <div
          className="md:col-span-1 lg:col-span-2 relative group overflow-hidden bg-[#f0f0f0] animate-in fade-in zoom-in-[0.95] duration-1000"
          style={{ animationFillMode: "both", animationDelay: "150ms" }}
        >
          <img
            src={selectedImages[1] || ""}
            alt="Wedding Editorial"
            loading="lazy"
            decoding="async"
            className="w-full h-full min-h-[300px] grayscale lg:min-h-[400px] object-cover transition-transform [transition-duration:2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-1 z-10 pointer-events-none">
            <span className="text-white font-aboreto tracking-[0.3em] uppercase text-xs drop-shadow-md">
              Chateau Sequence
            </span>
            <h4 className="text-white font-aboreto uppercase text-xl drop-shadow-md">
              The Union
            </h4>
          </div>
        </div>

        {/* Bottom Square 1 */}
        <div
          className="relative group overflow-hidden bg-[#f0f0f0] animate-in fade-in zoom-in-[0.95] duration-1000"
          style={{ animationFillMode: "both", animationDelay: "100ms" }}
        >
          <img
            src={selectedImages[2] || ""}
            alt="Family Editorial"
            loading="lazy"
            decoding="async"
            className="w-full h-full min-h-[400px]  object-cover transition-transform [transition-duration:2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-1 z-10 pointer-events-none">
            <span className="text-white font-aboreto tracking-[0.3em] uppercase text-xs drop-shadow-md">
              Generational
            </span>
            <h4 className="text-white font-aboreto uppercase text-xl drop-shadow-md">
              The Legacy
            </h4>
          </div>
        </div>

        {/* Bottom Square 2 */}
        <div
          className="relative group overflow-hidden bg-[#f0f0f0] animate-in fade-in zoom-in-[0.95] duration-1000"
          style={{ animationFillMode: "both", animationDelay: "200ms" }}
        >
          <img
            src={selectedImages[3] || ""}
            alt="Elopement Editorial"
            loading="lazy"
            decoding="async"
            className="w-full h-full min-h-[400px] grayscale object-cover transition-transform [transition-duration:2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-1 z-10 pointer-events-none">
            <span className="text-white font-aboreto tracking-[0.3em] uppercase text-xs drop-shadow-md">
              Coastal Escape
            </span>
            <h4 className="text-white font-aboreto uppercase text-xl drop-shadow-md">
              The Vows
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
