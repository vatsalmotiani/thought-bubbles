import Button from "@/components/Button";
import Title from "@/components/Title";
import { AlertTriangle } from "react-feather";
export const metadata = {
  title: { absolute: "Page Not Found" },
};

export default function notFound() {
  return (
    <div className='flex flex-col items-center justify-center h-[600px]'>
      {/* <span className='bg-neutral-200 px-4 py-1 mb-2 rounded-full border-2 border-neutral-300 text-neutral-400'>404 Error</span> */}
      <AlertTriangle />
      <Title
        heading='Page Not Found'
        subheading="Sorry, the page you were looking for doesn't exist or has been moved."
      />
      {/* <p className='font-poppins text-5xl pb-4 font-semibold text-tb-black'>Page Not Found</p>
      <p className='py-4 text-lg '>Sorry, the page you were looking for doesn&apos;t exist or has been moved.</p> */}
      <span className='mt-4'>
        <Button
          link='/'
          content='Back to Homepage'
          type='white'
        />
      </span>
    </div>
  );
}
