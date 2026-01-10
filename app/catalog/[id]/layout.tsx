import { fetchCamperById, parseSlug } from "@/app/services/campersApi";
import { CamperDetails } from "@/app/components/camper/CamperDetails/CamperDetails";
import { Header } from "@/app/components/Header/Header";
import { Metadata } from "next";

import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: slugOrId } = await params;
  const { id } = parseSlug(slugOrId);
  try {
    const camper = await fetchCamperById(id);
    return {
      title: camper.name,
      description: camper.description.slice(0, 160),
    };
  } catch (e: any) {
    return { title: "Camper Details" };
  }
}

export default async function CamperLayout({ params, children }: Props) {
  const { id: slugOrId } = await params;
  const { id } = parseSlug(slugOrId);

  let camper;
  try {
    camper = await fetchCamperById(id);
  } catch (e: any) {
    if (e.status === 404) {
      notFound();
    }
    throw e;
  }

  if (!camper) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <CamperDetails camper={camper}>{children}</CamperDetails>
      </main>
    </>
  );
}
