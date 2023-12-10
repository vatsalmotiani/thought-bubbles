import Image from "next/image";
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
export default function CaseLarge({ img, name, body, category, metrics }) {
  return (
    <div className='flex'>
      <Image
        src={img}
        height={430}
        width={502}
        alt={name}
        className='border-b-8 duration-300 rounded-3xl border-sky-300 hover:border-tb-blue drop-shadow-sm'
      />
      <div className='ms-12 flex flex-col w-1/4'>
        <p className={`${noto.className} text-gray-500`}>{category.join(", ")}</p>
        <p className={`${poppins.className} py-4  text-tb-black text-bold text-4xl`}>{name}</p>
        <p className={`${noto.className} text-base py-4 text-gray-500`}>{body}</p>

        <div className='flex py-5'>
          <div className='flex flex-col me-12'>
            <p className={`${noto.className}  text-tb-black text-lg font-medium`}>Metric</p>
            <p className={`${noto.className}  text-gray-500`}>Value</p>
          </div>
          <div className='flex flex-col me-12'>
            <p className={`${noto.className}  text-tb-black text-lg font-medium`}>Metric</p>
            <p className={`${noto.className}  text-gray-500`}>Value</p>
          </div>
        </div>
        <Button type='white' />
      </div>
    </div>
  );
}
