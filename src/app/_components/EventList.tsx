import React from 'react';
import { Event } from '../dashboard/_lib/types';
import { EventListProps } from '../dashboard/_lib/types';
import EventCard from './EventCard';

const EventList = ({ events }: EventListProps) => {
  return (
    <div>
      {events.map((eventItem: Event) => (
        <EventCard key={eventItem.id} event={eventItem} />
      ))}
    </div>
  );
};

export default EventList;
