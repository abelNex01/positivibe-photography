import React from 'react';
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const HomeSocialProof = (): JSX.Element => {
  const testimonials = [
    {
      name: "Selam & Dawit",
      date: "OCTOBER 2025",
      category: "Wedding",
      quote: "Our wedding photos belong in a magazine. Every laugh, every tear—captured with such breathtaking emotion and genuine artistry. We are forever grateful.",
    },
    {
      name: "Bethlehem & Abel",
      date: "AUGUST 2025",
      category: "Engagement",
      quote: "The gallery is beyond words. They didn't just take pictures; they preserved the absolute essence of our love story in the most timeless way imaginable.",
    },
    {
      name: "Hana & Thomas",
      date: "MAY 2025",
      category: "Traditional",
      quote: "The way you captured our traditional ceremony was incredible. Every vivid color and sacred moment was preserved with such respect and beauty.",
    },
    {
      name: "Lydia & Nahom",
      date: "DECEMBER 2025",
      category: "Destination",
      quote: "Having Positivibe fly with us for our destination wedding was the best decision. The epic landscapes combined with our intimate moments created a gallery that feels like a dream.",
    },
    {
      name: "Meron & Yohannes",
      date: "JULY 2025",
      category: "Elopement",
      quote: "They captured the intimacy of our private ceremony with such grace. Every frame feels like a still from a classic film. Simply stunning work.",
    },
    {
      name: "Sara & Michael",
      date: "NOVEMBER 2025",
      category: "Melse Ceremony",
      quote: "A true master of capturing the beauty of our heritage. The Melse photos are absolutely stunning. Their ability to tell a cultural story through light is unparalleled.",
    },
    {
      name: "The Rediet Wedding",
      date: "JUNE 2025",
      category: "Wedding",
      quote: "Beyond photography—this was an artistic collaboration. They made us feel so comfortable, and the resulting images are pure magic.",
    },
    {
      name: "Eyerusalem & Yonas",
      date: "SEPTEMBER 2025",
      category: "Proposal",
      quote: "They caught the exact second I said 'yes'! The surprise was perfectly documented, and the emotion in those photos is something I'll treasure forever.",
    },
  ];

  // Split testimonials for dual-row layout
  const topMarquee = testimonials.slice(0, 4);
  const bottomMarquee = testimonials.slice(4, 8);

  const TestimonialCard = ({ t, darkVariant = false }: { t: any, darkVariant?: boolean }) => {
    return (
      <div 
        className={`relative flex-shrink-0 w-[280px] sm:w-[380px] md:w-[450px] p-6 sm:p-8 md:p-12 flex flex-col justify-between transition-all duration-300 cursor-default border transform-gpu will-change-[transform,opacity] ${
          darkVariant 
            ? "bg-[#111111] border-[#222222] text-white hover:border-[#D4AF37]/50" 
            : "bg-[#fcfcfc] border-[#e8e8e8] text-[#111111] hover:border-[#D4AF37]/50"
        } group-hover/board:opacity-40 hover:!opacity-100 hover:scale-[1.02] hover:shadow-[0_15px_30px_-10px_rgba(212,175,55,0.15)] z-10 hover:z-30 rounded-none`}
      >
        {/* Massive Quote Watermark */}
        <div className={`absolute top-0 right-4 md:right-6 text-[80px] md:text-[140px] leading-none [font-family:'Aboreto',Helvetica] select-none pointer-events-none ${
          darkVariant ? "text-white/[0.03]" : "text-black/[0.03]"
        }`}>
          "
        </div>

        <div className="relative z-10">
          <div className="flex gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" strokeWidth={1} />
            ))}
          </div>

          <p className={`[font-family:'Inter',Helvetica] font-light text-[15px] md:text-[17px] leading-[1.9] mb-10 ${
            darkVariant ? "text-[#cccccc]" : "text-[#555555]"
          }`}>
            "{t.quote}"
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-8 border-t border-dashed border-[#D4AF37]/30 flex justify-between items-end">
          <div className="flex flex-col gap-1.5">
            <h4 className={`[font-family:'Aboreto',Helvetica] font-bold text-[14px] tracking-[0.15em] uppercase ${
              darkVariant ? "text-white" : "text-[#111]"
            }`}>
              {t.name}
            </h4>
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] tracking-widest uppercase">
              {t.category}
            </span>
          </div>
          <span className={`[font-family:'Inter',Helvetica] font-light text-[9px] tracking-widest uppercase ${
            darkVariant ? "text-[#666666]" : "text-[#999999]"
          }`}>
            {t.date}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#fdfdfd] py-24 md:py-32 flex flex-col items-center overflow-hidden border-y border-[#dddddd]/50 relative z-0">
      
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[-1]" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Cinematic Header */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16 md:mb-24 flex flex-col items-center px-6 relative z-10"
      >
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.3em] uppercase mb-4 block">
          Client Experiences
        </span>
        <h2 className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[40px] sm:text-[54px] md:text-[68px] leading-[1.1] tracking-wide uppercase">
          Words of <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[58px] sm:text-[78px] md:text-[100px] leading-[0.7] italic lowercase transform translate-y-3 inline-block">Love</span>
        </h2>
      </motion.div>

      {/* Dynamic Marquee Board */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full flex flex-col gap-6 md:gap-8 overflow-hidden group/board pb-16"
      >
        {/* Soft edge fading masks */}
        <div className="absolute inset-y-0 left-0 w-[5%] min-w-[40px] max-w-[200px] bg-gradient-to-r from-[#fdfdfd] to-transparent z-[50] pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[5%] min-w-[40px] max-w-[200px] bg-gradient-to-l from-[#fdfdfd] to-transparent z-[50] pointer-events-none" />

        {/* Top Marquee Row */}
        <div className="flex [--duration:70s] [--gap:1.5rem] md:[--gap:2rem] gap-[var(--gap)] group-hover/board:[animation-play-state:paused] w-fit">
          <div className="flex gap-[var(--gap)] animate-marquee flex-shrink-0 items-center">
            {topMarquee.map((t, idx) => (
              <TestimonialCard key={`top1-${idx}`} t={t} darkVariant={idx % 2 === 0} />
            ))}
          </div>
          <div className="flex gap-[var(--gap)] animate-marquee flex-shrink-0 items-center">
            {topMarquee.map((t, idx) => (
              <TestimonialCard key={`top2-${idx}`} t={t} darkVariant={idx % 2 === 0} />
            ))}
          </div>
        </div>

        {/* Bottom Marquee Row (Reverse Direction, Different Speed, Offset) */}
        <div className="flex [--duration:85s] [--gap:1.5rem] md:[--gap:2rem] gap-[var(--gap)] group-hover/board:[animation-play-state:paused] w-fit ml-[-15vw] md:ml-[-10vw]">
          <div className="flex gap-[var(--gap)] animate-marquee flex-shrink-0 items-center [animation-direction:reverse]">
            {bottomMarquee.map((t, idx) => (
              <TestimonialCard key={`bot1-${idx}`} t={t} darkVariant={idx % 2 !== 0} />
            ))}
          </div>
          <div className="flex gap-[var(--gap)] animate-marquee flex-shrink-0 items-center [animation-direction:reverse]">
            {bottomMarquee.map((t, idx) => (
              <TestimonialCard key={`bot2-${idx}`} t={t} darkVariant={idx % 2 !== 0} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Luxury Footer Accent */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6, ease: "circOut" }}
        className="mt-8 md:mt-16 w-24 h-px bg-[#D4AF37]" 
      />
      
    </section>
  );
};
