import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const FooterLinks = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[#1a1a1a] text-white w-full">
      {/* Main Footer Content */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-32"
          >
            {/* LEFT: Headline + Newsletter */}
            <motion.div
              variants={fadeUp}
              className="lg:max-w-[340px] flex-shrink-0"
            >
              <h3 className="[font-family:'Aboreto',Helvetica] font-normal text-white text-[32px] sm:text-[38px] md:text-[42px] leading-[1.15] tracking-tight mb-6 uppercase">
                The Positivibe
                <br />
                Perspective
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-light text-white/50 text-[14px] leading-relaxed mb-8">
                Subscribe for exclusive collection drops and cinematic
                storytelling insights.
              </p>

              {/* Email Input - Sharper Edges for Luxury Look */}
              <div className="flex items-center border border-white/20 rounded-none px-3 sm:px-5 py-2 sm:py-3 w-full max-w-full sm:max-w-[320px] hover:border-white/40 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 min-w-0 bg-transparent text-white text-[11px] sm:text-[13px] [font-family:'Inter',Helvetica] font-light placeholder:text-white/30 focus:outline-none uppercase tracking-widest"
                />
                <button className="w-10 h-10 rounded-none border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 ml-3 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* RIGHT: 4-Column Link Grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
              {/* Column 1: Discover */}
              <motion.div variants={fadeUp} className="flex flex-col">
                <h5 className="[font-family:'Inter',Helvetica] font-normal text-white/90 text-[13px] tracking-normal mb-5">
                  Discover
                </h5>
                <ul className="flex flex-col gap-3">
                  {[
                    { label: "Shop", href: "/shop" },
                    { label: "Services", href: "/services" },
                    { label: "FAQ", href: "/faq" },
                    { label: "Contact", href: "/contact" },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="[font-family:'Inter',Helvetica] font-light text-white/40 text-[13px] hover:text-white/70 transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 2: Contact (addresses) */}
              <motion.div variants={fadeUp} className="flex flex-col">
                <h5 className="[font-family:'Inter',Helvetica] font-normal text-white/90 text-[13px] tracking-normal mb-5">
                  Contact
                </h5>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="[font-family:'Inter',Helvetica] font-medium text-white/70 text-[13px] mb-1">
                      Positivibe Office
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-light text-white/40 text-[13px] leading-[1.7]">
                      123 Queen Street West, Suite 400,
                      <br />
                    </p>
                  </div>
                  <div>
                    <p className="[font-family:'Inter',Helvetica] font-medium text-white/70 text-[13px] mb-1">
                      Positivibe Studio
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-light text-white/40 text-[13px] leading-[1.7]">
                      45 Spadina Avenue,
                      <br />
                      Level 2, Toronto, ON
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Column 3: Social Media */}
              <motion.div variants={fadeUp} className="flex flex-col">
                <h5 className="[font-family:'Inter',Helvetica] font-normal text-white/90 text-[13px] tracking-normal mb-5">
                  Social Media
                </h5>
                <ul className="flex flex-col gap-3">
                  {["Instagram", "Facebook", "TikTok", "Youtube"].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="[font-family:'Inter',Helvetica] font-light text-white/40 text-[13px] hover:text-white/70 transition-colors duration-300"
                        >
                          {item}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </motion.div>

              {/* Column 4: Help & Support */}
              <motion.div variants={fadeUp} className="flex flex-col">
                <h5 className="[font-family:'Inter',Helvetica] font-normal text-white/90 text-[13px] tracking-normal mb-5">
                  Help & Support
                </h5>
                <ul className="flex flex-col gap-3">
                  {[
                    { label: "FAQ", href: "/faq" },
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Client Agreement", href: "/agreement" },
                    { label: "Cookie Policy", href: "/cookie-policy" },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="[font-family:'Inter',Helvetica] font-light text-white/40 text-[13px] hover:text-white/70 transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MASSIVE Brand Name - Full Width */}
      <section className="w-full bg-[#1a1a1a] overflow-hidden pb-12 pt-4">
        <div className="w-full flex flex-col items-center">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-normal leading-[0.85] tracking-tight select-none uppercase w-full text-center"
            style={{
              fontFamily: "'Aboreto', Helvetica, sans-serif",
              fontSize: "18.5vw",
            }}
          >
            Positivibe
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "linear" }}
            className="text-white/40 font-normal tracking-[0.5em] md:tracking-[1.5em] uppercase text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] mt-2 md:translate-x-[0.75em]"
            style={{ fontFamily: "'Aboreto', Helvetica, sans-serif" }}
          >
            Photography
          </motion.span>
        </div>
      </section>

      {/* Bottom Copyright Bar */}
      <section className="w-full bg-[#1a1a1a] py-6 border-t border-white/5">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <p className="[font-family:'Inter',Helvetica] text-white/30 text-[11px] tracking-[0.05em]">
              © 2026 Positivibe Photography. All rights reserved.
            </p>
            <p className="[font-family:'Inter',Helvetica] text-white/30 text-[11px] tracking-[0.05em]">
              Designed by Abel Assefa.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
