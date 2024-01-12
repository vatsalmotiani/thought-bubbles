"use client";
import { motion } from "framer-motion";

const Title = ({ sectionName, heading, subheading }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <span className='w-full px-4 sm:w-5/6 lg:w-[720px]'>
        <p className='font-caveat lowercase text-tb-blue font-bold text-2xl sm:text-3xl'>{sectionName}</p>
        <p className='font-poppins text-tb-black font-medium py-2 sm:py-4 text-2xl sm:text-3xl'>{heading}</p>
        <p className='leading-6'>{subheading}</p>
      </span>
    </div>
  );
};

export function TitleBold({ sectionName, heading, subheading }) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0, transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.2 } }}
    >
      <p className='me-2 font-inter font-bold uppercase text-tb-black text-5xl xl:text-7xl'>{heading}</p>
      <p className='max-w-[600px] font-inter text-tb-black mt-2 text-xl xl:text-2xl'>{subheading}</p>
    </motion.div>
  );
}

export default Title;
