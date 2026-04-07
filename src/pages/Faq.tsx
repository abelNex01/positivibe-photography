import { SharedHero } from "@/components/SharedHero";
import { FaqTitle } from "./faq-sections/Title";
import { FaqList } from "./faq-sections/List";
import { ContactMini } from "@/components/ContactMini";

export const Faq = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <SharedHero
        title="Everything you need"
        subtitleThin="to"
        subtitleBold="know"
        image="/src/assets/sharedHero/faq.webp"
      />
      <FaqTitle />
      <FaqList />
      <ContactMini />
    </div>
  );
};
