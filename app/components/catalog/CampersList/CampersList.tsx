import { CamperCardType } from "@/app/types/camper";
import { CamperCard } from "../CamperCard/CamperCard";

interface CampersListProps {
  campers: CamperCardType[];
}
export function CampersList({ campers }: CampersListProps) {
  const cardList: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={cardList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} {...camper} />
      ))}
    </div>
  );
}
