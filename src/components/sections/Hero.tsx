// src/components/sections/Hero.tsx
import React from "react";
import CustomButton from "@/components/ui/CustomButton";

interface HeroProps {
  heroImageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ heroImageUrl }) => {
  return (
    // Changed h-screen to min-h-screen to allow vertical expansion
    <div className="relative w-full min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Background Image - Stays the same */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.rtbrain.app/browser/Hero_BG_1742742329.svg+xml"
          alt="background"
          className="w-full h-full object-cover rounded-2xl" // object-cover will handle potential height increase
        />
      </div>

      {/* Content overlay */}
      {/* Adjusted top padding slightly if needed, ensure enough space for Navbar */}
      <div className="relative z-10 flex flex-col items-center text-center pt-16 sm:pt-20 px-5 w-full">
        <h1 className="font-['Lexend'] text-[66px] font-bold text-[#080808] leading-[74px] max-w-[1500px] mb-3.5 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          Cut your ML paper and codebase comprehension time in half compared to chatgpt with Ace.
        </h1>
        <a
          href="https://chapters-jet.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12" // Apply margin to the link instead of the button if needed
        >
          <CustomButton
            size="lg"
            className="text-[30.08px] leading-[34.08px] px-[47px] py-[24px] font-['Lexend'] font-medium"
          >
            Try Now
          </CustomButton>
        </a>
      </div>

      {/* Image container */}
      {/* Removed mt-auto, added mt-12 (adjust as needed), kept pb-10 */}
      <div className="relative z-10 w-full max-w-[1270px] mx-auto mt-12 pb-10">
        <img
          src={heroImageUrl}
          alt="hero image"
          className="w-full h-auto filter drop-shadow-[0px_0px_76px_rgba(61,_57,_93,_0.25)]"
        />
      </div>
    </div>
  );
};

export default Hero;
