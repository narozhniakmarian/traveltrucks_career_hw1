import type { Metadata } from "next";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

export const metadata: Metadata = {
  title: "Home | TravelTrucks",
  description: "Find your perfect campervan for the ultimate road trip adventure with TravelTrucks.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
