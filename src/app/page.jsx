import Title from "@/components/Title";
import Service from "@/components/Service";
import CaseSmall from "@/components/CaseSmall";
import Jumbotron from "@/components/Jumbotron";
import serviceList from "@/data/services";
import Button from "@/components/Button";
import caseList from "@/data/caseList";
import Image from "next/image";
import { FAQ } from "../components/FAQ";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function OurWork() {
  return (
    <div className='bg-tb-bg flex flex-col items-center w-screen py-16'>
      <Title
        sectionName='Our Work'
        heading='Helping Brands Break out of their Bubble'
        subheading="Here's where the magic happens! Get an inside look at our success stories—a mix of creativity, problem-solving, and awesome collaborations with our amazing clients."
      />
      <div className='my-14 w-2/3 '>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent className='-ml-0'>
            {caseList.map((filteredCase) => {
              return (
                <CarouselItem
                  key={filteredCase.id}
                  className='md:basis-1/2 lg:basis-1/3'
                >
                  <CaseSmall caseStudy={filteredCase} />{" "}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* <div className='flex my-8'>
        {caseList.map((filteredCase) => {
          return (
            <span
              key={filteredCase.id}
              className='me-8'
            >
              <CaseSmall caseStudy={filteredCase} />
            </span>
          );
        })}
      </div> */}
      <Button
        link='/work/all'
        type='White'
        content='View All'
      />
    </div>
  );
}

export function CTA({ title, img }) {
  return (
    <div className='h-96 w-5/6 bg-gradient-to-r from-sky-300 to-tb-blue flex p-14 border-2 rounded-4xl justify-between items-center'>
      <div className='flex flex-col'>
        <p className='text-4xl w-2/3 leading-normal font-poppins text-white font-semibold'>Unlock Your Brand&apos;s Potential Today</p>
        <Button
          link='/contact-us'
          content='Get Started'
          type='white'
        />
      </div>
      <Image
        src='tb-logo.svg'
        alt="Unlock Your Brand's Potential Today"
        height={300}
        width={300}
      />
    </div>
  );
}

export function ServiceCarousel() {
  return (
    <div className='my-14 lg:w-[900px] md: sm:w-[600px] xl:flex xl:justify-center'>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className=''>
          {serviceList.map((service) => {
            return (
              <CarouselItem
                key={service}
                className='basis-auto'
              >
                <Service serviceName={service} />
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

export default function Home() {
  return (
    <div className='h-auto'>
      <Jumbotron
        img={{ src: "/assets/JumboDes.svg", width: 764, height: 443, alt: "Think Different - Thought Bubbles" }}
        heading='Think Different'
        subheading='Take the next step and try different'
        body='Est sint laboris ut nisi amet velit cillum fugiat deserunt. Labore id quis irure irure consectetur esse. Occaecat Lorem do labore minim dolor qui occaecat laborum Lorem labore veniam reprehenderit ex cupidatat mollit. Qui est ipsum ullamco ullamco voluptate non. Consequat ea anim ea velit qeo'
      />
      <div className='mt-16 flex flex-col items-center'>
        <Title
          heading="We're your brand's best friend"
          subheading="We're the crew that turns brand dreams into reality. Explore our services - we're the wingmen your brand can't do without!"
        />
        <ServiceCarousel />
      </div>

      <OurWork />
      {/* <CTA /> */}

      <FAQ />
    </div>
  );
}
