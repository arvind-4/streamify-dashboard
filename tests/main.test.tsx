import '@testing-library/jest-dom';
import React from 'react';
import { describe, expect, it, } from 'vitest';
import { createRoot } from 'react-dom/client';
import App from '../src/App';

describe('Index File', () => {
  it('renders the App component correctly', () => {
    const div = document.createElement('div');
    createRoot(div).render(<App />);
    expect(div).toContainHTML('<div></div>');
  });
});
