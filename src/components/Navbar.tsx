import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useReservation } from "@/context/ReservationContext";
import { useCart } from "@/context/CartContext";
import polygon3 from "@/assets/polygon-3.svg";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Shop", href: "/shop" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const PolygonGroup = () => (
  <div className="flex gap-1 sm:gap-1.5 items-center scale-75 sm:scale-90 origin-left flex-shrink-0">
    <div className="flex gap-1 items-center">
      <img className="w-[10px] h-[10px]" alt="Polygon" src={polygon3} />
      <img className="w-[14px] h-[14px] -ml-2" alt="Polygon" src={polygon3} />
      <img className="w-[10px] h-[10px] -ml-2" alt="Polygon" src={polygon3} />
    </div>
    <div className="whitespace-nowrap h-[24px] [font-family:'Aboreto',Helvetica] font-normal text-[#ffffff] text-[16px] sm:text-[18px] tracking-[0.1em] leading-[normal] flex items-center">
      Positivibe
    </div>
    <div className="flex gap-1 items-center">
      <img className="w-[10px] h-[10px]" alt="Polygon" src={polygon3} />
      <img className="w-[14px] h-[14px] -ml-2" alt="Polygon" src={polygon3} />
      <img className="w-[10px] h-[10px] -ml-2" alt="Polygon" src={polygon3} />
    </div>
  </div>
);

// Elegant golden star ornament for active links
const ActiveOrnament = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2 text-[#D4AF37] flex-shrink-0"
    style={{ filter: "drop-shadow(0px 0px 4px rgba(212, 175, 55, 0.6))" }}
  >
    <path
      d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
      fill="currentColor"
    />
  </svg>
);

export const Navbar = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useReservation();
  const { cartCount } = useCart();

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 100;
          if (isScrolled !== lastScrolled) {
            lastScrolled = isScrolled;
            setScrolled(isScrolled);
          }
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          TOP NAVBAR — Visible at the very top, hides on scroll
      ═══════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] bg-[#000000]/60 backdrop-blur-xl z-[100] transition-all duration-500 shadow-2xl rounded-none ${
          scrolled
            ? "opacity-0 -translate-y-full pointer-events-none"
            : "opacity-100 -translate-x-1/2 translate-y-0"
        }`}
      >
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 items-center px-4 sm:px-6 lg:px-8 py-3 min-w-0">
          {/* Left: Logo - Acts as Home Link */}
          <div className="flex justify-start items-center min-w-0">
            <Link href="/">
              <a className="cursor-pointer transition-opacity hover:opacity-80 origin-left flex-shrink-0">
                <PolygonGroup />
              </a>
            </Link>
          </div>

          {/* Center: Desktop Nav Links (Hidden on mobile) */}
          <div className="hidden lg:flex justify-center flex-1 min-w-0">
            <div className="flex items-center gap-[24px] xl:gap-[32px]">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.label} href={link.href}>
                    <a
                      className={`text-[11.5px] uppercase relative flex items-center h-[20px] [font-family:'Aboreto',Helvetica] tracking-[0.1em] whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "text-[#D4AF37] font-bold drop-shadow-sm"
                          : "text-gray-200 font-normal hover:text-white"
                      }`}
                    >
                      {isActive && <ActiveOrnament />}
                      <span>{link.label}</span>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: CTA Section */}
          <div className="hidden lg:flex justify-end items-center gap-6 min-w-0">
            <Link href="/checkout">
              <a className="relative cursor-pointer text-white hover:text-[#D4AF37] transition-all duration-300">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </a>
            </Link>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center px-6 py-2 bg-[#D4AF37] hover:bg-[#b8952d] transition-all duration-300 cursor-pointer rounded-none shadow-lg group flex-shrink-0"
            >
              <span className="[font-family:'Aboreto',Helvetica] font-bold text-black text-[10px] tracking-[0.1em] uppercase whitespace-nowrap">
                Book Now
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center justify-end flex-shrink-0">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 flex-shrink-0 w-10 h-10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#000000] border-none text-white p-0 w-full h-full sm:max-w-none z-[10001]"
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col items-center justify-center p-8 pt-24 gap-10 h-full w-full">
                  {/* Integrated Cart for Mobile */}
                  <div className="mb-4">
                    <Link href="/checkout">
                      <a
                        onClick={() => setIsOpen(false)}
                        className="relative flex items-center gap-4 group transition-all duration-300"
                      >
                        <ShoppingBag
                          className="h-8 w-8 text-[#D4AF37] group-hover:scale-110 transition-transform"
                          strokeWidth={1.2}
                        />
                        <span className="[font-family:'Aboreto',Helvetica] text-xl tracking-[0.2em] uppercase">
                          Cart ({cartCount})
                        </span>
                      </a>
                    </Link>
                  </div>

                  <div className="w-12 h-[1px] bg-[#D4AF37]/30 mb-4" />

                  {navLinks.map((link) => {
                    const isActive = location === link.href;
                    return (
                      <Link key={link.label} href={link.href}>
                        <a
                          onClick={() => setIsOpen(false)}
                          className={`text-3xl sm:text-4xl md:text-5xl uppercase [font-family:'Aboreto',Helvetica] tracking-[0.15em] flex items-center justify-center transition-all duration-500 text-center ${
                            isActive
                              ? "text-[#D4AF37] font-normal"
                              : "text-white/90 font-light hover:text-[#D4AF37]"
                          }`}
                        >
                          {link.label}
                        </a>
                      </Link>
                    );
                  })}

                  <div className="w-12 h-[1px] bg-[#D4AF37]/30 mt-4" />

                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      openModal();
                    }}
                    className="mt-4 px-12 py-8 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black tracking-[0.3em] uppercase [font-family:'Aboreto',Helvetica] text-sm transition-all duration-500 rounded-none"
                  >
                    BOOK A SESSION
                  </Button>

                  {/* Corner Brand Element */}
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
                    <span className="[font-family:'Aboreto',Helvetica] text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">
                      Positivibe Photography
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM NAVBAR — Appears when scrolling, fixed to screen bottom
          Compact, condensed, pill-shaped bar matching the reference
      ═══════════════════════════════════════════════════════════════ */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95vw] sm:w-auto ${
          scrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-1 sm:gap-3 bg-[#1a1a1a]/95 backdrop-blur-xl rounded-none px-2 sm:px-3 py-1.5 sm:py-2.5 shadow-2xl overflow-x-auto no-scrollbar flex-nowrap w-full mx-auto justify-start sm:justify-center">
          {/* Logo Initial */}
          <Link href="/">
            <a className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#111111] rounded-none text-white [font-family:'Aboreto',Helvetica] font-normal text-[14px] sm:text-[16px] tracking-wide hover:bg-[#252525] transition-colors duration-300 flex-shrink-0">
              P.
            </a>
          </Link>

          {/* Nav Links — Desktop */}
          <div className="hidden md:flex items-center gap-0.5 flex-nowrap">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.label} href={link.href}>
                  <a
                    className={`px-3 py-2.5 rounded-none text-[10px] [font-family:'Aboreto',Helvetica] uppercase tracking-[0.1em] whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? "text-white underline underline-offset-8"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              );
            })}
          </div>

          {/* Nav Links — Mobile (show only key links) */}
          <div className="flex md:hidden items-center gap-0 flex-nowrap">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.label} href={link.href}>
                  <a
                    className={`px-2 sm:px-3 py-3 rounded-none text-[8.5px] sm:text-[10px] [font-family:'Aboreto',Helvetica] uppercase tracking-[0.05em] sm:tracking-[0.1em] whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? "text-white underline underline-offset-8"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              );
            })}
          </div>

          {/* Book Now CTA */}
          <button
            onClick={openModal}
            className="flex items-center justify-center px-3 sm:px-5 py-2 sm:py-2.5 bg-[#D4AF37] hover:bg-[#b8952d] text-black rounded-none text-[8.5px] sm:text-[10px] [font-family:'Aboreto',Helvetica] font-bold tracking-[0.05em] sm:tracking-[0.1em] uppercase whitespace-nowrap transition-all duration-300 flex-shrink-0 shadow-sm ml-auto sm:ml-0"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};
