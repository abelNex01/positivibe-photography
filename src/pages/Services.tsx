import { Philosophy } from "./services-sections/Philosophy";
import { SignatureCollections } from "./services-sections/SignatureCollections";
import { TheProcess } from "./services-sections/TheProcess";
import { Partnership } from "./services-sections/Partnership";
import { FeaturedEditorials } from "./services-sections/FeaturedEditorials";

export const Services = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <Philosophy />
      <SignatureCollections />
      <TheProcess />
      <Partnership />
      <FeaturedEditorials />
    </div>
  );
};
