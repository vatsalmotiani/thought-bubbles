"use client";
import { usePathname } from "next/navigation";
import CaseLarge from "@/components/CaseLarge";
import Jumbotron from "@/sections/Jumbotron";
import Link from "next/link";
import { slugify, slugifyList } from "@/lib/utils";
import Title from "@/components/Title";
import caseList from "@/data/caseList";
import serviceList from "@/data/services";

export default function WorkCase({ params }) {
  const cat = params.category;
  const pathname = usePathname();
  return (
    <div className=''>
      {/* <Jumbotron img={{ src: "/assets/JumboDes2.svg", width: 300, height: 181, alt: "Think Different - Thought Bubbles" }} /> */}
      <Title
        heading='Case Studies'
        subheading='Exploring Diverse Case Studies: Discover our Multifaceted Advertising Campaigns'
      />
      <div className='flex my-14 justify-center items-center'>
        {serviceList.map((service, i) => {
          return (
            <Link
              href={`/work/${slugify(service)}`}
              key={i}
              className={`font-poppins font-medium text-lg px-8 ${pathname === `/work/${slugify(service)}` ? "text-tb-blue" : "text-tb-black duratiion-300 hover:text-neutral-500"}`}
            >
              {service}
            </Link>
          );
        })}
      </div>
      {/* DISPLAYING DYNAMIC CASES */}
      <div className='flex flex-col items-center'>
        {cat !== "all"
          ? caseList
              .filter((caseStudy) => slugifyList(caseStudy.category).includes(cat))
              .map((filteredCase) => {
                return (
                  <CaseLarge
                    key={filteredCase.id}
                    caseStudy={filteredCase}
                  />
                );
              })
          : caseList.map((filteredCase) => {
              return (
                <CaseLarge
                  key={filteredCase.id}
                  caseStudy={filteredCase}
                />
              );
            })}
      </div>
      .
    </div>
  );
}
