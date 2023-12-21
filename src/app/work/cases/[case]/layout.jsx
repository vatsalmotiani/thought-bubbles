"use client";
import { usePathname } from "next/navigation";
import { findCase } from "@/data/caseList";
import { ArrowLeft } from "react-feather"; // ICONS
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/lib/utils";
import CaseSmall from "@/components/CaseSmall";
import caseList from "@/data/caseList";

export function BackButton() {
  return (
    <Link
      href='/work/all'
      className='text-gray-500 hover:text-gray-600 duration-300 flex'
    >
      <ArrowLeft className='pe-2' />
      All Cases
    </Link>
  );
}

export function Banner({ name, category, img, client }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col me-14 w-1/2'>
        <p className='font-poppins text-tb-black text-6xl font-medium '>{name}</p>
        <p className='text-lg  text-tb-body pt-4'>{category.join(", ")}</p>
        <div className='flex flex-col mt-14'>
          <Image
            src={client.logo}
            alt={client.name}
            height='0'
            width='0'
            sizes='100vw'
            className='h-auto w-[120px]'
          />
          <p className=' mt-4 text-tb-body text-base'>{client.name}</p>
        </div>
        {/* <div className='flex mt-8'>
          {category.map((c, i) => (
            <p
              key={i}
              className='rounded-2xl text-gray-600 bg-white me-2 w-fit py-2 px-4 border-gray-600 border-1'
            >
              {c}
            </p>
          ))}
        </div> */}
      </div>
      <div className='grid py-8 w-1/2'>
        <Image
          src={img}
          alt={name}
          height='0'
          width='0'
          sizes='100vw'
          className='rounded-4xl h-[430px] w-[500px] z-10  col-start-1 row-start-1'
        />
        <div className='col-start-1 row-start-1 bg-gradient-to-r from-sky-300 to-tb-blue ms-4 mt-4 rounded-4xl h-[430px] w-[500px]' />
      </div>
    </div>
  );
}

export function Navigation({ name, pathname }) {
  return (
    <div className='flex items-center'>
      <Link
        href={`/work/cases/${slugify(name)}`}
        className={`font-poppins font-medium text-lg me-14 duration-300 ${pathname === `/work/cases/${slugify(name)}` ? "bg-neutral-200 rounded-2xl px-4 py-2 border-2 border-neutral-200 " : "text-tb-black  hover:text-neutral-500"}`}
      >
        About
      </Link>
      <Link
        href={`/work/cases/${slugify(name)}/gallery`}
        className={`font-poppins font-medium text-lg me-14 duration-300 ${pathname === `/work/cases/${slugify(name)}/gallery` ? "bg-neutral-200 rounded-2xl px-4 py-2 border-2 border-neutral-200 " : "text-tb-black  hover:text-neutral-500"}`}
      >
        Gallery
      </Link>
    </div>
  );
}

export function RelatedCases() {
  return (
    <div className='flex flex-col'>
      <p className='font-poppins text-tb-black text-2xl  pb-4'>Checkout Other Case Studies</p>
      <div className='flex'>
        {caseList
          .filter((c) => c.name !== name)
          .map((filteredCase) => {
            return (
              <span
                key={filteredCase.id}
                className='me-8'
              >
                <CaseSmall caseStudy={filteredCase} />
              </span>
            );
          })}
      </div>
    </div>
  );
}

export default function CaseLayout({ children, params }) {
  const slug = params.case;
  const { id, img, name, category, client, body, metrics, objective } = findCase(slug);
  const pathname = usePathname();

  return (
    <section>
      <div className='flex flex-col items-center pb-14'>
        <div className='flex flex-col w-4/6'>
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
            <hr className='my-8 border-1  border-gray-300' />
          </div>

          {children}
          <hr className='my-8 border-1  border-gray-300' />
          <RelatedCases />
        </div>
      </div>
    </section>
  );
}
