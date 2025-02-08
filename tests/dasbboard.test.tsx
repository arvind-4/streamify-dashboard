import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '../src/pages/dashboard';
import { vi, describe, expect, test } from 'vitest';
import { api } from '../src/services/api';

// global.ResizeObserver = class {
//   observe() {}
//   unobserve() {}
//   disconnect() {}
// };

describe('Dashboard Component', () => {
  test('renders dashboard data with real getMetrics()', async () => {
    vi.spyOn(api, 'getMetrics').mockResolvedValue({
      totalUsers: 150000,
      activeUsers: 98500,
      totalStreams: 4500000,
      revenue: 750000,
      topArtist: 'The Weekend',
    });
    vi.spyOn(api, 'getUserGrowth').mockResolvedValue([]);
    vi.spyOn(api, 'getRevenueDistribution').mockResolvedValue([]);
    vi.spyOn(api, 'getTopSongs').mockResolvedValue([]);
    vi.spyOn(api, 'getRecentStreams').mockResolvedValue([]);
    vi.spyOn(api, 'getGenreDistribution').mockResolvedValue([]);
    vi.spyOn(api, 'getCountryStreams').mockResolvedValue([]);
    vi.spyOn(api, 'getTimeDistribution').mockResolvedValue([]);
    render(<Dashboard />);
    waitFor(() => {
      expect(screen.getByText('150,000')).toBeInTheDocument();
      expect(screen.getByText('98,500 active users')).toBeInTheDocument();
      expect(screen.getByText('4,500,000')).toBeInTheDocument();
      expect(screen.getByText('$750,000')).toBeInTheDocument();
      expect(screen.getByText('The Weekend')).toBeInTheDocument();
    });
  });
});
