import Title from "@/components/Title";
import { TitleBold } from "@/components/Title";
import serviceList from "@/data/services";
import CategoryNavigation from "./CategoryNavigation";
import { JumboCase } from "@/components/Jumbotron";
import DropDownServices from "./DropDownServices";

export default function CategoryLayout({ children }) {
  const banner = {
    animate: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.9,
      },
    },
  };
  return (
    <>
      {children}
      {/* <div
        id='top'
        className='mb-8 sm:mb-10 md:mb-14 mt-4 sm:mt-6 md:mt-8 mx-2 sm:mx-4 md:mx-8 lg:mx-14'
      >
        <JumboCase img='/assets/caseVert.jpg' />
        <TitleBold
          sectionName='Our Work'
          heading='Case Studies'
          subheading='Exploring Diverse Case Studies: Discover our Multifaceted Advertising Campaigns'
        />

        <div className='flex flex-col items-start md:items-center gap-4 sm:gap-6'>
          <DropDownServices services={serviceList} />
          <CategoryNavigation services={serviceList} />

          <CategoryNavigation services={serviceList} />

          {children}
        </div>
      </div> */}
    </>
  );
}
