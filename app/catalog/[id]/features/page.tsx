import { fetchCamperById, parseSlug } from "@/app/services/campersApi";
import { FeaturesPanel } from "@/app/components/camper/FeaturesPanel";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function FeaturesPage({ params }: Props) {
    const { id: slugOrId } = await params;
    const { id } = parseSlug(slugOrId);
    const camper = await fetchCamperById(id);

    if (!camper) return null;

    return <FeaturesPanel camper={camper} />;
}
