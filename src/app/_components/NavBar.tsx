import { Anchor } from '@mantine/core';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <Anchor href="/dashboard/home">Dashboard</Anchor>
      <Anchor href="/dashboard/events">Events</Anchor>
      <Anchor href="/dashboard/addEvent">Add Event</Anchor>
      <Anchor href="/dashboard/deleteEvent">Delete Event</Anchor>
    </>
  );
};

export default NavBar;
