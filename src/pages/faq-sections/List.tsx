import { useState } from "react";
import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import gallery18 from "../../assets/gallery/18.webp";
import gallery43 from "../../assets/gallery/43.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const faqCategories = [
  {
    category: "Booking & Process",
    items: [
      {
        question: "How do I book a session with Positivibe?",
        answer: "Simply click 'Book a Session' anywhere on our site to submit an inquiry. We'll respond within 24–48 hours with availability, pricing details, and next steps tailored to your vision."
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 3–6 months in advance for weddings and 4–6 weeks for portrait sessions. Our calendar fills quickly, especially during peak wedding season (May–October)."
      },
      {
        question: "What happens after I book?",
        answer: "You'll receive a welcome guide with preparation tips, a style consultation questionnaire, and a timeline planning document. We schedule a virtual or in-person consultation to discuss your vision in detail."
      },
    ],
  },
  {
    category: "Investment & Packages",
    items: [
      {
        question: "What is the investment range for wedding photography?",
        answer: "Our wedding collections start at $2,800 and range up to $8,500+ depending on coverage hours, second photographers, albums, and fine art prints. Every package is customizable to your needs."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Absolutely. We offer flexible payment plans to make your investment manageable. A 30% retainer secures your date, with the remaining balance split into comfortable installments."
      },
      {
        question: "Is there a one-time session fee?",
        answer: "Portrait sessions start at $450 and include a pre-session consultation, 1–2 hours of shooting, and a curated online gallery. Fine art prints and albums are available as add-ons."
      },
    ],
  },
  {
    category: "Deliverables & Experience",
    items: [
      {
        question: "How many edited photos will I receive?",
        answer: "Depending on your package, you'll receive between 300–800+ individually hand-edited images. Each photo is carefully color-graded to match our signature editorial aesthetic."
      },
      {
        question: "When will I receive my photos?",
        answer: "Sneak peeks are delivered within 48 hours. Full galleries are delivered in 4–6 weeks for weddings and 2–3 weeks for portrait sessions, through your private online gallery."
      },
      {
        question: "Do you offer fine art prints and albums?",
        answer: "Yes! We partner with the finest print labs to offer museum-quality fine art prints, handcrafted linen albums, and heirloom keepsake boxes — all designed to last generations."
      },
    ],
  },
  {
    category: "Policy & Terms",
    items: [
      {
        question: "What is your cancellation & refund policy?",
        answer: "Cancellations made 60+ days before the event receive a full refund minus the retainer. Within 60 days, the retainer is non-refundable but can be applied toward a rescheduled date within 12 months."
      },
      {
        question: "Do you travel for destination weddings?",
        answer: "Absolutely — we love destination work! Travel fees apply and vary based on location. We've captured stories across North America, Europe, and the Caribbean."
      },
    ],
  },
];

export const FaqList = (): JSX.Element => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:py-32 bg-white flex flex-col items-center">
      <div className="max-w-[1440px] px-6 sm:px-10 lg:px-16 w-full flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Sidebar: Contact Inquiry */}
        <aside className="hidden lg:flex flex-col w-[300px] shrink-0">
          <div className="sticky top-32 flex flex-col items-start text-left">
            <div className="w-full aspect-[3/4] bg-[#f8f8f8] mb-10 overflow-hidden shadow-sm">
              <img 
                src={gallery18} 
                alt="Connect with us" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </div>
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-4">
              Need Clarity?
            </span>
            <h4 className="[font-family:'Aboreto',Helvetica] text-[#111111] text-[22px] leading-tight uppercase mb-6">
              Still Have <br /> Questions?
            </h4>
            <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[14px] leading-relaxed mb-8">
              Every love story is unique. We are here to provide tailored answers for your specific vision and logistical needs.
            </p>
            <Link href="/contact" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-300">
                <Mail className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
              </div>
              <span className="[font-family:'Inter',Helvetica] font-bold text-[10px] tracking-widest uppercase text-[#111111] border-b border-transparent group-hover:border-[#111111] transition-all pb-0.5">
                Get in Touch
              </span>
            </Link>
          </div>
        </aside>

        {/* Center: The Faq List */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-[800px]">
            {faqCategories.map((category, catIndex) => (
              <motion.div 
                key={catIndex} 
                className="mb-16 md:mb-24 last:mb-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Category Header */}
                <div className="mb-10 flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase">
                      Category
                    </span>
                    <div className="w-8 h-px bg-[#D4AF37]/30" />
                    <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[24px] lowercase transform translate-y-1">
                      {catIndex + 1}
                    </span>
                  </div>
                  <h3 className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[24px] sm:text-[32px] tracking-wide uppercase">
                    {category.category}
                  </h3>
                </div>

                {/* Questions */}
                <div className="flex flex-col">
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${catIndex}-${itemIndex}`;
                    const isOpen = openItem === itemId;

                    return (
                      <div
                        key={itemId}
                        className="border-b border-[#f0f0f0] last:border-b-0"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between py-7 text-left group"
                        >
                          <span className={`[font-family:'Inter',Helvetica] font-normal text-[15px] sm:text-[17px] leading-relaxed pr-8 transition-colors duration-200 ${isOpen ? 'text-[#111111]' : 'text-[#444444] group-hover:text-[#111111]'}`}>
                            {item.question}
                          </span>
                          <div className={`w-8 h-8 rounded-full border ${isOpen ? 'border-[#111111] bg-[#111111]' : 'border-[#eeeeee] group-hover:border-[#111111]'} flex items-center justify-center transition-all duration-300`}>
                            <ChevronDown 
                              className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-[#D4AF37]'}`} 
                              strokeWidth={2}
                            />
                          </div>
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 pb-10' : 'max-h-0 opacity-0'}`}
                        >
                          <div className="pl-0 md:pl-4 border-l-2 border-[#D4AF37]/20 ml-2">
                            <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[14px] sm:text-[15px] leading-[1.8]">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Philosophy & Brand */}
        <aside className="hidden lg:flex flex-col w-[300px] shrink-0">
          <div className="sticky top-32 flex flex-col items-end text-right">
             <div className="w-full aspect-[4/5] bg-[#f8f8f8] mb-10 overflow-hidden shadow-sm relative">
                <img 
                  src={gallery43} 
                  alt="Our Philosophy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-multiply" />
             </div>
             <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-4">
               The Vision
             </span>
             <h4 className="[font-family:'Aboreto',Helvetica] text-[#111111] text-[22px] leading-tight uppercase mb-6">
                Light, Life <br /> & Legacy
             </h4>
             <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[14px] leading-relaxed mb-6 italic">
               "We don't just capture how you look, we preserve the soul of how your day felt."
             </p>
             <div className="w-12 h-px bg-[#D4AF37] mb-8" />
             <div className="flex flex-col gap-4 items-end">
                <p className="[font-family:'Inter',Helvetica] text-[11px] uppercase tracking-widest text-[#999999]">
                   Est. 2024
                </p>
                <div className="flex items-center gap-2 text-[#D4AF37]">
                   <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                   <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                   <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                </div>
             </div>
          </div>
        </aside>

      </div>
    </section>
  );
};
