import clsx from "clsx";
import { ICheckbox } from "../../ui/ICheckbox/ICheckbox";
import { IInput } from "../../ui/IInput/IInput";
import styles from "./FilterBar.module.css";
import { IButton } from "../../ui/IButton/IButton";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [equipment, setEquipment] = useState({
    ac: searchParams.get("AC") === "true",
    automatic: searchParams.get("transmission") === "automatic",
    kitchen: searchParams.get("kitchen") === "true",
    tv: searchParams.get("TV") === "true",
    bathroom: searchParams.get("bathroom") === "true",
  });

  const [type, setType] = useState({
    van: searchParams.get("form") === "panelTruck",
    fullyIntegrated: searchParams.get("form") === "fullyIntegrated",
    alcove: searchParams.get("form") === "alcove",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (location.trim()) {
      params.set("location", location.trim());
    }

    if (equipment.ac) params.set("AC", "true");
    if (equipment.automatic) params.set("transmission", "automatic");
    if (equipment.kitchen) params.set("kitchen", "true");
    if (equipment.tv) params.set("TV", "true");
    if (equipment.bathroom) params.set("bathroom", "true");

    if (type.van) params.set("form", "panelTruck");
    if (type.fullyIntegrated) params.set("form", "fullyIntegrated");
    if (type.alcove) params.set("form", "alcove");

    router.push(`/catalog?${params.toString()}`);
  };

  const handleReset = () => {
    setLocation("");
    setEquipment({
      ac: false,
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
    });
    setType({
      van: false,
      fullyIntegrated: false,
      alcove: false,
    });
    router.push("/catalog");
  };

  return (
    <div className={styles.filterBar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <IInput
          label="Location"
          value={location}
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
          <div className={styles.actions}>
            <IButton type="submit" variant="primary">
              Search
            </IButton>
            <IButton
              type="button"
              variant="secondary"
              onClick={handleReset}
            >
              Reset
            </IButton>
          </div>
        </div>
      </form>
    </div>
  );
}
