"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { slugify } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function CategoryNavigation({ services }) {
  {
    const serviceClass = "px-4 py-2 mx-3 sm:mx-4 text-tb-black font-poppins font-medium xl:mx-2  duration-300 ";
    const activeServiceClass = "bg-neutral-100 rounded-2xl  border-2 border-neutral-100 ";
    const pathname = usePathname();

    return (
      <div className='w-5/6 md:w-2/3 xl:w-max flex items-center mt-8 sm:mt-14 text-center overflow-x-auto pb-4 b'>
        {/* <span className='visible xl:invisible fixed'>
          <ArrowLeft />
        </span> */}
        <Link
          href='/work/all'
          className={`${serviceClass} ${pathname === "/work/all" ? `${activeServiceClass}` : "hover:text-tb-body"}`}
        >
          <motion.div whileHover={{ scale: 0.96 }}>All</motion.div>
        </Link>
        {services.map((service, i) => {
          return (
            <Link
              href={`/work/${slugify(service)}`}
              key={i}
              className={`${serviceClass} ${pathname === `/work/${slugify(service)}` ? `${activeServiceClass}` : "hover:text-tb-body"}`}
            >
              <motion.div whileHover={{ scale: 0.96 }}>{service}</motion.div>
            </Link>
          );
        })}
        {/* <span className='visible xl:invisible  justify-self-end '>
          <ArrowRight />
        </span> */}
      </div>
    );
  }
}