import { Home } from '@/screens/Home';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Home screen', () => {
  it('shows proper time format', () => {
    render(<Home currentDateTime='2024-04-15T10:10:36.7075302' />);
    expect(screen.getByTestId('timestamp').textContent).toBe('Monday, 15.4.2024');
  });

  it('renders trainer form', () => {
    render(<Home currentDateTime='2024-04-15T10:10:36.7075302' />);
    expect(screen.getByTestId('trainer-form')).toBeInTheDocument();
  });
});
