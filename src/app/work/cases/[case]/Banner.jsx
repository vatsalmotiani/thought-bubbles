"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Banner({ name, category, img, client }) {
  return (
    <div className=''>
      <div className='flex flex-col'>
        <p className='text-lg  text-tb-body pt-4'>{category.join(", ")}</p>
        <p className='font-inter text-tb-black text-6xl font-semibold '>{name}</p>
        {/* <div className='flex flex-col mt-14'>
          <Image
            src={client.logo}
            alt={client.name}
            width={150}
            height={120}
          />
          <p className=' mt-4 text-tb-body text-base'>{client.name}</p>
        </div> */}
      </div>
      <div className='py-8'>
        <Image
          src={img}
          alt={name}
          height={900}
          width={1200}
          className='rounded-3xl z-10  col-start-1 row-start-1'
        />
      </div>
    </div>
  );
}
