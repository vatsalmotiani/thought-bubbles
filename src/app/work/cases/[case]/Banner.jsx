"use client";
import Image from "next/image";

export function Banner({ name, category, img, client }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <p className='font-poppins text-tb-black text-5xl font-semibold '>{name}</p>
        <p className='text-lg  text-tb-body pt-4'>{category.join(", ")}</p>
        <div className='flex flex-col mt-14'>
          <Image
            src={client.logo}
            alt={client.name}
            width={150}
            height={120}
          />
          <p className=' mt-4 text-tb-body text-base'>{client.name}</p>
        </div>
      </div>
      <div className='grid py-8'>
        <Image
          src={img}
          alt={name}
          height={500}
          width={666}
          className='rounded-3xl z-10  col-start-1 row-start-1'
        />
      </div>
    </div>
  );
}
