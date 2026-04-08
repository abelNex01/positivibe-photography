import { Check } from "lucide-react";
import { useReservation } from "@/context/ReservationContext";
import { motion } from "framer-motion";
import gallery50 from "../../assets/gallery/50.webp";
import gallery60 from "../../assets/gallery/60.webp";
import gallery18 from "../../assets/gallery/18.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const cardReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const packages = [
  {
    name: "The Essential",
    price: "$1,500",
    description: "Perfect for intimate gatherings and short ceremonies.",
    features: [
      "Up to 4 Hours of Coverage",
      "High-Resolution Digital Gallery",
      "Online Proofing & Sharing",
      "Print Release",
    ],
    image: gallery50,
    highlighted: false,
  },
  {
    name: "The Signature",
    price: "$2,800",
    description: "Our most popular choice for full wedding day coverage.",
    features: [
      "Up to 8 Hours of Coverage",
      "High-Resolution Digital Gallery",
      "Second Shooter Included",
      "Complimentary Engagement Session",
      "Print Release",
    ],
    image: gallery60,
    highlighted: true,
  },
  {
    name: "The Luxe",
    price: "$4,500",
    description: "The ultimate experience and heirloom preservation.",
    features: [
      "Full Day Coverage (10+ Hours)",
      "High-Resolution Digital Gallery",
      "Second Shooter Included",
      "Complimentary Engagement Session",
      "Premium 10x10 Heirloom Album",
      "Next-Day Sneak Peeks",
    ],
    image: gallery18,
    highlighted: false,
  },
];

export const PricingTable = (): JSX.Element => {
  const { openModal } = useReservation();

  return (
    <section className="w-full py-24 md:py-32 bg-[#fcfcfc] flex flex-col items-center">
      <div className="max-w-[1440px] px-6 sm:px-10 lg:px-16 w-full flex flex-col items-center">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block"
          >
            Investment
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[32px] sm:text-[42px] md:text-[52px] leading-[1.2] tracking-wide uppercase"
          >
            Curated{" "}
            <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[48px] sm:text-[64px] md:text-[80px] leading-[0.7] italic lowercase mx-2 transform translate-y-2 inline-block">
              Collections
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-[1280px]">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col bg-white border ${pkg.highlighted ? "border-[#D4AF37] shadow-xl transform lg:-translate-y-4" : "border-[#eaeaea] shadow-sm mt-0 lg:mt-4"} transition-all duration-500 hover:shadow-2xl overflow-hidden group animate-in fade-in slide-in-from-bottom-[60px] duration-1000`}
              style={{ animationFillMode: 'both', animationDelay: `${idx * 150}ms` }}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-0 w-full bg-[#D4AF37] py-1.5 text-center z-10 shadow-sm">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[10px] tracking-[0.2em] uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="w-full h-[240px] overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/0" />
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="[font-family:'Aboreto',Helvetica] text-[24px] text-[#111111] uppercase tracking-wide mb-2">
                  {pkg.name}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[14px] leading-relaxed mb-6 h-auto md:h-[42px]">
                  {pkg.description}
                </p>
                <div className="mb-8">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#111111] text-[32px] md:text-[38px] tracking-tight">
                    {pkg.price}
                  </span>
                </div>

                <div className="flex-1 flex flex-col gap-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <Check className="w-[18px] h-[18px] text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="[font-family:'Inter',Helvetica] font-light text-[#444444] text-[14px] leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={openModal}
                  className={`w-full py-4 text-[12px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${pkg.highlighted ? "bg-[#111111] text-white hover:bg-[#D4AF37]" : "bg-[#f4f4f4] text-[#111111] hover:bg-[#111111] hover:text-white"}`}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
