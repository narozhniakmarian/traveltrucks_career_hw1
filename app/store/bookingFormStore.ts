import { create } from 'zustand';

interface BookingFormState {
    name: string;
    email: string;
    startDate: Date | null;
    endDate: Date | null;
    comment: string;

    setField: (field: string, value: any) => void;
    reset: () => void;
    hydrate: () => void;
}

export const useBookingFormStore = create<BookingFormState>((set, get) => ({
    name: '',
    email: '',
    startDate: null,
    endDate: null,
    comment: '',

    setField(field, value) {
        set({ [field]: value } as any);

        if (typeof window !== 'undefined') {
            const state = get();
            const storageState = {
                ...state,
                startDate: state.startDate?.toISOString() || null,
                endDate: state.endDate?.toISOString() || null,
            };
            localStorage.setItem('bookingForm', JSON.stringify(storageState));
        }
    },

    reset() {
        set({ name: '', email: '', startDate: null, endDate: null, comment: '' });
        if (typeof window !== 'undefined') {
            localStorage.removeItem('bookingForm');
        }
    },

    hydrate() {
        if (typeof window === 'undefined') return;
        const raw = localStorage.getItem('bookingForm');
        if (!raw) return;

        try {
            const parsed = JSON.parse(raw);
            set({
                ...parsed,
                startDate: parsed.startDate ? new Date(parsed.startDate) : null,
                endDate: parsed.endDate ? new Date(parsed.endDate) : null,
            });
        } catch { }
    },
}));
