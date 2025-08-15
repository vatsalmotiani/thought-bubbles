"use client";
import { usePathname } from "next/navigation";
import HomepageLoader from "./HomepageLoader";

export default function HomepageLoaderWrapper() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return isHomepage ? <HomepageLoader /> : null;
}
