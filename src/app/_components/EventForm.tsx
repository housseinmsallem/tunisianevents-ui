'use client';
import { Button, Fieldset, Group, Textarea, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { createEvent } from '../actions';

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    city: '',
    location: '',
    date: '',
    duration: '',
    organisation: '',
    category: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fieldset legend="Submit Event">
      <form action={createEvent}>
        <TextInput
          label="Event Name"
          placeholder="Event Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Group>
          <TextInput
            label="City"
            placeholder="City"
            mt="md"
            value={formData.city}
            onChange={handleChange}
          />
          <TextInput
            label="Location"
            placeholder="Location"
            mt="md"
            value={formData.location}
            onChange={handleChange}
          />
        </Group>
        <Group>
          <TextInput
            label="Date"
            placeholder="Date"
            mt="md"
            value={formData.date}
            onChange={handleChange}
          />
          <TextInput
            label="Duration"
            placeholder="Duration"
            mt="md"
            value={formData.duration}
            onChange={handleChange}
          />
        </Group>
        <Group>
          <TextInput
            label="Organisation"
            placeholder="Organisation"
            mt="md"
            value={formData.organisation}
            onChange={handleChange}
          />
          <TextInput
            label="Category"
            placeholder="Category"
            mt="md"
            value={formData.category}
            onChange={handleChange}
          />
        </Group>
        <Textarea
          label="Description"
          description="Event Description"
          placeholder="Event Description"
          autosize
          minRows={4}
          maxRows={8}
          value={formData.description}
          onChange={handleChange}
        />
        <Button variant="filled" type="submit">
          Submit
        </Button>
      </form>
    </Fieldset>
  );
};

export default EventForm;
