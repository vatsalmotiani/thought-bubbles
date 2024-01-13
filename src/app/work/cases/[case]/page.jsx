// "use client";
// import { motion } from "framer-motion";
import Image from "next/image";
import { NextCase } from "./NextCase";
import { findCase } from "@/data/caseList";

export function GallerySec({ img, name }) {
  return (
    <div className='flex flex-col bg-tb-black w-full items-center my-14'>
      <div className='flex flex-col w-4/6 py-14'>
        <p className='font-poppins text-white text-2xl  pb-8'>Gallery</p>

        <Image
          src={img}
          alt={name}
          height='0'
          width='0'
          sizes='100vw'
          className='rounded-4xl h-[484px] w-[1021px] z-10  col-start-1 row-start-1'
        />
      </div>
    </div>
  );
}

export function Metrics({ metrics }) {
  return metrics.map((m) => {
    return (
      <div
        key={m.metric}
        className='flex flex-col me-24'
      >
        <p className=' text-tb-black  font-medium'>{m.metric}</p>
        <p className=' text-tb-body'>{m.value}</p>
      </div>
    );
  });
}

export function Info({ title, body, border = "y" }) {
  return (
    <div className={`border-${border}-2 border-neutral-200 flex flex-col md:flex-row md:justify-between py-6 md:py-8`}>
      <p className='text-tb-black font-medium mb-2 md:mb-0'>{title}</p>
      <p className=''>{body}</p>
    </div>
  );
}

export function Paragraph({ heading, body }) {
  return (
    <div className='flex flex-col'>
      {heading && <p className='font-poppins text-tb-black font-medium text-lg pb-2'>{heading}</p>}
      <p className='md:leading-8 md:text-lg max-w-full mb-8'>{body}</p>
    </div>
  );
}

export default function CasePage({ params }) {
  const slug = params.case;
  const caseFound = findCase(slug);

  return (
    <div className='max-w-[1080px]'>
      <div className='flex flex-col'>
        <p className='font-inter text-tb-black text-4xl md:text-6xl font-semibold mt-4'>{caseFound.name}</p>
        <p className='text-lg md:text-2xl mt-4 leading-normal'>{caseFound.objective}</p>
      </div>

      <Image
        src={caseFound.img}
        alt={caseFound.name}
        height={900}
        width={1200}
        className='rounded-xl md:rounded-3xl z-10  col-start-1 row-start-1 my-8'
      />

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
          <Image
            src={img}
            key={img}
            alt={img}
            height={900}
            width={1200}
            className='rounded-xl md:rounded-3xl z-10  col-start-1 row-start-1 my-8'
          />
        );
      })}

      <hr />
      <NextCase name={caseFound.name} />
    </div>
  );
}
