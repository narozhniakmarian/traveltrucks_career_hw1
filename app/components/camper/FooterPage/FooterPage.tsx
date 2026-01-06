'use client';

import { useSearchParams } from "next/navigation";
import styles from './FooterPage.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import { FeaturesPanel } from '../FeaturesPanel';
import { ReviewsPanel } from '../ReviewsPanel';
import { Camper } from '@/app/types/camper';

export function CamperTabs({ camper }: { camper: Camper }) {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "features";

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.head}>
                <div className={styles.tabs}>
                    <Link
                        href="?tab=features"
                        className={clsx(styles.tabButton, tab === "features" && styles.active)}
                        scroll={false}
                    >
                        Features
                    </Link>
                    <Link
                        href="?tab=reviews"
                        className={clsx(styles.tabButton, tab === "reviews" && styles.active)}
                        scroll={false}
                    >
                        Reviews
                    </Link>
                </div>
            </div>
            <div className={styles.content}>
                {tab === "features" && <FeaturesPanel camper={camper} />}
                {tab === "reviews" && <ReviewsPanel reviews={camper.reviews} />}
            </div>
        </div>
    );
}
