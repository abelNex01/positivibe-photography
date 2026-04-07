import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const TheProcess = (): JSX.Element => {
  const steps = [
    {
      num: "01",
      title: "The Inquiry",
      desc: "Begin your journey by submitting an inquiry for your date and vision. We review every request to ensure our editorial approach aligns with your expectations, responding within 48 hours to secure availability.",
    },
    {
      num: "02",
      title: "The Vision",
      desc: "A personalized consultation where we delve into the blueprint of your event or session. We discuss styling, lighting, mood boards, and the specific narrative you wish to tell through our lens.",
    },
    {
      num: "03",
      title: "The Execution",
      desc: "The day of the shoot. We orchestrate a seamless, unobtrusive experience, giving gentle guidance where needed while allowing the raw, authentic moments to unfold naturally.",
    },
    {
      num: "04",
      title: "The Archive",
      desc: "Meticulous post-production. Every image is color-graded and curated to match our signature cinematic aesthetic. The final collection is delivered in an heirlooom digital gallery and bespoke print box.",
    },
  ];

  return (
    <section className="w-full bg-[#111] py-24 md:py-32 px-6 lg:px-12 flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-16 lg:gap-24">
        {/* Left Col - Sticky Title */}
        <div className="w-full md:w-1/3 flex flex-col items-start relative">
          <div className="sticky top-32 flex flex-col gap-6">
            <motion.span
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] md:text-[12px] tracking-[0.4em] uppercase"
            >
              Our Methodology
            </motion.span>
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="font-aboreto font-normal text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-wide uppercase"
            >
              The{" "}
              <span className="font-bastliga text-[#D4AF37] text-[60px] md:text-[80px] leading-[0.7] transform translate-y-3 inline-block normal-case">
                Process
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-[1px] bg-[#D4AF37]/50 mt-4 origin-left"
            />
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:'Inter',Helvetica] font-extralight text-white text-base md:text-[17px] leading-relaxed mt-4 max-w-[300px]"
            >
              A refined, four-step approach ensuring every commission is handled
              with the utmost precision, from the first hello to the final
              heirloom delivery.
            </motion.p>
          </div>
        </div>

        {/* Right Col - Steps */}
        <div className="w-full md:w-2/3 flex flex-col gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-12 pb-12 border-b border-white/10 last:border-0 animate-in fade-in slide-in-from-right-[50px] duration-1000"
              style={{ animationFillMode: 'both', animationDelay: `${index * 150}ms` }}
            >
              <div className="font-aboreto text-[#D4AF37] text-4xl md:text-5xl leading-none opacity-80">
                {step.num}
              </div>
              <div className="flex flex-col gap-4 pt-1">
                <h3 className="font-aboreto text-white text-2xl md:text-3xl uppercase tracking-widest">
                  {step.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-white text-base md:text-[14px] leading-relaxed max-w-[500px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
