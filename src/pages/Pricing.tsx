import { SharedHero } from "@/components/SharedHero";
import { PricingTable } from "./pricing-sections/Table";
import { PricingFAQ } from "./pricing-sections/FAQ";
import { ContactMini } from "@/components/ContactMini";
import pricingHero from "@/assets/sharedHero/pricing.webp";

export const Pricing = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] w-full flex flex-col relative">
      <SharedHero
        title="Invest in your"
        subtitleThin="most precious"
        subtitleBold="memories"
        image={pricingHero}
      />
      <PricingTable />
      <PricingFAQ />
      <ContactMini />
    </div>
  );
};
