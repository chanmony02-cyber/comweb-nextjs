import { notFound } from "next/navigation";

import { CareerDetailContentSection } from "@/screens/CareerDetail/components/CareerDetailContentSection";
import {
  getCareerPositionById,
  getCareerPositions,
} from "@/services/career";

export function generateStaticParams() {
  return getCareerPositions().map((position) => ({
    id: String(position.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const position = getCareerPositionById(id);
  if (!position) return { title: "Career" };
  return {
    title: position.title,
    description: position.aboutRole,
  };
}

export default async function CareerDetailPage({ params }) {
  const { id } = await params;
  const position = getCareerPositionById(id);
  if (!position) notFound();

  return <CareerDetailContentSection position={position} />;
}
