// PricingCards.js file
import React from "react";

const PricingCards = () => {
  const cardData = [
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Basic",
      price: "$150",
      features: ["One-Page Site", "Contact Form Functionality", "Add Custom Media"],
    },
    {
      image: "https://i.imgur.com/pJNFEHR.png",
      title: "Standard",
      price: "$250",
      features: ["Multiple Page Website", "Smooth Page Navigation", "Up to 5 Pages"],
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Premium",
      price: "$500",
      features: ["Fully Customized Website", "7+ Pages and Subpages", "SEO Optimization"],
    },
  ];
  return (
<div className="w-full py-[5rem] px-4 bg-black text-black !font-poppins">
      <h1 className="text-6xl font-bold text-white text-center pb-10"><span className="text-slate">Pricing</span> Plans</h1>
      <h1 className="text-xl font-poppins text-platinum text-center pb-10">For any inquiries on developing a website or other web development needs below are my pricings</h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 bg-white rounded-lg">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
            
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <a href="#contact" className=" flex flex-row  mx-auto justify-center">
                <button
                  className={`bg-eerieBlack text-platinum hover:text-black hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
                >
                  Contact Us
                </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;