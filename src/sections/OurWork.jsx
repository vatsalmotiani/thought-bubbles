// "use client";

import Title from "@/components/Title";
import CaseSmall from "@/components/CaseSmall";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function OurWork() {
  // const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className='bg-white flex flex-col items-center max-w-screen-lg'>
      <div className='mb-8'>
        <Title
          sectionName='Our Work'
          heading='Helping Brands Break out of their Bubble'
          subheading="Here's where the magic happens! Get an inside look at our success stories—a mix of creativity, problem-solving, and awesome collaborations with our amazing clients."
        />
      </div>
      {/* <div
        className='embla'
        ref={emblaRef}
      > */}
      <div className='embla__container mb-8'>
        <div className='embla__slide'>
          <CaseSmall
            img='/assets/case0.jpg'
            name='Inter Times'
            category={["Branding"]}
          />
        </div>
        <div className='embla__slide'>
          <CaseSmall
            img='/assets/case0.jpg'
            name='Inter Times'
            category={["Branding"]}
          />
        </div>
      </div>
      {/* </div> */}
      {/* <div className='mb-8 flex '>
        <CaseSmall
          img='/assets/case0.jpg'
          name='Inter Times'
          category={["Branding"]}
        />
      </div> */}
    </div>
  );
}
