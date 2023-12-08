import { Poppins } from "next/font/google";
import Button from "@/components/Button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: { absolute: "Page Not Found" },
};

export default function notFound() {
  return (
    <div className='flex justify-center flex-col items-center h-3/5'>
      <span className='bg-gray-200 px-4 py-1 mb-8 rounded-full border-2 border-gray-300 text-gray-400 duration-300 '>404 Error</span>
      <p className={`${poppins.className} text-5xl pb-4 font-semibold text-tb-black`}>Page Not Found</p>
      <p className={`${poppins.className} py-4 text-lg text-gray-400`}>Sorry, the page you were looking for doesn&apos;t exist or has been moved.</p>
      <Button
        link='/'
        content='Back to Homepage'
      />
    </div>
  );
}
