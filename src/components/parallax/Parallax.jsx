import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className='parallax w-full h-full relative flex items-center justify-center z-50 overflow-hidden'
      style={{
        background:
          type === "about"
            ? "linear-gradient(to bottom, #111132, #0c0c1d) "
            : "linear-gradient(to bottom, #111132, #505064)",
      }}
      ref={ref}
    >
      <motion.h1
        className='text-4xl md:text-6xl font-bold'
        style={{ y: yText }}
      >
        {type === "about" ? "About Me" : "Featured Projects"}
      </motion.h1>
      <motion.div className='mountains bg-mountains bg-cover bg-bottom w-full h-full absolute z-30'></motion.div>
      <motion.div
        className={`planets ${
          type === "about" ? "bg-planets" : "bg-sun"
        } bg-cover bg-bottom w-full h-full absolute z-20`}
        style={{
          y: yBg,
        }}
      ></motion.div>
      <motion.div
        className='stars bg-stars bg-cover bg-bottom w-full h-full absolute z-10'
        style={{ x: yBg }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
