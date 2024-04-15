import { act, fireEvent, render, within } from '@testing-library/react';
import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';

import { TrainerForm } from './TrainerForm';

vi.mock('axios');

describe('Trainer form', () => {
  it('renders validation errors', async () => {
    const { getByText, container } = render(<TrainerForm onSubmit={() => {}} />);

    await act(async () => {
      const submitButton = getByText('Submit');
      fireEvent.click(submitButton);
    });

    expect(container.innerHTML).toMatch('Required from 2 to 20 symbols');
    expect(container.innerHTML).toMatch('Required range from 16-99');
    expect(container.innerHTML).toMatch('Choose something');
  });

  it('calls the onSubmit function and shows success dialog', async () => {
    const onSubmitCallback = vi.fn();
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <TrainerForm onSubmit={onSubmitCallback} />,
    );

    const nameInput = getByPlaceholderText("Trainer's name") as HTMLInputElement;
    const ageInput = getByPlaceholderText("Trainer's age") as HTMLInputElement;

    expect(nameInput).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'Ash' } });
      fireEvent.blur(nameInput);

      fireEvent.change(ageInput, { target: { value: 16 } });
      fireEvent.blur(ageInput);
    });

    expect(nameInput.value).toBe('Ash');
    expect(ageInput.value).toBe('16');

    vi.mocked(axios.get).mockResolvedValue({
      data: {
        data: [
          {
            item: {
              name: 'charmander',
              id: 4,
            },
            refIndex: 1,
          },
          {
            item: {
              name: 'carracosta',
              id: 565,
            },
            refIndex: 77,
          },
          // ...
        ],
      },
    });

    const autocomplete = getByTestId('pokemon-name-autocomplete');
    const pokemonNameInput = within(autocomplete).getByRole('combobox') as HTMLInputElement;

    await act(async () => {
      autocomplete.click();
      fireEvent.change(pokemonNameInput, { target: { value: 'charm' } });

      // wait for debounced value to kick in
      await new Promise((resolve) => setTimeout(resolve, 600));
    });
    fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(autocomplete, { key: 'Enter' });
    expect(pokemonNameInput.value).toBe('charmander');

    expect(axios.get).toHaveBeenCalledWith('/api/search?name=charm');

    await act(async () => {
      const submitButton = getByText('Submit');
      fireEvent.click(submitButton);
    });

    expect(onSubmitCallback).toBeCalledTimes(1);

    const successModal = getByTestId('trainer-form-dialog');
    expect(successModal).toBeInTheDocument();
    expect(successModal).toHaveTextContent('Success');
  });

  it('resets form properly', async () => {
    const onSubmitCallback = vi.fn();
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <TrainerForm onSubmit={onSubmitCallback} />,
    );

    const nameInput = getByPlaceholderText("Trainer's name") as HTMLInputElement;
    const ageInput = getByPlaceholderText("Trainer's age") as HTMLInputElement;

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'Ash' } });
      fireEvent.blur(nameInput);

      fireEvent.change(ageInput, { target: { value: 16 } });
      fireEvent.blur(ageInput);
    });

    expect(nameInput.value).toBe('Ash');
    expect(ageInput.value).toBe('16');

    vi.mocked(axios.get).mockResolvedValue({
      data: {
        data: [
          {
            item: {
              name: 'charmander',
              id: 4,
            },
            refIndex: 1,
          },
          {
            item: {
              name: 'carracosta',
              id: 565,
            },
            refIndex: 77,
          },
          // ...
        ],
      },
    });

    const autocomplete = getByTestId('pokemon-name-autocomplete');
    const pokemonNameInput = within(autocomplete).getByRole('combobox') as HTMLInputElement;

    await act(async () => {
      autocomplete.click();
      fireEvent.change(pokemonNameInput, { target: { value: 'charm' } });

      // wait for debounced value to kick in
      await new Promise((resolve) => setTimeout(resolve, 600));
    });
    fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(autocomplete, { key: 'Enter' });
    expect(pokemonNameInput.value).toBe('charmander');

    expect(axios.get).toHaveBeenCalledWith('/api/search?name=charm');

    await act(async () => {
      const resetButton = getByText('Reset');
      fireEvent.click(resetButton);
    });

    expect(nameInput.value).toBe('');
    expect(ageInput.value).toBe('');
    expect(pokemonNameInput.value).toBe('');
  });
});
