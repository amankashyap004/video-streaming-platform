import React from "react";

const FeaturesSection = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center">
      <div className="container px-4 lg:px-10 py-8 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <h1 className="text-2xl lg:text-5xl font-bold drop-shadow-lg">
            Welcome to Dreel.Co
          </h1>
          <p className="lg:text-xl mt-4 font-semibold leading-relaxed w-full lg:w-3/4 ">
            Empower your creativity with AI-powered video streaming. Create
            viral reels in minutes with dynamic AI-enhanced features and
            seamless multi-device support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card p-6 lg:p-8 shadow-lg rounded-lg border border-black bg-gradient-to-t ${
                index === 1 || index === 4
                  ? "from-[#FACBEA] to-[#F79BD3] hover:from-[#F79BD3] hover:to-[#FACBEA]"
                  : "from-[#F79BD3] to-[#FACBEA] hover:from-[#FACBEA] hover:to-[#F79BD3]"
              }`}
            >
              <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

export const features = [
  {
    title: "High-Quality Streaming",
    description:
      "Experience our high-quality video streaming with minimal buffering and crystal-clear resolution.",
  },
  {
    title: "Custom Video Player",
    description:
      "Enjoy a seamless viewing experience with our user-friendly custom video player featuring advanced controls.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Choose from a range of affordable pricing plans that suit your needs and budget.",
  },
  {
    title: "Multi-Device Support",
    description:
      "Watch your favorite content on multiple devices, including smartphones, tablets, and smart TVs.",
  },
  {
    title: "Offline Viewing",
    description:
      "Download your favorite videos and watch them offline whenever you want.",
  },
  {
    title: "Ad-Free Experience",
    description:
      "Enjoy uninterrupted streaming with our ad-free viewing experience on premium plans.",
  },
];
