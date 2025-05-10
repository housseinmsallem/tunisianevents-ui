import React from 'react';
import fetchEvents from '../_lib/fetchEvents';
import { Event } from '../_lib/types';
import EventList from '@/app/_components/EventList';
const Events = async () => {
  const eventJSON: Event[] = await fetchEvents();
  return <EventList events={eventJSON} />;
};

export default Events;
