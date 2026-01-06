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

  const { data } = await apiClient.get<Camper[]>("/campers", { params });
  return data;
}

export async function fetchCamperById(id: string) {
  const { data } = await apiClient.get<Camper>(`/campers/${id}`);
  return data;
}
