import { Form } from '@/components/form';
import { CurrentTime } from '@/types/timeapi';
import { Paper, Stack, Typography } from '@mui/material';
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
    <Stack
      component={Paper}
      p={3.2}
      spacing={2.4}
      alignItems='center'
      justifyContent='center'
      maxWidth={544}
    >
      <Typography alignSelf='flex-end' variant='subtitle1'>
        {dayjs(data.dateTime).format('dddd, DD.M.YYYY')}
      </Typography>
      <Form />
    </Stack>
  );
}
