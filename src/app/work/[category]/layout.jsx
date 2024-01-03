"use client";
import { slugify } from "@/lib/utils";
import Title from "@/components/Title";
import Link from "next/link";
import serviceList from "@/data/services";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function NavigationService({ services, pathname }) {
  {
    const serviceClass = "text-tb-black font-poppins font-medium mx-2 px-4 py-2 duration-300";
    const activeServiceClass = "bg-neutral-100 rounded-2xl  border-2 border-neutral-100 ";

    return (
      <>
        <Link
          href='/work/all'
          className={`${serviceClass} ${pathname === "/work/all" ? `${activeServiceClass}` : "hover:text-tb-body"}`}
        >
          <motion.div whileHover={{ scale: 0.96 }}>All</motion.div>
        </Link>
        {services.map((service, i) => {
          return (
            <Link
              href={`/work/${slugify(service)}`}
              key={i}
              className={`${serviceClass} ${pathname === `/work/${slugify(service)}` ? `${activeServiceClass}` : "hover:text-tb-body"}`}
            >
              <motion.div whileHover={{ scale: 0.96 }}>{service}</motion.div>
            </Link>
          );
        })}
      </>
    );
  }
}

export default function CategoryLayout({ children, params }) {
  const cat = params.category;
  const pathname = usePathname();
  return (
    <div className='mt-4'>
      <Title
        heading='Case Studies'
        subheading='Exploring Diverse Case Studies: Discover our Multifaceted Advertising Campaigns'
      />
      <div className='flex my-14 justify-center items-center'>
        <NavigationService
          services={serviceList}
          pathname={pathname}
        />
      </div>
      {children}
    </div>
  );
}
