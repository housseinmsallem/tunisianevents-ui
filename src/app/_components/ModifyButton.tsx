import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

const ModifyButton = ({ id }: { id: number }) => {
  return (
    <Link href={`/dashboard/events/${id}`}>
      <ActionIcon variant="default" aria-label="Settings">
        <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
    </Link>
  );
};

export default ModifyButton;
