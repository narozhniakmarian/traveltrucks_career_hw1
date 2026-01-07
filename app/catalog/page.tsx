import type { Metadata } from "next";
import { CatalogClient } from "./CatalogClient";
import { fetchCampers } from "../services/campersApi";
import { CamperFilters } from "../types/camper";

export const metadata: Metadata = {
  title: "Catalog | TravelTrucks",
  description: "Browse our extensive catalog of campervans available for rental and sale. Find the perfect vehicle for your next adventure.",
};

interface PageProps {
  searchParams: Promise<CamperFilters>;
}

export default async function CatalogPage({ searchParams }: PageProps) {
  const filters = await searchParams;
  const initialCampers = await fetchCampers(filters, 1, 4);

  return <CatalogClient initialCampers={initialCampers} initialFilters={filters} />;
}
