// src/components/Works.jsx
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/* ───────────────────────────────────────── Project card ───────────────────────────────────────── */
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 20, scale: 1, speed: 450 }}
      className="relative bg-[#1d1836] p-5 rounded-[24px] sm:w-[360px] w-full card-glow shadow-card"
    >
      {/* preview image + GitHub icon */}
      <div className="relative w-full h-[230px] rounded-[16px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex justify-end m-3 opacity-0 hover:opacity-100 transition-opacity duration-300 card-img_hover">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
            aria-label="View source on GitHub"
          >
            <img
              src={github}
              alt="github icon"
              className="w-1/2 h-1/2 object-contain"
            />
          </button>
        </div>
      </div>

      {/* title + description */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px] leading-none">
          {name}
        </h3>
        <p className="mt-2 text-secondary text-[14px] leading-[22px]">
          {description}
        </p>
      </div>

      {/* technology tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

/* ───────────────────────────────────────── Works section ─────────────────────────────────────── */
const Works = () => (
  <>
    {/* heading */}
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>MY WORK</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    {/* intro paragraph */}
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Following projects showcases my skills and experience through real-world
      examples of my work. Each project is briefly described with links to code
      repositories and live demos in it. It reflects my ability to solve
      complex problems, work with different technologies, and manage projects
      effectively.
    </motion.p>

    {/* project cards */}
    <div className="mt-20 flex flex-wrap justify-center gap-10">
      {projects.map((project, idx) => (
        <ProjectCard key={`project-${idx}`} index={idx} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "projects");
