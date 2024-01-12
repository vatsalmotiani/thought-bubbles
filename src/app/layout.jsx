import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import MotionWrap from "./MotionWrap";

export const metadata = {
  title: {
    absolute: "Thought Bubbles Advertising",
    template: "%s | Thought Bubbles Advertising",
  },
  description: "Thought Bubbles Advertising",
  icons: {
    icon: "/favicon.svg", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-noto text-neutral-500 flex flex-col min-h-screen relative bg-white'>
        <div className='justify-center flex'>
          <Navbar />
        </div>
        <div className='flex-grow'>
          {children}
          {/* <MotionWrap>{children}</MotionWrap> */}
        </div>
        {/* <Footer /> */}
        <Toaster />
      </body>
    </html>
  );
}
