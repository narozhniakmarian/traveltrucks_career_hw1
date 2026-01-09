import DatePicker from "react-datepicker";
import { useBookingFormStore } from "@/app/store/bookingFormStore";
import { forwardRef, useEffect, useState } from "react";
import { IInput } from "../../ui/IInput/IInput";

interface DateInputProps {
  value?: string;
  onClick?: () => void;
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ value, onClick }, ref) => {
    return (
      <IInput
        ref={ref}
        value={value}
        onClick={onClick}
        placeholder="Booking date*"
        readOnly
      />
    );
  }
);

DateInput.displayName = "DateInput";

export function BookingDatePicker() {
  const { startDate, endDate, setField, hydrate } = useBookingFormStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    hydrate();
    Promise.resolve().then(() => setIsMounted(true));
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

  if (!isMounted) {
    return <IInput placeholder="Booking date*" readOnly />;
  }

  return (
    <div className="datepicker-container" style={{ width: "100%" }}>
      <DatePicker
        preventOpenOnFocus
        focusSelectedMonth={false}
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
