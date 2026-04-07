import { Truck, ShieldCheck, Globe, PackageOpen } from "lucide-react";
import { motion } from "framer-motion";

const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const policies = [
  {
    icon: Truck,
    title: "Global Shipping",
    description: "Insured door-to-door delivery with specialized fine art couriers worldwide."
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Guarantee",
    description: "Every archival print and album is guaranteed against fading or structural degradation."
  },
  {
    icon: Globe,
    title: "Eco-Conscious",
    description: "Our laboratories use 100% renewable energy and sustainably sourced paper fibers."
  },
  {
    icon: PackageOpen,
    title: "White Glove Prep",
    description: "Each order is hand-inspected and meticulously packaged in our studio before dispatch."
  }
];

export const ShopPolicies = () => {
  return (
    <section className="w-full bg-white py-24 border-t border-[#f0f0f0]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 bg-[#fcfcfc] flex items-center justify-center mb-6 group-hover:bg-[#111111] transition-colors duration-500">
               <policy.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" strokeWidth={1} />
            </div>
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#111111] text-[11px] tracking-[0.2em] uppercase mb-3">
              {policy.title}
            </h3>
            <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[13px] leading-relaxed max-w-[200px]">
              {policy.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
