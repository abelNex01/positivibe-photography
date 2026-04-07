import { ContactPhilosophy } from "./contact-sections/Philosophy";
import { useReservation } from "@/context/ReservationContext";
import { Mail, MapPin, Phone, Clock, Send, ArrowRight } from "lucide-react";
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

export const Contact = (): JSX.Element => {
  const { openModal } = useReservation();

  return (
    <div className="bg-[#fcfcfc] w-full min-h-screen flex flex-col">
      {/* Hero Section - Matching Services Philosophy Style */}
      <ContactPhilosophy />

      {/* Full Inquiry Form */}
      <section className="w-full bg-[#111111] py-24 md:py-32">
        <div className="max-w-[900px] mx-auto px-6">
          {/* Form Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block"
            >
              Inquiry Form
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:'Aboreto',Helvetica] font-normal text-white text-[32px] sm:text-[42px] md:text-[56px] leading-[1.1] tracking-wide uppercase"
            >
              Tell us your{" "}
              <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[48px] sm:text-[60px] md:text-[80px] leading-[0.7] italic lowercase mx-1 transform translate-y-2 inline-block">
                story
              </span>
            </motion.h2>
          </div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-white/15 pb-4 text-white text-sm [font-family:'Inter',Helvetica] font-light placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/15 pb-4 text-white text-sm [font-family:'Inter',Helvetica] font-light placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <select
                className="w-full bg-transparent border-b border-white/15 pb-4 text-white/30 text-sm [font-family:'Inter',Helvetica] font-light focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none appearance-none cursor-pointer [&:valid]:text-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Photography Type
                </option>
                <option value="wedding" className="text-black">
                  Wedding & Elopement
                </option>
                <option value="portrait" className="text-black">
                  Portrait Session
                </option>
                <option value="event" className="text-black">
                  Special Event
                </option>
                <option value="other" className="text-black">
                  Other
                </option>
              </select>
              <select
                className="w-full bg-transparent border-b border-white/15 pb-4 text-white/30 text-sm [font-family:'Inter',Helvetica] font-light focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none appearance-none cursor-pointer [&:valid]:text-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Investment Range
                </option>
                <option value="1k-3k" className="text-black">
                  $1,000 – $3,000
                </option>
                <option value="3k-5k" className="text-black">
                  $3,000 – $5,000
                </option>
                <option value="5k+" className="text-black">
                  $5,000+
                </option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Event Date"
                className="w-full bg-transparent border-b border-white/15 pb-4 text-white text-sm [font-family:'Inter',Helvetica] font-light placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
              />
              <select
                className="w-full bg-transparent border-b border-white/15 pb-4 text-white/30 text-sm [font-family:'Inter',Helvetica] font-light focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none appearance-none cursor-pointer [&:valid]:text-white"
                defaultValue=""
              >
                <option value="" disabled>
                  How did you find us?
                </option>
                <option value="social" className="text-black">
                  Social Media
                </option>
                <option value="referral" className="text-black">
                  Friend / Referral
                </option>
                <option value="search" className="text-black">
                  Google Search
                </option>
                <option value="other" className="text-black">
                  Other
                </option>
              </select>
            </div>

            <textarea
              rows={4}
              placeholder="Tell us about your vision, the moments you want captured, and any special requests..."
              className="w-full bg-transparent border-b border-white/15 pb-4 pt-2 text-white text-sm [font-family:'Inter',Helvetica] font-light placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none resize-none"
            />

            {/* Consent & Submit */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mt-4 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-4 max-w-sm">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="w-4 h-4 mt-0.5 border border-white/30 flex-shrink-0 group-hover:border-[#D4AF37] transition-colors" />
                  <span className="[font-family:'Inter',Helvetica] font-light text-white text-[11px] leading-[1.5] group-hover:text-white/60 transition-colors">
                    I consent to the processing of my personal data in
                    accordance with the privacy policy.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="w-4 h-4 mt-0.5 border border-white flex-shrink-0 group-hover:border-[#D4AF37] transition-colors" />
                  <span className="[font-family:'Inter',Helvetica] font-light text-white text-[11px] leading-[1.5] group-hover:text-white/60 transition-colors">
                    Subscribe to our newsletter for exclusive behind-the-scenes
                    updates.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="flex items-center gap-3 bg-white text-[#111111] px-10 py-4 hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span className="[font-family:'Inter',Helvetica] font-medium text-[12px] tracking-[0.15em] uppercase">
                  Send Inquiry
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Map / Location Teaser */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block"
          >
            Based In
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] tracking-wide uppercase"
          >
            Toronto,{" "}
            <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[48px] sm:text-[60px] md:text-[76px] leading-[0.7] italic lowercase mx-1 transform translate-y-2 inline-block">
              Canada
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 [font-family:'Inter',Helvetica] font-light text-[#666666] text-[15px] sm:text-[16px] leading-relaxed max-w-[600px]"
          >
            Available for destination weddings and editorial sessions worldwide.
            We travel to you — because your story deserves to be told wherever
            it unfolds.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-3 border-b border-[#111111] pb-1 cursor-pointer group"
            onClick={openModal}
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#111111] text-[12px] tracking-[0.1em] uppercase">
              Inquire About Availability
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#111111] transform transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>
      </section>

      {/* Editorial Intro */}
      <section className="w-full bg-white py-24 md:py-32">
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
              viewport={{ once: true, margin: "-50px" }}
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
