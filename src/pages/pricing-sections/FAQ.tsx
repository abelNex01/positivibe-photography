import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const faqs = [
  {
    question: "Do you travel for destination weddings?",
    answer: "Absolutely! We love traveling and have captured stories across the globe. Custom travel quotes are provided for all destination events, covering simply the cost of flights and accommodation."
  },
  {
    question: "How long does it take to receive our gallery?",
    answer: "For full wedding days, you can expect an initial sneak peek within 48 hours. The complete, fully-edited high-resolution gallery is delivered within 6 to 8 weeks."
  },
  {
    question: "How many images will we receive?",
    answer: "We focus on quality over quantity, but on average, we deliver between 75 to 100 beautifully edited images per hour of coverage."
  },
  {
    question: "Can we customize a package?",
    answer: "Yes, every love story is unique. We are happy to create a bespoke collection tailored to your specific timeline and event needs."
  }
];

export const PricingFAQ = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-[#ffffff] flex flex-col items-center border-t border-[#f0f0f0]">
      <div className="w-full max-w-[800px] px-6 sm:px-10 flex flex-col">
        <div className="text-center mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase mb-4 block"
          >
            The Details
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[32px] sm:text-[42px] leading-[1.2] tracking-wide uppercase"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#eaeaea] py-2">
                <AccordionTrigger className="hover:no-underline [font-family:'Inter',Helvetica] font-medium text-[#111111] text-[15px] md:text-[16px] text-left leading-relaxed py-6 data-[state=open]:text-[#D4AF37] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="[font-family:'Inter',Helvetica] font-light text-[#555555] text-[14px] md:text-[15px] leading-[1.8] pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
