import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className='sidebar flex flex-col items-center justify-center bg-white text-black'
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className='background fixed top-0 left-0 bottom-0 w-full md:w-[400px] bg-white z-[999]'
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
