import DatePicker from 'react-datepicker';
import { useBookingFormStore } from '@/app/store/bookingFormStore';
import { forwardRef } from 'react';
import { IInput } from '../ui/IInput/IInput';

const DateInput = forwardRef<HTMLInputElement, any>(
    ({ value, onClick }, ref) => (
        <IInput
            ref={ref}
            value={value}
            onClick={onClick}
            placeholder="Booking date*"
            readOnly
        />
    )
);



export function BookingDatePicker() {
    const { date, setField } = useBookingFormStore();
    return (
        <DatePicker
            selected={date ? new Date(date) : null}
            onChange={(d: Date | null) => setField("date", d)}
            customInput={<DateInput placeholder="Booking date*" />}
            dateFormat="yyyy-MM-dd"
            shouldCloseOnSelect

        />
    );
}