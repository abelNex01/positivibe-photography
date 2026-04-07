import { ArrowUpRight } from "lucide-react";
import { useReservation } from "@/context/ReservationContext";
import { motion } from "framer-motion";

const galleryModules = (import.meta as any).glob(
  "../../assets/gallery/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

const findImage = (name: string) => {
  const entry = Object.entries(galleryModules).find(([path]) => path.endsWith(name));
  return entry ? (entry[1] as any).default as string : "";
};

const selectedImages = [
  findImage("19.webp"),
  findImage("6.webp"),
  findImage("24.webp"),
  findImage("8.webp")
];

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

const collections = [
  {
    id: "weddings",
    title: "Weddings",
    tagline: "The Legacy Collection",
    image: selectedImages[0] || "",
    price: "From $4,500",
    desc: "Cinematic storytelling for your most profound day. We capture the grand architecture of your union and the quiet, stolen breaths in between. Designed for editorial elegance and raw, unscripted emotion.",
    inverse: false,
  },
  {
    id: "portraits",
    title: "Portraits",
    tagline: "The Muse Collection",
    image: selectedImages[1] || "",
    price: "From $850",
    desc: "High-fashion editorial portraiture designed to elevate your personal brand or celebrate a chapter of your life. Experience a full editorial transformation with cinematic lighting and styling guidance.",
    inverse: true,
  },
  {
    id: "family",
    title: "Family",
    tagline: "The Heritage Collection",
    image: selectedImages[2] || "",
    price: "From $1,200",
    desc: "Honest, intimate glimpses into your family's dynamic. We move away from stiff poses to document the authentic laughter and chaos of your legacy, creating heirlooms that will be passed down for generations.",
    inverse: false,
  },
  {
    id: "elopements",
    title: "Elopements",
    tagline: "The Boundless Collection",
    image: selectedImages[3] || "",
    price: "From $2,800",
    desc: "Intimate, adventurous celebrations of love without the crowds. We specialize in capturing the quiet grandeur of elopements in unique landscapes and private sanctuaries. Perfect for the visionary couple.",
    inverse: true,
  },
];

export const SignatureCollections = (): JSX.Element => {
  const { openModal } = useReservation();

  return (
    <section className="w-full bg-[#fcfcfc] py-24 md:py-32 flex flex-col items-center">
      {/* Section Header */}
      <div className="w-full max-w-[1200px] px-6 lg:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-6 block"
        >
          Curated Offerings
        </motion.span>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-aboreto font-normal text-[#111111] text-4xl sm:text-5xl md:text-7xl leading-[1.1] tracking-wide uppercase"
        >
          Signature{" "}
          <span className="font-bastliga text-[#D4AF37] text-[60px] md:text-[100px] leading-[0.7] transform translate-y-4 inline-block normal-case">
            Collections
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-[600px] [font-family:'Inter',Helvetica] font-light text-[#999] text-base md:text-lg leading-relaxed"
        >
          From intimate elopements to global editorial events, explore the
          bespoke packages crafted for the architecture of your unique story.
        </motion.p>
      </div>

      {/* Staggered Grid */}
      <div className="w-full max-w-[1200px] px-6 lg:px-12 flex flex-col gap-32 md:gap-48">
        {collections.map((col, index) => (
          <div
            key={col.id}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${col.inverse ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image Column */}
            <div
              className={`w-full md:w-1/2 relative group overflow-hidden animate-in fade-in duration-1000 ${col.inverse ? "slide-in-from-right-[60px]" : "slide-in-from-left-[60px]"}`}
              style={{ animationFillMode: 'both' }}
            >
              <div className="absolute inset-0 bg-[#D4AF37]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src={col.image}
                alt={col.title}
                loading="lazy"
                decoding="async"
                className="w-full h-auto aspect-[4/5] object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)]"
              />
              {/* Image Number / Metric */}
              <div className="absolute top-6 left-6 z-20 overflow-hidden">
                <span className="font-aboreto text-white text-5xl md:text-7xl drop-shadow-md">
                  0{index + 1}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div
              className={`w-full md:w-1/2 flex flex-col ${col.inverse ? "md:items-end text-left md:text-right" : "items-start text-left"}`}
            >
              <span
                className={`text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] [font-family:'Inter',Helvetica] mb-4 animate-in fade-in duration-1000 ${col.inverse ? "slide-in-from-left-[60px]" : "slide-in-from-right-[60px]"}`}
                style={{ animationFillMode: 'both', animationDelay: '100ms' }}
              >
                {col.tagline}
              </span>
              <h3
                className={`font-aboreto text-4xl md:text-6xl text-[#111] uppercase tracking-normal mb-8 animate-in fade-in duration-1000 ${col.inverse ? "slide-in-from-left-[60px]" : "slide-in-from-right-[60px]"}`}
                style={{ animationFillMode: 'both', animationDelay: '200ms' }}
              >
                {col.title}
              </h3>

              <div
                className={`w-12 h-[1px] bg-[#ddd] mb-8 animate-in fade-in zoom-in-0 duration-700 ${col.inverse ? "origin-right" : "origin-left"}`}
                style={{ animationFillMode: 'both', animationDelay: '250ms' }}
              />

              <p
                className={`[font-family:'Inter',Helvetica] font-light text-[#555] text-base md:text-[17px] leading-relaxed mb-10 max-w-[480px] animate-in fade-in duration-1000 ${col.inverse ? "slide-in-from-left-[60px]" : "slide-in-from-right-[60px]"}`}
                style={{ animationFillMode: 'both', animationDelay: '300ms' }}
              >
                {col.desc}
              </p>

              <div
                className={`flex flex-col gap-2 w-full max-w-[300px] animate-in fade-in slide-in-from-bottom-[50px] duration-1000 ${col.inverse ? "md:items-end" : "items-start"}`}
                style={{ animationFillMode: 'both', animationDelay: '400ms' }}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[#999] text-[10px] uppercase tracking-[0.3em] [font-family:'Inter',Helvetica]">
                    Investment Range
                  </span>
                  <span className="text-[#D4AF37] text-2xl md:text-3xl font-aboreto tracking-tighter">
                    {col.price}
                  </span>
                </div>

                <button
                  onClick={openModal}
                  className="w-full px-8 py-5 bg-[#111] text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-none flex items-center justify-between group shadow-lg"
                >
                  <span className="pl-4">Inquire Now</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
