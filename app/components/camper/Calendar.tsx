import DatePicker from 'react-datepicker';
import { useBookingFormStore } from '@/app/store/bookingFormStore';
import { forwardRef, useEffect, useState } from 'react';
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
    const { startDate, endDate, setField, hydrate } = useBookingFormStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        hydrate();
        setIsMounted(true);
    }, [hydrate]);

    const onChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;

        if (start && end && start.getTime() === end.getTime()) {
            setField("startDate", start);
            setField("endDate", null);
            return;
        }

        setField("startDate", start);
        setField("endDate", end);
    };

    if (!isMounted) return <IInput placeholder="Booking date*" readOnly />;

    return (
        <div className="datepicker-container" style={{ width: '100%' }}>
            <DatePicker
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                customInput={<DateInput />}
                dateFormat="yyyy-MM-dd"
                shouldCloseOnSelect={false}
                calendarClassName="custom-calendar"
                minDate={new Date()}
                popperPlacement="bottom-start"
                portalId="datepicker-portal"
            />
        </div>
    );
}