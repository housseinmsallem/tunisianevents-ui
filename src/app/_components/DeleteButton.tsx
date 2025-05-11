import { ActionIcon, Button } from '@mantine/core';
import React from 'react';
import { IconAdjustments, IconTrash } from '@tabler/icons-react';
import { deleteEvent } from '../actions';
const DeleteButton = ({ id }: { id: number }) => {
  return (
    <ActionIcon color="red" aria-label="Settings">
      <form action={deleteEvent}>
        <input type="hidden" name="id" value={id} />
        <button type="submit">
          <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </button>
      </form>
    </ActionIcon>
  );
};

export default DeleteButton;
