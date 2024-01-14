import Title from "@/components/Title";
import Service from "@/components/Service";
import CaseCard from "@/components/CaseCard";
import Jumbotron from "@/components/Jumbotron";
import Button from "@/components/Button";
import caseList from "@/data/caseList";
import Image from "next/image";
import { FAQ } from "../components/FAQ";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import serviceList from "@/data/services";
import clientList from "@/data/clients";

export function ServiceCarousel() {
  return (
    <div className='w-[90%] md:w-2/3 xl:w-max flex items-center my-8  text-center overflow-x-auto pb-4'>
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
      <div className='w-full flex flex-col items-center'>
        <Title
          sectionName='Our Work'
          heading='Helping Brands Break out of their Bubble'
          subheading="Here's where the magic happens! Get an inside look at our success stories—a mix of creativity, problem-solving, and awesome collaborations with our amazing clients."
        />
        <div className='my-8 md:my-14 w-5/6'>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className='mx-8'
          >
            <CarouselContent>
              {caseList
                .filter((item) => item.favourite === true) // only favoutites
                .map((filteredCase) => {
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

export function ClientsSection() {
  return (
    <div className='my-8 md:my-14 flex flex-col items-center'>
      <Title
        heading='Building Bridges Since 2009'
        subheading='Over a decade of forging partnerships, our agency has proudly collaborated with an array of esteemed clients, fostering lasting connections and delivering impactful results.'
      />
      <div className='w-5/6 md:w-2/3 xl:w-max flex items-center mt-8 sm:mt-14 text-center overflow-x-auto pb-4'>
        {clientList
          .filter((c) => c.favourite === true)
          .map((client) => {
            return (
              <Image
                src={client.logo}
                key={client.id}
                width={80}
                height={64}
                alt={client.name}
                className='mx-4'
              />
            );
          })}
      </div>
    </div>
  );
}

export function CTA({ title, img }) {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center px-8 py-8 md:py-14 bg-gradient-to-r from-sky-300 to-tb-blue'>
      <div className='flex flex-col md:me-8'>
        <p className='md:text-xl text-2xl max-w-[720px] leading-normal font-poppins text-white font-semibold'>Unlock Your Brand&apos;s Potential Today asjdkhhkhjkhjasdhjasd daskudkuadhj ahsdhjadh</p>
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
        className='hidden md:block'
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
      <ClientsSection />
      {/* <CTA /> */}
      {/* <FAQ /> */}
    </div>
  );
}
