'use client';

import { Camper } from '@/app/types/camper';
import styles from './CamperDetails.module.css';
import { Gallery } from './Gallery';
import { CamperTabs } from './FooterPage/FooterPage';
import { BookingForm } from './BookingForm/BookingForm';

export function CamperDetails({ camper }: { camper: Camper }) {
    if (!camper) return null;

    return (
        <section className={styles.detailsContainer}>
            <div className={styles.titleSection}>
                <h1 className={styles.camperName}>{camper.name}</h1>
                <div className={styles.metaInfo}>
                    <div className={styles.metaItem}>
                        <svg className={`${styles.icon} ${styles.iconRating}`}>
                            <use href="/svg/svg_spit.svg#icon-rating" />
                        </svg>
                        <span className={styles.rating}>
                            {camper.rating}({camper.reviews?.length} Reviews)
                        </span>
                    </div>
                    <div className={styles.metaItem}>
                        <svg className={`${styles.icon} ${styles.iconMap}`}>
                            <use href="/svg/svg_spit.svg#icon-map" />
                        </svg>
                        <span>{camper.location}</span>
                    </div>
                </div>
                <div className={styles.price}>€{camper.price.toFixed(2)}</div>
            </div>

            <div className={styles.gallerySection}>
                <Gallery images={camper.gallery || []} />
            </div>

            <div className={styles.descriptionSection}>
                <p>{camper.description}</p>
            </div>

            <div className={styles.bottomSection}>
                <div className={styles.tabsSection}>
                    <CamperTabs camper={camper} />
                </div>
                <div className={styles.bookingSection}>
                    <BookingForm />
                </div>
            </div>
        </section>
    );
}
