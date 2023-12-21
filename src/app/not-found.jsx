import Button from "@/components/Button";

export const metadata = {
  title: { absolute: "Page Not Found" },
};

export default function notFound() {
  return (
    <div className='flex justify-center flex-col items-center h-96'>
      <span className='bg-gray-200 px-4 py-1 mb-8 rounded-full border-2 border-gray-300 text-gray-400 duration-300 '>404 Error</span>
      <p className='font-poppins text-5xl pb-4 font-semibold text-tb-black'>Page Not Found</p>
      <p className='py-4 text-lg '>Sorry, the page you were looking for doesn&apos;t exist or has been moved.</p>
      <Button
        link='/'
        content='Back to Homepage'
      />
    </div>
  );
}
