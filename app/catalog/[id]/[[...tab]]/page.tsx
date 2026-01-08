import { fetchCamperById, parseSlug } from "@/app/services/campersApi";
import { FeaturesPanel } from "@/app/components/camper/FeaturesPanel/FeaturesPanel";
import { ReviewsPanel } from "@/app/components/camper/ReviewsPanel/ReviewsPanel";

interface Props {
    params: Promise<{ id: string; tab?: string[] }>;
}

export default async function CamperTabPage({ params }: Props) {
    const { id: slugOrId, tab } = await params;
    const { id } = parseSlug(slugOrId);
    const camper = await fetchCamperById(id);

    if (!camper) return null;


    const currentTab = tab?.[0] || "features";

    if (currentTab === "reviews") {
        return <ReviewsPanel reviews={camper.reviews || []} />;
    }

    return <FeaturesPanel camper={camper} />;
}
