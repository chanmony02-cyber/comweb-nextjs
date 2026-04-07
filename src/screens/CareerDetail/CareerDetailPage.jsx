import { notFound } from "next/navigation";
import { CareerDetailContentSection } from "./components/CareerDetailContentSection";
import { getCareerPositionById } from "@/services/career";

export default function CareerDetailPage({ params }) {
  const position = getCareerPositionById(params?.id);

  if (!position) notFound();

  return <CareerDetailContentSection position={position} />;
}
