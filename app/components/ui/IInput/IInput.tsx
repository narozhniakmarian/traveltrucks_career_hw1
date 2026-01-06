import clsx from "clsx";
import styles from "./IInput.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  containerClassName?: string;
}

export function IInput({
  label,
  icon,
  className,
  containerClassName,
  ...props
}: InputProps) {
  return (
    <label className={clsx(styles.wrapper, containerClassName)}>
      {label && <span className={styles.label}>{label}</span>}

      <div className={styles.field}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input className={clsx(styles.input, className)} {...props} />
      </div>
    </label>
  );
}
