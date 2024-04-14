import { ReactNode, useEffect, useState } from 'react';

import Image from 'next/image';

import { pokeApi } from '@/api/pokemon.api';
import { Chip, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { Pokemon } from 'pokenode-ts';

const Wrapper = ({ children }: { children: ReactNode }) => (
  <Stack
    component={Paper}
    sx={{ p: 3.2 }}
    direction={['column', null, 'row']}
    alignItems='center'
    justifyContent='center'
    gap={2.4}
    minHeight={254}
  >
    {children}
  </Stack>
);

type PokemonCardProps = {
  name: string | null;
};

export const PokemonCard = ({ name }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<
    Pokemon & {
      cries: {
        latest: 'string';
        legacy: 'string';
      };
    }
  >();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!name || name?.length < 3) return;

      setIsLoading(true);
      setHasError(false);

      try {
        // used pokenode-ts to get fully typed api in case of future app growth
        // unfortunately we gave to handle loading and error state manually (in this case swr could be used)
        const data = await pokeApi.getPokemonByName(name);

        // unfortunately every packages available has outdated types
        // so in this case we need to omit this error
        // @ts-ignore
        setPokemon(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [name]);

  useEffect(() => {
    if (!pokemon || !pokemon?.cries.latest) return;

    const cry = new Audio(pokemon.cries.latest);
    cry.play();
  }, [pokemon]);

  if (!pokemon && !isLoading) {
    return (
      <Wrapper>
        <Typography>Your pokemon</Typography>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {isLoading ? (
        <Skeleton variant='rectangular' width={196} height={196} />
      ) : (
        pokemon &&
        pokemon.sprites.front_default && (
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={196}
            height={196}
            quality={100}
            style={{ imageRendering: 'pixelated' }}
          />
        )
      )}

      <Stack gap={0.8}>
        <Typography>
          Name:{' '}
          <Typography component='span'>
            {isLoading ? <Skeleton sx={{ display: 'inline-block' }} width={80} /> : pokemon?.name}
          </Typography>
        </Typography>
        <Stack component={Typography} gap={0.8} direction='row' alignItems='center'>
          Type:{' '}
          {isLoading ? (
            <Skeleton width={53} height={32} />
          ) : (
            pokemon?.types.map(({ slot, type }) => (
              <Chip
                component='span'
                color='primary'
                key={slot}
                label={type.name}
                sx={{ textTransform: 'capitalize' }}
              />
            ))
          )}
        </Stack>
        <Typography>
          Base experience:{' '}
          {isLoading ? (
            <Skeleton sx={{ display: 'inline-block' }} width={18} />
          ) : (
            pokemon?.base_experience
          )}
        </Typography>
        <Typography>
          Id: {isLoading ? <Skeleton sx={{ display: 'inline-block' }} width={18} /> : pokemon?.id}
        </Typography>
      </Stack>
    </Wrapper>
  );
};
