import { create } from "zustand";
import { Camper, CamperFilters } from "../types/camper";
import { fetchCampers } from "../services/campersApi";

interface CampersState {
  campers: Camper[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  error: string | null;
  filters: CamperFilters;
  fetchWithFilters: (filters: CamperFilters) => Promise<void>;
  loadMore: () => Promise<void>;
  setFilters: (filters: CamperFilters) => void;
  setInitialData: (campers: Camper[], filters: CamperFilters) => void;
}

export const useCampersStore = create<CampersState>((set, get) => ({
  campers: [],
  page: 1,
  hasMore: true,
  loading: false,
  error: null,
  filters: {},

  setFilters(filters) {
    set({ filters });
  },

  setInitialData(campers, filters) {
    set({
      campers,
      filters,
      page: 1,
      hasMore: campers.length === 4,
      loading: false,
      error: null,
    });
  },

  async fetchWithFilters(filters) {
    set({ loading: true, error: null, page: 1, campers: [] });

    set({ filters });

    try {
      const data = await fetchCampers(filters, 1, 4);

      set({
        campers: data,
        page: 1,
        hasMore: data.length === 4,
      });
    } catch (e) {
      set({ error: "Failed to load campers" });
    } finally {
      set({ loading: false });
    }
  },

  async loadMore() {
    const { page, filters, campers, hasMore, loading } = get();
    if (!hasMore || loading) return;

    set({ loading: true });

    try {
      const nextPage = page + 1;
      const data = await fetchCampers(filters, nextPage, 4);

      set({
        campers: [...campers, ...data],
        page: nextPage,
        hasMore: data.length === 4,
      });
    } catch (e) {
      set({ error: "Failed to load campers" });
    } finally {
      set({ loading: false });
    }
  },
}));
