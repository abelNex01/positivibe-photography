import { Mail, MapPin, Phone, Clock, Send, ArrowRight } from "lucide-react";
import { useReservation } from "@/context/ReservationContext";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const ContactMini = (): JSX.Element => {
  const { openModal } = useReservation();
  return (
    <div className="bg-[#fcfcfc] w-full flex flex-col">
      {/* Editorial Intro */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: Typography */}
          <div className="flex-1 flex flex-col items-start">
            <motion.span
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-5 block"
            >
              Let's Connect
            </motion.span>
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[40px] sm:text-[54px] md:text-[72px] leading-[1.1] tracking-wide uppercase"
            >
              Get In{" "}
              <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[58px] sm:text-[78px] md:text-[100px] leading-[0.7] italic lowercase mx-1 transform translate-y-3 inline-block">
                Touch
              </span>
            </motion.h2>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 [font-family:'Inter',Helvetica] font-light text-[#666666] text-[15px] sm:text-[16px] leading-relaxed max-w-[440px]"
            >
              We'd love to hear about your vision. Whether it's a wedding, an
              intimate portrait session, or a special event — reach out and
              let's craft something extraordinary together.
            </motion.p>

            {/* Quick Action Button */}
            <motion.button
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              onClick={openModal}
              className="mt-10 flex items-center gap-3 bg-[#111111] text-white px-8 py-4 hover:bg-[#D4AF37] transition-colors duration-300"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-[12px] tracking-[0.15em] uppercase">
                Book a Session
              </span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Right: Contact Details Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "hello@positivibes.com",
                sub: "We reply within 24 hours",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+1 (647) 555-0123",
                sub: "Mon – Sat, 9am – 6pm",
              },
              {
                icon: MapPin,
                label: "Studio",
                value: "Toronto, Ontario",
                sub: "By appointment only",
              },
              {
                icon: Clock,
                label: "Availability",
                value: "Currently Booking",
                sub: "Fall & Winter 2026",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-[#f0f0f0] bg-[#fcfcfc] p-6 hover:border-[#D4AF37]/30 hover:bg-white transition-all duration-300"
              >
                <item.icon
                  className="w-5 h-5 text-[#D4AF37] mb-4"
                  strokeWidth={1.5}
                />
                <span className="block [font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </span>
                <p className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[16px] tracking-wide uppercase leading-tight">
                  {item.value}
                </p>
                <p className="mt-2 [font-family:'Inter',Helvetica] font-light text-[#999999] text-[12px] tracking-wide">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
