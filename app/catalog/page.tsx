import type { Metadata } from "next";
import { CatalogClient } from "./CatalogClient";

export const metadata: Metadata = {
  title: "Catalog | TravelTrucks",
  description: "Browse our extensive catalog of campervans available for rental and sale. Find the perfect vehicle for your next adventure.",
};

export default function CatalogPage() {
  return <CatalogClient />;
}
