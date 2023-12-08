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

const Title = ({ sectionName, heading = "Heading", subheading = "Subheading Text" }) => {
  return (
    <div className='flex flex-col items-center text-center '>
      <span className=' max-w-4xl'>
        <p className={`${caveat.className} lowercase text-tb-blue text-2xl font-bold `}>{sectionName}</p>
        <p className={`${poppins.className} text-tb-black text-2xl font-medium py-4`}>{heading}</p>
        <p className={`${noto.className} text-gray-500 leading-6`}>{subheading}</p>
      </span>
    </div>
  );
};

export default Title;
