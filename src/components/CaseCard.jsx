"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";

export default function CaseCard({ caseStudy }) {
  return (
    <motion.div whileHover={{ scale: 1.015 }}>
      <Link
        className='flex flex-col mx-2 mb-8 md:mx-4'
        href={`/work/cases/${slugify(caseStudy.name)}`}
      >
        <Image
          src={caseStudy.img}
          height='0'
          width='0'
          alt={caseStudy.name}
          sizes='100vw'
          className='h-[247px] w-[330px] md:h-[300px] md:w-[400px]  hover:drop-shadow-xl duration-300'
        />
        <span className='w-[330px] md:w-[400px] '>
          <p className='mt-3  text-tb-black font-medium'>{caseStudy.name}</p>
          {/* <p className='text-neutral-400'>{caseStudy.category.join(", ")}</p> */}
        </span>
      </Link>
    </motion.div>

    // <div className='p-6 md:p-8 bg-gradient-to-r from-neutral-100 to-neutral-200 rounded-4xl'>
    //   <Link
    //     className='flex flex-col'
    //     href={`/work/cases/${slugify(caseStudy.name)}`}
    //   >
    //     <Image
    //       src={caseStudy.img}
    //       height='0'
    //       width='0'
    //       alt={caseStudy.name}
    //       sizes='100vw'
    //       className='h-[275px] w-[275px] md:h-[400px] md:w-[400px] rounded-3xl hover:drop-shadow-xl duration-300'
    //     />
    //     <span className='w-[275px] md:w-[400px] '>
    //       <p className='mt-6 ps-3 font-poppins text-tb-black font-medium text-lg'>{caseStudy.name}</p>
    //       <p className='ps-3 mt-2 text-neutral-400'>{caseStudy.category.join(", ")}</p>
    //     </span>
    //   </Link>
    // </div>
  );
}
