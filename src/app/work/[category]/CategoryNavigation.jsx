"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { slugify } from "@/lib/utils";
import { usePathname } from "next/navigation";
export default function CategoryNavigation({ services }) {
  {
    const serviceClass = "text-tb-black font-poppins font-medium mx-2 px-4 py-2 duration-300";
    const activeServiceClass = "bg-neutral-100 rounded-2xl  border-2 border-neutral-100 ";
    const pathname = usePathname();
    return (
      <>
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
      </>
    );
  }
}
