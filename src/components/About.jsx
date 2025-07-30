import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/** ------------------------------------------------------------------ *
 *  Re-usable service card — matches the design in your screenshot
 * ------------------------------------------------------------------- */
const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{ max: 45, scale: 1, speed: 450 }}
    /* width is fixed on ≥ 640 px so four cards sit in one row              */
    className="w-full sm:w-[280px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      /* shadow-card already exists in your CSS; card-glow is added below   */
      className="relative rounded-[24px] shadow-card card-glow"
    >
      {/* ---------- gradient border ---------- */}
      <div className="green-pink-gradient absolute inset-0 rounded-[24px] p-[2px]" />

      {/* ---------- inner card --------------- */}
      <div className="relative z-10 flex h-[280px] flex-col items-center justify-evenly rounded-[22px] bg-tertiary px-8 py-10">
        <img src={icon} alt={title} className="h-16 w-16 object-contain" />
        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

/** ------------------------------------------------------------------ *
 *  About section
 * ------------------------------------------------------------------- */
const About = () => (
  <>
    {/* heading */}
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    {/* intro paragraph */}
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
    >
      I&apos;m a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and Three.js.
      I&apos;m a quick learner and collaborate closely with clients to create
      efficient, scalable, and user-friendly solutions that solve real-world
      problems. Let&apos;s work together to bring your ideas to life!
    </motion.p>

    {/* service cards */}
    <div className="mt-20 flex flex-wrap justify-center gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
