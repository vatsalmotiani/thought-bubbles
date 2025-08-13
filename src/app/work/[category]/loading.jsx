import { Skeleton } from "@/components/ui/skeleton";
import caseList from "@/data/caseList";

export default function Loading() {
  const skeletonSize = [1, 2, 3, 4];

  return (
    <>
      <div className='flex flex-wrap justify-center xl:w-full px-4 sm:px-6'>
        {skeletonSize.map((item, index) => (
          <div
            key={index}
            className='w-full sm:w-auto mx-2 sm:mx-4 md:mb-2 mt-4 sm:mt-6 md:mt-8'
          >
            <span className='flex flex-col'>
              <Skeleton className='h-[300px] sm:h-[350px] md:h-[400px] w-full sm:w-[500px] md:w-[600px] rounded-lg sm:rounded-xl' />
              <Skeleton className='mt-3 sm:mt-4 h-[40px] sm:h-[50px] md:h-[60px] w-full sm:w-[500px] md:w-[600px] rounded-lg' />
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
