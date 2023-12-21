"use client";
import { slugify } from "@/lib/utils";
import Title from "@/components/Title";
import Link from "next/link";
import serviceList from "@/data/services";
import { usePathname } from "next/navigation";

export function NavigationService({ services, pathname }) {
  {
    return services.map((service, i) => {
      return (
        <Link
          href={`/work/${slugify(service)}`}
          key={i}
          className={`font-poppins font-medium text-lg me-14 duration-300 ${pathname === `/work/${slugify(service)}` ? "bg-neutral-200 rounded-2xl px-4 py-2 border-2 border-neutral-200 " : "text-tb-black  hover:text-neutral-500"}`}
        >
          {service}
        </Link>
      );
    });
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
