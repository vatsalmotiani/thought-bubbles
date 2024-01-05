"use client";
import CaseCard from "@/components/CaseCard";
import caseList from "@/data/caseList";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function RelatedCases({ name }) {
  return (
    <div className='flex flex-col'>
      <p className='font-poppins text-tb-black text-2xl  pb-4'>Checkout Other Case Studies</p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className='mx-8'
      >
        <CarouselContent>
          {caseList
            .filter((c) => c.name !== name)
            .map((filteredCase) => {
              return (
                <CarouselItem
                  key={filteredCase.id}
                  className='basis-full sm:basis-1/2 lg:basis-1/4   '
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
