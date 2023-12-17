import Image from "next/image";
import Link from "next/link";
import { Caveat, Poppins, Noto_Sans } from "next/font/google";
import Button from "./Button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function CaseLarge({ img, name, body, category, metrics, link = "/" }) {
  return (
    <div className='flex'>
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
        <p className={`${noto.className} text-gray-500 pb-2`}>{category.join(", ")}</p>
        <p className={`${poppins.className}  text-tb-black text-bold text-3xl`}>{name}</p>
        <p className={`${noto.className} py-6 text-base  text-gray-500`}>{body}</p>

        <div className='flex pb-4'>
          {metrics
            ? metrics.map((m) => {
                return (
                  <div
                    key={m.metric}
                    className='flex flex-col me-8'
                  >
                    <p className={`${noto.className}  text-tb-black  font-medium`}>{m.metric}</p>
                    <p className={`${noto.className}  text-gray-500`}>{m.value}</p>
                  </div>
                );
              })
            : null}
        </div>
        <Button
          type='white'
          href={link}
        />
      </div>
    </div>
  );
}
