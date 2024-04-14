'use client';

import { Form } from '@/components/Form';
import { CurrentTime } from '@/types/timeapi';
import { Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

type HomeProps = {
  currentDateTime: CurrentTime['dateTime'];
};

export const Home = ({ currentDateTime }: HomeProps) => (
  <Stack
    component={Paper}
    p={3.2}
    spacing={2.4}
    alignItems='center'
    justifyContent='center'
    maxWidth={544}
  >
    <Typography alignSelf='flex-end' variant='subtitle1'>
      {dayjs(currentDateTime).format('dddd, DD.M.YYYY')}
    </Typography>
    <Form />
  </Stack>
);
