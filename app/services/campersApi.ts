import { Camper, CamperFilters } from "../types/camper";
import { apiClient } from "./apiClient";

export async function fetchCampers(
  filters: CamperFilters,
  page: number,
  limit: number
) {
  const params: Record<string, any> = {
    page,
    limit,
    ...filters,
  };

  const { data } = await apiClient.get<Camper[] | { items: Camper[] }>(
    "/campers",
    { params }
  );

  const campers = Array.isArray(data) ? data : data.items || [];
  return campers;
}

export async function fetchCamperById(id: string) {
  const { data } = await apiClient.get<Camper>(`/campers/${id}`);
  return data;
}
