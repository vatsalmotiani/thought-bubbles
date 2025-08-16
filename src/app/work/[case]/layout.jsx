import { BackButton } from "./BackButton";

export default function CaseLayout({ children }) {
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
