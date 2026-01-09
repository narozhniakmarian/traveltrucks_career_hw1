import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | TravelTrucks",
    default: "TravelTrucks - Camper Rental & Sales",
  },
  description:
    "Find your perfect campervan for the ultimate road trip adventure with TravelTrucks.",
  metadataBase: new URL("https://traveltrucks-career-hw1.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "TravelTrucks",
    description:
      "Find your perfect campervan for the ultimate road trip adventure with TravelTrucks.",
    url: "https://traveltrucks-career-hw1.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dyeijtfe2/image/upload/v1767983153/oG_ahzmgn.png",
        width: 1200,
        height: 630,
        alt: "TravelTrucks application preview",
      },
    ],
    siteName: "TravelTrucks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>
        {children}
        <Toaster />
        <div id="datepicker-portal" />
      </body>
    </html>
  );
}
