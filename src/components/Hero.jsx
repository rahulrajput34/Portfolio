import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// adjust this path only if your swirl image lives elsewhere
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    /* full‑screen hero with navy base colour */
    <section
      className="relative w-full h-screen mx-auto bg-primary overflow-hidden"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* headline & sub‑headline */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl
                    ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* violet accent line (dot + gradient bar) */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* copy block */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Rahul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop&nbsp;3D&nbsp;visuals,&nbsp;user{" "}
            <br className="sm:block hidden" />
            interfaces&nbsp;and&nbsp;web&nbsp;applications
          </p>
        </div>
      </div>
      {/* desk + PC + monitor Three‑JS scene */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
