"use client";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Service({ serviceName = "Branding" }) {
  return (
    <Link href={`/work/${slugify(serviceName)}`}>
      <motion.div
        whileHover={{ scale: 0.96 }}
        className='px-4 py-2  mx-2 w-max bg-neutral-100 rounded-2xl text-tb-black hover:text-tb-body duration-300 '
      >
        <p className='font-poppins font-medium bg-clip-text '>{serviceName}</p>
        {/* <p className='font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-tb-blue'>{serviceName}</p> */}
      </motion.div>
    </Link>
  );
}
