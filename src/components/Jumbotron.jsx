import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Button from "./Button";

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

export function JumboCase({ img }) {
  return (
    <Carousel className='bg-black w-full '>
      <CarouselContent>
        <CarouselItem className='basis-full flex justify-center items-center my-14'>
          <div className='flex flex-col me-14'>
            <p className='w-[600px] text-7xl leading-tight font-bold text-white font-bebas'>Invest in Breakout Production</p>
            <p className='w-[600px] text-white font-bebas my-8'>Invest in Breakout Production</p>
            <Button
              type='outline'
              content='View Case'
              link='case'
            />
          </div>
          <Image
            src={img}
            alt='hello'
            height={600}
            width={20}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
