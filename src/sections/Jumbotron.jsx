import Image from "next/image";
import { Caveat, Poppins, Noto_Sans } from "next/font/google"; // FONT

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

export default function Jumbotron({ img, heading, subheading, body }) {
  return (
    // <div className={`flex mt-20 mb-60 justify-center items-center`}>
    //   <Image
    //     src={img.src}
    //     alt={img.alt}
    //     height={img.height}
    //     width={img.width}
    //     className='mx-20'
    //   />
    //   <div className={`w-1/3 `}>
    //     {/* <p className={` ${caveat.className}  text-tb-blue text-9xl font-bold w-1/2 drop-shadow-sm mb-8`}>{heading}</p> */}
    //     <p className={` ${poppins.className} text-tb-dark text-2xl  py-4 `}>{subheading}</p>
    //     <p className={` ${noto.className} text-gray-500 text-lg `}>{body}</p>
    //   </div>
    // </div>
    <div className={`flex flex-col mt-20 mb-60 justify-center items-center`}>
      <Image
        src={img.src}
        alt={img.alt}
        height={img.height}
        width={img.width}
        className='mx-20 mb-20'
      />
      <div className={`w-2/3 2xl:w-1/3`}>
        {/* <p className={` ${caveat.className}  text-tb-blue text-9xl font-bold w-1/2 drop-shadow-sm mb-8`}>{heading}</p> */}
        <p className={` ${poppins.className} text-tb-dark text-2xl  py-4 `}>{subheading}</p>
        <p className={` ${noto.className} text-gray-500 text-lg `}>{body}</p>
      </div>
    </div>
  );
}
