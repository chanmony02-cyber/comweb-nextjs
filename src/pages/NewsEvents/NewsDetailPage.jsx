import { useParams } from "react-router-dom";
import { newsEventsItems } from "@/data/newsEvents/newsEvents";
import { NewsDetailContentSection } from "./components/NewsDetailContentSection";

export default function NewsDetailPage() {
  const { id } = useParams();
  const item = newsEventsItems.find((newsItem) => newsItem.id === Number(id));

  const related = item
    ? newsEventsItems
        .filter(
          (newsItem) => newsItem.type === item.type && newsItem.id !== item.id,
        )
        .slice(0, 4)
    : [];

  if (!item) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground text-md">Article not found.</p>
      </div>
    );
  }

  return <NewsDetailContentSection item={item} related={related} />;
}
