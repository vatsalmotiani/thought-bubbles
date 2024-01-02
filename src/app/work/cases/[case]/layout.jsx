"use client";
import { usePathname } from "next/navigation";
import { findCase } from "@/data/caseList";
import { BackButton } from "./BackButton";
import { Banner } from "./Banner";
import { Navigation } from "./Navigation";
import { RelatedCases } from "./RelatedCases";

export default function CaseLayout({ children, params }) {
  const slug = params.case;
  const { id, img, name, category, client, body, metrics, objective } = findCase(slug);
  const pathname = usePathname();

  return (
    <div className='flex flex-col items-center pb-14'>
      <div className='flex flex-col w-5/6'>
        <div className='pt-12 pb-8'>
          <BackButton />
        </div>
        <Banner
          name={name}
          category={category}
          img={img}
          client={client}
        />
        <div className='flex flex-col m6-14 '>
          <Navigation
            name={name}
            pathname={pathname}
          />
          <hr className='my-8 border-1 w-full border-neutral-200' />
        </div>

        {children}
        <hr className='my-8 border-1  border-neutral-200' />
        <RelatedCases name={name} />
      </div>
    </div>
  );
}
