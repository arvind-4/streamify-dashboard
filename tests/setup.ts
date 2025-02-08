import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { beforeAll } from "vitest";

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  };
});

afterEach(() => {
  cleanup();
});
