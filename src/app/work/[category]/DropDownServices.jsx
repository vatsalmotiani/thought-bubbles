"use client";
import { usePathname } from "next/navigation";
import { slugify, unslugify } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "react-feather";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function DropDownServices({ services }) {
  const pathname = usePathname();
  const serviceClass = "py-2 mx-2 text-neutral-500 font-medium xl:mx-2 duration-300 whitespace-nowrap";
  const activeServiceClass = "text-tb-black";

  return (
    <div className='ms-4 mt-8 md:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger className='text-tb-black flex align-middle items-center ps-6 pe-4 py-3 font-medium outline-none bg-neutral-100 rounded-xl border-neutral-200'>
          <span className='me-2'>{unslugify(pathname)}</span> <ChevronDown size={18} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className='mt-2'>
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
