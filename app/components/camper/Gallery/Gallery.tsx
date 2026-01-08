import Image from "next/image";
import styles from "./Gallery.module.css";
import { GalleryImage } from "@/app/types/camper";
import { useState } from "react";

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className={styles.galleryGrid}>
      {images.map((img, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={img.thumb}
            alt={`Camper gallery ${index}`}
            fill
            className={styles.image}
            sizes="290px"
            onClick={openModal}
          />
        </div>
      ))}
    </div>
  );
}
