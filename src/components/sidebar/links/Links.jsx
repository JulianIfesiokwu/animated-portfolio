import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ dark }) => {
  const items = ["home", "about", "services", "portfolio", "contact"];
  return (
    <motion.div
      className='links absolute w-full h-full flex flex-col items-center justify-center gap-[20px]'
      variants={variants}
    >
      {items.map((item) => {
        return (
          <motion.a
            href={`#${item}`}
            key={item}
            className='text-2xl font-sans'
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
          >
            {item}
          </motion.a>
        );
      })}
      <motion.div
        className='socials flex items-center justify-evenly md:hidden w-full'
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        <a
          href='https://github.com/JulianIfesiokwu'
          rel='noopener noreferrer'
          target='_blank'
        >
          <ion-icon
            name='logo-github'
            size='large'
          ></ion-icon>
        </a>
        <a
          href='https://twitter.com/mrjules07'
          rel='noopener noreferrer'
          target='_blank'
        >
          <ion-icon
            name='logo-twitter'
            size='large'
          ></ion-icon>
        </a>
        <a
          href='https://www.linkedin.com/in/julian-ifesiokwu-1307/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <ion-icon
            name='logo-linkedin'
            size='large'
          ></ion-icon>
        </a>
        {dark ? (
          <ion-icon
            name='moon-outline'
            size='large'
            className='cursor-pointer'
          ></ion-icon>
        ) : (
          <ion-icon
            name='sunny-outline'
            size='large'
            className='cursor-pointer'
          ></ion-icon>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Links;
