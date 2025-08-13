"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { slugify } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function CategoryNavigation({ services }) {
  {
    const serviceClass = "px-3 sm:px-4 py-2 mx-1 sm:mx-2 text-tb-black font-medium xl:mx-2 duration-300 whitespace-nowrap text-sm sm:text-base";
    const activeServiceClass = "bg-tb-blue text-white rounded-xl sm:rounded-2xl border-2 border-neutral-100";
    // const activeServiceClass = "bg-neutral-100 rounded-2xl  border-2 border-neutral-100 ";
    const pathname = usePathname();

    return (
      <div className='w-full md:w-2/3 xl:w-max flex items-center mt-4 sm:mt-6 md:mt-8 text-center overflow-x-auto pb-4 px-2 sm:px-4'>
        <Link href='/work/all'>
          <motion.div
            className={`${serviceClass} ${pathname === "/work/all" ? `${activeServiceClass}` : "hover:text-tb-body"}`}
            whileHover={{ scale: 0.96 }}
            whileTap={{ scale: 0.94 }}
          >
            All
          </motion.div>
        </Link>
        {services.map((service, i) => {
          return (
            <Link
              href={`/work/${slugify(service)}`}
              key={i}
            >
              <motion.div
                className={`${serviceClass} ${pathname === `/work/${slugify(service)}` ? `${activeServiceClass}` : "hover:text-tb-body"}`}
                whileHover={{ scale: 0.96 }}
                whileTap={{ scale: 0.94 }}
              >
                {service}
              </motion.div>
            </Link>
          );
        })}
      </div>
    );
  }
}
