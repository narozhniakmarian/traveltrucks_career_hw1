import Image from "next/image";
import styles from "./CamperCard.module.css";
import { CamperCardType } from "@/app/types/camper";
import { IFeatureTag } from "../../ui/IFeatureTag/IFeatureTag";
import { IButton } from "../../ui/IButton/IButton";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "@/app/store/favoritesStore";

export function CamperCard({
  id,
  name,
  price,
  rating = 0,
  description,
  tags = [],
  image,
  reviews,
  location,
}: CamperCardType) {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite);

  const router = useRouter();

  const handleFavorite = () => {
    toggleFavorite({ id });
  };

  return (
    <div className={styles.cardContainer}>
      <Image src={image} alt={name} className={styles.image} />;
      <div className={styles.infoContainer}>
        <div className={styles.titleRow}>
          <p className={styles.name}>{name}</p>
          <div className={styles.priceHeartBox}>
            <p className={styles.price}>
              <span>€</span>
              {price}.00
            </p>
            <svg
              onClick={handleFavorite}
              className={isFavorite(id) ? styles.favorite : ""}
            >
              <use href="svg/svg_spit.svg#icon-heart" />
            </svg>
          </div>
        </div>

        <div className={styles.subtitleRow}>
          <div>
            <svg>
              className={rating > 0 ? styles.gold : styles.gray}
              <use href="svg/svg_spit.svg#icon-rating" />
            </svg>
            <p>
              {rating}({reviews}
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
          {tags.map((tag) => (
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
