import clsx from "clsx";
import styles from "./IButton.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export function IButton({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {

  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
