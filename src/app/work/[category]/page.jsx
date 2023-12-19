"use client";
import { usePathname } from "next/navigation";
import CaseLarge from "@/components/CaseLarge";
import Jumbotron from "@/sections/Jumbotron";
import Link from "next/link";
import { slugify, slugifyList } from "@/lib/utils";
import Title from "@/components/Title";

export default function WorkCase({ params }) {
  const serviceList = ["All", "Branding", "Copywriting", "Digital Marketing", "Social Media", "Production", "Logo", "Print"];
  const caseList = [
    {
      id: "1",
      img: "/assets/case0.jpg",
      name: "Inter Times",
      category: ["Branding"],
      body: "Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
      metrics: [
        { metric: "Solid", value: "Gold" },
        { metric: "Copper", value: "Chain" },
      ],
      objective: "Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
    },
    {
      id: "2",
      img: "/assets/case0.jpg",
      name: "Something Else",
      category: ["Digital Marketing"],
      body: "Steve minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
      metrics: [
        { metric: "Olive", value: "Nana" },
        { metric: "Chain", value: "Swerve" },
      ],
      objective: "Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
    },
    {
      id: "3",
      img: "/assets/case0.jpg",
      name: "John Station",
      category: ["Production"],
      body: "Tim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
      metrics: [
        { metric: "Adam", value: "Jacob" },
        { metric: "Man", value: "Elite" },
      ],
      objective: "Lip excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
    },
    {
      id: "4",
      img: "/assets/case0.jpg",
      name: "Multiple",
      category: ["Production", "Copywriting", "Digital Marketing"],
      body: "Tim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
      metrics: [
        { metric: "Adam", value: "Jacob" },
        { metric: "Man", value: "Elite" },
      ],
      objective: "Lip excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
    },
  ];
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
                    img={filteredCase.img}
                    name={filteredCase.name}
                    category={filteredCase.category}
                    body={filteredCase.body}
                    metrics={filteredCase.metrics}
                    link={`/work/cases/${slugify(filteredCase.name)}`}
                  />
                );
              })
          : caseList.map((filteredCase) => {
              return (
                <CaseLarge
                  key={filteredCase.id}
                  img={filteredCase.img}
                  name={filteredCase.name}
                  category={filteredCase.category}
                  body={filteredCase.body}
                  metrics={filteredCase.metrics}
                  link={`/work/cases/${slugify(filteredCase.name)}`}
                />
              );
            })}
      </div>
      .
    </div>
  );
}
