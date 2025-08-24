// "use client";
// import { motion } from "framer-motion";

// const InfiniteScroller = ({ text }) => {
//   const repeatedText = Array(20).fill(text).join("   ");

//   return (
//     <div
//       className='relative w-full overflow-hidden opacity-30'
//       style={{
//         WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)",
//         WebkitMaskRepeat: "no-repeat",
//         WebkitMaskSize: "100% 100%",
//         maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)",
//         maskRepeat: "no-repeat",
//         maskSize: "100% 100%",
//       }}
//     >
//       <motion.div
//         className='flex whitespace-nowrap'
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//       >
//         <span className='px-8 text-[10rem] font-poppins font-semibold text-tb-body'>{repeatedText}</span>
//         <span className='px-8 text-[10rem] font-poppins font-semibold text-tb-body'>{repeatedText}</span>
//       </motion.div>
//     </div>
//   );
// };

// export default InfiniteScroller;
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const InfiniteScroller = ({ text }) => {
  const repeatedText = Array(20).fill(text).join("   ");

  return (
    <div className='relative w-full overflow-hidden py-8'>
      {/* Scroller with mask */}
      <div
        className='relative opacity-30'
        style={{
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <motion.div
          className='flex whitespace-nowrap'
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          <span className='px-8 text-[10rem] font-poppins font-semibold text-tb-body'>{repeatedText}</span>
          <span className='px-8 text-[10rem] font-poppins font-semibold text-tb-body'>{repeatedText}</span>
        </motion.div>
      </div>

      {/* Vector image ABOVE the masked area */}
      <div className='absolute top-1/3 right-16 -translate-y-1/2 z-20 pointer-events-none'>
        <Image
          src='/assets/vector3.png'
          alt='Vector Decoration'
          width={200}
          height={200}
          className='opacity-70'
        />
      </div>
    </div>
  );
};

export default InfiniteScroller;
