import { describe, it, expect, vi } from 'vitest';
import { api } from '../src/services/api';

describe('API Module', () => {
  describe('getMetrics', () => {
    it('should return correct metrics data', async () => {
      const data = await api.getMetrics();
      expect(data).toEqual({
        totalUsers: 150000,
        activeUsers: 98500,
        totalStreams: 4500000,
        revenue: 750000,
        topArtist: 'The Weekend',
      });
    });
  });

  describe('getUserGrowth', () => {
    it('should return correct user growth data for March 2023', async () => {
      const data = await api.getUserGrowth();
      expect(data[0]).toEqual({
        month: '2023-03',
        totalUsers: 100000,
        activeUsers: 75000,
        premium: 50000,
      });
    });
  });

  describe('getRevenueDistribution', () => {
    it('should return correct revenue distribution data', async () => {
      const data = await api.getRevenueDistribution();
      expect(data).toEqual([
        { source: 'Subs', amount: 500000, percentage: 66.7 },
        { source: 'Ads', amount: 150000, percentage: 20 },
        { source: 'Merch', amount: 50000, percentage: 6.7 },
        { source: 'Events', amount: 50000, percentage: 6.6 },
      ]);
    });
  });

});
