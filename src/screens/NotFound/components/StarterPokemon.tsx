'use client';

import Image from 'next/image';

import { Button } from '@mui/material';

export const StarterPokemon = ({ id, name }: { id: number; name: string }) => {
  const playBattleCry = () => {
    const cry = new Audio(
      `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`,
    );
    cry.play();
  };

  return (
    <Button variant='text' onClick={playBattleCry}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        width={196}
        height={196}
        quality={100}
        style={{ imageRendering: 'pixelated' }}
      />
    </Button>
  );
};
