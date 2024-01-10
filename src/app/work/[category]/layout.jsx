import Title from "@/components/Title";
import serviceList from "@/data/services";
import CategoryNavigation from "./CategoryNavigation";
import { JumboCase } from "@/components/Jumbotron";

export default function CategoryLayout({ children }) {
  return (
    <>
      <JumboCase img='/assets/dummy1.jpg' />
      <div className='my-14'>
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
