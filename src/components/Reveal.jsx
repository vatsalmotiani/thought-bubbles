"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Reveal({ children }) {
  return (
    <div className='overflow-hidden relative'>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { translateY: "100%" },
            visible: { translateY: "0%" },
          }}
          initial='hidden'
          animate='visible'
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3 + index * 0.15, 
            ease: [0.2, 0.4, 0.3, 1] 
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

// import { motion } from "framer-motion";
// import React from "react";

// export default function Reveal({ children }) {
//   return (
//     <div style={{ position: "relative", overflow: "hidden" }}>
//       <motion.div
//         variants={{
//           hidden: { translateY: "100%" },
//           visible: { translateY: "0%" },
//         }}
//         initial='hidden'
//         animate='visible'
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className='overflow-hidden'
//         style={{ position: "relative", height: "100%" }}
//       >
//         {React.Children.map(children, (child, index) => (
//           <motion.div key={index}>{child}</motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
