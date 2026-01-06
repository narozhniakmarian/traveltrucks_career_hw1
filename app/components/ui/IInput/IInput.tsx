import clsx from "clsx";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export function IInput({ label, icon, className, ...props }: InputProps) {
  return (
    <label className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}

      <div className={styles.field}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input className={clsx(styles.input, className)} {...props} />
      </div>
    </label>
  );
}
