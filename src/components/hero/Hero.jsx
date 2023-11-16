import { motion } from "framer-motion";
import heroImage from "/hero.png";
import scrollBtn from "/scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div
      className='hero h-[calc(100vh-100px)] bg-gradient-to-b from-[#0c0c1d] to-[#111132] overflow-hidden relative'
      id='Hero'
    >
      <div className='wrapper w-4/5 h-full m-auto'>
        <motion.div
          className='w-full sm:w-1/2 text-container h-1/2 sm:h-full flex flex-col justify-center gap-5 sm:gap-10'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2
            className='font-sans text-2xl sm: text-3xl md:text-4xl text-center sm:text-justify uppercase font-bold text-[#663399] tracking-[10px] sm:tracking-[15px]'
            variants={textVariants}
          >
            Julian Ifesiokwu
          </motion.h2>
          <motion.h1
            className='text-2xl sm:text-3xl md:text-6xl text-center sm:text-justify uppercase font-sans tracking-[2px] sm:tracking-[4px] font-bold'
            variants={textVariants}
          >
            FullStack Developer
          </motion.h1>
          <div className='buttons mx-auto md:m-0'>
            <motion.button
              className='p-4 border border-white text-white rounded-md cursor-pointer'
              variants={textVariants}
            >
              Featured Projects
            </motion.button>
            <motion.button
              className='p-4 border border-white text-white rounded-md sm:ml-2 md:ml-3 cursor-pointer'
              variants={textVariants}
            >
              Contact Me!
            </motion.button>
          </div>
        </motion.div>
      </div>
      <motion.div
        className='sliding-text-container absolute text-[20vh] font-bold bottom-[-80px] whitespace-nowrap text-[#ffffff09] w-1/2'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Frontend, Backend, FullStack MERN Developer
      </motion.div>
      <div className='img-container h-1/2 sm:h-full w-full sm:w-1/2 absolute bottom-0 sm:top-0 sm:bottom-unset sm:right-0 mx-auto'>
        <img
          src={heroImage}
          className='object-contain w-full h-full'
        />
      </div>
    </div>
  );
};

export default Hero;
