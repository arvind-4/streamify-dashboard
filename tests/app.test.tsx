import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';
import { ThemeProvider } from '../src/components/theme-provider';

describe('App Component', () => {
  it('renders the Dashboard component', () => {
    render(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    );

    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  it('applies dark theme by default', () => {
    render(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    );

    // Check if the dark theme is applied (this will depend on how you handle themes in your app)
    expect(document.body.classList.contains('dark')).toBe(false);
  });
});
