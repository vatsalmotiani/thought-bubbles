// app/layout.jsx

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundElements from "@/components/BackgroundElements";
import HomepageLoaderWrapper from "@/components/HomepageLoaderWrapper";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: {
    absolute: "Thought Bubbles Advertising",
    template: "%s - Thought Bubbles Advertising",
  },
  description: "Thought Bubbles Advertising",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://thoughtbubbles.in",
    title: "Thought Bubbles Advertising",
    description: "Thought Bubbles Advertising",
  },
  // themeColor must be moved to `viewport`
};

export const viewport = {
  themeColor: "#D3D3D3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* Next.js will inject theme-color from `viewport`. Keep only custom tags you need */}
      <head>
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
      </head>
      <body className='font-inter text-neutral-500 flex flex-col min-h-screen relative bg-tb-bg'>
        <BackgroundElements />
        <CustomCursor />
        <HomepageLoaderWrapper />
        <div className='flex-grow w-full'>
          <SmoothScroll>{children}</SmoothScroll>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
