import { useState, useCallback, useEffect } from "react";
import { X, Maximize2, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import avatar1 from "../../assets/gallery/5.webp";
import avatar2 from "../../assets/gallery/10.webp";

// Dynamically load all gallery images securely using Vite's glob import
const imageModules = (import.meta as any).glob(
  "../../assets/gallery/*.{png,jpg,jpeg,webp}",
  { eager: true },
);
const allGalleryImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => {
    const getNumber = (path: string) => {
      const filename = path.split(/[\\/]/).pop() || "";
      const match = filename.match(/(\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    };
    return getNumber(pathA) - getNumber(pathB);
  })
  .map(([, mod]: any) => mod.default as string);

const photographers = [
  {
    avatar: avatar1,
    name: "Sofia Patel",
    badge: "LUXE",
  },
  {
    avatar: avatar2,
    name: "Liam O'Connor",
    badge: "PRO",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const HomeGallery = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const visibleImages = allGalleryImages;
  const currentImages = allGalleryImages; // For Lightbox context (can navigate all)

  const showNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex !== null) {
        setDirection("right");
        setSelectedIndex((selectedIndex + 1) % currentImages.length);
      }
    },
    [selectedIndex, currentImages.length],
  );

  const showPrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex !== null) {
        setDirection("left");
        setSelectedIndex(
          (selectedIndex - 1 + currentImages.length) % currentImages.length,
        );
      }
    },
    [selectedIndex, currentImages.length],
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  // Randomized aspect ratios to favor TALLER/VERTICAL masonry shots for a more high-end gallery feel
  const aspectRatios = [
    "aspect-[2/3]",
    "aspect-[3/4]",
    "aspect-[9/16]",
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[2/3]",
    "aspect-[3/4]",
    "aspect-[4/5]",
    "aspect-[9/16]",
    "aspect-[2/3]",
    "aspect-[3/4]",
    "aspect-video",
  ];

  return (
    <section className="relative w-full flex flex-col items-center">
      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[1000] bg-black flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors p-2 z-[1100]"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>
          <button
            className="absolute left-2 md:left-10 text-white hover:text-white/80 transition-all p-2 md:p-3 hover:bg-white/10 rounded-full z-[1100]"
            onClick={showPrev}
          >
            <ArrowLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
          </button>
          <button
            className="absolute right-2 md:right-10 text-white hover:text-white/80 transition-all p-2 md:p-3 hover:bg-white/10 rounded-full z-[1100]"
            onClick={showNext}
          >
            <ArrowRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
          </button>
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
            <img
              key={`${selectedIndex}-${direction}`}
              src={currentImages[selectedIndex]}
              alt="Full size preview"
              className={`max-w-full max-h-[85vh] md:max-h-full object-contain shadow-2xl select-none pointer-events-auto ${
                direction === "right"
                  ? "animate-slide-in-right"
                  : "animate-slide-in-left"
              }`}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-[1100]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(
                  "https://positivibesphotographycorp.pixieset.com/robelandadiamposthamawti/",
                  "_blank",
                );
              }}
              className="px-6 py-3 border border-white/20 hover:border-[#D4AF37] text-white bg-white/5 hover:bg-[#D4AF37] transition-all duration-300 [font-family:'Inter',Helvetica] font-medium text-[9px] tracking-[0.3em] uppercase backdrop-blur-sm"
            >
              View full album
            </button>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 font-['Inter'] text-[12px] tracking-[4px] uppercase">
            {selectedIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}

      {/* GALLERY heading with elegant global typography */}
      <div className="text-center mt-12 md:mt-20 flex flex-col items-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block"
        >
          Portfolio
        </motion.span>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[40px] sm:text-[54px] md:text-[72px] lg:text-[90px] leading-[1.1] tracking-wide uppercase"
        >
          The{" "}
          <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[58px] sm:text-[78px] md:text-[100px] lg:text-[130px] leading-[0.7] italic lowercase mx-2 transform translate-y-3 inline-block">
            Gallery
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 w-full max-w-[600px] px-4 [font-family:'Inter',Helvetica] font-light text-[#666666] text-[15px] sm:text-[16px] text-center leading-relaxed"
        >
          Capture authentic moments with Positivibe Photography. Explore our
          latest curations.
        </motion.p>
      </div>

      {/* Photo Grid */}
      <div className="w-full px-4 md:px-6 lg:px-8 mt-12 md:mt-20 flex flex-col items-center">
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-2 w-full space-y-2">
          {visibleImages.map((imgUrl, index) => {
            const aspectClass = aspectRatios[index % aspectRatios.length];
            return (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden border border-transparent hover:border-white/10 transition-colors animate-in fade-in duration-1000"
                style={{
                  animationFillMode: "both",
                  animationDelay: `${(index % 8) * 100}ms`,
                }}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={imgUrl}
                  alt={`Wedding feature ${index + 1}`}
                  className={`w-full ${aspectClass} object-cover transition-transform duration-700 group-hover:scale-105`}
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-6">
                  {/* Fullscreen Icon - Top Right */}
                  <div className="flex justify-end">
                    <div className="bg-white/10 border border-white/20 p-3 rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 className="text-white" size={22} />
                    </div>
                  </div>

                  {/* View Album Button - Positioned at bottom */}
                  <div className="mt-auto flex justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          "https://positivibesphotographycorp.pixieset.com/1styearanniversary/",
                          "_blank",
                        );
                      }}
                      className="px-8 py-4 bg-white text-[#111111] hover:bg-[#D4AF37] hover:text-white transition-all duration-500 [font-family:'Inter',Helvetica] font-medium text-[10px] tracking-[0.3em] uppercase transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 shadow-2xl mb-4"
                    >
                      View full album
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
