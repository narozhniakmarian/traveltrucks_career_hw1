import { Camper, CamperFilters } from "../types/camper";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export function createSlug(id: string, name: string): string {
    if (!name) return id;
    return `${id}_${name.replace(/\s+/g, '_')}`;
}

export function parseSlug(slug: string): { id: string; name: string } {
    const [id, ...nameParts] = slug.split('_');
    return { id, name: nameParts.join(' ') };
}

export async function fetchCampers(
    filters: CamperFilters,
    page: number,
    limit: number
) {
    const url = new URL(`${API_BASE_URL}/campers`);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());

    Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== false) {
            url.searchParams.append(key, value.toString());
        }
    });

    const response = await fetch(url.toString(), {
        next: { revalidate: 1800 }
    });

    if (!response.ok) {
        console.warn("Fetch failed:", response.status);
        const error = new Error(`HTTP error! status: ${response.status}`);
        (error as any).status = response.status;
        throw error;
    }

    const data = await response.json();
    const campers = Array.isArray(data) ? data : data.items || [];

    return campers as Camper[];
}

export async function fetchCamperById(id: string) {
    const response = await fetch(`${API_BASE_URL}/campers/${id}`, {
        next: { revalidate: 1000 }
    });

    if (!response.ok) {
        console.warn("Fetch failed:", response.status);
        const error = new Error(`HTTP error! status: ${response.status}`);
        (error as any).status = response.status;
        throw error;
    }

    return await response.json() as Camper;
}