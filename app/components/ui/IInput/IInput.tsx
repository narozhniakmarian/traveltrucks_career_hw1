import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./IInput.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  containerClassName?: string;
}

export const IInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, className, containerClassName, ...props }, ref) => {
    return (
      <label className={clsx(styles.wrapper, containerClassName)}>
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
