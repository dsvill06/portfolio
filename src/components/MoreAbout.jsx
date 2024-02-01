import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { about, article, banner, cover, linkedin, qc } from "../assets";
import Pictures from "./Pictures";

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
          <div className=" col-span-2 grid grid-flow-col h-full">
           <a href="">
             <img src={banner} className="object-cover  "/>
           </a>
            <img src={about} className=" object-cover"/>
          </div>
        </div> 
        
        {/* <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
    >
      <span>Hover Me</span>
    </button> */}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
