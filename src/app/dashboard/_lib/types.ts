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
