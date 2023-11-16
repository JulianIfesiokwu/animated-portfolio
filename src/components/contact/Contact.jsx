import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className='contact w-4/5 m-auto h-full flex flex-col md:flex-row items-center justify-evenly pb-8'
      variants={variants}
      initial='initial'
      whileInView='animate'
    >
      <motion.div
        className='text-container flex-1 flex flex-col gap-[40px] mb-4'
        variants={variants}
      >
        <motion.h1
          className='text-4xl md:text-6xl font-bold'
          variants={variants}
        >
          Let's work Together
        </motion.h1>
        <motion.div
          className='item flex gap-4'
          variants={variants}
        >
          <h2 className=''>
            <ion-icon
              name='mail-outline'
              size='large'
            ></ion-icon>
          </h2>
          <span className='font-light text-lg'>julianifesiokwu@gmail.com</span>
        </motion.div>
        <motion.div
          className='item flex gap-4'
          variants={variants}
        >
          <h2 className=''>
            <ion-icon
              name='call-outline'
              size='large'
            ></ion-icon>
          </h2>
          <span className='font-light text-lg'>+234 702 682 7857</span>
        </motion.div>
      </motion.div>
      <div className='form-container flex-1 w-full'>
        <motion.div
          className='message-svg absolute m-auto'
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width='300px'
            height='300px'
            viewBox='0 0 1800 1800'
            strokeWidth={0.2}
          >
            <g>
              <motion.path
                fill='#6b7280'
                strokeWidth={0.2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={isInView && { duration: 1 }}
                d='M1768.407,80.034H31.592C14.144,80.034,0,94.178,0,111.627v1247.362c0,17.453,14.144,31.593,31.592,31.593
		h174.524v297.79c0,11.292,6.021,21.72,15.796,27.36c4.888,2.821,10.339,4.232,15.796,4.232c5.452,0,10.908-1.411,15.796-4.232
		l563.182-325.15h951.721c17.449,0,31.593-14.14,31.593-31.593V111.627C1800,94.178,1785.856,80.034,1768.407,80.034z
		 M1736.815,1327.396H808.22c-5.544,0-10.992,1.464-15.796,4.231l-523.123,302.03v-274.669c0-17.444-14.144-31.593-31.592-31.593
		H63.185V143.219h1673.631V1327.396z'
              />
              <motion.path
                fill='#6b7280'
                strokeWidth={0.2}
                d='M246.713,423.688h1287.764c17.448,0,31.592-14.144,31.592-31.593c0-17.449-14.144-31.592-31.592-31.592
		H246.713c-17.449,0-31.592,14.143-31.592,31.592C215.121,409.545,229.264,423.688,246.713,423.688z'
              />
              <path
                fill='#6b7280'
                strokeWidth={0.2}
                d='M246.713,667.4h1287.764c17.448,0,31.592-14.143,31.592-31.592s-14.144-31.592-31.592-31.592H246.713
		c-17.449,0-31.592,14.143-31.592,31.592S229.264,667.4,246.713,667.4z'
              />
              <path
                fill='#6b7280'
                strokeWidth={0.2}
                d='M246.713,911.109h1287.764c17.448,0,31.592-14.142,31.592-31.59c0-17.449-14.144-31.593-31.592-31.593
		H246.713c-17.449,0-31.592,14.144-31.592,31.593C215.121,896.968,229.264,911.109,246.713,911.109z'
              />
              <path
                fill='#6b7280'
                strokeWidth={0.2}
                d='M246.713,1154.82h1287.764c17.448,0,31.592-14.139,31.592-31.592c0-17.444-14.144-31.592-31.592-31.592
		H246.713c-17.449,0-31.592,14.147-31.592,31.592C215.121,1140.682,229.264,1154.82,246.713,1154.82z'
              />
            </g>
          </svg>
        </motion.div>
        <motion.form
          className='flex flex-col gap-[20px]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input
            type='text'
            placeholder='Name'
            className='bg-transparent p-3 border-2 border-gray-500 rounded-md text-white'
          />
          <input
            type='email'
            placeholder='Email'
            className='bg-transparent p-3 border-2 border-gray-500 rounded-md text-white'
          />
          <textarea
            placeholder='Your message'
            className='bg-transparent p-3 border-2 border-gray-500 rounded-md text-white'
            rows={8}
          />
          <button className='p-3 border-2 border-none rounded-md bg-orange-400'>
            Send my message
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
