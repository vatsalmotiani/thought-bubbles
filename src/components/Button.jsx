"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({ link = "/", content = "View", type = "blue" }) {
  const commonClasses = "max-w-max text-sm sm:text-base rounded-xl drop-shadow-sm px-4 py-2 sm:px-6 sm:py-3 border-2 duration-300";
  switch (type.toLowerCase()) {
    case "blue":
      return (
        <Link href={link}>
          <motion.div
            whileHover={{ scale: 0.96 }}
            className={`${commonClasses} text-white bg-sky-400 border-sky-500 hover:bg-sky-500 `}
          >
            {content}
          </motion.div>
        </Link>
      );
    case "white":
      return (
        <Link href={link}>
          <motion.div
            whileHover={{ scale: 0.96 }}
            className={`${commonClasses} hover:text-neutral-600 hover:bg-neutral-100 bg-white border-neutral-100 `}
          >
            {content}
          </motion.div>
        </Link>
      );
    case "outline":
      return (
        <Link href={link}>
          <motion.div
            whileHover={{ scale: 0.96 }}
            className={`${commonClasses} text-white border-white hover:bg-white hover:text-tb-black`}
          >
            {content}
          </motion.div>
        </Link>
      );
    case "submit":
      return <button className='w-full disabled:bg-sky-200 disabled:border-sky-200 disabled:drop-shadow-none bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm px-6 py-3 mt-4 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg'>{content}</button>;
  }
}
