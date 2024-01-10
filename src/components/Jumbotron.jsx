"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Button from "./Button";
import caseList from "@/data/caseList";
import Link from "next/link";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { slugify } from "@/lib/utils";

export default function Jumbotron({ img, heading, subheading, body }) {
  return (
    // <div className={`flex mt-20 mb-60 justify-center items-center`}>
    //   <Image
    //     src={img.src}
    //     alt={img.alt}
    //     height={img.height}
    //     width={img.width}
    //     className='mx-20'
    //   />
    //   <div className={`w-1/3 `}>
    //     {/* <p className={` font-caveat  text-tb-blue text-9xl font-bold w-1/2 drop-shadow-sm mb-8`}>{heading}</p> */}
    //     <p className={` font-poppins text-tb-dark text-2xl  py-4 `}>{subheading}</p>
    //     <p className={`  text-tb-body text-lg `}>{body}</p>
    //   </div>
    // </div>
    <div className={`flex flex-col my-20 justify-center items-center`}>
      <Image
        src={img.src}
        alt={img.alt}
        height={img.height}
        width={img.width}
        className='mx-20 mb-20'
      />
    </div>
  );
}

export function JumboCase() {
  return (
    <Carousel
      className='w-full'
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {caseList
          .filter((item) => item.favourite === true) // only favoutites
          .map((filteredCase) => {
            return (
              <CarouselItem
                key={filteredCase.id}
                className='basis-full flex justify-center py-14'
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.97, transition: { duration: 0.15, type: "spring", bounce: 0.4 } }}
                >
                  <Link
                    href={`/work/cases/${slugify(filteredCase.name)}`}
                    className='z-10 flex w-fit justify-center items-center '
                  >
                    <Image
                      src='/assets/caseVert.jpg'
                      alt='hello'
                      width='300'
                      height='400'
                    />

                    <div className='flex flex-col ms-14'>
                      <p className='max-w-[720px] truncate text-5xl leading-tight font-bold text-tb-black font-bebas  hover:text-tb-body duration-300'>{filteredCase.name}</p>
                      <p className='text-lg  text-tb-body mt-4'>{filteredCase.category.join(", ")}</p>
                      <div className='flex flex-col mt-14'>
                        <Image
                          src={filteredCase.client.logo}
                          alt={filteredCase.client.name}
                          height='0'
                          width='0'
                          sizes='100vw'
                          className='h-auto w-[160px]'
                        />
                        <p className=' mt-4 text-tb-body text-base'>{filteredCase.client.name}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
    </Carousel>
  );
}
