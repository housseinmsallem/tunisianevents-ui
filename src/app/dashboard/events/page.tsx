import { get } from 'http';
import React from 'react';
import fetchEvents from '../_lib/fetchEvents';
import { Card, Text } from '@mantine/core';
import { Event } from '../_lib/types';
const Events = async () => {
  const events: Event[] = await fetchEvents();
  return (
    <div>
      {events.map((event) => (
        <Card key={event.id}>
          <Text>{event.name}</Text>
          <Text>{event.description}</Text>
          <Text>{event.city}</Text>
          <Text>{event.location}</Text>
          <Text>{event.date}</Text>
          <Text>{event.duration}</Text>
          <Text>{event.organisation}</Text>
          <Text>{event.category}</Text>
        </Card>
      ))}
    </div>
  );
};

export default Events;
