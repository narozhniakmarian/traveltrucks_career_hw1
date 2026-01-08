"use client";

import { Camper } from "@/app/types/camper";
import styles from "./CamperDetails.module.css";
import { Gallery } from "../Gallery/Gallery";
import { BookingForm } from "../BookingForm/BookingForm";
import { usePathname } from "next/navigation";
import { createSlug } from "@/app/services/campersApi";
import Link from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import ImageReview from "../ImageReview/ImageReview";

export function CamperDetails({
  camper,
  children,
}: {
  camper: Camper;
  children?: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!camper) return null;

  const closeModal = () => setIsModalOpen(false);

  const slug = createSlug(camper.id, camper.name);

  const isFeatures = pathname.endsWith("/features") || pathname.endsWith(slug);
  const isReviews = pathname.endsWith("/reviews");

  return (
    <>
      <section className={styles.detailsContainer}>
        <div className="container">
          <div className={styles.titleSection}>
            <h1>{camper.name}</h1>
            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <svg className={`${styles.icon} ${styles.iconRating}`}>
                  <use href="/svg/svg_spit.svg#icon-rating" />
                </svg>
                <p className={styles.rating}>
                  {camper.rating}({camper.reviews?.length}
                  {"\u00A0"}Reviews)
                </p>
              </div>
              <div className={styles.metaItem}>
                <svg className={`${styles.icon} ${styles.iconMap}`}>
                  <use href="/svg/svg_spit.svg#icon-map" />
                </svg>
                <p>{camper.location}</p>
              </div>
            </div>
            <div className={styles.price}>€{camper.price.toFixed(2)}</div>
          </div>

          <div className={styles.gallerySection}>
            <Gallery
              images={camper.gallery || []}
              onImageClick={(index) => {
                setSelectedImageIndex(index);
                setIsModalOpen(true);
              }}
            />
          </div>

          <div className={styles.descriptionSection}>
            <p>{camper.description}</p>
          </div>

          <div>
            <div className={styles.head}>
              <div className={styles.tabs}>
                <Link
                  href={`/catalog/${slug}/features`}
                  className={clsx(
                    styles.tabButton,
                    isFeatures && styles.active
                  )}
                  scroll={false}
                >
                  Features
                </Link>
                <Link
                  href={`/catalog/${slug}/reviews`}
                  className={clsx(styles.tabButton, isReviews && styles.active)}
                  scroll={false}
                >
                  Reviews
                </Link>
              </div>
            </div>
            <div className={styles.bottomFlexContainer}>
              {children}
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ImageReview
            images={camper.gallery || []}
            initialIndex={selectedImageIndex}
          />
        </Modal>
      )}
    </>
  );
}
