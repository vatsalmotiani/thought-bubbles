import { BackButton } from "./BackButton";

export default function CaseLayout({ children }) {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Back button container with proper spacing */}
        <div className='mt-8 w-full py-6 md:py-8'>
          <div className='max-w-[200px]'>
            <BackButton />
          </div>
        </div>

        {/* Main content */}
        <div className='w-full'>{children}</div>
      </div>
    </div>
  );
}
