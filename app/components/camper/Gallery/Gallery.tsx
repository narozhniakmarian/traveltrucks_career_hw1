import Image from "next/image";
import styles from "./Gallery.module.css";
import { GalleryImage } from "@/app/types/camper";

export function Gallery({
  images,
  onImageClick,
}: {
  images: GalleryImage[];
  onImageClick?: (index: number) => void;
}) {
  return (
    <div className={styles.galleryGrid}>
      {images.map((img, index) => (
        <div
          key={index}
          className={styles.imageWrapper}
          onClick={() => onImageClick?.(index)}
        >
          <Image
            src={img.thumb}
            alt={`Camper gallery ${index}`}
            fill
            className={styles.image}
            sizes="290px"
          />
        </div>
      ))}
    </div>
  );
}
