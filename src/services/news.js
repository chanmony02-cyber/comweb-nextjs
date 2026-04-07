import { newsEventsItems } from "@/data/newsEvents/newsEvents";

export function getNewsEvents() {
  return [...newsEventsItems];
}

export function getNewsEventById(id) {
  const newsId = Number(id);
  if (Number.isNaN(newsId)) return null;

  return newsEventsItems.find((item) => item.id === newsId) ?? null;
}

export function getNewsEventsByType(type) {
  if (!type || type === "All") {
    return getNewsEvents();
  }

  return newsEventsItems.filter((item) => item.type === type);
}

export function getRelatedNewsEvents(type, currentId, limit = 4) {
  if (!type) return [];

  return newsEventsItems
    .filter((item) => item.type === type && item.id !== currentId)
    .slice(0, limit);
}
