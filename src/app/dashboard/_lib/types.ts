export interface Event {
  id: number;
  name: string;
  description: string;
  city: string;
  location: string;
  date: string;
  duration: string;
  organisation: string;
  category: string;
}
export interface EventListProps {
  events: Event[];
}
export interface AnalyticsResponse {
  totalEvents: number;
  categories: {
    event_category: string;
    count: string; // If count is returned as a string from the DB (e.g., via raw SQL)
  }[];
  cities: {
    event_city: string;
    count: string; // Same note as above
  }[];
}
