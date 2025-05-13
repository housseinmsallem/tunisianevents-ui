'use client';
import { TextInput, Textarea, Button, Group } from '@mantine/core';
import { patchEvent } from '../actions';
import { Event } from '../dashboard/_lib/types';
import { useState } from 'react';

export default function EditEvent({ formData }: { formData: Event }) {
  const [formState, setFormState] = useState(formData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <form action={patchEvent}>
      <input
        type="text"
        hidden
        value={formState.id}
        onChange={handleChange}
        name="eventId"
      />
      <TextInput
        label="Event Name"
        name="name"
        value={formState.name}
        onChange={handleChange}
      />
      <TextInput
        label="City"
        name="city"
        value={formState.city}
        onChange={handleChange}
      />
      <TextInput
        label="Location"
        name="location"
        value={formState.location}
        onChange={handleChange}
      />
      <TextInput
        label="Date"
        name="date"
        value={formState.date}
        onChange={handleChange}
      />
      <TextInput
        label="Duration"
        name="duration"
        value={formState.duration}
        onChange={handleChange}
      />
      <TextInput
        label="Organisation"
        name="organisation"
        value={formState.organisation}
        onChange={handleChange}
      />
      <TextInput
        label="Category"
        name="category"
        value={formState.category}
        onChange={handleChange}
      />
      <Textarea
        label="Description"
        name="description"
        value={formState.description}
        onChange={handleChange}
      />
      <Group mt="md">
        <Button type="submit">Save Changes</Button>
      </Group>
    </form>
  );
}
