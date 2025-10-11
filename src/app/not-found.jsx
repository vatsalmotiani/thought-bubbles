import Button from "@/components/Button";
import Title from "@/components/old/Title";
import { AlertTriangle } from "react-feather";
export const metadata = {
  title: { absolute: "Page Not Found" },
};

export default function notFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[400px] sm:h-[500px] md:h-[600px] px-4 sm:px-6'>
      <AlertTriangle
        size={48}
        className='sm:w-12 sm:h-12 md:w-16 md:h-16 text-neutral-400 mb-4'
      />
      <Title
        heading='Page Not Found'
        subheading="Sorry, the page you were looking for doesn't exist or has been moved."
      />
      <span className='mt-6 sm:mt-8'>
        <Button
          link='/'
          content='Back to Homepage'
          type='white'
        />
      </span>
    </div>
  );
}
