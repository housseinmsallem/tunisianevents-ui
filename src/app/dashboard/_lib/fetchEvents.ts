const fetchEvents = async () => {
  try {
    const response = await fetch('http://localhost:3001/event', {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};

export default fetchEvents;
