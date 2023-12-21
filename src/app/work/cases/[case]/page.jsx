import Image from "next/image";
import { findCase } from "@/data/caseList";

export function GallerySec({ img, name }) {
  return (
    <div className='flex flex-col bg-tb-black w-full items-center my-14'>
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
    </div>
  );
}

export function Metrics({ metrics }) {
  return metrics.map((m) => {
    return (
      <div
        key={m.metric}
        className='flex flex-col me-24'
      >
        <p className=' text-tb-black  font-medium'>{m.metric}</p>
        <p className=' text-tb-body'>{m.value}</p>
      </div>
    );
  });
}

export function Paragraph({ heading, body }) {
  return (
    <div className='flex flex-col'>
      {heading && <p className='font-poppins text-tb-black font-medium text-lg pb-2'>{heading}</p>}
      <p className='  w-[720px] max-w-full mb-8'>{body}</p>
    </div>
  );
}

export default function CasePage({ params }) {
  const slug = params.case;
  const caseFound = findCase(slug);

  return (
    <div className='flex flex-wrap'>
      <Paragraph
        heading='Objective'
        body={caseFound.objective}
      />
      <Paragraph
        heading='Description'
        body={caseFound.body}
      />

      {/* </div> */}

      {/* <div className='flex flex-col w-1/2'>
        <div className='flex py-8'>{caseFound.metrics && <Metrics metrics={caseFound.metrics} />}</div>
      </div> */}

      {/* <GallerySec
        img={img}
        name={name}
      /> */}
    </div>
  );
}
