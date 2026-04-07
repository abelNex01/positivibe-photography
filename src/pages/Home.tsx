import { HomeBrandDivider } from "./home-sections/BrandDivider";
import { HomeGallery } from "./home-sections/Gallery";
import { HomeHero } from "./home-sections/Hero";
import { HomeVideoTestimonial } from "./home-sections/VideoTestimonial";
import { HomeIntro } from "./home-sections/Intro";
import { HomePromos } from "./home-sections/Promos";
import { HomeFeaturedMoment } from "./home-sections/FeaturedMoment";
import { FaqSupport } from "./faq-sections/Support";
import { ContactMini } from "../components/ContactMini";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] w-full relative flex flex-col overflow-x-hidden">
      <HomeHero />
      <HomeVideoTestimonial />
      <HomeIntro />
      <FaqSupport />
      <HomeFeaturedMoment />
      <HomeGallery />
      <HomeBrandDivider />
      <HomePromos />
      <ContactMini />
    </div>
  );
};
