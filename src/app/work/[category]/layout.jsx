import Title from "@/components/Title";
import serviceList from "@/data/services";
import CategoryNavigation from "./CategoryNavigation";

export default function CategoryLayout({ children }) {
  return (
    <div className='mt-4'>
      <Title
        heading='Case Studies'
        subheading='Exploring Diverse Case Studies: Discover our Multifaceted Advertising Campaigns'
      />
      <div className='flex flex-col items-center'>
        <CategoryNavigation services={serviceList} />
        {children}
      </div>
    </div>
  );
}
