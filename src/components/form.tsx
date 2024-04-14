'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { fetcher } from '@/api/default.api';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  Button,
  Dialog,
  FormLabel,
  Stack,
  TextField,
  Typography,
  paperClasses,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import useSWR from 'swr';
import * as z from 'zod';

import { PokemonCard } from './PokemonCard/PokemonCard';
import { Spinner } from './_icons/Spinner';

type LocalPokemon = {
  item: {
    name: string;
    id: number;
  };
  refIndex: number;
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
    .refine((val) => val !== null, {
      message: 'Choose something',
    }),
});

type FormValues = z.infer<typeof schema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    watch,
    setValue,
    reset,
    trigger,
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      pokemonName: null,
    },
  });

  const pokemonName = watch('pokemonName');

  const onSubmit = handleSubmit((data) => console.log(data));

  const [inputValue, setInputValue] = useState<string>('');
  const debouncedSearchValue = useDebouncedValue(inputValue, 500);

  const { data, isValidating } = useSWR<{ data: LocalPokemon[] }>(
    debouncedSearchValue && debouncedSearchValue.length >= 3
      ? `/api/search?name=${debouncedSearchValue}`
      : null,
    fetcher,
  );

  const availablePokemons = data?.data || [];

  const noOptionsText = useMemo(() => {
    if (!debouncedSearchValue.length) {
      return 'Enter pokemon name';
    }

    return 'No pokemons found';
  }, [debouncedSearchValue]);

  return (
    <>
      <Dialog
        open={isSubmitSuccessful}
        sx={{
          mx: 'auto',
          // could use maxWidth prop but not for custom value
          maxWidth: 380,
          [`& .${paperClasses.root}`]: {
            width: '100%',
          },
        }}
      >
        <Stack p={3.2} textAlign='center' spacing={3.2} alignItems='center'>
          <Typography variant='headline'>Success</Typography>
          <Button
            onClick={() => {
              reset();
            }}
          >
            Reset form
          </Button>
        </Stack>
      </Dialog>

      <Grid component='form' onSubmit={onSubmit} container spacing={2.4}>
        <Grid xs={12} md={6}>
          <FormLabel htmlFor='name'>Trainer&apos;s name</FormLabel>
          <TextField
            {...register('name')}
            id='name'
            placeholder="Trainer's name"
            fullWidth
            error={Boolean(errors.name)}
            helperText={errors.name && errors.name.message}
          />
        </Grid>

        <Grid xs={12} md={6}>
          <FormLabel htmlFor='age'>Trainer&apos;s age</FormLabel>
          <TextField
            {...register('age')}
            id='age'
            placeholder="Trainer's age"
            fullWidth
            error={Boolean(errors.age)}
            helperText={errors.age && errors.age.message}
          />
        </Grid>

        <Grid xs={12}>
          <FormLabel htmlFor='pokemonName'>Pokemon name</FormLabel>
          <Autocomplete
            renderInput={(params) => (
              <TextField
                {...params}
                id='pokemonName'
                placeholder='Choose'
                error={Boolean(errors.pokemonName)}
                helperText={errors.pokemonName && errors.pokemonName.message}
              />
            )}
            inputValue={inputValue}
            onInputChange={(_, value) => setInputValue(value)}
            onChange={(_, value) => {
              setValue('pokemonName', value);
              trigger('pokemonName');
            }}
            value={watch('pokemonName') || null}
            options={availablePokemons.map((entry) => entry.item.name) || []}
            popupIcon={isValidating && <Spinner className='spin' />}
            noOptionsText={noOptionsText}
          />
        </Grid>

        <Grid xs={12}>
          <PokemonCard name={pokemonName} />
        </Grid>

        <Grid xs={12}>
          <Stack component={Stack} justifyContent='flex-end' spacing={1.6} direction='row'>
            <Button variant='soft' onClick={() => reset()}>
              Reset
            </Button>
            <Button type='submit'>Submit</Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
