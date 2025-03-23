
import React from "react";
import CustomButton from "@/components/ui/CustomButton";

interface HeroProps {
  heroImageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ heroImageUrl }) => {
  return (
    <>
      <div className="flex flex-col items-center text-center pt-[82px] pb-10 px-5">
        <h1 className="text-[66px] font-bold text-[#080808] leading-[74px] max-w-[1500px] mb-3.5 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          Effortless Browsing, Intelligent Results.
        </h1>
        <p className="text-3xl text-[#080808] font-light leading-10 max-w-[1245px] mb-[58px] max-md:text-2xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
          The Browser that skips online clutter and makes information easier to
          access.
        </p>
        <CustomButton size="lg">Download Now</CustomButton>
      </div>
      <div className="relative w-full max-w-[1270px] mt-10 mx-auto">
        <img
          src={heroImageUrl}
          alt="hero image"
          className="w-full h-auto filter drop-shadow-[0px_0px_76px_rgba(61,_57,_93,_0.25)]"
        />
      </div>
    </>
  );
};

export default Hero;
