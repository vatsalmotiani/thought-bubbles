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
      <div
        id='top'
        className='mb-14 mt-8 mx-4 md:mx-14'
      >
        {/* <JumboCase img='/assets/caseVert.jpg' /> */}
        <TitleBold
          sectionName='Our Work'
          heading='Case Studies'
          subheading='Exploring Diverse Case Studies: Discover our Multifaceted Advertising Campaigns'
        />

        <div className='flex flex-col items-start md:items-center'>
          <DropDownServices services={serviceList} />
          <CategoryNavigation services={serviceList} />

          {/* <CategoryNavigation services={serviceList} /> */}

          {children}
        </div>
      </div>
    </>
  );
}
