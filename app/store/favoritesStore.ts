import { create } from 'zustand';
import { Camper } from '../components/types/camper';

interface FavoritesState {
    favorites: Record<string, Camper>;
    toggleFavorite: (camper: Camper) => void;
    isFavorite: (id: string) => boolean;
    hydrate: () => void;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
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
        if (typeof window !== 'undefined') {
            localStorage.setItem('favorites', JSON.stringify(updated));
        }
    },

    isFavorite(id) {
        return !!get().favorites[id];
    },

    hydrate() {
        if (typeof window === 'undefined') return;
        const raw = localStorage.getItem('favorites');
        if (!raw) return;
        try {
            const parsed = JSON.parse(raw) as Record<string, Camper>;
            set({ favorites: parsed });
        } catch { }
    },
}));
