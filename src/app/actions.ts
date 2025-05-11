'use server';
export async function createEvent(formData: FormData) {
  const data = {
    name: formData.get('name'),
    description: formData.get('description'),
    city: formData.get('city'),
    location: formData.get('location'),
    date: formData.get('date'),
    duration: formData.get('duration'),
    organisation: formData.get('organisation'),
    category: formData.get('category'),
  };
  const res = await fetch('http://localhost:3001/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  console.log('Submitted:', result);
}

export async function deleteEvent(formData: FormData) {
  const id = formData.get('id');
  const res = await fetch(`http://localhost:3001/event/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await res.json();
  console.log('Deleted', result);
}
