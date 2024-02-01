import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { bwmap, worldmap } from "../assets";
import TypewriterComponent from "typewriter-effect";
import FloatingPhone from "./Phone";
import { textVariant } from "../utils/motion";
const CompanyHero = () => {
  return (
    <>
      <section
        className="relative flex lg:flex-row flex-col w-full h-screen mx-auto 
         bg-black overflow-hidden gap-96"
      >
        <motion.div  variants={textVariant()}>
            <div

              className={`absolute inset-0 sm:top-[250px] top-[150px] 
              lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
              max-w-7xl mx-auto flex flex-row items-start
              justify-between gap-3`}
            >
              <div>
                <h1
                  className={`${styles.heroHeadText} text-mintCream font-poppins uppercase`}
                >
                  Welcome to{" "}
                  <span
                    className=" sm:text-[90px] text-cadetGray text-[50px] font-mova
                    font-extrabold uppercase"
                  >
                    {"<Div"}<span className="text-flashWhite">{"Tech"}<span className="text-cadetGray">{">"}</span></span>
                  </span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-mintCream`}>
                  Social Equity and{" "}
                  <span className=" text-cadetGray">{"<Div>"}</span>
                  ersity through Technology
                </p>
              </div>
              <div
                className="w-screen flex flex-col items-start 
                justify-center sm:-ml-[3rem] xxs:mt-4"
              ></div>
            
              <div></div>
            </div>
            
            <div
              className="absolute xs:bottom-10 bottom-32 w-full 
              flex justify-center items-center"
            >
              <a href="#about">
                <div
                  className="w-[35px] h-[64px] rounded-3xl border-4 
                border-french border-dim flex
                justify-center items-start p-2"
                >
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="w-3 h-3 rounded-full bg-taupe mb-1"
                  />
                </div>
              </a>
            </div>
            
        </motion.div>
        <div className=" align-middle justify-end m-auto md:my-64">
          <FloatingPhone />
        </div>
      </section>
    </>
  );
};

export default CompanyHero;
