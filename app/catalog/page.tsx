'use client';

import { useEffect } from 'react';
import { useCampersStore } from '../store/campersStore';


export default function CatalogPage() {
    const { campers, fetchWithFilters, loadMore, loading, hasMore } = useCampersStore();

    useEffect(() => {
        fetchWithFilters({});
    }, [fetchWithFilters])

    return (
        <main>
            {/* <FilterBar / */}

        </main>
    )
}
