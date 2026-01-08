import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ImageReview.module.css";
import clsx from "clsx";
import { GalleryImage } from "@/app/types/camper";
import Image from "next/image";

export function ImageReview({
  images,
  initialIndex = 0,
}: {
  images: GalleryImage[];
  initialIndex?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const indicatorItem =
    images.length > 0 ? Array.from({ length: images.length }, (_, i) => i) : [];

  return (
    <div className={styles.slider} onClick={(e) => e.stopPropagation()}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={styles.slide}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={images[currentIndex]?.original}
              alt={`Camper gallery ${currentIndex}`}
              fill
              className={styles.image}
              sizes="100vw"
            />
          </div>
          <div className={styles.overlay}></div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrev}
        className={`${styles.button} ${styles.buttonLeft}`}
      >
        <svg className={styles.iconArrow}>
          <use href="/svg/svg_spit.svg#icon-arrow" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className={`${styles.button} ${styles.buttonRight}`}
      >
        <svg className={clsx(styles.iconArrow, styles.iconRight)}>
          <use href="/svg/svg_spit.svg#icon-arrow" />
        </svg>
      </button>

      <div className={styles.indicators}>
        {indicatorItem.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ""
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageReview;
