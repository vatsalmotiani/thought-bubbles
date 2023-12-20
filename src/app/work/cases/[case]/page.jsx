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
    <>
      <p className='font-poppins text-tb-black text-2xl  py-4'>Objective</p>
      <p className='font-poppins  text-tb-body text-base'>{objective}</p>

      <div className='flex py-8'>
        {metrics
          ? metrics.map((m) => {
              return (
                <div
                  key={m.metric}
                  className='flex flex-col me-24'
                >
                  <p className=' text-tb-black  font-medium'>{m.metric}</p>
                  <p className=' text-tb-body'>{m.value}</p>
                </div>
              );
            })
          : null}
      </div>
      {/* GALLERY */}
      {/* <div className='flex flex-col bg-tb-black w-full items-center my-14'>
        <div className='flex flex-col w-4/6 py-14'>
          <p className='font-poppins text-white text-2xl  pb-8'>Gallery</p>

          <Image
            src={img}
            alt={name}
            height='0'
            width='0'
            sizes='100vw'
            className='rounded-4xl h-[484px] w-[1021px] z-10  col-start-1 row-start-1'
          />
        </div>
      </div> */}
      <p className='font-poppins  text-tb-body text-base'>{body}</p>
    </>
  );
}
