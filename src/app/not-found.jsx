import Link from "next/link";

export const metadata = {
  title: { absolute: "Page Not Found" },
};

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[400px] sm:h-[500px] md:h-[600px] px-4 sm:px-6'>
      <div className='text-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-tb-black'>Page Not Found</h1>
        <p className='mt-2 text-sm sm:text-base text-tb-body'>Sorry, the page you were looking for doesn&apos;t exist or has been moved.</p>
      </div>

      <div className='mt-6 sm:mt-8'>
        <Link
          href='/'
          className='inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-tb-black shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2'
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
