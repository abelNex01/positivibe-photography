import React from "react";
import { Link } from "wouter";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Trash2, CheckCircle2, ShoppingBag, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = React.useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mb-8 animate-in zoom-in-50 duration-500" strokeWidth={1} />
        <h1 className="[font-family:'Aboreto',Helvetica] text-[32px] md:text-[42px] uppercase tracking-wide text-[#111111] mb-6">Order Confirmed</h1>
        <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] max-w-md mx-auto mb-10 leading-relaxed">
          Your legacy has begun. We have received your order and our studio team is now hand-crafting your custom pieces. Expect a confirmation email shortly.
        </p>
        <Link href="/shop">
          <button className="bg-[#111111] text-white px-10 py-4 [font-family:'Inter',Helvetica] text-[11px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all duration-300">
            Return to Gallery Store
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-40 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <motion.header 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block">
              Curated Selection
            </span>
            <h1 className="[font-family:'Aboreto',Helvetica] text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] uppercase tracking-wide text-[#111111]">
              Your <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[58px] md:text-[80px] lg:text-[100px] lowercase italic transform translate-y-3 inline-block mx-2">Collection</span>
            </h1>
          </div>
          <Link href="/shop">
            <a className="flex items-center gap-3 text-[#111111]/60 hover:text-[#D4AF37] transition-colors mb-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="[font-family:'Inter',Helvetica] text-[11px] uppercase tracking-[0.15em] font-medium">Continue Selecting</span>
            </a>
          </Link>
        </motion.header>

        {cart.length === 0 ? (
          <motion.div 
            className="text-center py-20 bg-white border border-[#f0f0f0]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ShoppingBag className="w-12 h-12 text-[#eeeeee] mx-auto mb-6" strokeWidth={1} />
            <p className="[font-family:'Inter',Helvetica] font-light text-[#999999] uppercase tracking-widest text-[12px] mb-8">Your cart is currently empty</p>
            <Link href="/shop">
              <button className="bg-[#111111] text-white px-8 py-3.5 [font-family:'Inter',Helvetica] text-[10px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all duration-300">
                Browse Collections
              </button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Cart List */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              {cart.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="flex gap-6 sm:gap-10 border-b border-[#f0f0f0] pb-10 group"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-32 sm:w-48 aspect-[4/5] overflow-hidden bg-[#f5f5f5] flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="flex flex-col flex-1 justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="[font-family:'Aboreto',Helvetica] text-[18px] sm:text-[22px] text-[#111111] uppercase tracking-wide mb-2">{item.title}</h3>
                        <p className="text-[#D4AF37] font-medium text-[13px] sm:text-[15px]">{item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-[#111111]/30 hover:text-red-800 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-6 mt-6">
                      <div className="flex items-center border border-[#f0f0f0] bg-white">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-[#fcfcfc] transition-colors text-[#111111]">-</button>
                        <span className="w-10 text-center text-[13px] font-medium [font-family:'Inter',Helvetica]">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-[#fcfcfc] transition-colors text-[#111111]">+</button>
                      </div>
                      <span className="[font-family:'Inter',Helvetica] text-[11px] text-[#999999] uppercase tracking-widest">Qty</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Checkout Form */}
            <motion.div 
              className="lg:col-span-5 bg-white border border-[#f0f0f0] p-8 md:p-12 shadow-sm sticky top-32"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="[font-family:'Aboreto',Helvetica] text-[20px] text-[#111111] uppercase tracking-widest mb-10 pb-4 border-b border-[#f0f0f0]">Investment Summary</h2>
              
              <div className="flex flex-col gap-4 mb-10">
                <div className="flex justify-between items-center text-[13px] text-[#666666]">
                  <span className="[font-family:'Inter',Helvetica] uppercase tracking-widest">Subtotal</span>
                  <span className="font-medium text-[#111111]">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-[13px] text-[#666666]">
                  <span className="[font-family:'Inter',Helvetica] uppercase tracking-widest">Shipping</span>
                  <span className="font-medium text-[#111111]">Complimentary</span>
                </div>
                <div className="mt-4 pt-6 border-t border-[#f0f0f0] flex justify-between items-center">
                  <span className="[font-family:'Aboreto',Helvetica] text-[14px] uppercase tracking-[0.2em] text-[#111111]">Total</span>
                  <span className="text-[24px] font-medium text-[#111111]">${cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <form onSubmit={handleOrder} className="flex flex-col gap-6">
                <div className="space-y-4">
                   <h3 className="[font-family:'Inter',Helvetica] text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4AF37] mb-6">Delivery Details</h3>
                   <input required type="text" placeholder="Full Name *" className="w-full bg-transparent border-b border-[#dddddd] pb-3 text-[#111111] placeholder:text-[#999999] [font-family:'Inter',Helvetica] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none" />
                   <input required type="email" placeholder="Email Address *" className="w-full bg-transparent border-b border-[#dddddd] pb-3 text-[#111111] placeholder:text-[#999999] [font-family:'Inter',Helvetica] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none" />
                   <input required type="text" placeholder="Shipping Address *" className="w-full bg-transparent border-b border-[#dddddd] pb-3 text-[#111111] placeholder:text-[#999999] [font-family:'Inter',Helvetica] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none" />
                </div>

                <div className="mt-6 flex items-center gap-3 text-[#999999]">
                   <CreditCard className="w-4 h-4" />
                   <span className="[font-family:'Inter',Helvetica] text-[10px] uppercase tracking-widest">Invoiced via Secure Portal</span>
                </div>

                <button type="submit" className="mt-10 w-full py-5 bg-[#111111] text-white hover:bg-[#D4AF37] transition-all [font-family:'Inter',Helvetica] font-medium text-[11px] tracking-[0.2em] uppercase shadow-xl">
                  Finalize Collection
                </button>
                <p className="text-center mt-6 text-[10px] text-[#999999] [font-family:'Inter',Helvetica] uppercase tracking-widest leading-relaxed">
                  Upon clicking, our studio will review your selection and send an official invoice within 12 hours.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
