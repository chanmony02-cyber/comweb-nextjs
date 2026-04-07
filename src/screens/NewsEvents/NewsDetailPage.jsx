import { notFound } from "next/navigation";
import { NewsDetailContentSection } from "./components/NewsDetailContentSection";
import {
  getNewsEventById,
  getRelatedNewsEvents,
} from "@/services/news";

export default function NewsDetailPage({ params }) {
  const item = getNewsEventById(params?.id);

  if (!item) notFound();

  const related = getRelatedNewsEvents(item.type, item.id);

  return <NewsDetailContentSection item={item} related={related} />;
}
