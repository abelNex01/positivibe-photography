import { SharedHero } from "@/components/SharedHero";
import { FaqTitle } from "./faq-sections/Title";
import { FaqList } from "./faq-sections/List";
import { ContactMini } from "@/components/ContactMini";
import faqHero from "@/assets/sharedHero/faq.webp";

export const Faq = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <SharedHero
        title="Everything you need"
        subtitleThin="to"
        subtitleBold="know"
        image={faqHero}
      />
      <FaqTitle />
      <FaqList />
      <ContactMini />
    </div>
  );
};
