"use client";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { motion } from "framer-motion";
// import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Service({ serviceName = "Branding" }) {
  return (
    <Link
      className='font-medium'
      href={`/work/${slugify(serviceName)}`}
    >
      <motion.div
        whileHover={{ scale: 0.97 }}
        whileTap={{ scale: 0.95 }}
        className='px-3 sm:px-4 py-2 sm:py-3 mx-1 sm:mx-2 bg-neutral-100 rounded-xl sm:rounded-2xl text-tb-black hover:bg-neutral-200 duration-300 whitespace-nowrap text-sm sm:text-base font-medium'
      >
        {serviceName}
      </motion.div>
    </Link>
  );
}
