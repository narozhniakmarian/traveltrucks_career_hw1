import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./IInput.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}



export const IInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, className, ...props }, ref) => {
    return (
      <label className={styles.wrapper}>
        {label && <span className={styles.label}>{label}</span>}

        <div className={styles.field}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <input
            ref={ref}
            className={clsx(styles.input, className)}
            {...props}
          />
        </div>
      </label>
    );
  }
);
