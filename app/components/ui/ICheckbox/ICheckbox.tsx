import { FeatureKey, FEATURES_MAP } from "@/app/constants/checkboxVariants";
import styles from "./ICheckbox.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: FeatureKey;
}

export function ICheckbox({ variant, ...props }: Props) {
  const data = FEATURES_MAP[variant];

  return (
    <label className={styles.wrapper}>
      <input type="checkbox" className={styles.input} {...props} />

      <span className={styles.box}>{data.icon}</span>

      <span className={styles.label}>{data.label}</span>
    </label>
  );
}
