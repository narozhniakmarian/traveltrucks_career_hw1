import { fetchCamperById, parseSlug, createSlug } from "@/app/services/campersApi";
import { CamperDetails } from "@/app/components/camper/CamperDetails/CamperDetails";
import { Header } from "@/app/components/Header/Header";
import { Metadata } from "next";
import { redirect } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
    children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id: slugOrId } = await params;
    const { id } = parseSlug(slugOrId);
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

export default async function CamperLayout({ params, children }: Props) {
    const { id: slugOrId } = await params;
    const { id } = parseSlug(slugOrId);

    let camper;
    try {
        camper = await fetchCamperById(id);
    } catch (e) {
        return (
            <div>
                <h1>Error loading camper</h1>
                <p>Could not fetch data for ID: {id}</p>
            </div>
        );
    }

    if (!camper) {
        return <div>Camper not found</div>;
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <CamperDetails camper={camper}>
                        {children}
                    </CamperDetails>
                </div>
            </main>
        </>
    );
}

