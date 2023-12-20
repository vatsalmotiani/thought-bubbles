import Button from "@/components/Button";
import Image from "next/image";
import { findCase } from "@/data/caseList";
import Link from "next/link";
import { ArrowLeft } from "react-feather"; // ICONS

export default function CasePage({ params }) {
  const slug = params.case;
  const { id, img, name, category, body, metrics, objective } = findCase(slug);

  return (
    <div className='flex flex-col items-center pb-14'>
      <div className='flex flex-col'>
        <div className='pt-12 pb-8'>
          {/* <Button
            link='/work/all'
            content='Back'
            type='white'
          /> */}
          <Link
            href='/work/all'
            className='text-gray-500 hover:text-gray-600 duration-300 flex'
          >
            <ArrowLeft className='pe-2' />
            Back
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
    </div>
  );
}
