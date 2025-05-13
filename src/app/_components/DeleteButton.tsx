import { ActionIcon, Button } from '@mantine/core';
import React from 'react';
import { IconAdjustments, IconTrash } from '@tabler/icons-react';
import { deleteEvent } from '../actions';
const DeleteButton = ({ id }: { id: number }) => {
  return (
    <form action={deleteEvent}>
      <button type="submit">
        <ActionIcon color="red" aria-label="Settings">
          <input type="hidden" name="id" value={id} />
          <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </button>
    </form>
  );
};

export default DeleteButton;
