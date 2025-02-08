export interface Metrics {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
}

export interface UserGrowthData {
  month: string;
  totalUsers: number;
  activeUsers: number;
  premium: number;
}

export interface RevenueData {
  source: string;
  amount: number;
  percentage: number;
}

export interface TopSong {
  name: string;
  artist: string;
  streams: number;
  revenue: number;
}

export interface StreamData {
  id: string;
  songName: string;
  artist: string;
  genre: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
  userType: 'Premium' | 'Free';
}

export interface GenreData {
  genre: string;
  streams: number;
  percentage: number;
}

export interface CountryStreamData {
  country: string;
  streams: number;
  revenue: number;
}

export interface TimeDistributionData {
  hour: string;
  streams: number;
}
