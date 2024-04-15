'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { fetcher } from '@/api/default.api';
import { Spinner } from '@/components/_icons/Spinner';
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

import { PokemonCard } from '../PokemonCard';
import { SuccessDialog } from './SuccessDialog';
import { schema } from './TrainerForm.schema';

const SEARCH_LENGTH_THRESHOLD = 3;

type LocalPokemon = {
  item: {
    name: string;
    id: number;
  };
  refIndex: number;
};

type FormValues = z.infer<typeof schema>;

type TrainerFormProps = {
  onSubmit: (data: FormValues) => void;
};

export const TrainerForm = ({ onSubmit }: TrainerFormProps) => {
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

  const [inputValue, setInputValue] = useState<string>('');
  const debouncedSearchValue = useDebouncedValue(inputValue, 500);

  const { data, isValidating } = useSWR<{ data: LocalPokemon[] }>(
    debouncedSearchValue && debouncedSearchValue.length >= SEARCH_LENGTH_THRESHOLD
      ? `/api/search?name=${debouncedSearchValue}`
      : null,
    fetcher,
  );

  const availablePokemons = data?.data || [];

  const noOptionsText = useMemo(() => {
    if (debouncedSearchValue.length < SEARCH_LENGTH_THRESHOLD) {
      return 'Enter pokemon name';
    }

    return 'No pokemons found';
  }, [debouncedSearchValue]);

  return (
    <>
      <SuccessDialog open={isSubmitSuccessful} onProceed={reset} />

      <Grid
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        container
        spacing={2.4}
        data-testid='trainer-form'
      >
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
            data-testid='pokemon-name-autocomplete'
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
            noOptionsText={noOptionsText}
            filterOptions={(option) => option}
            {...(isValidating && { popupIcon: <Spinner className='spin' /> })}
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
