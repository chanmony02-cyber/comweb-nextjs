import { notFound } from "next/navigation";

import { NewsDetailContentSection } from "@/screens/NewsEvents/components/NewsDetailContentSection";
import {
  getNewsEventById,
  getNewsEvents,
  getRelatedNewsEvents,
} from "@/services/news";

export function generateStaticParams() {
  return getNewsEvents().map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = getNewsEventById(id);
  if (!item) return { title: "News" };
  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const item = getNewsEventById(id);
  if (!item) notFound();

  const related = getRelatedNewsEvents(item.type, item.id);

  return <NewsDetailContentSection item={item} related={related} />;
}

