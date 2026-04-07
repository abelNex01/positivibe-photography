import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import React, { Suspense, lazy, useState, useCallback } from "react";

const Home = lazy(() => import("@/pages/Home").then((m) => ({ default: m.Home })));
const Services = lazy(() => import("@/pages/Services").then((m) => ({ default: m.Services })));
const Faq = lazy(() => import("@/pages/Faq").then((m) => ({ default: m.Faq })));
const Pricing = lazy(() => import("@/pages/Pricing").then((m) => ({ default: m.Pricing })));
const Shop = lazy(() => import("@/pages/Shop").then((m) => ({ default: m.Shop })));
const Contact = lazy(() => import("@/pages/Contact").then((m) => ({ default: m.Contact })));
const Agreement = lazy(() => import("@/pages/Agreement").then((m) => ({ default: m.Agreement })));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy })));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy").then((m) => ({ default: m.CookiePolicy })));
const Checkout = lazy(() => import("@/pages/Checkout").then((m) => ({ default: m.Checkout })));

const FallbackLoader = () => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <div className="w-10 h-10 border-4 border-[#dedbd2] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Suspense fallback={<FallbackLoader />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/faq" component={Faq} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contact} />
            <Route path="/agreement" component={Agreement} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/cookie-policy" component={CookiePolicy} />
            <Route path="/checkout" component={Checkout} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

import { ReservationProvider } from "@/context/ReservationContext";
import { CartProvider } from "@/context/CartContext";
import { ReservationModal } from "@/components/ReservationModal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MoveToTopButton } from "@/components/MoveToTopButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ReservationProvider>
          <CartProvider>
            <ReactLenis root>
              {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
              <CustomCursor />
              <ScrollToTop />
              <Navbar />
              <Toaster />
              <Router />
              <ReservationModal />
              <MoveToTopButton />
            </ReactLenis>
          </CartProvider>
        </ReservationProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
