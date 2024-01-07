import Title from "@/components/Title";
import Service from "@/components/Service";
import CaseCard from "@/components/CaseCard";
import Jumbotron from "@/components/Jumbotron";
import serviceList from "@/data/services";
import Button from "@/components/Button";
import caseList from "@/data/caseList";
import Image from "next/image";
import { FAQ } from "../components/FAQ";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function ServiceCarousel() {
  return (
    <div className='w-5/6 md:w-2/3 xl:w-max flex items-center my-8 sm:mt-14 text-center overflow-x-auto pb-4'>
      {serviceList.map((service) => {
        return (
          <Service
            key={service}
            serviceName={service}
          />
        );
      })}
    </div>
  );
}

export function OurWork() {
  return (
    <div className='bg-tb-bg flex justify-center py-14'>
      <div className='w-5/6 flex flex-col items-center'>
        <Title
          sectionName='Our Work'
          heading='Helping Brands Break out of their Bubble'
          subheading="Here's where the magic happens! Get an inside look at our success stories—a mix of creativity, problem-solving, and awesome collaborations with our amazing clients."
        />
        <div className='my-8 md:my-14 w-full'>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className='mx-8'
          >
            <CarouselContent>
              {caseList.map((filteredCase) => {
                return (
                  <CarouselItem
                    key={filteredCase.id}
                    className='basis-full sm:basis-1/2 lg:basis-1/4 flex justify-center'
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

        <Button
          link='/work/all'
          type='blue'
          content='View All'
        />
      </div>
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
