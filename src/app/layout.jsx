// app/layout.jsx

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundElements from "@/components/BackgroundElements";
import HomepageLoaderWrapper from "@/components/HomepageLoaderWrapper";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: {
    default: "Thought Bubbles Advertising - Creative Marketing & Branding Agency",
    template: "%s | Thought Bubbles Advertising",
  },
  description: "Thought Bubbles Advertising is a leading creative agency delivering innovative branding, digital marketing, and advertising solutions that drive results.",
  keywords: ["advertising agency", "branding agency", "digital marketing", "creative agency", "marketing solutions", "brand strategy", "advertising campaigns", "creative marketing", "thought bubbles", "marketing agency India"],
  authors: [{ name: "Thought Bubbles Advertising" }],
  creator: "Thought Bubbles Advertising",
  publisher: "Thought Bubbles Advertising",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thoughtbubbles.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thoughtbubbles.in",
    title: "Thought Bubbles Advertising - Creative Marketing & Branding Agency",
    description: "Transform your brand with innovative advertising solutions. We specialize in creative campaigns, brand strategy, and digital marketing that delivers measurable results.",
    siteName: "Thought Bubbles Advertising",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Thought Bubbles Advertising - Creative Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thought Bubbles Advertising - Creative Marketing & Branding Agency",
    description: "Transform your brand with innovative advertising solutions. We specialize in creative campaigns, brand strategy, and digital marketing.",
    images: ["/twitter-image.jpg"], // Add your Twitter card image
    creator: "@thoughtbubbles", // Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#D3D3D3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: "Thought Bubbles Advertising",
    url: "https://thoughtbubbles.in",
    logo: "https://thoughtbubbles.in/tb-logo.svg",
    description: "Creative marketing and branding agency specializing in innovative advertising solutions",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
    },
    sameAs: ["https://www.instagram.com/thoughtbubbles_/", "https://in.linkedin.com/in/thought-bubbles-advertising-0aa385290"],
  };

  return (
    <html lang='en'>
      <head>
        <meta
          name='apple-mobile-web-app-title'
          content='Thought Bubbles Advertising'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <meta
          name='apple-mobile-web-app-capable'
          content='yes'
        />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta
          name='apple-mobile-web-app-title'
          content='Thought Bubbles'
        />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          rel='dns-prefetch'
          href='https://fonts.googleapis.com'
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
