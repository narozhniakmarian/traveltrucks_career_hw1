import { redirect } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function CamperRootPage({ params }: Props) {
    const { id } = await params;
    redirect(`/catalog/${id}/features`);
}
