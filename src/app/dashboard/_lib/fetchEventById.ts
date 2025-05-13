const fetchEventById = async (eventId: string) => {
  try {
    const response = await fetch(`http://localhost:3001/event/${eventId}`, {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};

export default fetchEventById;
