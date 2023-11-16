import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed odio nulla. Nulla ac elit rutrum, iaculis turpis ut, euismod tellus. Curabitur a augue venenatis, tincidunt orci ac",
  },
  {
    id: 2,
    title: "CSS App Commerce",
    img: "https://images.pexels.com/photos/2874782/pexels-photo-2874782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed odio nulla. Nulla ac elit rutrum, iaculis turpis ut, euismod tellus. Curabitur a augue venenatis, tincidunt orci ac",
  },
  {
    id: 3,
    title: "Vanilla JS",
    img: "https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed odio nulla. Nulla ac elit rutrum, iaculis turpis ut, euismod tellus. Curabitur a augue venenatis, tincidunt orci ac",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className='h-screen snap-start'>
      <div className='container flex items-center justify-center w-full h-full'>
        <div className='wrapper w-4/5 mx-auto flex flex-col sm:flex-row items-center justify-between gap-[40px]'>
          <div
            className='img-container flex-1 h-[50%] rounded-md'
            ref={ref}
          >
            <img
              src={item.img}
              alt={item.name}
              className='w-full h-full object-cover rounded-md'
            />
          </div>

          <motion.div
            className='text-container flex-1 flex flex-col gap-4 md:gap-[30px]'
            style={{ y }}
          >
            <h2 className='text-4xl font-bold'>{item.title}</h2>
            <p className='text-gray-500 text-lg'>{item.desc}</p>
            <button className='rounded-md bg-orange-400 p-4 w-full md:w-[200px]'>
              See Demo
            </button>
            <button className='rounded-md bg-orange-400 p-4 w-full md:w-[200px]'>
              View Repo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      className='portfolio relative'
      ref={ref}
    >
      <div className='progress sticky top-0 right-0 left-0 p-[50px] text-center text-orange-400'>
        <h1 className='text-3xl md:text-5xl font-bold mb-3'>
          Featured Projects
        </h1>
        <motion.div
          className='progress-bar h-[5px] bg-white '
          style={{ scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => {
        return (
          <Single
            item={item}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
