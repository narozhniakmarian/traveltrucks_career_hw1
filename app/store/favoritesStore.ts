import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Camper } from "../types/camper";

interface FavoritesState {
  favorites: Record<string, Camper>;
  toggleFavorite: (camper: Camper) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: {},

      toggleFavorite(camper: Camper) {
        const { favorites } = get();
        const exists = !!favorites[camper.id];
        const updated = { ...favorites };
        if (exists) {
          delete updated[camper.id];
        } else {
          updated[camper.id] = camper;
        }
        set({ favorites: updated });
      },

      isFavorite(id) {
        return !!get().favorites[id];
      },
    }),
    {
      name: "favorites", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
  )
);
