import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { order } from '../constants';

const ServiceCard = ({index, website, image, name}) => {
    console.log(image);
    return (
      <motion.div
        variants={fadeIn("right", "spring", .5 * index, 0.75)}
        className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >   
      <a href={website} target="_blank">
        <img
          src={image}
          alt={name}
          className=" w-full h-full object-cover rounded-[24px]"
        />
      </a>
      </motion.div>
    );
  };

const Fiverr = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Want to get a website done?</p>
        <h2 className={styles.sectionHeadTextLight}>Submit An Order Below!</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        You may also send me a message on linkedin if you are interested in my work!
      </motion.p>
      <div className="mt-5 flex flex-wrap gap-10">
        {order.map((order, index) => (<div className="flex flex-wrap mt-14 ">
           <ServiceCard key={order.name} index={index} {...order}/>
        </div>))}
      </div>
    </>
  );
};

export default SectionWrapper(Fiverr, '');
