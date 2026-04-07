import { SharedHero } from "@/components/SharedHero";
import { PricingTable } from "./pricing-sections/Table";
import { PricingFAQ } from "./pricing-sections/FAQ";
import { ContactMini } from "@/components/ContactMini";

export const Pricing = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] w-full flex flex-col relative">
      <SharedHero
        title="Invest in your"
        subtitleThin="most precious"
        subtitleBold="memories"
        image="/src/assets/sharedHero/pricing.webp"
      />
      <PricingTable />
      <PricingFAQ />
      <ContactMini />
    </div>
  );
};
