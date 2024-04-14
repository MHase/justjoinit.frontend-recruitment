import { useEffect } from 'react';

import Image from 'next/image';

import { Box, Button, Stack, Typography } from '@mui/material';

import shockedImg from './assets/shocked.png';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Stack gap={2}>
        <Typography variant='h2' component='h1'>
          Something went wrong!
        </Typography>

        <Button onClick={() => reset()}>Try again</Button>

        <Image
          src={shockedImg}
          alt='shocked pikachu'
          style={{ position: 'fixed', bottom: 0, right: 20 }}
        />
      </Stack>
    </>
  );
};
