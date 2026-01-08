import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from ".ImageReview.module.css";
import clsx from "clsx";
import { GalleryImage } from "@/app/types/camper";
import Image from "next/image";

export function ImageReview({ images }: { images: GalleryImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const indicatorItem = [1, 2, 3];

  return (
    <div className={styles.slider}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={styles.slide}
        >
          {images.map((img, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image
                src={img.original}
                alt={`Camper gallery ${index}`}
                fill
                className={styles.image}
                sizes="100vw"
              />
            </div>
          ))}
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
            className={`${styles.indicator} ${
              index === currentIndex ? styles.indicatorActive : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageReview;
