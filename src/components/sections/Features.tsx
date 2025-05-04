import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

export const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Breaking down in Chapters",
      description:
        "chatgpt dumps everything in one blob-useless for papers/code. we break it into 30-40 chapters instead. faster understanding, better vibes.",
    },
    {
      id: 2,
      title: "Asking Questions",
      description:
        "ask questions without loosing the sight of the chapter content.",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-[56px] px-5">
      <div className="flex flex-col items-center text-center mb-[86px]">
        <h2 className="text-6xl font-semibold text-[#080808] leading-[70px] mb-4 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          Meet Ace
        </h2>
        <p className="text-[28px] text-[#080808] font-light leading-10 max-w-[652px] max-md:text-2xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
          No logner need to give custom prompt to gpt to understand research papers and keep scrolling up and back asking questions
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-[1569px] px-5">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
