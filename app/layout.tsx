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
  description: "Find your perfect campervan for the ultimate road trip adventure with TravelTrucks.",
  icons: {
    icon: "/favicon.png",
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
