'use client';

import { useBookingFormStore } from '@/app/store/bookingFormStore';
import { useEffect } from 'react';
import { IInput } from '../../ui/IInput/IInput';
import { IButton } from '../../ui/IButton/IButton';

export function BookingForm() {
    const { name, email, date, comment, setField, reset, hydrate } =
        useBookingFormStore();

    useEffect(() => {
        hydrate();
    }, [hydrate]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        alert('Booking successful!');
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <IInput
                value={name}
                onChange={(e) => setField('name', e.target.value)}
                placeholder="Name"
            />

            <IInput
                value={email}
                onChange={(e) => setField('email', e.target.value)}
                placeholder="Email"
            />

            <IInput
                type="date"
                value={date}
                onChange={(e) => setField('date', e.target.value)}
            />

            <textarea
                value={comment}
                onChange={(e) => setField('comment', e.target.value)}
                placeholder="Comment"
            />

            <IButton type="submit" variant="primary">Send</IButton>
        </form>
    );
}