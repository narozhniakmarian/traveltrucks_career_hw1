import { fetchCamperById } from '@/services/campersApi';
import { CamperDetails } from '@/components/camper/CamperDetails';

interface Props {
    params: { id: string };
}

export default async function CamperPage({ params }: Props) {
    const camper = await fetchCamperById(params.id);

    return (
        <main>
            <CamperDetails camper={camper} />
        </main>
    );
}
