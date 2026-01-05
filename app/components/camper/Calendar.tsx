import DatePicker from 'react-datepicker';
import { useState } from 'react';

export function BookingDatePicker() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            placeholderText="Select date"
        />
    );
}