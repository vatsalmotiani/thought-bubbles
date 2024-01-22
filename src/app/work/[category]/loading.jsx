import { Skeleton } from "@/components/ui/skeleton";
import caseList from "@/data/caseList";

export default function Loading() {
  const skeletonSize = [1, 2, 3, 4];

  return (
    <>
      <div className='flex flex-wrap justify-center xl:w-full '>
        {skeletonSize.map((item, index) => (
          <div
            key={index}
            className='mx-4 md:mb-2 mt-8'
          >
            <span className='flex flex-col'>
              <Skeleton className='h-[400px] w-[600px]' />
              <Skeleton className='mt-4 h-[60px] w-[600px]' />
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
