import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import testimonialVideo from "../../assets/testimonial.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const HomeVideoTestimonial = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 flex flex-col items-center overflow-hidden">
      <div className="max-w-[1240px] w-full px-6 flex flex-col items-center gap-16">
        {/* Header Text */}
        <div className="text-center flex flex-col items-center mb-4">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block"
          >
            The Experience
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[40px] sm:text-[54px] md:text-[68px] leading-[1.1] tracking-wide uppercase"
          >
            The{" "}
            <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[58px] sm:text-[78px] md:text-[100px] leading-[0.7] italic lowercase mx-2 transform translate-y-3 inline-block">
              Journey
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-[650px] [font-family:'Inter',Helvetica] font-light text-[#555555] text-base md:text-lg leading-relaxed text-center"
          >
            "We don't just capture moments; we preserve the soul of your story.
            Watch how we transform fleeting memories into timeless art."
          </motion.p>
        </div>

        {/* Video Player Container */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-video bg-[#111111] overflow-hidden shadow-2xl group cursor-pointer"
          onClick={togglePlay}
        >
          {/* Main Video Element */}
          <video
            ref={videoRef}
            src={testimonialVideo}
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            loop
            playsInline
            preload="auto"
            muted={false}
          />

          {/* Overlay & Play Button */}
          <div
            className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-2xl">
              {isPlaying ? (
                <Pause className="text-white w-8 h-8 md:w-10 md:h-10 fill-white" />
              ) : (
                <Play className="text-white w-8 h-8 md:w-10 md:h-10 fill-white translate-x-1" />
              )}
            </div>

            {/* "Watch the Story" floating label */}
            {!isPlaying && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <span className="text-white font-['Aboreto'] text-[12px] tracking-[4px] uppercase opacity-80">
                  Watch our story
                </span>
              </div>
            )}
          </div>

          {/* Elegant Accent Border */}
          <div className="absolute inset-8 border border-white/10 pointer-events-none group-hover:inset-6 transition-all duration-700" />
        </motion.div>

        {/* Bottom Signature Line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-8 opacity-40"
        >
          <div className="h-px w-20 bg-black" />
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-black font-['Inter']">
            Positivibe Cinematography
          </span>
          <div className="h-px w-20 bg-black" />
        </motion.div>
      </div>
    </section>
  );
};
