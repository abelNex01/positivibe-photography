import { X } from "lucide-react";
import { useReservation } from "@/context/ReservationContext";
import { useEffect } from "react";

export const ReservationModal = () => {
  const { isOpen, closeModal } = useReservation();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Dark Backdrop */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={closeModal}
      />

      {/* Modal Content - Elegant White Card */}
      <div className="relative bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto shadow-2xl p-8 md:p-12 animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-[#111111] hover:text-[#D4AF37] transition-colors"
        >
          <X size={28} strokeWidth={1} />
        </button>

        {/* Heading */}
        <div className="text-center mb-8 flex flex-col items-center">
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-3 block">
            Begin Your Legacy
          </span>
          <h2 className="font-aboreto font-normal text-[#111111] text-[32px] sm:text-[42px] leading-[1.1] tracking-wide uppercase">
            Book a session
          </h2>
        </div>

        {/* Form Fields */}
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            closeModal();
          }}
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              required
              type="text"
              placeholder="Full Name *"
              className="w-full bg-transparent border-b border-[#dddddd] pb-3 text-[#111111] placeholder:text-[#999999] [font-family:'Inter',Helvetica] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
            />
            <input
              required
              type="email"
              placeholder="Email Address *"
              className="w-full bg-transparent border-b border-[#dddddd] pb-3 text-[#111111] placeholder:text-[#999999] [font-family:'Inter',Helvetica] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <select
              required
              className="w-full bg-transparent border-b border-[#dddddd] pb-3 text-[#111111] [font-family:'Inter',Helvetica] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none appearance-none cursor-pointer invalid:text-[#999999]"
              defaultValue=""
            >
              <option value="" disabled className="text-[#999999]">
                Session Type *
              </option>
              <option value="wedding">Wedding / Elopement</option>
              <option value="engagement">Engagement Session</option>
              <option value="portrait">Fine Art Portraits</option>
              <option value="event">Special Event / Other</option>
            </select>

            <input
              type="text"
              placeholder="Target Date (e.g. October 2026)"
              className="w-full bg-transparent border-b border-[#dddddd] pb-3 text-[#111111] placeholder:text-[#999999] [font-family:'Inter',Helvetica] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
            />
          </div>

          <textarea
            rows={3}
            placeholder="Tell us about your vision..."
            className="w-full bg-transparent border-b border-[#dddddd] pb-3 pt-2 text-[#111111] placeholder:text-[#999999] [font-family:'Inter',Helvetica] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none resize-none mt-2"
          />

          <button
            type="submit"
            className="mt-6 w-full py-4 bg-[#111111] text-white hover:bg-[#D4AF37] transition-colors flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-[12px] tracking-[0.1em] uppercase"
          >
            Submit Request
          </button>

          <p className="text-center mt-2 [font-family:'Inter',Helvetica] text-[#999999] text-[10px] tracking-wide uppercase">
            We generally respond within 24-48 business hours.
          </p>
        </form>
      </div>
    </div>
  );
};
