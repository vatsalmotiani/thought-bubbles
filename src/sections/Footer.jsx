import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "react-feather"; // ICONS
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

export default function Footer() {
  return (
    <div className='h-72 bg-white flex flex-col justify-between px-20 py-10 items-center'>
      <div className='flex justify-between pb-8 w-2/3'>
        <Image
          height={89}
          width={187}
          src='/tb-logo.svg'
          alt='Thought Bubbles Logo'
        />

        <div className=''>
          <p className='text-lg'>Work</p>
          <p className='text-base'>XYZ</p>
          <p className='text-base'>XYZ</p>
          <p className='text-base'>XYZ</p>
        </div>
        <div className=''>
          <p className='text-lg'>Work</p>
          <p className='text-base'>XYZ</p>
          <p className='text-base'>XYZ</p>
          <p className='text-base'>XYZ</p>
        </div>
      </div>
      <span className='w-2/3'>
        <hr />
        <div className='flex pt-8 '>
          <Link href='https://www.instagram.com/thoughtbubbles_/'>
            <Instagram
              color='gray'
              className='me-8'
            />
          </Link>
          <Link href='https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290?original_referer=https%3A%2F%2Fwww.google.com%2F'>
            <Linkedin
              color='gray'
              className='me-8'
            />
          </Link>
          <Link href='/'>
            <Facebook
              color='gray'
              className='me-8 '
            />
          </Link>
          {/* <Image
            src='/assets/instagram.svg'
            alt='Instagram'
            height={24}
            width={24}
            className='me-6 '
          />
          <Image
            src='/assets/linkedin.svg'
            alt='Instagram'
            height={24}
            width={24}
            className='me-6'
          />
          <Image
            src='/assets/facebook.svg'
            alt='Instagram'
            height={24}
            width={24}
            className='me-6'
          /> */}
        </div>
      </span>
    </div>
  );
}
