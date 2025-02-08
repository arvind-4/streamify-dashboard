import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { TopSong } from '../../interface';

export const TopSongsChart = ({ data }: { data: TopSong[] | null }) => {
  if (!data) {
    return null;
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Top Songs by Streams</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Legend />
              <Bar dataKey="streams" fill="#0088FE" name="Total Streams" />
              <Bar dataKey="revenue" fill="#00C49F" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
