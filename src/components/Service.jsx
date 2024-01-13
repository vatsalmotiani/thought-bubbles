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
        className='px-4 py-2 mx-2 bg-neutral-100 rounded-2xl text-tb-black hover:bg-neutral-200 duration-300 whitespace-nowrap'
      >
        {serviceName}
      </motion.div>
    </Link>
  );
}
