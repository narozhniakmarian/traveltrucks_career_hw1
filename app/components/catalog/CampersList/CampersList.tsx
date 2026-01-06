import { CamperCardType } from "@/app/types/camper";
import { CamperCard } from "../CamperCard/CamperCard";
import styles from "./CampersList.module.css";

interface CampersListProps {
  campers: CamperCardType[];
}

export function CampersList({ campers }: CampersListProps) {
  return (
    <div className={styles.cardList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} {...camper} />
      ))}
    </div>
  );
}
