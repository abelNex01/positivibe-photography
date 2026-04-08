import { useState, useEffect, useMemo } from "react";
import {
  ArrowRightIcon,
  X,
  Check,
  ShoppingBag,
  Mail,
  ShoppingCart,
} from "lucide-react";
import { useReservation } from "@/context/ReservationContext";
import { useCart } from "@/context/CartContext";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const productsBase = [
  {
    category: "Heirloom Albums",
    title: "The Eternal Wedding Album",
    price: "From $850",
    description:
      "Handcrafted in Italy with premium Italian leather or natural linen. A timeless physical legacy of your love story.",
    details: [
      "Panoramic lay-flat binding with no middle seam",
      "E-Surface or Luster museum-grade photographic paper",
      "Available in 10x10, 12x12, and 15x10 sizes",
      "Includes a protective handcrafted keepsake box",
      "Custom embossing with your names and wedding date",
    ],
    purchaseMethod: "consultation",
    purchaseInstruction:
      "Each album is a bespoke piece of art. Purchase begins with a personal design consultation to select your images and cover materials.",
  },
  {
    category: "Gallery Framing",
    title: "Bespoke Editorial Frames",
    price: "From $350",
    description:
      "Museum-quality hand-carved frames in solid Oak, Walnut, or Black Metal. Designed to elevate your favorite wedding portrait.",
    details: [
      "Sustainably sourced solid hardwoods",
      "Acid-free archival grade matting (White or Cream)",
      "Gallery-grade UV protective glass to prevent fading",
      "Taped and sealed for archival longevity",
      "Expert installation hardware included",
    ],
    purchaseMethod: "inquiry",
    purchaseInstruction:
      "Contact us to finalize dimensions and select the perfect frame-less presentation for your chosen image.",
  },
  {
    category: "Digital Suites",
    title: "The 'Love Story' Preset Pack",
    price: "$95",
    description:
      "Our signature wedding color-grading suite. Achieve timeless skin tones and romantic lighting in a single click.",
    details: [
      "15 Premium Lightroom Presets (Desktop & Mobile)",
      "Optimized for wedding photography (Golden hour, Indoor, Cake cut)",
      "Protects skin-tone integrity across all lighting conditions",
      "Includes a 'Wedding Workflow' editing masterclass video",
      "Lifetime updates and customer support",
    ],
    purchaseMethod: "direct",
    purchaseInstruction:
      "This is a digital product. Once your inquiry is confirmed, you will receive a secure download link via email.",
  },
  {
    category: "Wall Art",
    title: "Luxe Acrylic Gallery Art",
    price: "From $550",
    description:
      "Modern, frameless acrylic prints with incredible depth and color brilliance. A contemporary statement for your home.",
    details: [
      "1/4 inch thick museum-grade acrylic",
      "Diamond-polished edges for a 3D glass effect",
      "Hidden French Cleat mounting for a 'floating' look",
      "Exceptional clarity and vibrant color saturation",
      "Custom sizing available up to 40x60 inches",
    ],
    purchaseMethod: "inquiry",
    purchaseInstruction:
      "Simply provide your Gallery ID in the inquiry notes to begin the selection process.",
  },
  {
    category: "Stationery",
    title: "The Signature Stationery Set",
    price: "From $250",
    description:
      "Custom-designed Thank You cards and Save-the-Dates featuring your favorite images on heavy eggshell paper.",
    details: [
      "Set of 50 custom-designed double-sided cards",
      "Premium 120lb eggshell texture paper",
      "Hand-addressed envelopes with wax seal options",
      "Bespoke typography matching your wedding aesthetic",
      "Eco-friendly recycled cotton materials",
    ],
    purchaseMethod: "direct",
    purchaseInstruction:
      "Specify your intended recipient and total amount in the secure checkout system notes.",
  },
  {
    category: "Decoration Services",
    title: "Wedding Aesthetic Styling",
    price: "From $1,200",
    description:
      "One-on-one styling consultation to ensure your wedding day decor matches our editorial photography aesthetic.",
    details: [
      "Full moodboard creation and color palette design",
      "Collaboration with florists and rentals for visual cohesion",
      "On-site styling for key portraits and table scapes",
      "Unlimited virtual consultations leading to the big day",
      "Travel included within a 50-mile radius of the studio",
    ],
    purchaseMethod: "consultation",
    purchaseInstruction:
      "Book an introductory call to see if our aesthetic styling aligns with your vision for the wedding day.",
  },
];

export const ShopCollections = (): JSX.Element => {
  const galleryImages = useMemo(
    () => {
      const modules = (import.meta as any).glob("../../assets/gallery/*.webp", { eager: true });
      return Object.values(modules).map((mod: any) => mod.default as string);
    },
    [],
  );

  const products = useMemo(() => {
    if (galleryImages.length === 0)
      return productsBase.map((p) => ({ ...p, image: "" }));

    // Create a stable random selection from gallery images
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
    return productsBase.map((product, index) => ({
      ...product,
      image: shuffled[index % shuffled.length],
    }));
  }, [galleryImages]);

  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const { openModal: openReservationModal } = useReservation();
  const { addToCart } = useCart();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  return (
    <section className="w-full bg-[#fcfcfc] py-24 md:py-32 flex flex-col items-center">
      <div className="max-w-[1440px] px-6 sm:px-10 lg:px-16 w-full flex flex-col items-center">
        <motion.div
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block">
            The Gallery Store
          </span>
          <h2 className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[32px] sm:text-[42px] md:text-[52px] leading-[1.2] tracking-wide uppercase">
            Preserve Your{" "}
            <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[48px] sm:text-[64px] md:text-[80px] leading-[0.7] italic lowercase mx-2 transform translate-y-2 inline-block">
              Legacy
            </span>
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[15px] mt-6 max-w-xl">
            Tangible memories crafted with the finest materials. Elevate your
            living space with museum-quality art dedicated to your love story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 w-full">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#f0f0f0] flex flex-col h-full"
              onClick={() => setSelectedProduct(product)}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f8f8f8]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 [font-family:'Inter',Helvetica] font-medium text-white text-[9px] tracking-[0.2em] uppercase shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Price Overlay */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#111111]/90 backdrop-blur-sm text-white px-3 py-1.5 [font-family:'Inter',Helvetica] font-medium text-[11px] tracking-wide shadow-sm">
                    {product.price}
                  </span>
                </div>

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                    <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[10px] tracking-widest uppercase">
                      Quick View
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-6 md:p-8 bg-white">
                <h3 className="[font-family:'Aboreto',Helvetica] text-[#111111] text-[20px] tracking-wide mb-3 uppercase">
                  {product.title}
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[13.5px] leading-relaxed mb-8 flex-1">
                  {product.description}
                </p>

                {/* Action Area */}
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#f5f5f5]">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="flex items-center gap-2 text-[#666666] hover:text-[#111111] transition-colors"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[10px] tracking-[0.15em] uppercase border-b border-transparent hover:border-[#111111] transition-all pb-0.5">
                      Details
                    </span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="w-10 h-10 rounded-full bg-[#fcfcfc] border border-[#eeeeee] flex items-center justify-center hover:bg-[#111111] hover:border-[#111111] transition-all duration-300 group/cart shadow-sm"
                  >
                    <ShoppingCart className="w-[14px] h-[14px] text-[#111111] group-hover/cart:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/85 animate-in fade-in duration-300"
            onClick={() => setSelectedProduct(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-[1000px] max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-500">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[1200] text-[#111111] hover:text-[#D4AF37] transition-colors bg-white/95 p-1 md:p-2"
            >
              <X size={24} strokeWidth={1} />
            </button>

            {/* Left side: Image */}
            <div className="w-full md:w-[45%] h-[300px] md:h-auto bg-[#f8f8f8] relative overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Right side: Content */}
            <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col">
              <div className="mb-8">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase mb-3 block">
                  {selectedProduct.category}
                </span>
                <h2 className="[font-family:'Aboreto',Helvetica] text-[#111111] text-[28px] sm:text-[34px] leading-tight tracking-wide uppercase mb-4">
                  {selectedProduct.title}
                </h2>
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#111111] text-[18px] tracking-wide">
                  {selectedProduct.price}
                </span>
              </div>

              <div className="mb-10">
                <h4 className="[font-family:'Inter',Helvetica] font-bold text-[#111111] text-[11px] tracking-[0.15em] uppercase mb-4 border-b border-[#f0f0f0] pb-2">
                  Product Details
                </h4>
                <ul className="space-y-3">
                  {selectedProduct.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <span className="[font-family:'Inter',Helvetica] font-light text-[#555555] text-[14px] leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto bg-gray-50 border border-gray-100 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="[font-family:'Inter',Helvetica] font-bold text-[#111111] text-[11px] tracking-[0.15em] uppercase">
                    Inquire for this piece
                  </h4>
                </div>
                <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[14px] leading-relaxed mb-6">
                  {selectedProduct.purchaseInstruction}
                </p>

                <div className="flex flex-col gap-4">
                  <Link href="/contact" className="w-full">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="w-full py-4 bg-[#111111] text-white hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3 [font-family:'Inter',Helvetica] font-medium text-[11px] tracking-[0.1em] uppercase shadow-lg"
                    >
                      <Mail className="w-4 h-4" />
                      General Contact
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-4 border border-[#111111]/20 hover:border-[#111111] text-[#111111] transition-all flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-[11px] tracking-[0.1em] uppercase"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
