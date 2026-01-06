"use client";

import { useEffect, useState } from "react";
import { useCampersStore } from "../store/campersStore";
import clsx from "clsx";
import { FilterBar } from "../components/catalog/FilterBar/FilterBar";
import { CampersList } from "../components/catalog/CampersList/CampersList";
import { IButton } from "../components/ui/IButton/IButton";
import { Header } from "../components/Header/Header";

export default function CatalogPage() {
  const { campers, loadMore, loading, hasMore } = useCampersStore();

  const flexWrapper: React.CSSProperties = { display: "flex", gap: "64px" };

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container" style={flexWrapper}>
            <FilterBar />
            <CampersList campers={campers} />
            {hasMore && (
              <IButton
                onClick={loadMore}
                disabled={loading}
                variant="secondary"
              >
                Show more
              </IButton>
            )}

            {!hasMore && <p>No more campers</p>}
          </div>
        </section>
      </main>
    </>
  );
}
