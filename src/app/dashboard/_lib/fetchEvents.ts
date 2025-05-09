import React from 'react';

const fetchEvents = async () => {
  try {
    const response = await fetch('http://localhost:3001/event', {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return 'No Items Found';
  }
};

export default fetchEvents;
