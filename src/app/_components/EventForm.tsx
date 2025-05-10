import { Button, Fieldset, Group, Textarea, TextInput } from '@mantine/core';
import React from 'react';

const EventForm = () => {
  return (
    <Fieldset legend="Submit Event">
      <TextInput label="Event Name" placeholder="Your name" />
      <Group>
        <TextInput label="City" placeholder="City" mt="md" />
        <TextInput label="Location" placeholder="Location" mt="md" />
      </Group>
      <Group>
        <TextInput label="Date" placeholder="Date" mt="md" />
        <TextInput label="Duration" placeholder="Duration" mt="md" />
      </Group>
      <Group>
        <TextInput label="Organisation" placeholder="Organisation" mt="md" />
        <TextInput label="Category" placeholder="Category" mt="md" />
      </Group>
      <Textarea
        label="Description"
        description="Event Description"
        placeholder="Event Description"
        autosize
        minRows={4}
        maxRows={8}
      />
      <Button variant="filled" type="submit">
        Submit
      </Button>
    </Fieldset>
  );
};

export default EventForm;
