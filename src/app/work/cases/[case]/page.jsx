"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { NextCase } from "./NextCase";
import { findCase } from "@/data/caseList";
import { Info, Paragraph } from "./Info";
import Reveal from "@/components/Reveal";

export default function CasePage({ params }) {
  const slug = params.case;
  const caseFound = findCase(slug);

  return (
    <div className='max-w-[1080px]'>
      <div className='flex flex-col'>
        <Reveal>
          <p className='font-inter text-tb-black text-4xl md:text-6xl font-semibold mt-4'>{caseFound.name}</p>
          <p className='text-lg md:text-2xl mt-4 leading-normal'>{caseFound.objective}</p>
        </Reveal>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3, delay: 1 }}
      >
        <Image
          src={caseFound.img}
          alt={caseFound.name}
          height={900}
          width={1200}
          className='rounded-xl md:rounded-3xl z-10  col-start-1 row-start-1 my-8'
        />
      </motion.div>

      <Paragraph body={caseFound.body} />

      <Info
        title='Services'
        border='t'
        body={caseFound.category.join(", ")}
      />
      <Info
        title='Client'
        border='y'
        body={caseFound.client.name}
      />
      {caseFound.gallery.map((img) => {
        return (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, bounce: 0.4, duration: 0.8, type: "spring" } }}
            viewport={{ once: true }}
            className='max-w-[1080px]'
          >
            <Image
              src={img}
              alt={img}
              height={900}
              width={1200}
              className='rounded-xl md:rounded-3xl z-10  col-start-1 row-start-1 my-8'
            />
          </motion.div>
        );
      })}
      <hr />
      {/* <NextCase name={caseFound.name} /> */}
    </div>
  );
}
