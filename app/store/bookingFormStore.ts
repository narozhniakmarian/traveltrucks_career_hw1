import { create } from 'zustand';

interface BookingFormState {
    name: string;
    email: string;
    date: string;
    comment: string;

    setField: (field: string, value: string) => void;
    reset: () => void;
    hydrate: () => void;
}

export const useBookingFormStore = create<BookingFormState>((set, get) => ({
    name: '',
    email: '',
    date: '',
    comment: '',

    setField(field, value) {
        set({ [field]: value } as any);

        if (typeof window !== 'undefined') {
            const state = get();
            localStorage.setItem('bookingForm', JSON.stringify(state));
        }
    },

    reset() {
        set({ name: '', email: '', date: '', comment: '' });
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
            set(parsed);
        } catch { }
    },
}));
