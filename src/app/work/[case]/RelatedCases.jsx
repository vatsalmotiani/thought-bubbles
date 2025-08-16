"use client";
import CaseCard from "@/components/CaseCard";
import caseList from "@/data/caseList";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function RelatedCases({ name }) {
  return (
    <div className='flex flex-col px-4 sm:px-6'>
      <p className='font-poppins text-tb-black text-xl sm:text-2xl pb-4 sm:pb-6 text-center sm:text-left'>Checkout Other Case Studies</p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className='mx-2 sm:mx-4 md:mx-8'
      >
        <CarouselContent>
          {caseList
            .filter((c) => c.name !== name)
            .map((filteredCase) => {
              return (
                <CarouselItem
                  key={filteredCase.id}
                  className='basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4'
                >
                  <CaseCard caseStudy={filteredCase} />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
