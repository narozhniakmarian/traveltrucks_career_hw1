"use client";

import { useEffect } from "react";
import { useCampersStore } from "../store/campersStore";
import { FilterBar } from "../components/catalog/FilterBar/FilterBar";
import { CampersList } from "../components/catalog/CampersList/CampersList";
import { IButton } from "../components/ui/IButton/IButton";
import { Header } from "../components/Header/Header";
import styles from "./page.module.css";
import ScrollToTop from "../components/ui/ScrollToTop";
import { Loader } from "../components/ui/Loader/Loader";
import { Camper, CamperFilters } from "../types/camper";

interface CatalogClientProps {
    initialCampers: Camper[];
    initialFilters: CamperFilters;
}

export function CatalogClient({ initialCampers, initialFilters }: CatalogClientProps) {
    const { campers, page, loadMore, loading, hasMore, setInitialData } =
        useCampersStore();

    useEffect(() => {
        setInitialData(initialCampers, initialFilters);
    }, [initialCampers, initialFilters, setInitialData]);

    const handleScrillToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Header />
            <main className={styles.catalogPage}>
                <div className={styles.container}>
                    <div className={styles.catalogWrapper}>
                        <FilterBar />
                        <div className={styles.catalogContent}>
                            <CampersList campers={campers} />
                            {loading && (
                                <div className={styles.loaderWrapper}>
                                    <Loader />
                                </div>
                            )}
                            {hasMore && (
                                <IButton
                                    onClick={loadMore}
                                    disabled={loading}
                                    variant="secondary"
                                    className={styles.loadMoreButton}
                                >
                                    {loading ? "Loading..." : "Load more"}
                                </IButton>
                            )}

                            {!hasMore && campers.length > 0 && (
                                <p className={styles.message}>No more campers</p>
                            )}
                            {!loading && campers.length === 0 && (
                                <p className={styles.message}>No campers found</p>
                            )}
                        </div>
                    </div>
                    <ScrollToTop isVisible={page > 1} onClick={handleScrillToTop} />
                </div>
            </main>
        </>
    );
}
