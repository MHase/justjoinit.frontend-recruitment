import { ReactNode, useEffect, useState } from 'react';

import Image from 'next/image';

import { pokeApi } from '@/api/pokemon.api';
import { Play } from '@/components/_icons/Play';
import { Box, Chip, IconButton, Paper, Skeleton, Stack, Typography } from '@mui/material';
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
        // used pokenode-ts to get fully typed api in case of future app "growth"
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

  const playBattleCry = () => {
    if (!pokemon) return;

    const cry = new Audio(pokemon.cries.latest);
    cry.play();
  };

  if (hasError) {
    return (
      <Wrapper>
        <Typography color='error'>Something went wrong downloading data</Typography>
      </Wrapper>
    );
  }

  if (!name || (!pokemon && !isLoading)) {
    return (
      <Wrapper>
        <Typography color='text.secondary'>Your pokemon</Typography>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Box position='relative'>
        {isLoading ? (
          <Skeleton variant='rectangular' width={196} height={196} />
        ) : (
          pokemon && (
            <Image
              src={pokemon.sprites.front_default || ''}
              alt={pokemon.name}
              width={196}
              height={196}
              quality={100}
              style={{ imageRendering: 'pixelated' }}
            />
          )
        )}
        {!isLoading && pokemon?.cries.latest && (
          <IconButton onClick={playBattleCry} sx={{ position: 'absolute', bottom: 10, right: 10 }}>
            <Play />
          </IconButton>
        )}
      </Box>

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
