"use client";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { motion } from "framer-motion";
// import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Service({ serviceName = "Branding" }) {
  return (
    <motion.div
      whileHover={{ scale: 0.96 }}
      className='px-4 py-2  mx-2 bg-neutral-100 rounded-2xl text-tb-black hover:text-tb-body duration-300 '
    >
      <Link
        className='font-poppins font-medium'
        href={`/work/${slugify(serviceName)}`}
      >
        {serviceName}
      </Link>
    </motion.div>
  );
}
