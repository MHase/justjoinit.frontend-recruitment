import { Form } from '@/components/form';
import { CurrentTime } from '@/types/timeapi';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';

const getData = async (): Promise<CurrentTime> => {
  const res = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Warsaw', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Typography>{dayjs(data.dateTime).format('dddd, DD.M.YYYY')}</Typography>
      <Form />
    </main>
  );
}
