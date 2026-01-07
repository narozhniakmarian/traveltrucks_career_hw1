import { CamperCardType } from "@/app/types/camper";
import { CamperCard } from "../CamperCard/CamperCard";

interface CampersListProps {
  campers: CamperCardType[];
}

export function CampersList({ campers }: CampersListProps) {
  return (
    <div className="cardList">
      {campers.map((camper) => (
        <CamperCard key={camper.id} {...camper} />
      ))}
    </div>
  );
}
