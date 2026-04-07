import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const CookiePolicy = (): JSX.Element => {
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
          Cookie Policy
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
              I. THE CONCEPT OF COOKIES
            </h2>
            <div className="[font-family:'Inter',Helvetica] font-light text-black/70 text-base leading-relaxed space-y-4">
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
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
              II. USAGE AND CLASSIFICATION
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-light text-black/70 text-base leading-relaxed mb-6">
              Positivibe Photography uses cookies for the following purposes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-black/5 bg-gray-50/50">
                <h3 className="[font-family:'Aboreto',Helvetica] text-lg font-normal text-black mb-4 uppercase tracking-wider">
                  Necessary Cookies
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-black/60 text-sm leading-relaxed">
                  These are essential for the operation of our website, including features such as secure logins and booking forms.
                </p>
              </div>
              <div className="p-8 border border-black/5 bg-gray-50/50">
                <h3 className="[font-family:'Aboreto',Helvetica] text-lg font-normal text-black mb-4 uppercase tracking-wider">
                  Analytical Cookies
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-black/60 text-sm leading-relaxed">
                  They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.
                </p>
              </div>
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
              III. THIRD PARTIES AND ADVERTISING
            </h2>
            <div className="[font-family:'Inter',Helvetica] font-light text-black/70 text-base leading-relaxed space-y-4">
              <p>
                We may also use third-party tools such as Google Analytics to help us analyze site traffic. These third parties may set their own cookies when you visit our site.
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
              IV. MANAGEMENT AND CONTROL
            </h2>
            <div className="[font-family:'Inter',Helvetica] font-light text-black/70 text-base leading-relaxed space-y-4">
              <p>
                You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies), you may not be able to access all or parts of our site.
              </p>
            </div>
          </motion.section>

          <motion.section 
            className="bg-black p-10 md:p-14 text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="[font-family:'Aboreto',Helvetica] text-xl font-normal text-white mb-6 uppercase tracking-[0.2em]">
              V. FURTHER INFORMATION
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-light text-white/60 text-base leading-relaxed">
              If you have any questions about our use of cookies, please contact <span className="text-white font-medium">hello@positivibe.com</span>.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};
