import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} flex flex-col min-h-screen relative bg-tb-bg`}>
        <Navbar />
        <div className='flex-grow'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
