import Image from "next/image";
import { Caveat, Poppins, Noto_Sans } from "next/font/google";

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
export default function CasePreview({ img, name, category }) {
  return (
    <div>
      <Image
        src={img}
        height={300}
        width={350}
        alt={name}
        className='my-3 border-b-8 duration-300 rounded-3xl border-sky-300 hover:border-tb-blue drop-shadow-sm'
      />
      <p className={`${poppins.className} ps-3  text-tb-black text-bold text-lg`}>{name}</p>
      <p className={`${noto.className} ps-3 text-gray-500`}>{category.join(", ")}</p>
    </div>
  );
}
