'use client';

import Link from 'next/link';

import { routes } from '@/routes';
import { Button, Stack, Typography } from '@mui/material';

import { StarterPokemon } from './components/StarterPokemon';

const STARTERS: {
  name: string;
  id: number;
}[] = [
  {
    name: 'bulbasaur',
    id: 1,
  },
  {
    name: 'charmander',
    id: 4,
  },
  {
    name: 'squirtle',
    id: 7,
  },
];

export const NotFound = () => (
  <Stack gap={2} textAlign='center'>
    <Typography variant='h2' component='h1'>
      Looks like you're lost
    </Typography>

    <Typography variant='h3' component='p'>
      Go ahead and
    </Typography>

    <Button component={Link} href={routes.HOME}>
      Return Home
    </Button>

    <Typography fontSize={20}>Or choose your starter and hear them growl</Typography>

    <Stack direction={['column', null, 'row']} justifyContent='center'>
      {STARTERS.map(({ id, name }) => (
        <StarterPokemon id={id} name={name} key={id} />
      ))}
    </Stack>
  </Stack>
);
