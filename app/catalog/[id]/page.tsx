import { fetchCamperById } from "@/app/services/campersApi";
import { CamperDetails } from "@/app/components/camper/CamperDetails";
import { Header } from "@/app/components/Header/Header";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function CamperPage({ params }: Props) {
    const { id } = await params;
    const camper = await fetchCamperById(id);

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <CamperDetails camper={camper} />
                </div>
            </main>
        </>
    );
}

