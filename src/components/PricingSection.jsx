import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: [
      "Access to basic streaming content",
      "Standard definition (SD) quality",
      "Ad-supported viewing experience",
      "Limited to 1 device at a time",
      "No offline viewing",
      "Community support",
    ],
  },
  {
    name: "Basic",
    price: "$9.99/mo",
    description: [
      "Access to standard streaming content",
      "High definition (HD) quality",
      "Ad-free viewing experience",
      "Stream on up to 2 devices simultaneously",
      "Offline viewing available",
      "Standard customer support",
    ],
  },
  {
    name: "Premium",
    price: "$19.99/mo",
    description: [
      "Access to all streaming content, including exclusive releases",
      "Ultra high definition (UHD) quality",
      "Ad-free viewing experience",
      "Stream on up to 4 devices simultaneously",
      "Offline viewing with unlimited downloads",
      "Premium customer support with priority service",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center">
      <div className="container px-4 lg:px-20 pt-4 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center space-y-4 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold drop-shadow-lg">
            Flexible Plans to Suit Every Need
          </h2>
          <p className="lg:text-xl font-semibold leading-relaxed w-full lg:w-3/4 ">
            Choose from our range of affordable plans designed to meet your
            streaming preferences. Whether you're a casual viewer or a
            binge-watcher, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 lg:p-12 shadow-lg rounded-lg border border-black bg-gradient-to-t ${
                index === 1
                  ? "from-[#FACBEA] to-[#F79BD3] hover:from-[#F79BD3] hover:to-[#FACBEA]"
                  : "from-[#F79BD3] to-[#FACBEA] hover:from-[#FACBEA] hover:to-[#F79BD3]"
              }`}
            >
              <h3 className="text-2xl font-bold mb-1 lg:mb-4">{plan.name}</h3>
              <p className="text-xl font-semibold mb-1 lg:mb-4">{plan.price}</p>
              <ul className="list-disc list-inside text-left">
                {plan.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
