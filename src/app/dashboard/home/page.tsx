import { Card, Title, Text, Grid } from '@mantine/core';
import { AnalyticsResponse } from '../_lib/types';
import fetchOverview from '../_lib/fetchOverview';

export default async function Home() {
  const overview: AnalyticsResponse = await fetchOverview();

  return (
    <Grid>
      <Card shadow="sm" p="lg">
        <Title order={4}>Total Events</Title>
        <Text>{overview.totalEvents}</Text>
      </Card>

      <Card shadow="sm" p="lg">
        <Title order={4}>Events by Category</Title>
        {overview.categories.map((c: any) => (
          <Text key={c.event_category}>
            {c.event_category}: {c.count}
          </Text>
        ))}
      </Card>

      <Card shadow="sm" p="lg">
        <Title order={4}>Events by City</Title>
        {overview.cities.map((c: any) => (
          <Text key={c.event_city}>
            {c.event_city}: {c.count}
          </Text>
        ))}
      </Card>
    </Grid>
  );
}
