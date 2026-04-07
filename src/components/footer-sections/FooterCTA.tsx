import { Calendar } from "lucide-react";
import { useReservation } from "@/context/ReservationContext";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const FooterCTA = () => {
  const { openModal } = useReservation();

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/footer.webp')`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block"
        >
          Reserve Your Date
        </motion.span>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Aboreto',Helvetica] font-normal text-white text-[40px] sm:text-[54px] md:text-[72px] lg:text-[90px] leading-[1.1] tracking-wide uppercase mb-4"
        >
          Capture your{" "}
          <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[58px] sm:text-[78px] md:text-[100px] lg:text-[130px] leading-[0.7] italic lowercase mx-2 transform translate-y-3 inline-block">
            legacy
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] text-white/80 text-sm sm:text-base md:text-lg font-light tracking-wide mb-8"
        >
          Crafting timeless, emotive images for every moment.
        </motion.p>
        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={openModal}
          className="group flex items-center gap-2 bg-white text-black px-10 py-4 rounded-none text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform"
        >
          <Calendar className="w-4 h-4" />
          Book Your Session
        </motion.button>
      </div>
    </section>
  );
};
