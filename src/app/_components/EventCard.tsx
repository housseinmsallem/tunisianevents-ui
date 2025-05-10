import React from 'react';
import { Event } from '../dashboard/_lib/types';
import { Card, Text } from '@mantine/core';

type EventCardProps = {
  event: Event;
};
const EventCard = ({ event }: EventCardProps) => {
  return (
    <>
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
    </>
  );
};

export default EventCard;
