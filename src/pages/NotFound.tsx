import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6">
      <motion.div 
        className="text-center flex flex-col items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[12px] tracking-[0.3em] uppercase mb-4 block">
          Error 404
        </span>
        <h1 className="[font-family:'Aboreto',Helvetica] font-normal text-white text-[48px] sm:text-[64px] md:text-[80px] leading-tight tracking-wide uppercase">
          Lost in{" "}
          <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[68px] sm:text-[88px] md:text-[110px] leading-[0.7] italic lowercase mx-2 transform translate-y-3 inline-block">
            Light
          </span>
        </h1>
        <p className="mt-12 max-w-[500px] [font-family:'Inter',Helvetica] font-light text-white/50 text-[15px] sm:text-[16px] leading-relaxed">
          The moment you're looking for seems to have faded from our
          collections. Let us guide you back to the main gallery.
        </p>

        <Link href="/">
          <button className="mt-12 group flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] font-medium tracking-[0.2em] uppercase hover:scale-105 transition-all duration-300 shadow-2xl">
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </button>
        </Link>
      </motion.div>

      {/* Subtle branding at the very bottom of the error page */}
      <div className="absolute bottom-10 opacity-20">
        <span className="[font-family:'Aboreto',Helvetica] tracking-[0.5em] uppercase text-[10px]">
          Positivibe
        </span>
      </div>
    </div>
  );
}
