import EditEventForm from '@/app/_components/EditEventForm';
import fetchEventById from '../../_lib/fetchEventById';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsRes = await params;
  const formData = await fetchEventById(paramsRes.id);
  return <EditEventForm formData={formData} />;
}
