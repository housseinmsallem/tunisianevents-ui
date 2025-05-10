import React from 'react';
import { Event } from '../dashboard/_lib/types';
import { EventListProps } from '../dashboard/_lib/types';
import EventCard from './EventCard';

const EventList = ({ events }: EventListProps) => {
  console.log(events);
  return (
    <>
      {events.map((eventItem: Event) => (
        <EventCard key={eventItem.id} event={eventItem} />
      ))}
    </>
  );
};

export default EventList;
