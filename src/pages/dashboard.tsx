import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, PlayCircle, DollarSign, Music } from 'lucide-react';
import { api } from '@/services/api';
import { StreamingTable } from '@/components/custom-table/streaming-table';
import {
  CountryStreamData,
  GenreData,
  Metrics,
  RevenueData,
  StreamData,
  TimeDistributionData,
  TopSong,
  UserGrowthData,
} from '@/interface';
import { ModeToggle } from '@/components/mode-toggle';
import { UserGrowthChart } from '@/components/custom-charts/user-growth';
import { TopSongsChart } from '@/components/custom-charts/top-songs';
import { RevenueDistributionChart } from '@/components/custom-charts/revenue-distribution';
import { GenreDistributionChart } from '@/components/custom-charts/gerne-distribution';
import { TimeDistributionChart } from '@/components/custom-charts/time-distribution';
import { CountryStreamChart } from '@/components/custom-charts/country-stream';

interface DashboardData {
  metrics: Metrics | null;
  userGrowth: UserGrowthData[] | [];
  revenueDistribution: RevenueData[] | null;
  topSongs: TopSong[] | null;
  recentStreams: StreamData[] | null;
  genreDistribution: GenreData[] | null;
  countryStreams: CountryStreamData[] | null;
  timeDistribution: TimeDistributionData[] | null;
}

const Dashboard = () => {
  const [data, setData] = useState<DashboardData>({
    metrics: null,
    userGrowth: [],
    revenueDistribution: [],
    topSongs: [],
    recentStreams: [],
    genreDistribution: [],
    countryStreams: [],
    timeDistribution: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          metrics,
          userGrowth,
          revenueDistribution,
          topSongs,
          recentStreams,
          genreDistribution,
          countryStreams,
          timeDistribution,
        ] = await Promise.allSettled([
          api.getMetrics(),
          api.getUserGrowth(),
          api.getRevenueDistribution(),
          api.getTopSongs(),
          api.getRecentStreams(),
          api.getGenreDistribution(),
          api.getCountryStreams(),
          api.getTimeDistribution(),
        ]);

        setData((prevData) => ({
          ...prevData,
          ...(metrics.status === 'fulfilled' && { metrics: metrics.value }),
          ...(userGrowth.status === 'fulfilled' && {
            userGrowth: userGrowth.value,
          }),
          ...(revenueDistribution.status === 'fulfilled' && {
            revenueDistribution: revenueDistribution.value,
          }),
          ...(topSongs.status === 'fulfilled' && { topSongs: topSongs.value }),
          ...(recentStreams.status === 'fulfilled' && {
            recentStreams: recentStreams.value,
          }),
          ...(genreDistribution.status === 'fulfilled' && {
            genreDistribution: genreDistribution.value,
          }),
          ...(countryStreams.status === 'fulfilled' && {
            countryStreams: countryStreams.value,
          }),
          ...(timeDistribution.status === 'fulfilled' && {
            timeDistribution: timeDistribution.value,
          }),
        }));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg">Loading dashboard data...</div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Streamify Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleString()}
          <span className="mx-2">
            <ModeToggle />
          </span>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data?.metrics?.totalUsers.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {data?.metrics?.activeUsers.toLocaleString()} active users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Streams</CardTitle>
            <PlayCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data?.metrics?.totalStreams.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Lifetime streams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${data?.metrics?.revenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Total revenue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Artist</CardTitle>
            <Music className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.metrics?.topArtist}</div>
            <p className="text-xs text-muted-foreground">
              Most streamed this month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <UserGrowthChart data={data.userGrowth} />
        <RevenueDistributionChart data={data.revenueDistribution} />
        <TopSongsChart data={data?.topSongs} />
        <GenreDistributionChart data={data.genreDistribution} />
        <TimeDistributionChart data={data.timeDistribution} />
        <CountryStreamChart data={data.countryStreams} />
      </div>
      <StreamingTable data={data.recentStreams} />
    </div>
  );
};

export default Dashboard;
