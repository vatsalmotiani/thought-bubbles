"use client";
import { slugify } from "@/lib/utils";
import Title from "@/components/Title";
import Link from "next/link";
import serviceList from "@/data/services";
import { usePathname } from "next/navigation";

export function NavigationService({ services, pathname }) {
  {
    return (
      <>
        <Link
          href='/work/all'
          className={`text-tb-black font-poppins font-medium text-lg me-8 px-4 py-2  duration-300 ${pathname === "/work/all" ? "bg-neutral-200 rounded-2xl  border-2 border-neutral-200 " : "hover:text-tb-body"}`}
        >
          All
        </Link>
        {services.map((service, i) => {
          return (
            <Link
              href={`/work/${slugify(service)}`}
              key={i}
              className={`text-tb-black font-poppins font-medium text-lg me-8 px-4 py-2  duration-300 ${pathname === `/work/${slugify(service)}` ? "bg-neutral-200 rounded-2xl  border-2 border-neutral-200 " : "hover:text-tb-body"}`}
            >
              {service}
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
    <div className=''>
      {/* <Jumbotron img={{ src: "/assets/JumboDes2.svg", width: 300, height: 181, alt: "Think Different - Thought Bubbles" }} /> */}
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
