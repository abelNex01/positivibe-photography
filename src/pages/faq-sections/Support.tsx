import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Camera,
  Sparkles,
  Heart,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { useReservation } from "@/context/ReservationContext";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const galleryModules = (import.meta as any).glob(
  "../../assets/gallery/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

// Map images by filename to ensure we can pick the exact ones requested
const galleryMap: Record<string, string> = {};
Object.entries(galleryModules).forEach(([path, mod]: [string, any]) => {
  const fileName = path.split("/").pop();
  if (fileName) {
    galleryMap[fileName] = mod.default;
  }
});

const selectedImages = [
  galleryMap["8.webp"] || "",
  galleryMap["59.webp"] || "",
  galleryMap["15.webp"] || "",
  galleryMap["26.webp"] || "",
];

export const FaqSupport = (): JSX.Element => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const { openModal } = useReservation();

  const services = [
    {
      id: "weddings",
      title: "Weddings",
      color: "bg-[#1a1a1a]",
      img: selectedImages[0],
      icon: <Heart className="w-6 h-6" />,
      tagline: "The Legacy Collection",
      price: "From $4,500",
      description:
        "Cinematic storytelling for your most profound day. We capture the grand architecture of your union and the quiet, stolen breaths in between.",
      content: (
        <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl">
          <div className="flex flex-col gap-2">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] [font-family:'Inter',Helvetica]">
              Classic Legacy
            </span>
            <h3 className="text-white text-3xl sm:text-5xl lg:text-6xl font-aboreto font-normal leading-tight uppercase">
              Weddings{" "}
              <span className="font-bastliga text-[#D4AF37] text-[40px] sm:text-[60px] lg:text-[80px] lowercase italic mx-2 inline-block translate-y-2 leading-none">
                Film
              </span>
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-white text-[14px] sm:text-[15px] [font-family:'Inter',Helvetica] font-extralight leading-relaxed">
              Our wedding photography is rooted in editorial elegance and raw,
              unscripted emotion. We don't just take photos; we compose your
              first family heirloom. We focus on the atmospheric details—the
              heavy scent of the florals, the brush of silk, and the shared
              glances that define your legacy.
            </p>

            <div className="flex items-baseline gap-4 border-l border-[#D4AF37] pl-4 sm:pl-6 py-2">
              <span className="text-white text-[10px] sm:text-[11px] uppercase tracking-widest [font-family:'Inter',Helvetica]">
                Investment Range
              </span>
              <span className="text-[#D4AF37] text-xl sm:text-3xl font-aboreto tracking-tighter">
                Starting at $4,500
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
              <button
                onClick={openModal}
                className="px-4 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-black text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 rounded-none shadow-xl"
              >
                Book This Service
              </button>
              <Link href="/services">
                <a className="px-4 sm:px-8 py-3 sm:py-4 border border-white/20 text-white text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 rounded-none flex items-center justify-center">
                  Full Catalog
                </a>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "portraits",
      title: "Portraits",
      color: "bg-[#D4AF37]",
      img: selectedImages[1],
      icon: <Camera className="w-6 h-6" />,
      tagline: "The Muse Collection",
      price: "From $850",
      description:
        "High-fashion editorial portraiture designed to elevate your personal brand or celebrate a chapter of your life.",
      content: (
        <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl">
          <div className="flex flex-col gap-2">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] [font-family:'Inter',Helvetica]">
              Editorial Muse
            </span>

            <h3 className="text-white text-3xl sm:text-5xl lg:text-6xl font-aboreto font-normal leading-tight uppercase drop-shadow-md">
              Fine Art{" "}
              <span className="font-bastliga text-[#D4AF37] text-[40px] sm:text-[60px] lg:text-[80px] lowercase italic mx-2 inline-block translate-y-2 leading-none">
                Muse
              </span>
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-white text-[14px] sm:text-[15px] [font-family:'Inter',Helvetica] font-extralight leading-relaxed drop-shadow-sm">
              Experience a full editorial transformation. From professional
              styling guidance to cinematic lighting, we create portraits that
              belong on magazine covers. Our process is designed to find the
              most authentic and striking version of you, capturing the power
              and nuance of your personality.
            </p>

            <div className="flex items-baseline gap-4 border-l border-black/40 pl-4 sm:pl-6 py-2">
              <span className="text-white text-[10px] sm:text-[11px] uppercase tracking-widest [font-family:'Inter',Helvetica]">
                Investment Range
              </span>
              <span className="text-[#D4AF37] text-xl sm:text-3xl font-aboreto tracking-tighter">
                Starting at $850
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
              <button
                onClick={openModal}
                className="px-4 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-black text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 rounded-none shadow-xl"
              >
                Book This Service
              </button>
              <Link href="/services">
                <a className="px-4 sm:px-8 py-3 sm:py-4 border border-white/20 text-white text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 rounded-none flex items-center justify-center">
                  Full Catalog
                </a>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "family",
      title: "Heritage",
      color: "bg-[#2a2a2a]",
      img: selectedImages[2],
      icon: <Sparkles className="w-6 h-6" />,
      tagline: "The Heritage Collection",
      price: "From $1,200",
      content: (
        <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl">
          <div className="flex flex-col gap-2">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] [font-family:'Inter',Helvetica]">
              Generational Legacy
            </span>
            <h3 className="text-white text-3xl sm:text-5xl lg:text-6xl font-aboreto font-normal leading-tight uppercase">
              Family{" "}
              <span className="font-bastliga text-[#D4AF37] text-[40px] sm:text-[60px] lg:text-[80px] lowercase italic mx-2 inline-block translate-y-2 leading-none">
                Legacy
              </span>
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-white text-[14px] sm:text-[15px] [font-family:'Inter',Helvetica] font-extralight leading-relaxed">
              Honest, intimate glimpses into your family's dynamic. We move away
              from stiff poses to document the authentic laughter and chaos of
              your legacy. Whether it's a multigenerational gathering or a quiet
              afternoon in your home, we document the connections that matter
              most.
            </p>

            <div className="flex items-baseline gap-4 border-l border-[#D4AF37] pl-4 sm:pl-6 py-2">
              <span className="text-white text-[10px] sm:text-[11px] uppercase tracking-widest [font-family:'Inter',Helvetica]">
                Investment Range
              </span>
              <span className="text-[#D4AF37] text-xl sm:text-3xl font-aboreto tracking-tighter">
                Starting at $1,200
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
              <button
                onClick={openModal}
                className="px-4 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-black text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 rounded-none shadow-xl"
              >
                Inquire Now
              </button>
              <Link href="/services">
                <a className="px-4 sm:px-8 py-3 sm:py-4 border border-white/20 text-white text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 rounded-none flex items-center justify-center">
                  View Service Detail
                </a>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "elopements",
      title: "Elopements",
      color: "bg-[#111111]",
      img: selectedImages[3],
      icon: <Briefcase className="w-6 h-6" />,
      tagline: "The Boundless Collection",
      price: "From $2,800",
      content: (
        <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl">
          <div className="flex flex-col gap-2">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] [font-family:'Inter',Helvetica]">
              Beyond Boundaries
            </span>
            <h3 className="text-white text-3xl sm:text-5xl lg:text-6xl font-aboreto font-normal leading-tight uppercase">
              Boundless{" "}
              <span className="font-bastliga text-[#D4AF37] text-[40px] sm:text-[60px] lg:text-[80px] lowercase italic mx-2 inline-block translate-y-2 leading-none">
                Adventures
              </span>
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-white text-[14px] sm:text-[15px] [font-family:'Inter',Helvetica] font-extralight leading-relaxed">
              Intimate, adventurous celebrations of love without the crowds. We
              specialize in capturing the quiet grandeur of elopements in unique
              landscapes and private sanctuaries. Perfect for couples seeking a
              more personal and cinematic way to say their vows.
            </p>

            <div className="flex items-baseline gap-4 border-l border-[#D4AF37] pl-4 sm:pl-6 py-2">
              <span className="text-white text-[10px] sm:text-[11px] uppercase tracking-widest [font-family:'Inter',Helvetica]">
                Investment Range
              </span>
              <span className="text-white text-xl sm:text-3xl font-aboreto tracking-tighter">
                Starting at $2,800
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
              <button
                onClick={openModal}
                className="px-4 sm:px-8 py-3 sm:py-4 bg-white text-black text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-300 rounded-none shadow-xl"
              >
                Inquire Now
              </button>
              <Link href="/contact">
                <a className="px-4 sm:px-8 py-3 sm:py-4 border border-white/20 text-white text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 rounded-none flex items-center justify-center">
                  Direct Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-[auto] md:h-[90vh] w-full bg-white text-[#111111] font-sans overflow-hidden selection:bg-[#D4AF37] selection:text-white">
      {/* --- LEFT SECTION (Static) --- */}
      <motion.div
        className="w-full md:w-[40%] h-auto md:h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 md:pr-20 z-10 bg-[#f8f8f8] shadow-[10px_0_30px_-15px_rgba(0,0,0,0.05)] relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-xl font-aboreto tracking-[0.2em] font-normal text-[#111111] uppercase">
          Catalog
        </div>

        <div className="flex flex-col gap-6 mt-8 md:-mt-10">
          <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[4rem] font-aboreto font-normal leading-[0.9] tracking-tighter text-[#111] uppercase">
            Curated
            <span className="text-[#D4AF37] font-bastliga text-[4rem] sm:text-[6rem] lg:text-[9.5rem] translate-y-4 inline-block normal-case leading-none">
              services
            </span>
          </h1>
          <p className="text-[#111111]/60 text-sm lg:text-[15px] [font-family:'Inter',Helvetica] font-light leading-relaxed max-w-[95%] mt-8 sm:mt-16 border-l-2 border-[#D4AF37] pl-6 sm:pl-8">
            Explore our artisanal photography services. From intimate
            portraiture to global editorial events, we tailor every session to
            the unique architecture of your story.
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="/services">
              <a className="text-[10px] items-center gap-2 flex uppercase tracking-[0.3em] font-bold text-black group">
                Full Services{" "}
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Link>
            <Link href="/pricing">
              <a className="text-[10px] items-center gap-2 flex uppercase tracking-[0.3em] font-bold text-[#D4AF37] group">
                Investment{" "}
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Link>
          </div>
        </div>

        <div className="hidden sm:flex items-end gap-6 mb-4 mt-8 md:mt-0 opacity-50">
          <div className="flex flex-col gap-1 pb-2">
            <span className="text-[10px] text-[#D4AF37] font-bold tracking-[0.4em] uppercase [font-family:'Inter',Helvetica]">
              Est. 2026
            </span>
            <span className="text-xs font-normal uppercase tracking-[0.2em] text-[#111] font-aboreto">
              Positivibe Archive
            </span>
          </div>
        </div>
      </motion.div>

      {/* --- MOBILE: Card-based layout for services --- */}
      <div className="flex flex-col md:hidden w-full bg-[#0a0a0a]">
        {services.map((service, index) => {
          const isExpanded = activePanel === service.id;
          return (
            <div
              key={service.id}
              className="border-b border-white/5 last:border-b-0 animate-in fade-in slide-in-from-bottom-[40px] duration-1000"
              style={{
                animationFillMode: "both",
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Card Header */}
              <button
                onClick={() => setActivePanel(isExpanded ? null : service.id)}
                className="w-full flex items-center gap-4 p-6 text-left group"
              >
                <div className="w-12 h-12 rounded-none overflow-hidden flex-shrink-0 relative">
                  <img
                    src={service.img}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="flex-1 flex flex-col gap-0.5">
                  <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] [font-family:'Inter',Helvetica]">
                    {service.tagline}
                  </span>
                  <span className="text-white font-aboreto text-lg uppercase tracking-wide">
                    {service.title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/40 text-[12px] [font-family:'Inter',Helvetica] font-light hidden xs:block">
                    {service.price}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                  />
                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="relative">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.img}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-20"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-black/70" />
                  </div>
                  <div className="relative z-10 p-6 pt-2 pb-10">
                    {service.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- RIGHT SECTION (Desktop Interactive Accordion) --- */}
      <div className="hidden md:flex flex-1 h-full relative bg-[#0a0a0a]">
        {/* Global Reset Menu Button */}
        <button
          className={`absolute top-10 right-10 z-50 mix-blend-difference hover:opacity-70 transition-all duration-300 ${activePanel ? "text-white" : "text-gray-400"}`}
          onClick={() => setActivePanel(null)}
        >
          {activePanel ? (
            <X
              className="w-8 h-8 rotate-0 transition-transform duration-500"
              strokeWidth={1}
            />
          ) : (
            <Menu
              className="w-8 h-8 rotate-0 transition-transform duration-500"
              strokeWidth={1}
            />
          )}
        </button>

        {/* Panels Container */}
        {services.map((service) => {
          const isActive = activePanel === service.id;
          const isHidden = activePanel !== null && !isActive;
          let widthClass = "w-1/4";
          if (isActive) widthClass = "w-full";
          if (isHidden) widthClass = "w-0";

          return (
            <div
              key={service.id}
              onClick={() => setActivePanel(service.id)}
              className={`
                h-full relative overflow-hidden transition-all duration-700 [transition-timing-function:cubic-bezier(0.87,0,0.13,1)]
                border-l border-white/5 cursor-pointer group
                ${widthClass}
                ${isActive ? "bg-[#0a0a0a]" : service.color}
              `}
            >
              {/* Image background for texture */}
              <div
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isActive ? "opacity-0" : "opacity-100"}`}
              >
                <img
                  src={service.img}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-70 transition-all [transition-duration:2000ms] group-hover:scale-110"
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
              </div>

              {/* Normal State Content */}
              <div
                className={`
                  absolute inset-0 flex flex-col justify-between p-10 pt-12 transition-all duration-500 z-10
                  ${isActive ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100 delay-300"}
                `}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold [font-family:'Inter',Helvetica]">
                    {service.id === "portraits" ? "Muse" : service.title}
                  </span>
                </div>
                <h2 className="text-white text-5xl xl:text-7xl font-aboreto font-normal uppercase tracking-tighter opacity-80 [writing-mode:vertical-rl] rotate-180 self-center mb-12">
                  {service.title}
                </h2>
              </div>

              {/* Expanded State Content */}
              <div
                className={`
                  absolute inset-0 p-10 lg:p-16 xl:p-24 flex flex-col justify-center transition-all duration-700 z-20 overflow-y-auto
                  ${isActive ? "opacity-100 translate-y-0 scale-100 delay-300" : "opacity-0 translate-y-8 scale-95 pointer-events-none"}
                `}
              >
                {service.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
