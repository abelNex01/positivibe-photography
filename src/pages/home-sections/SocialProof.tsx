import React from 'react';
import { Star, Quote } from "lucide-react";
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
    {
      name: "Feven & Samuel",
      date: "MARCH 2025",
      category: "Vow Renewal",
      quote: "Ten years later, and they made us fall in love all over again. Our vow renewal was captured with such elegance. These are the most beautiful legacy we could leave.",
    },
  ];

  const TestimonialCards = () => (
    <>
      {testimonials.map((t, idx) => (
        <div 
          key={idx} 
          className="flex-shrink-0 w-[320px] md:w-[400px] p-8 md:p-10 border border-black/5 bg-[#fcfcfc] flex flex-col justify-between transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)] group/card"
        >
          <div className="flex flex-col">
            <Quote className="w-8 h-8 text-[#D4AF37]/20 mb-6 group-hover/card:text-[#D4AF37]/40 transition-colors" />
            
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>

            <p className="[font-family:'Inter',Helvetica] font-light text-[#444] text-[15px] md:text-[17px] leading-[1.8] italic mb-10">
              "{t.quote}"
            </p>
          </div>

          <div className="flex flex-col pt-6 border-t border-gray-100">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-0.5">
                <h4 className="[font-family:'Aboreto',Helvetica] font-bold text-[#111] text-[13px] tracking-[0.1em] uppercase">
                  {t.name}
                </h4>
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] tracking-widest uppercase">
                  {t.category}
                </span>
              </div>
              <span className="[font-family:'Inter',Helvetica] font-light text-gray-300 text-[9px] tracking-widest uppercase">
                {t.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section className="w-full bg-white py-24 md:py-32 flex flex-col items-center overflow-hidden border-y border-gray-100">
      
      {/* Cinematic Header */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16 md:mb-24 flex flex-col items-center px-6"
      >
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.3em] uppercase mb-4">
          Global Testimonials
        </span>
        <h2 className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[32px] sm:text-[42px] md:text-[58px] leading-[1.2] tracking-wide uppercase">
          Words of <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[48px] sm:text-[64px] md:text-[88px] leading-[0.7] italic lowercase transform translate-y-3 inline-block">Love</span>
        </h2>
      </motion.div>

      {/* Infinite Marquee Container */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full flex overflow-hidden group"
      >
        {/* Gradients for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Row - Two identical sets for a seamless loop */}
        <div className="flex [--duration:90s] [--gap:2rem] gap-[var(--gap)] hover:[animation-play-state:paused] py-4">
          <div className="flex gap-[var(--gap)] animate-marquee flex-shrink-0">
            <TestimonialCards />
          </div>
          <div className="flex gap-[var(--gap)] animate-marquee flex-shrink-0">
            <TestimonialCards />
          </div>
        </div>
      </motion.div>

      {/* Luxury Footer Accent */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
        className="mt-16 md:mt-24 w-24 h-px bg-[#D4AF37]" 
      />
      
    </section>
  );
};
