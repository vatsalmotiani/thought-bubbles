// import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { findCase } from "@/data/caseList";
// import { Banner } from "./Banner";
// import { Navigation } from "./Navigation";
// import { NextCase, RelatedCases } from "./RelatedCases";
import { MotionWrap2 } from "@/app/MotionWrap";
import { BackButton } from "./BackButton";

export default function CaseLayout({ children, params }) {
  // const slug = params.case;
  // const { id, img, name, category, client, body, metrics, objective } = findCase(slug);
  // const pathname = usePathname();

  return (
    // <MotionWrap2>
    <div className='flex flex-col items-center pb-14'>
      <div className='flex flex-col w-5/6 '>
        <div className='pt-4 md:pt-12 md:pb-8'>
          <BackButton />
        </div>
        <div className='flex flex-col items-center'>{children}</div>
      </div>
    </div>
    // </MotionWrap2>
  );
}
