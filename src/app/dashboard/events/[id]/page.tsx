import React from 'react';

interface EventPageProps {
  params: { id: string };
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = params;

  // Example: fetch event details by ID
  const res = await fetch(`http://localhost:3001/event/${id}`, {
    method: 'GET',
  });
  const event = await res.json();

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>
        {event.city} - {event.date}
      </p>
    </div>
  );
}
