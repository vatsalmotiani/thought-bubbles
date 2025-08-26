import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundElements from "@/components/BackgroundElements";
import HomepageLoaderWrapper from "@/components/HomepageLoaderWrapper";
import SpaceshipHunter from "@/components/SpaceshipHunter";
import DesktopDockNavbar from "@/components/DesktopDockNavbar";
import FloatingSidebar from "@/components/FloatingSidebar";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: {
    absolute: "Thought Bubbles Advertising",
    template: "%s - Thought Bubbles Advertising",
  },
  description: "Thought Bubbles Advertising",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-inter text-neutral-500 flex flex-col min-h-screen relative bg-tb-bg'>
        <BackgroundElements />
        <CustomCursor />
        {/* <SpaceshipHunter /> */}
        {/* <FloatingSidebar /> */}
        {/* <Navbar /> */}
        {/* <DesktopDockNavbar /> */}
        <HomepageLoaderWrapper />
        <div className='flex-grow w-full'>
          <SmoothScroll>{children}</SmoothScroll>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
