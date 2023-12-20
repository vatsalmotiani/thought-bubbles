import Image from "next/image";
import Link from "next/link";
import CaseSmall from "@/components/CaseSmall";
import caseList from "@/data/caseList";
import { findCase } from "@/data/caseList";
import { ArrowLeft } from "react-feather"; // ICONS

export default function CasePage({ params }) {
  const slug = params.case;
  const { id, img, name, category, body, metrics, objective } = findCase(slug);

  return (
    <div className='flex flex-col items-center pb-14'>
      <div className='flex flex-col w-4/6'>
        <div className='pt-12 pb-8'>
          <Link
            href='/work/all'
            className='text-gray-500 hover:text-gray-600 duration-300 flex'
          >
            <ArrowLeft className='pe-2' />
            All Cases
          </Link>
        </div>

        <p className={`font-poppins text-tb-black text-3xl font-medium pb-4`}>{name}</p>
        <p className={`font-noto text-tb-body`}>{category.join(", ")}</p>
        <div className='grid py-8'>
          <Image
            src={img}
            alt={name}
            height='0'
            width='0'
            sizes='100vw'
            className='rounded-4xl h-[484px] w-[1021px] z-10  col-start-1 row-start-1'
          />
          <div className='col-start-1 row-start-1 bg-tb-blue ms-14 mt-14 rounded-4xl h-[484px] w-[1021px] ' />
        </div>
        <p className={`font-poppins text-tb-black text-2xl  py-4`}>Objective</p>
        <p className={`font-poppins  text-tb-body text-base`}>{objective}</p>
      </div>

      {/* GALLERY */}
      <div className='flex flex-col bg-tb-black w-full items-center my-14'>
        <div className='flex flex-col w-4/6 py-14'>
          <p className={`font-poppins text-white text-2xl  pb-8`}>Gallery</p>

          <Image
            src={img}
            alt={name}
            height='0'
            width='0'
            sizes='100vw'
            className='rounded-4xl h-[484px] w-[1021px] z-10  col-start-1 row-start-1'
          />
        </div>
      </div>
      <div className='flex flex-col w-4/6'>
        <p className={`font-poppins  text-tb-body text-base`}>{body}</p>
        <p className={`font-poppins text-tb-black text-2xl  py-4`}>Checkout Other Case Studies</p>
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
    </div>
  );
}
