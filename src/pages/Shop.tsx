import { SharedHero } from "@/components/SharedHero";
import { ShopCollections } from "./shop-sections/Collections";
import { ShopCreativeExperience } from "./shop-sections/ShopCreativeExperience";
import shopHero from "@/assets/gallery/48.webp";

export const Shop = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] w-full flex flex-col items-center">
      <SharedHero
        title="Curated Artwork &"
        subtitleThin="fine art"
        subtitleBold="heirlooms"
        image={shopHero}
      />
      <ShopCollections />
      <ShopCreativeExperience />
    </div>
  );
};
