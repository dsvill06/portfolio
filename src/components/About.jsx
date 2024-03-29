import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { linkedin } from "../assets";

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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        My name is David Villavicencio, and I am currently pursuing a degree in
        Computer Science at the University of North Carolina at Chapel Hill.
        Alongside my studies, I am also passionate about Entrepreneurship and
        Engineering, which I am minoring in. I am originally from Ecuador, but I
        also take great pride in my Colombian heritage on my Mom's side. Through
        my experiences as a first-generation immigrant facing various barriers
        in accessing education, healthcare, and job opportunities I plan to use
        my education and skills to promote the development of minority
        communities within the United States. Below are some skills I pride
        myself on.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* <div className="mt-20 font-poppins">
        <div className="flex flex-col md:flex-row gap-16 justify-between">
        <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
          src={linkedin}
          alt={'linkedin'}
          className="w-full  md:w-8/12 h-max object-cover rounded-[24px] shadow-card"
        />
        <motion.div className="flex flex-row  " variants={textVariant()} >
          <h1 className="text-5xl font-bold text-eerieBlack w-full md:mr-20">Linkedin</h1>
        </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, "about");
