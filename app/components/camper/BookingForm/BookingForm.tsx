'use client';

import { useBookingFormStore } from '@/app/store/bookingFormStore';
import { useEffect } from 'react';
import { IInput } from '../../ui/IInput/IInput';
import { IButton } from '../../ui/IButton/IButton';
import { BookingDatePicker } from '../Calendar/Calendar';
import styles from './BookingForm.module.css';
import toast from 'react-hot-toast';

export function BookingForm() {
    const { name, email, comment, setField, reset, hydrate } =
        useBookingFormStore();

    useEffect(() => {
        hydrate();
    }, [hydrate]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        toast.custom(
            <div className={styles.toast}>
                <div className={styles.toastContent}>
                    <img src="/images/placeholder.png" />
                    <div>
                        <HandleStar />
                        <p>Booking confirmed!</p>
                        <HandleStar />
                    </div>
                </div>
            </div>
        )
        reset();
    }

    function HandleStar() {
        return (
            <svg
                width="16"
                height="16"
                style={{
                    fill: '#FFC531'
                }}
            >
                <use href="/svg/svg_spit.svg#icon-rating" />
            </svg>
        )
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Book your campervan now</h3>
            <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <IInput
                    value={name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder="Name*"
                    required
                />

                <IInput
                    type="email"
                    value={email}
                    onChange={(e) => setField('email', e.target.value)}
                    placeholder="Email*"
                    required
                />

                <BookingDatePicker />

                <textarea
                    className={styles.textarea}
                    value={comment}
                    onChange={(e) => setField('comment', e.target.value)}
                    placeholder="Comment"
                />

                <IButton type="button" variant="primary" className={styles.submitButton} onClick={handleSubmit}>
                    Send
                </IButton>
            </form>
        </div>
    );
}