// TODO: FOOTER CTA Design

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Facebook, Mail, MapPin } from "react-feather"; // ICONS
import Button from "./Button";

export default function Footer() {
  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },

    {
      name: "Work",
      url: "/work/all",
      parent: "/work",
    },
    {
      name: "Contact Us",
      url: "/contact-us",
    },
  ];

  return (
    <footer className='border-t-2 border-neutral-100 h-auto bg-white flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-6 sm:py-8 lg:py-14 items-center'>
      <div className='flex flex-col md:flex-row justify-between pb-6 sm:pb-8 w-full gap-6 md:gap-8'>
        <Image
          width='0'
          height='0'
          sizes='100vw'
          className='w-[120px] sm:w-[140px] h-auto'
          src='/tb-logo.svg'
          alt='Thought Bubbles Logo'
        />
        {/* Pages */}
        <div className='hidden lg:flex text-tb-black flex-col'>
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.name}
                className='hover:text-tb-blue duration-300 mb-2'
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {/* INFO */}
        <div className='text-tb-black flex flex-col text-sm sm:text-base'>
          <div className='flex mb-3 sm:mb-4 items-start'>
            <Mail size={16} className='sm:w-5 sm:h-5 mt-0.5 sm:mt-0 flex-shrink-0' />
            <p className='ms-2 leading-relaxed'>manoj.motiani@thoughtbubbles.in</p>
          </div>
          <div className='flex mb-3 sm:mb-4 items-start'>
            <MapPin size={16} className='sm:w-5 sm:h-5 mt-0.5 sm:mt-0 flex-shrink-0' />
            <p className='ms-2 leading-relaxed'>
              A-6, 1st Floor, My Mother&apos;s society,
              <br /> RC Marg, Chembur, Mumbai-40071
            </p>
          </div>
        </div>
      </div>
      <div className='w-full border-t-2 border-neutral-100'>
        <div className='flex pt-6 sm:pt-8 justify-center sm:justify-start'>
          <Link href='https://www.instagram.com/thoughtbubbles_/' className='hover:scale-110 transition-transform'>
            <Instagram
              color='gray'
              size={20}
              className='me-6 sm:me-8'
            />
          </Link>
          <Link href='https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290?original_referer=https%3A%2F%2Fwww.google.com%2F' className='hover:scale-110 transition-transform'>
            <Linkedin
              color='gray'
              size={20}
              className='me-6 sm:me-8'
            />
          </Link>
          <Link href='/' className='hover:scale-110 transition-transform'>
            <Facebook
              color='gray'
              size={20}
              className='me-6 sm:me-8'
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
export function FooterCTA() {
  return (
    <footer className='border-t-2 border-neutral-100 h-auto bg-white flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-20 py-6 sm:py-8 items-center'>
      <Button
        type='blue'
        content="Let's Get in Touch"
        link='/contact-us'
      />
      <div className='flex flex-col items-center py-6 sm:py-8 w-full'>
        <Image
          width='200'
          height='100'
          // sizes='100vw'
          // className='w-[140px] h-auto'
          src='/tb-logo.svg'
          alt='Thought Bubbles Logo'
          className='w-[120px] sm:w-[140px] md:w-[200px] h-auto'
        />
      </div>
      {/* <div className='w-full border-t-2 border-neutral-100'> */}
      <div className='flex pt-6 sm:pt-8 justify-center'>
        <Link href='https://www.instagram.com/thoughtbubbles_/' className='hover:scale-110 transition-transform'>
          <Instagram
            color='gray'
            size={20}
            className='me-6 sm:me-8'
          />
        </Link>
        <Link href='https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290?original_referer=https%3A%2F%2Fwww.google.com%2F' className='hover:scale-110 transition-transform'>
          <Linkedin
            color='gray'
            size={20}
            className='me-6 sm:me-8'
          />
        </Link>
        <Link href='/' className='hover:scale-110 transition-transform'>
          <Facebook
            color='gray'
            size={20}
            className='me-6 sm:me-8'
          />
        </Link>
      </div>
      {/* </div> */}
    </footer>
  );
}
