import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = ({ dark }) => {
  return (
    <div className='navbar h-[100px]'>
      <Sidebar />
      <div className='wrapper flex justify-between items-center w-full p-2 md:w-4/5 m-auto h-[100%]'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='text-white text-lg ml-24 md:ml-4'
        >
          fullstackJulian
        </motion.span>
        <div className='socials hidden md:flex gap-2 md:gap-8'>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
