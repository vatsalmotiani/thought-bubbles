"use client";
import { usePathname } from "next/navigation";
import { slugify, unslugify } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "react-feather";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function DropDownServices({ services }) {
  const pathname = usePathname();
  const serviceClass = "py-2 mx-2 text-neutral-500 font-medium xl:mx-2 duration-300 whitespace-nowrap text-sm sm:text-base";
  const activeServiceClass = "text-tb-black";

  return (
    <div className='ms-2 sm:ms-4 mt-4 sm:mt-6 md:mt-8 md:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger className='text-tb-black flex align-middle items-center ps-4 sm:ps-6 pe-3 sm:pe-4 py-2 sm:py-3 font-medium outline-none bg-neutral-100 rounded-lg sm:rounded-xl border-neutral-200 text-sm sm:text-base'>
          <span className='me-2'>{unslugify(pathname)}</span> <ChevronDown size={16} className='sm:w-[18px] sm:h-[18px]' />
        </DropdownMenuTrigger>

        <DropdownMenuContent className='mt-2 w-48 sm:w-56'>
          <Link href='/work/all'>
            <DropdownMenuItem>
              <div className={pathname === "/work/all" ? `${activeServiceClass} ${serviceClass}` : `${serviceClass}`}>All</div>
            </DropdownMenuItem>
          </Link>
          {services.map((service, i) => {
            const isActive = pathname === `/work/${slugify(service)}` ? true : false;
            return (
              <Link
                href={`/work/${slugify(service)}`}
                key={i}
              >
                <DropdownMenuItem>
                  <div className={isActive ? `${activeServiceClass} ${serviceClass}` : `${serviceClass}`}>{service}</div>
                </DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
