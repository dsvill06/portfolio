import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { audio, download, downloadHover, resume } from "../assets";
import { textVariant } from "../utils/motion";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Origin = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Origin Story
        </h2>
        <h1 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Meet David
        </h1>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Listen to some of my background and learn more about me personally!
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col gap-5 sm:pl-16 pl-[2rem]">
        <div id="theVideo">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QU5XWkI8V3U?si=T-MhPT0fc210jwZ7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-auto md:w-[650px] h-[400px] border-2 border-eerieBlack shadow-card"
          ></iframe>
          
        </div>
        <div className=" w-full md:w-7/12 shadow-card bg-eerieBlack">
          <AudioPlayer
            src={audio}
            onPlay={(e) => console.log("onPlay")}
            layout="stacked"
            header={<div>Origin Story Audio</div>}
            className="h-1/2"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Origin, "work");
