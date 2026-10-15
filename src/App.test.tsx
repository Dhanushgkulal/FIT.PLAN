import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders FitPlan heading', () => {
    render(<App />);
    const heading = screen.getByText(/FitPlan/i);
    expect(heading).toBeInTheDocument();
  });
});
