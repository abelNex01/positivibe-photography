import React, { useState, useEffect } from "react";
import { 
  User, 
  Clock, 
  Camera, 
  Wand2, 
  Box, 
  Heart, 
  Video, 
  HardDrive, 
  RadioTower, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// --- Helper Components ---

// Icon mapping function
const getIconForDetail = (detail: string) => {
  const lowerDetail = detail.toLowerCase();
  const iconProps = {
    className: "w-4 h-4 mr-3 text-[#D4AF37] flex-shrink-0 mt-0.5",
    strokeWidth: 1.5
  };

  if (lowerDetail.includes("photographer") || lowerDetail.includes("cinematographer")) return <User {...iconProps} />;
  if (lowerDetail.includes("hour")) return <Clock {...iconProps} />;
  if (lowerDetail.includes("camera")) return <Camera {...iconProps} />;
  if (lowerDetail.includes("light")) return <Wand2 {...iconProps} />;
  if (lowerDetail.includes("jib") || lowerDetail.includes("crane")) return <Video {...iconProps} />;
  if (lowerDetail.includes("edited") || lowerDetail.includes("revision") || lowerDetail.includes("retouched")) return <Wand2 {...iconProps} />;
  if (lowerDetail.includes("usb") || lowerDetail.includes("box") || lowerDetail.includes("album") || lowerDetail.includes("print")) return <Box {...iconProps} />;
  if (lowerDetail.includes("pre-wedding") || lowerDetail.includes("engagement")) return <Heart {...iconProps} />;
  if (lowerDetail.includes("drone")) return <Video {...iconProps} />;
  if (lowerDetail.includes("raw") || lowerDetail.includes("drive")) return <HardDrive {...iconProps} />;
  if (lowerDetail.includes("live streaming")) return <RadioTower {...iconProps} />;

  return <CheckCircle2 {...iconProps} />;
};

// Form Input Component
const FormInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className="[font-family:'Inter',Helvetica] font-medium text-[#111111] text-[10px] tracking-[0.2em] uppercase mb-3 block"
    >
      {label} {required && <span className="text-[#D4AF37]">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-transparent border-b border-[#dddddd] pb-3 text-[#111111] placeholder:text-[#999999] [font-family:'Inter',Helvetica] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
    />
  </div>
);

// --- Main App Component ---
export const Agreement = (): JSX.Element => {
  // --- State Management ---
  const [formData, setFormData] = useState({
    clientOneName: "",
    clientTwoName: "",
    bookingClient: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
    email: "",
    eventDate: "",
    ceremonySite: "",
    receptionSite: "",
    howDidYouHear: "",
  });
  
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedAddons, setSelectedAddons] = useState<any[]>([]);
  const [totalCost, setTotalCost] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // --- Data Definitions (Tailored for Positivibe) ---
  const packages = [
    {
      id: "essential",
      name: "The Essential Collection",
      price: 3200,
      details: [
        "Lead Editorial Photographer",
        "8 Hours of Continuous Coverage",
        "High-Resolution Edited Digital Gallery",
        "Personal Print & Sharing Rights",
        "Online Gallery active for 1 year",
        "Custom USB Keepsake Box"
      ],
    },
    {
      id: "signature",
      name: "The Signature Collection",
      price: 4800,
      popular: true,
      details: [
        "Lead Editorial Photographer + Second Shooter",
        "10 Hours of Continuous Coverage",
        "Complimentary Engagement Session",
        "High-Resolution Edited Digital Gallery",
        "Advanced Skin-Retouching on Portraits",
        "10x10 Custom Heirloom Linen Album (20 Pages)",
        "Custom Engraved USB Keepsake Box"
      ],
    },
    {
      id: "legacy",
      name: "The Legacy Collection",
      price: 6500,
      details: [
        "Lead Editorial Photographer + Second Shooter",
        "Unlimited Full Day Coverage (Up to 14 hrs)",
        "Complimentary Engagement or Day-After Session",
        "High-Resolution Edited Digital Gallery within 4 weeks",
        "Advanced Magazine-Style Retouching",
        "12x12 Premium Leather/Linen Album (40 Pages)",
        "Two 8x8 Parent Albums",
        "Custom Engraved USB Keepsake Box",
        "All Unedited RAW Images on Hard Drive"
      ],
    },
  ];

  const addons = [
    { id: "additional_hour", name: "Additional Hour of Coverage", price: 400 },
    { id: "engagement_session", name: "Engagement Session (2 Hours)", price: 650 },
    { id: "second_shooter", name: "Second Photographer (8 Hours)", price: 800 },
    { id: "album_upgrade", name: "Album Size/Page Upgrade", price: 450 },
    { id: "raw_images", name: "All Unedited RAW Images (On Hard Drive)", price: 1000 },
    { id: "expedited_editing", name: "Rush Editing (Gallery in 14 Days)", price: 600 },
    { id: "rehearsal_dinner", name: "Rehearsal Dinner Coverage (3 Hours)", price: 900 },
    { id: "film_photography", name: "35mm Analog Film Photography (5 Rolls + Scans)", price: 750 },
  ];

  const termsAndConditions = `1. RETAINER & PAYMENT SCHEDULE: A non-refundable retainer of 30% of the total package investment is required to secure your date. The remaining balance is due 14 days prior to the event date. No photography will begin until full payment is received. If the client cancels before the event, the retainer is forfeited to cover lost booking opportunities.
  
2. VENUE & LOGISTICS: The client is responsible for acquiring all necessary permits and permissions from venues regarding photography restrictions. The Photographer is not responsible for missed coverage resulting from strict venue rules or timeline delays caused by the client or other vendors.

3. ARTISTIC STYLE & EDITING: The client is hiring Positivibe Photography for their specific editorial, cinematic style as shown in the portfolio. The Photographer retains full creative control over the editing process (color grading, cropping, lighting adjustments). Raw unedited files are not provided unless specifically purchased as an add-on.

4. ILLNESS & FORCE MAJEURE: If the lead photographer cannot perform this agreement due to extreme illness, emergency, or force majeure (acts of God, natural disaster, etc.), every effort will be made to secure a replacement photographer of similar skill. If no replacement can be found, liability is limited to a full refund of all monies paid.

5. MEALS & BREAKS: For coverage exceeding 6 hours, the client agrees to provide a hot meal for the photography team during the reception, preferably concurrent with the client's meal service, as no photography usually takes place during eating.

6. COPYRIGHT & USAGE: The Photographer retains full copyright of all images. The Client receives a personal-use license to print and share images on social media. The Photographer may use the images for advertising, portfolio, and marketing purposes unless a formal privacy NDA is requested and signed prior to the event.

7. DELIVERY TIMELINE: An online gallery of high-resolution, edited images will be delivered within 8 to 12 weeks of the wedding date. Albums and physical products take an additional 4 to 8 weeks after final design approval.

8. LIMITATION OF LIABILITY: While every precaution is taken to secure equipment and back up files, if digital files are lost, stolen, or destroyed for reasons beyond the Photographer's control (e.g., faulty hard drives, camera malfunction), liability is strictly limited to the return of all payments received for the photography services.

9. REVISIONS: Standard retouching is included. Extensive digital manipulation (e.g., body altering, removing complex objects) will incur an additional fee quoted per image. Any requests for re-editing the entire gallery to a different aesthetic will not be accommodated, as the client books based on the established brand style.`;

  // --- Effects ---
  useEffect(() => {
    const packagePrice = selectedPackage ? selectedPackage.price : 0;
    const addonsPrice = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
    setTotalCost(packagePrice + addonsPrice);
  }, [selectedPackage, selectedAddons]);

  // --- Event Handlers ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddonToggle = (addon: any) => {
    setSelectedAddons((prev) => {
      const isSelected = prev.some((a) => a.id === addon.id);
      if (isSelected) return prev.filter((a) => a.id !== addon.id);
      return [...prev, addon];
    });
  };

  const generatePlainTextContent = (data: any) => {
    const { clientInfo, package: pkg, addons: adns, totalCost: cost } = data;
    const separator = "--------------------------------------------------\n";

    let content = "New Wedding Agreement - Positivibe Photography\n";
    content += "==================================================\n\n";
    content += "CLIENT INFORMATION\n";
    content += separator;
    content += `Client 1: ${clientInfo.clientOneName}\n`;
    content += `Client 2: ${clientInfo.clientTwoName}\n`;
    content += `Booking Client: ${clientInfo.bookingClient || "N/A"}\n`;
    content += `Address: ${clientInfo.address}, ${clientInfo.city}, ${clientInfo.province}, ${clientInfo.postalCode}\n`;
    content += `Phone: ${clientInfo.phone}\n`;
    content += `Email: ${clientInfo.email}\n`;
    content += `Event Date: ${clientInfo.eventDate}\n\n`;

    content += "SELECTED PACKAGE\n";
    content += separator;
    content += `${pkg.name} - $${pkg.price.toLocaleString()}\n`;
    pkg.details.forEach((detail: string) => { content += `- ${detail}\n`; });
    content += "\n";

    if (adns.length > 0) {
      content += "SELECTED ADD-ONS\n";
      content += separator;
      adns.forEach((addon: any) => { content += `${addon.name} - $${addon.price.toLocaleString()}\n`; });
      content += "\n";
    }

    content += "TOTAL INVESTMENT\n";
    content += separator;
    content += `$${cost.toLocaleString()}\n\n`;
    content += "AGREEMENT\n";
    content += separator;
    content += "The client has read, understood, and checked the agreement box for all terms and conditions.\n";

    return content;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) return alert("Please select an investment package to proceed.");
    if (!agreedToTerms) return alert("You must formally agree to the terms to proceed.");

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    const submissionData = {
      clientInfo: formData,
      package: selectedPackage,
      addons: selectedAddons,
      totalCost: totalCost,
    };

    const textBody = generatePlainTextContent(submissionData);
    const payload = {
      access_key: (import.meta as any).env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
      subject: `Booking Agreement - ${formData.clientOneName} & ${formData.clientTwoName}`,
      from_name: "Positivibe Studio System",
      message: textBody,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success || !(import.meta as any).env.VITE_WEB3FORMS_KEY) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          clientOneName: "", clientTwoName: "", bookingClient: "",
          address: "", city: "", province: "", postalCode: "",
          phone: "", email: "", eventDate: "", ceremonySite: "",
          receptionSite: "", howDidYouHear: "",
        });
        setSelectedPackage(null);
        setSelectedAddons([]);
        setAgreedToTerms(false);
        window.scrollTo(0, 0);
      } else {
        throw new Error(result.message || "Failed to send message via Web3Forms");
      }
    } catch (error) {
      console.error(error);
      setSubmitError("Studio system error. Please contact us directly at booking@positivibe.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Render ---
  return (
    <div className="bg-[#fcfcfc] w-full min-h-screen relative flex flex-col">
      {/* Main Content */}
      <div className="opacity-100">
        
        {/* Form Header */}
        <motion.header 
          className="w-full py-24 md:py-32 bg-white flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.3em] uppercase mb-4">
            Official Booking
          </span>
          <h1 className="[font-family:'Aboreto',Helvetica] font-normal text-[#111111] text-[36px] sm:text-[50px] md:text-[64px] leading-[1.1] tracking-wide uppercase text-center max-w-[900px]">
            Formalize Your <span className="[font-family:'Bastliga',cursive] text-[#D4AF37] text-[52px] sm:text-[72px] md:text-[90px] leading-[0.7] transform translate-y-3 inline-block lowercase">Legacy</span>
          </h1>
          <p className="[font-family:'Inter',Helvetica] font-light text-[#666666] text-[14px] mt-8 tracking-wide max-w-[600px] text-center px-6">
            Please complete the details below with absolute precision. This document serves to formally secure your date in our studio calendar.
          </p>
        </motion.header>

        {/* Messaging Container */}
        <div className="max-w-[1000px] mx-auto w-full px-6 flex flex-col pt-10">
          {submitSuccess && (
            <div className="mb-12 border border-[#D4AF37]/40 bg-[#D4AF37]/5 p-8 text-center animate-in fade-in">
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#111111] text-[12px] tracking-[0.1em] uppercase block mb-2">
                Agreement Initialized
              </span>
              <p className="[font-family:'Inter',Helvetica] font-light text-[#555555] text-[14px]">
                Thank you. We have received your booking request. Our production office will contact you within 24 hours with your invoice.
              </p>
            </div>
          )}
          {submitError && (
            <div className="mb-12 border border-[#cc0000]/40 bg-[#cc0000]/5 p-8 text-center animate-in fade-in">
              <p className="[font-family:'Inter',Helvetica] font-medium text-[#cc0000] text-[12px] tracking-wide uppercase">
                {submitError}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col pb-32">
            
            {/* Section 1 */}
            <motion.section 
              className="mb-20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[#eeeeee]">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em]">01.</span>
                <h2 className="[font-family:'Aboreto',Helvetica] text-[#111111] text-[20px] md:text-[24px] uppercase tracking-wide">Client Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <FormInput id="clientOneName" label="Partner 1 Name" value={formData.clientOneName} onChange={handleInputChange} placeholder="First & Last Name" />
                <FormInput id="clientTwoName" label="Partner 2 Name" value={formData.clientTwoName} onChange={handleInputChange} placeholder="First & Last Name" />
                <FormInput id="bookingClient" label="Booking Agent / Planner (If Applicable)" value={formData.bookingClient} onChange={handleInputChange} required={false} placeholder="Name or Company" />
                <FormInput id="email" label="Primary Email Address" type="email" value={formData.email} onChange={handleInputChange} placeholder="hello@domain.com" />
                <FormInput id="phone" label="Primary Phone Number" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="(555) 555-5555" />
                <FormInput id="eventDate" label="Target Event Date" type="date" value={formData.eventDate} onChange={handleInputChange} />
                
                <div className="md:col-span-2 pt-4"><h3 className="[font-family:'Inter',Helvetica] text-[10px] text-[#999999] uppercase tracking-[0.2em] mb-4 border-b border-[#eeeeee] pb-2 inline-block">Mailing Address & Venues</h3></div>
                
                <FormInput id="address" label="Street Address" value={formData.address} onChange={handleInputChange} />
                <FormInput id="city" label="City" value={formData.city} onChange={handleInputChange} />
                <FormInput id="province" label="State / Province" value={formData.province} onChange={handleInputChange} />
                <FormInput id="postalCode" label="Zip / Postal Code" value={formData.postalCode} onChange={handleInputChange} />
                
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-4">
                  <FormInput id="ceremonySite" label="Ceremony Venue" value={formData.ceremonySite} onChange={handleInputChange} placeholder="Name & City" />
                  <FormInput id="receptionSite" label="Reception Venue" value={formData.receptionSite} onChange={handleInputChange} placeholder="Name & City if different" />
                </div>
                
                <div className="md:col-span-2 mt-4">
                  <FormInput id="howDidYouHear" label="Discovery" value={formData.howDidYouHear} onChange={handleInputChange} required={false} placeholder="How did you hear about our studio?" />
                </div>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section 
              className="mb-20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[#eeeeee]">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em]">02.</span>
                <h2 className="[font-family:'Aboreto',Helvetica] text-[#111111] text-[20px] md:text-[24px] uppercase tracking-wide">Investment Collection</h2>
              </div>
              
              <div className="flex flex-col gap-8">
                {packages.map((pkg) => (
                  <div 
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`relative border p-8 md:p-10 cursor-pointer transition-all duration-500 flex flex-col md:flex-row gap-8 ${selectedPackage?.id === pkg.id ? 'border-[#111111] bg-[#111111] shadow-2xl scale-[1.01]' : 'border-[#e8e8e8] bg-white hover:border-[#D4AF37] hover:shadow-lg'}`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#D4AF37] text-white [font-family:'Inter',Helvetica] font-bold text-[9px] tracking-[0.1em] px-4 py-1.5 uppercase">
                        Most Requested
                      </div>
                    )}
                    
                    <div className="flex flex-col md:w-1/3 border-b md:border-b-0 md:border-r border-[#666666]/20 pb-6 md:pb-0 md:pr-8 justify-center">
                       <h3 className={`[font-family:'Aboreto',Helvetica] tracking-wide uppercase text-[24px] leading-tight mb-4 ${selectedPackage?.id === pkg.id ? 'text-white' : 'text-[#111111]'}`}>
                         {pkg.name}
                       </h3>
                       <p className={`[font-family:'Inter',Helvetica] text-[28px] font-light ${selectedPackage?.id === pkg.id ? 'text-[#D4AF37]' : 'text-[#111111]'}`}>
                         ${pkg.price.toLocaleString()}
                       </p>
                    </div>

                    <div className="flex flex-col md:w-2/3">
                      <ul className="space-y-4">
                        {pkg.details.map((detail: string, index: number) => (
                          <li key={index} className="flex items-start">
                            {getIconForDetail(detail)}
                            <span className={`[font-family:'Inter',Helvetica] font-light text-[13.5px] leading-relaxed ${selectedPackage?.id === pkg.id ? 'text-[#cccccc]' : 'text-[#555555]'}`}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section 
              className="mb-20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[#eeeeee]">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em]">03.</span>
                <h2 className="[font-family:'Aboreto',Helvetica] text-[#111111] text-[20px] md:text-[24px] uppercase tracking-wide">Bespoke Add-ons</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addons.map((addon) => {
                  const isCurAddon = selectedAddons.some((a) => a.id === addon.id);
                  return (
                    <label 
                      key={addon.id}
                      className={`flex items-center justify-between p-6 border cursor-pointer transition-all duration-300 ${isCurAddon ? 'border-[#111111] bg-[#fafafa]' : 'border-[#e8e8e8] bg-white hover:border-[#D4AF37]'}`}
                    >
                      <span className={`[font-family:'Inter',Helvetica] font-light text-[14px] ${isCurAddon ? 'text-[#111111]' : 'text-[#555555]'}`}>
                        {addon.name}
                      </span>
                      
                      <div className="flex items-center gap-6">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[13px] whitespace-nowrap">
                          + ${addon.price}
                        </span>
                        <div className={`w-5 h-5 border flex items-center justify-center flex-shrink-0 transition-colors ${isCurAddon ? 'bg-[#111111] border-[#111111]' : 'bg-transparent border-[#cccccc]'}`}>
                          {isCurAddon && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                        </div>
                      </div>
                      
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isCurAddon}
                        onChange={() => handleAddonToggle(addon)}
                      />
                    </label>
                  );
                })}
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section 
              className="mb-20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[#eeeeee]">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#D4AF37] text-[11px] tracking-[0.2em]">04.</span>
                <h2 className="[font-family:'Aboreto',Helvetica] text-[#111111] text-[20px] md:text-[24px] uppercase tracking-wide">Legal Covenant</h2>
              </div>
              
              <div className="bg-[#f2f2f2] p-8 md:p-10 mb-8 border border-[#e8e8e8] h-[350px] overflow-y-auto w-full">
                <p className="[font-family:'Inter',Helvetica] font-light text-[#555555] text-[13px] leading-[2.2] whitespace-pre-wrap">
                  {termsAndConditions}
                </p>
              </div>

              <label className="flex items-start gap-4 cursor-pointer group">
                  <div className={`w-5 h-5 mt-0.5 border flex-shrink-0 flex items-center justify-center transition-all duration-300 ${agreedToTerms ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-[#cccccc] group-hover:border-[#D4AF37]'}`}>
                    {agreedToTerms && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className="[font-family:'Inter',Helvetica] font-light text-[#444444] text-[14px] leading-[1.7]">
                    I have read the Terms & Conditions entirely. I understand that by checking this box, I am placing an electronic signature on a legally binding contract with Positivibe Photography.
                  </span>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={agreedToTerms}
                    onChange={() => setAgreedToTerms(!agreedToTerms)}
                  />
              </label>
            </motion.section>

            {/* Floating Summary Footer */}
            <div className="fixed bottom-0 left-0 w-full bg-[#111111] border-t border-[#333333] py-6 px-6 z-[110]">
               <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                 
                 <div className="flex flex-col items-center md:items-start">
                   <span className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-[10px] tracking-[0.2em] uppercase mb-1">
                     Total Investment
                   </span>
                   <span className="[font-family:'Inter',Helvetica] font-light text-white text-[28px] md:text-[36px] leading-none">
                     ${totalCost.toLocaleString()} <span className="text-[12px] text-[#666666] tracking-widest uppercase">CAD</span>
                   </span>
                 </div>

                 <button
                   type="submit"
                   disabled={!agreedToTerms || !selectedPackage || isSubmitting}
                   className={`px-12 py-5 transition-all duration-300 flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-[11px] tracking-[0.15em] uppercase border ${
                     (!agreedToTerms || !selectedPackage || isSubmitting) 
                      ? 'bg-[#222222] text-[#555555] border-[#333333] cursor-not-allowed'
                      : 'bg-[#D4AF37] text-[#111111] border-[#D4AF37] hover:bg-white hover:text-[#111111] hover:border-white'
                   }`}
                 >
                   {isSubmitting ? "Processing..." : "Submit Formal Agreement"}
                 </button>

               </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
