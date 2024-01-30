import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { article, cover, linkedin, qc } from "../assets";
import Pictures from "./Pictures";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Specifics</p>
        <h2 className={styles.sectionHeadTextLight}>More About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      ></motion.p>

      <div className="mt-20 font-poppins ">
        <h1 className={styles.sectionSubTextLight}>Professionalism</h1>
        <div className="group relative h-full w-full overflow-hidden bg-neutral-200">
          <motion.div
            whileHover="hover"
            variants={{
              hover: {
                scale: 1.05,
              },
            }}
            className="absolute inset-0 z-10 place-content-center grid "
          >
            <p className="bg-gradient-to-br  from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
              Linkedin
            </p>
          </motion.div>
         
        </div>
        <div className="grid grid-flow-row grid-rows-1 grid-cols-2  gap-5 w-10/12  py-5 object-contain mx-auto"> 
          <div className="grid grid-flow-row grid-rows-2 gap-6">
            <motion.img
                src={cover}
                alt={"cover"}
                className="w-full object-cover object-left-top shadow-card"
              />
              <motion.img
                src={article}
                alt={"article"}
                className="w-full object-cover object-left-top shadow-card place-content-end row-start-2"
              />
          </div>
            {/* <motion.img
            src={linkedin}
            alt={"linkedin"}
            className="w-full h-full object-cover object-left-top shadow-card col-start-1 row-start-2"
          /> */}
            
             <motion.img
              src={qc}
              alt={"infographic"}
              className="w-full object-fill object-left-top shadow-card place-content-end col-start-2 row-start-1 sca"
            />
        </div> 
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
