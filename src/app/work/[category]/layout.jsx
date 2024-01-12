import Title from "@/components/Title";
import serviceList from "@/data/services";
import CategoryNavigation from "./CategoryNavigation";
import { JumboCase } from "@/components/Jumbotron";

export default function CategoryLayout({ children }) {
  return (
    <>
      <div
        id='top'
        className='my-14'
      >
        {/* <JumboCase img='/assets/caseVert.jpg' /> */}
        <Title
          heading='Case Studies'
          subheading='Exploring Diverse Case Studies: Discover our Multifaceted Advertising Campaigns'
        />
        <div className='flex flex-col items-center'>
          <CategoryNavigation services={serviceList} />

          {children}
        </div>
      </div>
    </>
  );
}
