import { FeatureKey, FEATURES_MAP } from "@/app/constants/checkboxVariants";
import styles from "./IFeatureTag.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant: FeatureKey;
}

export function IFeatureTag({ variant }: Props) {
  const data = FEATURES_MAP[variant];

  return (
    <div className={styles.tagWrapper}>
      <span className={styles.box}>{data.icon}</span>

      <span className={styles.label}>{data.label}</span>
    </div>
  );
}
