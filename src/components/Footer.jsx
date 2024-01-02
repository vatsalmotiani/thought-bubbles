import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Facebook, Mail, MapPin } from "react-feather"; // ICONS

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
    <footer className='border-t-2 border-gray-100 h-auto bg-white flex flex-col justify-between px-8 md:px-20 py-8 lg:py-14 items-center'>
      <div className='flex flex-col md:flex-row justify-between pb-8 w-full'>
        <Image
          width='0'
          height='0'
          sizes='100vw'
          className='w-[140px] h-auto'
          src='/tb-logo.svg'
          alt='Thought Bubbles Logo'
        />
        {/* Pages */}
        <div className='hidden lg:flex  text-tb-black  flex-col'>
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.name}
                className='hover:text-tb-blue  duration-300 '
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {/* INFO */}
        <div className='mt-8 lg:mt-0 text-tb-black flex flex-col'>
          <div className='flex mb-4 items-center'>
            <Mail />
            <p className='ms-2'>manoj.motiani@thoughtbubbles.in</p>
          </div>
          <div className='flex mb-4 items-center'>
            <MapPin />
            <p className='ms-2'>
              A-6, 1st Floor, My Mother&apos;s society,
              <br /> RC Marg, Chembur, Mumbai-40071
            </p>
          </div>
        </div>
      </div>
      <div className='w-full border-t-2 border-gray-100'>
        <div className='flex pt-8'>
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
        </div>
      </div>
    </footer>
  );
}
