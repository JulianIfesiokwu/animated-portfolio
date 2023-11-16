import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id='about'
      className='about md:h-screen bg-gradient-to-b from-[#0c0c1d] to-[#111132] overflow-hidden flex flex-col justify-evenly items-center'
    >
      <motion.div className='title-container flex flex-col items-center mt-24 '>
        <div className='title flex flex-col gap-[50px] items-center'>
          <button className='p-12 rounded-full rounded bg-orange-400 border-none text-3xl'>
            What I can do?
          </button>
          <h1 className='text-3xl md:text-6xl font-thin mb-4'>
            <b>For your</b> Business
          </h1>
        </div>
      </motion.div>
      <motion.div className='list-container flex flex-col md:flex-row w-4/5 m-auto'>
        <motion.div
          className='box p-[30px] border-gray-700 border-2 flex flex-col gap-4 justify-between cursor-pointer'
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
          }}
        >
          <h2 className='font-bold text-xl'>Frontend</h2>
          <p className=''>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            quaerat reiciendis suscipit ipsam commodi adipisci placeat repellat
            natus odit..
          </p>
          <button className='p-[10px] bg-orange-400'>Let's Go!</button>
        </motion.div>
        <motion.div
          className='box p-[30px] border-gray-700 border-2 flex flex-col gap-4 justify-between cursor-pointer'
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
          }}
        >
          <h2 className='font-bold text-xl'>Backend</h2>
          <p className=''>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            quaerat reiciendis suscipit ipsam commodi adipisci placeat repellat
            natus odit..
          </p>
          <button className='p-[10px] bg-orange-400'>Let's Go!</button>
        </motion.div>
        <motion.div
          className='box p-[30px] border-gray-700 border-2 flex flex-col gap-4 justify-between cursor-pointer'
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
          }}
        >
          <h2 className='font-bold text-xl'>Maintainance</h2>
          <p className=''>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            quaerat reiciendis suscipit ipsam commodi adipisci placeat repellat
            natus odit..
          </p>
          <button className='p-[10px] bg-orange-400'>Let's Go!</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
