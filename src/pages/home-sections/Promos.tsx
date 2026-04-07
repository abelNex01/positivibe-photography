import { useReservation } from "@/context/ReservationContext";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Dynamically load gallery images for the promos
const promoImageModules = (import.meta as any).glob(
  "../../assets/gallery/*.{png,jpg,jpeg,webp}",
  { eager: true },
);
const promoImages = Object.entries(promoImageModules)
  .sort(([pathA], [pathB]) => {
    const getNumber = (path: string) => {
      const filename = path.split(/[\\/]/).pop() || "";
      const match = filename.match(/(\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    };
    return getNumber(pathA) - getNumber(pathB);
  })
  .map(([, mod]: any) => mod.default as string);

const serviceCards = [
  {
    image: promoImages[2] || promoImages[0],
    category: "The Artifacts",
    title: "Fine Art Prints",
    description:
      "Museum-grade cotton rag prints tailored for longevity and profound visual impact in your home.",
  },
  {
    image: promoImages[5] || promoImages[1],
    category: "The Archive",
    title: "Heirloom Albums",
    description:
      "Handcrafted, lay-flat linen albums designed to serve as your family's most cherished physical legacy.",
  },
  {
    image: promoImages[8] || promoImages[2],
    category: "The Legacy",
    title: "Gift Collections",
    description:
      "Share the gift of timeless storytelling with a curated Positivibe experience for your loved ones.",
  },
];

const highlightCards = [
  {
    image: promoImages[12] || promoImages[3],
    subtitle: "A Cinematic Experience",
    title: "Modern Storytelling",
    description:
      "We don't just take photos; we craft visual narratives that resonate across generations.",
  },
  {
    image: promoImages[15] || promoImages[4],
    subtitle: "Archival Quality",
    title: "Bespoke Finishing",
    description:
      "Museum-grade prints and handcrafted albums that transform memories into tangible heirlooms.",
  },
];

const cardReveal = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const HomePromos = (): JSX.Element => {
  const { openModal } = useReservation();

  return (
    <section className="w-full flex flex-col items-center mb-24 md:mb-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto gap-4">
      {/* Top Row: Services */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {serviceCards.map((card, idx) => (
          <div
            key={idx}
            className="group relative aspect-[4/5] overflow-hidden bg-[#111111] animate-in fade-in slide-in-from-bottom-[60px] duration-1000"
            style={{
              animationFillMode: "both",
              animationDelay: `${idx * 150}ms`,
            }}
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 z-20">
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-4 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {card.category}
              </span>
              <h3 className="[font-family:'Aboreto',Helvetica] text-white text-[32px] sm:text-[40px] leading-none uppercase tracking-widest mb-6">
                {card.title}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-light text-white text-[13px] leading-relaxed mb-8 max-w-[280px] max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                {card.description}
              </p>

              <Link href="/shop">
                <button className="w-fit flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors group/btn">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[11px] tracking-[0.2em] uppercase">
                    Discover More
                  </span>
                  <div className="w-10 h-[1px] bg-white group-hover/btn:bg-[#D4AF37] group-hover/btn:w-16 transition-all duration-500" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row: Highlights */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlightCards.map((card, idx) => (
          <div
            key={idx}
            className="group relative aspect-[16/9] md:aspect-auto md:h-[500px] overflow-hidden bg-[#111111] animate-in fade-in slide-in-from-bottom-[60px] duration-1000"
            style={{
              animationFillMode: "both",
              animationDelay: `${idx * 200}ms`,
            }}
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-70"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-20">
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase mb-6">
                {card.subtitle}
              </span>
              <h2 className="[font-family:'Aboreto',Helvetica] text-white text-[36px] sm:text-[48px] md:text-[60px] leading-tight uppercase tracking-[0.1em] mb-6">
                {card.title.split(" ")[0]}{" "}
                <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[56px] sm:text-[72px] md:text-[88px] lowercase transform translate-y-3 inline-block italic">
                  {card.title.split(" ")[1]}
                </span>
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-light text-white text-[15px] sm:text-[16px] leading-relaxed max-w-[500px] mb-10">
                {card.description}
              </p>

              <button
                onClick={openModal}
                className="px-10 py-4 border border-white/30 hover:border-[#D4AF37] text-white hover:text-white bg-white/5 hover:bg-[#D4AF37]/10 transition-all duration-300 [font-family:'Inter',Helvetica] font-medium text-[11px] tracking-[0.2em] uppercase"
              >
                Book a Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
