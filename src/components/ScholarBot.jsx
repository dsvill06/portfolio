import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { bwmap, demo, sb, worldmap } from "../assets";
import TypewriterComponent from "typewriter-effect";
import FloatingPhone from "./Phone";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
const ScholarBot = () => {
  return (
    <>
      <section
        className=" selection:flex flex-col w-full h-auto mx-auto 
         bg-night "
      >
        <div>
          <motion.div variants={textVariant()}
            className={`sm:top-[150px] top-[50px] 
              lg:top-[50px] xl:top-[150px] ${styles.paddingX} 
              max-w-7xl mx-auto flex flex-col items-middle text-center gap-3`}
          >
            <div>
              <h1
                className={`${styles.heroHeadText} text-mintCream font-poppins uppercase`}
              >
                Meet{" "}
                <span
                  className=" sm:text-[90px] text-[#016ab3] text-[50px] font-mova
                    font-extrabold uppercase"
                >
                  {"ScholarBot"}
                </span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-mintCream`}>
                A revolutionary tool providing better access to higher education
              </p>
            </div>
            <div
              className="w-screen flex flex-col items-start 
                justify-center sm:-ml-[3rem] xxs:mt-4"
            ></div>

            <div></div>
          </motion.div>
        </div>
       <div className="flex flex-col ">
         {/* <div className="align-middle justify-end my-auto ">
           <video width="250" height="200" controls>
             <source src={demo} type="video/mp4" />
           </video>
         </div> */}
         <motion.img variants={fadeIn()} initial={{opacity:0}} animate={{opacity:2}} transition={{delay:5}}
            src={sb} alt="ScholarBot" className="text-flashWhite self-center"/>
       </div>
      </section>
    </>
  );
};

export default SectionWrapper(ScholarBot,"hero")
