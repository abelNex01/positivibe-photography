import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    // Elegant, minimal timing
    const holdTimer = setTimeout(() => {
      setPhase("hold");
    }, 1800);

    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, 2400);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#fcfcfc] transition-opacity duration-700 ease-in-out ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-1">
        <div className="overflow-hidden pb-2">
          <h1 className="loading-title [font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[40px] sm:text-[56px] md:text-[72px] tracking-[0.2em] uppercase leading-none">
            Positivibe
          </h1>
        </div>
        <div className="overflow-hidden pt-1">
          <span className="loading-subtitle block [font-family:'Bastliga',cursive] text-[#D4AF37] text-[36px] sm:text-[50px] md:text-[68px] italic lowercase leading-none">
            Photography
          </span>
        </div>
        
        {/* Elegant minimalist loading bar */}
        <div className="mt-12 w-32 sm:w-48 h-[1px] bg-[#111111]/10 overflow-hidden rounded-full">
          <div className="loading-bar-fill h-full bg-[#D4AF37]" />
        </div>
      </div>

      <style>{`
        .loading-title {
          animation: titleFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform: translateY(40px);
          opacity: 0;
        }

        .loading-subtitle {
          animation: subtitleFadeUp 1s 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform: translateY(30px);
          opacity: 0;
        }

        .loading-bar-fill {
          animation: barFill 1.4s 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards;
          transform: scaleX(0);
          transform-origin: left center;
        }

        @keyframes barFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes titleFadeUp {
          from { 
            transform: translateY(40px); 
            opacity: 0; 
            filter: blur(4px);
          }
          to { 
            transform: translateY(0%); 
            opacity: 1; 
            filter: blur(0px);
          }
        }

        @keyframes subtitleFadeUp {
          from { 
            transform: translateY(30px); 
            opacity: 0; 
            filter: blur(2px);
          }
          to { 
            transform: translateY(0%); 
            opacity: 1; 
            filter: blur(0px);
          }
        }
      `}</style>
    </div>
  );
};
