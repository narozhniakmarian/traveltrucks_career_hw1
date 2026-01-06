import Image from "next/image";
import styles from "./CamperCard.module.css";
import { CamperCardType } from "@/app/types/camper";
import { IFeatureTag } from "../../ui/IFeatureTag/IFeatureTag";
import { IButton } from "../../ui/IButton/IButton";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "@/app/store/favoritesStore";
import { FeatureKey } from "@/app/constants/checkboxVariants";

export function CamperCard({
  id,
  name,
  price,
  rating = 0,
  description,
  tags = [],
  gallery = [],
  image,
  reviews,
  location,
  ...camperData
}: CamperCardType & any) {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite);

  const router = useRouter();

  const handleFavorite = () => {
    toggleFavorite({
      id,
      name,
      price,
      rating,
      description,
      tags,
      image,
      reviews,
      location,
    });
  };

  const avgRating = reviews.length
    ? reviews.reduce((sum: number, r: any) => sum + r.reviewer_rating, 0) /
    reviews.length
    : 0;

  const displayTags: FeatureKey[] = [];

  if (camperData.transmission === "automatic") displayTags.push("automatic");
  if (camperData.AC) displayTags.push("ac");
  if (camperData.kitchen) displayTags.push("kitchen");
  if (camperData.TV) displayTags.push("tv");
  if (camperData.bathroom) displayTags.push("bathroom");
  if (camperData.radio) displayTags.push("radio");
  if (camperData.refrigerator) displayTags.push("fridge");
  if (camperData.microwave) displayTags.push("microwave");
  if (camperData.gas) displayTags.push("gas");
  if (camperData.water) displayTags.push("water");

  const imageUrl = gallery?.[0]?.thumb || image || "/images/placeholder.png";

  return (
    <div className={styles.cardContainer}>
      <Image
        src={imageUrl}
        width={292}
        height={320}
        alt={name}
        className={styles.image}
      />
      <div className={styles.infoContainer}>
        <div className={styles.titleRow}>
          <p className={styles.name}>{name}</p>
          <div className={styles.priceHeartBox}>
            <p className={styles.price}>
              <span>€</span>
              {price}.00
            </p>
            <svg
              width={16}
              height={16}
              onClick={handleFavorite}
              className={isFavorite(id) ? styles.favorite : ""}
            >
              <use href="svg/svg_spit.svg#icon-heart" />
            </svg>
          </div>
        </div>

        <div className={styles.subtitleRow}>
          <div>
            <svg className={avgRating > 0 ? styles.gold : styles.gray}>
              <use href="svg/svg_spit.svg#icon-rating" />
            </svg>
            <p className={styles.avgRating}>
              {rating}({reviews.length}
              {"\u00A0"}Reviews)
            </p>
          </div>
          <div>
            <svg>
              <use href="svg/svg_spit.svg#icon-map" />
            </svg>
            <p>{location}</p>
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <ul className={styles.tagContainer}>
          {displayTags.map((tag) => (
            <li key={tag}>
              <IFeatureTag variant={tag} />
            </li>
          ))}
        </ul>

        <IButton type="button" onClick={() => router.push(`/${id}`)}>
          Show more
        </IButton>
      </div>
    </div>
  );
}
