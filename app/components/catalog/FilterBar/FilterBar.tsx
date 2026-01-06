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

    const filters: any = {};

    if (location.trim()) {
      filters.location = location.trim();
    }

    if (equipment.ac) filters.AC = true;
    if (equipment.automatic) filters.transmission = "automatic";
    if (equipment.kitchen) filters.kitchen = true;
    if (equipment.tv) filters.TV = true;
    if (equipment.bathroom) filters.bathroom = true;

    if (type.van) filters.form = "panelTruck";
    if (type.fullyIntegrated) filters.form = "fullyIntegrated";
    if (type.alcove) filters.form = "alcove";

    fetchWithFilters(filters);
  };

  return (
    <div className={styles.filterBar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <IInput
          label="Location"
          icon={
            <svg>
              <use href="/svg/svg_spit.svg#icon-map" />
            </svg>
          }
          placeholder="City"
          containerClassName={styles.location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className={styles.filterWrepper}>
          <h2>Filters</h2>
          <div className={clsx(styles.checkboxContainer)}>
            <h3>Vehicle equipment</h3>
            <div className={styles.line}></div>
            <div className={styles.checkBox}>
              <ICheckbox
                variant="ac"
                checked={equipment.ac}
                onChange={(e) =>
                  setEquipment({ ...equipment, ac: e.target.checked })
                }
              />
              <ICheckbox
                variant="automatic"
                checked={equipment.automatic}
                onChange={(e) =>
                  setEquipment({ ...equipment, automatic: e.target.checked })
                }
              />
              <ICheckbox
                variant="kitchen"
                checked={equipment.kitchen}
                onChange={(e) =>
                  setEquipment({ ...equipment, kitchen: e.target.checked })
                }
              />
              <ICheckbox
                variant="tv"
                checked={equipment.tv}
                onChange={(e) =>
                  setEquipment({ ...equipment, tv: e.target.checked })
                }
              />
              <ICheckbox
                variant="bathroom"
                checked={equipment.bathroom}
                onChange={(e) =>
                  setEquipment({ ...equipment, bathroom: e.target.checked })
                }
              />
            </div>
          </div>
          <div className={clsx(styles.checkboxContainer)}>
            <h3>Vehicle type</h3>
            <div className={styles.line}></div>
            <div className={styles.checkBox}>
              <ICheckbox
                variant="van"
                checked={type.van}
                onChange={(e) => setType({ ...type, van: e.target.checked })}
              />
              <ICheckbox
                variant="fullyIntegrated"
                checked={type.fullyIntegrated}
                onChange={(e) =>
                  setType({ ...type, fullyIntegrated: e.target.checked })
                }
              />
              <ICheckbox
                variant="alcove"
                checked={type.alcove}
                onChange={(e) =>
                  setType({ ...type, alcove: e.target.checked })
                }
              />
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
