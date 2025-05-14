export default async function fetchOverview() {
  const res = await fetch('http://localhost:3001/event/analytics/overview');
  const overview = await res.json();
  return overview;
}
