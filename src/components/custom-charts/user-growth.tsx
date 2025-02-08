import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { format } from 'date-fns';

import { UserGrowthData } from '../../interface';

export const UserGrowthChart = ({
  data,
}: {
  data: UserGrowthData[] | null;
}) => {
  if (!data) {
    return null;
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>User Growth Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickFormatter={(value) => format(new Date(value), 'MMM yy')}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(value) => format(new Date(value), 'MMMM yyyy')}
                formatter={(value) => [value.toLocaleString(), '']}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="totalUsers"
                stroke="#0088FE"
                name="Total Users"
              />
              <Line
                type="monotone"
                dataKey="activeUsers"
                stroke="#00C49F"
                name="Active Users"
              />
              <Line
                type="monotone"
                dataKey="premium"
                stroke="#FFBB28"
                name="Premium Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
