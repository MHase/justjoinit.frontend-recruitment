import { screen } from '@testing-library/dom';
import { act, fireEvent, render, waitFor, within } from '@testing-library/react';
import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';

import { PokemonCard } from './PokemonCard';

vi.mock('axios');

describe('Pokemon Card', () => {
  it('renders validation errors', async () => {
    const { getByTestId } = render(<PokemonCard name='bulbasaur' />);

    vi.mocked(axios.get).mockResolvedValue({
      base_experience: 64,
      cries: {
        latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
        legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg',
      },
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      },
    });

    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    });

    expect(getByTestId('pokemon-name').innerHTML).contains('bulbasaur');
    expect(getByTestId('pokemon-types').innerHTML).contains('grass');
    expect(getByTestId('pokemon-base-exp').innerHTML).contains('64');
    expect(getByTestId('pokemon-id').innerHTML).contains('1');
  });
});
