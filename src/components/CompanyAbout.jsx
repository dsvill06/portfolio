import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CompanyAbout = () => {
  return (
    <section className="mx-auto max-w-7xl px-4  text-eerieBlack about                                                                                                                                                                                                                                                          vv                                                                                                                            v  b b  vvb   font-poppins">
      <motion.div
        variants={textVariant()}
        className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
      >
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Develop
          <span className=" text-gunmetal"> your online presence</span>
        </h2>
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-eerieBlack  px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-richBlack"
        >
          Learn more
        </motion.button> */}
      </motion.div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Modern Designs</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-cadetGray to-platinumLight p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              We provide a modern approach to Ui/Ux design catered to the needs
              of the client
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Geared Towards Social Good</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-gunmetal to-taupe p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              Our projects and applications are geared towards promoting change
              to current social issues through Diversity, Equity, and Inclusion
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Promoting Minority Communities</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-mintCream to-cadetGray p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-night">
              Our company prides itself on providing a voice thorugh technology
              for minority commmunities or creating an impact to minority
              comunities through our technology
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Diversere Development</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-taupe to-flashWhite p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              We promote our ability to approach issues through different types
              of projects whether it be through websites, web apps, or apps.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-night p-8 ${className} shadow-card`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold text-platinum">
      {children}
    </h3>
  );
};

export default SectionWrapper(CompanyAbout, "work");
