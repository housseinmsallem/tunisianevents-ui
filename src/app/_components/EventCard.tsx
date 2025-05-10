import React from 'react';
import { Event } from '../dashboard/_lib/types';
import { Badge, Card, Group, Text } from '@mantine/core';

type EventCardProps = {
  event: Event;
};
const EventCard = ({ event }: EventCardProps) => {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{event.name}</Text>
          <Badge color="green">Pending</Badge>
        </Group>
        <Text>{event.description}</Text>
        <Group>
          <Text>City: {event.city}</Text>
          <Text>Location: {event.location}</Text>
        </Group>
        <Group>
          <Text>Date: {event.date}</Text>
          <Text>Duration: {event.duration}</Text>
        </Group>
        <Group>
          <Text>Organisation: {event.organisation}</Text>
          <Text>Category: {event.category}</Text>
        </Group>
      </Card>
    </>
  );
};

export default EventCard;
