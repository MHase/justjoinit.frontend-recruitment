'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { zodResolver } from '@hookform/resolvers/zod';
import { Autocomplete, Box, Button, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';
import useSWR from 'swr';
import * as z from 'zod';

import { PokemonCard } from './PokemonCard/PokemonCard';

type LocalPokemon = {
  item: {
    name: string;
    id: number;
  };
  refIndex: number;
};

type FormValues = {
  name: string;
  age: number;
  pokemonName: string | null;
};

const schema = z.object({
  name: z.string().refine((val) => val.length >= 2 && val.length <= 20, {
    message: 'Required from 2 to 20 symbols',
  }),
  age: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => val >= 16 && val <= 99, {
      message: 'Required range from 16-99',
    }),
  pokemonName: z
    .string()
    .nullable()
    .transform((value) => value ?? NaN),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      pokemonName: null,
    },
  });

  const pokemonName = watch('pokemonName');

  const onSubmit = handleSubmit((data) => console.log(data));

  const [inputValue, setInputValue] = useState<string>('');
  const debouncedSearchValue = useDebouncedValue(inputValue, 500);

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data } = useSWR<{ data: LocalPokemon[] }>(
    debouncedSearchValue && debouncedSearchValue.length >= 3
      ? `/api/search?name=${debouncedSearchValue}`
      : null,
    fetcher,
  );

  const availablePokemons = data?.data || [];

  return (
    <Box maxWidth={554}>
      <Grid component='form' onSubmit={onSubmit} container spacing={2.4}>
        <Grid xs={12} md={6}>
          <TextField
            {...register('name')}
            label="Trainer's name"
            placeholder="Trainer's name"
            fullWidth
          />
          {errors?.name && <p>{errors.name.message}</p>}
        </Grid>

        <Grid xs={12} md={6}>
          <TextField
            {...register('age')}
            label="Trainer's age"
            placeholder="Trainer's age"
            fullWidth
          />
          {errors?.age && <p>{errors.age.message}</p>}
        </Grid>

        <Grid xs={12}>
          <Autocomplete
            renderInput={(params) => (
              <TextField {...params} label='Pokemon name' placeholder='Choose' />
            )}
            inputValue={inputValue}
            onInputChange={(_, value) => setInputValue(value)}
            onChange={(_, value) => setValue('pokemonName', value)}
            value={watch('pokemonName') || null}
            options={availablePokemons.map((entry) => entry.item.name) || []}
          />
        </Grid>

        <Grid xs={12}>
          <PokemonCard name={pokemonName} />
        </Grid>

        <Grid xs={12}>
          <Stack component={Stack} justifyContent='flex-end' spacing={1.6} direction='row'>
            <Button variant='contained' onClick={() => reset()}>
              Reset
            </Button>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
