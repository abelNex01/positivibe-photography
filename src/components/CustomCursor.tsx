import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the device has a touch screen or fine pointer (mouse).
    // We only want the custom cursor on devices with a mouse.
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    let frameId: number;
    // Initialize starting position out of screen bounds to avoid flashing at 0,0
    let mouseX = -100;
    let mouseY = -100;

    const updateCursor = () => {
      if (outerRef.current) {
        // High performance translate without css transitions
        outerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      frameId = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Reveal the cursor the first time the mouse moves
      if (outerRef.current && outerRef.current.style.opacity === "0") {
        outerRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (outerRef.current) outerRef.current.style.opacity = "0";
    };
    
    const handleMouseEnter = () => {
      if (outerRef.current) outerRef.current.style.opacity = "1";
    };

    // Fast hovering checks bypassing React renders.
    // IMPORTANT: Never use getComputedStyle here — it forces layout reflow on every mouseover.
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look up the DOM tree to see if we are inside a clickable element
      // Uses only DOM property checks — zero layout/reflow cost
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        target.getAttribute('tabindex') !== null ||
        target.style.cursor === 'pointer' ||
        target.closest('[role="button"]') !== null;
        
      if (isClickable) {
        innerRef.current?.classList.add('cursor-hover-state');
      } else {
        innerRef.current?.classList.remove('cursor-hover-state');
      }
    };

    // Attach event listeners targeting the capture phase for maximum responsiveness
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    
    // Start animation loop
    frameId = requestAnimationFrame(updateCursor);

    // Hide default cursor globally
    document.documentElement.classList.add("custom-cursor-enabled");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return (
    <>
      {/* Outer shell dictates exact coordinates - NO transitions to kill performance */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] opacity-0 transition-opacity duration-300 hidden md:block"
        style={{ willChange: 'transform' }}
      >
        {/* Inner core handles the aesthetic scaling and blending - Transitions enabled */}
        <div
          ref={innerRef}
          className="w-1.5 h-1.5 bg-white rounded-full mix-blend-difference origin-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out will-change-transform ring-[10px] ring-[#D4AF37]/30"
        ></div>
      </div>
      
      {/* CSS Rules specifically keeping the custom cursor isolated and hiding defaults */}
      <style>{`
        /* Only apply hidden cursors when pointer is accurate (mice) */
        @media (pointer: fine) {
          html.custom-cursor-enabled, 
          html.custom-cursor-enabled * {
            cursor: none !important;
          }
        }
        
        .cursor-hover-state {
          transform: translate(-50%, -50%) scale(5) !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(2px);
          border: 0.5px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};
