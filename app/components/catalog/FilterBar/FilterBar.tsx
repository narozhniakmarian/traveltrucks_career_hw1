import clsx from "clsx";
import { ICheckbox } from "../../ui/ICheckbox/ICheckbox";
import { IInput } from "../../ui/IInput/IInput";
import styles from "./FilterBar.module.css";
import { IButton } from "../../ui/IButton/IButton";
import { useState } from "react";
import { useCampersStore } from "@/app/store/campersStore";

export function FilterBar() {
  const { fetchWithFilters } = useCampersStore();

  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
  });

  const [type, setType] = useState({
    van: false,
    fullyIntegrated: false,
    alcove: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetchWithFilters({
      location,
      ...equipment,
      ...type,
    });
  };

  return (
    <div className={styles.filterBar}>
      <form className={styles.form}>
        <IInput
          label="Location"
          icon={
            <svg>
              <use href="svg/svg_spit.svg#icon-map" />
            </svg>
          }
          placeholder="City"
          className={styles.location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className={styles.filterWrepper}>
          <h2>Filters</h2>
          <div className={clsx(styles.checkboxContainer)}>
            <h3>Vehicle equipment</h3>
            <div className={styles.line}></div>
            <div className={styles.checkBox}>
              <ICheckbox variant="ac" />
              <ICheckbox variant="automatic" />
              <ICheckbox variant="kitchen" />
              <ICheckbox variant="tv" />
              <ICheckbox variant="bathroom" />
            </div>
          </div>
          <div className={clsx(styles.checkboxContainer)}>
            <h3>Vehicle type</h3>
            <div className={styles.line}></div>
            <div className={styles.checkBox}>
              <ICheckbox variant="van" />
              <ICheckbox variant="fullyIntegrated" />
              <ICheckbox variant="alcove" />
            </div>
          </div>
          <IButton type="submit" variant="primary">
            Search
          </IButton>
        </div>
      </form>
    </div>
  );
}
