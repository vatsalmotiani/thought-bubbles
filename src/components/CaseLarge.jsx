import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

export default function CaseLarge({ img, name, body, category, metrics, link = "/" }) {
  return (
    <div className='flex m-8'>
      <Link href={link}>
        <Image
          src={img}
          height={430}
          width={502}
          alt={name}
          className='border-b-8 duration-300 rounded-3xl border-sky-200 drop-shadow-sm hover:border-tb-blue  hover:drop-shadow-lg'
        />
      </Link>

      <div className='ms-12 flex justify-center flex-col w-1/4'>
        <p className={`font-noto text-tb-body pb-2`}>{category.join(", ")}</p>
        <p className={`font-poppins  text-tb-black text-bold text-3xl`}>{name}</p>
        <p className={`font-noto py-6 text-base  text-tb-body`}>{body}</p>

        <div className='flex pb-4'>
          {metrics
            ? metrics.map((m) => {
                return (
                  <div
                    key={m.metric}
                    className='flex flex-col me-8'
                  >
                    <p className={`font-noto  text-tb-black  font-medium`}>{m.metric}</p>
                    <p className={`font-noto  text-tb-body`}>{m.value}</p>
                  </div>
                );
              })
            : null}
        </div>
        <Button
          type='white'
          link={link}
        />
      </div>
    </div>
  );
}
