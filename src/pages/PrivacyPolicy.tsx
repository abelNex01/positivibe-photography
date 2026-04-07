import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const PrivacyPolicy = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative pb-24 pt-32 md:pt-48">
      <motion.div 
        className="max-w-4xl mx-auto px-6 sm:px-10 mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="[font-family:'Aboreto',Helvetica] text-4xl md:text-5xl lg:text-6xl font-normal text-black uppercase tracking-widest leading-tight text-center">
          Privacy Policy
        </h1>
        <div className="w-24 h-px bg-black/20 mx-auto mt-8"></div>
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-6 sm:px-10 mt-16 md:mt-24">
        <div className="flex flex-col gap-12">
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="[font-family:'Aboreto',Helvetica] text-2xl md:text-3xl font-normal text-black mb-6 uppercase tracking-widest leading-tight">
              I. INFORMATION STORAGE AND ACCESS
            </h2>
            <div className="[font-family:'Inter',Helvetica] font-light text-black/70 text-base leading-relaxed space-y-4">
              <p>
                Positivibe Photography is committed to maintaining the highest level of confidentiality and security regarding your personal information. We store client data solely for the purpose of fulfilling photographic services and maintaining professional communication.
              </p>
              <p>
                Access to personal information is strictly limited to authorized personnel who require it for operational purposes, such as preparing contracts, arranging shoot locations, and delivering digital image galleries.
              </p>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="[font-family:'Aboreto',Helvetica] text-2xl md:text-3xl font-normal text-black mb-6 uppercase tracking-widest leading-tight">
              II. PERSONAL INFORMATION COLLECTION
            </h2>
            <div className="[font-family:'Inter',Helvetica] font-light text-black/70 text-base leading-relaxed space-y-4">
              <p>
                When you book a session or interact with our site, we may collect the following information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name, contact email, and phone number</li>
                <li>Wedding or event date and location</li>
                <li>Billing and mailing addresses</li>
                <li>Specific preferences regarding photographic style or deliverables</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="[font-family:'Aboreto',Helvetica] text-2xl md:text-3xl font-normal text-black mb-6 uppercase tracking-widest leading-tight">
              III. DATA RETENTION
            </h2>
            <div className="[font-family:'Inter',Helvetica] font-light text-black/70 text-base leading-relaxed space-y-4">
              <p>
                We retain client images in our archives for a minimum period of one year post-delivery. Personal contact information remains on file for internal administrative and historical portfolio documentation unless a deletion request is formally submitted.
              </p>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="[font-family:'Aboreto',Helvetica] text-2xl md:text-3xl font-normal text-black mb-6 uppercase tracking-widest leading-tight">
              IV. YOUR RIGHTS
            </h2>
            <div className="[font-family:'Inter',Helvetica] font-light text-black/70 text-base leading-relaxed space-y-4">
              <p>
                You have the right to request a copy of the information we hold about you, to correct any errors, or to request the deletion of your data from our systems (where legally permissible).
              </p>
              <p>
                For any inquiries regarding your privacy, please contact <span className="text-black font-medium">privacy@positivibe.com</span>.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};
