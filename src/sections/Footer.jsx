import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "react-feather"; // ICONS
// FONT

export default function Footer() {
  return (
    <div className='h-96 bg-white flex flex-col justify-between px-20 py-14 items-center'>
      <div className='flex justify-between pb-8 w-2/3'>
        <Image
          width='187'
          height='0'
          sizes='100vw'
          className='h-auto'
          src='/tb-logo.svg'
          alt='Thought Bubbles Logo'
        />
        <div className=' flex flex-col '>
          <p className='text-tb-black'>Services</p>
          <p className='text-tb-body hover:text-tb-blue duration-300'>Digital Marketing</p>
          <p className='text-tb-body hover:text-tb-blue duration-300'>Copywriting</p>
          <p className='text-tb-body hover:text-tb-blue duration-300'>Branding</p>
          <p className='text-tb-body hover:text-tb-blue duration-300'>Social Media</p>
          <p className='text-tb-body hover:text-tb-blue duration-300'>Production</p>
        </div>
        <div className=' text-tb-black flex flex-col'>
          <Link
            href='/'
            className='hover:text-tb-blue  duration-300 '
          >
            Home
          </Link>
          <Link
            href='/about'
            className='hover:text-tb-blue  duration-300 '
          >
            About
          </Link>
          <Link
            href='/work/all'
            className='hover:text-tb-blue  duration-300 '
          >
            Work
          </Link>
          <Link
            href='/careers'
            className='hover:text-tb-blue  duration-300 '
          >
            Careers
          </Link>
          <Link
            href='/contact-us'
            className='hover:text-tb-blue  duration-300 '
          >
            Contact Us
          </Link>
        </div>
      </div>
      <span className='w-2/3 '>
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
