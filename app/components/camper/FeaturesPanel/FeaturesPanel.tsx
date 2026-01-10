import { Camper } from "@/app/types/camper";
import { IFeatureTag } from "../../ui/IFeatureTag/IFeatureTag";
import { FeatureKey } from "@/app/constants/checkboxVariants";
import styles from "./FeaturesPanel.module.css";

export function FeaturesPanel({ camper }: { camper: Camper }) {
  const tags: FeatureKey[] = [];
  if (camper.transmission === "automatic") tags.push("automatic");
  if (camper.AC) tags.push("ac");
  if (camper.kitchen) tags.push("kitchen");
  if (camper.TV) tags.push("tv");
  if (camper.bathroom) tags.push("bathroom");
  if (camper.radio) tags.push("radio");
  if (camper.refrigerator) tags.push("fridge");
  if (camper.microwave) tags.push("microwave");
  if (camper.gas) tags.push("gas");
  if (camper.water) tags.push("water");

  function splitValueUnit(raw: string): { value: number; unit: string } {
    const match = raw.trim().match(/^([\d.]+)\s*(\D+)$/);
    if (!match) return { value: parseFloat(raw), unit: "" };
    return {
      value: parseFloat(match[1]),
      unit: match[2],
    };
  }

  const parsedSpec = Object.fromEntries(
    Object.entries(camper).map(([key, val]) => {
      if (typeof val === "string" && /^[\d.]+\s*\D+/.test(val)) {
        const { value, unit } = splitValueUnit(val);
        return [key, { value, unit }];
      }
      return [key, val];
    })
  );
  function parseConsumption(raw: string): { value: number; unit: string } {
    const trimmed = raw.trim();

    const match = trimmed.match(/^(\d+(?:[.,]\d+)?)[ ]*l\/[ ]*100[ ]*km$/i);

    if (!match) {
      return {
        value: Number.NaN,
        unit: trimmed,
      };
    }

    const value = parseFloat(match[1].replace(",", "."));
    const unit = "l/100 km";

    return { value, unit };
  }

  function formatConsumption(raw: string): string {
    const { value, unit } = parseConsumption(raw);
    if (Number.isNaN(value)) return raw;
    return `${value} ${unit}`;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.tags}>
        {tags.map((tag) => (
          <li key={tag}>
            <IFeatureTag variant={tag} />
          </li>
        ))}
      </ul>

      <div className={styles.details}>
        <h3>Vehicle details</h3>
        <div className={styles.line}></div>
        <ul className={styles.detailsList}>
          <li className={styles.detailsItem}>
            <p>Form</p>
            <span className={styles.capitalize}>
              {camper.form?.replace(/([A-Z])/g, " $1").trim()}
            </span>
          </li>
          <li className={styles.detailsItem}>
            <p>Length</p>
            <span>
              {parsedSpec.length.value} {"\u00A0"}
              {parsedSpec.length.unit}
            </span>
          </li>
          <li className={styles.detailsItem}>
            <p>Width</p>
            <span>
              {parsedSpec.width.value} {"\u00A0"}
              {parsedSpec.width.unit}
            </span>
          </li>
          <li className={styles.detailsItem}>
            <p>Height</p>
            <span>
              {parsedSpec.height.value} {"\u00A0"}
              {parsedSpec.height.unit}
            </span>
          </li>
          <li className={styles.detailsItem}>
            <p>Tank</p>
            <span>
              {parsedSpec.tank.value} {"\u00A0"}
              {parsedSpec.tank.unit}
            </span>
          </li>
          <li className={styles.detailsItem}>
            <p>Consumption</p>
            <span>{formatConsumption(camper.consumption || "")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
