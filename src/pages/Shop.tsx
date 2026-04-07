import { SharedHero } from "@/components/SharedHero";
import { ShopCollections } from "./shop-sections/Collections";
import { ShopCreativeExperience } from "./shop-sections/ShopCreativeExperience";

export const Shop = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] w-full flex flex-col items-center">
      <SharedHero
        title="Curated Artwork &"
        subtitleThin="fine art"
        subtitleBold="heirlooms"
        image="/src/assets/sharedHero/shop.webp"
      />
      <ShopCollections />
      <ShopCreativeExperience />
    </div>
  );
};
