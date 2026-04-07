import { useEffect } from "react";
import { useLocation } from "wouter";
import { useLenis } from "lenis/react";

/**
 * ScrollToTop component automatically resets the window scroll position
 * to (0, 0) whenever the route (location) changes.
 * This ensures that users always start at the top of a new page.
 */
export const ScrollToTop = () => {
  const [location] = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, lenis]);

  return null;
};
