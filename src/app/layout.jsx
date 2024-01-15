import Navbar from "@/components/Navbar";
import Footer, { FooterCTA } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
// import MotionWrap from "./MotionWrap";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: {
    absolute: "Thought Bubbles Advertising",
    template: "%s - Thought Bubbles Advertising",
  },
  description: "Thought Bubbles Advertising",
  icons: {
    icon: "/favicon.svg", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-inter text-neutral-500 flex flex-col min-h-screen relative bg-white'>
        <div className='justify-center flex'>
          <Navbar />
        </div>
        <div className='flex-grow'>
          <SmoothScroll>{children}</SmoothScroll>
          {/* <MotionWrap>{children}</MotionWrap> */}
        </div>
        {/* <FooterCTA /> */}
        <Toaster />
      </body>
    </html>
  );
}
