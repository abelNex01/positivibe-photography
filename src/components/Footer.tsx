import { useLocation } from "wouter";
import { FooterCTA } from "./footer-sections/FooterCTA";
import { FooterLinks } from "./footer-sections/FooterLinks";
import { HomeSocialProof } from "../pages/home-sections/SocialProof";

/**
 * Main Footer Component
 * Composed of 3 Top-Level sections:
 * 1. SocialProof - Testimonial grid (Hidden on certain pages)
 * 2. FooterCTA - Hero call to action with cinematic background
 * 3. FooterLinks - Navigation grid, newsletter, massive brand name, and copyright
 */
export const Footer = () => {
  const [location] = useLocation();

  // Define all valid application paths
  const validPaths = [
    "/",
    "/services",
    "/faq",
    "/pricing",
    "/shop",
    "/contact",
    "/agreement",
    "/privacy-policy",
    "/cookie-policy",
  ];

  // Define pages where the testimonial marquee should be hidden
  const hideTestimonialsOn = [
    "/contact",
    "/shop",
    "/services",
    "/pricing",
    "/privacy-policy",
    "/cookie-policy",
    "/agreement",
  ];

  const isNotFound = !validPaths.includes(location);
  const shouldHideTestimonials = hideTestimonialsOn.includes(location);

  // Do not render footer on Not Found page
  if (isNotFound) return null;

  return (
    <footer className="w-full bg-black text-white">
      {!shouldHideTestimonials && <HomeSocialProof />}
      <FooterCTA />
      <FooterLinks />
    </footer>
  );
};

export default Footer;
export { FooterLinks };
