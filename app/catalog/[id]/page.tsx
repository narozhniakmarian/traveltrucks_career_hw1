import { fetchCamperById } from "@/app/services/campersApi";
import { CamperDetails } from "@/app/components/camper/CamperDetails";
import { Header } from "@/app/components/Header/Header";
import { Metadata } from "next";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    try {
        const camper = await fetchCamperById(id);
        if (!camper) return { title: "Camper Not Found" };

        return {
            title: camper.name,
            description: camper.description.slice(0, 160),
        };
    } catch {
        return { title: "Camper Details" };
    }
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

