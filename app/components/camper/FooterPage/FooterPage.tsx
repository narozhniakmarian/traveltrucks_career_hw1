'use client';

import { usePathname } from "next/navigation";
import styles from './FooterPage.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import { Camper } from '@/app/types/camper';
import { createSlug } from '@/app/services/campersApi';

export function CamperTabs({ camper, children }: { camper: Camper, children?: React.ReactNode }) {
    const pathname = usePathname();
    const slug = createSlug(camper.id, camper.name);

    const isFeatures = pathname.endsWith('/features') || pathname.endsWith(slug);
    const isReviews = pathname.endsWith('/reviews');

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.head}>
                <div className={styles.tabs}>
                    <Link
                        href={`/catalog/${slug}/features`}
                        className={clsx(styles.tabButton, isFeatures && styles.active)}
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
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
