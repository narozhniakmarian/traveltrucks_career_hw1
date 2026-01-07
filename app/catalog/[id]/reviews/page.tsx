import { fetchCamperById, parseSlug } from "@/app/services/campersApi";
import { ReviewsPanel } from "@/app/components/camper/ReviewsPanel/ReviewsPanel";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ReviewsPage({ params }: Props) {
    const { id: slugOrId } = await params;
    const { id } = parseSlug(slugOrId);
    const camper = await fetchCamperById(id);

    if (!camper || !camper.reviews) return null;

    return <ReviewsPanel reviews={camper.reviews} />;
}
