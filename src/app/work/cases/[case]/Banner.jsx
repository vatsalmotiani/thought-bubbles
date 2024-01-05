"use client";
import Image from "next/image";

export function Banner({ name, category, img, client }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col me-14 w-1/2'>
        <p className='font-poppins text-tb-black text-5xl font-semibold '>{name}</p>
        <p className='text-lg  text-tb-body pt-4'>{category.join(", ")}</p>
        <div className='flex flex-col mt-14'>
          <Image
            src={client.logo}
            alt={client.name}
            height='0'
            width='0'
            sizes='100vw'
            className='h-auto w-[160px]'
          />
          <p className=' mt-4 text-tb-body text-base'>{client.name}</p>
        </div>
        {/* <div className='flex mt-8'>
          {category.map((c, i) => (
            <p
              key={i}
              className='rounded-2xl text-neutral-600 bg-white me-2 w-fit py-2 px-4 border-neutral-600 border-1'
            >
              {c}
            </p>
          ))}
        </div> */}
      </div>
      <div className='grid py-8 w-1/2'>
        <Image
          src={img}
          alt={name}
          height='0'
          width='0'
          sizes='100vw'
          className='rounded-4xl h-[400px] w-[800px] z-10  col-start-1 row-start-1'
        />
        <div className='col-start-1 row-start-1 bg-gradient-to-r from-sky-300 to-tb-blue ms-4 mt-4 rounded-4xl h-[400px] w-[800px]' />
      </div>
    </div>
  );
}
